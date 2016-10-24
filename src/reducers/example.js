import * as types from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case types.ACTION_TYPE:
            return action.data;
        default:
            return state;
    }
};