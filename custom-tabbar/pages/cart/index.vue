<template>
	<view class="content">
		<view class="text-area">
			<text class="title">购物车</text>
			<text class="desc">这是购物车页面的内容</text>
			<view class="badge-demo">
				<text class="badge-text">支持角标和红点功能</text>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('购物车')

// 页面生命周期
const onLoad = () => {
	console.log('购物车页面加载')
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
	margin-bottom: 30rpx;
}

.badge-demo {
	padding: 20rpx;
	background-color: #f0f0f0;
	border-radius: 10rpx;
}

.badge-text {
	font-size: 24rpx;
	color: #007aff;
}
</style> 