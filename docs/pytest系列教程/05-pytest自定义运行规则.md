---
title: 05-pytest断言  
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





