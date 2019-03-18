<template>
	<view class="content">
		<view class="head">
			<view class="left">
				<view class="image"><image class="img" :src="info.headimg" mode=""></image></view>
				<view class="text">
					<view class="up">{{ info.tel }}</view>
					<view class="down">联盟等级:{{ info.level }}</view>
				</view>
			</view>
			<view class="right" v-if="false">
				<view class="head1">我的贡献：{{ info.tel }}人</view>
				<view class="middle">行会信息：{{ info.tel }}人</view>
				<view class="footer">第1关声名不显及以上人数：{{ info.tel }}人</view>
			</view>
		</view>
		<view class="middle">
			<view class="headup" v-if="false">
				<view class="head">
					<image class="image" src="../../static/images/search.png" mode=""></image>
					<input class="input" type="text" value="" placeholder="请输入昵称或手机号" />
				</view>
				<view class="search">搜索</view>
			</view>
		</view>
		<view class="footer">
			<view class="card-list">
				<view class="tab-bar" v-if="false">
					<block v-for="(item, index) in tabList" :key="index">
						<!-- tap相对于点击事件 -->
						<view
							class="btn-link"
							:style="index === tabActive ? 'font-weight:blod;color:#fff;' : ''"
							@tap="switchTab(index)"
						>
							{{ item.text }}
						</view>
					</block>
					<view :class="'line line' + (tabActive + 1)"></view>
				</view>
			</view>
			<view class="card-list">
				<block v-for="(item, index) in cardList2" :key="index">
					<view class="card">
						<view class="order-info">
							<!-- <view class="left">闯关时间： {{ item.date }}</view> -->
							<view class="right">{{ item.state }}</view>
						</view>
						<view class="goods-info">
							<view class="img-box">
								<image :src="item.headdimg" class="img"></image>
							</view>
							<view class="goods-detail">
								<view class="words">
									<view class="word1">{{ item.realname }}</view>
									<!-- <view class="word">{{ item.takeWay }}</view> -->
								</view>
								<view class="words">
									<view class="word">{{ item.tel }}</view>
									<view class="word pinlun">
										<view v-if="item.pinlun === 0">未评论</view>
										<view v-if="item.pinlun === 1">好评</view>
										<view v-if="item.pinlun === 2">中评</view>
										<view v-if="item.pinlun === 3">差评</view>
									</view>
								</view>
								<view class="words">
									<view class="word">闯关等级：{{ item.level }}</view>
								</view>
								<view class="words">
									<view class="word">微信号：{{ item.wechat }}</view>
								</view>
								<view class="words">
									<!-- <view class="word">支付宝号：{{ item.alpay }}</view> -->
								</view>
							</view>
						</view>
						<view class="order-handle" v-if="false">
							<view class="btn-link complaint" @click="wantcomplaint()">投诉</view>
							<view
								class="btn-link comment"
								@click="comment(index)"
								v-if="!item.pinlun"
							>
								评论
							</view>
							<view @click="details()" class="btn-link details">查看详情</view>
						</view>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
const util = require('@/util/util.js');
const api = require('@/util/api.js');
//全局变量
let stack_1 = 1;

