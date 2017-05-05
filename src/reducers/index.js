/**
 * Created by finch on 17/5/5.
 */
import {combineReducers} from 'redux';
import ReducerGank from'./reducer_gank';

const rootReducer = combineReducers({
	gank: ReducerGank
});

export default rootReducer;