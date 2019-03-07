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
		<view class="title">公告详情</view>
	</view>
	<view class="head">
		关于拓客新零售系统商家注意事项的公告 
	</view>
	<view class="middle">
		<view class="left">
			<view class="image">
				<image class="img" src="../../static/images/notice.png" mode=""></image>
			</view>
			<view class="title">
				公告
			</view>
		</view>
		<view class="right">
			2019-03-05   20:00:38
		</view>
	</view>
	<view class="footer">
		<view class="text">
			商家注意事项：<br>
			使用拓客系统必须以实物商品交易为基础。<br>
			严禁货币类，高风险虚拟产品交易。<br>
			严禁退还利润不发货的行为。<br>
			实名认证一人一号严禁多号。<br>
			发现虚拟交易玩资金不卖货者封号，举报属实，该号归举报者所有，大家一起监督避免害群之马影响大家使用。<br>
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
				uni.navigateBack(getCurrentPages() - 1);
			}
		},
	}
</script>

<style lang="less">
	// 此处引入css、less等样式
	page {
		background-color: #2107a5;
		font-weight: 560;
		color: rgba(255, 255, 255, 0.8);
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
			font-size: 36upx;
			text-align: center;
			padding: 28upx;
		}
		.middle{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			padding: 0 24upx;
			.left{
				font-size: 32upx;
				font-weight: 100;
				display: flex;
				flex-direction: row;
				align-items: center;
				.image{
					padding-right: 8upx;
					width: 48upx;
					height: 48upx;
					.img{
						width: 48upx;
						height: 48upx;
					}
				}
			}
			.right{
				font-size: 10upx;
			}
		}
		.footer{
			font-weight: 400;
			font-size: 36upx;
			padding: 16upx 24upx;
			line-height: 1.2;
		}
	}
	
</style>