// 此处引入你要的组件
export default {
	data() {
		return {
			info:'',
			//选项卡1
			tabList: [
				{
					text: '全部'
				},
				{
					text: '待审核'
				}
			],
			// 选项卡切换状态
			tabActive: 1,
// 			user: [
// 				{
// 					img:
// 						'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
// 					tel: '18650365505',
// 					grade: '第1关声名不显',
// 					contribution: '0',
// 					guild: '0',
// 					overclassone: '0'
// 				}
// 			],
			cardList2: [
				// 				{
				// 					date: '2019.02.24 23:25:17',
				// 					state: '待审核',
				// 					headding:
				// 						'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
				// 					realname: '拓客小助手',
				// 					takeWay: '上门自提',
				// 					tel: '13855009676',
				// 					pinlun: '未评论',
				// 					level: '第1关声名不显',
				// 					weChat: '13855009676',
				// 					alpay: '13399501107',
				// 					statenumber: 1
				// 				},
				// 				{
				// 					date: '2019.02.24 23:25:17',
				// 					state: '待审核',
				// 					headding:
				// 						'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
				// 					realname: '拓客小助手',
				// 					takeWay: '上门自提',
				// 					tel: '13855009676',
				// 					pinlun: '未评论',
				// 					level: '第1关声名不显',
				// 					weChat: '13855009676',
				// 					alpay: '13399501107',
				// 					statenumber: 1
				// 				},
				// 				{
				// 					date: '2019.02.24 23:25:17',
				// 					state: '已确认',
				// 					headding:
				// 						'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
				// 					realname: '拓客小助手',
				// 					takeWay: '上门自提',
				// 					tel: '13855009676',
				// 					pinlun: '未评论',
				// 					level: '第1关声名不显',
				// 					weChat: '13855009676',
				// 					alpay: '13399501107',
				// 					statenumber: 2
				// 				},
				// 				{
				// 					date: '2019.02.24 23:25:17',
				// 					state: '已确认',
				// 					headding:
				// 						'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
				// 					realname: '拓客小助手',
				// 					takeWay: '上门自提',
				// 					tel: '13855009676',
				// 					pinlun: '未评论',
				// 					level: '第1关声名不显',
				// 					weChat: '13855009676',
				// 					alpay: '13399501107',
				// 					statenumber: 2
				// 				},
				// 				{
				// 					date: '2019.02.24 23:25:17',
				// 					state: '审核失败',
				// 					headding:
				// 						'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
				// 					realname: '拓客小助手',
				// 					takeWay: '上门自提',
				// 					tel: '13855009676',
				// 					pinlun: '未评论',
				// 					level: '第1关声名不显',
				// 					weChat: '13855009676',
				// 					alpay: '13399501107',
				// 					statenumber: 3
				// 				}
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
		this.init();
		this.regLogin();
		this.initInfo()
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
		initInfo() {
			let that = this;
			let token = uni.getStorageSync('userToken');
			if (!token) {
				uni.navigateTo({
					url: '/pages/login/login'
				});
			}
			util.request(
				api.getUserInfo,
				{
					token: token
				},
				'POST'
			).then(res => {
				that.info = res.data;
			});
		},
		switchTab(index) {
			let that = this;
			that.tabActive = index;
			that.index = index;
			let data = new Array();
			that.cardList2.forEach((e, ind) => {
				if (that.cardList2[ind].statenumber === index || index == 0) {
					data.push(e);
					console.log(e);
					console.log('bianshu' + that.cardList2[ind].statenumber);
				}
			});

			that.cardList = data;
		},
		init() {
			let that = this;
			that.tabActive = 0;
			let token = uni.getStorageSync('userToken');
			if (!token) {
				uni.navigateTo({
					url: '/pages/login/login'
				});
			}

			util.request(
				api.getTeamList,
				{
					token: token
				},
				'POST'
			).then(res => {
				that.cardList2 = res.data.list;
			});
		},
		backhome() {
			uni.navigateBack(getCurrentPages() - 1);
		},
		regLogin() {
			let that = this;
			let token = uni.getStorageSync('userToken');

			if (!token) {
				uni.showToast({
					title: '登录过期',
					icon: 'none'
				});
				// new Promise()
				setTimeout(() => {
					uni.navigateTo({
						url: '/pages/index/index'
					});
				}, 700);
			}
		}
	}
};
</script>

<style lang="less">
// 此处引入css、less等样式
page {
	color: rgba(255, 255, 255, 0.8);
	background-color: rgba(25, 25, 25, 0.8);
}
.content {
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
	.head {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 10upx;
		margin: 0upx 20upx 10upx 20upx;
		padding-top: 24upx;
		padding-left: 22upx;
		padding-bottom: 56upx;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 24upx;
		.left {
			display: flex;
			flex-direction: row;
			.image {
				.img {
					width: 90upx;
					height: 90upx;
					border-radius: 800upx;
				}
			}
			.text {
				padding-left: 16upx;
				.up {
					font-size: 24upx;
					font-weight: bold;
					padding: 12upx;
				}
				.down {
					background: rgba(255, 255, 255, 0.1);
					font-size: 24upx;
					text-align: center;
					border-radius: 32upx;
				}
			}
		}
		.right {
			.head1,
			.middle,
			.footer {
				font-size: 24upx;
				padding: 4upx 12upx 4upx 4upx;
			}
		}
	}
	.middle {
		.headup {
			display: flex;
			.head {
				display: flex;
				flex: 1;
				height: 40upx;
				background: rgba(255, 255, 255, 0.1);
				padding: 0upx 0 10upx 140upx;
				align-items: center;
				border-radius: 8000upx;

				.input {
					background: transparent;
					font-size: 32upx;
					color: rgba(255, 255, 255, 0.8);
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
				font-size: 32upx;
				width: 120upx;
				color: rgba(255, 255, 255, 0.8);
			}
		}
	}
	.footer {
		.card-list {
			margin-top: 16upx;
			padding-bottom: 60upx;
			.tab-bar {
				position: relative;
				flex-direction: row;
				justify-content: space-between;
				padding: 0 20upx;
				display: flex;
				background: rgba(255, 255, 255, 0.1);

				.btn-link {
					padding: 0 100upx;
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
					left: 150upx;
				}

				.line2 {
					left: 525upx;
				}
			}
		}
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
</style>
