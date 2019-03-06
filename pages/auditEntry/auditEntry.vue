<template>
	<view class="content">
		<view class="backimg">
			<!-- <view class="icon-fanhui iconfont"></view> -->
			<image
				@click="backhome()"
				class="backimage"
				src="../../static/images/back.png"
				mode=""
			></image>
			<view class="title">审核闯关记录</view>
		</view>
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
		</view>
		<view class="footer">
			<view class="head"></view>
			<view class="middle">
				<image class="img" src="../../static/images/empty.png" mode=""></image>
			</view>
			<view class="footer"><view class="button" type="button">去逛逛</view></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			//选项卡
			tabList: [
				{
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

			cardList: [
				{
					date: '2019.02.24 23:25:17',
					state: '已确认',
					headding:
						'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
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
					headding:
						'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
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
					headding:
						'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
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
					headding:
						'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
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
					headding:
						'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
					realname: '王玲',
					takeWay: '上门自提',
					tel: '13855009676',
					pinlun: '未评论',
					level: '第1关声名不显',
					weChat: '13855009676',
					alpay: '13399501107'
				}
			]
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

			//模拟切换效果
			let data = new Array();
			console.log(data);
			// return
			let rand = parseInt(Math.random() * that.cardList.length);
			// that.cardList
			that.cardList.forEach((e, index) => {
				if (rand != index) {
					data.push(e);
				}
			});
			that.cardList = data;
		},
		init() {
			let that = this;
			that.tabActive = 0;
		},
		backhome() {
			uni.navigateBack(getCurrentPages() - 1);
		},
		backhome() {
			uni.navigateTo({
				url: '../home/home'
			});
		}
	}
};
</script>

<style lang="less">
@import '//at.alicdn.com/t/font_1069694_b0katkm1hdo.css';

page {
	background: #2b1581;
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
			display: flex;
			flex: 1;
			background: rgba(255, 255, 255, 0.1);
			padding: 10upx 0 10upx 180upx;
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
			width: 120upx;
			color: rgba(255, 255, 255, 0.8);
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
				font-size: 32upx;
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
</style>
