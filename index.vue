<template>
	<view class="content">
		<view class="header">
			<view class="word">ID：89995</view>
			<view class="word">等级：一星会员</view>
			<view class="word">姓名：牟容</view>
			<view class="word">推荐码：tui044521</view>
			<view class="btn-set" @tap="goPage('/pages/setting/setting')">
				<image src="../../static/set.png" mode="widthFix" style="width: 100%"></image>
			</view>
		</view>
		<view class="notice">
			<view class="title">
				公告：
			</view>
			<view class="words" scroll-x="true">
				本系统只是客户商家信誉体系评定推送工具，全为自由、自愿加入原则.所有商业环节与系统无关，系统不收费,不卖产品，无分销,无代理.无奖金.为社交私域流量新生态
				打造精准流量！各自诚信为本!感恩遇见!只是提供互联网本质属性的工具。所有社交原则自律、自愿、诚信！一经投诉及查实出假，大，空问题，将冻结账号。
			</view>
		</view>
		<view class="btn-group">
			<view class="btn-link" @tap="goPage('/pages/register/register')">
				<view class="img-box">
					<image src="../../static/help1.png" mode="widthFix" class="img"></image>
				</view>
				<view class="title">
					帮助注册
				</view>
			</view>
			<view class="btn-link" @tap="goPage('/pages/upgrade/upgrade')">
				<view class="img-box">
					<image src="../../static/help2.png" mode="widthFix" class="img"></image>
				</view>
				<view class="title">
					申请升级
				</view>
			</view>
			<view class="btn-link" @tap="goPage('/pages/examine/examine')">
				<view class="img-box">
					<image src="../../static/help3.png" mode="widthFix" class="img"></image>
				</view>
				<view class="title">
					审核升级
				</view>
			</view>
			<view class="btn-link" @tap="goPage('/pages/team/team')">
				<view class="img-box">
					<image src="../../static/help4.png" mode="widthFix" class="img"></image>
				</view>
				<view class="title">
					我的团队
				</view>
			</view>
		</view>
		<view class="rucian_kf">
			<view class="word">客服姓名：九星创客系统客服</view>
			<view class="word">客服电话：QQ:1708982063( 更改账号与咨询)</view>
			<view class="word">投诉咨询：QQ:2930364644(投诉咨询专用)</view>
		</view>
	</view>
</template>

<script>
	const util = require('../../utils/util.js')
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {
			goPage(url) {
				util.goPage(url)
			}
		}
	}
</script>

<style lang="less">
	.header {
		position: relative;
		background: url('../../static/bg.jpg') no-repeat;
		height: 270upx;
		background-size: 100% 100%;
		padding: 40upx;

		.word {
			display: flex;
			height: 65upx;
			font-size: 28upx;
		}

		.btn-set {
			position: absolute;
			top: 30upx;
			right: 30upx;
			width: 60upx;
			height: 60upx;
		}
	}

	.notice {
		display: flex;
		flex-direction: row;
		line-height: 60upx;
		background: white;

		.title {
			width: 130upx;
			padding-left: 40upx;
			color: rgb(160, 0, 49);
		}

		.words {
			flex: 1;
			width: 60%;
			height: 60upx;
			white-space: nowrap;
			color: #666666;
			overflow: hidden;
			animation: marquee 50s linear infinite;

			@keyframes marquee {
				0% {
					text-indent: 27.5em
				}

				100% {
					text-indent: -105em
				}
			}
		}
	}

	.btn-group {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;

		.btn-link {
			display: flex;
			margin: 40upx 40upx;
			padding: 30upx;
			width: 230upx;
			border-radius: 30upx;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			background: white;

			.img-box {
				width: 100upx;

				.img {
					width: 100%;
				}
			}

			.title {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 60upx;
				font-size: 32upx;
			}
		}
	}

	.rucian_kf {
		margin: 5% 7.5%;
		padding: 5px 9px;
		border: 1px solid rgba(0, 0, 0, 0.25098039215686274);
		border-radius: 10px;

		.word {
			display: flex;
			font-size: 26upx;
			height: 70upx;
			align-items: center;
		}
	}
</style>
