import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutation-types";

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // let oldProduct = null
      // for (let item of state.cartList){
      //   console.log(item);
      //   if (item.iid === payload.iid){
      //     oldProduct = item
      //   }
      // }
      // 查找购物车里面是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve("商品数量加一")
      } else {
        context.commit(ADD_TO_CART, payload)
        resolve("添加购物车成功")
      }
    })
  },
}