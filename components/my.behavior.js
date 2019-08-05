
module.exports = Behavior({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    title: {
      type: String,
      value: "组件的初始数据"
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show() {
      wx.showLoading({
        title: 'hello',
      })
    }
  }
})