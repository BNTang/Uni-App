<template>
	<view :class="['it-btn', type]">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				default: 'default'
			}
		},
		methods: {

		}
	}
</script>

<style>
	.it-btn {
		width: 400rpx;
		height: 150rpx;
		line-height: 150rpx;
		font-size: 40rpx;
		text-align: center;
	}

	.default {
		background-color: gray;
	}

	.warn {
		background-color: red;
	}

	.primary {
		background-color: deepskyblue;
	}
</style>