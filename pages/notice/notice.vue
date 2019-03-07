<template>
	<view class="content">
		<!-- <view class="backimg">
			<image
				@click="backhome()"
				class="backimage"
				src="../../static/images/back.png"
				mode=""
			></image>
			<view class="title">公告</view>
		</view> -->
		<view class="head" v-for="(item, index) in noticed" :key="index" @click="noticedetails()">
			<view class="left"><image class="imagenotic" src="../../static/images/notice.png" mode=""></image></view>
			<view class="right">
				<view class="title">{{noticed[0].title}}</view>
				<view class="img">
					<image class="image"
						:src="noticed[0].image"
						mode=""
					></image>
				</view>
				<view class="text">
					{{noticed[0].text}}
				</view>
				<view class="time">{{noticed[0].time}}</view>
			</view>
		</view>
		<view class="footer"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			noticed:[{
				title:'关于拓客新零售系统商家注意事项的公告',
				text:'商家注意事项： 使用拓客系统必须以实物商品交易为基础。严禁货币类，高风险虚拟产品交易。 严禁退还利润不发货的行为。实名认证一人一号严禁多号。发现虚拟交易玩资金不卖货者封号，举报属实，该号归举报者所有，大家一起监督避免害群之马影响大家使用。',
				time:'2019.03.05 20:00:38',
				image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551805493876&di=1dc8a785fbc14ef16eab8b4a8059a493&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Fa82ebad3fd1f4134a1886f93251f95cad0c85e4b.jpg'
			},
			{
				title:'关于拓客新零售系统商家注意事项的公告',
				text:'商家注意事项： 使用拓客系统必须以实物商品交易为基础。严禁货币类，高风险虚拟产品交易。 严禁退还利润不发货的行为。实名认证一人一号严禁多号。发现虚拟交易玩资金不卖货者封号，举报属实，该号归举报者所有，大家一起监督避免害群之马影响大家使用。',
				time:'2019.03.05 20:00:38',
				image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551805493876&di=1dc8a785fbc14ef16eab8b4a8059a493&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Fa82ebad3fd1f4134a1886f93251f95cad0c85e4b.jpg'
				
			}
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
	onLoad(options) {
		// this.init();
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
		backhome() {
			uni.navigateBack(getCurrentPages() - 1);
		},
		noticedetails(){
			uni.navigateTo({
				url:'../noticedetails/noticedetails'
			})
		}
	}
};
</script>

<style lang="less">
page {
	background-image: url(../../static/images/background.png);
	font-weight: 560;
	color: rgba(255, 255, 255, 0.8);
	// font-size: 20upx;
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
	.head,.body{
		padding: 20upx 20upx;
		display: flex;
		justify-content: center;
		border-bottom: 1px solid #e5e5e5;
		border-color: rgba(255, 255, 255, .1);
		.left{
			.imagenotic{
			width: 48upx;
			height: 48upx;
			}
		}
		.right{
			.title{}
				padding: 0 12upx;
				font-size: 28upx;
				.img{
					.image{
						padding: 20upx 0;
						height: 240upx; 
					}
				}
				.text{
					display: block;
					
					font-size: 24upx;
					font-weight:200;
					width:640upx;
					height: 100upx;
					overflow: hidden;
					// white-space: nowrap;
					text-overflow: ellipsis;
				}
				.time{
					padding: 12upx 0;
					font-size: 16upx;
				}
		}
	}
}
</style>
