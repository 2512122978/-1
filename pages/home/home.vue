<template>
	<view class="content">
		<view class="head">
			<view class="title">拓客新零售</view>
			<view class="Complaint">我的投诉</view>
		</view>
		<view class="index_banner">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper
							class="swiper"
							:indicator-dots="indicatorDots"
							:autoplay="autoplay"
							:interval="interval"
							:duration="duration"
						>
							<swiper-item>
								<view class="swiper-item uni-bg-red">
									<image src="../../static/swiper1.png" mode=""></image>
								</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-green">
									<image src="../../static/swiper2.png" mode=""></image>
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</view>
		<view class="information">
			<view class="ul">
				<ul>
					<li class="li1">I&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D:153510558</li>
					<li>
						等&nbsp;&nbsp;&nbsp;&nbsp;级：第一关声不嫌
						<span class="Grade">等级介绍</span>
					</li>
					<li>姓&nbsp;&nbsp;&nbsp;&nbsp;名：晴儿</li>
					<li>推荐人：阿兴</li>
				</ul>
			</view>
		</view>
		<view class="Notice">公告</view>
		<view class="Modular">
			<view class="helpRegister">
				<image class="help" src="../../static/images/帮助注册.png" mode=""></image>
				帮助注册
			</view>
			<view class="applyCustoms">
				<image class="apply" src="../../static/images/申请闯关.png" mode=""></image>
				申请闯关
			</view>
			<view class="examineCustoms">
				<image class="examine" src="../../static/images/审核闯关.png" mode=""></image>
				审核闯关
			</view>
			<view class="guildHall">
				<image class="guild" src="../../static/images/行会大厅.png" mode=""></image>
				行会大厅
			</view>
		</view>
		<view class="footer">在线客服： QQ 2708232258</view>
	</view>
</template>

<script>
// 此处引入你要的组件
export default {
	data() {
		return {
			background: ['color1', 'color2', 'color3'],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500
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
	computed: {
		changeIndicatorDots(e) {
			this.indicatorDots = !this.indicatorDots;
		},
		changeAutoplay(e) {
			this.autoplay = !this.autoplay;
		},
		intervalChange(e) {
			this.interval = e.target.value;
		},
		durationChange(e) {
			this.duration = e.target.value;
		}
	},
	/**
	 * Vue监听器
	 * 存放的函数，里面的函数名通常是data的数据
	 * 监听data的数据，一旦发生改变就执行里面对应的函数
	 */
	watch: {},
	/**
	 * Vue的自定义方法
	 */
	methods: {}
};
</script>

<style lang="less">
@import '//at.alicdn.com/t/font_1070232_urk1rzsge9.css';
page {
	background-color: #2107a5;
}
.content .head {
	display: flex;
	align-items: center;
	text-align: center;
	padding: 24upx;
	// flex-direction: column;
	.title {
		font-size: 36upx;
		font-family: YouYuan;
		font-weight: bold;
		width: 40%;
		// height: 10upx;
		color: #867afb;
		// text-align: center;
		margin: 0 auto;
		display: inline-block;
		// vertical-align: middle;
		// line-height: 00upx;
	}
	.Complaint {
		font-family: Helvetica, PingFangSC-Regular, 'Droid Sans', Arial, sans-serif;
		font-family: FZPangWa-M18S;
		font-weight: 100;
		width: 20%;
		font-size: 28upx;
		color: white;
	}
}
.content .swiper {
	text-align: center;
	width: 100%;
	// padding: 0 20upx;
}
.content .information {
	background: #422e88;
	margin: 20upx 20upx;
	border-radius: 16upx;
	.ul {
		color: rgba(255, 255, 255, .8);
		list-style: none;
		font-size: 28upx;
		margin: 0 0 0 -60upx;
		padding: 0  ;
		li {
			width: 100%;
			display: flex;
			flex: 1;
			align-items: center;
			padding: 12upx;
			font-size: 24upx;
			color: rgb(225,225,225,0.8);
			text-align: left;
			list-style: none;
		}
	}
}
.content .Notice {
	background: #422e88;
	margin: 20upx 20upx;
	padding: 20upx 20upx;
	border-radius: 16upx;
	color: rgb(225,225,225,0.8);
}
.content .Modular{
		display: flex;
		flex-direction: row;
	
	.helpRegister{
		width: 50%;
	.help{
		display: flex;
		flex-direction: column;
		width: 140upx;
		height: 140upx;
	}
		
	}
	.applyCustoms{
		width: 50%;
	.apply{
		display: flex;
		flex-direction: column;
		width: 140upx;
		height: 140upx
	}
	}
	.examineCustoms{
		.examine{
			display: flex;
			flex-direction: column;
			width: 140upx;
			height: 140upx
		}
	}
	.guildHall{
		.guild{
			display: flex;
			flex-direction: column;
			width: 140upx;
			height: 140upx
		}
	}
	
}

.content .footer {
	margin-top: 0.5rem;
	width: 100%;
	height: 2.56rem;
	bottom: 0;
	left: 0;
	background: rgba(255, 255, 255, 0.1);
	color: #6356e2;
	font-size: 0.512rem;
	line-height: 2.56rem;
	text-align: center;
}
</style>
