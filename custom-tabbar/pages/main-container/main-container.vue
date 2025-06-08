<template>
  <view class="main-container">
    <!-- 内容区域 -->
    <view ref="tabView" class="tab-view">
      <!-- 性能优化：首次使用v-if创建，后续使用visibility控制 -->
      <view 
        v-for="(tab, index) in tabList" 
        :key="index"
        class="tab-page"
        v-if="tab.init"
        :style="{ visibility: selectedIndex === index ? 'visible' : 'hidden' }"
      >
        <!-- 动态组件加载 -->
        <component 
          :is="tab.component" 
          :ref="`tab-${index}`"
          @scroll="onPageScroll"
        />
      </view>
    </view>
    
    <!-- 自定义底部导航栏 -->
    <view ref="tabbar" class="custom-tabbar">
      <!-- 导航项容器 -->
      <view class="tabbar-content">
        <!-- 所有导航项 -->
        <view 
          v-for="(item, index) in tabConfig" 
          :key="index"
          class="tab-item"
          :class="{ active: selectedIndex === index }"
          @tap="onTabClick(index)"
        >
          <!-- 特殊的AI图标 (Ai我) -->
          <view 
            v-if="index === 0 && item.isSpecial" 
            class="ai-special-container"
          >
            <!-- 滚动箭头 -->
            <text 
              v-if="showArrow"
              class="tab-icon arrow-icon"
              :class="{ active: selectedIndex === index }"
            >
              ⬆️
            </text>
            <!-- AI图标容器 -->
            <view v-else class="ai-icon-container" :class="{ active: selectedIndex === index }">
              <!-- 选中时显示GIF -->
              <image 
                v-if="selectedIndex === index"
                class="ai-gif-icon"
                :src="item.selectedIconPath"
                mode="aspectFit"
              />
              <!-- 未选中时显示PNG -->
              <image 
                v-else
                class="ai-png-icon"
                :src="item.iconPath"
                mode="aspectFit"
              />
            </view>
            <!-- 文字标签 - 只在未选中时显示 -->
            <text 
              v-if="!showArrow && selectedIndex !== index"
              class="tab-text"
              :class="{ active: selectedIndex === index }"
            >
              {{ item.text }}
            </text>
          </view>
          
          <!-- 其他普通图标 -->
          <template v-else>
            <!-- 图标容器 -->
            <view class="tab-icon-container">
              <image 
                class="tab-icon-image"
                :src="getIconSrc(item, index)"
                mode="aspectFit"
                :class="{ active: selectedIndex === index }"
                :key="`icon-${index}-${gifPlayStatus[index] || 'static'}`"
              />
            </view>
            <!-- 文字标签 -->
            <text 
              class="tab-text"
              :class="{ active: selectedIndex === index }"
            >
              {{ item.text }}
            </text>
          </template>
        </view>
      </view>
      
      
    </view>
  </view>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

// 导入页面组件
import IndexPage from '@/pages/index/index.vue'
import CategoryPage from '@/pages/category/index.vue'
import CartPage from '@/pages/cart/index.vue'
import UserPage from '@/pages/user/index.vue'

// 响应式数据
const selectedIndex = ref(0)
const showArrow = ref(false)
const tabViewHeight = ref(0)
const lastScrollTop = ref(0)
const gifPlayStatus = ref({}) // 记录每个tab的GIF播放状态

// Tab配置
const tabConfig = [
  { 
    component: IndexPage, 
    iconPath: '/static/tabbar/ai.png',
    selectedIconPath: '/static/icons/ai-robot.gif',
    text: 'Ai我',
    init: true,
    isSpecial: true  // 标记为特殊图标
  },
  { 
    component: CategoryPage, 
    iconPath: '/static/tabbar/hotspot.png',
    selectedIconPath: '/static/icons/hotspot.gif',
    selectedIconEndFrame: '/static/icons/hotspot-end.png', // 最后一帧静态图
    text: '热点',
    init: false,
    gifDuration: 240 // 自定义播放时长（毫秒）
  },
  { 
    component: CartPage, 
    iconPath: '/static/tabbar/chat.png',
    selectedIconPath: '/static/icons/chat.gif',
    selectedIconEndFrame: '/static/icons/chat-end.png', // 最后一帧静态图
    text: '聊天',
    init: false,
    gifDuration: 240 // 自定义播放时长（毫秒）
  },
  { 
    component: UserPage, 
    iconPath: '/static/tabbar/user.png',
    selectedIconPath: '/static/icons/user.gif',
    selectedIconEndFrame: '/static/icons/user-end.png', // 最后一帧静态图
    text: '我的',
    init: false,
    gifDuration: 240 // 自定义播放时长（毫秒）
  }
]

const tabList = ref(tabConfig)

