<template>
	<view class="content">
		<view class="backimg">
			<!-- <view class="icon-fanhui iconfont"></view> -->
			<image @click="backhome()" class="backimage" src="../../static/images/back.png" mode=""></image>
			<view class="title">投诉列表</view>
		</view>
		<view class="list">
			<view class="left">
				我发起的投诉
			</view>
			<view class="right">
				投诉我的
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
		backhome(){
			uni.navigateTo({
				url:'../home/home'
			})
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
		background-color: #381FB0;
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
	.list{
		display: flex;
		flex-direction: row;
		background: #381FB0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		.left,.right{
			color: #867afb;
			font-size: 26upx;
			padding: 24upx 120upx;
		}
	}
}
</style>
