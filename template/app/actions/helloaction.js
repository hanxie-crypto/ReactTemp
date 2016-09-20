import * as types from '../constants';


function hello(data) {
    return {
        type: types.HELLOWORD,
        data: data,
    };
}
