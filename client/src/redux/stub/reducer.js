import { withClearing } from '../../helpers/hof'
import * as types from '../types'


const initialState = {
  isGif: true,
  jpgStub: null,
  isLoading: false,
  isError: false,
  weight: {
    gif: 0,
    jpg: 0,
  },
}

const stub = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.STUB_SET_STATE: return {
      ...state,
      isGif: payload,
    }
    case types.SET_JPG_STUB: return {
      ...state,
      jpgStub: payload,
    }
    case types.SET_STUB_WEIGHT: return {
      ...state,
      weight: {
        ...state.weight,
        [payload.stub]: payload.weight,
      },
    }
    case types.GIF_GENERATED: return {
      ...state,
      isLoading: true,
    }
    case types.GIF_GENERATED_END: return {
      ...state,
      isLoading: false,
    }
    case types.GIF_GENERATED_ERROR: return {
      ...state,
      isError: true,
    }
    default: return state
  }
}

export default withClearing(stub)
