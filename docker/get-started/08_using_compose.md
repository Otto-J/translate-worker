# 使用 Docker Compose

[Docker Compose](https://docs.docker.com/compose/) 是一个工具，可以定义、共享多容器，通过 yaml 来定义。有点是文本配置可以纳入版本管理。

## 安装 Docker Compose

默认安装了，查看版本

```sh
docker-compose version
```

## 配置文件

创建 `docker-compose.yml` 文件，没有排序要求

并一步一步迁移。

```yml
version: '3.7'

services:
  app:
    image: node:12-alpine
    command: sh -c "yarn install && yarn run dev"
    ports:
      - 3000:3000
    working_dir: /app
    volumes:
      - ./:/app
    environment:
      MYSQL_HOST: mysql
      MYSQL_USER: root
      MYSQL_PASSWORD: secret
      MYSQL_DB: todos

  mysql:
    image: mysql:5.7
    volumes:
      - todo-mysql-data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: todos

volumes:
  todo-mysql-data:
```

## 运行

```sh
docker-compose up -d
docker-compose logs -f
docker-compose down
docker-compose down --volumes
```

会自动创建 `network` `volume`

> 不能控制启动容器之后再启动容器，所以需要等待端口正常

## 仪表看查看

略

## 回顾

进行阅读 [镜像构建最佳实践](./09_image_best.md)
