<template>
	<view>
		<view class="top_bg">
			
		</view>
		
		<view class="search">
			<u-row>
				<u-col span="3">
					<view>
						<u-avatar
							src="/static/logo2.jpg"
							size="75"></u-avatar>
					</view>
				</u-col>
				<u-col span="6">
					<view>{{title}}</view>
				</u-col>
				<u-col span="3">
					<view @click="wxpay()">14号桌</view>
				</u-col>
			</u-row>
		</view>
		
		<u-swiper
			:list="list"
			keyName="image"
			showTitle
			height="150"
			radius="0"
			circular
			></u-swiper>
			
		<u-notice-bar :text="text" ></u-notice-bar>
	
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
                list: [{
                    image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
                    title: '昨夜星辰昨夜风，画楼西畔桂堂东',
                },{
                    image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
                    title: '身无彩凤双飞翼，心有灵犀一点通'
                },{
                    image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
                    title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
                }],
				text: '欢迎大家来点餐，使劲买可劲买，往死里买都',
				jsCode:"",
				title:'点餐系统'
			}
		},
		methods: {
            click(item) {
                // console.log('item', item);
            },
			change(item){
				this.current = item.index
			}
		}
	}
</script>

<style lang="scss">
	.top_bg{
		width: 100%;
		height: 150rpx;
		background-color: #dd6161;
	}
	.search{
		padding: 20rpx;
	}
</style>
