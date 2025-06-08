<template>
	<view id="app">
		<!-- 自定义TabBar组件 -->
		<custom-tabbar 
			ref="customTabbar"
			:selected="selectedTabIndex"
			:show-icon="true"
			direction="horizontal"
			@tabChange="onTabChange"
		/>
	</view>
</template>

<script>
import { ref, onMounted } from 'vue'
import CustomTabbar from './components/custom-tabbar/custom-tabbar.vue'

export default {
	components: {
		CustomTabbar
	},
	setup() {
		// 当前选中的tab索引
		const selectedTabIndex = ref(0)
		const customTabbar = ref(null)

		// Tab切换事件
		const onTabChange = (index, item) => {
			selectedTabIndex.value = index
			console.log('Tab切换:', index, item)
		}

		// 应用生命周期
		onMounted(async () => {
			// 动态导入tabbar工具
			const { default: customTabBar } = await import('./utils/tabbar.js')
			
			// 注册TabBar实例到工具类
			if (customTabbar.value) {
				customTabBar.setInstance(customTabbar.value)
			}
			
			console.log('App启动，TabBar初始化完成')
		})

		return {
			selectedTabIndex,
			customTabbar,
			onTabChange
		}
	},
	
	onLaunch: function() {
		console.log('App Launch')
	},
	onShow: function() {
		console.log('App Show')
	},
	onHide: function() {
		console.log('App Hide')
	}
}
</script>

<style>
/* 每个页面公共css */
#app {
	height: 100vh;
}

/* 为页面内容添加底部间距，避免被TabBar遮挡 */
page {
	padding-bottom: calc(100rpx + env(safe-area-inset-bottom));
}
</style>
