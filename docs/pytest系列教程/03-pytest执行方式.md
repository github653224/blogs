---
title: 03-pytest执行方式  
date: 2022-11-26  
tags:  
 - pytest  
sidebar: auto  
---

## pytest执行方式

## 用例前置和后置执行

### unittest前置和后置

1. 通过setUp每个用例执行前执行，tearDown每个用例执行后执行
2. 通过setUpClass类里面所有用例执行前执行，tearDownClass类里面所有用例执行后执行

### pytest前置和后置

1. 函数级别：setup/teardown
   - 运行于测试方法的始末
   - 运行一次测试用例会运行一次 setup 和 teardown

2. 类级别：setup_class/teardown_class
   - 运行于测试类的始末
   - —个测试内只运行一次 setup_class 和 teardown_class

### 用例运行级别

- 模块级（setup_module/teardown_module）开始于模块始末，全局的
- 函数级（setup_function/teardown_function）只对函数用例生效（不在类中）
- 类级（setup_class/teardown_class）只在类中前后运行一次(在类中)
- 方法级（setup_method/teardown_method）开始于方法始末（在类中）
- 类里面的（setup/teardown）运行在调用方法的前后

### 函数式

### setup_function/teardown_function

> **setup_function/teardown_function** 每个用例开始和结束调用一次

```python
# ！ /usr/bin/python3
# coding=utf-8
# @Time: 2022/11/27 20:09
# @Author: xueyan pan

# test_method2.py

# coding:utf-8
import pytest
import sys
# 函数式


def setup_function():
    print("{}：每个用例开始前都会执行".format(sys._getframe().f_code.co_name))


def teardown_function():
    print("{}：每个用例结束后都会执行".format(sys._getframe().f_code.co_name))


def test_one():
    print("正在执行----{}".format(sys._getframe().f_code.co_name))
    x = "hello"
    assert 'h' in x


def test_two():
    print("正在执行----{}".format(sys._getframe().f_code.co_name))
    x = "hello"
    assert hasattr(x, 'check')


def test_three():
    print("正在执行----{}".format(sys._getframe().f_code.co_name))
    a = "hello"
    b = "hello world"
    assert a in b


if __name__ == "__main__":
    pytest.main(["-s", "test_method2.py"])
```

### 运行结果

> 从结果可以看出用例执行顺序：setup_function》用例1》teardown_function， setup_function》用例2》teardown_function， setup_function》用例3》teardown_function

```bash
D:\pythonENV\pythonProject\Scripts\python.exe "D:/software/PyCharm 2022.2.3/plugins/python/helpers/pycharm/_jb_pytest_runner.py" --path D:\pycharm_worksapce\python_test_framework\pytest\test_method2.py 
Testing started at 20:11 ...
Launching pytest with arguments D:\pycharm_worksapce\python_test_framework\pytest\test_method2.py --no-header --no-summary -q in D:\pycharm_worksapce\python_test_framework\pytest

============================= test session starts =============================
collecting ... collected 3 items

test_method2.py::test_one setup_function：每个用例开始前都会执行
PASSED                                         [ 33%]正在执行----test_one
teardown_function：每个用例结束后都会执行

test_method2.py::test_two setup_function：每个用例开始前都会执行
FAILED                                         [ 66%]正在执行----test_two

test_method2.py:27 (test_two)
def test_two():
        print("正在执行----{}".format(sys._getframe().f_code.co_name))
        x = "hello"
>       assert hasattr(x, 'check')
E       AssertionError: assert False
E        +  where False = hasattr('hello', 'check')

test_method2.py:31: AssertionError
teardown_function：每个用例结束后都会执行

test_method2.py::test_three setup_function：每个用例开始前都会执行
PASSED                                       [100%]正在执行----test_three
teardown_function：每个用例结束后都会执行


========================= 1 failed, 2 passed in 0.26s =========================

Process finished with exit code 1

```



### 模块级别

### setup_module/teardown_module

