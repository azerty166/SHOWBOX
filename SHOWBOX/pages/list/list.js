// pages/list/list.js
import {network} from "../../utils/network.js";
Page({


  data: {

  },

  
  onLoad: function (options) {
    var that = this;
    var type = options.type;
    that.setData({
      type:type
    });
    var title = "";
    wx.showLoading({
      title: 'Loading...',
    })
    if(type === "movie"){
      
      network.getMovieList({
        success: function (items) {
          that.setData({
            items: items
          });
          wx.hideLoading();
        },
        count: 1000
      });
      title = "Movies";
    }else if(type === 'tv'){
      
      network.getTVList({
        success: function (items) {
          that.setData({
            items: items
          });
          wx.hideLoading();
        },
        count: 1000
      });
      title = "Series";
    }else{
      
      network.getShowList({
        success: function (items) {
          that.setData({
            items: items
          });
          wx.hideLoading();
        },
        count: 1000
      });
      title = "Shows";
    }
    wx.setNavigationBarTitle({
      title: title,
    })
  },

  
  onReady: function () {

  },

  
  onShow: function () {

  },


  onHide: function () {

  },

  
  onUnload: function () {

  },

  
  onPullDownRefresh: function () {

  },

  
  onReachBottom: function () {

  },

  
  onShareAppMessage: function () {

  }
})