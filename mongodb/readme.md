# MongoDB

文档官网 https://www.mongodb.com/docs/

目前 MongoDB 有 v4.4+ v5.0 v6.0

## 补充

- vscode 插件 `mongodb.mongodb-vscode`
- `docker pull mongo:5.0.10`
- [Docker Hub](https://hub.docker.com/_/mongo)

docker 命令行启动：

```sh
docker run -d -p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=xinbao \
-e MONGO_INITDB_ROOT_PASSWORD=12345678 \
-v ~/mongodb-data:/data/db \
--name simple-mongo \
mongo:5.0.10
```

启动之后，在 vscode 的插件中，进行数据库连接

```
mongodb://xinbao@12345678@localhost:27017
```

`docker-compose` 命令行：

```yml
version: '3.1'
services:
  mongo:
    image: mongo:5.0.10
    #command: --serviceExecutor adaptive
  environment:
    MONGO_INITDB_ROOT_USERNAME: xinbao
    MONGO_INITDB_ROOT_PASSWORD: 12345678
    MONGO_INITDB_DATABASE: demo
```

## 内容

- 使用 MongoDB。学习基本技能，查询、聚合、分析。
- 部署 MongoDB Atlas。在不同云平台免费使用 MongoDB。
- 连接到应用。使用编程语言连接数据库。
- 探索你的数据。通过页面搜素、查询、可视化数据。
- 构建数据可视化。创建图表、仪表盘揭示数据趋势。
- 构建移动应用。构建持久化、后端同步的应用

next [介绍](./introduction/readme.md)
