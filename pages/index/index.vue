<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<u-text type="primary" size="22" :text="title"></u-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: ' welcome to use vue2 '
			}
		},
		onLoad() {},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
		align-items: center;
	}

</style>
