---
title: 06-pytest标记  
date: 2022-11-26  
tags:  
 - pytest  
sidebar: auto  
---

## pytest自定义运行规则

### 自定义运行规则

文件名pytest.ini

`[pytest]`

`addopts = -S`

＃ 当前目录下的scripts文件夹 -可自定义

`testpaths = testcase`

＃ 当前目录下的scripts文件夹下，以test。 开头，以。py结尾的所有文件 -可自定义

` python_files = test_*.py`

＃ 当前目录下的scripts文件夹下，以test_ 开头，以.py结尾的所有文件中，以Test_开头的类-可自定义 

`python_classes = Test_*`

＃ 当前目录下的scripts文件夹下，以test 开头，以.py结尾的所有文件中，以Test_开头的类内，以test_开头的方法 -可自定义

`python_ functions = test_*`



> pytest.ini

```python
[pytest]

addopts = -v

testpaths = testcases

python_files = Test_*.py

python_classes = Test_*

python_functions = test_*
```



```sh
$ ls -al
total 35
drwxr-xr-x 1 94485 197609    0 11月 27 21:29 ./
drwxr-xr-x 1 94485 197609    0 11月 21 20:32 ../
drwxr-xr-x 1 94485 197609    0 11月 27 17:27 .pytest_cache/
drwxr-xr-x 1 94485 197609    0 11月 27 21:20 __pycache__/
-rw-r--r-- 1 94485 197609  625 11月 27 17:53 method_test.py
-rw-r--r-- 1 94485 197609    0 11月 27 21:28 pytest.ini
-rw-r--r-- 1 94485 197609  438 11月 27 17:31 test_01.py
-rw-r--r-- 1 94485 197609  738 11月 27 20:47 test_addfinalizer.py
-rw-r--r-- 1 94485 197609 1430 11月 27 20:32 test_class.py
-rw-r--r-- 1 94485 197609  810 11月 27 20:41 test_fixture.py
-rw-r--r-- 1 94485 197609  625 11月 27 17:53 test_method.py
-rw-r--r-- 1 94485 197609  907 11月 27 20:11 test_method2.py
-rw-r--r-- 1 94485 197609 1257 11月 27 20:18 test_module.py
-rw-r--r-- 1 94485 197609 1657 11月 27 20:35 test_module_class_method.py
drwxr-xr-x 1 94485 197609    0 11月 27 21:29 testcases/

D:\pycharm_worksapce\python_test_framework\pytest
$ ls testcases\
test_class.py

D:\pycharm_worksapce\python_test_framework\pytest
```

> testcases/test_class.py

```python
# ！ /usr/bin/python3
# coding=utf-8
# @Time: 2022/11/27 20:21
# @Author: xueyan pan

import pytest
import sys
# 类和方法


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
    pytest.main(["-s", "test_class.py"])

```



```sh
pytest -v
```

```sh
(pythonProject) PS D:\pycharm_worksapce\python_test_framework\pytest> pytest -v
========================================================================== test session starts ===========================================================================
platform win32 -- Python 3.11.0rc2, pytest-7.2.0, pluggy-1.0.0 -- D:\pythonENV\pythonProject\Scripts\python.exe
cachedir: .pytest_cache
rootdir: D:\pycharm_worksapce\python_test_framework\pytest, configfile: pytest.ini, testpaths: testcases
plugins: anyio-3.6.2, order-1.0.1
collected 3 items                                                                                                                                                         

testcases/test_class.py::TestCase::test_one PASSED                                                                                                                  [ 33%] 
testcases/test_class.py::TestCase::test_two FAILED                                                                                                                  [ 66%]
testcases/test_class.py::TestCase::test_three PASSED                                                                                                                [100%] 

================================================================================ FAILURES ================================================================================ 
___________________________________________________________________________ TestCase.test_two ____________________________________________________________________________ 

self = <test_class.TestCase object at 0x0000017D54C65350>

    def test_two(self):
        print("正在执行----{}".format(sys._getframe().f_code.co_name))
        x = "hello"
>       assert hasattr(x, 'check')
E       AssertionError: assert False
E        +  where False = hasattr('hello', 'check')

testcases\test_class.py:40: AssertionError
------------------------------------------------------------------------- Captured stdout setup -------------------------------------------------------------------------- 
setup_method:  每个用例开始前执行
-------------------------------------------------------------------------- Captured stdout call -------------------------------------------------------------------------- 
正在执行----test_two
------------------------------------------------------------------------ Captured stdout teardown ------------------------------------------------------------------------ 
teardown_method:  每个用例结束后执行

..\..\..\pythonENV\pythonProject\Lib\site-packages\_pytest\config\__init__.py:1294
  D:\pythonENV\pythonProject\Lib\site-packages\_pytest\config\__init__.py:1294: PytestConfigWarning: Unknown config option: python_function

    self._warn_or_fail_if_strict(f"Unknown config option: {key}\n")

-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html
======================================================================== short test summary info ========================================================================= 
FAILED testcases/test_class.py::TestCase::test_two - AssertionError: assert False
================================================================ 1 failed, 2 passed, 2 warnings in 0.31s ================================================================= 
(pythonProject) PS D:\pycharm_worksapce\python_test_framework\pytest>

```

### 现在把 pytest.ini中用例修改

```json
python_files = Test_*.py
```

```sh
(pythonProject) PS D:\pycharm_worksapce\python_test_framework\pytest> pytest -v
========================================================================== test session starts ===========================================================================
platform win32 -- Python 3.11.0rc2, pytest-7.2.0, pluggy-1.0.0 -- D:\pythonENV\pythonProject\Scripts\python.exe
cachedir: .pytest_cache
rootdir: D:\pycharm_worksapce\python_test_framework\pytest, configfile: pytest.ini, testpaths: testcases
plugins: anyio-3.6.2, order-1.0.1
collected 0 items                                                                                                                                                         

========================================================================= no tests ran in 0.02s ========================================================================== 
(pythonProject) PS D:\pycharm_worksapce\python_test_framework\pytest> 

```

