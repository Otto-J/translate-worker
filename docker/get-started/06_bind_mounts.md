# 绑定挂载 bind_mounts

上一章用的是 命名卷 named volume。接下来介绍绑定挂载，确定挂载定位置，通常想容器提供数据，而且可以看到实时的修改。

node 程序可以使用 `nodemon` 来监听文件变动来自动重启。

## 两种类型比较

|                        | named volume           | bind mounts   |
| ---------------------- | ---------------------- | ------------- |
| 存储位置               | docker 选择            | 自己选择      |
| 示例                   | `<volume-name>://data` | `/path:/data` |
| 是否容器内容来默认填充 | 是                     | 否            |
| 支持卷驱动程序         | 是                     | 否            |

## 启动开发模式

区分不同环境执行不同目录

```sh
docker run -dp 3000:3000 \
     -w /app -v "$(pwd):/app" \
     node:12-alpine \
     sh -c "yarn install && yarn run dev"
# 查看状态
docker logs -f <container-id>
```

如果是 Mac M1/M2 等系列芯片，需要兼容

- `-dp xx:xx` 后台运行，映射端口
- `-w /app` 设定工作目录，运行的目录会基于这个目录执行
- `sh xxx` 启动 shell

这样可以在容器外，进行随时调试。

这样开发的好处是，计算机环境是干净的，完全不需要准备 node 环境、数据库等。后面提 `docker compose` 会简化命令

## 回顾

准备迁移 MySQL 了

进行阅读 [07_multi_container](./07_multi_container.md)
