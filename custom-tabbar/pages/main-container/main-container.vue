<template>
  <view class="main-container">
    <!-- 内容区域 -->
    <view ref="tabView" class="tab-view">
      <!-- 性能优化：首次使用v-if创建，后续使用visibility控制 -->
      <!-- 首页 -->
      <view 
        class="tab-page"
        v-if="tabList[0].init"
        :style="{ visibility: selectedIndex === 0 ? 'visible' : 'hidden' }"
      >
        <IndexPage 
          ref="tab-0"
        />
      </view>
      
      <!-- 热点页 -->
      <view 
        class="tab-page"
        v-if="tabList[1].init"
        :style="{ visibility: selectedIndex === 1 ? 'visible' : 'hidden' }"
      >
        <CategoryPage 
          ref="tab-1"
        />
      </view>
      
      <!-- 聊天页 -->
      <view 
        class="tab-page"
        v-if="tabList[2].init"
        :style="{ visibility: selectedIndex === 2 ? 'visible' : 'hidden' }"
      >
        <CartPage 
          ref="tab-2"
        />
      </view>
      
      <!-- 我的页 -->
      <view 
        class="tab-page"
        v-if="tabList[3].init"
        :style="{ visibility: selectedIndex === 3 ? 'visible' : 'hidden' }"
      >
        <UserPage 
          ref="tab-3"
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
            <!-- AI图标容器 -->
            <view class="ai-icon-container" :class="{ active: selectedIndex === index }">
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
            <!-- 文字标签 -->
            <text 
              v-if="selectedIndex !== index"
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
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 导入页面组件
import IndexPage from '@/pages/index/index.vue'
import CategoryPage from '@/pages/category/index.vue'
import CartPage from '@/pages/cart/index.vue'
import UserPage from '@/pages/user/index.vue'

// 响应式数据
const selectedIndex = ref(0)
const gifPlayStatus = ref({}) // 记录每个tab的GIF播放状态

// Tab配置 - 微信小程序兼容版本
const tabConfig = [
  { 
    iconPath: '/static/tabbar/ai.png',
    selectedIconPath: '/static/icons/ai-robot.gif', // AI使用GIF
    text: 'Ai我',
    init: true,
    isSpecial: true  // 标记为特殊图标
  },
  { 
    iconPath: '/static/tabbar/hotspot.png',
    selectedIconPath: '/static/icons/hotspot.gif', // 恢复使用GIF，确保显示正常
    selectedIconEndFrame: '/static/icons/hotspot-end.png', // 最后一帧静态图
    text: '热点',
    init: false,
    gifDuration: 240
  },
  { 
    iconPath: '/static/tabbar/chat.png',
    selectedIconPath: '/static/icons/chat.gif', // 恢复使用GIF，确保显示正常
    selectedIconEndFrame: '/static/icons/chat-end.png', // 最后一帧静态图
    text: '聊天',
    init: false,
    gifDuration: 240
  },
  { 
    iconPath: '/static/tabbar/user.png',
    selectedIconPath: '/static/icons/user.gif', // 恢复使用GIF，确保显示正常
    selectedIconEndFrame: '/static/icons/user-end.png', // 最后一帧静态图
    text: '我的',
    init: false,
    gifDuration: 240
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
  
  // 每次切换都重新播放GIF
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

// 重置所有GIF播放状态
const resetAllGifStatus = () => {
  gifPlayStatus.value = {}
  console.log('🔄 所有GIF播放状态已重置')
}



// 生命周期
onMounted(() => {
  // 页面初始化
})

onUnmounted(() => {
  // 页面销毁
})



// Tab点击处理
const onTabClick = (index) => {
  console.log(`🔄 点击Tab: ${index}`)
  
  // 如果点击的是同一个tab，不需要切换
  if (selectedIndex.value === index) {
    return
  }
  
  const previousIndex = selectedIndex.value
  
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

/* 禁用H5端的tab-item动画，避免回弹效果 */
/* #ifndef H5 */
.tab-item.active {
  transform: translateY(0);
}
/* #endif */

/* 图标容器 */
.tab-icon-container {
  position: relative;
  margin-bottom: 4rpx;
  height: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 禁用H5端的图标容器缩放，避免回弹效果 */
/* #ifndef H5 */
.tab-item.active .tab-icon-container {
  transform: scale(1);
}
/* #endif */

/* 图标样式 */
.tab-icon {
  font-size: 44rpx;
  color: #999;
  display: inline-block;
}

.tab-icon.active {
  color: #007aff;
}



/* PNG图标样式 */
.tab-icon-image {
  width: 44rpx;
  height: 44rpx;
  transition: all 0.1s ease-out; /* 添加平滑过渡 */
}

/* 非H5端的图标缩放效果 */
/* #ifndef H5 */
.tab-icon-image.active {
  transform: scale(1);
}
/* #endif */

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

/* 禁用H5端的AI图标容器缩放，避免回弹效果 */
/* #ifndef H5 */
.ai-icon-container.active {
  transform: scale(1);
}
/* #endif */

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

/* 微信小程序兼容的简单动画效果 - 仅在小程序端生效 */
/* #ifndef H5 */
.tab-icon-image.active {
  animation: simpleScale 0.2s ease-in-out;
}

@keyframes simpleScale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
/* #endif */

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





/* H5端适配 */
/* #ifdef H5 */
/* H5端禁用所有可能引起回弹的动画和transform */
.tab-item {
  transform: none !important;
  animation: none !important;
}

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

/* H5端禁用回弹动画，只保留平滑过渡 */
.tab-icon-image {
  width: 22px;
  height: 22px;
  transition: transform 0.15s ease-out; /* 只使用transform过渡，避免回弹 */
}

.tab-icon-image.active {
  transform: scale(1.05); /* 轻微缩放，避免过度动画 */
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
  transition: all 0.15s ease-out;
}

/* 选中时的AI图标容器 - 大尺寸 */
.ai-icon-container.active {
  margin-bottom: 2px;
  height: 50px;
  width: 70px;
  transition: all 0.15s ease-out;
}

.ai-gif-icon {
  width: 100%;
  height: 100%;
}

.ai-png-icon {
  width: 22px;
  height: 22px;
}



.tab-text {
  font-size: 8px;
  transition: color 0.15s ease-out; /* 添加文字颜色过渡 */
}

/* #endif */
</style> 