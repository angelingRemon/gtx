// pages/sbcon/sbcon.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dot: '...'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加载中点点点
    setInterval(this.dotTap, 400);
    //匹配成功
    setTimeout(()=>{
      app.Tools.goTo('/pages/serviceSbcon/sbconSuccess/sbconSuccess','red');
    },5000)
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

  },
  dotTap() {
    let dom = this.data.dot;
    if (dom.length >= 6) {
      this.setData({
        dot: ""
      })
    } else {
      var dot = dom + '.';
      this.setData({
        dot: dot
      })

    }
  }
})