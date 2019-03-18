<template>
	<view class="content">
		<view class="item-list">
			<block v-for="(item,index) in items.list" :key="index">
				<view class="row">
					<view class="title-box">
						<view class="left">
							{{item.realName}}
							杨琴
						</view>
						<view class="right">
							电话：{{item.phone}}
						</view>
					</view>
					<view class="words">
						{{item.address}} 
					</view>
					<view class="btn-box">
						<view class="check-box">
							<image :src="items.default===index?'../../../static/images/setting_choosed.png':'../../../static/images/setting_choose.png'" mode="widthFix" class="icon"></image>
							默认地址
						</view>
						<view class="btn-gtoup">
							<view class="btn" @tap="edit(item.id)">
								编辑
							</view>
							<view class="btn delete">
								删除
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
		<view class="btn-box" @tap="goPage('/pages/editInfo/addressCenter/addressAdd')">
			<view class="title">
				+新建地址
			</view>
			<view class="btn">
				<image src="../../../static/btn.png" mode="widthFix" class="checkLogin"></image>
			</view>
		</view>
	</view>
</template>

<script>
	const util = require('@/util/util.js')
	const api = require('@/util/api.js')

	//全局变量
	let stack_1 = 1
	// 此处引入你要的组件
	export default {
		data() {
			return {
				items:{
					default: 1,
					list: [
						{
							id: 12345,
							realName:"驼兄",
							phone:"13197973114",
							address:"广州省，深圳市，宝安区"
						},
						{
							id: 1234,
							realName:"驼兄",
							phone:"13197973114",
							address:"广州省，深圳市，宝安区"
						},
						{
							id: 123456,
							realName:"驼兄",
							phone:"13197973114",
							address:"广州省，深圳市，宝安区"
						},
						{
							id: 123455,
							realName:"驼兄",
							phone:"13197973114",
							address:"广州省，深圳市，宝安区"
						}
					]
				}
			}
		},
		/**
		 * Vue的组件存放
		 */
		components: {

		},
		/**
		 * uni-app生命周期
		 * options是上个页面的传参
		 * 指的是页面加载完毕执行的函数
		 */
		onLoad(options) {
			this.regLogin()
		},
		/**
		 * uni-app
		 * 指的是页面获取焦点的时候执行的函数
		 */
		onShow() {

		},
		/**
		 * uni-app
		 * 指的是页面失去焦点的时候执行的函数
		 */
		onHide() {

		},
		/**
		 * Vue计算属性
		 * 存放的函数，里面的函数名是自己定义的。函数必须有个返回值
		 */
		computed: {

		},
		/**
		 * Vue监听器
		 * 存放的函数，里面的函数名通常是data的数据
		 * 监听data的数据，一旦发生改变就执行里面对应的函数
		 */
		watch: {

		},
		/**
		 * Vue的自定义方法
		 */
		methods: {
			goPage(url) {
				uni.navigateTo({
					url:url
				})
			},
			edit(id) {
				uni.navigateTo({
					url:'/pages/editInfo/addressCenter/addressEdit?id='+id
				})
			},
			regLogin() {
				let that = this
				let token = uni.getStorageSync('userToken')
			
				if (!token) {
					uni.showToast({
						title: "登录过期",
						icon: "none"
					})
					// new Promise()
					setTimeout(() => {
						uni.navigateTo({
							url: "/pages/index/index"
						})
					}, 700)
				}
			}
		},
	}
</script>

<style lang="less">
	// 此处引入css、less等样式
	page {
		// background-image: url(../../../static/images/background.png);
		color: rgba(255, 255, 255, 0.8);
		font-size: 28upx;
	}
.content{
	background-color: rgba(25, 25, 25, 0.8);
		padding: 0 30upx;
}
	.item-list {
		
		.row {
			display: flex;
			flex-direction: column;
			font-size: 24upx;
			margin-bottom: 30upx;
			padding-bottom: 30upx;
			border-bottom: 1upx solid #7b7575;

			.icon {
				width: 30upx;
				margin-right: 15upx;
			}

			.title-box,
			.words,
			.btn-box {
				display: flex;
				height: 75upx;
				align-items: center;
				flex-direction: row;
				justify-content: space-between;
			}

			.words {
				display: block;
				line-height: 75upx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.btn-gtoup {
				display: flex;
				flex-direction: row;

				.btn {
					display: flex;
					height: 60upx;
					padding: 0 45upx;
					border-radius: 30upx;
					margin-left: 30upx;
					align-items: center;
					border: 1upx solid #6356E2;
					color: #fff;
				}

				.btn.delete {
					background: #6356E2;
				}
			}
		}
	}

	.btn-box {
		position: relative;
		display: flex;
		// height: 150upx;
		margin-top: 40upx;
		justify-content: center;
		align-items: center;

		.title {
			position: absolute;
			font-size: 30upx;
			top: 20%;
			color: white;
			z-index: 2;
		}
	}
</style>
