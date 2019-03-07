<template>
	<view class="content">
		<view class="item-list">
			<view class="row">
				<input type="text" v-model="realName" placeholder="请输入您的真实姓名" />
			</view>
			<view class="row">
				<input type="text" v-model="idCard" placeholder="请输入您的身份证号码" />
			</view>
		</view>
		<view class="idCard-box">
			<view class="title">
				请上传清晰的身份证正面和背面图片
			</view>
			<view class="box">
				<image src="../../../static/images/zhengm.png" mode="widthFix" class="img"></image>
			</view>
			<view class="box">
				<image src="../../../static/images/beim.png" mode="widthFix" class="img"></image>
			</view>
		</view>
		<view class="btn-box">
			<view class="title">
				提交申请
			</view>
			<view class="btn">
				<image src="../../../static/btn.png" mode="widthFix" class="checkLogin"></image>
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
				realName: "",
				idCard: "",
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

		},
	}
</script>

<style lang="less">
	// 此处引入css、less等样式
	page {
		background: #2208A1;
		padding: 0 30upx;
	}

	.content {
		.item-list {
			.row {
				display: flex;
				height: 90upx;
				align-items: center;
				font-size: 30upx;
				color: rgba(255, 255, 255, 0.8);
				border-bottom: 1upx solid rgba(153, 153, 153, .9);
			}
		}

		.idCard-box {
			.title {
				display: flex;
				height: 100upx;
				align-items: center;
				color: rgba(255, 255, 255, 0.8);
				font-size: 28upx;
			}

			.box {
				display: flex;
				justify-content: center;
				margin-bottom: 30upx;
			}
		}
	}

	.btn-box {
		position: relative;
		display: flex;
		// height: 150upx;
		margin-top: 120upx;
		justify-content: center;
		align-items: center;

		.title {
			position: absolute;
			top: 18%;
			color: white;
			z-index: 2;
		}
	}
</style>
