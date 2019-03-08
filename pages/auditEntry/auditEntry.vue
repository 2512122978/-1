<template>
	<view class="content">
		<!-- <view class="backimg">
			<image
				@click="backhome()"
				class="backimage"
				src="../../static/images/back.png"
				mode=""
			></image>
			<view class="title">审核闯关记录</view>
		</view> -->
		<view class="headup">
			<view class="head">
				<image class="image" src="../../static/images/search.png" mode=""></image>
				<input class="input" type="text" value="" placeholder="请输入昵称或手机号" />
			</view>
			<view class="search">搜索</view>
		</view>
		<view class="body">
			<view class="chose">
				<view class="tab-bar">
					<block v-for="(item, index) in tabList" :key="index">
						<!-- tap相对于点击事件 -->
						<view class="btn-link" :style="index === tabActive ? 'font-weight:blod;color:#fff;' : ''" @tap="switchTab(index)">
							{{ item.text }}
						</view>
					</block>
					<view :class="'line line' + (tabActive + 1)"></view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="head"></view>
			<view class="middle">
				<!-- <image class="img" src="../../static/images/empty.png" mode=""></image> -->
			</view>
			<view class="footer">
				<view class="button" type="button">去逛逛</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
				cardList2:[{
						date: '2019.02.24 23:25:17',
						state: '已确认',
						headding: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
						realname: '王玲',
						takeWay: '上门自提',
						tel: '13855009676',
						pinlun: '未评论',
						level: '第1关声名不显',
						weChat: '13855009676',
						alpay: '13399501107'
					},
					{
						date: '2019.02.24 23:25:17',
						state: '已确认',
						headding: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
						realname: '王玲',
						takeWay: '上门自提',
						tel: '13855009676',
						pinlun: '未评论',
						level: '第1关声名不显',
						weChat: '13855009676',
						alpay: '13399501107'
					},
					{
						date: '2019.02.24 23:25:17',
						state: '已确认',
						headding: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
						realname: '王玲',
						takeWay: '上门自提',
						tel: '13855009676',
						pinlun: '未评论',
						level: '第1关声名不显',
						weChat: '13855009676',
						alpay: '13399501107'
					},
					{
						date: '2019.02.24 23:25:17',
						state: '已确认',
						headding: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
						realname: '王玲',
						takeWay: '上门自提',
						tel: '13855009676',
						pinlun: '未评论',
						level: '第1关声名不显',
						weChat: '13855009676',
						alpay: '13399501107'
					},
					{
						date: '2019.02.24 23:25:17',
						state: '已确认',
						headding: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
						realname: '王玲',
						takeWay: '上门自提',
						tel: '13855009676',
						pinlun: '未评论',
						level: '第1关声名不显',
						weChat: '13855009676',
						alpay: '13399501107'
					}
				],
				cardList: []
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
			this.regLogin()
			this.init()
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
					if(that.cardList2[ind].statenumber === index || index == 0){
						data.push(e)
						console.log(e)
					console.log('bianshu'+that.cardList2[ind].statenumber)
					}
				})
				
				that.cardList = data;
			},
			init() {
				let that = this;
				that.tabActive = 0;
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
	@import '//at.alicdn.com/t/font_1069694_b0katkm1hdo.css';

	page {
		background: #2b1581;
		background-image: url(../../static/images/background.png);
	}

	.content {
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

		.headup {
			display: flex;
			margin: 20upx;

			.head {
				height: 36upx;
				display: flex;
				flex: 1;
				background: rgba(255, 255, 255, 0.1);
				padding: 10upx 0 10upx 120upx;
				align-items: center;
				border-radius: 800upx;

				.input {
					background: transparent;
					font-size: 30upx;
					color: rgba(255, 255, 255, 0.8);
				}

				.image {
					padding-right: 30upx;
					width: 30upx;
					height: 30upx;
				}
			}

			.search {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 120upx;
				color: rgba(255, 255, 255, 0.8);
				font-size: 32upx;
			}
		}

		.body {
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
					color: rgba(255, 255, 255, 0.4);
					font-size: 28upx;
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
		}

		.footer {
			.head {
				width: 100%;
				height: 120upx;
			}

			.middle {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 400upx;

				.img {
					width: 300upx;
					height: 300upx;
				}
			}

			.footer {
				.button {
					color: white;
					// 			width: 700upx;
					height: 90upx;
					background: url('../../static/images/btn.png');
					background-size: 100% 100%;
					text-align: center;
					margin: 32upx 36upx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 32upx;
				}

			}
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
						font-size: 12upx;
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
</style>
