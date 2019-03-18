<template>
	<view class="content">
		<view class="loginform">
			<view class="icon-zhanghao iconfont" style="font-size: 40upx;color: white;"></view>
			<input
				maxlength="11"
				v-model="phone"
				type="number"
				name="referurl"
				class="referurl"
				value=""
				placeholder="请输入手机号"
			/>
		</view>
		<view class="loginform">
			<view class="icon-zhanghao iconfont" style="font-size: 40upx;color: white;"></view>
			<input
				maxlength="4"
				v-model="code"
				type="hidden"
				name="referurl"
				class="referurl"
				value=""
				placeholder="请输入图文验证码"
			/>
		</view>
		<view class="loginform">
			<view class="icon-zhanghao iconfont" style="font-size: 40upx;color: white;"></view>
			<input
				v-model="psw"
				type="hidden"
				name="referurl"
				class="referurl"
				value=""
				placeholder="请输入登陆密码"
			/>
		</view>
		<view class="loginform">
			<view class="icon-zhanghao iconfont" style="font-size: 40upx;color: white;"></view>
			<input
				password=""
				v-model="pswagain"
				type="hidden"
				name="referurl"
				class="referurl"
				value=""
				placeholder="请再次确认登陆密码"
			/>
		</view>
		<view class="loginform">
			<view class="icon-zhanghao iconfont" style="font-size: 40upx;color: white;"></view>
			<input
				v-model="nickname"
				type="hidden"
				name="referurl"
				class="referurl"
				value=""
				placeholder="请输入您的昵称"
			/>
		</view>
		<view class="loginform">
			<view class="icon-zhanghao iconfont" style="font-size: 40upx;color: white;"></view>
			<input
				maxlength="11"
				v-model="inviterphone"
				type="number"
				name="referurl"
				class="referurl"
				value=""
				placeholder="填写手机邀请人手机号"
			/>
		</view>
		<view class="loginform">
			<view class="icon-zhanghao iconfont" style="font-size: 40upx;color: white;"></view>
			<input
				v-model="weixin"
				type="hidden"
				name="referurl"
				class="referurl"
				value=""
				placeholder="填写微信号"
			/>
		</view>
		<view class="loginform">
			<view class="icon-zhanghao iconfont" style="font-size: 40upx;color: white;"></view>
			<input
				v-model="alipay"
				type="hidden"
				name="referurl"
				class="referurl"
				value=""
				placeholder="请填写支付宝账号"
			/>
		</view>
		<view class="lsu-submit" @click="register()">
			<view type="button" class="btn" value="注 册">注册</view>
		</view>
		<view class="login">
			<view class="goback" @click="backlogin()">已有账户，前往登录</view>
		</view>
	</view>
</template>

<script>
const util = require('@/util/util.js')
const api = require('@/util/api.js')

export default {
	data() {
		return {
			info: {},
			isformSubmit: 1,

			phone: '',
			code: '',
			psw: '',
			pswagain: '',
			nickname: '',
			inviterphone: '',
			weixin: '',
			alipay: ''
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
		this.regLogin();
		let info = uni.getStorageSync('userInfo');
		this.info = info;
		this.recommend = info.tel;
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
		backlogin() {
			uni.navigateTo({
				url: '../index/index'
			});
		},
		submitverify() {
			uni.navigateTo({
				url: '../home/home'
			});
		},
		onClick() {
			uni.navigateTo({
				url: '../register/register'
			});
		},

		register() {
			let that = this;
			let phone = that.phone;
			//图文验证码（暂时没有）
			// let code = that.code
			let psw = that.psw;
			let pswagain = that.pswagain;
			let nickname = that.nickname;
			//邀请人手机号（recommend）
			let inviterphone = that.inviterphone;
			let weixin = that.weixin;
			//支付宝接口(暂时没有)
			// let alipay = that.alipay
			// console.log(phone+code+psw+pswagain+nickname+inviterphone+weixin+alipay)
			util.request(
				api.getRegister,
				{
					tel: phone,
					realname: nickname,
					wechat: weixin,
					password: psw,
					recommend: inviterphone
				},
				'POST'
			).then(res => {
				let code = JSON.stringify(res.code);
				if (code == 200) {
					uni.showToast({
						title: '注册成功',
						icon: 'none'
					});
					setTimeout(function() {
						uni.reLaunch({
							url: '/pages/main/main'
						});
					}, 1000);
				} else if (code == 101) {
					uni.showToast({
						title: '推荐人不存在',
						icon: 'none'
					});
					return;
				} else if (code == 102) {
					uni.showToast({
						title: '该手机号已被注册',
						icon: 'none'
					});
					return;
				} else if (code == 103) {
					uni.showToast({
						title: '系统错误',
						icon: 'none'
					});
					return;
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

<style>
@import //at.alicdn.com/t/font_1069694_b0katkm1hdo.css;
	page {
	background-color: rgba(25, 25, 25, 0.6);
	color: rgba(255, 255, 255, 0.8);
	font-size: 32upx;
	padding: 10upx 20upx;
}
.icon-zhanghao {
	/* padding: 12upx 0; */
}
.loginform {
	/* height: 48upx; */
	/* margin: 40upx; */
	display: flex;
	height: 100upx;
	align-items: center;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	font-size: 26upx;
	color: rgba(255, 255, 255, 0.8);
}
.btn {
	color: #ffffff;
	font-size: 32upx;
	padding: 24upx 0upx;
}
.lsu-submit .btn {
	background: url(../../static/btn.png);
	background-size: 100% 100%;
	display: flex;
	justify-content: center;
	text-align: center;
	margin: 80upx 40upx 0 80upx;
}
.goback {
	font-size: 26upx;
	color: rgba(255, 255, 255, 0.8);
	display: flex;
	justify-content: flex-end;
}
</style>
