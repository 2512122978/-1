<template>
	<!-- 帮助他人注册 -->
	<view class="content">
		<view class="body">
			<view class="text1">
				<input
					class="referurl"
					value=""
					maxlength="11"
					type="number"
					v-model="inviterphone"
					placeholder="请输入邀请人的手机号码"
				/>
			</view>
			<view class="text1">
				<input
					maxlength="11"
					type="number"
					v-model="phone"
					name="referurl"
					class="referurl"
					value=""
					placeholder="请输入要注册的手机号码"
				/>
			</view>
			<view class="text3">
				<input
					v-model="password"
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
					v-model="passwordagain"
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
					v-model="nickname"
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
		</view>
		<view class="footer" @click="submit()">
			<view class="btn" type="button">确认注册</view>
		</view>
	</view>
</template>

<script>
const util = require('../../util/util.js');
const api = require('../../util/api.js');

// 此处引入你要的组件
export default {
	data() {
		return {
			phone: '',
			// code: '',
			password: '',
			passwordagain: '',
			nickname: '',
			weixin: '',
			inviterphone:'',
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
		// this.regLogin()
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
		submit() {
			let that = this;
			let phone = that.phone;
			//图文验证码（暂时没有）
			// let code = that.code
			let password = that.password;
			let passwordagain = that.passwordagain;
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
					recommend: inviterphone,
					tel: phone,
					realname: nickname,
					password: password,
					wechat: weixin,
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
		}
	}
};
</script>

<style lang="less">
// 此处引入css、less等样式
page {
	// background-image: url(../../static/images/background.png);
	background-color: rgba(25, 25, 25, 0.6);
	color: white;
}
.content {
	.head {
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		.back {
			display: flex;
			flex-direction: row;
			image {
				width: 40upx;
				height: 40upx;
				margin: 20upx;
			}
		}
		.title {
			color: #867afb;
			padding: 22upx 204upx;
			font-size: 34upx;
			font-weight: bold;
		}
	}
	.body {
		padding: 20upx 36upx;
		.text,
		.text1,
		.text2,
		.text3,
		.text4,
		.text5,
		.text6,
		.text7 {
			display: flex;
			justify-content: space-between;
			font-size: 28upx;
			padding: 20upx;
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);
			.verificationCode {
				justify-content: flex-end;
				display: flex;
				.code {
					border-radius: 50upx;
					width: 140upx;
					height: 60upx;
				}
			}
		}
	}
	.footer {
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
