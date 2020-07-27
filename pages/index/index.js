//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      url: '../../assets/images/bannerImg.jpg'
    }, {
      id: 1,
      url: '../../assets/images/bannerImg.jpg',
      }, {
        id: 2,
        url: '../../assets/images/bannerImg.jpg',
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
  goToClassifyTap:function(){
    app.Tools.goTo('/pages/classify/classify','nav');
  },
  goToServiceTap:function(){
    app.Tools.goTo('/pages/serviceMode/serviceMode','nav');
  }
})