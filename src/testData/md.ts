const a:string = `### Select 当使用v-model 绑定value时

组件的data 与 props属性顺序 竟然 与其是否能绑定成功有关

版本说明：

用的时vue CLi 4.5.13 来新建的vue2项目

package.json 中vue的版本为大于2.6.11 

### 问题阐述

我在调用定义好的多选框的组件时，发现如果组件中的 props属性在data属性前面，那么vue 就会显示warning

效果是 ： 多选框中无法显示选中的value

![image-20210928203848439](C:\Users\精灵王\AppData\Roaming\Typora\typora-user-images\image-20210928203848439.png)

父组件调用代码如下：





   // mounted(){
   //   console.log("create");
   //   console.log(this.options)
   // }
  }
}
</script>

<style scoped>


export default {
  name: "Select",
  data(){
    return {
      my_value:'',
    }
  },
  props:{
    options:{
      type:Array,
      default(){
        return [];
      }
},


### 总结

我无法理解这样为啥就能行，属性的顺序也有关吗？`
export default a