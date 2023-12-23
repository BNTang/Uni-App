<template>
	<view>
		<button type="primary" @click="reqGetFn">发送Get请求</button>
		<button type="primary" @click="reqPostFn">发送Post请求</button>
	</view>
</template>

<script setup>
	function reqGetFn() {
		uni.request({
			url: 'https://jsonplaceholder.typicode.com/posts',
			data: {
				text: 'BNTang'
			},
			method: "GET",
			header: {
				// 自定义请求头信息
				'custom-header': 'hello'
			},
			success: (res) => {
				console.log(res);
				console.log(res.data);
			}
		});
	}

	function reqPostFn() {
		uni.request({
			url: 'https://jsonplaceholder.typicode.com/posts',
			data: {
				text: 'BNTang'
			},
			method: "POST",
			header: {
				// 自定义请求头信息
				'custom-header': 'hello'
			},
			success: (res) => {
				console.log(res);
				console.log(res.data);
			}
		});
	}
</script>