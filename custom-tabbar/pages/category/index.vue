<template>
	<view class="content">
		<view class="text-area">
			<text class="title">分类页面</text>
			<text class="desc">这是分类页面的内容</text>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('分类')

// 页面生命周期
const onLoad = () => {
	console.log('分类页面加载')
}
</script>

<style scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}

.text-area {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.title {
	font-size: 36rpx;
	color: #333;
	margin-bottom: 20rpx;
}

.desc {
	font-size: 28rpx;
	color: #666;
}
</style> 