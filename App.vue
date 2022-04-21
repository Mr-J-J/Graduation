<script>
	
	export default {
		onLaunch: function() {
			console.log('App Launch')  
		},
		onShow: function() {
			console.log('App show');
			this.api('admin');
		},
		onHide: function() {
			console.log('App hide')  
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";
	@import "common/demo.scss";
	
</style>
