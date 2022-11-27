---
title: 04-pytest运行规则  
date: 2022-11-26  
tags:  
 - pytest  
sidebar: auto  
---

## pytest运行规则

### 默认运行规则

1. 测试文件以test。*。py开头或*test。py结尾
   - pytest会执行当前目录及子目录下所有test_*。py及*_test。py格式的文件
2. 测试类以Test开头，并且不能带有_init_方法
3. 测试函数以test_开头

```sh
(pythonProject) PS D:\pycharm_worksapce\python_test_framework\pytest> pytest -v
========================================================================== test session starts ===========================================================================
platform win32 -- Python 3.11.0rc2, pytest-7.2.0, pluggy-1.0.0 -- D:\pythonENV\pythonProject\Scripts\python.exe
cachedir: .pytest_cache
rootdir: D:\pycharm_worksapce\python_test_framework\pytest
plugins: anyio-3.6.2, order-1.0.1
collected 25 items                                                                                                                                                        
method_test.py::test_a FAILED                                                                                                                                       [  4%]
method_test.py::test_b PASSED                                                                                                                                       [  8%] 
test_01.py::test_a FAILED                                                                                                                                           [ 12%] 
test_01.py::test_b PASSED                                                                                                                                           [ 16%] 
test_addfinalizer.py::Test_Pytest::test_one PASSED                                                                                                                  [ 20%]
test_addfinalizer.py::Test_Pytest::test_two PASSED                                                                                                                  [ 24%] 
test_addfinalizer.py::Test_Pytest::test_three PASSED                                                                                                                [ 28%] 
test_class.py::TestCase::test_one PASSED                                                                                                                            [ 32%] 
test_class.py::TestCase::test_two FAILED                                                                                                                            [ 36%]
test_class.py::TestCase::test_three PASSED                                                                                                                          [ 40%] 
test_fixture.py::Test_firstFile::test_one PASSED                                                                                                                    [ 44%] 
test_fixture.py::Test_firstFile::test_two PASSED                                                                                                                    [ 48%]
test_fixture.py::Test_firstFile::test_three PASSED                                                                                                                  [ 52%] 
test_method.py::test_a FAILED                                                                                                                                       [ 56%]
test_method.py::test_b PASSED                                                                                                                                       [ 60%] 
test_method2.py::test_one PASSED                                                                                                                                    [ 64%] 
test_method2.py::test_two FAILED                                                                                                                                    [ 68%]
test_method2.py::test_three PASSED                                                                                                                                  [ 72%] 
test_module.py::test_one PASSED                                                                                                                                     [ 76%] 
test_module.py::test_two FAILED                                                                                                                                     [ 80%]
test_module.py::test_three PASSED                                                                                                                                   [ 84%] 
test_module_class_method.py::test_one PASSED                                                                                                                        [ 88%] 
test_module_class_method.py::test_two FAILED                                                                                                                        [ 92%]
test_module_class_method.py::TestCase::test_three PASSED                                                                                                            [ 96%] 
test_module_class_method.py::TestCase::test_four FAILED                                                                                                             [100%]

================================================================================ FAILURES ================================================================================ 
_________________________________________________________________________________ test_a _________________________________________________________________________________ 

    def test_a():
        print("---{}---\n".format(sys._getframe().f_code.co_name))
>       assert func(3) == 5
E       assert 4 == 5
E        +  where 4 = func(3)

method_test.py:15: AssertionError
------------------------------------------------------------------------- Captured stdout setup -------------------------------------------------------------------------- 
---setup_function---
-------------------------------------------------------------------------- Captured stdout call -------------------------------------------------------------------------- 
---test_a---

------------------------------------------------------------------------ Captured stdout teardown ------------------------------------------------------------------------ 
---teardown_function---
_________________________________________________________________________________ test_a _________________________________________________________________________________ 

    def test_a():
        print("---{}---\n".format(sys._getframe().f_code.co_name))
>       assert func(3) == 5
E       assert 4 == 5
E        +  where 4 = func(3)

test_01.py:15: AssertionError
-------------------------------------------------------------------------- Captured stdout call -------------------------------------------------------------------------- 
---test_a---

___________________________________________________________________________ TestCase.test_two ____________________________________________________________________________ 

self = <test_class.TestCase object at 0x0000015AA0FDEA10>

    def test_two(self):
        print("正在执行----{}".format(sys._getframe().f_code.co_name))
        x = "hello"
>       assert hasattr(x, 'check')
E       AssertionError: assert False
E        +  where False = hasattr('hello', 'check')

test_class.py:40: AssertionError
------------------------------------------------------------------------- Captured stdout setup -------------------------------------------------------------------------- 
setup_method:  每个用例开始前执行
-------------------------------------------------------------------------- Captured stdout call -------------------------------------------------------------------------- 
正在执行----test_two
------------------------------------------------------------------------ Captured stdout teardown ------------------------------------------------------------------------ 
teardown_method:  每个用例结束后执行
_________________________________________________________________________________ test_a _________________________________________________________________________________ 

    def test_a():
        print("---{}---\n".format(sys._getframe().f_code.co_name))
>       assert func(3) == 5
E       assert 4 == 5
E        +  where 4 = func(3)

test_method.py:15: AssertionError
------------------------------------------------------------------------- Captured stdout setup -------------------------------------------------------------------------- 
---setup_function---
-------------------------------------------------------------------------- Captured stdout call -------------------------------------------------------------------------- 
---test_a---

------------------------------------------------------------------------ Captured stdout teardown ------------------------------------------------------------------------ 
---teardown_function---
________________________________________________________________________________ test_two ________________________________________________________________________________ 

    def test_two():
        print("正在执行----{}".format(sys._getframe().f_code.co_name))
        x = "hello"
>       assert hasattr(x, 'check')
E       AssertionError: assert False
E        +  where False = hasattr('hello', 'check')

test_method2.py:31: AssertionError
------------------------------------------------------------------------- Captured stdout setup -------------------------------------------------------------------------- 
setup_function：每个用例开始前都会执行
-------------------------------------------------------------------------- Captured stdout call -------------------------------------------------------------------------- 
正在执行----test_two
------------------------------------------------------------------------ Captured stdout teardown ------------------------------------------------------------------------ 
teardown_function：每个用例结束后都会执行
________________________________________________________________________________ test_two ________________________________________________________________________________ 

    def test_two():
        print("正在执行----{}".format(sys._getframe().f_code.co_name))
        x = "hello"
>       assert hasattr(x, 'check')
E       AssertionError: assert False
E        +  where False = hasattr('hello', 'check')

test_module.py:39: AssertionError
------------------------------------------------------------------------- Captured stdout setup -------------------------------------------------------------------------- 
setup_function：每个用例开始前都会执行
-------------------------------------------------------------------------- Captured stdout call -------------------------------------------------------------------------- 
正在执行----test_two
------------------------------------------------------------------------ Captured stdout teardown ------------------------------------------------------------------------ 
teardown_function：每个用例结束前都会执行
________________________________________________________________________________ test_two ________________________________________________________________________________ 

    def test_two():
        print("正在执行----{}".format(sys._getframe().f_code.co_name))
        x = "hello"
>       assert hasattr(x, 'check')
E       AssertionError: assert False
E        +  where False = hasattr('hello', 'check')

test_module_class_method.py:36: AssertionError
------------------------------------------------------------------------- Captured stdout setup -------------------------------------------------------------------------- 
setup_function：每个用例开始前都会执行
-------------------------------------------------------------------------- Captured stdout call -------------------------------------------------------------------------- 
正在执行----test_two
------------------------------------------------------------------------ Captured stdout teardown ------------------------------------------------------------------------ 
teardown_function：每个用例结束前都会执行
___________________________________________________________________________ TestCase.test_four ___________________________________________________________________________ 

self = <test_module_class_method.TestCase object at 0x0000015AA0FF8A50>

    def test_four(self):
        print("正在执行----{}".format(sys._getframe().f_code.co_name))
        x = "hello"
比如：所有用例结束只最后关闭浏览器
======================================================================== short test summary info ========================================================================= 
FAILED method_test.py::test_a - assert 4 == 5
FAILED test_01.py::test_a - assert 4 == 5
FAILED test_class.py::TestCase::test_two - AssertionError: assert False
FAILED test_method.py::test_a - assert 4 == 5
FAILED test_method2.py::test_two - AssertionError: assert False
FAILED test_module.py::test_two - AssertionError: assert False
FAILED test_module_class_method.py::test_two - AssertionError: assert False
FAILED test_module_class_method.py::TestCase::test_four - AssertionError: assert False
====================================================================== 8 failed, 17 passed in 0.67s ====================================================================== 
(pythonProject) PS D:\pycharm_worksapce\python_test_framework\pytest>

```

