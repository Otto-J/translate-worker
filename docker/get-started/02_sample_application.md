# Sample application

教程：使用 Node 做一个 Todo List。

## 获取应用

可以在这里克隆下载 [github - docker/getting-started](https://github.com/docker/getting-started/tree/master)，也可以下载 `zip` 包。

使用 `vscode` 打开

## 生成容器镜像

使用 `Dockerfile` 文本来创建容器镜像。下面的 Docker 暂时还有问题，接下来会一步一步优化。

1. 创建 `Dockerfile` 文件

```dockerfile
# syntax=docker/dockerfile:1
FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000
```

记得查看后缀名不要存在 `.txt`

2. 准备生成容器镜像

```sh
docker build -t getting-started .
```

执行之后会发现下载了很多`layer`。因为我们要从基础镜像开始，需要先下载 `node:12-alpine` 镜像，之后依次执行 `RUN` 和 `CMD`。

`-t xxx` 表示镜像名。最后的 `.` 表示从当前目录查找

## 启用应用容器

现在有了镜像，就可以运行应用了。

1. 准备启动

```sh
docker run -dp 3000:3000 getting-started
```

2. 打开对应的端口，访问 http://localhost:3000
3. 体验 Todo List

如果打开仪表盘，可以看到容器在运行。

## 回顾

创建了一个镜像并运行，接下来会优化

继续阅读 [updating app](./03_updating_app.md)
