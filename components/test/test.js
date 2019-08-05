// components/test/test.js
Component({
  behaviors:[require("../my.behavior.js")],
  //组件创建成功了
  created(){
     console.log("#1 created")
     console.log(this.data.title)
  },
  attached(){
    console.log("#2 attached")
  },
  ready(){
    console.log("#3 ready")
  },
  pageLifetimes:{
    show(){
      console.log("show")
    }
  },
  data:{
    num:0
  },
  methods:{
    update(){
      this.setData({
        num:++this.data.num
      })
    }
  },
  observers:{
    // "num":function(value){
    //   console.log(value)
    // },
    "**":function(value){
      console.log(value)
    }
  }
})
