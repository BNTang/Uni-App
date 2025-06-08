<template>
	<scroll-view 
		class="page-scroll"
		:scroll-y="true"
		:scroll-with-animation="true"
		:scroll-top="scrollTop"
		@scroll="onPageScroll"
		:enhanced="true"
	>
		<view class="content">
			<image class="logo" src="/static/logo.png"></image>
			<view class="text-area">
				<text class="title">{{title}}</text>
				<text class="subtitle">高级自定义TabBar示例</text>
			</view>
		
		<!-- TabBar验证区域 -->
		<view class="verification-section">
			<text class="section-title">🔍 TabBar验证</text>
			<view class="verification-info">
				<text class="info-text">✅ 如果看到这个页面，说明自定义TabBar正在工作</text>
				<text class="info-text">🎯 请查看TabBar右上角的蓝色标识</text>
				<text class="info-text">🌊 点击TabBar项体验水波纹效果</text>
				<text class="info-text">📱 打开开发者工具查看控制台日志</text>
			</view>
		</view>

		<!-- 对比说明区域 -->
		<view class="comparison-section">
			<text class="section-title">⚡ 原生 vs 自定义对比</text>
			<view class="comparison-info">
				<text class="current-status">当前模式: {{ currentMode }}</text>
				<text class="switch-hint">💡 修改 pages.json 中的 "custom" 值来切换模式</text>
				<button @tap="showComparison" type="warn" size="mini">📊 查看详细对比</button>
			</view>
		</view>

		<!-- TabBar API测试按钮 -->
		<view class="test-buttons">
			<button @tap="verifyCustomTabbar" type="primary" size="mini">🔍 验证自定义TabBar</button>
			<button @tap="testRippleEffect" type="primary" size="mini">🌊 测试水波纹效果</button>
			<button @tap="testSetBadge" type="primary" size="mini">设置购物车角标</button>
			<button @tap="testRemoveBadge" type="default" size="mini">移除购物车角标</button>
			<button @tap="testShowRedDot" type="warn" size="mini">显示分类红点</button>
			<button @tap="testHideRedDot" type="default" size="mini">隐藏分类红点</button>
			<button @tap="inspectTabbarInfo" type="warn" size="mini">📊 查看TabBar信息</button>
		</view>
		
		<!-- 滚动内容区域 -->
		<view class="scroll-content">
			<view class="scroll-item" v-for="(item, index) in scrollItems" :key="index">
				<text class="item-title">{{ item.title }}</text>
				<text class="item-content">{{ item.content }}</text>
			</view>
		</view>
		
		<!-- 底部留白 -->
		<view class="bottom-spacer"></view>
	</view>
	</scroll-view>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'

const title = ref('首页')
const scrollTop = ref(0)
const oldScrollTop = ref(0)

// 滚动内容数据
const scrollItems = ref([])

// 初始化滚动内容
onMounted(() => {
	generateScrollItems()
})

// 生成滚动内容
const generateScrollItems = () => {
	for (let i = 1; i <= 50; i++) {
		scrollItems.value.push({
			title: `内容项 ${i}`,
			content: `这是第 ${i} 个内容项，用于演示滚动效果和箭头切换功能。当页面滚动超过一屏时，首页图标会变成向上箭头。`
		})
	}
}

// 检测当前TabBar模式
const currentMode = computed(() => {
	// 检查是否有自定义TabBar的标识元素
	const hasCustomIndicator = document?.querySelector?.('.custom-tabbar-indicator')
	const hasCustomTabbar = document?.querySelector?.('.custom-tabbar')
	
	if (hasCustomIndicator && hasCustomTabbar) {
		return '🎯 自定义TabBar (custom: true)'
	} else {
		return '🏠 原生TabBar (custom: false)'
	}
})

// 页面滚动事件
const onPageScroll = (event) => {
	const currentScrollTop = event.detail.scrollTop
	oldScrollTop.value = currentScrollTop
	
	// 发送滚动事件给父容器
	uni.$emit('pageScroll', currentScrollTop)
}

// 滚动到顶部方法（供父容器调用）
const scrollToTop = () => {
	scrollTop.value = oldScrollTop.value
	nextTick(() => {
		scrollTop.value = 0
	})
}

// 暴露方法给父组件
defineExpose({
	scrollToTop
})

