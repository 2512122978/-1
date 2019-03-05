<template>
	<view class="content">
		<view class="backimg">
			<!-- <view class="icon-fanhui iconfont"></view> -->
			<image @click="backhome()" class="backimage" src="../../static/images/back.png" mode=""></image>
			<view class="title">审核闯关记录</view>
		</view>
		<view class="headup">
			<view class="head">
				<image class="image" src="../../static/images/search.png" mode=""></image>
				<input class="input" type="text" value="" placeholder="请输入昵称或手机号" />
			</view>
				<view class="search">
					搜索
				</view>
		</view>
		<view class="body">

		</view>
		<view class="footer">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						text: '待审核项目',
						index: -1
					},
					{
						text: '审核成功项目',
						index: 0
					},
					{
						text: '审核失败',
						index: 1
					},
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
				.search{
					color: rgba(255, 255, 255, .8);
				}

			}
		}
	}
</style>
