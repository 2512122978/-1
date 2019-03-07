<template>
	<view class="content">
		<view class="backimg">
			<!-- <view class="icon-fanhui iconfont"></view> -->
			<image @click="backhome()" class="backimage" src="../../static/images/back.png" mode=""></image>
			<view class="title">我要闯关</view>
		</view>
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
					13855009676
				</view>
			</view>
			<view class="line2">
				<view class="left">
					手机号：
				</view>
				<view class="right">
					13855009676
				</view>
			</view>
			<view class="line2">
				<view class="left">
					备用手机号：
				</view>
				<view class="right">
					13855009676
				</view>
			</view>
			<view class="line2">
				<view class="left">
					微信号：
				</view>
				<view class="right">
					13855009676
				</view>
			</view>
			<view class="line2">
				<view class="left">
					支付宝号：
				</view>
				<view class="right">
					13855009676
				</view>
			</view>
		</view>
		<view class="body2">
			<view class="left">
				闯关等级
			</view>
			<view class="right">
				第1关声明不显
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
					姓名：
				</view>
				<view class="right">
					13855009676
				</view>
			</view>
			<view class="line2">
				<view class="left">
					姓名：
				</view>
				<view class="right">
					13855009676
				</view>
			</view>
			<view class="line2">
				<view class="left">
					姓名：
				</view>
				<view class="right">
					13855009676
				</view>
			</view>
			<view class="line2">
				<view class="left">
					姓名：
				</view>
				<view class="right">
					13855009676
				</view>
			</view>
			<view class="line2">
				<view class="left">
					姓名：
				</view>
				<view class="right">
					13855009676
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
			}
		},
	}
</script>

<style lang="less">
	// 此处引入css、less等样式
	page {
		background: #2b1581;
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
					font-size: 12upx;
				}
				.right{
					font-size: 10upx;
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
				font-size: 12upx;
			}
			.right{
				font-size: 10upx;
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
					font-size: 12upx;
				}
				.right{
					font-size: 10upx;
					font-weight: bold;
				}
			}
		}
	}
</style>
