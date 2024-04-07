import { baseRequest } from '@/server/index.js'

/*
* @Author: grantguo
* @Date 2024-04-07 11:07:09
* @Description: 获取用户信息
*/
export async function getUser(data) {
	return await baseRequest({
		url: '',
		method: 'POST',
		data
	});
};
