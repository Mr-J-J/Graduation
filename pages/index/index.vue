<template>
	<view>
		<view v-if="value==0">
			<index></index>
			<menuList :menuLists="lists" 
				imgSize="150rpx"
				bottomSize="200rpx"
				@listenEvent="myEvent" 
				@listenMenu="myMenu">
			</menuList>
		</view>
		
		<view v-if="value==1">
			<user></user>
		</view>
		
		<u-tabbar
			:value="value"
			@change="change"
			:fixed="true"
			:border="false"
			activeColor="#dd6161"
			:placeholder="true"
			:safeAreaInsetBottom="true">
			<u-tabbar-item text="点单页" icon="home" ></u-tabbar-item>
			<u-tabbar-item text="我的" icon="account" ></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	import index from "@/components/home/index.vue"
	import user from "@/components/home/user.vue"
	import menuList from "@/components/sehochen-left-menu/menuList.vue"
	export default {
		components:{
			index,
			user,
			menuList
		},
		data() {
			return {
				value: 0,
				lists:[{
					title:"新品推荐",
					goods:[{
						label:"泡泡水",
						img:"https://cdn.uviewui.com/uview/swiper/3.jpg",
						hot:'50',
						price:'8'
					},{
						label:"蜜桃水",
						img:"https://cdn.uviewui.com/uview/swiper/3.jpg",
						hot:'54',
						price:'9'
					},{
						label:"蜜桃四季春",
						img:"https://cdn.uviewui.com/uview/swiper/3.jpg",
						hot:'54',
						price:'9'
					},{
						label:"蜜桃四季春",
						img:"https://cdn.uviewui.com/uview/swiper/3.jpg",
						hot:'54',
						price:'9'
					},{
						label:"蜜桃四季春",
						img:"https://cdn.uviewui.com/uview/swiper/3.jpg",
						hot:'54',
						price:'9'
					},{
						label:"蜜桃四季春",
						img:"https://cdn.uviewui.com/uview/swiper/3.jpg",
						hot:'54',
						price:'9'
					},{
						label:"满杯百香果",
						img:"https://cdn.uviewui.com/uview/swiper/3.jpg",
						hot:'54',
						price:'9'
					},{
						label:"冰鲜柠檬水",
						img:"https://cdn.uviewui.com/uview/swiper/3.jpg",
						hot:'54',
						price:'9'
					},{
						label:"珍珠奶茶",
						img:"https://cdn.uviewui.com/uview/swiper/3.jpg",
						hot:'54',
						price:'9'
					}]
				},{
					title:"热销产品",
					goods:[{
						label:"冰淇淋",
						img:"https://cdn.uviewui.com/uview/swiper/3.jpg",
						hot:'5w',
						price:'155'
					},{
						label:"奶昔",
						img:"https://cdn.uviewui.com/uview/swiper/3.jpg",
						hot:'50',
						price:'15'
					}]
				},{
					title:"热销产品2",
					goods:[{
						label:"冰淇淋",
						img:"https://cdn.uviewui.com/uview/swiper/3.jpg",
						hot:'5w',
						price:'155'
					},{
						label:"奶昔",
						img:"https://cdn.uviewui.com/uview/swiper/3.jpg",
						hot:'50',
						price:'15'
					}]
				}]
			};
		},
		methods:{
			change(name) {
				this.value = name
				console.log(name)
			}
		}
	}
</script>

<style lang="scss">

</style>
