import * as types from '../types'
/* eslint-disable func-names */

export function toggleStubState(state) {
  return function (dispatch) {
    dispatch({
      type: types.STUB_SET_STATE,
      payload: state,
    })
  }
}
