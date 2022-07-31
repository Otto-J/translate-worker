# 分享应用

刚才有了镜像，可以通过 docker hub 来分享了，需要注册

> Docker ID 是 Docker Hub 的账号

可以理解为 开放 npm

## 创建存储库

注册登录、创建存储库、设定名称、创建成功。接下来准备推送。

## 推送镜像

```sh
docker login
# 重命名
docker tag getting-started YOUR-USER-NAME/getting-started
docker push YOUR-USER-NAME/getting-started
```

## 使用 `play with docker` 来运行实例

1. 打开 https://labs.play-with-docker.com/
2. 登录选择 docker
3. 登录
4. 添加新示例
5. 在终端中运行 `docker run -dp 3000:3000 YOUR-USER-NAME/getting-started`
6. 访问

## 回顾

推送镜像、打开实例、运行实例。在 CI 时候会推送镜像，在生产中使用最新版本的镜像。

继续阅读 [05_persisting_data](./05_persisting_data.md)
