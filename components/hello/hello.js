// components/hello/hello.js
Component({

  relations:{
     "../world/world":{
       type:"parent"
     }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg: "hello component"
  },

  options: {
    multipleSlots: true
  },
  /**
   * 组件的方法列表
   */
  methods: {
    show() {
      wx.showToast({
        title: 'heloo',
      })
    }
  }
})
