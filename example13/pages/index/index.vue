<template>
	<view>
		<button @click="onJumpOne">navigateTo</button>
	</view>
</template>

<script>
	export default {
		methods: {
			onJumpOne() {
				uni.navigateTo({
					url: '/pages/one/one'
				})
			}
		},
		onLoad() {
			uni.$on("test", (data) => {
				console.log(data)
			})
		},
		onUnload() {
			uni.$off("test")
		}
	}
</script>