> setup_module是所有用例开始前只执行一次，teardown_module是所有用例结束后只执行一次

```python
# ！ /usr/bin/python3
# coding=utf-8
# @Time: 2022/11/27 20:16
# @Author: xueyan pan

# test_module.py
import pytest
import sys
# 模块式


def setup_module():
    print("{}：整个.py模块只执行一次".format(sys._getframe().f_code.co_name))
    print("比如：所有用例开始前只打开一次浏览器")


def teardown_module():
    print("{}：整个.py模块只执行一次".format(sys._getframe().f_code.co_name))
    print("比如：所有用例结束只最后关闭浏览器")


def setup_function():
    print("{}：每个用例开始前都会执行".format(sys._getframe().f_code.co_name))


def teardown_function():
    print("{}：每个用例结束前都会执行".format(sys._getframe().f_code.co_name))


def test_one():
    print("正在执行----{}".format(sys._getframe().f_code.co_name))
    x = "hello"
    assert 'h' in x


def test_two():
    print("正在执行----{}".format(sys._getframe().f_code.co_name))
    x = "hello"
    assert hasattr(x, 'check')


def test_three():
    print("正在执行----{}".format(sys._getframe().f_code.co_name))
    a = "hello"
    b = "hello world"
    assert a in b


if __name__ == "__main__":
    pytest.main(["-s", "test_module.py"])
```



### 运行结果

> 从运行结果可以看到setup_module和teardown_module只执行了一次

```sh
D:\pythonENV\pythonProject\Scripts\python.exe "D:/software/PyCharm 2022.2.3/plugins/python/helpers/pycharm/_jb_pytest_runner.py" --path D:\pycharm_worksapce\python_test_framework\pytest\test_module.py 
Testing started at 20:18 ...
Launching pytest with arguments D:\pycharm_worksapce\python_test_framework\pytest\test_module.py --no-header --no-summary -q in D:\pycharm_worksapce\python_test_framework\pytest

============================= test session starts =============================
collecting ... collected 3 items

test_module.py::test_one setup_module：整个.py模块只执行一次
比如：所有用例开始前只打开一次浏览器
setup_function：每个用例开始前都会执行
PASSED                                          [ 33%]正在执行----test_one
teardown_function：每个用例结束前都会执行

test_module.py::test_two setup_function：每个用例开始前都会执行
FAILED                                          [ 66%]正在执行----test_two

test_module.py:35 (test_two)
def test_two():
        print("正在执行----{}".format(sys._getframe().f_code.co_name))
        x = "hello"
>       assert hasattr(x, 'check')
E       AssertionError: assert False
E        +  where False = hasattr('hello', 'check')

test_module.py:39: AssertionError
teardown_function：每个用例结束前都会执行

test_module.py::test_three setup_function：每个用例开始前都会执行
PASSED                                        [100%]正在执行----test_three
teardown_function：每个用例结束前都会执行
teardown_module：整个.py模块只执行一次
比如：所有用例结束只最后关闭浏览器


========================= 1 failed, 2 passed in 0.26s =========================

Process finished with exit code 1

```



### 类和方法

> setup/teardown和unittest里面的setup/teardown是一样的功能，setup_class和teardown_class等价于unittest里面的setupClass和teardownClass

```python
# ！ /usr/bin/python3
# coding=utf-8
# @Time: 2022/11/27 20:21
# @Author: xueyan pan

import pytest
import sys
# 类和方法
# test_class_function.py

class TestCase():

    def setup(self):
        print("{}: 每个用例开始前执行".format(sys._getframe().f_code.co_name))

    def teardown(self):
        print("{}: 每个用例结束后执行".format(sys._getframe().f_code.co_name))


    def setup_class(self):
        print("{}：所有用例执行之前".format(sys._getframe().f_code.co_name))

    def teardown_class(self):
        print("{}：所有用例执行之前".format(sys._getframe().f_code.co_name))

    def setup_method(self):
        print("{}:  每个用例开始前执行".format(sys._getframe().f_code.co_name))

    def teardown_method(self):
        print("{}:  每个用例结束后执行".format(sys._getframe().f_code.co_name))

    def test_one(self):
        print("正在执行----{}".format(sys._getframe().f_code.co_name))
        x = "hello"
        assert 'h' in x

    def test_two(self):
        print("正在执行----{}".format(sys._getframe().f_code.co_name))
        x = "hello"
        assert hasattr(x, 'check')

    def test_three(self):
        print("正在执行----{}".format(sys._getframe().f_code.co_name))
        a = "hello"
        b = "hello world"
        assert a in b


if __name__ == "__main__":
    pytest.main(["-s", "test_class_function.py"])

```

