<template>
	<view class="item-list">
		<view class="row">
			<view class="title">
				微信账号
			</view>
			<input class="input" type="text" v-model="weChat" placeholder="请输入微信号" />
		</view>
		<view class="row">
			<view class="title">
				手机号码：
			</view>
			<input maxlength="11" class="input" type="number" v-model="phone" placeholder="请输入手机号码" />
		</view>
		<view class="row">
			<view class="title">
				省、市、区:
			</view>
			<input class="input" type="text" v-model="address" placeholder="请选择省、市、区" />
		</view>
		<view class="row">
			<view class="title">
				详细地址:
			</view>
			<input class="input" type="text" v-model="addressInfo" placeholder="请输入详细地址" />
		</view>
		<view class="btn-box">
			<view class="title">
				保存该地址
			</view>
			<view class="btn">
				<image src="../../../static/btn.png" mode="widthFix" class="checkLogin"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				weChat: "",
				phone: "",
				address: "",
				addressInfo: "",

			}
		}
	}
</script>

<style lang="less">
	page {
		// background-image: url(../../../static/images/background.png);
		background-color: rgba(25, 25, 25, 0.8);
		color: rgba(255, 255, 255, 0.8);
		font-size: 28upx;
		padding: 0 30upx;
	}

	.item-list {
		padding: 0;

		.row {
			display: flex;
			height: 90upx;
			align-items: center;
			// justify-content: space-between;
			font-size: 28upx;
			color: rgba(255, 255, 255, .8);
			// background: #3B25A2;

			.title {
				width: 150upx;
				margin-right: 30upx;
			}

			.yzm {
				width: 250upx;
				border-radius: 60upx;
			}
		}
	}

	.btn-box {
		position: relative;
		display: flex;
		// height: 150upx;
		margin-top: 40upx;
		justify-content: center;
		align-items: center;

		.title {
			position: absolute;
			font-size: 30upx;
			top: 20%;
			color: white;
			z-index: 2;
		}
	}
</style>
