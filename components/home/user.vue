<template>
	<view>
		<view class="top_bg">
			
		</view>
		
		<view class="top_img">
			<u-row>
				<u-col span="4">
					<view>
						<u-avatar src="/static/logo2.jpg" size="60"></u-avatar>
					</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple"> Hyacinth </view>
				</u-col>
			</u-row>
		</view>
		
		<u-cell-group>
			<u-cell icon="order" title="我的订单"></u-cell>
			<u-cell icon="setting-fill" title="个人设置"></u-cell>
			<u-cell icon="map" title="关于我们"></u-cell>
			<u-cell icon="grid" title="系统版本" value="新版本"></u-cell>
		</u-cell-group>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.top_bg{
		width: 100%;
		height: 200rpx;
		background-color: #dd6161;
	}
	.top_img{
		margin-left: 10rpx;
		margin-right: 10rpx;
		margin-top: -50rpx;
		margin-bottom: 50rpx;
		border-radius: 5rpx;
		background-color: #FFFFFF;
		text-align: center;
		padding: 10rpx 20rpx;
	}
</style>
