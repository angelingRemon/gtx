//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      url: 'http://wechat.nmyd168.com/thsw/static/images/banner01.jpg'
    }, {
      id: 1,
      url: 'http://wechat.nmyd168.com/thsw/static/images/banner02.jpg',
      }, {
        id: 2,
        url: 'http://wechat.nmyd168.com/thsw/static/images/banner03.jpg',
      }],
  },

  onLoad: function() {
    this.towerSwiper('swiperList');
  },
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  goToDesignModeTap:function(){
   app.Tools.goTo('/pages/designMode/designMode','nav');
  },
  goToMakeModeTap:function(){
    app.Tools.goTo('/pages/makeMode/makeMode','nav');
  },
  goToProductSectionTap:function(){
    app.Tools.goTo('/pages/productSection/productSection','nav');
  },
  goToServiceTap:function(){
    app.Tools.goTo('/pages/serviceMode/serviceMode','nav');
  }
})