import {network} from "../../utils/network.js";

Page({
  
  data: {

  },

  
  onLoad: function (options) {
    // MVC：Model,View,Controller
    var that = this;
    
    network.getMovieList({
      success: function(movies){
        that.setData({
          movies: movies
        });
      }
    });

    
    network.getTVList({
      success: function(tvs){
        that.setData({
          tvs: tvs
        });
      }
    });

    
    network.getShowList({
      success: function (shows) {
        that.setData({
          shows: shows
        });
      }
    });
  }
})