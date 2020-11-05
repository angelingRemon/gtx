import ServiceBase from 'ServiceBaseVpos'

class Service extends ServiceBase {
  constructor() {
    super()
    this.path = {
      orders: 'orders',  // 订单列表
    }
  }
  orders(params) {
    return this.sendRequest({
      url: this.path.orders,
      data: params,
      method:"GET"
    })
  }
}

export default Service