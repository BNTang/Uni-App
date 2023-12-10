<script setup>
	import {onLaunch, onShow, onHide} from '@dcloudio/uni-app'
	
	onLaunch(() => {
		console.log('App Launch')
	})
	onShow(() => {
		console.log('App onShow')
	})
	onHide(() => {
		console.log('App onHide')
	})
</script>

<style>
</style>