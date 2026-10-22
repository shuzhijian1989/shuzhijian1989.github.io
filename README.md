# 学生端

uni-app Vue3 学生端。五个底部 Tab 对应今日学、精准学、互动课、问老师、我的。

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
- 互动课：`src/pages/lesson/`
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

页底色 `#f4f7f5`，主色 `#1f6f5b`。卡片白底、细边框、16px 圆角。状态颜色按文案分档，文字仍用原字段：未测 / 未开始、进行中 / 学习中、已完成 / 已掌握、已跳过、薄弱。

今日学顶部固定教材、主按钮和完成进度，任务列表在中间滚动。底部仍是现在的五个 Tab。章节掌握度用横向比例条，宽度取返回的 `mastery`；未测不画条。

TODO: 积分、头像兑换、周报正确率、订正率和上周掌握度都还没有字段。这些位置不放假数，上周对比的哑铃图等字段返回后再画。
