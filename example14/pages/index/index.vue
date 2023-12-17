<template>
	<view>
		<button type="primary" @click="onJumpOne">跳转到One界面</button>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onUnload
	} from '@dcloudio/uni-app'

	function onJumpOne() {
		uni.navigateTo({
			url: '/pages/one/one'
		})
	}

	onLoad(() => {
		uni.$on("test", (data) => {
			console.log(data)
		})
	})

	onUnload(() => {
		uni.$off("test")
	})
</script>