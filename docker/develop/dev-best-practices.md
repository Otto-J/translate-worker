# Docker 开发最佳实践

## 如何让镜像体积小

尺寸越小越好，下载快

- 适当的基础镜像，不用通用镜像，选择官方的镜像
- [多阶段生成](./develop-images/multistage-build.md)
- 合并多个 RUN 命令为一个，减少一个图层
- 可以共享自己的 [基本镜像](./develop-images/baseimages.md)
- 在生产镜像的基础上补充调试工具
- 构建时候记得标记 tag，比如 latest prod test 等

## 如何保存数据

- 不要使用驱动程序存储
- 使用 [卷](../storage/volumes.md) 存储
- 在开发使用使用 [绑定挂载](../storage/bind-mounts.md)，可以看到源目录和二进制文件。生产使用卷，挂载到开发时候的同一个位置
- 生产环境敏感数据加密，非敏感数据使用配置

## CI/CD

略

## 开发和生产的差异

| dev            | prod     |
| -------------- | -------- |
| bind-mount     | volume   |
| docker desktop | 看不懂   |
| 不需要关注时区 | 时区设定 |
