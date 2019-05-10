const count = {
  state: {
    num: 0,
    status: 'success',
  },
  reducers: {
    increment(state, num) {
      return {
        ...state,
        num,
      }
    }
  },
  
  effects: {
    async incrementSync(num, rootState) {
      await new Promise(resolve => {
        setTimeout(() => {
          console.log(num)
          this.increment(num)
        }, 1000);
      })
    }
  }
}

export default count