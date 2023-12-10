<template>
	<view>
		<text>账号</text>
	</view>
</template>

<script setup>
    import {onLoad, onShow, onReady, onHide, onPullDownRefresh, onReachBottom} from '@dcloudio/uni-app'
    
    onLoad(() => {
        console.log("账号 onLoad");
    })
    onShow(() => {
        console.log("账号 onShow");
    })
    onReady(() => {
        console.log("账号 onReady");
    })
    onHide(() => {
        console.log("账号 onHide");
    })
    onPullDownRefresh(() => {
        console.log("账号 onPullDownRefresh");
    })
    onReachBottom(() => {
        console.log("账号 onReachBottom");
    })
</script>

<style>

</style>
