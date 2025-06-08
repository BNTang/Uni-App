<template>
	<view 
		class="custom-tabbar"
		:class="[direction]"
		:style="tabbarStyle"
	>
		<!-- 自定义TabBar标识 -->
		<view class="custom-tabbar-indicator" title="这是自定义TabBar">
			<text class="indicator-text">🎯</text>
		</view>
		<view 
			v-for="(item, index) in tabList"
			:key="index"
			class="tabbar-item"
			:class="{ active: selected === index }"
			@tap="onTabItemTap(index)"
			@touchstart="onTouchStart($event, index)"
		>
			<!-- 水波纹容器 -->
			<view class="ripple-container" :ref="`ripple-${index}`"></view>
			<!-- 图标 -->
			<view class="tabbar-icon" v-if="showIcon">
				<image 
					:src="selected === index ? item.selectedIconPath : item.iconPath"
					class="icon-image"
					mode="aspectFit"
				/>
				<!-- 红点 -->
				<view 
					v-if="item.showRedDot && !item.badge"
					class="red-dot"
				></view>
				<!-- 角标 -->
				<view 
					v-if="item.badge && !item.showRedDot"
					class="badge"
				>
					<text class="badge-text">{{ item.badge }}</text>
				</view>
			</view>
			
			<!-- 文字 -->
			<text 
				class="tabbar-text"
				:style="{ color: selected === index ? props.selectedColor : props.color }"
			>
				{{ item.text }}
			</text>
		</view>
	</view>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Props定义
const props = defineProps({
	// tabbar项数据
	tabs: {
		type: Array,
		default: () => [],
		required: true
	},
	// 当前选中项索引
	selected: {
		type: Number,
		default: 0
	},
	// 是否显示图标
	showIcon: {
		type: Boolean,
		default: true
	},
	// 排列方向
	direction: {
		type: String,
		default: 'horizontal', // horizontal | vertical
		validator: (value) => ['horizontal', 'vertical'].includes(value)
	},
	// 默认颜色
	color: {
		type: String,
		default: '#999999'
	},
	// 选中颜色
	selectedColor: {
		type: String,
		default: '#007aff'
	},
	// 自定义样式
	customStyle: {
		type: Object,
		default: () => ({})
	}
})

// Emits定义
const emit = defineEmits(['tabChange', 'onTabItemTap'])

// 响应式数据
const tabList = ref([])

// 计算属性
const tabbarStyle = computed(() => {
	return {
		backgroundColor: '#ffffff',
		...props.customStyle
	}
})

// 初始化tabBar数据
const initTabBarData = () => {
	if (props.tabs && props.tabs.length > 0) {
		tabList.value = props.tabs.map(item => ({
			...item,
			showRedDot: false,
			badge: ''
		}))
		console.log('✅ 自定义TabBar初始化完成:', tabList.value)
	} else {
		console.warn('⚠️ 自定义TabBar需要传入tabs参数')
	}
}

// 水波纹效果
const createRipple = (event, index) => {
	// 获取点击位置和元素信息
	const target = event.currentTarget
	const rect = target.getBoundingClientRect()
	const size = Math.max(rect.width, rect.height)
	const x = event.clientX - rect.left - size / 2
	const y = event.clientY - rect.top - size / 2
	
	// 创建水波纹元素
	const ripple = document.createElement('view')
	ripple.classList.add('ripple')
	ripple.style.width = ripple.style.height = size + 'px'
	ripple.style.left = x + 'px'
	ripple.style.top = y + 'px'
	
	// 找到水波纹容器并添加元素
	const container = target.querySelector('.ripple-container')
	if (container) {
		container.appendChild(ripple)
		
		// 触发动画
		requestAnimationFrame(() => {
			ripple.classList.add('ripple-animate')
		})
		
		// 动画结束后清理
		setTimeout(() => {
			if (ripple && ripple.parentNode) {
				ripple.parentNode.removeChild(ripple)
			}
		}, 600)
	}
}

// 小程序端水波纹效果（使用CSS动画）
const createMiniProgramRipple = (index) => {
	const rippleContainers = document.querySelectorAll('.ripple-container')
	const container = rippleContainers[index]
	
	if (container) {
		// 创建水波纹元素
		const ripple = document.createElement('view')
		ripple.classList.add('ripple', 'ripple-center')
		container.appendChild(ripple)
		
		// 触发动画
		setTimeout(() => {
			ripple.classList.add('ripple-animate')
		}, 10)
		
		// 动画结束后清理
		setTimeout(() => {
			if (ripple && ripple.parentNode) {
				ripple.parentNode.removeChild(ripple)
			}
		}, 600)
	}
}

// 触摸开始事件（用于水波纹效果）
const onTouchStart = (event, index) => {
	// #ifdef H5
	if (event.clientX !== undefined) {
		createRipple(event, index)
	} else {
		createMiniProgramRipple(index)
	}
	// #endif
	
	// #ifdef MP
	createMiniProgramRipple(index)
	// #endif
}

