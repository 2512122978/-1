<template>
	<view class="content">
		<view class="logoimg">
			<view class="logo-wrap-bg">
				<view class="img">
					<image class="logo" src="../../static/logo.png"></image>
				</view>
			</view>
		</view>
		<view class="text">
			<p class="p">{{login[2].text3}}</p>
		</view>
		<view class="loginsingup-input loginsingup-input_login">
			<!-- 登陸表单 -->
			<view class="h1">
				{{login[0].text1}}
			</view>
			<view class="loginform">
				<image class="loginimg" src="../../static/login_id.png" mode=""></image>
				<input maxlength="11" type="number" :class="'referurl '+ (accAcitve?'on':'')" v-model="acc" placeholder="请输入账号"
				 @focus="input('acc')" @blur="input_plur('acc')" />
			</view>
			<view class="loginpsdform">
				<image class="pswimg" src="../../static/login_pwd.png" mode=""></image>
				<input type="text" password="true" :class="'referurl '+ (pwdAcitve?'on':'')" v-model="pwd" placeholder="请输入密码"
				 @focus="input('pwd')" @blur="input_plur('pwd')" />
			</view>
			<view class="register" @click="onClick">{{login[1].text1}}</view>
		</view>
		<view class="submit_login">
			<view class="lsu-submit">
				<view type="button" class="btn_big1" value="登 录" @click="submitverify()">
					{{login[0].text1}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 此处引入你要的组件
	export default {
		data() {
			return {
				//输入框样式的激活状态
				accAcitve: false,
				//输入框样式的激活状态
				pwdAcitve: false,
				login: [{
						text1: '登录'
					},
					{
						text1: '注册账号'
					}, {
						text3: '拓客新零售'
					}
				],

				acc: '',
				pwd: '',
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
			submitverify() {
				let that = this
				let acc = that.acc
				let pwd = that.pwd
				console.log("acc:"+acc)
				if (!acc) {
					uni.showToast({
						title: "输入账号！",
						icon: "none"
					})
					return
				}

				if (!/^1[34578]\d{9}$/.test(acc)) {
					uni.showToast({
						title: "输入正确账号！",
						icon: "none"
					})
					return
				}

				if (!pwd) {
					uni.showToast({
						title: "输入密码！",
						icon: "none"
					})
					return
				}

				if (pwd.length < 6) {
					uni.showToast({
						title: "密码少于6位！",
						icon: "none"
					})
					return
				}

				let apiJs
				//这是登录接口
				//必填：acc。pwd
				apijs.login = "www.xxx/m=getLogin"
				
				uni.request({
					url: apiJs.login,
					data: {
						account: acc,
						password: pwd,
					},
					method: "post",
					success: (res) => {
						if(res.token) {
							uni.setStorageSync('token',res.token)
							return
						}
						uni.navigateTo({
							url:'../home/home',
						})
// 						uni.showToast({
// 							title:"登录失败",
// 							icon:"none"
// 						})
					}
				})
			},
			onClick() {
				uni.navigateTo({
					url: '../register/register'
				});
			},
			input(res) {
				let that = this
				if (res === "acc") {
					that.accAcitve = true
				}
				if (res === "pwd") {
					that.pwdAcitve = true
				}
			},
			input_plur(res) {
				let that = this
				if (res === "acc") {
					that.accAcitve = false
				}
				if (res == "pwd") {
					that.pwdAcitve = false
				}
			},
		}
	};
</script>

<style lang="less">
	@import '//at.alicdn.com/t/font_1070232_urk1rzsge9.css';

	page {
		background-image: url(../../static/images/background.png);
		padding: 0 50upx;
	}

	.content .logo-wrap-bg {
		// background: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		// padding-top: 16upx;
		margin: 120upx 50upx 0 50upx;
		padding: 0;
		font-size: 24upx;
		line-height: 1;
		color: #333;
	}

	.img {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80upx;
		height: 80upx;
	}

	.content .logoimg .logo-wrap-bg .img {
		border-radius: 50%;
		background-color: rgba(30, 30, 118, 1);
		width: 160upx;
		height: 160upx;
		display: flex;
		justify-content: center;
		align-items: center;

		// 	height: 300upx;
		// 	margin: 50upx;
		.logo {
			width: 100upx;
			height: 100upx;
		}
	}

	.content .logoimg {
		// 	display: flex;
		// 	justify-content: center;
		// 	align-items: center;
		// 	height: 300upx;
		// 	width: 100%;
	}

	.content .text {
		color: white;
		display: flex;
		justify-content: center;
		margin: 16upx 0;
		font-weight: 100;

		.p {
			font-weight: 100;
			color: rgba(255, 255, 255, 0.8);
		}
	}

	.content .loginsingup-input {
		// background: rgba(255, 255, 255, .3);
		background: #423087;
		margin-top: 120upx;
		padding: 20upx 30upx;
		padding-bottom: 120upx;
		border-radius: 3%;

		.h1 {
			display: flex;
			height: 80upx;
			padding: 0 20upx;
			align-items: center;
			color: white;
			font-size: 50upx;
			font-weight: 100;
		}

		.iconfont {
			margin-right: 20upx;
		}

		.referurl {
			color: #fff;
			height: 24upx;
			font-size: 24upx;
			width: 68%;

		}

		.referurl.on {
			background: white;
			color: #002060;
		}
	}

	.loginform,
	.loginpsdform {
		display: flex;
		flex-direction: row;
		height: 100upx;
		width: 100%;
		align-items: center;
		border-bottom-style: solid;
		// border-bottom: #333;
		border-bottom: 1upx solid rgba(255, 255, 255, 0.8);
		padding: 20upx 0;
	}

	.submit_login {
		display: flex;
		justify-content: center;
	}

	.btn_big1 {
		position: relative;
		top: -50upx;
		display: flex;
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

	.lsu-submit {}

	.register {
		color: white;
		font-size: 24upx;
		margin: 10upx 0;
		font-weight: normal;
		color: rgba(255, 255, 255, 0.8);
	}

	.loginimg {
		width: 36upx;
		height: 36upx;
		padding: 0 20upx;
	}

	.pswimg {
		width: 36upx;
		height: 36upx;
		padding: 0 20upx;
	}

	.login_id {
		// 	width: 100%;
		// 	display: flex;
		// 	justify-content: center;
	}
</style>
