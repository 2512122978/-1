<template>
	<view class="content">
		<view class="body">
			<view class="up">
				<view class="left">
					<view v-bind:class="'leftup ' + (number[0]<3?'lab':'')">联盟{{info.level}}级别</view>
					<view class="leftunder">当前等级</view>
				</view>
				<view class="middle"></view>
				<view class="right">
					<view v-bind:class="'rightup ' + (number[0]>=3?'lab':'')" >联盟{{(+info.level) + 1}}级别</view>
					<view class="rightunder">下一关</view>
				</view>
			</view>
			<view class="middle">
				<view class="stripup">直接邀请3个第1关声名不显</view>
				<view class="strip" v-if="false">
					{{ number[0]}}
				</view>
				<view class="stripdown" v-if="false"><view class="span" v-bind:style="'width:'+((number[0]/13)*100)+'%;'">.</view></view>
				<view class="stripnumber" v-if="false">
					<view class="left">0</view>
					<view class="right">3</view>
				</view>
			</view>
			<view class="footer">
				<view type="button" class="btn_big1" value="我要闯关" @click="submitverify()">
					我要闯关
				</view>
				<view class="last" @tap="goPage('/pages/applyforentry/list/list')">
					闯关记录&nbsp;>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const util = require('@/util/util.js')
	const api = require('@/util/api.js')
export default {
	data() {
		return {
			//当前邀请人数
			number: [1],
// 			grade:[{
// 				grade1:'第1关声名不显',
// 				grade2:'第2关小有名气'
// 			}],
			info: {},
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
		this.initInfo()
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
		initInfo(){
			let that = this
			let token = uni.getStorageSync('userToken')
			if(!token) {
				uni.navigateTo({
					url:'/pages/login/login'
				})
			}
			util.request(api.getUserInfo,{
				token:token
			},"POST").then(res=>{
				that.info = res.data
			})
		},
		goPage(url) {
			uni.navigateTo({
				url: url
			});
		},
		backhome() {
			uni.navigateBack(getCurrentPages() - 1);
		},
		regLogin() {
			let that = this
			let token = uni.getStorageSync('userToken')
		
			if (!token) {
				uni.showToast({
					title: "登录过期",
					icon: "none"
				})
				// new Promise()
				setTimeout(() => {
					uni.navigateTo({
						url: "/pages/index/index"
					})
				}, 700)
			}
		},
		submitverify(){
			let that = this
			util.request(api.uploadApply, {
				token: uni.getStorageSync("userToken"),
				level: (+that.info.level + 1)
			}, "POST").then((res) => {
				if (res.code == 200) {
					uni.showToast({
						title: '提交成功',
						mask: false,
						duration: 1500
					});
					that.is_shenpi = 1;
				} else if (res.code == 102) {
					uni.showToast({
						title: '没有适合的人为您审核',
						mask: false,
						duration: 1500
					});
				} else {
					uni.showToast({
						title: '升级失败',
						mask: false,
						duration: 1500
					});
				}
			});
		}
	}
};
</script>

<style lang="less">
// @import '//at.alicdn.com/t/font_1069694_b0katkm1hdo.css';

page {
	background: #2b1581;
	// background-image: url(../../static/images/background.png);
	background-color: rgba(25, 25, 25, 0.6);
}

.content {
	.backimg {
		background-color: #381fb0;
		color: white;
		display: flex;
		flex-direction: row;
		// justify-content: center;
		align-items: center;
		padding: 20upx 22upx;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);

		.backimage {
			width: 40upx;
			height: 40upx;
			color: #867afb;
		}

		.title {
			margin-left: 240upx;
			color: #867afb;
			font-weight: bold;
			font-size: 34upx;
		}
	}

	.body {
		// margin: 20upx 26upx;
		// padding: 0 30upx 30upx 30upx ;
		padding: 40upx 40upx;
		// background: #381fb0;
		border-radius: 20upx;

		.up {
			display: flex;
			flex-direction: row;
			// margin-top: 32upx;

			.left {
				display: flex;
				text-align: center;
				width: 260upx;
				flex-direction: column;
				.leftup {
					// border-radius: 20upx;
					padding: 8upx;
					color: #ada3f5;
					font-weight: 600;
					background-color: #322c68;
					border-radius: 10upx;
					font-size: 28upx;
				}

				.leftunder {
					color: #6356e2;
					font-size: 24upx;
					background-color: none;
				}
				.lab{
					color: #adc5fd;	
					background-color: #6356e2;
				}
			}
			
			.active {
				.lab,.rightup{
					color: #adc5fd;	
					background-color: #6356e2;
				}
			}
			
			.middle {
				border-bottom: 1px solid rgba(255, 255, 255, 0.1);
				height: 0upx;
				width: 36%;
			}

			.right {
				display: flex;
				text-align: center;
				width: 260upx;
				flex-direction: column;

				.rightup {
					padding: 8upx;
					color: #ada3f5;
					font-weight: 600;
					background-color: #322c68;
					border-radius: 8upx;
					font-size: 28upx;
				}

				.rightunder {
					color: #6356e2;
					font-size: 24upx;
					background-color: none;
				}
				.lab{
					color: #adc5fd;	
					background-color: #6356e2;
				}
			}
		
			// .left,right
		}

		.middle {
			color: rgba(255, 255, 255, 0.8);
			font-size: 20upx;
			padding-top: 58upx;
			font-size: 28upx;
			font-weight: 300;

			.stripdown {
				height: 20upx;
				background: rgba(255, 255, 255, 0.8);
				border-radius: 20upx;

				.span {
					background: #322c68;
					border-radius: 20upx;
					// width: 200upx;
					height: 20upx;
				}
			}

			.stripnumber {
				display: flex;
				justify-content: space-between;
			}
		}
	}

	.footer {
		.btn_big1 {
			color: white;
			margin: 20upx;
			padding: 24upx 60upx;
			font-size: 28upx;
			background: url(../../static/images/btn.png);
			background-size: 100% 100%;
			text-align: center;
		}

		.last {
			margin: 20upx 0;
			text-align: right;
			height: 10upx;
			color: #6356e2;
			font-size: 24upx;
		}
	}
}
</style>
