<template>
	<view>
		<text>One</text>
	</view>
</template>

<script setup>
	import {
		ref,
		getCurrentInstance
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'

	// 获取 this
	const $instance = ref(getCurrentInstance().proxy)

	onLoad((option) => {
		const eventChannel = $instance.value.getOpenerEventChannel();
		eventChannel.on('acceptDataFromOpenerPage', function(data) {
			console.log(data)
		})
	})
</script>