<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			uni.clearStorageSync()
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import 'uview-ui/index.scss';
	@import 'common/css/base.scss';
</style>
