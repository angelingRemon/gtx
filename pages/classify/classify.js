//获取应用实例
const app = getApp()
Page({
  data: {
    category: [{
        name: '展架',
        id: 'guowei'
      },
      {
        name: '室内',
        id: 'shucai'
      },
      {
        name: '户外',
        id: 'chaohuo'
      },
      {
        name: 'UV卷材',
        id: 'dianxin'
      },
      {
        name: 'UV平板',
        id: 'cucha'
      },
      {
        name: '亚克力',
        id: 'danfan'
      }
    ],
    detail: [1],
    curIndex: 0,
    isScroll: false,
    toView: 'guowei',
    value: '',


  },
  onReady() {
    var self = this;
    wx.request({
      // url:'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
      // success(res){
      //     self.setData({
      //         detail : res.data
      //     })
      // }
    });

  },
  switchTab(e) {
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    app.Tools.toast('搜索' + this.data.value);
  },
  onClick() {
    app.Tools.toast('搜索' + this.data.value);
  }
})