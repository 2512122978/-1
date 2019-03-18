<template>
	<view class="content">
		<view class="save" v-if="false">
			确认修改
		</view>
		<view class="item-list">
			<view class="row" style="height: 130upx;">
				<view class="left">
					头像
				</view>
				<view class="right">
					<block v-if="imageSrc">
						<image class="img-header" :src="imageSrc" mode="widthFix"></image>
					</block>
					<block v-else>
							<image v-model="headimg" class="img-header" src="user.headimg" mode="widthFix"></image>
					</block>
				</view>
			</view>
			<view class="row">
				<view class="left">
					真是姓名
				</view>
				<view class="right">
					<input type="text" v-model="user.realname" maxlength="5"  class="nickneme">
				</view>
			</view>
			<view class="row">
				<view class="left">
					手机号
				</view>
				<view class="right">
					<input type="text" v-model="user.tel" maxlength="11" class="nickneme">
				</view>
			</view>
			<view class="row">
				<view class="left">
					微信
				</view>
				<view class="right">
					<input type="text" v-model="user.wechat" maxlength="20" class="nickneme">
				</view>
			</view>
		</view>
		<view class="btn-box" @click="submit()">
			<view class="title">
				确定
			</view>
			<view class="btn">
				<!-- <image src="../../static/btn.png" mode="widthFix" class="checkLogin" ></image> -->
			</view>
		</view>
	</view>
</template>

<script>
	const util = require('@/util/util.js')
	const api = require('@/util/api.js')
	//全局变量
	let stack_1 = 1
	export default {
		data() {
			
			return {
			phone:'',
			address:'',
			headimg:'',
			realname:'',
				nickName:"晴儿",
				title: 'uploadFile',
				imageSrc: '',
			
			user:[]
				
			}
		},
		components: {

		},
		/**
		 * uni-app生命周期
		 * options是上个页面的传参
		 * 指的是页面加载完毕执行的函数
		 */
		onLoad(options) {
			this.imageSrc = ''
			this.regLogin()
			this.init()
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
			goPage(url) {
				uni.navigateTo({
					url: url,
				})
			},
			init() {
				let that = this
				that.tabActive = 0
				util.request(api.getUserInfo, {
					token: uni.getStorageSync("userToken")
				}, "POST").then((res) => {
					that.user = res.data
					console.log(that.user)
				})
			},
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
			regLogin() {
				let that = this
				let token = uni.getStorageSync('userToken')
			
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
			},
			submit(){
				let that = this
				
				
				
				
				
				
				
				let token = uni.getStorageSync('userToken')
				if(!token){
					uni.navigateTo({
						url:"/pages/login/login"
					})
				}
				util.request(api.editUser,{
					token: token,
					wechat: that.user.wechat,
					tel: that.user.tel,
					realname: that.user.realname,
				},"POST").then(res=>{
					if(res.code === 200) {
						uni.showModal({
							title: "修改成功"
						})
						return
					}
					uni.showModal({
						title: "修改失败"
					})
				})
			}
		}
	}
</script>

<style lang="less">
	// 此处引入css、less等样式
	page {
		// background-image: url(../../static/images/background.png);
		background-color: rgba(25, 25, 25, 0.8);
		height: 100%;
	}
	
	.save {
		position: absolute;
		color: #fff;
		top: -65upx;
		right: 20upx;
		z-index: 999;
		font-size: 30upx;
		color: rgba(255, 255, 255, 0.8);
	}

	.item-list {
		padding: 0 30upx;

		.row {
			display: flex;
			height: 100upx;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			font-size: 30upx;
			color: rgba(255, 255, 255, .8);

			.img-header {
				width: 90upx;
				border-radius: 50%;
			}

			.left {
				display: flex;
				align-items: center;
			}

			.right {
				display: flex;
				align-items: center;
			}

			.nickneme {
				text-align: right;
			}
			
			.icon {
				width: 50upx;
			}
		}
	}
	
	.btn-box {
		position: relative;
		display: flex;
		margin-top: 120upx;
		justify-content: center;
		align-items: center;
		
		.title {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 18%;
			color: black;
			z-index: 10;
			background-color: white;
			width: 670upx;
			height: 88upx;
			border-radius: 40upx;
			text-align: center;
			
		}
		.btn{
			
		}
	}
</style>
