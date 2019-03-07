<template>
	<!-- 轮播图间距与阴影，id模块的间距（已修改） -->
	<view class="content">
		<view class="head">
			<view class="title">拓客新零售</view>
			<view class="Complaint" @click="complaint()">我的投诉</view>
		</view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="true" :autoplay="false" :interval="2000" :duration="500">
						<swiper-item>
							<view class="swiper-item uni-bg-green">
								<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551805493876&di=1dc8a785fbc14ef16eab8b4a8059a493&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Fa82ebad3fd1f4134a1886f93251f95cad0c85e4b.jpg"
								 class="img" mode="widthFix"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-green">
								<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551805493876&di=667301428e95f3f31cd402d114dc7aee&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2F710e7509c93d70cf7bd1ffe0f8dcd100bba12be7.jpg"
								 class="img" mode="widthFix"></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="information">
			<view class="ul">
				<view class="li">
					I&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D:&nbsp;&nbsp;&nbsp;&nbsp;153510558</li>
					I&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D:&nbsp;&nbsp;&nbsp;&nbsp;{{user[0].id}}</li>
				</view>
				<view class="li">
					等&nbsp;&nbsp;&nbsp;级：&nbsp;&nbsp;&nbsp;第一关声不嫌
					等&nbsp;&nbsp;&nbsp;级：&nbsp;&nbsp;&nbsp;{{user[0].grade}}
					<span class="Grade" @click="showgrade()">等级介绍</span>
				</view>
				<view class="li">
					姓&nbsp;&nbsp;&nbsp;名：&nbsp;&nbsp;&nbsp;晴儿</li>
					姓&nbsp;&nbsp;&nbsp;名：&nbsp;&nbsp;&nbsp;{{user[0].name}}</li>
				</view>
				<view class="li">
					推荐人：&nbsp;&nbsp;阿兴
					推荐人：&nbsp;&nbsp;{{user[0].recommender}}
				</view>
			</view>
			<view class="right">
				<view class="credit" @click="credit()">
					信用分：100分
				</view>
				<view class="account" @click="account()">
				<view class="account" @tap="goEditInfo()">
					账号安全设置
				</view>
			</view>

		</view>


		<view class="Notice">
			<view class="left">
				公告
			</view>
			<view class="center">
				<swiper class="swiper" :indicator-dots="false" :autoplay="true" :interval="2000" :vertical="true">
					<swiper-item>
						<view class="swiper-item1">
							<view class="tag">
								热点
							</view>
							<view class="text">
								关于2月14日晚系统升级维护的公告
								{{notice1[0].text}}
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item1">
							<view class="tag">
								热点
							</view>
							<view class="text">
								关于销售任务游戏上线的公告
								{{notice1[1].text}}
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="right" @click="notice()">
				更多
			</view>
		</view>
		<view class="index_middle_nav">
			<view class="btn-link">
				<image @click="helpRegister()" class="img" src="../../static/images/帮助注册.png"></image>
				<view class="title">帮助注册</view>
			</view>
			<view class="btn-link">
				<image @click="applyforentry()" class="img" src="../../static/images/申请闯关.png"></image>
				<view class="title">申请闯关</view>
			</view>
			<view class="btn-link">
				<image @click="auditEntry()" class="img" src="../../static/images/审核闯关.png"></image>
				<view class="title">审核闯关</view>
			</view>
			<view class="btn-link" @click="guild()">
				<image class="img" src="../../static/images/行会大厅.png"></image>
				<view class="title">行会大厅</view>
			</view>
		</view>
		<!-- 模态框 -->
		<view class="modal" v-show="modal">
			<view class="mask" @tap="hideModal()">
			</view>
			<view class="box">
<view class="title1">
	<image class="image" src="../../static/images/index_dialog_title.png" mode=""></image>
</view>
<view class="titleLine">
	<image class="image" src="../../static/images/dialog_title_line.png" mode=""></image>