// 获取图标源路径
const getIconSrc = (item, index) => {
  if (selectedIndex.value !== index) {
    // 未选中时显示普通图标
    return item.iconPath
  }
  
  // 选中时的逻辑
  if (index === 0) {
    // AI特殊处理，直接返回GIF
    return item.selectedIconPath
  }
  
  // 其他tab的GIF控制逻辑
  const playStatus = gifPlayStatus.value[index]
  if (playStatus === 'playing') {
    return item.selectedIconPath // 显示GIF
  } else if (playStatus === 'ended') {
    return item.selectedIconEndFrame || item.selectedIconPath // 显示最后一帧，如果没有则继续显示GIF
  } else {
    return item.selectedIconPath // 首次选中显示GIF
  }
}

// 处理GIF播放
const handleGifPlayback = (index) => {
  const config = tabConfig[index]
  
  // 每次切换都重新播放GIF，不再检查是否已播放过
  // 开始播放GIF
  gifPlayStatus.value[index] = 'playing'
  
  // 使用配置中的自定义播放时长
  const duration = config.gifDuration || 1000 // 默认1秒
  
  console.log(`🎬 ${config.text} GIF开始播放，时长: ${duration}ms`)
  
  // 只有配置了最后一帧图片才进行切换
  if (config.selectedIconEndFrame) {
    // 播放完成后切换到最后一帧
    setTimeout(() => {
      gifPlayStatus.value[index] = 'ended'
      console.log(`🎯 ${config.text} GIF播放完成，显示最后一帧`)
    }, duration)
  }
}

// 重置所有GIF播放状态（用于测试）
const resetAllGifStatus = () => {
  gifPlayStatus.value = {}
  console.log('🔄 所有GIF播放状态已重置')
}



// 生命周期
onMounted(() => {
  initContainer()
  // 监听页面滚动事件
  uni.$on('pageScroll', onPageScrollEvent)
})

onUnmounted(() => {
  uni.$off('pageScroll', onPageScrollEvent)
})

// 初始化容器
const initContainer = async () => {
  await nextTick()
  // 获取容器高度用于判断是否显示箭头
  uni.createSelectorQuery().in(this).select('.tab-view').boundingClientRect((data) => {
    if (data) {
      tabViewHeight.value = data.height
    }
  }).exec()
}

// Tab点击处理
const onTabClick = (index) => {
  console.log(`🔄 点击Tab: ${index}`)
  
  // 如果点击的是当前首页且显示箭头，则回到顶部
  if (selectedIndex.value === index && index === 0 && showArrow.value) {
    scrollToTop()
    return
  }
  
  // 如果点击的是同一个tab，不需要切换
  if (selectedIndex.value === index) {
    return
  }
  
  const previousIndex = selectedIndex.value
  
  // 如果切换到非首页，隐藏箭头
  if (index !== 0) {
    showArrow.value = false
  } else if (index === 0 && selectedIndex.value !== 0) {
    // 切回首页时，根据之前的滚动位置决定是否显示箭头
    showArrow.value = lastScrollTop.value > tabViewHeight.value
  }
  
  // 重置前一个tab的GIF状态（除了AI tab）
  if (previousIndex !== 0 && tabConfig[previousIndex].selectedIconPath.includes('.gif')) {
    delete gifPlayStatus.value[previousIndex]
  }
  
  // 懒加载：首次点击时初始化页面
  if (!tabList.value[index].init) {
    tabList.value[index].init = true
  }
  
  selectedIndex.value = index
  
  // 控制GIF播放（除了AI tab）
  if (index !== 0 && tabConfig[index].selectedIconPath.includes('.gif')) {
    handleGifPlayback(index)
  }
}



// 页面滚动事件处理
const onPageScrollEvent = (scrollTop) => {
  if (selectedIndex.value === 0) { // 只有首页才处理滚动
    showArrow.value = scrollTop > tabViewHeight.value
    lastScrollTop.value = scrollTop
  }
}

// 滚动到顶部
const scrollToTop = () => {
  showArrow.value = false
  // 通知首页滚动到顶部
  const tab0 = this.$refs['tab-0']
  if (tab0 && tab0[0] && typeof tab0[0].scrollToTop === 'function') {
    tab0[0].scrollToTop()
  }
}


// 页面滚动回调
const onPageScroll = (event) => {
  if (selectedIndex.value === 0) {
    onPageScrollEvent(event.detail?.scrollTop || 0)
  }
}
</script>

<style scoped>
/* 导入图标字体 */
@import url('/static/fonts/uni-icon.css');

/* 主容器 */
.main-container {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
  position: relative;
}

/* 内容区域 */
.tab-view {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 160rpx; /* 为底部TabBar留出空间 */
  overflow: hidden;
  /* #ifdef APP-PLUS || MP */
  bottom: calc(160rpx + env(safe-area-inset-bottom));
  /* #endif */
}

.tab-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
}

/* 自定义底部导航栏 */
.custom-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 160rpx;
  z-index: 1000;
  background-color: #ffffff;
  border-top: 1rpx solid #e5e5e5;
  box-shadow: 0 -4rpx 12rpx rgba(0, 0, 0, 0.1);
  /* #ifdef APP-PLUS || MP */
  padding-bottom: env(safe-area-inset-bottom);
  /* #endif */
}

