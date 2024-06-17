<template>
	<view class="button">
		<view class="mt20 mb30 fs28 c-455a">按钮类型</view>
		<view class="flex-box flex-wrap">
			<gt-button class="mr30 mb20" type="default">默认按钮</gt-button>
			<gt-button class="mr30 mb20" type="primary">信息按钮</gt-button>	
			<gt-button class="mr30 mb20" type="success">主要按钮</gt-button>
			<gt-button class="mr30 mb20" type="danger">危险按钮</gt-button>
			<gt-button class="mr30 mb20" type="warning">警告按钮</gt-button>
		</view>
		
		<view class="mt20 mb30 fs28 c-455a">朴素按钮</view>
		<view class="flex-box flex-wrap">
			<gt-button class="mr30 mb20" plain type="success">朴素按钮</gt-button>
			<gt-button class="mr30 mb20" plain type="primary">朴素按钮</gt-button>	
		</view>
		
		<view class="mt20 mb30 fs28 c-455a">细边框</view>
		<view class="flex-box flex-wrap">
			<gt-button class="mr30 mb20" plain hairline type="success">细边框按钮</gt-button>
			<gt-button class="mr30 mb20" plain hairline type="primary">细边框按钮</gt-button>	
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
.button {
	padding: 30rpx;
}
</style>
