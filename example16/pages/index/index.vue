<template>
	<view>
		{{ count }}
		<button type="primary" @click="myIncrement">增加</button>
		<button type="primary" @click="myDecrement">减少</button>
	</view>
</template>

<script setup>
	import {
		useCounterStore
	} from '@/stores/counter.js'
	import {
		storeToRefs
	} from 'pinia'

	const counterStore = useCounterStore()

	const {
		count
	} = storeToRefs(counterStore)

	function myIncrement() {
		counterStore.increment()
	}

	function myDecrement() {
		counterStore.decrement()
	}
</script>