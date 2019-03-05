<template>
	<view class="content">
		<view class="head">
			<view class="title">拓客新零售</view>
			<view class="Complaint">我的投诉</view>
		</view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
						<swiper-item>
							<view class="swiper-item uni-bg-red">
								<image src="../../static/images/swiper2.png" mode="center"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-green">
								<image src="../../static/images/swiper1.png" mode="center"></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="information">
			<view class="ul">
				<ul>
					<li class="li1">I&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D:153510558</li>
					<li>
						等&nbsp;&nbsp;&nbsp;&nbsp;级：第一关声不嫌
						<span class="Grade">等级介绍</span>
					</li>
					<li>姓&nbsp;&nbsp;&nbsp;&nbsp;名：晴儿</li>
					<li>推荐人：阿兴</li>
				</ul>
			</view>
		</view>
		<view class="Notice">
			<view class="left">
				公告
			</view>
			<view class="center">
				<swiper class="swiper" :indicator-dots="false" :autoplay="true" :interval="2000" :vertical="true">
					<swiper-item>
						<view class="swiper-item1">
							<view class="tag">
								热点
							</view>
							<view class="text">
								关于2月14日晚系统升级维护的公告
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item1">
							<view class="tag">
								热点
							</view>
							<view class="text">
								关于销售任务游戏上线的公告
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				更多
			</view>
		</view>
		<view class="index_middle_nav">
			<view class="btn-link">
				<image class="img" src="../../static/images/帮助注册.png"></image>
				<view class="title">帮助注册</view>
			</view>
			<view class="btn-link">
				<image class="img" src="../../static/images/申请闯关.png"></image>
				<view class="title">申请闯关</view>
			</view>
			<view class="btn-link">
				<image class="img" src="../../static/images/审核闯关.png"></image>
				<view class="title">审核闯关</view>
			</view>
			<view class="btn-link">
				<image class="img" src="../../static/images/行会大厅.png"></image>
				<view class="title">行会大厅</view>
			</view>
		</view>

		<view class="footer">在线客服： QQ 2708232258</view>
	</view>
</template>

<script>
	// 此处引入你要的组件
	export default {
		data() {
			return {

			};
		},
		/**
		 * Vue的组件存放
		 */
		components: {},
		/**
		 * uni-app生命周期
		 * options是上个页面的传参
		 * 指的是页面加载完毕执行的函数
		 */
		onLoad(options) {},
		/**
		 * uni-app
		 * 指的是页面获取焦点的时候执行的函数
		 */
		onShow() {},
		/**
		 * uni-app
		 * 指的是页面失去焦点的时候执行的函数
		 */
		onHide() {},
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
		watch: {},
		/**
		 * Vue的自定义方法
		 */
		methods: {}
	};
</script>

