# 多容器应用

如何把 `mysql` 服务加进来？在“每个容器只做一件事，并且做好”的理念指导下，我们需要启动第二个容器服务。

好处很多：

- 数据库可能很多
- 但容器方便隔离和更新
- 生产托管时候，数据库不一定需要托管
- 多个进程在一个容器进程中，会比较复杂

结论是重新启动一个 mysql 容器。

## 容器网络

容器之间独立运行，容器之间互相隔离，通过网络进行通信。

> 容器之间要在同一个网络下，否则不能通信。

## 启动 MySQL

如何让容器连上网络？两种：

- 开始时候就连上
- 连接已经存在的容器

先创建一个网络，启动时候就连上网络。

1. 创建网络

```sh
docker network ls
docker network create todo-app
```

2. 启动 mysql 容器连上网络，并设定相关参数

```sh
docker run -d \
    --network todo-app --network-alias mysql \
    -v todo-mysql-data:/var/lib/mysql \
    -e MYSQL_ROOT_PASSWORD=secret \
    -e MYSQL_DATABASE=todos \
    mysql:5.7
```

如果是 Mac M1/M2 系列需要兼容

- `--network xx --network-alias` 连上网络并重命名
- `-v xxx:/data` 如果数据卷不存在会自动创建

3. 检查数据库是否运行了

```sh
docker exec -it <mysql-container-id> mysql -u root -p

> SHOW DATABASES;
> EXIT;
```

## 链接到 MySQL

启动时候指定网络很方便。如果已经运行了容器，还能补票吗？怎么找到容器的 IP？

我们启动一个新服务 我们将使用 [nicolaka/netshoot](https://github.com/nicolaka/netshoot) 容器。

1. 连上同一个网络 `docker run -it --network todo-app nicolaka/netshoot`
2. 查询主机名对应的 IP 地址 `dig mysql`。在返回数据的 `answer` 部分找到 IP

docker 会帮我们找到。

## 使用 MySQL 运行应用

设定一些 mysql 的环境变量

- MYSQL_HOST - 正在运行的 MySQL 服务器的主机名
- MYSQL_USER - 用于连接的用户名
- MYSQL_PASSWORD - 用于连接的密码
- MYSQL_DB - 连接后要使用的数据库

这个时候用环境变量可以在开发时候用，生产不要这样，不安全。要使用容器业务框架提供的加密支持。这里先略。

开始初始化 mysql

1. mysql v8 要加 mysql，这是设定密码

```sh
> ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'secret';
> flush privileges;

```

2. 设定环境变量。

```sh
 docker run -dp 3000:3000 \
  -w /app -v "$(pwd):/app" \
  --network todo-app \
  -e MYSQL_HOST=mysql \
  -e MYSQL_USER=root \
  -e MYSQL_PASSWORD=secret \
  -e MYSQL_DB=todos \
  node:12-alpine \
  sh -c "yarn install && yarn run dev"
```

后续启动容器、修改数据、在数据库里查询

## 回顾

容器网络。但用命令行设定参数很复杂，下一步介绍 `docker compose`

进行阅读 [08_using_compose](./08_using_compose.md)
