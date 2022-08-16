# 数据库和集合

## db 数据库

如何选择一个数据库？
数据库可以有多个集合，这里类似 mysql 的语法 `use [db-name]`

如何创建数据库？

自动会更新，比如 `use new-db` 就会自动创建

## collection 集合

如何创建集合？

- 自动创建 `db.xxxColName.insertOne({})`
- 手动创建 `db.createCollection()` 这时候可以设定属性，比如最大大小、文档验证规则

可以限制传入内容吗？
数据是非常自由的，因此可以进行 **数据验证** 进行校验，不合规不让存储

如何修改数据？
找到目标，更新目标

唯一标识符，先略

next [视图 Views](./views.md)
