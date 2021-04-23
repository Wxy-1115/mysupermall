export default {
  cartLength(state){
    let sum = 0
    for (let item of state.cartList){
      sum += item.count
    }
    return sum
  },
  cartList(state){
    return state.cartList
  }
}