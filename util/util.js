var api = require('@/util/api.js');

function formatTime(number, format) {

	var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
	var returnArr = [];

	var date = new Date(number * 1000);
	returnArr.push(date.getFullYear());
	returnArr.push(formatNumber(date.getMonth() + 1));
	returnArr.push(formatNumber(date.getDate()));

	returnArr.push(formatNumber(date.getHours()));
	returnArr.push(formatNumber(date.getMinutes()));
	returnArr.push(formatNumber(date.getSeconds()));

	for (var i in returnArr) {
		format = format.replace(formateArr[i], returnArr[i]);
	}

	return format;
}

function formatNumber(n) {
	n = n.toString()
	return n[1] ? n : '0' + n
}

/**
 * 封封微信的的request
 */
function request(url, data = {}, method = "GET") {
	return new Promise(function(resolve, reject) {
		uni.request({
			url: url,
			data: data,
			method: method,
			header: {
				'Content-Type': 'application/json'
			},
			success: function(res) {
				console.log("success");

				if (res.statusCode == 200) {

					if (res.data.errno == 401) {
						//需要登录后才可以操作
						wx.showModal({
							title: '',
							content: '请先登录',
							success: function(res) {
								if (res.confirm) {
									wx.removeStorageSync("userInfo");
									wx.removeStorageSync("token");

									wx.switchTab({
										url: '/pages/ucenter/index/index'
									});
								}
							}
						});
					} else {
						resolve(res.data);
					}
				} else {
					reject(res.errMsg);
				}

			},
			fail: function(err) {
				reject(err)
				console.log("failed")
			}
		})
	});
}

function checkLogin() {
	let token = uni.getStorageSync("userToken")
	if (!token || token == "") {
		uni.showToast({
			title: "请先登录",
			icon: "none",
			success() {
				setTimeout(() => {
					uni.removeStorageSync("userToken")
					uni.navigateTo({
						url: "/pages/index/index"
					})
				}, 500)
			}
		})

		return false;
	}

	// 	request(api.getMessage, {
	//         token: token,
	//     }, "POST").then((res) => {
	//         if (res.code === 100) {
	//             uni.showToast({
	//                 title: '登录信息失效',
	//                 icon: 'none',
	//                 success() {
	//                     setTimeout(() => {
	//                         uni.removeStorageSync("userToken")
	//                         uni.navigateTo({
	//                             url: "/pages/login/login"
	//                         })
	//                     }, 700)
	//                 },
	//             })
	//             return false;
	//         }
	//     })

	return true;
}

function goPage(url, isToken) {
	if (isToken) {
		let is_login = checkLogin()
		if (is_login) {
			uni.navigateTo({
				url: url
			})
			return
		}
	} else {
		uni.navigateTo({
			url: url
		})
	}
}

function goBack(index) {
	history.back(index)
}

function sort(arr) {
	return new Promise((resolve, reject) => {
		var flag = 1; //flag用来标记某一趟排序是否发生交换
		for (let i = 0; i < arr.length - 1; i++) {
			flag = 0; //flag置为0，如果本趟排序没有发生交换，这不会执行下一趟排序
			for (let j = 0; j < arr.length - i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					var temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
					flag = 1; //flag置为1，表示本趟排序发生了交换
				}
			}
			// console.log('newArr:' + arr);
			if (flag == 0) break;
		}
		resolve(arr)
	})
}

module.exports = {
	formatTime,
	request,
	checkLogin,
	goPage,
	goBack,
	sort,

}
