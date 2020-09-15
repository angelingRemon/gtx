//获取应用实例
const app = getApp()
Page({
  data: {
    category: [{
        name: '为您推荐',
        id: 'guowei'
      },
      {
        name: '品牌设计',
        id: 'shucai'
      },
      {
        name: 'it软件',
        id: 'chaohuo'
      },
      {
        name: '营销广告',
        id: 'dianxin'
      },
      {
        name: '电商服务',
        id: 'cucha'
      },
      {
        name: '影视动漫',
        id: 'danfan'
      },
      {
        name: '影视动漫',
        id: 'danfan'
      },
      {
        name: '工程设计',
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
  },
  goToSbconTap(){
    app.Tools.goTo('/pages/sbcon/sbcon','nav');
  }
})