// 页面生命周期
const onLoad = () => {
	console.log('首页加载')
}

// 测试设置角标
const testSetBadge = () => {
	uni.setTabBarBadge({
		index: 2, // 购物车
		text: '5'
	}).then(res => {
		console.log('设置角标成功:', res)
		uni.showToast({
			title: '设置角标成功',
			icon: 'success'
		})
	}).catch(err => {
		console.error('设置角标失败:', err)
	})
}

// 测试移除角标
const testRemoveBadge = () => {
	uni.removeTabBarBadge({
		index: 2 // 购物车
	}).then(res => {
		console.log('移除角标成功:', res)
		uni.showToast({
			title: '移除角标成功',
			icon: 'success'
		})
	}).catch(err => {
		console.error('移除角标失败:', err)
	})
}

// 测试显示红点
const testShowRedDot = () => {
	uni.showTabBarRedDot({
		index: 1 // 分类
	}).then(res => {
		console.log('显示红点成功:', res)
		uni.showToast({
			title: '显示红点成功',
			icon: 'success'
		})
	}).catch(err => {
		console.error('显示红点失败:', err)
	})
}

// 测试隐藏红点
const testHideRedDot = () => {
	uni.hideTabBarRedDot({
		index: 1 // 分类
	}).then(res => {
		console.log('隐藏红点成功:', res)
		uni.showToast({
			title: '隐藏红点成功',
			icon: 'success'
		})
	}).catch(err => {
		console.error('隐藏红点失败:', err)
	})
}

// 验证自定义TabBar
const verifyCustomTabbar = () => {
	console.log('=== 🔍 自定义TabBar验证 ===')
	console.log('1. 如果你看到这条消息，说明页面JavaScript正常运行')
	console.log('2. 请检查页面底部是否有TabBar')
	console.log('3. 请检查TabBar右上角是否有🎯标识')
	console.log('4. 请检查pages.json中是否设置了"custom": true')
	
	uni.showModal({
		title: '自定义TabBar验证',
		content: '✅ 验证完成！\n\n如果你看到：\n1. TabBar底部导航栏\n2. 右上角🎯标识\n3. 控制台日志\n\n说明自定义TabBar正在正常工作！',
		showCancel: false
	})
}

// 查看TabBar信息
const inspectTabbarInfo = () => {
	const tabbarInfo = {
		'组件类型': '自定义TabBar组件',
		'Vue版本': 'Vue3 (script setup)',
		'文件位置': 'components/custom-tabbar/custom-tabbar.vue',
		'配置文件': 'pages.json (custom: true)',
		'API兼容': 'utils/tabbar.js',
		'当前页面': 'pages/index/index.vue'
	}
	
	console.log('=== 📊 TabBar详细信息 ===')
	console.table(tabbarInfo)
	
	uni.showModal({
		title: 'TabBar详细信息',
		content: `📊 组件信息：
		
✅ 类型：自定义TabBar组件
🎯 框架：Vue3 (script setup)
📁 位置：components/custom-tabbar/
⚙️ 配置：pages.json (custom: true)
🔧 API：utils/tabbar.js兼容层

更多信息请查看控制台！`,
		showCancel: false
	})
}

// 显示详细对比
const showComparison = () => {
	const isCustom = currentMode.value.includes('自定义')
	
	const comparisonText = `📊 TabBar模式对比
	
🔍 当前状态: ${currentMode.value}

${isCustom ? '🎯 自定义TabBar特点:' : '🏠 原生TabBar特点:'}
${isCustom ? 
	`✅ 右上角有🎯标识
✅ 支持深度样式定制  
✅ Vue3 script setup语法
✅ 自定义动画效果
✅ 复杂交互功能
⚠️ 需要更多代码维护` : 
	`✅ 系统原生组件，性能最优
✅ 无需额外代码维护
✅ 完美平台兼容性
❌ 样式定制能力有限
❌ 无法实现复杂交互
❌ 无🎯自定义标识`}

💡 切换方法:
1. 修改 pages.json 中的 "custom" 值
2. custom: true → 自定义TabBar  
3. custom: false → 原生TabBar
4. 重启项目查看效果`
	
	uni.showModal({
		title: 'TabBar模式对比',
		content: comparisonText,
		showCancel: false
	})
	
	console.log('=== 📊 TabBar模式详细对比 ===')
	console.log('当前模式:', currentMode.value)
	console.log('自定义TabBar优势: 高度定制、Vue3支持、复杂交互')
	console.log('原生TabBar优势: 性能最优、兼容性好、维护简单')
	console.log('切换方法: 修改pages.json中的custom值')
}

