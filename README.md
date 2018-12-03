# blog2

个人博客2.x版本，重新组织项目结构，尝试使用jekyll重写；整合原blog内容。

## 目录

## 项目说明

### 命令

```shell
# 下载项目及子模块
git clone --recurse-submodules https://github.com/occultskyrong/blog2.git
# 安装依赖
npm i
# 安装hexo的cli
sudo npm install hexo-cli -g
# 启动服务
hexo server
# 或 - 使用pm2守护
pm2 start package.json --name blog2

# 新增theme-next到子模块
git submodule add https://github.com/theme-next/hexo-theme-next themes/next
# 新增文章
hexo new <title>
```

### 概述

基于`Hexo`构建博客系统

### 整体说明

- `JavaScript`文件，基于`ECMAScript 6`(`ES6`，亦即`ES2015`)
- `NodeJS`版本基于`v8.12.0`
- 以`_`开头的文件，均可直接运行，`shell`需要跟定执行权限，`.js`直接使用`node xxx.js`即可

### 项目结构

```shell
tree -a -L 2 -I "node_modules|.git*|.vscode"
```

```tree
.
├── .eslintrc.json
├── .markdownlint.json
├── LICENSE
├── README.md
├── _config.yml
├── bin
│   └── hexo.sh
├── code
│   ├── common
│   ├── countries
│   ├── memory-leak
│   ├── node-events
│   └── package.json
├── config
│   ├── _secretKey.js
│   ├── development.js
│   ├── index.js
│   └── secretKey.js
├── db.json
├── package-lock.json
├── package.json
├── scaffolds
│   ├── draft.md
│   ├── page.md
│   └── post.md
├── source
│   └── _posts
├── themes
│   ├── landscape
│   └── next
└── yarn.lock

13 directories, 18 files
```
