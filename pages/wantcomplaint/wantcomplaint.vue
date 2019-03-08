<template>
	<view class="content">
		<view class="head">
			<view class="text">
				抵制销售假货 拒绝销售空包 注意自我保护 谨防上当受骗 持续增加销量 投机取巧封号
				合理培养人才 享受健康人生
			</view>
		</view>
		<view class="body">
			<view class="title">
				<view class="span"></view>
				<view class="title1">请填写相关投诉的内容：</view>
			</view>
			<view class="text"><input type="text" value="请填写相关内容" /></view>
		</view>
		<!-- 上传图片 -->
		<view class="footer">
			<view class="title">
				<view class="span"></view>
				<view class="title1">请填写相关投诉的内容：</view>
			</view>
			<view class="img">
					
				<block v-if="imageSrc">
					<image class="image1" :src="imageSrc" mode="widthFix"></image>
				</block>
				<block v-else>
					<view class="image1" @click="chooseImage1()">
						<image
							class="image1"
							src="../../static/images/upload_img.png"
							mode=""
						></image>
					</view>
				</block>

				<block v-if="imageSrc2">
					<image class="image2" :src="imageSrc2" mode="widthFix"></image>
				</block>
				<block v-else>
					<view class="image2" @click="chooseImage2()">
						<image
							class="image2"
							src="../../static/images/upload_img.png"
							mode=""
						></image>
					</view>
				</block>

				<block v-if="imageSrc3">
					<image class="image3" :src="imageSrc3" mode="widthFix"></image>
				</block>
				<block v-else>
					<view class="image3" @click="chooseImage3()">
						<image
							class="image3"
							src="../../static/images/upload_img.png"
							mode=""
						></image>
					</view>
				</block>
			</view>
		</view>
		<view class="button">
			<view type="button" class="btn_big1" value="">提交</view>
		</view>
	</view>
</template>

<script>
// 此处引入你要的组件
export default {
	data() {
		return {
			title: 'uploadFile',
			imageSrc: '',
			title2: 'uploadFile2',
			imageSrc2: '',
			title3: 'uploadFile3',
			imageSrc3: ''
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
		this.imageSrc2 = '';
		this.imageSrc3 = '';
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
		chooseImage2: function() {
			let that = this;
			uni.chooseImage({
				count: 1,
				sizeType: ['compressed'],
				sourceType: ['album'],
				success: res => {
					console.log('chooseImage success, temp path is', res.tempFilePaths[0]);
					var imageSrc2 = res.tempFilePaths[0];
					uni.uploadFile({
						url: 'https://unidemo.dcloud.net.cn/upload',
						filePath: imageSrc2,
						fileType: 'image',
						name: 'data',
						success: res => {
							console.log('uploadImage success, res is:', res);
							uni.showToast({
								title: '上传成功',
								icon: 'success',
								duration: 1000
							});
							this.imageSrc2 = imageSrc2;
							console.log(this.imageSrc2);
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
		chooseImage3: function() {
			let that = this;
			uni.chooseImage({
				count: 1,
				sizeType: ['compressed'],
				sourceType: ['album'],
				success: res => {
					console.log('chooseImage success, temp path is', res.tempFilePaths[0]);
					var imageSrc3 = res.tempFilePaths[0];
					uni.uploadFile({
						url: 'https://unidemo.dcloud.net.cn/upload',
						filePath: imageSrc3,
						fileType: 'image',
						name: 'data',
						success: res => {
							console.log('uploadImage success, res is:', res);
							uni.showToast({
								title: '上传成功',
								icon: 'success',
								duration: 1000
							});
							this.imageSrc3 = imageSrc3;
							console.log(this.imageSrc3);
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
		}
	}
};
</script>

<style lang="less">
// 此处引入css、less等样式
page {
	background-image: url(/static/img/background.b024e32d.png);
}
.content {
	.head {
		background-image: url(/static/img/background.b024e32d.png);
		margin: 20upx 24upx;
		.text {
			color: #867afb;
			font-size: 0.512rem;
			line-height: 36upx;
		}
	}
	.body {
		padding: 28upx;
		border-radius: 20upx;
		background: rgba(255, 255, 255, 0.1);
		margin: 28upx 20upx;
		.title {
			// padding: 4upx;
			display: flex;
			align-items: center;
			.span {
				height: 8px;
				width: 0.5px;
				background-color: #ff8c00;
				margin: 10upx;
			}
			.title1 {
				font-size: 28upx;
				color: rgba(255, 255, 255, 0.8);
			}
		}
		.text {
			color: rgb(169, 169, 169);
			font-size: 20upx;
			padding: 10upx;
			height: 240upx;
		}
	}
	.footer {
		padding: 28upx;
		border-radius: 20upx;
		background: rgba(255, 255, 255, 0.1);
		margin: 28upx 20upx;
		.title {
			// padding: 4upx;
			display: flex;
			align-items: center;
			.span {
				height: 8px;
				width: 0.5px;
				background-color: #ff8c00;
				margin: 10upx;
			}
			.title1 {
				font-size: 28upx;
				color: rgba(255, 255, 255, 0.8);
			}
		}
		.img {
			display: flex;
			justify-content: center;
			padding: 20upx;
		}
		.image1,
		.image2,
		.image3 {
			width: 210upx;
			height: 140upx;
			padding: 6upx;
		}
	}
	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		.btn_big1 {
			display: flex;
			align-items: center;
			position: relative;
			background: url(../../static/btn.png);
			background-size: 100% 100%;
			justify-content: center;
			align-items: center;
			text-align: center;
			width: 530upx;
			height: 80upx;
			border-radius: 45upx;
			color: white;
		}
	}
}
</style>
