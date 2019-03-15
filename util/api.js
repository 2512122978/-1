var NewApiRootUrl = 'http://api.chuangke.bianbiankj.com/index.php/';
module.exports = {
	login: NewApiRootUrl + 'auth/app_login', // 登录
	getUserInfo: NewApiRootUrl + 'auth/getUserInfo', // 获取用户信息
	getRegister: NewApiRootUrl + 'auth/app_reg', // 注册
	getTeamList: NewApiRootUrl + 'app/getTeamList', // 获取团队列表
	getMyApply: NewApiRootUrl + 'app/getMyApply', // 获取我的申请
	uploadApply: NewApiRootUrl + 'app/uploadApply', // 提交申请
	getShenpiApply: NewApiRootUrl + 'app/getShenpiApply', // 获取下级申请
	confirmApply: NewApiRootUrl + 'app/confirmApply', // 确认申请
	
	
};
