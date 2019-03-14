<template>
	<view class="content">
		<!-- <view class="backimg">
			<image
				@click="backhome()"
				class="backimage"
				src="../../static/images/back.png"
				mode=""
			></image>
			<view class="title">综合信用评分</view>
		</view> -->
		<view class="head">
			<view class="good">
				<view class="left">
					<image class="img" src="../../static/images/pj_1.png" mode=""></image>
					<view class="text">好评</view>
				</view>
				<view class="right">0单</view>
			</view>
			<view class="commonly">
				<view class="left">
					<image class="img" src="../../static/images/pj_2.png" mode=""></image>
					<view class="text">中评</view>
				</view>
				<view class="right">0单</view>
			</view>
			<view class="Negative">
				<view class="left">
					<image class="img" src="../../static/images/pj_3.png" mode=""></image>
					<view class="text">差评</view>
				</view>
				<view class="right">0单</view>
			</view>
			<view class="comprehensive">
				<image class="img" src="../../static/images/pj_4.png" mode=""></image>
				<view class="text">综合信用评分：100分</view>
			</view>
		</view>
		<view class="footer">
			<view class="up">评分规则：</view>
			<view class="down">
				<view class="downline">1.商家在3天内上传发货凭证自动显示已发货加1分。</view>
				<view class="downline">2.超过7天未上传发货凭证系统默认发货延迟减1分。</view>
				<view class="downline">3.好评加1分，中评不计分，差评减3分。</view>
				<view class="downline">4.综合信用分低于70分账号冻结7天。</view>
				<view class="downline">5.综合信用分低于50分冻结30天。</view>
				<view class="downline">6.综合信用分低于30分永久封号。</view>
				<view class="downline">7.被投诉经平台核实属实，超过3次永久封号。</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
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
		backhome() {
			uni.navigateBack(getCurrentPages() - 1);
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
page {
	background-color: rgba(25, 25, 25, 0.6);
	font-weight: 560;
	font-size: 20upx;
}

.content {
	height: 1246upx;
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

	.head {
		padding: 20upx 150upx;

		.good {
			padding: 50upx 0;
			display: flex;
			justify-content: space-between;

			.left,
			.right {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 12upx 32upx;
				// margin: 80upx;
				border-radius: 12upx;
				width: 120upx;
				height: 50upx;
				color: rgb(111, 191, 70);
				background-color: rgba(111, 191, 70, 0.2);

				.img {
					width: 40upx;
					height: 40upx;
					margin-right: 20upx;
				}
			}
		}

		.commonly {
			// padding: 50upx 0 ;
			display: flex;
			justify-content: space-between;

			.left,
			.right {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 12upx 32upx;
				// margin: 80upx;
				border-radius: 12upx;
				width: 120upx;
				height: 50upx;
				color: rgb(241, 116, 34);
				background-color: rgba(241, 116, 34, 0.2);

				.img {
					width: 40upx;
					height: 40upx;
					margin-right: 20upx;
				}
			}
		}

		.Negative {
			padding: 50upx 0;
			display: flex;
			justify-content: space-between;

			.left,
			.right {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 12upx 32upx;
				// margin: 80upx;
				border-radius: 12upx;
				width: 120upx;
				height: 50upx;
				color: rgb(235, 64, 38);
				background-color: rgba(235, 64, 38, 0.2);

				.img {
					width: 40upx;
					height: 40upx;
					margin-right: 20upx;
				}
			}
		}

		.comprehensive {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 12upx 32upx;
			// margin: 80upx;
			border-radius: 12upx;
			// width: 120upx;
			height: 50upx;
			color: rgb(251, 175, 27);
			background-color: rgba(251, 175, 27, 0.2);

			.img {
				width: 40upx;
				height: 40upx;
				margin-right: 20upx;
			}
		}
	}

	.footer {
		margin: 70upx 60upx;
		.up {
			border-left: 2px solid #ff8c00;
			color: rgba(255, 255, 255, 0.8);
			font-size: 28upx;
			border-left: 2px solid #ff8c00;
			padding: 0 24upx;
		}
		.down {
			font-size: 24upx;
			color: rgba(255, 255, 255, 0.8);
			font-size: 24upx;
			.downline{
				padding: 10upx 0;
			}
		}
	}
}
</style>
