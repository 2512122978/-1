<template>
	<view class="content">
		<view class="backimg">
			<image @click="backhome()" class="backimage" src="../../../static/images/back.png" mode=""></image>
			<view class="title">闯关记录</view>
		</view>
		<view class="headup">
			<view class="head">
				<image class="image" src="../../../static/images/search.png" mode=""></image>
				<input class="input" type="text" value="" placeholder="请输入昵称或手机号" />
			</view>
			<view class="search">
				搜索
			</view>
		</view>
		<view class="card-list">
			<view class="tab-bar">
				<block v-for="(item,index) in tabList" :key="index">
					<!-- tap相对于点击事件 -->
					<view class="btn-link" :style="index === tabActive?('font-weight:blod;color:#fff;'):''" @tap="switchTab(index)">
						{{item.text}}
					</view>
				</block>
				<view :class="'line line' + (tabActive + 1 )">

				</view>
			</view>
			<view class="card-list">
				<block v-for="(item,index) in cardList" :key="index">
					<view class="card">
						<view class="order-info">
							<view class="left">
								闯关时间：{{item.date}}
							</view>
							<view class="right">
								{{item.state}}
							</view>
						</view>
						<view class="goods-info">
							<view class="img-box">
								<image :src="item.headding" mode="widthFix" class="img"></image>
							</view>
							<view class="goods-detail">
								<view class="words">
									<view class="word">
										{{item.realname}}
									</view>
									<view class="word">
										{{item.takeWay}}
									</view>
								</view>
								<view class="words">
									<view class="word">
										{{item.tel}}
									</view>
									<view class="word pinlun">
										{{item.pinlun}}
									</view>
								</view>
								<view class="words">
									<view class="word">
										闯关等级：{{item.level}}
									</view>
								</view>
								<view class="words">
									<view class="word">
										微信号：{{item.weChat}}
									</view>
								</view>
								<view class="words">
									<view class="word">
										支付宝号：{{item.alpay}}
									</view>
								</view>
							</view>
						</view>
						<view class="order-handle">
							<view class="btn-link complaint">
								投诉
							</view>
							<view class="btn-link comment">
								评论
							</view>
							<view class="btn-link details">
								详情
							</view>
						</view>
					</view>
				</block>
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
				//选项卡
				tabList: [{
						text: "全部"
					},
					{
						text: "待审核"
					},
					{
						text: "审核成功"
					},
					{
						text: "审核失败"
					},
				],
				// 选项卡切换状态
				tabActive: 1,

				cardList: [{
						date: "2019.02.24 23:25:17",
						state: "已确认",
						headding: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg",
						realname: "王玲",
						takeWay: "上门自提",
						tel: "13855009676",
						pinlun: "未评论",
						level: "第1关声名不显",
						weChat: "13855009676",
						alpay: "13399501107",
					},
					{
						date: "2019.02.24 23:25:17",
						state: "已确认",
						headding: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg",
						realname: "王玲",
						takeWay: "上门自提",
						tel: "13855009676",
						pinlun: "未评论",
						level: "第1关声名不显",
						weChat: "13855009676",
						alpay: "13399501107",
					},
					{
						date: "2019.02.24 23:25:17",
						state: "已确认",
						headding: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg",
						realname: "王玲",
						takeWay: "上门自提",
						tel: "13855009676",
						pinlun: "未评论",
						level: "第1关声名不显",
						weChat: "13855009676",
						alpay: "13399501107",
					},
					{
						date: "2019.02.24 23:25:17",
						state: "已确认",
						headding: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg",
						realname: "王玲",
						takeWay: "上门自提",
						tel: "13855009676",
						pinlun: "未评论",
						level: "第1关声名不显",
						weChat: "13855009676",
						alpay: "13399501107",
					},
					{
						date: "2019.02.24 23:25:17",
						state: "已确认",
						headding: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg",
						realname: "王玲",
						takeWay: "上门自提",
						tel: "13855009676",
						pinlun: "未评论",
						level: "第1关声名不显",
						weChat: "13855009676",
						alpay: "13399501107",
					},
				],
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
			this.init()
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
			switchTab(index) {
				let that = this
				that.tabActive = index

				//模拟切换效果
				let data = new Array()
				console.log(data)
				// return
				let rand = parseInt(Math.random() * that.cardList.length)
				// that.cardList
				that.cardList.forEach((e, index) => {
					if(rand != index){
						data.push(e)
					}
				})
				that.cardList = data
			},
			init() {
				let that = this
				that.tabActive = 0
			},
			backhome(){
				uni.navigateBack(getCurrentPages() - 1)
			}
		},
	}
</script>

<style lang="less">
	// 此处引入css、less等样式
	page {
		background: #2b1581;
		color: rgba(255, 255, 255, .8);
	}

	.backimg {
		background-color: #381fb0;
		color: white;
		display: flex;
		flex-direction: row;
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

	.headup {
		display: flex;
		margin: 20upx;

		.head {
			display: flex;
			flex: 1;
			background: rgba(255, 255, 255, 0.1);
			padding: 10upx 0 10upx 180upx;
			align-items: center;
			border-radius: 8000upx;

			.input {
				background: transparent;
				font-size: 32upx;
				color: rgba(255, 255, 255, .8);
			}

			.image {
				width: 30upx;
				height: 30upx;
			}

		}

		.search {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 120upx;
			color: rgba(255, 255, 255, .8);
		}
	}

	.card-list {
		margin-top: 30upx;
		padding-bottom: 60upx;

		.tab-bar {
			position: relative;
			flex-direction: row;
			justify-content: space-between;
			padding: 0 20upx;
			display: flex;

			.btn-link {
				display: flex;
				width: 130upx;
				height: 80upx;
				justify-content: center;
				align-items: center;
				color: rgba(255, 255, 255, .4);
				font-size: 32upx;
			}

			.line {
				position: absolute;
				width: 60upx;
				height: 6upx;
				background: #fff;
				bottom: 0;
				transition: .5s;
			}

			.line1 {
				left: 55upx;
			}

			.line2 {
				left: 250upx;
			}

			.line3 {
				left: 445upx;
			}

			.line4 {
				left: 645upx;
			}
		}

		.card {
			display: flex;
			flex-direction: column;
			margin: 0 20upx;
			padding-bottom: 25upx;
			font-size: 28upx;
			border-bottom: 3upx solid #5d4949;

			.order-info {
				display: flex;
				height: 80upx;
				align-items: center;
				justify-content: space-between;
			}

			.goods-info {
				display: flex;
				flex-direction: row;
				align-items: center;

				.img-box {
					width: 130upx;
					margin: 0 20upx;

					.img {
						width: 100%;
						border-radius: 50%;
					}
				}

				.goods-detail {
					flex: 1;
					display: flex;
					padding-right: 20upx;
					flex-direction: column;
					justify-content: space-between;

					.words {
						display: flex;
						height: 45upx;
						align-items: center;
						justify-content: space-between;

						.pinlun {
							color: rgba(255, 255, 255, .3);
						}
					}
				}
			}

			.order-handle {
				margin-top: 30upx;
				display: flex;
				flex-direction: row;
				justify-content: flex-end;

				.btn-link {
					display: flex;
					width: 150upx;
					height: 55upx;
					justify-content: center;
					align-items: center;
					border-radius: 30upx;
					margin-left: 15upx;
					border: 1upx solid rgba(255, 255, 255, .8);
				}

				.details {
					background: #6356E2;
				}
			}
		}
	}
</style>