</view>
<view class="body">
	<view class="line1">
	<image class="imageleft" src="../../static/images/13.png" mode=""></image>
	<image class="imageright" src="../../static/images/12.png" mode=""></image>
	</view>
	<view class="line1">
	<image class="imageleft" src="../../static/images/11.png" mode=""></image>
	<image class="imageright" src="../../static/images/10.png" mode=""></image>
	</view>
	<view class="line1">
	<image class="imageleft" src="../../static/images/9.png" mode=""></image>
	<image class="imageright" src="../../static/images/8.png" mode=""></image>
	</view>
	<view class="line1">
	<image class="imageleft" src="../../static/images/7.png" mode=""></image>
	<image class="imageright" src="../../static/images/6.png" mode=""></image>
	</view>
	<view class="line1">
	<image class="imageleft" src="../../static/images/5.png" mode=""></image>
	<image class="imageright" src="../../static/images/4.png" mode=""></image>
	</view>
	<view class="line1">
	<image class="imageleft" src="../../static/images/3.png" mode=""></image>
	<image class="imageright" src="../../static/images/2.png" mode=""></image>
	</view>
	<view class="line1">
	<image class="imageleft" src="../../static/images/1.png" mode=""></image>
	<image class="imageright" src="../../static/images/0.png" mode=""></image>
	</view>
</view>
<view class="body">
</view>
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
				modal: false
				modal: false,
				user:[{
					id:153510558,
					grade:'第一关声不嫌',
					name:'晴儿',
					recommender:'阿兴'
				}],
				notice1:[{
					text:'关于2月14日晚系统升级维护的公告'},
					{text:'关于销售任务游戏上线的公告'}
					]
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
		methods: {
			// 			complaint(){
			// 				uni.navigateTo({
			// 					url:'../Complaint/Complaint'
			// 				});
			// 			},
			complaint() {
				uni.navigateTo({
					url: '../complaint/complaint'
				});
			},
			helpRegister() {
				uni.navigateTo({
					url: '../helpRegister/helpRegister'
				})
			},
			goEditInfo(){
				uni.navigateTo({
					url: '/pages/editInfo/editInfo',
				})
			},
			applyforentry() {
				uni.navigateTo({
					url: '../applyforentry/applyforentry'
				})
			},
			auditEntry() {
				uni.navigateTo({
					url: '../auditEntry/auditEntry'
				})
			},
			credit() {
				uni.navigateTo({
					url: '../credit/credit'
				})
			},
			notice() {
				uni.navigateTo({
					url: '../notice/notice'
				})
			},
			showgrade() {
				let that = this
				that.modal = true
			},
			guild() {
				uni.navigateTo({
					url: '../guild/guild'
				})
			},
			hideModal() {
				let that = this
				that.modal = false
			},
			account(){
				uni.navigateTo({
					url:'../account/account'
				})
			}
		}
	};
</script>

