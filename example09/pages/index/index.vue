<template>
	<view>
		<text>首页</text>
		<view class="content">
			<view class="item">item 1</view>
			<view class="item">item 1</view>
			<view class="item">item 1</view>
			<view class="item">item 1</view>
			<view class="item">item 1</view>
			<view class="item">item 1</view>
			<view class="item">item 1</view>
			<view class="item">item 1</view>
			<view class="item">item 1</view>
			<view class="item">item 1</view>
			<view class="item">item 1</view>
			<view class="item">item 1</view>
			<view class="item">item 1</view>
			<view class="item">item 1</view>
			<view class="item">item 1</view>
			<view class="item">item 1</view>
			<view class="item">item 1</view>
			<view class="item">item 1</view>
			<view class="item">item 88</view>
			<view class="item">item 99</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			console.log("首页 onLoad");
		},
		onShow() {
			console.log("首页 onShow");
		},
		onReady() {
			console.log("首页 onReady");
		},
		onHide() {
			console.log("首页 onHide");
		},
		onPullDownRefresh() {
			console.log("首页 onPullDownRefresh");
		},
		onReachBottom() {
			console.log("首页 onReachBottom");
		},
	}
</script>

<style>
	.item {
		width: 100%;
		height: 200rpx;
	}
</style>