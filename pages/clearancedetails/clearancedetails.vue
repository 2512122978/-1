<template>
	<view class="content">
	<!-- 	<view class="backimg">
			<image @click="backhome()" class="backimage" src="../../static/images/back.png" mode=""></image>
			<view class="title">闯关记录详情</view>
		</view> -->
		<view class="head">
			<view class="text">
				已确认
			</view>
		</view>
		<view class="body">
			<view class="line1">
				<view class="Label">
				</view>
				<view class="text">
				商家信息
				</view>
			</view>
			<view class="line2">
				<view class="left">
					姓名：
				</view>
				<view class="right">
					{{record[0].name}}
				</view>
			</view>
			<view class="line2">
				<view class="left">
					手机号：
				</view>
				<view class="right">
					{{record[0].shopphone}}
				</view>
			</view>
			<view class="line2">
				<view class="left">
					备用手机号：
				</view>
				<view class="right">
					{{record[0].shopsparephone}}
				</view>
			</view>
			<view class="line2">
				<view class="left">
					微信号：
				</view>
				<view class="right">
					{{record[0].weixin}}
				</view>
			</view>
			<view class="line2">
				<view class="left">
					支付宝号：
				</view>
				<view class="right">
					{{record[0].alipay}}
				</view>
			</view>
		</view>
		<view class="body2">
			<view class="left">
				闯关等级
			</view>
			<view class="right">
				{{record[0].entrylevel}}
			</view>
		</view>
		<view class="footer">
			<view class="line1">
				<view class="Label">
				</view>
				<view class="text">
				发货信息
				</view>
			</view>
			<view class="line2">
				<view class="left">
					发货方式：
				</view>
				<view class="right">
					{{record[0].delivery}}
				</view>
			</view>
			<view class="line2">
				<view class="left">
					发货状态：
				</view>
				<view class="right">
					{{record[0].deliverystatus}}
				</view>
			</view>
			<view class="line2">
				<view class="left">
					收货地址：
				</view>
				<view class="right">
					{{record[0].receivingaddress}}
				</view>
			</view>
			<view class="line2">
				<view class="left">
					收件人
				</view>
				<view class="right">
					{{record[0].username}}
				</view>
			</view>
			<view class="line2">
				<view class="left">
					手机号：
				</view>
				<view class="right">
					{{record[0].userphone}}
				</view>
			</view>
			<view class="line2">
				<view class="left">
					快递公司：
				</view>
				<view class="right">
					{{record[0].courierservices}}
				</view>
			</view>
			<view class="line2">
				<view class="left">
					快递单号：
				</view>
				<view class="right">
					{{record[0].couriernumber}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 此处引入你要的组件
	export default {
		data() {
			return {
				record:[{
					name:'13855009676',
					shopphone:'13855009676',
					shopsparephone:'13855009676',
					weixin:'13855009676',
					alipay:'13855009676',
					entrylevel:'第1关声明不显',
					delivery:'自提',
					deliverystatus:'上门自提',
					receivingaddress:'成都市',
					username:'尊悟空',
					userphone:'12244889663',
					courierservices:'韵达快递',
					couriernumber:'12244889663'
				}]
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
			backhome() {
				// https://uniapp.dcloud.io/api/router?id=navigateback
				uni.navigateBack(getCurrentPages() - 1)
			},
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
		// background-image: url(../../static/images/background.png);
		background-color: rgba(25, 25, 25, 0.8);
		color: white;
		// font-size: 12upx;
	}
	.content{
		.backimg {
			background-color: #381fb0;
			color: white;
			display: flex;
			flex-direction: row;
			// justify-content: center;
			align-items: center;
			padding: 20upx 22upx;
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		
			.backimage {
				width: 40upx;
				height: 40upx;
				color: #867afb;
			}
		
			.title {
				margin-left: 240upx;
				color: #867afb;
				font-weight: bold;
				font-size: 34upx;
			}
		}
		.head{
			padding-left: 62upx;
			line-height: 1.5;
			background: #381fb0l;
			background: rgba(255, 255, 255, .1);
			.text{
			padding: 36upx 0 ;
			color: rgba(255, 255, 255, .8);
			font-weight: bold;
			}
		}
		.body{
			background: rgba(255, 255, 255, .1);
			color: rgba(255, 255, 255, .8);
			margin: 20upx 20upx;
			border-radius: 20upx;
			.line1{
				display: flex;
				align-items: center;
				.text{
					padding: 28upx 14upx;
					border-left: #FF8C00;
					font-size: 26upx;
					font-weight: bold;
				}
				.Label{
					margin-left: 20upx;
					height: 20upx;
					width: 1upx;;
					background-color: #FF8C00;
				}
			}
			.line2{
				display: flex;
				align-items: center;
				.left{
					padding: 26upx 0;
					padding-left: 34upx;
					width: 160upx;
					font-size: 24upx;
				}
				.right{
					font-size: 20upx;
					font-weight: 600;
				}
			}
		}
		.body2{
			background: rgba(255, 255, 255, .1);
			color: rgba(255, 255, 255, .8);
			margin: 20upx 20upx;
			border-radius: 20upx;
			display: flex;
			align-items: center;
			.left{
				padding: 26upx 0;
				padding-left: 34upx;
				width: 160upx;
				font-size: 24upx;
			}
			.right{
				font-size: 20upx;
				font-weight: 100;
			}
		}
		.footer{
			background: rgba(255, 255, 255, .1);
			color: rgba(255, 255, 255, .8);
			margin: 20upx 20upx;
			border-radius: 20upx;
			.line1{
				display: flex;
				align-items: center;
				.text{
					padding: 28upx 14upx;
					border-left: #FF8C00;
					font-size: 26upx;
					font-weight: bold;
				}
				.Label{
					margin-left: 20upx;
					height: 20upx;
					width: 1upx;;
					background-color: #FF8C00;
				}
			}
			.line2{
				display: flex;
				align-items: center;
				.left{
					padding: 26upx 0;
					padding-left: 34upx;
					width: 160upx;
					font-size: 24upx;
				}
				.right{
					font-size: 20upx;
					font-weight: bold;
				}
			}
		}
	}
</style>
