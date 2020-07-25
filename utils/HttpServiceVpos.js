import ServiceBase from 'ServiceBaseVpos'

class Service extends ServiceBase {
  constructor() {
    super()
    this.path = {
      initUserInfo: 'Euser/initUserInfo',  // 初始化用户信息
    }
  }
  initUserInfo(params) {
    return this.sendRequest({
      url: this.path.initUserInfo,
      data: params
    })
  }
}

export default Service