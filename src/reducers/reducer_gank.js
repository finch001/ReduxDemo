/**
 * Created by finch on 17/5/5.
 */
import {FETCH_DATA} from '../actions/index';

export default function (state = [], action) {
	switch (action.type) {
		case FETCH_DATA:
			return action.payload.data.results;
		default: {
			return state;
		}
	}
}