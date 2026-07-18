# Cloudflare Pages Deployment Guide

## 快速部署（3步）

### 1. 推送代码到 GitHub

```bash
cd rexwang-cloud
git init
git add .
git commit -m "Initial commit: Rex Wang personal brand site"
git remote add origin https://github.com/rexwangai/rexwang.cloud.git
git push -u origin main
```

### 2. 连接 Cloudflare Pages

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 左侧菜单 → **Workers & Pages** → **Create** → **Pages**
3. 选择 **Connect to Git**
4. 授权 GitHub，选择 `rexwang.cloud` 仓库
5. 构建设置：
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `22`
6. 点击 **Save and Deploy**

### 3. 绑定域名

1. Cloudflare Pages 项目 → **Custom domains** → **Set up a custom domain**
2. 输入 `rexwang.cloud`
3. Cloudflare 会自动配置 DNS（因为域名 DNS 已指向 DNSPod，需要在 DNSPod 添加 CNAME 记录）

#### DNS 解析配置（在 DNSPod）

| 记录类型 | 主机记录 | 记录值 |
|---------|---------|--------|
| CNAME | @ | rexwang-cloud.pages.dev |
| CNAME | www | rexwang-cloud.pages.dev |

> 注意：如果 rexwang.cloud 的 DNS 不在 Cloudflare 管理，需要手动在 DNSPod 添加上述 CNAME 记录。

## 本地开发

```bash
npm install
npm run dev
# → http://localhost:4321
```

## 更新部署

Cloudflare Pages 监听 GitHub main 分支，每次 push 自动重新构建部署。

```bash
git add .
git commit -m "update: xxx"
git push
# 自动部署完成 ✨
```