<style lang="less">
	@import '//at.alicdn.com/t/font_1070232_urk1rzsge9.css';


	.modal {
		.mask {
			position: fixed;
			z-index: 998;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: rgba(0, 0, 0, .7);
			z-index: 2;
		}

		.box {
			position: fixed;
			width: 600upx;
			height: 900upx;
			background-image: url(../../static/images/imodelbackground.png);
			background-size: 100% 100%;
			top: calc(50% - 900upx / 2);
			;
			left: calc(50% - 600upx / 2);
			z-index: 2 + 1;
			.title1{
				padding-top: 66upx;
				padding-left: 90upx;
				.image{
				height: 42upx;
				width: 426upx;
				}
			}
			.titleLine{
				.image{
					height: 1upx;
					width: 100%;
				}
			}
			.body{
				.line1{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 21upx 40upx;
					border-bottom: 1px solid rgba(225, 225, 225, .1);
					.imageleft{
					height: 52upx;
					width: 240upx;
					}
					.imageright{
						height: 52upx;
						width: 240upx;
					}
				}
				
			}
		}
	}

	page {
		background-color: #2107a5;
	}

	.content .uni-padding-wrap {
		width: 100%;
		background-size: 100% 100%;

	}

	.page-section-spacing {

		.swiper-item {
			padding: 0 20upx;
		}

		.img {
			width: 100%;
			box-shadow: 5upx 5px 20px 0 #888888;

		}
	}

	.content .head {
		display: flex;
		align-items: center;
		text-align: center;
		padding: 24upx;

		.title {
			font-size: 36upx;
			font-family: YouYuan;
			padding-left: 120upx;
			font-weight: bold;
			width: 40%;
			color: #867afb;
			margin: 0 auto;
			display: inline-block;
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
	}

	.content .information {
		display: flex;

		background: #422e88;
		margin: 16upx 20upx;
		border-radius: 16upx;
		// padding: 12upx;
		line-height: 44upx;
		font-size: 22upx;

		.ul {
			color: rgba(255, 255, 255, .8);
			list-style: none;
			font-size: 28upx;
			margin: 0 0 0 28upx;
			padding: 0;

			.li {
				line-height: 1;
				width: 100%;
				flex: 1;
				align-items: center;
				padding: 12upx;
				font-size: 24upx;
				color: rgb(225, 225, 225, 0.8);
				text-align: left;
				list-style: none;
			}
		}

		.right {

			// color: #FF1F1F;
			.credit,
			.account {
				color: #877BF9;
				border: 1px solid #877BF9;
				font-size: 24upx;
				text-align: center;
				margin: 20upx;
				border-radius: 12upx;
				padding: 4upx 8upx;
			}

			// 			.account{
			// 				
			// 			}
		}
	}

	.content .Notice {
		background: #422e88;
		margin: 20upx 20upx;
		padding: 20upx 20upx;
		border-radius: 16upx;
		color: rgb(225, 225, 225, 0.8);
		display: flex;
		flex-direction: row;

		.left,
		.right {
			width: 100upx;
			font-size: 32upx;
		}

		.right {
			text-align: right;
			border-left: 1upx solid #F4CD4A;
		}

		.center {
			flex: 1;

			.swiper {
				height: 50upx;

				.swiper-item1 {
					display: flex;
					flex-direction: row;
					align-items: center;
				}

				.tag {
					width: 70upx;
					height: 35upx;
					padding: 5upx 5upx;
					justify-content: center;
					align-items: center;
					margin-right: 10upx;
					margin-top: 0;
					border: 1upx solid #FF1F1F;
					border-radius: 20upx;
					font-size: 24upx;
					vertical-align: middle;
					border-color: #F4CD4A;
					color: #F4CD4A;
					position: relative;
				}

				.text {
					flex: 1;
					padding: 5upx 5upx;
					align-items: center;
					text-align: left;
					margin-right: 10upx;
					margin-top: 0;
					border-radius: 20upx;
					font-size: 24upx;
					vertical-align: middle;
					border-color: #F4CD4A;
					color: #F4CD4A;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}

		.right {
			display: flex;
			height: 100%;
			justify-content: center;
			align-items: center;
			font-size: 26upx;

		}
	}


	.index_middle_nav {
		display: flex;
		margin: 0 20upx;
		background-color: rgba(255, 255, 255, .1);
		border-radius: 20upx;
		color: rgba(255, 255, 255, .8);
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 20upx 60upx;

		.btn-link {

			display: flex;
			flex-direction: column;
			height: 196upx;
			width: 35%;
			justify-content: center;
			align-items: center;
			margin-bottom: 20upx;

			.title {
				font-size: 24upx;
			}

			.img {
				width: 70upx;
				height: 70upx;
				margin-bottom: 10upx;
			}
		}
	}

	.content .footer {
		margin-top: 20upx;
		width: 100%;
		height: 104upx;
		;
		bottom: 0;
		left: 0;
		background: rgba(255, 255, 255, 0.1);
		color: #6356e2;
		font-size: 12upx;
		line-height: 2.56rem;
		text-align: center;
	}

	.Grade {
		display: inline-block;
		width: 140upx;
		height: 32upx;
		text-align: center;
		line-height: 24upx;
		color: #ADC5FD;
		background: url(../../static/images/small_btn.png);
		background-size: 100% 100%;
		margin-left: 20upx;
	}
</style>
