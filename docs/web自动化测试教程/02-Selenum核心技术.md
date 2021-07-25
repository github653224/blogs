---
title: Selenum核心技术
date: 2020-07-25
sidebar: auto
---


## 第二章 SE 核心技术

## 2.1 Selenium元素定位

>  要想操作Web界面上的元素，首先要定位到该元素，Selenium提供了定位元素的.这些方法都被定义在WebDriver类中，这些方法都以find开头例如：
> find_element_by_id，find_element_by_name等。本节我们就来看一下如何实现元位。



## 2.1.1 八大元素定位

| 序号 | 方法名称                          | 描述                         |
| ---- | --------------------------------- | ---------------------------- |
| 1    | find_element_by_id                | 通过id定位元素               |
| 2    | find_element_by_xpath             | 通过xpath定位元素            |
| 3    | find_element_by_link_text         | 通过连接文本定位元素         |
| 4    | find_element_by_partial_link_text | 通过部分（模糊）链接文本定位 |
| 5    | find_element_by_name              | 通过标签名称定位             |
| 6    | find_element_by_tag_name          | 通过标签名称定位             |
| 7    | find_element_by_class_name        | 通过css class定位            |
| 8    | find_element_by_css_selector      | 通过css选择器                |

test_locator.py

```python
from selenium import webdriver
from time import sleep


# driver = webdriver.Chrome()
# driver.get('https://wwww.baidu.com')
# sleep(1)
# driver.maximize_window()
# driver.find_element_by_id('kw').send_keys('selenium')
# driver.find_element_by_id('su').click()
# sleep(5)
# driver.quit()
from selenium.webdriver.common.by import By


class TestCase(object):

    def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        self.driver.get('https://wwww.baidu.com')
        sleep(1)

    def test_id(self):

        self.driver.find_element_by_id('kw').send_keys('selenium')
        self.driver.find_element_by_id('su').click()
        sleep(2)
        # self.driver.quit()

    def test_name(self):
        self.driver.find_element_by_name('wd').send_keys('selenium')
        self.driver.find_element_by_id('su').click()
        sleep(2)
        self.driver.quit()

    def test_link_test(self):
        self.test_id()
        self.driver.find_element_by_link_text('百度首页').click()
        sleep(3)
        self.driver.quit()

    def test_partial_link_text(self):
        self.test_id()
        self.driver.find_element_by_partial_link_text('首页').click()
        sleep(3)
        self.driver.quit()

    def test_tag_name(self):
        # self.test_id()
        el = self.driver.find_elements_by_tag_name('input')[0]
        print(el)
        sleep(3)
        self.driver.quit()

    def test_class_name(self):
        self.driver.find_element_by_class_name('s_ipt').send_keys('selenium')
        self.driver.find_element_by_id('su').click()
        sleep(2)
        self.driver.quit()

    def test_xpath(self):
        self.driver.find_element_by_xpath('//*[@id="kw"]').send_keys('selenium')
        self.driver.find_element_by_xpath("//input[@id='su']").click()
        sleep(2)
        self.driver.quit()

    def test_css_selector(self):
        self.driver.find_element_by_css_selector("#kw").send_keys('selenium')
        self.driver.find_element_by_css_selector("#su").click()
        sleep(2)
        self.driver.quit()

    def test_find_element(self):
        self.driver.find_element(By.ID, value="kw").send_keys('selenium')
        self.driver.find_element(By.XPATH, "//input[@id='su']").click()
        sleep(2)
        self.driver.quit()


if __name__ == '__main__':
    case = TestCase()
    # case.test_id()
    # case.test_name()
    # case.test_link_test()
    # case.test_partial_link_text()
    # case.test_tag_name()
    # case.test_class_name()
    # case.test_xpath()
    # case.test_css_selector()
    case.test_find_element()
```



## 2.1.2 WebDriver 相关属性

> WebDriver类还有一些其他的常用属性和方法，这一节我们就来学习一下。

<font style="color:red">浏览器相关属性</font>



| 属性                                                 | 属性描述             |
| ---------------------------------------------------- | -------------------- |
| driver.name                                          | 浏览器名称           |
| driver.current_url                                   | 当前url              |
| driver.title                                         | 当前页面标题         |
| driver.page_source                                   | 当前页面源码窗口句柄 |
| driver.current_window_handle / driver.window_handles | 当前窗口所有句柄     |