### 运行结果

> 从结果看出，运行的优先级：setup_class》setup_method》setup 》用例》teardown》teardown_method》teardown_class
> **备注：这里setup_method和teardown_method的功能和setup/teardown功能是一样的，一般二者用其中一个即可**



```sh
D:\pythonENV\pythonProject\Scripts\python.exe "D:/software/PyCharm 2022.2.3/plugins/python/helpers/pycharm/_jb_pytest_runner.py" --path D:\pycharm_worksapce\python_test_framework\pytest\test_class_function.py 
Testing started at 20:29 ...
Launching pytest with arguments D:\pycharm_worksapce\python_test_framework\pytest\test_class_function.py --no-header --no-summary -q in D:\pycharm_worksapce\python_test_framework\pytest

============================= test session starts =============================
collecting ... collected 3 items

test_class_function.py::TestCase::test_one 
test_class_function.py::TestCase::test_two setup_class：所有用例执行之前
setup_method:  每个用例开始前执行
PASSED                        [ 33%]正在执行----test_one
teardown_method:  每个用例结束后执行
setup_method:  每个用例开始前执行
FAILED                        [ 66%]正在执行----test_two

test_class_function.py:36 (TestCase.test_two)
self = <test_class_function.TestCase object at 0x00000223E5EC2990>

    def test_two(self):
        print("正在执行----{}".format(sys._getframe().f_code.co_name))
        x = "hello"
>       assert hasattr(x, 'check')
E       AssertionError: assert False
E        +  where False = hasattr('hello', 'check')

test_class_function.py:40: AssertionError
teardown_method:  每个用例结束后执行
setup_method:  每个用例开始前执行
PASSED                      [100%]正在执行----test_three
teardown_method:  每个用例结束后执行
teardown_class：所有用例执行之前



test_class_function.py::TestCase::test_three 

========================= 1 failed, 2 passed in 0.25s =========================

Process finished with exit code 1
```



### 模块，函数和类混用

> 如果一个.py的文件里面既有函数用例又有类和方法用例，运行顺序又是怎样的呢



```python
# ！ /usr/bin/python3
# coding=utf-8
# @Time: 2022/11/27 20:32
# @Author: xueyan pan
import pytest
import sys


def setup_module():
    print("{}：整个.py模块只执行一次".format(sys._getframe().f_code.co_name))
    print("比如：所有用例开始前只打开一次浏览器")


def teardown_module():
    print("{}：整个.py模块只执行一次".format(sys._getframe().f_code.co_name))
    print("比如：所有用例结束只最后关闭浏览器")


def setup_function():
    print("{}：每个用例开始前都会执行".format(sys._getframe().f_code.co_name))


def teardown_function():
    print("{}：每个用例结束前都会执行".format(sys._getframe().f_code.co_name))


def test_one():
    print("正在执行----{}".format(sys._getframe().f_code.co_name))
    x = "this"
    assert 'h' in x


def test_two():
    print("正在执行----{}".format(sys._getframe().f_code.co_name))
    x = "hello"
    assert hasattr(x, 'check')


class TestCase():

    def setup_class(self):
        print("{}：所有用例执行之前".format(sys._getframe().f_code.co_name))

    def teardown_class(self):
        print("{}：所有用例执行之前".format(sys._getframe().f_code.co_name))

    def test_three(self):
        print("正在执行----{}".format(sys._getframe().f_code.co_name))
        x = "this"
        assert 'h' in x

    def test_four(self):
        print("正在执行----{}".format(sys._getframe().f_code.co_name))
        x = "hello"
        assert hasattr(x, 'check')


if __name__ == "__main__":
    pytest.main(["-s", "test_module_class_method.py"])


```



