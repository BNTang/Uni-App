<template>
	<view>
		<text>one</text>
		<text>=======================</text>
		<button type="default" @click="onGoBackClick">返回上一个界面</button>
	</view>
</template>
<script>
	export default {
		methods: {
			onGoBackClick() {
				uni.navigateBack({
					delta: 1
				});

				const eventChannel = this.getOpenerEventChannel();
				eventChannel.emit("acceptDataFromOpenerPage", {
					data: '通过事件通道返回时传递数据'
				})
			}
		}
	}
</script>