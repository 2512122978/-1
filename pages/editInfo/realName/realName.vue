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
			<view class="title">请上传清晰的身份证正面和背面图片</view>
			<view class="down">
				<block v-if="imageSrc">
					<image class="img" :src="imageSrc" mode="widthFix"></image>
				</block>
				<block v-else>
					<view class="box" @click="chooseImage()">
						<image class="img" src="../../../static/images/zhengm.png" mode=""></image>
					</view>
				</block>
				<block v-if="imageSrc1">
					<image class="img1" :src="imageSrc1" mode="widthFix"></image>
				</block>
				<block v-else>
					<view class="box1" @click="chooseImage1()">
						<image class="img1" src="../../../static/images/zhengm.png" mode=""></image>
					</view>
				</block>
			</view>
		</view>
		<view class="btn-box">
			<view class="title">提交申请</view>
			<view class="btn">
				<!-- <image src="../../../static/btn.png" mode="widthFix" class="checkLogin"></image> -->
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
			realName: '',
			idCard: '',
			title: 'uploadFile',
			imageSrc: '',
			title1: 'uploadFile',
			imageSrc1: ''
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
		this.imageSrc = '';
		this.imageSrc1 = '';
		this.regLogin();
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
		chooseImage1: function() {
			let that = this;
			uni.chooseImage({
				count: 1,
				sizeType: ['compressed'],
				sourceType: ['album'],
				success: res => {
					console.log('chooseImage success, temp path is', res.tempFilePaths[0]);
					var imageSrc1 = res.tempFilePaths[0];
					uni.uploadFile({
						url: 'https://unidemo.dcloud.net.cn/upload',
						filePath: imageSrc1,
						fileType: 'image',
						name: 'data',
						success: res => {
							console.log('uploadImage success, res is:', res);
							uni.showToast({
								title: '上传成功',
								icon: 'success',
								duration: 1000
							});
							this.imageSrc1 = imageSrc1;
							console.log(this.imageSrc1);
						},
						fail: err => {
							console.log('uploadImage fail', err);
							uni.showModal({
								content: err.errMsg,
								showCancel: false
							});
						}
					});
				},

				fail: err => {
					console.log('chooseImage fail', err);
				}
			});
		},
		chooseImage: function() {
			let that = this;
			uni.chooseImage({
				count: 1,
				sizeType: ['compressed'],
				sourceType: ['album'],
				success: res => {
					console.log('chooseImage success, temp path is', res.tempFilePaths[0]);
					var imageSrc = res.tempFilePaths[0];
					uni.uploadFile({
						url: 'https://unidemo.dcloud.net.cn/upload',
						filePath: imageSrc,
						fileType: 'image',
						name: 'data',
						success: res => {
							console.log('uploadImage success, res is:', res);
							uni.showToast({
								title: '上传成功',
								icon: 'success',
								duration: 1000
							});
							this.imageSrc = imageSrc;
							console.log(this.imageSrc);
						},
						fail: err => {
							console.log('uploadImage fail', err);
							uni.showModal({
								content: err.errMsg,
								showCancel: false
							});
						}
					});
				},

				fail: err => {
					console.log('chooseImage fail', err);
				}
			});
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
	background-color: rgba(25, 25, 25, 0.8);
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
			border-bottom: 1upx solid rgba(153, 153, 153, 0.9);
		}
	}

	.idCard-box {
		// display: flex;
		.title {
			display: flex;
			height: 100upx;
			align-items: center;
			color: rgba(255, 255, 255, 0.8);
			font-size: 28upx;
		}
		.down {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.box {
				display: flex;
				justify-content: center;
				margin-bottom: 30upx;
			}
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
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		margin-top: 40upx;
		top: 28%;
		color: black;
		background-color: white;
		z-index: 10;
		border: 1upx solid rgba(25, 25, 25, 0.8);
		width: 670upx;
		height: 88upx;
		border-radius: 40upx;
		text-align: center;
	}
}
</style>
