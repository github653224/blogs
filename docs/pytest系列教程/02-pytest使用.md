---
title: 02-pytest使用  
date: 2022-11-26  
tags:  
 - pytest  
sidebar: auto
---


## 简单使用

```python
# ！ /usr/bin/python3
# coding=utf-8
# @Time: 2022/11/21 20:32
# @Author: xueyan pan
import pytest
import sys


def func(x):
    return x + 1


def test_a():
    print("---{}---\n".format(sys._getframe().f_code.co_name))
    assert func(3) == 5


def test_b():
    print("---{}---\n".format(sys._getframe().f_code.co_name))
    assert func(3) == 4


if __name__ == "__main__":
    # pytest.main 参数为列表， -s：控制台标准输出
    pytest.main(["-s", "test_01.py"])
```

### 运行结果如下：

```shell
============================= test session starts =============================
collecting ... collected 2 items

test_01.py::test_a FAILED                                                [ 50%]---test_a---


test_01.py:12 (test_a)
4 != 5

Expected :5
Actual   :4
<Click to see difference>

def test_a():
        print("---{}---\n".format(sys._getframe().f_code.co_name))
>       assert func(3) == 5
E       assert 4 == 5
E        +  where 4 = func(3)

test_01.py:15: AssertionError

test_01.py::test_b PASSED                                                [100%]---test_b---



========================= 1 failed, 1 passed in 0.25s =========================

Process finished with exit code 1
```