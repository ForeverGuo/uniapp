<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title fs30">{{title}}</text>
		</view>
    <!-- <test /> -->
	</view>
</template>

<script>
import test from './test.vue'; // 测试组件
	export default {
    components: {
      test
    },
		data() {
			return {
				title: 'welcome to use vue3'
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
		}

		.title {
			font-size: 36rpx;
			color: $gt-blue;
		}
	}

</style>