/* 导航内容 */
.tabbar-content {
  width: 100%;
  height: 160rpx;
  display: flex;
  align-items: center;
  padding: 0 20rpx;
}

/* 导航项 */
.tab-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10rpx 10rpx 10rpx 10rpx;
  transform: translateY(0);
  min-height: 120rpx;
}

.tab-item.active {
  transform: translateY(0);
}

/* 图标容器 */
.tab-icon-container {
  position: relative;
  margin-bottom: 4rpx;
  height: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tab-item.active .tab-icon-container {
  transform: scale(1);
}

/* 图标样式 */
.tab-icon {
  font-size: 44rpx;
  color: #999;
  display: inline-block;
}

.tab-icon.active {
  color: #007aff;
}

.arrow-icon {
  font-size: 60rpx !important;
  font-weight: bold;
  color: #ff4757 !important;
}

/* PNG图标样式 */
.tab-icon-image {
  width: 44rpx;
  height: 44rpx;
  transition: all 0.1s ease-out; /* 添加平滑过渡 */
}

.tab-icon-image.active {
  transform: scale(1);
}

/* 特殊的AI图标样式 */
.ai-special-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}

.ai-icon-container {
  position: relative;
  margin-bottom: 4rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 未选中时的AI图标容器 - 小尺寸 */
.ai-icon-container:not(.active) {
  height: 60rpx;
  width: auto;
}

/* 选中时的AI图标容器 - 大尺寸 */
.ai-icon-container.active {
  height: 100rpx;
  width: 140rpx;
}

.ai-icon-container.active {
  transform: scale(1);
}

/* 选中时的GIF图标 - 大尺寸，铺满容器 */
.ai-gif-icon {
  width: 100%;
  height: 100%;
  border-radius: 12rpx;
  object-fit: cover;
  transition: opacity 0.1s ease-out; /* 添加平滑过渡 */
}

/* 未选中时的PNG图标 - 普通尺寸 */
.ai-png-icon {
  width: 44rpx;
  height: 44rpx;
  transition: all 0.1s ease-out; /* 添加平滑过渡 */
}

/* 动画图标基础样式 */
.animated-icon {
  transform-origin: center;
  backface-visibility: hidden;
}

/* 脉冲动画 */
.animation-pulse.animation-active {
  animation: iconPulse 1.5s ease-in-out infinite;
}

@keyframes iconPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
}

/* 旋转动画 */
.animation-rotate.animation-active {
  animation: iconRotate 1s linear;
}

@keyframes iconRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 弹跳动画 */
.animation-bounce.animation-active {
  animation: iconBounce 1s ease-in-out;
}

@keyframes iconBounce {
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-8rpx);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-4rpx);
  }
}

/* 彩虹颜色动画 */
.animation-rainbow.animation-active {
  animation: iconRainbow 2s ease-in-out;
}

@keyframes iconRainbow {
  0% { color: #ff0000; }      /* 红 */
  16.66% { color: #ff8800; }  /* 橙 */
  33.33% { color: #ffff00; }  /* 黄 */
  50% { color: #00ff00; }     /* 绿 */
  66.66% { color: #0088ff; }  /* 蓝 */
  83.33% { color: #8800ff; }  /* 靛 */
  100% { color: #ff0088; }    /* 紫 */
}

/* 摇摆动画 */
.animation-swing.animation-active {
  animation: iconSwing 1.5s ease-in-out infinite;
}

@keyframes iconSwing {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-10deg);
  }
}

/* 心跳动画 */
.animation-heartbeat.animation-active {
  animation: iconHeartbeat 1.2s ease-in-out infinite;
}

@keyframes iconHeartbeat {
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1);
  }
}

/* 文字样式 */
.tab-text {
  font-size: 16rpx;
  color: #999;
  text-align: center;
  margin-top: 2rpx;
}

.tab-text.active {
  color: #ff4757;
  font-weight: 500;
}

/* GIF图标不需要额外动画，只保持基本的缩放效果 */



/* H5端适配 */
/* #ifdef H5 */
.custom-tabbar {
  height: 80px;
}

.tab-view {
  bottom: 80px !important;
}

.tabbar-content {
  height: 80px;
}

.tab-item {
  padding: 5px 5px 5px 5px;
  min-height: 60px;
}

.tab-icon {
  font-size: 22px;
}

.tab-icon-image {
  width: 22px;
  height: 22px;
}

.tab-icon-container {
  height: 30px;
  margin-bottom: 2px;
}

/* 未选中时的AI图标容器 - 小尺寸 */
.ai-icon-container:not(.active) {
  margin-bottom: 2px;
  height: 30px;
  width: auto;
}

/* 选中时的AI图标容器 - 大尺寸 */
.ai-icon-container.active {
  margin-bottom: 2px;
  height: 50px;
  width: 70px;
}

.ai-gif-icon {
  width: 100%;
  height: 100%;
}

.ai-png-icon {
  width: 22px;
  height: 22px;
}

.arrow-icon {
  font-size: 30px !important;
}

.tab-text {
  font-size: 8px;
}

/* #endif */
</style> 