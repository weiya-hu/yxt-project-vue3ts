## 简介

使用vite搭建的vue3 + ts项目，css使用scss，ui框架element-plus，ajax使用axios，代码规范使用eslint + prettier，store使用pinia。

其他插件：
mitt：组件通信器；
vite-plugin-compression：vite插件压缩；
vite-plugin-eslint：vite的ESLint插件。


指令说明：
"dev": 启动开发服务器, 
"build": 打包,
"preview": 本地预览生产构建产物,
"lint": lint规则代码检查及自动格式化，配置详见.eslintrc.js,
"prettier": prettier规则代码检查及自动格式化，配置详见.prettierrc.js

vue3增加的自定义指令： v-error = "boolean" errorRedo="emitName" errorRedo为重试事件名 使用 emiter.on('emitName', function...) 监听点击重试事件

commit之前请运行指令格式化



# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
