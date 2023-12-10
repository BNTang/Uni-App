<template>
	<view>
		<uni-badge text="2" type="primary"></uni-badge>
		<uni-badge text="4" type="error"></uni-badge>
		<uni-badge text="22" type="success"></uni-badge>
	</view>
</template>

<script>
	export default {}
</script>

<style>
	:global(.uni-badge) {
		color: #000 !important;
		border-radius: 5px !important;
	}
</style>