var NewApiRootUrl = 'http://api.lianmeng.bianbiankj.com/index.php/';
module.exports = {
	/**
	 * tel "13"
	 * password: "111111"
	 */
	login: NewApiRootUrl + 'auth/app_login', // 登录
	/**
	 * token: "111111"
	 */
	getUserInfo: NewApiRootUrl + 'auth/getUserInfo', // 获取用户信息
	/**
	 * password: "111111"
	 * realname: "阿萨德"
	 * recommend: "13"
	 * tel: "14"
	 * wechat: ""
	 */
	editUser: NewApiRootUrl + 'app/editUser', // 获取用户信息
	getRegister: NewApiRootUrl + 'auth/app_reg', // 注册
	/**
	 * token: "111111"
	 */
	getTeamList: NewApiRootUrl + 'app/getTeamList', // 获取团队列表
	/**
	 * token: "111111"
	 */
	getMyApply: NewApiRootUrl + 'app/getMyApply', // 获取我的申请
	/**
	 * level: 9
	 * token: "111111"
	 */
	uploadApply: NewApiRootUrl + 'app/uploadApply', // 闯关
	/**
	 * token: "111111"
	 */
	getShenpiApply: NewApiRootUrl + 'app/getShenpiApply', // 获取下级申请
	/**
	 * apply_id: id,
	 * token: uni.getStorageSync("userToken"),
	 * status: status,  1---》通过  0---》拒绝
	 * type: type  
	 */
	confirmApply: NewApiRootUrl + 'app/confirmApply', // 确认申请
	
	
};
