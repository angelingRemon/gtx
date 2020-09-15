// pages/invoice/invoice.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    way:1,
    radio: '1',
    inputShow:false,
    showText:"展开"
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

  },
  onChange(event) {
    console.log(event);
    this.setData({
      radio: event.detail,
    });
  },
  inputShowTap(){
    var inputShow = this.data.inputShow;
    this.setData({
      inputShow: !inputShow
    })
    if (inputShow){
      this.setData({
        showText:'展开'
      })
    }else{
      this.setData({
        showText: '收起'
      })
    }
  },
  makeWayTap(e){
    var way = e.currentTarget.dataset.way;
    this.setData({
      way:way
    })
  }
})