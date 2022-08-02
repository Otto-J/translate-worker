# 镜像构建最佳实践

## 安全扫描

扫描发现漏洞。

```sh
docker login
docker scan getting-started
```

## 图像分层

```sh
docker image history xxx
# 不要折行
docker image history --no-trunc getting-started
```

可以看到镜像的每一个图层，方便做诊断

## 图层缓存

这个很重要，一层一层叠加时候，如果出现新层会让后续的图层缓存失效。

```dockerfile
 # syntax=docker/dockerfile:1
 FROM node:12-alpine
 WORKDIR /app
 COPY package.json yarn.lock ./
 RUN yarn install --production
 COPY . .
 CMD ["node", "src/index.js"]
```

注意这里的策略：先安装缓存，再 copy 其他内容，源代码随时会变。

`.dockerignore` 里添加 `node_modules` 不要复制他。

## 多阶段构建

多个阶段生成镜像。举个例子，前端 react 打包完，交给 nginx 继续构建

```docker
# syntax=docker/dockerfile:1
FROM node:12 AS build
WORKDIR /app
COPY package* yarn.lock ./
RUN yarn install
COPY public ./public
COPY src ./src
RUN yarn run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
```

先打包第一个，然后继续构建 nginx 还挺有用。

## 回顾

继续阅读 [下一步是什么](./11_what_next.md)
