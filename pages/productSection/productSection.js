// pages/productSection/productSection.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconList: [{
      icon: '1.jpg',
      badge: 120,
      name: 'LOGO设计'
    }, {
      icon: '4.jpg',
      badge: 1,
      name: '小程序开发'
    }, {
      icon: '3.jpg',
      badge: 0,
      name: 'APP开发'
    }, {
      icon: '8.jpg',
      badge: 22,
      name: '包装设计'
    }, {
      icon: '5.jpg',
      badge: 0,
      name: '网站建设'
    }, {
      icon: '6.jpg',
      badge: 0,
      name: '网站维护'
    }, {
      icon: '7.jpg',
      badge: 0,
      name: '文案策划'
    }, {
      icon: '9.jpg',
      badge: 0,
      name: '三维建模'
    }],
    cardCur: 0,
    swiperList: [{
      id: 0,
      url: '../../assets/images/classifyBannerImg.jpg'
    }, {
      id: 1,
      url: '../../assets/images/classifyBannerImg.jpg',
    }, {
      id: 2,
      url: '../../assets/images/classifyBannerImg.jpg',
    }],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  }
})