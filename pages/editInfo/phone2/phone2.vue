<template>
	<view class="content">
		<view class="page_title">
			当前绑定手机号：
			18650365505
		</view>
		<view class="item-list">
			<view class="row">
				<input maxlength="11" type="number" v-model="phone" placeholder="请输入手机号码" />
			</view>
			<view class="row">
				<input maxlength="4" type="text" v-model="yzm" placeholder="请输入图文验证码" />
				<image src="http://sale.10mf.org/index.php?m=Mobile&c=User&a=verify&type=forget" mode="widthFix" class="yzm"></image>
			</view>
			<view class="row">
				<input type="text" v-model="password" placeholder="请输入登录密码" />
			</view>
		</view>
		<view class="btn-box">
			<view class="title">
				退出
			</view>
			<view class="btn">
				<image src="../../../static/btn.png" mode="widthFix" class="checkLogin" ></image>
			</view>
		</view>
	</view>
</template>

<script>
	const util = require('@/utils/util.js')
	const api = require('@/config/api.js')

	//全局变量
	let stack_1 = 1
	// 此处引入你要的组件
	export default {
		data() {
			return {
				phone: "",
				yzm: "",
				password: "",
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
				let token = uni.getStorageSync('token')
			
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
	.item-list{
		padding: 0;
		.row {
			display: flex;
			height: 90upx;
			align-items: center;
			justify-content: space-between;
			font-size: 28upx;
			
			.yzm{
				width: 250upx;
				border-radius: 60upx;
			}
		}
	}
	.btn-box {
		position: relative;
		display: flex;
		// height: 150upx;
		margin-top: 120upx;
		justify-content: center;
		align-items: center;
		
		.title {
			position: absolute;
			top: 18%;
			color: white;
			z-index: 2;
		}
	}
</style>