// Tab点击事件
const onTabItemTap = (index) => {
	const item = tabList.value[index]
	if (!item) return
	
	// 如果点击的是当前选中项，添加弹跳动画
	if (props.selected === index) {
		triggerBounceAnimation(index)
		return
	}
	
	console.log(`🔄 自定义TabBar点击: ${item.text} (索引: ${index}) 🌊`)
	
	// 触发切换动画
	triggerSwitchAnimation(props.selected, index)
	
	// 触发事件
	emit('tabChange', index, item)
	emit('onTabItemTap', {
		index,
		pagePath: item.pagePath,
		text: item.text
	})
	
	// 执行页面跳转
	uni.switchTab({
		url: `/${item.pagePath}`,
		fail: (err) => {
			console.error('页面跳转失败:', err)
		}
	})
}

// 触发弹跳动画（点击当前选中项时）
const triggerBounceAnimation = (index) => {
	console.log(`🎯 当前项弹跳动画: ${index}`)
	// 这里可以添加额外的弹跳动画逻辑
}

// 触发切换动画
const triggerSwitchAnimation = (fromIndex, toIndex) => {
	console.log(`🔄 切换动画: ${fromIndex} -> ${toIndex}`)
	// 可以在这里添加更复杂的切换动画逻辑
}

// 设置tabBar角标
const setTabBarBadge = (index, text) => {
	if (tabList.value[index]) {
		tabList.value[index].badge = text
		tabList.value[index].showRedDot = false
	}
}

// 移除tabBar角标
const removeTabBarBadge = (index) => {
	if (tabList.value[index]) {
		tabList.value[index].badge = ''
	}
}

// 显示tabBar红点
const showTabBarRedDot = (index) => {
	if (tabList.value[index]) {
		tabList.value[index].showRedDot = true
		tabList.value[index].badge = ''
	}
}

// 隐藏tabBar红点
const hideTabBarRedDot = (index) => {
	if (tabList.value[index]) {
		tabList.value[index].showRedDot = false
	}
}

// 暴露方法给外部调用
defineExpose({
	setTabBarBadge,
	removeTabBarBadge,
	showTabBarRedDot,
	hideTabBarRedDot,
	tabList
})

// 组件挂载
onMounted(() => {
	initTabBarData()
})
</script>

<style scoped>
.custom-tabbar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 9999;
	display: flex;
	background-color: #ffffff;
	border-top: 1rpx solid #e5e5e5;
	/* #ifdef H5 */
	padding-bottom: 0;
	/* #endif */
	/* #ifdef APP-PLUS || MP */
	padding-bottom: env(safe-area-inset-bottom);
	/* #endif */
}

.custom-tabbar.horizontal {
	flex-direction: row;
	height: calc(100rpx + env(safe-area-inset-bottom));
	align-items: center;
}

.custom-tabbar.vertical {
	flex-direction: column;
	width: 120rpx;
	height: 100vh;
	top: 0;
	bottom: auto;
	right: auto;
	border-top: none;
	border-right: 1rpx solid #e5e5e5;
}

.tabbar-item {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	overflow: hidden; /* 确保水波纹不溢出 */
	transform: translateY(0);
}

.horizontal .tabbar-item {
	padding: 10rpx;
	min-height: 100rpx;
}

.vertical .tabbar-item {
	padding: 20rpx 10rpx;
	margin-bottom: 20rpx;
}

.vertical .tabbar-item.active {
	transform: translateX(8rpx) scale(1.05);
	box-shadow: 4rpx 0 12rpx rgba(0, 122, 255, 0.15);
	border-radius: 0 24rpx 24rpx 0;
	background: linear-gradient(90deg, rgba(0, 122, 255, 0.05) 0%, transparent 100%);
}

.vertical .tabbar-item:hover {
	transform: translateX(4rpx) scale(1.02);
}

.horizontal .tabbar-item.active {
	transform: translateY(-4rpx) scale(1.05);
	box-shadow: 0 4rpx 12rpx rgba(0, 122, 255, 0.15);
}

.horizontal .tabbar-item:hover {
	transform: translateY(-2rpx) scale(1.02);
}

.tabbar-icon {
	position: relative;
	margin-bottom: 8rpx;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	transform: scale(1);
}

.tabbar-item.active .tabbar-icon {
	transform: scale(1.1);
	animation: iconBounce 0.4s ease-out;
}

.vertical .tabbar-icon {
	margin-bottom: 12rpx;
}

.icon-image {
	width: 48rpx;
	height: 48rpx;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	opacity: 0.8;
}

.tabbar-item.active .icon-image {
	opacity: 1;
	filter: brightness(1.1);
}

.vertical .icon-image {
	width: 40rpx;
	height: 40rpx;
}

.tabbar-text {
	font-size: 20rpx;
	text-align: center;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	opacity: 0.7;
	transform: translateY(0);
	font-weight: 400;
}

