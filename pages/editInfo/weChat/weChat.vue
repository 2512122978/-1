<template>
	<view class="content">
		<view class="page_title">

			请绑定用户本人的绑定微信账号
		</view>
		<view class="item-list">
			<view class="row">
				<view class="title">
					微信账号
				</view>
				<input type="text" v-model="weChat" placeholder="请输入手机号码" />
			</view>
		</view>
		<view class="btn-box">
			<view class="title">
				立即绑定
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
				weChat: "yp445988193"
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
		background-color: rgba(25, 25, 25, 0.8);
	}

	.content {
		padding: 0 30upx;
	}

	.page_title {
		display: flex;
		height: 90upx;
		align-items: center;
		color: #867AFB;
		font-size: 28upx;
	}

	.item-list {
		padding: 0;

		.row {
			display: flex;
			height: 90upx;
			align-items: center;
			font-size: 28upx;
			color: rgba(255, 255, 255, .8);

			.title {
				margin-right: 30upx;
			}

			.yzm {
				width: 250upx;
				border-radius: 60upx;
			}
		}
	}

	.btn-box {
		position: relative;
		display: flex;
		margin-top: 60upx;
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
