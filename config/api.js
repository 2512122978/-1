var NewApiRootUrl = 'http://m.kvm2019.bianbiankj.com/home/';
// var NewApiRootUrl = 'http://localhost/home/';
module.exports = {
	NewApiRootUrl,
	getCommodityByTag: NewApiRootUrl + 'index/getCommodityByTag',
	getVerificationCode: NewApiRootUrl + 'token/get_check_number', //验证码（临时）
	send_check_number: NewApiRootUrl + 'app/send_check_number', //验证码
	getRegister: NewApiRootUrl + 'token/app_reg', //注册
	getToken: NewApiRootUrl + 'token/app_check_login', //获取用户token状态
	getLogin: NewApiRootUrl + 'token/app_login', //登录
	getBanners: NewApiRootUrl + 'index/getTable', // 获取轮播图
	getCommodity: NewApiRootUrl + 'shop/getCommodity', // 获取首页图片配置
	getComment: NewApiRootUrl + 'shop/getComment', // 获取首页图片配置
	getUserInfo: NewApiRootUrl + 'token/getUserInfo', //获取用户信息
	updateUserInfo: NewApiRootUrl + "app/updateUserInfo", //更新用户信息
	getGift: NewApiRootUrl + 'shop/getGift',
	getCommodityById: NewApiRootUrl + 'shop/getCommodityById',
	getUserCard: NewApiRootUrl + 'Center/getUserCard',
	getErcode: NewApiRootUrl + 'image/index',
	// 地址相关
	getAddress: NewApiRootUrl + 'shop/getAddress',
	AddressSave: NewApiRootUrl + 'shop/addAddress',
	getOrderAddress: NewApiRootUrl + 'shop/getOrderAddress',
	deleteAddress: NewApiRootUrl + 'shop/deleteAddress',
	AddressChoose: NewApiRootUrl + 'shop/chooseAddress',
	//获取我的购物订单
	get_shopOrder: NewApiRootUrl + "app/get_order",
	//获取消费者订单
	getBellowOrder: NewApiRootUrl + "app/getBellowOrder",
	//获取的的礼包
	getMyOrder: NewApiRootUrl + 'shop/getMyGiftOrder',
	//提现
	getWithdraw: NewApiRootUrl + "app/withdraw",
	//提现记录
	getWithdrawLog: NewApiRootUrl + "app/getWithdrawLog",
	//获取奖金明细
	getPrizeLog: NewApiRootUrl + "app/get_prize_log",
	// 下单
	orderGift: NewApiRootUrl + 'shop/order_gift',
	submitOrder: NewApiRootUrl + 'shop/order',
	//确认收货
	confirmOrder: NewApiRootUrl + 'shop/confirmOrder',
	//修改密码
	editPassword: NewApiRootUrl + "app/editPassword",
	//获取账单（今天和昨天）
	getWalletInfo: NewApiRootUrl + "app/getWalletInfo",

	collect: NewApiRootUrl + "app/collect", // 收藏单品
	getCollectByCommodity: NewApiRootUrl + "app/getCollectByCommodity", // 获取单品是否被我收藏
	getCollectList: NewApiRootUrl + "app/getCollectList", // 获取收藏列表
	getGiftSaleData: NewApiRootUrl + "center/getGiftSaleData",
	getSaleData: NewApiRootUrl + "center/getSaleData",
	getCommodityErcode: NewApiRootUrl + 'Image/commodity',
	//获取进货商品列表
	getAllCommodityList: NewApiRootUrl + 'shop/getAllCommodityList',
	//获取金粉用户
	getMessage: NewApiRootUrl + 'app/getMessage',
	getTeam: NewApiRootUrl + 'app/getTeam',
};
