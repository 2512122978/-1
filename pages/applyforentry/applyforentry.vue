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
			<view class="title">我要闯关</view>
		</view>
		<view class="body">
			<view class="up">
				<view class="left">
					<view class="leftup">第1关声名不显</view>
					<view class="leftunder">当前等级</view>
				</view>
				<view class="middle"></view>
				<view class="right">
					<view class="rightup">第2关小有名气</view>
					<view class="rightunder">下一关</view>
				</view>
			</view>
			<view class="middle">
			    直接邀请3个第1关声名不显        
			</view>
			<view class="footer">
				<view type="button" class="btn_big1" value="我要闯关" @click="submitverify()">
					我要闯关
				</view>
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
	.body {
		margin: 20upx 26upx;
		padding: 30upx;
		background: #381fb0;
		border-radius: 10upx;
		.up {
			display: flex;
			flex-direction: row;
			margin-top: 20upx;
			.left {
				display: flex;
				text-align: center;
				width: 260upx;
				flex-direction: column;
				// align-items: center;
				// justify-items: center;
				.leftup {
					// border-radius: 20upx;
					padding: 16upx;
					color: #adc5fd;
					font-weight: 600;
					background-color: #322c68;
					border-radius: 10upx;
					font-size: 30upx;
					// text-align: center;
					// padding: 20upx;
				}
				.leftunder {
					color: #6356e2;
					font-size: 24upx;
					background-color: none;
				}
			}
			.middle {
				border-bottom: 1px solid rgba(255, 255, 255, 0.1);
				width: 30%;
				padding-bottom: 50upx;
			}
			.right {
				display: flex;
				text-align: center;
				width: 260upx;
				flex-direction: column;
				// align-items: center;
				// justify-items: center;
				.rightup {
					// border-radius: 20upx;
					padding: 16upx;
					color: #adc5fd;
					font-weight: 600;
					background-color: #322c68;
					border-radius: 8upx;
					font-size: 30upx;
					// text-align: center;
					// padding: 20upx;
				}
				.rightunder {
					color: #6356e2;
					font-size: 24upx;
					background-color: none;
				}
			}
		}
		.middle{
			color: white;
			padding-top: 58upx;
			font-size: 28upx;
			font-weight: 300;
		}
	}
	.footer{
		.btn_big1{
			color: white;
			background: url(../../static/images/btn.png);
			background-size: 100% 100%;
			text-align: center;
		}
	}
}
</style>
