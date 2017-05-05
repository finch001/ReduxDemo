/**
 * Created by finch on 17/5/5.
 */
import axios from 'axios';

export const FETCH_DATA = 'FETCH_ANDROID';
export const API = 'http://gank.io/api/data';

export function fetchData(type) {
	// 此处用的是反序列号 不是单引号
	const url = `${API}/${type}/10/1`;

	const request = axios.get(url);

	return {
		type: FETCH_DATA,
		payload: request
	};
}