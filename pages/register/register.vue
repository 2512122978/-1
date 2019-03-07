<template>
	<view class="content">
	

		<view class="loginform">
			<view class="icon-zhanghao iconfont" style="font-size: 40upx;color: white;"></view>
			<input
				type="hidden"
				name="referurl"
				class="referurl"
				value=""
				placeholder="请输入手机号"
			/>
		</view>
		<view class="loginform">
			<view class="icon-zhanghao iconfont" style="font-size: 40upx;color: white;"></view>
			<input
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
				type="hidden"
				name="referurl"
				class="referurl"
				value=""
				placeholder="填写手机邀请人手机号"
			/>
		</view>
		<view class="loginform">
			<view class="icon-zhanghao iconfont" style="font-size: 40upx;color: white;"></view>
			<input
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
				type="hidden"
				name="referurl"
				class="referurl"
				value=""
				placeholder="请填写支付宝账号"
			/>
		</view>
		<view class="lsu-submit">
			<input type="button" class="btn" value="注 册" />
		</view>
		<view class="login">
			<view class="goback" @click="backlogin()">
				已有账户，前往登录
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
		backlogin(){
			uni.navigateTo({
				url:'../index/index'
			})
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
		}
	}
};
</script>

<style>
@import //at.alicdn.com/t/font_1069694_b0katkm1hdo.css;
	page {
	background-image: url(../../static/images/background.png);
	color: rgba(255, 255, 255, .8);
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
	border-bottom: 1px solid rgba(255, 255, 255, .1);
	font-size: 26upx;
	color: rgba(255, 255, 255, .8);
}
.btn {
	
	color: #ffffff;
	font-size: 32upx;
	padding: 24upx 0upx;
	
}
.lsu-submit{
	background: url(../../static/btn.png);
	background-size: 100% 100%;
	display: flex;
	justify-content: center;
	text-align: center;
	margin: 80upx 40upx 0 80upx;
}
.goback{
	font-size: 26upx;
	color: rgba(255, 255, 255, .8);
	display: flex;
	justify-content: flex-end;
}
</style>
