import request from '@/utils/request'

export function transactionList(query){
	return {
		url: '/transction/list',
		method: 'get',
		params: query
	}
}
