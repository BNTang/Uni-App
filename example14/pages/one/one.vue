<template>
	<view>
		<text>one</text>
		<text>=======================</text>
		<button type="default" @click="onGoBackClick">返回上一个界面</button>
	</view>
</template>

<script setup>
	function onGoBackClick() {
		uni.navigateBack({
			delta: 1
		});

		// 通过 $emit 传递数据
		uni.$emit("test", {
			data: "通过$emit直接传递数据"
		})
	}
</script>