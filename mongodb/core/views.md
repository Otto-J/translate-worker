# 视图

什么是视图？

视图是一个可查询对象，内容是聚合得来的，按需查询的不会存储结果，只读不可写

比如员工的数据视图，里面没有隐私信息。对原始数据加工补齐。可以对多个集合查询

- 这样创建 `db.createView([viewName],[source],[pipeline],{})`

剩下略

next [文档 document](./document.md)
