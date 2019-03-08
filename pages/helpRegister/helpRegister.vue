<template>
		<!-- 帮助他人注册 -->
	<view class="content">
		<!-- <view class="head">
			<view class="back">
				<image @click="backhome()" src="../../static/images/back.png"></image>
			<view class="title">
				为他人注册
			</view>
			</view>
		</view> -->
		<view class="body" >
			<view class="text1">
				<input
				maxlength="11" type="number"  
				v-model="phone"
					name="referurl"
					class="referurl"
					value=""
					placeholder="请输入要注册的手机号码"
				/>
			</view>
			<view class="text2" >
				<input
				v-model="code"
					maxlength="4"
					type="hidden"
					name="referurl"
					class="referurl"
					value=""
					placeholder="请输入图文验证码"
				/>
				<view class="verificationCode">
					<image class="code" src="../../static/images/verificationCode.png" mode=""></image>
				</view>
			</view>
			<view class="text3">
				<input
				v-model="psw"
				minlength="6"
					type="hidden"
					name="referurl"
					class="referurl"
					value=""
					placeholder="请输入登录密码"
				/>
			</view>
			<view class="text4">
				<input
				v-model="pswagain"
				minlength="6"
					password=""
					type="hidden"
					name="referurl"
					class="referurl"
					value=""
					placeholder="请再次确认登录密码"
				/>
			</view>
			<view class="text5">
				<input
				v-model="Nickname"
					type="hidden"
					name="referurl"
					class="referurl"
					value=""
					placeholder="请输入昵称"
				/>
			</view>
			<view class="text6">
				<input
				v-model="weixin"
					type="hidden"
					name="referurl"
					class="referurl"
					value=""
					placeholder="请填写微信号"
				/>
			</view>
			<view class="text7">
				<input
				v-model="alipay"
					type="hidden"
					name="referurl"
					class="referurl"
					value=""
					placeholder="请填写支付宝账号"
				/>
			</view>
		</view>
		<view class="footer" @click="submit()">
			<view class="btn" type="button" value="" >确认注册</view>
		</view>
	</view>
</template>

<script>
	// 此处引入你要的组件
	export default {
		data() {
			return {
				phone: '',
				code: '',
				psw:'',
				pswagain:'',
				Nickname:'',
				weixin:'',
				alipay:''
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
			this.regLogin()
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
			submit(){
				let that = this
				let phone = that.phone
				let code = that.attrs
				let psw = that.psw
				let pswagain = that.pswagain
				let Nickname = that.Nickname
				let weixin = that.weixin
				let alipay = that.alipay
				console.log(phone + code + psw + pswagain + Nickname + weixin + alipay)
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
		},
	}
</script>

<style lang="less">
	// 此处引入css、less等样式
	page{
		background-image: url(../../static/images/background.png);
		color: white;
	}
	.content{
		.head{
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);
			.back{
			display: flex;
			flex-direction: row;
				image{
					width: 40upx;
					height: 40upx;
					margin: 20upx;
				}
			}
			.title{
				    color: #867AFB;
					padding: 22upx 204upx;
					font-size: 34upx;
					font-weight: bold;
			}
		}
		.body{
			padding: 20upx 36upx;
			.text,.text1,.text2,.text3,.text4,.text5,.text6,.text7{
				display: flex;
				justify-content: space-between;
				font-size: 28upx;
				padding: 20upx;
				border-bottom: 1px solid rgba(255, 255, 255, 0.1);
				.verificationCode{
					justify-content: flex-end;
					display: flex;
					.code{
						border-radius: 50upx;
						width: 140upx;
						height: 60upx;
					}
				}
			}
		}
		.footer{
			color: white;
// 			width: 700upx;
			height: 90upx;
			background: url('../../static/images/btn.png');
			background-size: 100% 100%;
			text-align: center;
			margin: 32upx 36upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
		}
	}
</style>
