<template>
	<view class="content">
		<view class="backimg">
			<!-- <view class="icon-fanhui iconfont"></view> -->
			<image @click="backhome()" class="backimage" src="../../static/images/back.png" mode=""></image>
			<view class="title">投诉列表</view>
		</view>
		
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
	</view>
</template>

<script>
	const util = require('@/utils/util.js')
	const api = require('@/config/api.js')
	//全局变量
	let stack_1 = 1
	export default {
		data() {
			return {
				tabList: [{
						text: "我发起的投诉"
					},
					{
						text: "投诉我的"
					},
				],
				// 选项卡切换状态
				tabActive: 1,
				cardList2:[
					{
						date: '2019.02.24 23:25:17',
						state: '待审核',
						headding:
							'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
						realname: '拓客小助手',
						takeWay: '上门自提',
						tel: '13855009676',
						pinlun: '未评论',
						level: '第1关声名不显',
						weChat: '13855009676',
						alpay: '13399501107',
						statenumber: 1
					},
					{
						date: '2019.02.24 23:25:17',
						state: '待审核',
						headding:
							'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
						realname: '拓客小助手',
						takeWay: '上门自提',
						tel: '13855009676',
						pinlun: '未评论',
						level: '第1关声名不显',
						weChat: '13855009676',
						alpay: '13399501107',
						statenumber: 1
					},
					{
						date: '2019.02.24 23:25:17',
						state: '已确认',
						headding:
							'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
						realname: '拓客小助手',
						takeWay: '上门自提',
						tel: '13855009676',
						pinlun: '未评论',
						level: '第1关声名不显',
						weChat: '13855009676',
						alpay: '13399501107',
						statenumber: 2
					},
					{
						date: '2019.02.24 23:25:17',
						state: '已确认',
						headding:
							'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
						realname: '拓客小助手',
						takeWay: '上门自提',
						tel: '13855009676',
						pinlun: '未评论',
						level: '第1关声名不显',
						weChat: '13855009676',
						alpay: '13399501107',
						statenumber: 2
					},
					{
						date: '2019.02.24 23:25:17',
						state: '审核失败',
						headding:
							'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
						realname: '拓客小助手',
						takeWay: '上门自提',
						tel: '13855009676',
						pinlun: '未评论',
						level: '第1关声名不显',
						weChat: '13855009676',
						alpay: '13399501107',
						statenumber: 3
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
		onLoad(options) {this.init()},
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
			init() {
				let that = this
				that.tabActive = 0
			},
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
			backhome() {
				uni.navigateTo({
					url: '../home/home'
				})
			}
		}
	};
</script>

<style lang="less">
	@import '//at.alicdn.com/t/font_1069694_b0katkm1hdo.css';

	page {
		background-image: url(../../static/images/background.png);
	}

	.content {
		.backimg {
			background-color: #381FB0;
			color: white;
			display: flex;
			flex-direction: row;
			// justify-content: center;
			align-items: center;
			padding: 20upx 22upx;
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);
			display: none;

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

		.list {
			display: flex;
			flex-direction: row;
			background: #381FB0;
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);

			.left,
			.right {
				color: #867afb;
				font-size: 26upx;
				padding: 24upx 120upx;
			}
		}
		.tab-bar {
			position: relative;
			flex-direction: row;
			justify-content: center;
			justify-items: center;
			padding: 0 20upx;
			display: flex;
		
			.btn-link {
				padding: 0 50upx;
				display: flex;
				width: 200upx;
				height: 80upx;
				justify-content: center;
				align-items: center;
				color: rgba(255, 255, 255, .4);
				font-size: 28upx;
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
				left: 205upx;
			}
		
			.line2 {
				left: 500upx;
			}
		
		}
	}
</style>
