// pages/question/question.js
Page({

  /**
   * Page initial data
   */
  data: {
    question: [
      {
        id: 1,
        status: false,
        question: "身份证无法认证？",
        answer: ["身份证铺满相机窗口，不能缺边角，不能反光，或身份证放到白纸上拍照上传，横着拍照容易通过。"]
      },
      {
        id: 2,
        status: false,
        question: "快捷支付刷卡显示交易超限？",
        answer: ["①.请先查询快捷支付中各银行限额表，是否超出单笔（单日）限额。", "②.查看是否当月超限额。"]
      },
      {
        id: 3,
        status: false,
        question: "幻影无卡如何解绑储蓄卡或信用卡?",
        answer: ["储蓄卡解绑路径：支付认证—收款账号认证—解绑储蓄卡。", "信用卡解绑路径：小程序主页面—点击钱包余额—点击信用卡列表—解绑信用卡。"]
      },
      {
        id: 4,
        status: false,
        question: "登录显示未认证问题?",
        answer: ["如支付信息已完善，登录上去显示未认证，退出去重新进，无需再认证。"]
      },
      {
        id: 5,
        status: false,
        question: "登录后页面没有推广二维码?",
        answer: ["需升级为金牌用户才有分享码。"]
      },
      {
        id: 6,
        status: false,
        question: "刷卡未到账?",
        answer: [
          "①.检查到账卡是否绑定的二类卡;",
          "②.检查小程序和鼎刷极速版是否绑定同一张卡;",
          "③.请先核实到账卡，有时短信未提示也会到账。"
        ]
      }
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  openAnswer: function (e) {
    var i = e.currentTarget.dataset.index;
    var question = this.data.question;
    question.forEach((item, index) => {
      this.data.question[index].status = false;
      if (i == index) {
        this.data.question[index].status = true
      }
    })
    this.setData({
      question: question
    })
  }
})