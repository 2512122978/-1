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
			<input class="input" type="text" v-model="phone" placeholder="请输入手机号码" />
		</view>
		<view class="row" @tap="showMulLinkageThreePicker">
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
		<mpvue-city-picker style="color: #000000;" :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from '../../../components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		data() {
			return {
				weChat: "",
				phone: "",
				address: "",
				addressInfo: "",
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
			}
		},
		components:{
			mpvueCityPicker,
			
		},
		methods:{
			// 三级联动选择
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				this.address = JSON.stringify(e.label)
			}
		}
	}
</script>

<style lang="less">
	page {
		background: #2107A5;
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
