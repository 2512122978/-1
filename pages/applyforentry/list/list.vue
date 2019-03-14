<template>
	<view class="content">
		<view class="headup">
			<view class="head">
				<image class="image" src="../../../static/images/search.png" mode=""></image>
				<input class="input" type="text" value="" placeholder="请输入昵称或手机号" />
			</view>
			<view class="search">搜索</view>
		</view>
		<view class="card-list">
			<view class="tab-bar">
				<block v-for="(item, index) in tabList" :key="index">
					<!-- tap相对于点击事件 -->
					<view class="btn-link" :style="index === tabActive ? 'font-weight:blod;color:#fff;' : ''" @tap="switchTab(index)">
						{{ item.text }}
					</view>
				</block>
				<view :class="'line line' + (tabActive + 1)"></view>
			</view>
			<view class="card-list">
				<block v-for="(item, index) in cardList" :key="index">
					<view class="card">
						<view class="order-info">
							<view class="left">闯关时间： {{ item.date }}</view>
							<view class="right">{{ item.state }}</view>
						</view>
						<view class="goods-info">
							<view class="img-box">
								<image :src="item.headding" class="img"></image>
							</view>
							<view class="goods-detail">
								<view class="words">
									<view class="word1">{{ item.realname }}</view>
									<view class="word">{{ item.takeWay }}</view>
								</view>
								<view class="words">
									<view class="word">{{ item.tel }}</view>
									<view class="word pinlun">
										<view v-if="item.pinlun === 0">
											未评论
										</view>
										<view v-if="item.pinlun === 1">
											好评
										</view>
										<view v-if="item.pinlun === 2">
											中评
										</view>
										<view v-if="item.pinlun === 3">
											差评
										</view>
									</view>
								</view>
								<view class="words">
									<view class="word">闯关等级：{{ item.level }}</view>
								</view>
								<view class="words">
									<view class="word">微信号：{{ item.weChat }}</view>
								</view>
								<view class="words">
									<view class="word">支付宝号：{{ item.alpay }}</view>
								</view>
							</view>
						</view>
						<view class="order-handle">
							<view class="btn-link complaint" @click="wantcomplaint()">投诉</view>
							<view class="btn-link comment" @click="comment(index)" v-if="!item.pinlun">评论</view>
							<view @click="details()" class="btn-link details">查看详情</view>
						</view>
					</view>
				</block>
			</view>
		</view>
		<!-- 模态框 -->
		<view class="modal" v-show="modal">
			<view class="mask" @tap="hideModal()"></view>
			<view class="box">
				<view class="title">评价</view>
				<block v-for="(item,index) in pinlun.list" :key="index">
					<view class="title1" @click="choose(index)">
						<view class="first">
							<image class="image" :src="item.img" mode="widthFix"></image>
							<view class="text" id="text">{{item.text}}</view>
						</view>
						<view class="seetingchose">
							<image class="seeting" :src="pinlun.active === index ? '../../../static/images/setting_choosed.png' : '../../../static/images/setting_choose.png'"
							 mode="widthFix"></image>
						</view>
					</view>
				</block>
				<view class="btn" @tap="submit()">
					<view type="button" class="btn_big1" value="提交">
						提交
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const util = require('@/utils/util.js');
	const api = require('@/config/api.js');
	//全局变量
	let stack_1 = 1;
	// 此处引入你要的组件
	export default {
		data() {
			return {
				modal: false,
				//选项卡
				tabList: [{
						text: '全部'
					},
					{
						text: '待审核'
					},
					{
						text: '审核成功'
					},
					{
						text: '审核失败'
					}
				],
				// 选项卡切换状态
				tabActive: 1,
				tabchoose: 1,

				cardList2: [{
						date: '2019.02.24 23:25:17',
						state: '待审核',
						headding: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
						realname: '拓客小助手',
						takeWay: '上门自提',
						tel: '13855009676',
						pinlun: 0,
						level: '第1关声名不显',
						weChat: '13855009676',
						alpay: '13399501107',
						statenumber: 1
					},
					{
						date: '2019.02.24 23:25:17',
						state: '待审核',
						headding: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
						realname: '拓客小助手',
						takeWay: '上门自提',
						tel: '13855009676',
						pinlun: 1,
						level: '第1关声名不显',
						weChat: '13855009676',
						alpay: '13399501107',
						statenumber: 1
					},
					{
						date: '2019.02.24 23:25:17',
						state: '已确认',
						headding: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
						realname: '拓客小助手',
						takeWay: '上门自提',
						tel: '13855009676',
						pinlun: 2,
						level: '第1关声名不显',
						weChat: '13855009676',
						alpay: '13399501107',
						statenumber: 2
					},
					{
						date: '2019.02.24 23:25:17',
						state: '已确认',
						headding: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
						realname: '拓客小助手',
						takeWay: '上门自提',
						tel: '13855009676',
						pinlun: 3,
						level: '第1关声名不显',
						weChat: '13855009676',
						alpay: '13399501107',
						statenumber: 2
					},
					{
						date: '2019.02.24 23:25:17',
						state: '审核失败',
						headding: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
						realname: '拓客小助手',
						takeWay: '上门自提',
						tel: '13855009676',
						pinlun: 1,
						level: '第1关声名不显',
						weChat: '13855009676',
						alpay: '13399501107',
						statenumber: 3
					},
					{
						date: '2019.02.24 23:25:17',
						state: '审核失败',
						headding: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
						realname: '拓客小助手123',
						takeWay: '上门自提',
						tel: '13855009676',
						pinlun: 0,
						level: '第1关声名不显',
						weChat: '13855009676',
						alpay: '13399501107',
						statenumber: 3
					}
				],
				cardList: [],
				pinlun: {
					active: 2,
					list: [{
							text: '好评',
							img: '../../../static/images/pj_1.png',
						},
						{
							text: '中评',
							img: '../../../static/images/pj_2.png',
						},
						{
							text: '差评',
							img: '../../../static/images/pj_3.png',
						},
					],
				},
				itemIndex: -1,
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
		onLoad(options) {
			this.init()
			this.init1()
			this.switchTab(0)
			this.regLogin()
		},
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
		computed: {},
		/**
		 * Vue监听器
		 * 存放的函数，里面的函数名通常是data的数据
		 * 监听data的数据，一旦发生改变就执行里面对应的函数
		 */
		watch: {},
		/**
		 * Vue的自定义方法
		 */
		methods: {
			switchTab(index) {
				let that = this;
				that.tabActive = index;
				that.index = index;
				let data = new Array();
				that.cardList2.forEach((e, ind) => {
					if (that.cardList2[ind].statenumber === index || index == 0) {
						data.push(e)
						console.log(e)
						console.log('bianshu' + that.cardList2[ind].statenumber)
					}
				})

				that.cardList = data;
			},
			init() {
				let that = this;
				that.tabActive = 0;
			},
			init1() {
				let that = this;
				that.tabchoose = 0;
			},
			details() {
				uni.navigateTo({
					url: '../../clearancedetails/clearancedetails'
				});
			},
			wantcomplaint() {
				uni.navigateTo({
					url: '../../wantcomplaint/wantcomplaint'
				});
			},
			comment(index) {
				let that = this
				that.modal = true
				that.itemIndex = index
			},
			hideModal() {
				let that = this;
				that.modal = false;
			},
			choose(index) {
				let that = this;
				that.pinlun.active = index
			},
			submit(){
				let that = this
				let itemIndex = that.itemIndex
				let activeIndex = that.pinlun.active
// 				console.log(this.cardList2[itemIndex].realname)
// 				return
				this.cardList2[itemIndex].pinlun = activeIndex + 1
				that.modal = false
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
		}
	};
</script>

<style lang="less">
	// 此处引入css、less等样式
	page {
		background-image: url(../../../static/images/background.png);
		color: rgba(255, 255, 255, 0.8);
	}

	.backimg {
		// background-color: #381fb0;
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
		margin: 18upx;

		.head {
			height: 44upx;
			display: flex;
			flex: 1;
			background: rgba(255, 255, 255, 0.1);
			padding: 10upx 20upx 10upx 140upx;
			align-items: center;
			border-radius: 8000upx;

			.input {
				// background: transparent;
				font-size: 32upx;
				color: rgba(255, 255, 255, 0.8);
				font-size: 28upx;
			}

			.image {
				padding-right: 20upx;
				width: 30upx;
				height: 30upx;
			}
		}

		.search {
			font-size: 32upx;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100upx;
			color: rgba(255, 255, 255, 0.8);
		}
	}

	.card-list {
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
				// height: 70upx;
				padding: 30upx 0;
				justify-content: center;
				align-items: center;
				color: rgba(255, 255, 255, 0.4);
				font-size: 26upx;
			}

			.line {
				position: absolute;
				width: 60upx;
				height: 6upx;
				background: #fff;
				bottom: 0;
				transition: 0.5s;
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
				// height: 70upx;
				padding: 10upx 0;
				align-items: center;
				justify-content: space-between;
				font-size: 25upx;
				font-weight: 600;
			}

			.goods-info {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin: 10upx 10upx 0 10upx;

				.img-box {
					width: 120upx;
					margin-left: 14upx;
					padding-top: 20upx;

					.img {
						width: 90upx;
						height: 90upx;
						margin-right: 8upx;
						border-radius: 50%;
					}
				}

				.goods-detail {
					flex: 1;
					display: flex;
					// 					padding-right: 20upx;
					// 					padding-top: 10upx;
					padding: 10upx 20upx 0 0;
					flex-direction: column;
					justify-content: space-between;

					.words {
						display: flex;
						height: 30upx;
						align-items: center;
						justify-content: space-between;
						padding: 2upx -5upx;
						margin: 4upx 0;

						.pinlun {
							
							color: rgba(255, 255, 255, 0.3);
						}

						.word {
							font-size: 20upx;
						}

						.word1 {
							font-weight: bold;
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
					border: 1upx solid rgba(255, 255, 255, 0.8);
				}

				.details {
					background: #6356e2;
					border: 0upx solid rgba(255, 255, 255, 0.8);
				}
			}
		}
	}

	.modal {
		.mask {
			position: fixed;
			z-index: 998;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: rgba(0, 0, 0, 0.7);
			z-index: 2;
		}

		.box {
			position: fixed;
			border-radius: 20upx;
			width: 500upx;
			height: 460upx;
			background-color: white;
			background-size: 100% 100%;
			top: calc(50% - 600upx / 2);
			left: calc(50% - 500upx / 2);
			z-index: 2 + 1;

			.title {
				border-bottom: 1upx solid rgba(0, 0, 0, 0.2);
				padding: 30upx 30upx;
				display: flex;
				color: black;
				justify-content: center;
				align-items: center;
				font-size: 32upx;

			}

			.title1 {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 28upx 60upx 20upx 60upx;

				.first {
					display: flex;

					.image {
						height: 36upx;
						width: 36upx;
						padding-right: 24upx;
					}

					.text {
						color: #999;
						font-size: 28upx;
					}
				}

				.seetingchose {
					.seeting {
						width: 28upx;
						height: 28upx;
					}
				}
			}

			.titleLine {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 40upx 60upx 20upx 60upx;

				.first {
					display: flex;

					.image {
						height: 36upx;
						width: 36upx;
						padding-right: 24upx;
					}

					.text {
						color: #999;
						font-size: 28upx;
					}
				}

				.seetingchose {
					.seeting {
						width: 28upx;
						height: 28upx;
					}
				}
			}

			.body {
				padding: 40upx 30upx 20upx 60upx;
				display: flex;

				.image {
					height: 36upx;
					width: 36upx;
					padding-right: 24upx;
				}

				.text {
					color: #999;
					font-size: 28upx;
				}
			}

			.btn {
				display: flex;
				justify-content: center;
				align-items: center;

				.btn_big1 {
					display: inline-block;
					color: #6356E2;
					font-size: 30upx;
					letter-spacing: 2px;
				}
			}
		}
	}
</style>
