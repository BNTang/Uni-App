<template>
	<view>
		<text>{{ name }}</text>
		<button type="primary" @click="add">新增</button>
		<button type="primary" @click="get">获取</button>
		<button type="primary" @click="del">删除</button>
		<button type="primary" @click="clear">清空</button>
		<button type="primary" @click="getStorageInfoFn">getStorageInfo</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: "BNTang"
			}
		},
		onLoad() {},
		methods: {
			add() {
				uni.setStorage({
					key: 'name',
					data: 'hello BNTang',
					success: function() {
						console.log('success');
					}
				});
			},
			get() {
				const that = this
				uni.getStorage({
					key: 'name',
					success: function(res) {
						that.name = res.data
					}
				});
			},
			del() {
				try {
					uni.removeStorageSync('name');
				} catch (e) {
					// error
				}
			},
			clear() {
				try {
					uni.clearStorageSync();
				} catch (e) {
					// error
				}
			},
			getStorageInfoFn() {
				try {
					const res = uni.getStorageInfoSync();
					
					console.log(res);
					console.log(res.keys);
					console.log(res.currentSize);
					console.log(res.limitSize);
				} catch (e) {
					// error
				}
			}
		}
	}
</script>