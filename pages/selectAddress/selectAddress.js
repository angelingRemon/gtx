// pages/address/address.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:1,
        name:"任勇强",
        phone:"13296905340",
        address:"内蒙古呼和浩特市玉泉区恒盛广场C座14楼益点集团",
        isDefault:1
      },
      {
        id:2,
        name:"任勇强",
        phone:"13296905340",
        address:"内蒙古呼和浩特市玉泉区恒盛广场C座",
        isDefault:0
      },
      {
        id:3,
        name:"任勇强",
        phone:"13296905340",
        address:"内蒙古呼和浩特市益点集团",
        isDefault:0
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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