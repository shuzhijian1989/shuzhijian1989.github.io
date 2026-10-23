# 学生端

uni-app Vue3 学生端。底部 Tab 对应今日学、错题库、我的。

接口还没有。题目和规则写在 `src/domain/`，页面只渲染 `session.js` 返回的字段。

## 启动

```bash
npm install
npm run dev:h5
```

浏览器打开终端里的本地地址。H5 使用 hash 路由。

领域规则自检：

```bash
npm run check:domain
```

## 对应关系

- 今日学：`src/pages/today/index.vue`
- 精准学：`src/pages/precision/`
- 错题库：`src/pages/mine/wrongs.vue`
- 问老师：`src/pages/tutor/index.vue`
- 我的：`src/pages/mine/`
- 掌握度：`src/domain/mastery.js`
- 诊断选题：`src/domain/diagnostic.js`
- 学习路径：`src/domain/path.js`
- 答疑状态机：`src/domain/tutor.js`
- 写死的一册数学：`src/domain/content.js`
- 一年级上册期中试卷：`src/domain/midterm-paper.js`，页面 `src/pages/mine/paper.vue`
- 今日学期中逐题练习：`src/domain/midterm-quiz.js`，页面 `src/pages/today/index.vue`

TODO: 接口地址未提供。接入后用接口替换 `src/domain/session.js` 里的计算，页面不改筛选和掌握度公式。

## 界面

数学计算、比大小、数序等题支持本地手写数字 `0–9` 和符号 `+ - = < >` 识别，写在同一行，字符之间留空隙。提交时将笔迹转换成文字，再调用原有评分规则；识别不确定时请孩子核对文字后提交，不显示参考答案，也不要求家长评分。汉字、答语、写话请直接输入文字，也可以使用手机输入法的手写功能。识别全程在本机进行，没有外部请求或新增依赖；模板匹配有书写风格限制，无法保证所有笔迹都能准确识别。

运行 `npm run check:handwriting` 检查数字/符号识别与真实页面提交链路；运行 `npm run check:midterm` 检查抽题和完整40题流程。

页底色 `#f4f7f5`，主色 `#1f6f5b`。卡片白底、细边框、16px 圆角。状态颜色按文案分档，文字仍用原字段：未测 / 未开始、进行中 / 学习中、已完成 / 已掌握、已跳过、薄弱。

今日学顶部固定教材、主按钮和完成进度，任务列表在中间滚动。底部仍是现在的五个 Tab。章节掌握度用横向比例条，宽度取返回的 `mastery`；未测不画条。

TODO: 积分、头像兑换、周报正确率、订正率和上周掌握度都还没有字段。这些位置不放假数，上周对比的哑铃图等字段返回后再画。
