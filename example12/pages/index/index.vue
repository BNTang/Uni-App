<template>
	<view>
		<button type="primary" @click="onJumpOne">跳转到One界面</button>
	</view>
</template>

<script setup>
	function onJumpOne() {
		uni.navigateTo({
			url: '/pages/one/one',
			success(res) {
				// 通过eventChannel向被打开页面传送数据
				res.eventChannel.emit('acceptDataFromOpenerPage', {
					data: '通过事件通道传递的数据'
				})
			}
		})
	}
</script>