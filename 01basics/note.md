## npx

- npx 会将 node_modules 中的.bin 目录临时添加为环境变量
- npx webpack ./src/main.js --mode=development

## npm

- 包管理工具

## webpack 基本配置

- 1. entry（入口）：指示 webpack 从哪个文件开始打包
- 2. output（输出）：指示 webpack 打包完的文件输出到哪里，怎么命名等
- 3. loader（加载器）：webpack 本身只能处理 js、json 等资源，其他资源需要借助 webpack，loader 才能解析
- 4. plugins（插件）：扩展 webpack 的功能
- 5. mode（模式）：webpack 有两种模式：开发模式（development）、生产模式（production）
