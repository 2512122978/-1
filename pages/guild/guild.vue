<template>
	<view class="content">
		<view class="head">
			<view class="left">
				<view class="image">
					<image class="img" src="" mode=""></image>
				</view>
				<view class="text">
					<view class="up">
						{{user[0].tel}}
					</view>
					<view class="down">
						{{user[0].grade}}
					</view>
				</view>
			</view>
			<view class="right">
				<view class="head1">
					我的贡献：{{user[0].contribution}}人
				</view>
				<view class="middle">
					行会信息：{{user[0].guild}}人
				</view>
				<view class="footer">
					第1关声名不显及以上人数：{{user[0].overclassone}}人
				</view>
			</view>
		</view>
		<view class="middle">
			<view class="headup">
				<view class="head">
					<image class="image" src="../../static/images/search.png" mode=""></image>
					<input class="input" type="text" value="" placeholder="请输入昵称或手机号" />
				</view>
				<view class="search">
					搜索
				</view>
			</view>
		</view>
		<view class="footer">
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
			],
			// 选项卡切换状态
			tabActive: 1,
			user:[{
				img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg',
				tel:'18650365505',
				grade:'第1关声名不显',
				contribution:'0',
				guild:'0',
				overclassone:'0'
				
			}]
		}
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
		switchTab(index) {
			let that = this
			that.tabActive = index
		
			//模拟切换效果
			let data = new Array()
			console.log(data)
			// return
			let rand = parseInt(Math.random() * 10)
			// that.cardList
		},
		init() {
			let that = this
			that.tabActive = 0
		},
		backhome(){
			uni.navigateBack(getCurrentPages() - 1)
		}
	}
};
</script>

<style lang="less">
// 此处引入css、less等样式
page {
	background-color: #2107a5;
	// font-weight: 560;
	color: rgba(255, 255, 255, .8);
	// font-size: 20upx;
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
		display: flex;
		flex-direction: row;
		margin: 20upx 0 10upx 20upx;
		padding-top: 24upx;
		padding-left: 24upx;
		padding-bottom: 56upx;
		background: rgba(255, 255, 255, .1);
		border-radius: 24upx;
		.left{
			display: flex;
			flex-direction: row;
			.image{
				.img{
					width: 100upx;
					height: 100upx;
					border-radius: 800upx;
				}
			}
			.text{
				padding: 0 16upx;
				.up{
					font-size: 28upx;
					padding: 12upx;
				}
				.down{
					background: rgba(255, 255, 255, .1);
					font-size: 12upx;
					text-align: center;
					border-radius: 32upx;
				}
			}
		}
		.right{
			.head1,.middle,.footer{
				font-size: 12upx;
				padding: 4upx 0;
			}
		}
	}
	.middle{
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
				font-size: 32upx;
				width: 120upx;
				color: rgba(255, 255, 255, .8);
			}
		}
	}
	.footer{
		.card-list{
			margin-top: 16upx;
			padding-bottom: 60upx;
			.tab-bar {
				position: relative;
				flex-direction: row;
				justify-content: space-between;
				padding: 0 20upx;
				display: flex;
				background: rgba(255, 255, 255, .1);
			
				.btn-link {
					padding: 0 100upx;
					display: flex;
					width: 130upx;
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
					left: 150upx;
				}
			
				.line2 {
					left: 525upx;
				}
			}
		}
	}
}
</style>
