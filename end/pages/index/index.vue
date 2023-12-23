<template>
	<view class="content">
		<view class="result-view">
			<input class="result-box" type="text" v-model="showValue" disabled="true"
				:style="{fontSize: curFontSize}" />
		</view>
		<view class="btns-view">
			<view class="btn-radius" v-for="item in buttons" :key="item.text" :class="[item.class]"
				@click="operate(item)">{{item.text}}</view>
		</view>
	</view>
</template>

<script>
	import {
		calc,
		fmt
	} from "a-calc"
	export default {
		data() {
			return {
				curFontSize: "180rpx",
				showValue: 0,
				firstValue: "",
				secondValue: "",
				operatorType: "",
				isCaculate: false,
				buttons: [{
						text: 'AC',
						class: 'ft-color bg-gray ml-zero',
						func: 'operator',
						params: 'clear',
					},
					{
						text: '+/-',
						class: 'ft-color bg-gray',
						func: 'operator',
						params: 'opposite',
					},
					{
						text: '%',
						class: 'ft-color bg-gray',
						func: 'operator',
						params: 'percent',
					},
					{
						text: '÷',
						class: 'bg-orange',
						func: 'operator',
						params: 'divide',
					},
					{
						text: '7',
						class: 'bg-darkgray ml-zero',
						func: 'inputText',
						params: '7',
					},
					{
						text: '8',
						class: 'bg-darkgray',
						func: 'inputText',
						params: '8',
					},
					{
						text: '9',
						class: 'bg-darkgray',
						func: 'inputText',
						params: '9',
					},
					{
						text: '×',
						class: 'bg-orange',
						func: 'operator',
						params: 'multiply',
					},
					{
						text: '4',
						class: 'bg-darkgray ml-zero',
						func: 'inputText',
						params: '4',
					},
					{
						text: '5',
						class: 'bg-darkgray',
						func: 'inputText',
						params: '5',
					},
					{
						text: '6',
						class: 'bg-darkgray',
						func: 'inputText',
						params: '6',
					},
					{
						text: '-',
						class: 'bg-orange',
						func: 'operator',
						params: 'minus',
					},
					{
						text: '1',
						class: 'bg-darkgray ml-zero',
						func: 'inputText',
						params: '1',
					},
					{
						text: '2',
						class: ' bg-darkgray',
						func: 'inputText',
						params: '2',
					},
					{
						text: '3',
						class: ' bg-darkgray',
						func: 'inputText',
						params: '3',
					},
					{
						text: '+',
						class: 'bg-orange',
						func: 'operator',
						params: 'plus',
					},
					{
						text: '0',
						class: 'btn-size2 bg-darkgray ml-zero',
						func: 'inputText',
						params: '0',
					},
					{
						text: '.',
						class: 'bg-darkgray',
						func: 'inputText',
						params: '.',
					},
					{
						text: '=',
						class: 'bg-orange',
						func: 'operator',
						params: 'result',
					}
				]
			}
		},
		watch: {
			showValue(newVal, oldVal) {
				newVal += "";
				switch (newVal.length) {
					case 8:
						this.curFontSize = "160rpx";
						break;
					case 9:
						this.curFontSize = "150rpx";
						break;
					case 10:
						this.curFontSize = "130rpx";
						break;
					case 11:
						this.curFontSize = "120rpx";
						break;
					default:
						this.curFontSize = "180rpx";
						break;
				}
			}
		},
		onLoad() {

		},
		methods: {
			operate(item) {
				const func = item.func;
				const params = item.params;

				switch (func) {
					case "operator":
						this.operator(params);
						break;
					case "inputText":
						this.inputText(params);
						break;
				}
			},
			caculate() {
				switch (this.operatorType) {
					case "plus":
						this.showValue = calc(`${this.firstValue} + ${this.showValue}`);
						break;
					case "minus":
						this.showValue = calc(`${this.firstValue} - ${this.showValue}`);
						break;
					case "multiply":
						this.showValue = calc(`${this.firstValue} * ${this.showValue}`);
						break;
					case "divide":
						this.showValue = calc(`${this.firstValue} / ${this.showValue}`);
						break;
				}
			},
			operator(params) {
				console.log("计算操作");

				switch (params) {
					case "clear":
						// 清空
						this.showValue = "0";
						break;
					case "opposite":
						// 改变正负
						// 负负得正
						this.showValue = -this.showValue;
						break;
					case "percent":
						// 除以 100
						this.showValue = calc(`${this.showValue} / 100`);
						break;
					case "result":
						this.caculate();
						break;
					default:
						this.operatorType = params;
						if (this.firstValue != "") {
							this.caculate();
						}
						break;
				}
				this.isCaculate = true;
			},
			inputText(params) {
				console.log("输入操作");
				if (this.isCaculate) {
					this.firstValue = this.showValue;
					this.showValue = "0";
					this.isCaculate = false;
				}

				// 如果输入的是., 并且已经有., 那么什么都不做
				if (params == "." && this.showValue.indexOf(".") > -1) return;
				// 判断当前输入内容长度是否超过11, 超过11也什么都不做
				if (this.showValue.length >= 11) return;
				// 如果输入的不是., 并且当前没有数据, 那么就直接赋值
				if (params != "." && this.showValue == "0") {
					this.showValue = params + "";
				} else {
					// 如果是其它内容, 那么就追加
					this.showValue += params + "";
				}

				// 如果是整数, 还需要添加位数符号
				if (params != "." && this.showValue.indexOf(".") == -1) {
					let num = parseInt(this.showValue.replaceAll(",", ""));
					this.showValue = num.toLocaleString();
				}
			}
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: 100%;
		background-color: black;
		padding-left: 30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;

		.result-view {
			width: 100%;
			height: 35%;
			// background: red;
			position: relative;

			.result-box {
				// height: 30%;
				// 解决小程序中无法撑开高度问题
				min-height: 180rpx;
				
				text-align: right;
				color: white;
				position: absolute;

				left: 0;
				bottom: 0;
			}
		}

		.btns-view {
			width: 100%;
			height: 65%;
			// background: blue;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-evenly;

			.btn-radius {
				margin-left: 30rpx;
				width: 150rpx;
				height: 150rpx;
				line-height: 150rpx;
				border-radius: 50%;
				text-align: center;
				font-size: 60rpx;
				color: white;
			}

			.btn-size2 {
				width: 300rpx;
				border-radius: 75rpx;
			}

			.ml-zero {
				margin-left: 0;
			}

			.bg-gray {
				background-color: darkgrey;
			}

			.bg-darkgray {
				background: gray;
			}

			.bg-orange {
				background-color: orange;
			}

			.ft-color {
				color: black;
			}
		}
	}
</style>