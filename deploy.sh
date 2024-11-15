# 将静态内容部署到 GitHub Pages 的简易工作流程
name: 部署文档

on:
  # 仅在推送到默认分支时运行。
  push:
    branches: ["main"]

  # 这个选项可以使你手动在 Action tab 页面触发工作流
  workflow_dispatch:

# 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages。
permissions:
  contents: read
  pages: write
  id-token: write

# 允许一个并发的部署
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  # 单次部署的工作描述
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: "npm"
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload dist folder
          path: "./dist"
          github_token: ${{ secrets.ACCESS_TOKEN }}
           # 默认发布到 gh-pages 分支上，可以指定特定的发布分支（不能选拉取代码的分支）
          publish_branch: gh-pages
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
