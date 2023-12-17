<template>
	<view>
		<text>one页面</text>
		<button type="primary" @click="onGoBackClick">返回到上一页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			onGoBackClick() {
				uni.navigateBack({
					delta: 1
				});

				// 通过 $emit 传递数据
				uni.$emit("test", {
					data: "通过$emit直接传递数据"
				})
			}
		}
	}
</script>