### 运行结果

> 从运行结果看出，setup_module/teardown_module的优先级是最大的，然后函数里面用到的setup_function/teardown_function与类里面的setup_class/teardown_class互不干涉

```sh
D:\pythonENV\pythonProject\Scripts\python.exe "D:/software/PyCharm 2022.2.3/plugins/python/helpers/pycharm/_jb_pytest_runner.py" --path D:\pycharm_worksapce\python_test_framework\pytest\test_module_class_method.py 
Testing started at 20:35 ...
Launching pytest with arguments D:\pycharm_worksapce\python_test_framework\pytest\test_module_class_method.py --no-header --no-summary -q in D:\pycharm_worksapce\python_test_framework\pytest

============================= test session starts =============================
collecting ... collected 4 items

test_module_class_method.py::test_one setup_module：整个.py模块只执行一次
比如：所有用例开始前只打开一次浏览器
setup_function：每个用例开始前都会执行
PASSED                             [ 25%]正在执行----test_one
teardown_function：每个用例结束前都会执行

test_module_class_method.py::test_two setup_function：每个用例开始前都会执行
FAILED                             [ 50%]正在执行----test_two

test_module_class_method.py:32 (test_two)
def test_two():
        print("正在执行----{}".format(sys._getframe().f_code.co_name))
        x = "hello"
>       assert hasattr(x, 'check')
E       AssertionError: assert False
E        +  where False = hasattr('hello', 'check')

test_module_class_method.py:36: AssertionError
teardown_function：每个用例结束前都会执行

test_module_class_method.py::TestCase::test_three 
test_module_class_method.py::TestCase::test_four setup_class：所有用例执行之前
PASSED                 [ 75%]正在执行----test_three
FAILED                  [100%]正在执行----test_four

test_module_class_method.py:51 (TestCase.test_four)
self = <test_module_class_method.TestCase object at 0x000001CBD0032F50>

    def test_four(self):
        print("正在执行----{}".format(sys._getframe().f_code.co_name))
        x = "hello"
>       assert hasattr(x, 'check')
E       AssertionError: assert False
E        +  where False = hasattr('hello', 'check')

test_module_class_method.py:55: AssertionError
teardown_class：所有用例执行之前
teardown_module：整个.py模块只执行一次
比如：所有用例结束只最后关闭浏览器




========================= 2 failed, 2 passed in 0.27s =========================

Process finished with exit code 1

```



### 后置固件yield和终结函数addfinalizer

> 我们之前学习的都是测试用例的前置固件(@pytest.mark.xxx)，也就是相当于“setup”。说到这，细心的你可能想到了，那有没有什么方式可以表示出“teardown”？这就是我们今天学习的yield和addfinalizer

> ## yield
>
>
> yield是一个关键字，它不是单独存在的，要写在fixtrue标记的固件中。
>
> 我们在声明的固件myfixture中加入yield关键字，在它下面写测试用例执行后想要运行的代码；其他有关于固件的使用没有任何差别。需要说明的一点是我们在pytest主函数中增加了一个参数“–setup-show”，他会显示出固件的执行情况

```python
# ！ /usr/bin/python3
# coding=utf-8
# @Time: 2022/11/27 20:40
# @Author: xueyan pan

import pytest
import sys


@pytest.fixture()
def myfixture():
    print("执行{}前半部分".format(sys._getframe().f_code.co_name))
    yield
    print("执行{}的后半部分".format(sys._getframe().f_code.co_name))


class Test_firstFile():

    def test_one(self, myfixture):
        print("执行{}".format(sys._getframe().f_code.co_name))
        assert 1 + 2 == 3

    def test_two(self):
        print("执行{}".format(sys._getframe().f_code.co_name))
        assert 1 == 1

    def test_three(self):
        print("执行{}".format(sys._getframe().f_code.co_name))
        assert 1 + 1 == 2


if __name__ == "__main__":
    pytest.main(["--setup-show", "-s", "test_fixture.py"])
```

