# 开始入门

> Docker 商业使用需要付费

本章目标：

- 构建和运行一个镜像 image 作为容器 container
- 在 Docker Hub 分享镜像
- 部署 Docker 应用使用数据库多容器
- 使用 Docker Compose 运行应用

## 下载安装 Docker

点击下载，引申 Mac/Window/Linux 如何安装 Docker Desktop

## 开始教程

如果已经安装完，运行下面的命令：

```sh
docker run -d -p 80:80 docker/getting-started
```

这行代码，有很多细节：

- `-d` 后台运行
- `-p 80:80` 把主机端口映射到容器内部的端口，如果 `80` 被占用可以改成 `3000`
- `docker/getting-started` 要使用的镜像

也可以组合缩短字符：

```sh
docker run -dp 80:80 docker/getting-started
```

## Docker Dashboard

Docker 仪表盘，这里略

## 什么是容器？

容器是计算机的沙盒进程，和主机上的其他进程隔离。底层上用到了 [内核命名空间和 cgroups](https://medium.com/@saschagrunert/demystifying-containers-part-i-kernel-space-2c53d6979504)，这些概念在 Linux 上不是新东西。Docker 整合并让这些功能易于使用。

容器的定义：四点略。

深层地地，有一个容器如何从头开始构建，有个演讲使用 Go 从头开始创建容器。

## 什么是容器镜像

略

## 命令行索引

略

继续阅读 [Sample application](./02_sample_application.md)
