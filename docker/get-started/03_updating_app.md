# 更新应用

## 更新源代码

这里修改了源文件，重新构建运行。

发现运行失败，因为就容器还在运行，端口占用了，需要删除旧容器

## 更换就容器

### 使用 CLI 删除容器

```sh
# 打印活跃的容器
docker ps
# 停止容器
docker stop <container-id>
# 删除容器
docker rm <container-id>
```

也可以通过 `force` 一键通知、删除容器

```sh
docker rm -f <container-id>
```

## 通过仪表盘删除容器

选择停止，选择删除就好了

## 启动新容器

重新 run 就可以了

继续阅读 [分享应用](./04_sharing_app.md)
