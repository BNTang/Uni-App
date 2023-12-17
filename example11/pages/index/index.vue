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
					url: '/pages/one/one',
					events: {
						acceptDataFromOpenerPage(data) {
							console.log(data)
						}
					}
				})
			}
		}
	}
</script>