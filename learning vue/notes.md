#vue学习笔记

1. *.vue 文件，是一个自定义的文件类型，用类 HTML 语法描述一个 Vue 组件。每个 .vue文件包含三种类型的顶级语言块 \<template>, \<script> 和 \<style>。这三个部分分别代表了 html,js,css。

2. 其中 \<template> 和 \<style> 是支持用预编译语言来写的。例如教程中就用了scss预编译
        \<style lang = "scss">

3. 一个vue组件的 template 则代表它的 html 结构，注意要在里面放置一个html标签来包裹所有代码
4. vue组件的style部分是对template里的html写一些样式。
5. v-for 指令可以绑定数组的数据来渲染一个项目列表。
6. 可以用 v-on 指令绑定一个事件监听器，通过它调用我们 Vue 实例中定义的方法。
7. v-model 指令能轻松实现表单输入和应用状态之间的双向绑定。
8. 注册组件：
在 Vue 里，一个组件本质上是一个拥有预定义选项的一个 Vue 实例，在 Vue 中注册组件很简单：
// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
  template: '\<li>这是个待办项\</li>'
})


#javascript笔记
1. \<script type="text/javascript" src="main.js">\</script>
外部文件只须包含通常**要放在开始的\<script>和结束的\</script>之间的那些JavaScript 代码**即可。与解析嵌入式JavaScript 代码一样，在解析外部JavaScript 文件（包括下载该文件）时，页面的处理也会暂时停止。
<br> 注：带有src 属性的\<script>元素不应该在其\<script>和\</script>标签之间再包含额外的JavaScript 代码。

2. 为了避免全部js放在head中导致在等待下载的过程中白屏，现代web应用一般将js全部放在body元素中页面内容后面。
3. html5要求脚本按其出现顺序执行。
4. 不建议修改变量所存储的数据的类型。
5. 无论在什么情况下都没有必要把一个变量的值显式地设置为undefined，但只要意在保存对象的变量还没有真正保存对象，就应该明确地让该变量保存null值。（null相当于空对象的指针）
6. 浮点数值的最高精度是17 位小数，但在进行算术计算时其精确度远远不如整数。例如，0.1 加0.2的结果不是0.3，而是0.30000000000000004。这个小小的舍入误差会导致无法测试特定的浮点数值。
例如：
if (a + b == 0.3){ // 不要做这样的测试！
    alert("You got 0.3.");
}
7. 任何数除以0会生成NaN，NaN与任何数操作结果都是NaN，NaN与任何数都不相等（包括它自身）
8. Object 的每个实例都具有下列属性和方法。
 constructor：保存着用于创建当前对象的函数。对于前面的例子而言，构造函数（constructor）就是Object()。
 hasOwnProperty(propertyName)：用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。其中，作为参数的属性名（propertyName）必须以字符串形式指定（例如：o.hasOwnProperty("name")）。
 isPrototypeOf(object)：用于检查传入的对象是否是传入对象的原型（第5 章将讨论原型）。
 propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用for-in 语句）来枚举。与hasOwnProperty()方法一样，作为参数的属性名必须以字符串形式指定。
 toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区对应。
 toString()：返回对象的字符串表示。
 valueOf()：返回对象的字符串、数值或布尔值表示。通常与toString()方法的返回值相同。
9. 有符号右移>>, 无符号右移>>>
10. "88" == 88 true      "88" != 88 false
"88" === 88 false     "88" !== 88 true
null == undefined 会返回true，因为它们是类似的值；但null === undefined 会返回false，因为两者的类型不同。
11. ECMAScript中的所有参数传递的都是值传递，没有引用传递。
12. ECMAScript变量可能有两种不同的数据类型：
    a. 基本类型值
    b. 引用类型值：可能由多个值构成的对象
    对于引用类型的值可以为其添加属性和方法，也可以改变和删除其属性和方法。
    复制引用类型实际上两个变量指向的是同一个对象。
13. javascript中，if for内声明的变量会被加入当前执行环境中；声明变量不加var 则会自动加入全局环境中。
14. var colors = new Array(3); //创建包含三项的数组  
var colors = new Array("3");//创建包含着'3'的数组  
15. javascript中，修改数组的length属性可以移除项或者添加项  
16. javascript中的数组可以直接模拟栈（push pop）和队列 （push shift unshift）  
17. 数组的sort方法是先调用数组的toString方法再确定如何排序，因此"10"会排在"5"前面。

