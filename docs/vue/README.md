# 基础知识
## $nextTick $watch computed间的区别
- **$nextTick，是异步监听，从而可刷新监听DOM变化**
- **computed只有在它的相关依赖发生改变时才会重新求值,
```angular2//computed的另一种写法 
computed:{
                 checkAll:{
                     get(){
                        return this.checks.every(check=>check.value)
                     },
                     set(value){ // 双向绑定数据
                        this.checks.forEach(check =>check.value = value);
                     }
                 }
             }
```
在data里没有定义也能使用，computed是有缓存的在所依赖的数据没有发生变化是不会执行
总之：数据量大，需要缓存的时候用computed；每次确实需要重新加载，不需要缓存时用methods**
- **$watch没有缓存，能支持异步监听变化**
```
    watch: { //伪代码 这是深层监听
                getFoddsData: {
                    handler: function (val, oldVal) {
                        if(val==='order'){
                           this.groupshow=false
                           this.$nextTick(()=>{//是通过变化后异步监听操作
                              this.ordershow=true
                           })
                        }
                    },
                    deep: true
                }
            },
```
```
watch:{
            'searchForm.formData.dateType'(val){//这里没有用深层监听
                if(val==='order'){
                        this.groupshow=false
                        this.$nextTick(()=>{
                            this.ordershow=true
                        })
                }else{
                    this.ordershow=false
                    this.$nextTick(()=>{
                        this.groupshow=true
                    })
                }
            },
```
```angular2
computed:{//这里可直接监听数据是否有变化，而在data中不需要定义conCode
            conCode(){
                return this.$route.query.conCode
            }
        },
```
## v-if v-show
- **v-if如果不成里 dom就会消失**
- **v-show如果不成里 dom不会消失，操作的是样式，v-show不支持template**
```angular2//是不起作用
<template v-show="flag">
            <div>hello</div>
            <div >123</div>
        </template>
```
- **v-html**
```angular2//慎用
<div v-html="message">{{message}}</div>
export default {
  data () {
    return {
      message: "这里可以包含html标签"
    }
  }
}
```
## 生命周期
```angular2//生命周期介绍
            beforeCreate(){ // 钩子函数  beforeXXX   xxxxed
                console.log(this,this.$data); // 初始化自己的生命周期 并且 绑定自己的事件
            },
            created(){ // 如果想调用ajax 
                console.log(this.$data); // 可以获取数据和调用方法
            },
            beforeMount(){ // 第一次调用渲染函数之前
                console.log('渲染前')
            },
            template:'',
            mounted(){ // 获取真实dom  因为页面已经渲染完了
                console.log('渲染后',this.$el.innerHTML);
                this.a = 100;
                this.timer = setInterval(()=>{

                })
            },
            beforeUpdate(){
                this.b = 200;
                console.log('更新前')
            },
            updated(){ // 一般不要操作数据 可能会导致死循环
                console.log('更新后');
            },
            beforeDestroy(){
                // 当前实例还可以用
                clearInterval(this.timer);
                console.log('销毁前')
            },
            destroyed(){
                // 实例上的方法 监听都被移除掉
                console.log('销毁后')
            }
```