test_driver_property.py

```python
from selenium import webdriver
from time import sleep
"""
浏览器的相关属性
"""


class TestCase(object):
    def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        self.driver.get('https://www.baidu.com')

    def test_property(self):
        print(self.driver.name)
        print(self.driver.title)
        print(self.driver.current_window_handle)
        print(self.driver.current_url)
        print(self.driver.get_window_size())
        print(self.driver.window_handles)
        # print(self.driver.page_source)
        self.driver.quit()

    def test_metho(self):
        self.driver.find_element_by_id("kw").send_keys("selenium")
        self.driver.find_element_by_id("su").click()
        sleep(3)
        self.driver.back()
        sleep(2)
        self.driver.refresh()
        sleep(2)
        self.driver.forward()
        sleep(2)
        self.driver.quit()


if __name__ == '__main__':
    case = TestCase()
    # case.test_property()
    case.test_metho()

```



<font style="color:blue;">**浏览器相关方法**</font>



| 方法                            | 描述               |
| :------------------------------ | ------------------ |
| driver.back(）                  | 后退               |
| driver.forward(）               | 前进               |
| driver.refresh()                | 刷新页面           |
| driver.close()                  | 关闭TAB页          |
| driverquit()                    | 关闭浏览器         |
| driver.switch_to.frame()        | 切换进frame框架    |
| driver.switch_to.alert          | 切换到弹框         |
| driver.switch_to.active_element | 切换到活动的元素上 |

[测试网站](http://sahitest.com/demo/):http://sahitest.com/demo/

test_driver_method.py

```python
from selenium import webdriver
from time import sleep


class TestCase(object):
    def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        self.driver.get('http://sahitest.com/demo')

    def test_element_property(self):
        self.driver.get('http://sahitest.com/demo/linkTest.htm')
        el = self.driver.find_element_by_id('t1')
        print("el->", el)
        print("el.id->", el.id)
        print("el.tag_name->", el.tag_name)
        print("el.rect->", el.rect)
        print("el.text->", el.text)
        print("el.size->", el.size)
        sleep(5)
        self.driver.quit()

    def test_element_method(self):
        self.driver.get('http://sahitest.com/demo/linkTest.htm')
        el = self.driver.find_element_by_id('t1')
        el.send_keys("Hello World")
        sleep(3)

        print(el.get_attribute('size'))
        print(el.get_attribute('type'))
        print(el.get_attribute('name'))
        print(el.get_attribute('value'))

        print(el.value_of_css_property('color'))
        print(el.value_of_css_property('font'))

        el.clear()
        sleep(3)

        form_element = self.driver.find_element_by_xpath("//body/form[1]")
        form_element.find_element_by_id('t1').send_keys("haha")

        el.clear()
        sleep(3)
        self.driver.quit()


if __name__ == '__main__':
    case = TestCase()
    # case.test_element_property()
    case.test_element_method()
```



## 2.3  Selenium WebElement

### 2.3.1 Selenium WebElement属性

> 当我们使用WebDriver的find方法定位到元素后，会返回一个WebElement对象，对象用来描述Web页面上的一个元素，这一节，我们就来看一下WebElement的常用届性和方法。

WebElement常用属性如下表所示。

| 属性     | 属性描述   |
| -------- | ---------- |
| id       | 标示       |
| size     | 宽高       |
| rect     | 宽高和坐标 |
| tag_name | 标签名称   |
| text     | 文本内容   |

### 2.3.2 Selenium WebElement方法

接下来我们再来看一下 WebElement的相关方法,如下表所示

| 方法                     | 方法描述   |
| ------------------------ | ---------- |
| send_keys()              | 输入内容   |
| clear()                  | 清空内容   |
| click()                  | 单击       |
| get_attribute()          | 获得属性值 |
| is_selected()            | 是否被选中 |
| is_enabled()             | 是否可用   |
| is_displayed()           | 是否显示   |
| value_of_ css_property() | css属性值  |

```python
from selenium import webdriver
from time import sleep


class TestCase(object):
    def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        self.driver.get('http://sahitest.com/demo')

    def test_element_property(self):
        self.driver.get('http://sahitest.com/demo/linkTest.htm')
        el = self.driver.find_element_by_id('t1')
        print("el->", el)
        print("el.id->", el.id)
        print("el.tag_name->", el.tag_name)
        print("el.rect->", el.rect)
        print("el.text->", el.text)
        print("el.size->", el.size)
        sleep(5)
        self.driver.quit()

    def test_element_method(self):
        self.driver.get('http://sahitest.com/demo/linkTest.htm')
        el = self.driver.find_element_by_id('t1')
        el.send_keys("Hello World")
        sleep(3)

        print(el.get_attribute('size'))
        print(el.get_attribute('type'))
        print(el.get_attribute('name'))
        print(el.get_attribute('value'))

        print(el.value_of_css_property('color'))
        print(el.value_of_css_property('font'))

        el.clear()
        sleep(3)

        form_element = self.driver.find_element_by_xpath("//body/form[1]")
        form_element.find_element_by_id('t1').send_keys("haha")

        el.clear()
        sleep(3)
        self.driver.quit()


if __name__ == '__main__':
    case = TestCase()
    # case.test_element_property()
    case.test_element_method()
```



## 2.4 SE操作下拉列表



> 处理下拉列表，需要用到Selenium中的一个工具类Select，下面来看一下这个来中的常用方法。

| 方法/属性                | 方法/属性描述  |
| ------------------------ | -------------- |
| select_by_value()        | 根据值选择     |
| select_by_index()        | 根据索引选择   |
| select_by_visible_text   | 根据文本选择   |
| deselect_by_value        | 根据值反选     |
| deselect_by_index        | 根据索引反选   |
| deselect_by_visible_text | 根据文本反选   |
| deselect_all             | 反选所有       |
| options                  | 所有选项       |
| all_selected_options     | 所有选中选项   |
| first_selected_option    | 第一个选择选项 |

​    select.htmml

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>select test</title>
</head>
<body>

<form action="javascript:alert('test')">
province: <br />
    <select name="province" id="province">
        <option value="bj">Beijing</option>
        <option value="tj">Tianjin</option>
        <option value="sh">Shanghai</option>
        <option value="gd">Guangdong</option>
        <option value="sz">Shenzhen</option>
    </select> <br />
    <input type="submit" value="submit" id="submit">

</form>
</body>
</html>
```



test_select.py

```python
from selenium import webdriver
from time import sleep
from pathlib import Path

from selenium.webdriver.support.select import Select


class TestCase(object):
    def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        path = str(Path.cwd().joinpath('select.html'))
        file_path = 'file:' + path
        self.driver.get(file_path)

    def test_select(self):
        sel = self.driver.find_element_by_id('province')
        select = Select(sel)

        sleep(2)
        select.select_by_index(3)

        sleep(2)
        select.select_by_value('tj')

        sleep(2)
        select.select_by_visible_text("Shanghai")

        self.driver.find_element_by_id('submit').click()
        sleep(2)
        self.driver.quit()


if __name__ == '__main__':
    case = TestCase()
    case.test_select()
```



multi_select.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>select test</title>
</head>
<body>

<form action="javascript:alert('test')">
province: <br />
    <select name="province" id="province" multiple>
        <option value="bj">Beijing</option>
        <option value="tj">Tianjin</option>
        <option value="sh">Shanghai</option>
        <option value="gd">Guangdong</option>
        <option value="sz">Shenzhen</option>
    </select> <br />
    <input type="submit" value="submit" id="submit">

</form>
</body>
</html>
```

 

test_multi_select.py

```python
from selenium import webdriver
from time import sleep
from pathlib import Path

from selenium.webdriver.support.select import Select


class TestCase(object):
    def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        path = str(Path.cwd().joinpath('multi_select.html'))
        file_path = 'file:' + path
        self.driver.get(file_path)

    def test_multi_select(self):
        sel = self.driver.find_element_by_id('province')
        select = Select(sel)

        for index in range(len(select.options)):
            select.select_by_index(index)
            sleep(1)

        # 反选所有
        select.deselect_all()

        self.driver.find_element_by_id("submit").click()

        sleep(3)
        self.driver.quit()

    def test_options(self):
        sel = self.driver.find_element_by_id('province')
        select = Select(sel)

        for option in select.options:
            print(option.text)

        sleep(3)
        self.driver.quit()


if __name__ == '__main__':
    case = TestCase()
    # case.test_multi_select()
    case.test_options()

```



## 2.5 SE操作复选单选框

Form.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>checkbox radio test</title>
</head>
<body>
<form action="javascript:alert('hell form')">
    爱好1： <input type="checkbox" name="swimming", value="swimming" /> <br />
    爱好2： <input type="checkbox" name="basketball", value="basketball" /> <br />
<hr />
    男：<input type="radio" name="gender" value="male"/> <br />
    女：<input type="radio" name="gender" value="female"/> <br />
    <input type="submit" name="login" value="submit" style="background-color: aqua"/>
</form>

</body>
</html>
```





```python
from selenium import webdriver
from time import sleep
from pathlib import Path


class TestCase(object):
    def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        path = str(Path.cwd().joinpath("form2.html"))
        form_path = "file:" + path
        self.driver.get(form_path)

    def test_checkbox(self):
        swimming = self.driver.find_element_by_name('swimming')
        if not swimming.is_selected():
            swimming.click()

        basketball = self.driver.find_element_by_name('basketball')
        if not basketball.is_selected():
            basketball.click()

        sleep(2)
        self.driver.find_element_by_name('login').click()

        sleep(1)
        self.driver.switch_to.alert.accept()
        sleep(1)

        if swimming.is_selected():
            swimming.click()

        sleep(2)
        self.driver.quit()

    def test_radio(self):
        gender_lst = self.driver.find_elements_by_name("gender")
        gender_lst[0].click()


        sleep(2)
        self.driver.quit()


if __name__ == '__main__':
    case = TestCase()
    # case.test_checkbox()
    case.test_radio()
```





## 2.6 SE操作Form表单

> form表单是我们经常测试的用例，绝大多数Web程序都有这方面功能，例如：用户登录、注册都会用到form表单。本节为你讲述如何测试form表单。

form表单的是流程是这样的：

1. 定位表单元素
2. 输入测试值
3. 判断表单元素属性
4. 获得表单元素属性
5. 提交表单进行验证

Form.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>form test</title>
</head>
<body>

<form action="javascript:alert('hello')">

    username <input type="text" name="username", id="username" /> <br />
    password <input type="password" name="pwd" id="pwd" /> <br />
    <input type="submit" name="submit", id="submit" value="submit">

</form>

</body>
</html>
```



```python
from selenium import webdriver
from pathlib import Path
from time import sleep
import os


class TestCase(object):
    def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        path = str(Path.cwd().joinpath('form.html'))
        file_path = "file:" + path
        self.driver.get(file_path)

    def test_form(self):
        username = self.driver.find_element_by_id("username")
        username.send_keys("admin")

        pwd = self.driver.find_element_by_id("pwd")
        pwd.send_keys("123")

        print(username.get_attribute("value"))
        print(pwd.get_attribute("value"))

        sleep(1)
        self.driver.find_element_by_id("submit").click()
        sleep(1)

        print(self.driver.switch_to.alert.text)
        self.driver.switch_to.alert.accept()

        sleep(2)
        username.clear()
        pwd.clear()

        sleep(3)
        self.driver.quit()


if __name__ == '__main__':
    case = TestCase()
    case.test_form()


```



## 2.7 处理弹框

页面上的弹框有三种：

- alert：用来提示

- confirm：用来确认

- prompt：输入内容

  | 方法/属性 | 方法/属性描述接受 |
  | --------- | ----------------- |
  | accept()  | 接受              |
  | dimis     | 取消              |
  | text      | 显示的文本        |
  | send_keys | 输入内容          |
  
  alert.html
  
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>alert-confirm-prompt test</title>
  </head>
  <body>
      <a href="javascript:alert('提示框')" id="alert">Alert</a> <br/><br/>
      <a href="javascript:confirm('确定要删除数据吗？')" id="confirm">Confirm</a><br/><br/>
      <a href="javascript: const age=prompt('请输入要删除的理由'); document.writeln(age)" id="prompt">Prompt</a><br/><br/>
  </body>
  </html>
  ```
  
  
  
  
  
  ```python
  import pyperclip
  from selenium import webdriver
  from time import sleep
  from pathlib import Path
  import pyautogui
  # from pykeyboard import PyKeyboard
  from selenium.webdriver.support.select import Select
  
  
  class TestCase(object):
      def __init__(self):
          self.driver = webdriver.Chrome()
          self.driver.maximize_window()
          path = str(Path.cwd().joinpath('alert.html'))
          file_path = 'file:' + path
          self.driver.get(file_path)
  
      def test_alert(self):
          sleep(3)
          self.driver.find_element_by_id('alert').click()
          alert = self.driver.switch_to.alert
          print(alert.text)
          sleep(3)
          alert.accept()
  
          sleep(3)
          self.driver.quit()
  
      def test_confirm(self):
          self.driver.find_element_by_id('confirm').click()
          confirm = self.driver.switch_to.alert
          print(confirm.text)
  
          # 确定动作
          # confirm.accept()
          sleep(3)
          # 取消动作
          confirm.dismiss()
  
          sleep(3)
          self.driver.quit()
  
      def test_prompt(self):
  
          self.driver.find_element_by_id('prompt').click()
          prompt = self.driver.switch_to.alert
  
          sleep(3)
          print(prompt.text)
  
          current_mousex, current_mousey = pyautogui.position()
          print(current_mousex, current_mousey)
  
          # 当光标默认在输入框时，直接输入
          # pyautogui.typewrite("hello world")
  
          # 当光标默认不再输入框中要输入需要以下步骤，两种方法都行
          input_image_path = '/Users/mac/PycharmProjects/seleniumEntireTutorial/tutorial/input.jpg'
  
          # 获取截图内容的坐标中心 方法一
          # x, y = pyautogui.locateCenterOnScreen(input_image_path)
          # 鼠标移动到坐标处
          # pyautogui.moveTo(x, y, duration=0.5)
          # 模拟鼠标左击
          # pyautogui.leftClick(x=x, y=y)
  
          # 方法二：
          xy = pyautogui.locateOnScreen(input_image_path, confidence=0.9)
          center = pyautogui.center(xy)
          pyautogui.click(center)
  
          # 无法复制粘贴
          sleep(1)
          chines = "你好"
          pyperclip.copy(chines)
          sleep(1)
          pyautogui.hotkey('command', 'v')
  
          # pyautogui.typewrite("弄好")
  
          current_mousex, current_mousey = pyautogui.position()
          print(current_mousex, current_mousey)
  
  
          sleep(2)
          try:
              # 根据图片定位在图片在屏幕上的中点
              image_path = '/Users/mac/PycharmProjects/seleniumEntireTutorial/tutorial/queding.jpg'
  
              # ###### 鼠标点击确定按钮 start 方法一 ###################
              # 获取截图内容的坐标中心
              # x, y = pyautogui.locateCenterOnScreen(image_path)
  
              # # 鼠标移动到坐标处
              # pyautogui.moveTo(x, y, duration=0.5)
  
              # 模拟鼠标左击
              # pyautogui.leftClick(x=x, y=y)
              # ###### 鼠标点击确定按钮 end 方法一 ###################
  
              # ###### 鼠标点击确定按钮 start 方法二 ###################
              xy = pyautogui.locateOnScreen(image_path, confidence=0.9)
              center = pyautogui.center(xy)
              pyautogui.click(center)
              # ###### 鼠标点击确定按钮 end 方法二 ###################
  
  
              # prompt.accept()
  
              current_mousex, current_mousey = pyautogui.position()
              print(current_mousex, current_mousey)
  
          except Exception as e:
              print(e)
          finally:
              sleep(3)
              self.driver.quit()
  
  
  if __name__ == '__main__':
      case = TestCase()
      # case.test_alert()
      # case.test_confirm()
      case.test_prompt()
  ```
  
  

## 2.8 SE三种等待

> 在UI自动化测试中,必然会遇到环境不稳定,网络慢的情况,这时如果不做任何处理的话,代码会由于没有找到元素而报错。
>
> 另外,一种情况就是页面使用ajax异步加载机制。这时我们就要用到wait,而在 Selenium中,我们可以用到一共三种等待,每一种等待都有自己的优点或缺点,下面我们就来学习下。



- time.sleep（固定等待）

  在开发自动化框架过程中，最忌讳使用python自带模块的time 的sleep方式进行等待，虽然可以自定义等待时间，但当网络条件良好时，依旧按照预设定的时间继续等待，导致整个项目的自动化时间无限延长，不建议使用。
  （注：脚本调试过程时，还是可以使用的，方便快捷)



- implicitly_wait (隐式等待)
  隐式等待实际是设置了一个最长等待时间,如果在规定时间内网页加载完成,则执行下一步,否则一直等到时间结束,然后执行下一步。

  隐式等待会有个坑,我们都知道JavaScript一般都是放在我们的body的最后进行加载,实际这是页面上的元素都已经加载完毕,我们却还在等待全部页面加载结束。

  隐式等待对整个driver周期都起作用,在最开始设置一次就可以了。不要当作固定等待使用,到哪都来一下隐式等待。

- WebDriverWait (显式等待)
  WebDriverWait是selenium提供得到显示等待模块引入路径:
  `from selenium. webdriver. support. wait import WebDriverWait`

  WebDriverWait参数

  | 参数driver         | 参数说明                                                    |
  | ------------------ | ----------------------------------------------------------- |
  | driver             | 传入WebDriver实例                                           |
  | timeout            | 超时时间,等待的最长时间                                     |
  | poll_frequency     | 调用unti或until_not中的方法的间隔时间,默认是0.5秒忽略的异常 |
  | ignored_exceptions | 忽略异常                                                    |

  

  ```python
  from selenium.webdriver.support.wait import WebDriverWait
  from selenium import webdriver
  from time import sleep
  from selenium.webdriver.support import expected_conditions as EC
  
  
  class TestCase(object):
      def __init__(self):
          self.driver = webdriver.Chrome()
          self.driver.maximize_window()
          self.driver.get('https://wwww.baidu.com')
  
      def test_sleep(self):
          sleep(2)
          self.driver.find_element_by_id('kw').send_keys('selenium')
          sleep(2)
          self.driver.find_element_by_id('su').click()
  
          sleep(3)
          self.driver.quit()
  
      def test_implicitly(self):
          self.driver.implicitly_wait(10)
          self.driver.find_element_by_id('kw').send_keys('selenium')
          self.driver.find_element_by_id('su').click()
  
          sleep(3)
          self.driver.quit()
  
      def test_webdriver_wait(self):
          try:
              wait = WebDriverWait(self.driver, 2, 0.3)
              wait.until(EC.title_is('百度一下，你就知道'))
  
              self.driver.find_element_by_id('kw').send_keys('selenium')
              self.driver.find_element_by_id('su').click()
          except Exception as e:
              print(e)
          finally:
              sleep(3)
              self.driver.quit()
  
  
  if __name__ == '__main__':
      case = TestCase()
      # case.test_sleep()
      # case.test_implicitly()
      case.test_webdriver_wait()
  ```

  

  

  - expected_conditions 17中等待条件

```python
from selenium.webdriver.support import expected_conditions as EC
```

| 等待条件                              | 描述                                                   | 返回值类型 |
| ------------------------------------- | ------------------------------------------------------ | ---------- |
| title_is                              | 判断title,是否出现                                     | 布尔       |
| title_contains                        | 判断title,是否包含某些字符                             | 布尔       |
| presence_of_element_located           | 判断某个元素是否被加到了dom树里,并不代表该元素一定可见 | WebElement |
| visibility_of_element_located         | 判新某个元素是否被添加到dom里并且宽和高都大于0         | WebElement |
| visibility_of                         | 判断元素是否可见，如果可见就返回这个元                 | WebElement |
| presence_of_all_elements_located      | 判断是否至少有1个元素存在于dom树中                     | 列表       |
| visibility_of_any_elements_located    | 判断是否至少有一个元素在页面中可见                     | 列表       |
| text_to_be_present_in_element         | 判斯指定的元素中是否包含了预期的字符串                 | 布尔       |
| text_to_be_present_in_element_valve   | 判断指定元素的属性值中是否包合了预期的字符串           | 布尔       |
| frame_to_be_available_and_switchto_it | 判断iframe是否可以switch进去                           | 布尔       |
| invisibility_of_element_located       | 判断某个元素在是否存在于dom或不可见                    | 布尔       |
| element_to_be_clickable               | 判断某个元素中是否可见并且是enable的. 代表可点击       | 布尔       |
| staleness_of                          | 等待某个元素从dom树中移除                              | 布尔       |
| element to_be selected                | 判断某个元素是否被选中了,一般用在下拉列                | 布尔       |
| element_selection_state_to_be         | 判断某个元素的选中状态是否符合预期                     | 布尔       |
| element_located_selection_state_to_be | 判断某个元素的选中状态是否符合预期                     | 布尔       |
| aert_is_present                       | 判断页面上是否存在alert                                | alert      |



- Selenium中的鼠标和键盘事件被封装在ActionChains类中,正确的使用方法是:
`ActionChains(driver).click(btn) . perform()`下面列出ActionChains中常用方法:

| 序号 | 方法                                                      | 方法描述                               |
| ---- | --------------------------------------------------------- | -------------------------------------- |
| 1    | click(on_element=None)                                    | 单击鼠标左键                           |
| 2    | click and hold(on element=None)                           | 点击鼠标左键,不松开                    |
| 3    | context_click(on element-None)                            | 点击鼠标右键                           |
| 4    | double click(on element-None)                             | 双击鼠标左键                           |
| 5    | drag and_drop(source, target)                             | 拖搜到某个元素然后松开                 |
| 6    | drag and_drop.by_offset(source, xoffset, yoffset)         | 拖搜到某个坐标然后松开                 |
| 7    | key_down(value, element-None)                             | 按下某个键盘上的键                     |
| 8    | key.up(value, element=None)                               | 松开某个键                             |
| 9    | move_by_offset(xoffset, yoffset)                          | 鼠标从当前位置移动到某个坐标           |
| 10   | move_to_element(to.element)                               | 鼠标移动到某个元素                     |
| 11   | move_to_element_with_offset(to.element, xoffset, yoffset) | 动到距某个元素(左上角坐标)多距离的位置 |
| 12   | perform()                                                 | 执行链中的所有动作                     |
| 13   | release(on element-None)                                  | 在某个元素位置松开鼠标左键             |
| 14   | send_keys(*keys_to_send)                                  | 发送某个键到当前焦点的元素             |
| 15   | send_keys_to_element(element, *keys to_send)              | 发送某个键到指定元素                   |



```python
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium import webdriver
from time import sleep
from selenium.webdriver.support import expected_conditions as EC
from pathlib import Path


class TestCase(object):
    def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        path = str(Path.cwd().joinpath('wait.html'))
        file_path = 'file:' + path
        self.driver.get(file_path)

    def test_webdriver_wait(self):
        self.driver.find_element_by_id('btn').click()

        try:

            # 去掉这个显示等待或者等待时间比较短就会失败
            wait = WebDriverWait(self.driver, 3, 0.3)
            wait.until(EC.text_to_be_present_in_element((By.ID, 'id2'), 'id2'))
            print(self.driver.find_element_by_id('id2').text)
        except Exception as e:
            print(e)
        finally:
            sleep(3)
            self.driver.quit()


if __name__ == '__main__':
    case = TestCase()
    case.test_webdriver_wait()
```



## 2.9 等待条件



```python
    def test_webdriver_wait(self):
        self.driver.find_element_by_id('btn').click()

        try:

            # 去掉这个显示等待或者等待时间比较短就会失败
            wait = WebDriverWait(self.driver, 3, 0.3)
            wait.until(EC.text_to_be_present_in_element((By.ID, 'id2'), 'id2'))
            print(self.driver.find_element_by_id('id2').text)
        except Exception as e:
            print(e)
        finally:
            sleep(3)
            self.driver.quit()
```



## 2.10 截图



### 2.10.1全屏截图

WebDriver内置了一些在测试中捕获屏幕并保存的方法:

| 方法                             | 方法描述                                                     |
| -------------------------------- | ------------------------------------------------------------ |
| save_screenshot(filename)        | 获取当前屏幕截图并保存为指定文件, filename指指定保存的路径或者图片的文件名 |
| get-screenshot_asbase64()        | 获取当前屏幕截图base64编码字符串                             |
| get-screenshot-as_file(fimename) | 获取当前的屏幕截图,使用完整的路径                            |
| get_screenshot_as_png()          | 获取当前屏幕截图的二进制文件数据                             |



test_screenshot.py

```python
from selenium import webdriver
from time import sleep, strftime, localtime, time
from pathlib import Path
import os


class TestCase(object):
    def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        self.driver.get("https://www.baidu.com")

    def test_save_picture(self):
        sleep(2)
        path = str(Path.cwd()) + r"/screenShoot/"
        format_time = strftime('%Y-%m-%d-%H-%M-%S', localtime(time()))
        file_path = path + format_time + '.png'
        self.driver.save_screenshot(file_path)

        path2 = os.path.abspath('screenShoot')
        file_name = format_time + '.jpg'
        file_path2 = path2 + '/' + file_name
        print(file_path2)



        sleep(3)
        self.driver.quit()


if __name__ == '__main__':
    case = TestCase()
    case.test_save_picture()
```



### 2.10.2 元素截图



```python
 def test_screen_shoot_element(self):
        search_el = self.driver.find_element_by_id("kw")

        format_time = strftime('%Y-%m-%d-%H-%M-%S', localtime(time()))
        path2 = os.path.abspath('screenShoot')
        file_name = format_time + '.jpg'
        file_path2 = path2 + '/' + file_name

        search_el.screenshot(file_path2)
```



## 2.11 JS脚本应用



```python
from selenium import webdriver
from time import sleep


class TestCase(object):
    def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        self.driver.get("https://www.baidu.com")

    def test_js(self):
        self.driver.execute_script('alert("Hello World")')
        sleep(2)

        self.driver.switch_to.alert.accept()

        sleep(3)
        self.driver.quit()

    def test_via_js_get_title(self):
        js = "return document.title"
        title = self.driver.execute_script(js)
        print(title)
        sleep(3)
        self.driver.quit()

    def test_modify_style(self):
        sleep(2)
        js = 'var q=document.getElementById("kw");q.style.border="2px solid red"'

        self.driver.execute_script(js)

        sleep(3)
        self.driver.quit()

    def test_scroll(self):
        self.driver.find_element_by_id('kw').send_keys('selenium')
        self.driver.find_element_by_id('su').click()
        sleep(2)
        js = "window.scrollTo(0, document.body.scrollHeight)"
        self.driver.execute_script(js)

        sleep(3)
        self.driver.quit()


if __name__ == '__main__':
    case = TestCase()
    # case.test_js()
    # case.test_via_js_get_title()
    # case.test_modify_style()
    case.test_scroll()
```



## 2.12 鼠标和键盘事件



```python
from selenium import webdriver
from time import sleep
from selenium.webdriver import ActionChains
from selenium.webdriver.common.keys import Keys


class TestCase(object):
    def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        self.driver.get('http://sahitest.com/demo/clicks.htm')

    def test_mouse(self):
        sleep(2)
        double_btn = self.driver.find_element_by_xpath("//input[contains(@value,'dbl click me')]")
        ActionChains(self.driver).double_click(double_btn).perform()

        sleep(2)
        click_btn = self.driver.find_element_by_xpath("//input[@value='click me']")
        ActionChains(self.driver).double_click(click_btn).perform()

        sleep(2)
        context_btn = self.driver.find_element_by_xpath("//input[@value='right click me']")
        ActionChains(self.driver).context_click(context_btn).perform()

        sleep(3)
        self.driver.quit()

    def test_keys(self):
        self.driver.get('https://www.baidu.com')
        kw = self.driver.find_element_by_id('kw')
        kw.send_keys("selenium")

        sleep(2)
        kw.send_keys(Keys.COMMAND, 'a')
        sleep(2)
        kw.send_keys(Keys.COMMAND, 'x')
        sleep(2)
        kw.send_keys(Keys.COMMAND, 'v')

        sleep(3)
        self.driver.quit()

    def test_move_to(self):
        self.driver.get('https://www.baidu.com')

        login_el = self.driver.find_element_by_link_text('新闻')
        sleep(1)
        ActionChains(self.driver).move_to_element(login_el).click().perform()

        sleep(3)
        self.driver.quit()


if __name__ == '__main__':
    case = TestCase()
    # case.test_mouse()
    # case.test_keys()
    case.test_move_to()



```
