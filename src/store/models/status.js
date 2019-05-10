
const status = {
  state: {
    status: 'loading',
  },
  reducers: {
    success(state) {
      return {
        ...state,
        status: 'success'
      }
    }
  }
}

export default status