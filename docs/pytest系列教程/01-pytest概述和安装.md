---
title: 01-pytest概述和安装  
date: 2022-11-26  
tags:
 - pytest  
sidebar: auto
---

## pytest特性

1. 简单、易读
2. 支持参数化
3. 支持运行由Nose，unittest编写的case
4. 具有很多第三方插件，并支持可以自定义扩展
5. 支持失败重跑
6. 方便的持续集成工具集成

## 接口测试框架对比

| ptest                  | unittest                        |
| :--------------------- | ------------------------------- |
| 直接使用               | 测试类必须继承unittest.TestCase |
| 参数化使用自带装饰器   | 参数化需要依赖第三方库          |
| 插件丰富：支持失败重跑 | 不支持自动失败重跑              |

***支持运行有unittest编写的测试case***

## 安装

```python
pip install pytest

pytest -version

```

