# 入门指导

source http://nginx.org/en/docs/beginners_guide.html

默认已经安装上了 nginx，如果没有请参考 [安装 nginx](./install.md)

## 介绍

- 如何启动、停止 nginx
- 重新加载配置
- 解释配置文件结构
- 提供静态内容
- 提供代理服务器
- 与 fastCGI 连接

## 进程

nginx 有一个主进程和几个工作进程

- 主进程读取、解析配置，维护工作进程
- 工作进程对请求进行实际处理

nginx 采用基于事件的模型和操作系统的机制在工作进程之间分配请求

工作进程数量可以设置，也可以给句 cpu 内核数量进行调整，具体先略

配置文件 `nginx.conf` 在：

- `/usr/local/nginx/conf`
- `/etc/nginx`
- `/usr/local/etc/nginx`

## 启动、停止、重启读配置

nginx 启动之后，通过执行命令来控制

- `nginx -s stop` 快速关机
- `nginx -s quit` 正常关机
- `nginx -s reload` 重新加载配置文件
- `nginx -s reopen` 重新打开日志文件

reload 会检查配置文件的余压阀、应用提供的配置。如果成功，就启动新的工作进程，发送消息给旧进程关闭。

旧进程收到关闭命令，会停止接受新连接，并继续处理当前请求，指导处理完成，才退出。

也可以强制杀死

```sh
ps -ax | grep nginx
kill -s QUITE [process ID]
```

进一步的细节再 控制 nginx 里

## 配置文件结构
