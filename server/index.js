/** 接口封装 */

import { authorization } from '@/server/http/api/member.js'
import { getVertionType } from '@/common/utils/index.js'

/** 请求地址 */
export const serverUrl = {
	// 开发版
	develop: 'https://xxx.xx.com',

	// 体验版
	trial: 'https://xxx.xx.com',

	// 正式版
	release: 'https://xxx.xx.com',

} [getVertionType()];

/**
 * 请求封装方法
 * 
 * @param {Object} options 请求基本配置
 * {
 *	 url:请求地址（已带上根地址）
 * 	 contentType：请求头请求类型，默认为application/json
 *   method:请求方式（GET/POST...） 
 * }
 * @param isEmpi 是否是请求的Empi接口（请求地址、header、参数和返回参数不一样）
 */
export default function baseRequest(options) {

	options.header = { // 配置请求头
		'content-type': 'application/json',
		'token':  '',
		'Authorization': uni.getStorageSync('access_token') || ''
	};

	console.log('请求参数：', options)

	return new Promise((resolved, rejected) => {
		options.success = async ({ data }) => {
			console.log('请求结果：', data)
			let code = data.head?.code ? +data.head?.code : +data.code;
			switch (code) {
				case 200: // 请求成功返回200
					resolved(data);
					break;

				case 100: // 请求成功返回100
					// 登录过期刷新Token并重新请求（不直接放在App.vue中是由于不能保证authorization在其他请求之前）
					if (await authorization()) {
						options.header.token = getToken()
						uni.request(options)
					}
					resolved(data);
					break;

				default: // 请求成功返回其他错误码
					// 定义一个interceptError属性,对于错误自己拦截处理
					if (!options.interceptError) {
						uni.showToast({
							title: data.message,
							icon: 'none',
							duration: 3000
						});
					}
					resolved(data);
					break;
			}
		};

		// 请求失败
		options.fail = (error) => {
			uni.showToast({
				title: '请求接口出错',
				icon: 'none'
			});
			rejected(error); //错误
		};
		uni.request(options);
	})
}