<style lang="less">
	@import '//at.alicdn.com/t/font_1070232_urk1rzsge9.css';

	page {
		background-color: #2107a5;
	}

	.content .uni-padding-wrap {
		width: 100%;
		// height: 280upx;
		background-size: 100% 100%;

	}

	.content .head {
		display: flex;
		align-items: center;
		text-align: center;
		padding: 24upx;

		// flex-direction: column;
		.title {
			font-size: 36upx;
			font-family: YouYuan;
			padding-left: 120upx;
			font-weight: bold;
			width: 40%;
			// height: 10upx;
			color: #867afb;
			// text-align: center;
			margin: 0 auto;
			display: inline-block;
			// vertical-align: middle;
			// line-height: 00upx;
		}

		.Complaint {
			font-family: Helvetica, PingFangSC-Regular, 'Droid Sans', Arial, sans-serif;
			font-family: FZPangWa-M18S;
			font-weight: 100;
			width: 20%;
			font-size: 28upx;
			color: white;
		}
	}

	.content .swiper {
		text-align: center;
		width: 100%;
		// padding: 0 20upx;
	}

	.content .information {
		background: #422e88;
		margin: 10upx 20upx;
		border-radius: 16upx;

		.ul {
			color: rgba(255, 255, 255, .8);
			list-style: none;
			font-size: 28upx;
			margin: 0 0 0 -60upx;
			padding: 0;

			li {
				line-height: 1;
				width: 100%;
				// display: flex;
				flex: 1;
				align-items: center;
				padding: 12upx;
				font-size: 24upx;
				color: rgb(225, 225, 225, 0.8);
				text-align: left;
				list-style: none;
			}
		}
	}
	.content .Notice {
		background: #422e88;
		margin: 20upx 20upx;
		padding: 20upx 20upx;
		border-radius: 16upx;
		color: rgb(225, 225, 225, 0.8);
		display: flex;
		flex-direction: row;
		.left,.right{
			width: 100upx;
			font-size: 32upx;
		}
		
		.right{
			text-align: right;
			border-left: 1upx solid #F4CD4A;
		}
		.center {
			flex: 1;

			.swiper {
				height: 50upx;
				
				.swiper-item1 {
					display: flex;
					flex-direction: row;
					align-items: center;
					// padding: 0 30upx;
				}
				.tag  {
					display: inline-flex;
					width: 70upx;
					height: 35upx;
					padding: 5upx 5upx;
					justify-content: center;
					align-items: center;
					// padding: 5upx 12upx;
					margin-right: 10upx;
					margin-top: 0;
					border: 1upx solid #FF1F1F;
					border-radius: 20upx;
					font-size: 24upx;
					// color: #FF1F1F;
					vertical-align: middle;
					border-color: #F4CD4A;
					color: #F4CD4A;
					position: relative;
				}
			
				.text {
					display: inline-flex;
					// width: 70upx;
					height: 35upx;
					padding: 5upx 5upx;
					justify-content: center;
					align-items: center;
					// padding: 5upx 12upx;
					margin-right: 10upx;
					margin-top: 0;
					// border: 1upx solid #FF1F1F;
					border-radius: 20upx;
					font-size: 24upx;
					// color: #FF1F1F;
					vertical-align: middle;
					border-color: #F4CD4A;
					color: #F4CD4A;
					position: relative;
					// display: inline-flex;
// 					height: 50upx;
// 					// align-items: center;
// 					// word-wrap: 
					white-space: nowrap;
// 					flex: 1;
// 					font-size: 24upx;
// 					overflow: hidden;
// 					margin-right:20upx;
// 					margin-top: 10upx;
// 					color: #F4CD4A; 
				}
			}
		}
		
		.right{
			font-size: 12upx;
			
		}
	}

	.swiper-item image {
		// 	width: 100%;
		// 	height: 100%;
	}

	.index_middle_nav {
		display: flex;
		margin: 0 20upx;
		background-color: rgba(255, 255, 255, .1);
		border-radius: 20upx;
		color: rgba(255, 255, 255, .8);
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 20upx 60upx;

		.btn-link {

			// background: bisque;
			display: flex;
			flex-direction: column;
			height: 196upx;
			width: 35%;
			justify-content: center;
			align-items: center;
			margin-bottom: 20upx;

			.title {
				font-size: 24upx;
			}

			.img {
				width: 70upx;
				height: 70upx;
				margin-bottom: 10upx;
			}
		}
	}




	.content .footer {
		margin-top: 20upx;
		width: 100%;
		height: 104upx;;
		bottom: 0;
		left: 0;
		background: rgba(255, 255, 255, 0.1);
		color: #6356e2;
		font-size: 12upx;
		line-height: 2.56rem;
		text-align: center;
	}

	.Grade {
		display: inline-block;
		width: 140upx;
		height: 32upx;
		text-align: center;
		line-height: 24upx;
		color: #ADC5FD;
		background: url(../../static/images/small_btn.png);
		// background: url(../images/small_btn.png) no-repeat;
		background-size: 100% 100%;
		margin-left: 60upx;
	}
</style>