### 运行结果

> **测试代码的执行顺序是 固件中yield前的代码–测试用例中的代码–固件中yield后的代码**。

> **如果测试用例中的代码出现异常或者断言失败，并不会影响他的固件中yield后的代码执行；但是如果固件中的yield之前的代码也就是相当于setup部分的带代码，出现错误或断言失败，那么yield后的代码将不会再执行，当然测试用例中的代码也不会执行**



```sh
D:\pythonENV\pythonProject\Scripts\python.exe "D:/software/PyCharm 2022.2.3/plugins/python/helpers/pycharm/_jb_pytest_runner.py" --path D:\pycharm_worksapce\python_test_framework\pytest\test_fixture.py 
Testing started at 20:41 ...
Launching pytest with arguments D:\pycharm_worksapce\python_test_framework\pytest\test_fixture.py --no-header --no-summary -q in D:\pycharm_worksapce\python_test_framework\pytest

============================= test session starts =============================
collecting ... collected 3 items

test_fixture.py::Test_firstFile::test_one 执行myfixture前半部分
PASSED                         [ 33%]执行test_one
执行myfixture的后半部分

test_fixture.py::Test_firstFile::test_two PASSED                         [ 66%]执行test_two

test_fixture.py::Test_firstFile::test_three PASSED                       [100%]执行test_three


============================== 3 passed in 0.03s ==============================

Process finished with exit code 0

```





### addfinalizer函数

> 我们也可以通过request.addfinalizer()的方式实现“teardown”

> 它和yield相比不同的是：无论是固件的“setup”部分是否出现异常或断言失败，它都会执行（关于这一点我还没有演示出来，感觉setup中如果有异常addfinalizer依然不会执行，希望大佬指导）；此外它还支持传入多个函数

```python 
# ！ /usr/bin/python3
# coding=utf-8
# @Time: 2022/11/27 20:46
# @Author: xueyan pan

import pytest


@pytest.fixture()
def myfixture(request):
    print("执行固件myfixture的前半部分")

    def myteardown():
        print("执行固件myfture的后半部分")

    request.addfinalizer(myteardown)


class Test_Pytest():

    def test_one(self, myfixture):
        print("test_one方法执行")
        assert 1 == 1

    def test_two(self):
        print("test_two方法执行")
        assert "o" in "love"

    def test_three(self):
        print("test_three方法执行")
        assert 3 - 2 == 1


if __name__ == "__main__":
    pytest.main(['--setup-show', '-s', 'test_addfinalizer.py'])
```



### 运行结果

```sh
D:\pythonENV\pythonProject\Scripts\python.exe "D:/software/PyCharm 2022.2.3/plugins/python/helpers/pycharm/_jb_pytest_runner.py" --path D:\pycharm_worksapce\python_test_framework\pytest\test_addfinalizer.py 
Testing started at 20:47 ...
Launching pytest with arguments D:\pycharm_worksapce\python_test_framework\pytest\test_addfinalizer.py --no-header --no-summary -q in D:\pycharm_worksapce\python_test_framework\pytest

============================= test session starts =============================
collecting ... collected 3 items

test_addfinalizer.py::Test_Pytest::test_one 执行固件myfixture的前半部分
PASSED                       [ 33%]test_one方法执行
执行固件myfture的后半部分

test_addfinalizer.py::Test_Pytest::test_two PASSED                       [ 66%]test_two方法执行

test_addfinalizer.py::Test_Pytest::test_three PASSED                     [100%]test_three方法执行


============================== 3 passed in 0.03s ==============================

Process finished with exit code 0

```