// 测试水波纹效果
const testRippleEffect = () => {
	uni.showModal({
		title: '🌊 水波纹效果说明',
		content: `水波纹效果已添加到TabBar中！

🎯 使用方法:
1. 点击任意TabBar项
2. 观察从点击位置扩散的水波纹
3. 不同状态有不同颜色效果

✨ 特性:
• H5端: 从点击位置扩散
• 小程序端: 居中扩散
• 选中项有特殊效果
• 支持主题色适配

现在就去点击TabBar体验吧！`,
		showCancel: false
	})
	
	console.log('🌊 水波纹效果说明:')
	console.log('- H5端支持精确点击位置水波纹')
	console.log('- 小程序端支持居中水波纹效果')
	console.log('- 选中项和普通项有不同的视觉效果')
	console.log('- 动画时长600ms，使用CSS3硬件加速')
}
</script>

<style scoped>
	.page-scroll {
		height: 100%;
		width: 100%;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		padding: 40rpx 20rpx;
		min-height: 100vh;
	}

	/* 滚动内容区域 */
	.scroll-content {
		width: 100%;
		max-width: 500rpx;
		margin-top: 40rpx;
	}

	.scroll-item {
		background-color: #fff;
		border-radius: 16rpx;
		padding: 30rpx;
		margin-bottom: 20rpx;
		box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
		border: 1rpx solid #f0f0f0;
	}

	.item-title {
		font-size: 32rpx;
		font-weight: bold;
		color: #333;
		display: block;
		margin-bottom: 16rpx;
	}

	.item-content {
		font-size: 26rpx;
		color: #666;
		line-height: 1.6;
		display: block;
	}

	/* 底部留白 */
	.bottom-spacer {
		height: 40rpx;
		width: 100%;
	}

	.logo {
		height: 160rpx;
		width: 160rpx;
		margin: 60rpx auto 30rpx;
	}

	.text-area {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 60rpx;
	}

	.title {
		font-size: 36rpx;
		color: #333;
		margin-bottom: 10rpx;
	}
	
	.subtitle {
		font-size: 28rpx;
		color: #666;
	}
	
	.test-buttons {
		display: flex;
		flex-direction: column;
		gap: 20rpx;
		width: 100%;
		max-width: 500rpx;
	}
	
	.test-buttons button {
		margin: 0;
	}
	
	/* 验证区域样式 */
	.verification-section {
		width: 100%;
		max-width: 500rpx;
		background-color: #f8f9fa;
		border-radius: 16rpx;
		padding: 30rpx;
		margin-bottom: 40rpx;
		border: 2rpx solid #e9ecef;
	}
	
	.section-title {
		font-size: 32rpx;
		font-weight: bold;
		color: #007aff;
		display: block;
		margin-bottom: 20rpx;
		text-align: center;
	}
	
	.verification-info {
		display: flex;
		flex-direction: column;
		gap: 12rpx;
	}
	
	.info-text {
		font-size: 24rpx;
		color: #333;
		line-height: 1.5;
		padding: 8rpx 0;
		border-bottom: 1rpx solid #e9ecef;
	}
	
	.info-text:last-child {
		border-bottom: none;
	}
	
	/* 对比区域样式 */
	.comparison-section {
		width: 100%;
		max-width: 500rpx;
		background-color: #fff3cd;
		border-radius: 16rpx;
		padding: 30rpx;
		margin-bottom: 40rpx;
		border: 2rpx solid #ffeaa7;
	}
	
	.comparison-info {
		display: flex;
		flex-direction: column;
		gap: 15rpx;
		align-items: center;
	}
	
	.current-status {
		font-size: 28rpx;
		font-weight: bold;
		color: #e67e22;
		text-align: center;
		padding: 12rpx 0;
		background-color: rgba(230, 126, 34, 0.1);
		border-radius: 8rpx;
		width: 100%;
	}
	
	.switch-hint {
		font-size: 22rpx;
		color: #666;
		text-align: center;
		line-height: 1.4;
	}
</style>
