<template>
	<view class="content">
	

		<view class="loginform">
			<view class="icon-zhanghao iconfont" style="font-size: 40upx;color: white;"></view>
			<input
				type="hidden"
				name="referurl"
				class="referurl"
				value=""
				placeholder="请输入手机号1233456"
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
			<view class="goback">
				已有账户，前往登录
			</view>
		</view>
	</view>
</template>

<script></script>

<style>
@import //at.alicdn.com/t/font_1069694_b0katkm1hdo.css;
	page {
	background: #260e93;
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
