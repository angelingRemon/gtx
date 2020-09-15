// pages/ordersDetail/ordersDetail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    basicsList: [{
      icon: 'sponsorfill',
      name: '下单设计'
    }, {
      icon: 'formfill',
      name: '设计定稿'
    }, {
      icon: 'paintfill',
      name: '结款制作'
    }, {
      icon: 'squarecheckfill',
      name: '确认收货'
    },
    {
      icon: 'appreciatefill',
      name: '反馈评价'
    }],
    basics: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      basics: this.data.basics == this.data.basicsList.length - 1 ? 0 : this.data.basics + 1
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})