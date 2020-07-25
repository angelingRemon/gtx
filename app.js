//app.js
import WxValidate from 'utils/WxValidate'
import HttpServiceVpos from 'utils/HttpServiceVpos'
import Tools from 'utils/Tools'
App({
  WxValidate: (rules, messages) => new WxValidate(rules, messages),
  HttpServiceVpos: new HttpServiceVpos,
  Tools: new Tools,
  onLaunch: function () {
    //colorUI相关
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
    // 登录
    wx.login({
      success: res => {
        return;
        wx.request({
          url: 'https://apidskj.nmyd168.com/Home/Frontend/login/login',
          data: {
            code: res.code,
            flag: "Employee"
          },
          success: function (data) {
            if (data.data.status == 200) {
              that.gbData.checkLogin = true;
              //获取到用户凭证 存儲 3rd_session 
              wx.setStorageSync('third_session', data.data.result.third_session)
              if (that.checkLoginReadyCallback) {
                that.checkLoginReadyCallback(data.data);
              }
            } else {
              app.Tools.toast('系统升级中')
            }
          },
          fail: function (res) {
            console.log('err:' + res)
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  },
  globalData: {
    ColorList: [{
        title: '嫣红',
        name: 'red',
        color: '#e54d42'
      },
      {
        title: '桔橙',
        name: 'orange',
        color: '#f37b1d'
      },
      {
        title: '明黄',
        name: 'yellow',
        color: '#fbbd08'
      },
      {
        title: '橄榄',
        name: 'olive',
        color: '#8dc63f'
      },
      {
        title: '森绿',
        name: 'green',
        color: '#39b54a'
      },
      {
        title: '天青',
        name: 'cyan',
        color: '#1cbbb4'
      },
      {
        title: '海蓝',
        name: 'blue',
        color: '#0081ff'
      },
      {
        title: '姹紫',
        name: 'purple',
        color: '#6739b6'
      },
      {
        title: '木槿',
        name: 'mauve',
        color: '#9c26b0'
      },
      {
        title: '桃粉',
        name: 'pink',
        color: '#e03997'
      },
      {
        title: '棕褐',
        name: 'brown',
        color: '#a5673f'
      },
      {
        title: '玄灰',
        name: 'grey',
        color: '#8799a3'
      },
      {
        title: '草灰',
        name: 'gray',
        color: '#aaaaaa'
      },
      {
        title: '墨黑',
        name: 'black',
        color: '#333333'
      },
      {
        title: '雅白',
        name: 'white',
        color: '#ffffff'
      },
    ]
  }
})