.tabbar-item.active .tabbar-text {
	opacity: 1;
	transform: translateY(-2rpx);
	font-weight: 500;
	animation: textGlow 0.4s ease-out;
}

.vertical .tabbar-text {
	font-size: 18rpx;
}

.red-dot {
	position: absolute;
	top: -4rpx;
	right: -4rpx;
	width: 16rpx;
	height: 16rpx;
	background-color: #ff0000;
	border-radius: 50%;
	animation: pulse 2s infinite;
	transform: scale(1);
	transition: transform 0.3s ease;
}

.tabbar-item.active .red-dot {
	transform: scale(1.1);
	animation: pulse 1.5s infinite;
}

.badge {
	position: absolute;
	top: -8rpx;
	right: -8rpx;
	min-width: 32rpx;
	height: 24rpx;
	background-color: #ff0000;
	border-radius: 12rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 6rpx;
	animation: bounce 3s infinite;
	transform: scale(1);
	transition: transform 0.3s ease;
}

.tabbar-item.active .badge {
	transform: scale(1.05);
	animation: bounce 2s infinite;
}

.badge-text {
	font-size: 16rpx;
	color: #ffffff;
	line-height: 1;
}

/* 自定义TabBar标识样式 */
.custom-tabbar-indicator {
	position: absolute;
	top: 2rpx;
	right: 2rpx;
	z-index: 10000;
	background-color: rgba(0, 122, 255, 0.1);
	border-radius: 50%;
	width: 24rpx;
	height: 24rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0.7;
}

.indicator-text {
	font-size: 12rpx;
}

/* 水波纹效果样式 */
.ripple-container {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	pointer-events: none;
	overflow: hidden;
}

.ripple {
	position: absolute;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.6);
	transform: scale(0);
	opacity: 1;
	pointer-events: none;
}

/* 居中水波纹（用于小程序端） */
.ripple-center {
	width: 80rpx;
	height: 80rpx;
	left: 50%;
	top: 50%;
	margin-left: -40rpx;
	margin-top: -40rpx;
}

.ripple-animate {
	animation: ripple-effect 0.6s ease-out;
}

@keyframes ripple-effect {
	0% {
		transform: scale(0);
		opacity: 1;
	}
	100% {
		transform: scale(1);
		opacity: 0;
	}
}

/* 图标弹跳动画 */
@keyframes iconBounce {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.2);
	}
	100% {
		transform: scale(1.1);
	}
}

/* 文字发光动画 */
@keyframes textGlow {
	0% {
		transform: translateY(0);
		opacity: 0.7;
	}
	50% {
		transform: translateY(-4rpx);
		opacity: 1;
		text-shadow: 0 0 8rpx rgba(0, 122, 255, 0.3);
	}
	100% {
		transform: translateY(-2rpx);
		opacity: 1;
		text-shadow: none;
	}
}

/* 选中项整体动画 */
@keyframes itemActivate {
	0% {
		transform: translateY(0) scale(1);
	}
	30% {
		transform: translateY(-6rpx) scale(1.1);
	}
	100% {
		transform: translateY(-4rpx) scale(1.05);
	}
}

/* 红点脉冲动画 */
@keyframes pulse {
	0%, 100% {
		transform: scale(1);
		opacity: 1;
	}
	50% {
		transform: scale(1.2);
		opacity: 0.8;
	}
}

/* 角标弹跳动画 */
@keyframes bounce {
	0%, 100% {
		transform: translateY(0) scale(1);
	}
	25% {
		transform: translateY(-2rpx) scale(1.05);
	}
	50% {
		transform: translateY(0) scale(1);
	}
	75% {
		transform: translateY(-1rpx) scale(1.02);
	}
}

/* 不同主题的水波纹颜色 */
.custom-tabbar.light .ripple {
	background-color: rgba(0, 122, 255, 0.3);
}

.custom-tabbar.dark .ripple {
	background-color: rgba(255, 255, 255, 0.4);
}

/* 选中项的水波纹效果 */
.tabbar-item.active .ripple {
	background-color: rgba(0, 122, 255, 0.5);
}

/* H5端适配 */
/* #ifdef H5 */
.custom-tabbar {
	/* 确保在H5端正确显示 */
	position: fixed !important;
	bottom: 0 !important;
	left: 0 !important;
	right: 0 !important;
	z-index: 9999 !important;
	display: flex !important;
	background-color: #ffffff;
	border-top: 1px solid #e5e5e5;
	padding-bottom: 0;
	box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
}

.custom-tabbar.horizontal {
	height: 60px !important;
	min-height: 60px !important;
}
/* #endif */

/* 小程序端适配 */
/* #ifdef MP */
.custom-tabbar {
	/* 小程序端特殊样式 */
}
/* #endif */

/* App端适配 */
/* #ifdef APP-PLUS */
.custom-tabbar {
	/* App端特殊样式 */
}
/* #endif */
</style> 