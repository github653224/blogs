---
title: theme-reco
date: 2020-05-29
keys:
 - 'e10adc3949ba59abbe56e057f20f883e'    
 - '988a62912142f79235e58b863d6fc7c8'  
 - 'e1d754ff273077ea7f7004103e238ac1'  

publish: true
---

This is theme-reco.



### 好用的markdown语法---去掉个表格边框1
> 去掉表格边框

```commandline
<style>
tr,td, th {
   border: none!important;
}
</style>


| Time         | Length        | Speed              | Mass         |
| ------------ | ------------- | ------------------ | ------------ |
| -Millisecond | Millimetre    | Kilometre per hour | Milligram    |
| Second       | Centimetre    | Foot per second    | Gram         |
| Minute       | Inch          | Miles per hour     | Ounce        |
```

<style>
tr,td, th {
   border: none!important;
}
</style>


| Time         | Length        | Speed              | Mass         |
| ------------ | ------------- | ------------------ | ------------ |
| -Millisecond | Millimetre    | Kilometre per hour | Milligram    |
| Second       | Centimetre    | Foot per second    | Gram         |
| Minute       | Inch          | Miles per hour     | Ounce        |


### 好用的markdown语法--去掉个表格边框2
> 去掉表格边框

```commandline
<style>
table{
  border: none;
}

tr,td {
  border: none!important;
}

.td_right{
  text-justify: distribute-all-lines;
  text-align: justify;
  text-align-last:justify;
  font-weight: bold;
}

</style>


<table>

<tr >
  <td class="td_right">姓名:</td>
 
  <td width="200px">潘雪岩</td>

  <td class="td_right">性别:</td>
  <td width="200px">男</td>
</tr> 

<tr>
  <td class="td_right" width="100px">出生日期:</td>
  <td width="200px">1987.08</td>

  <td class="td_right" width="100px">现住地址:</td>
  <td width="200px">北京昌平</td>
</tr>

<tr>
  <td class="td_right" width="100px">毕业院校:</td>
  <td width="200px">绍兴纹理学院</td>

  <td class="td_right" width="100px">学历:</td>
  <td width="200px">统招本科</td>
</tr>

<tr>
  <td class="td_right" width="100px">专业:</td>
  <td width="200px">工商管理，国贸</td>

  <td class="td_right" width="100px">学位:</td>
  <td width="200px">双学士学位</td>
</tr>

<tr>
  <td class="td_right" width="100px">联系电话:</td>
  <td width="200px">15210142165</td>

  <td class="td_right" width="100px">电子邮箱:</td>
  <td width="200px">944851899@qq.com</td>
</tr>

</table>
```

<style>
table{
  border: none;
}

tr,td {
  border: none!important;
}

.td_right{
  text-justify: distribute-all-lines;
  text-align: justify;
  text-align-last:justify;
  font-weight: bold;
}

</style>


<table>

<tr >
  <td class="td_right">姓名:</td>
 
  <td width="200px">潘雪岩</td>

  <td class="td_right">性别:</td>
  <td width="200px">男</td>
</tr> 

<tr>
  <td class="td_right" width="100px">出生日期:</td>
  <td width="200px">1987.08</td>

  <td class="td_right" width="100px">现住地址:</td>
  <td width="200px">北京昌平</td>
</tr>

<tr>
  <td class="td_right" width="100px">毕业院校:</td>
  <td width="200px">绍兴纹理学院</td>

  <td class="td_right" width="100px">学历:</td>
  <td width="200px">统招本科</td>
</tr>

<tr>
  <td class="td_right" width="100px">专业:</td>
  <td width="200px">工商管理，国贸</td>

  <td class="td_right" width="100px">学位:</td>
  <td width="200px">双学士学位</td>
</tr>

<tr>
  <td class="td_right" width="100px">联系电话:</td>
  <td width="200px">15210142165</td>

  <td class="td_right" width="100px">电子邮箱:</td>
  <td width="200px">944851899@qq.com</td>
</tr>

</table>


### 好用的markdown语法---html css 文本分散对齐，两端对齐
> html css 文本分散对齐，两端对齐

```commandline
<style>
    .justify{
        text-align-last:justify;
        text-align:justify;
        /* 这行必加，兼容ie浏览器 */
        text-justify:distribute-all-lines; 
    }
</style>
<table>
    <tbody>
        <tr>
            <th><th>
            <th><th>
            <th><th>
            <th class="justify"><th>
        </tr>
    </tbody>
</table>
```

<style>
    .justify{
        text-align-last:justify;
        text-align:justify;
        text-justify:distribute-all-lines; 
    }
</style>

<table>
    <tbody>
        <tr>
            <th>1<th>
            <th>2<th>
            <th>3<th>
            <th class="justify"><th>
        </tr>
    </tbody>
</table>


### 好用的markdown语法---html P标签段落 CSS段落间距距离调整
一、line-height行高

我们对line-height的值设置越大，段落间距将会增大，同时字与字行距也会增加，不推荐用此line-height样式设置。

css代码：p{line-height:22px}

二、css padding内补白（内边距）

可以推荐使用padding设置段落上下间距。通过设置上下内补白，内距离即可实现p段落上下间距设置。

css代码：p{padding:10px 0}

三、css margin外边距

CSS段落间距调整之margin实现上下段落之间间距距离样式设置，我们知道margin是设置上下左右对象与对象之间距离设置，这里段落也可以使用此css样式实现间距。

css代码：p{margin:10px 0}

四、段落间距总结

网站文章分段，一般使用html p标签，而对分段间距设置我们推荐使用padding和margin实现，这样可轻松调间距距离，实现段与段之间距离排版美化。


### 好用的网站

- 颜色网： https://encycolorpedia.cn/named
- 

