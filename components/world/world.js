// components/world/world.js
Component({
  relations: {
    "../hello/hello": {
      type: "child"
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
 
  /**
   * 组件的方法列表
   */
  methods: {
    show() {
      wx.showToast({
        title: 'heloo',
      })
    },
    change(){
       let nodes = this.getRelationNodes("../hello/hello")
       console.log(nodes[0].setData({
          msg:"从父组件中修改子组件的状态"
       }))
      nodes[0].setData({
        msg: "从父组件中修改子组件的状态1"
      })
      nodes[1].setData({
        msg: "从父组件中修改子组件的状态2"
      })
       
    } 
     
  }  
  
})
