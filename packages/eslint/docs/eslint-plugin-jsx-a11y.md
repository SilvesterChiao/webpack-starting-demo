# eslint-plugin-jsx-a11y

accessibility（可访问性），a 开头，y 结尾，中间有 11 个字母，其他设备（屏幕阅读器，投影等浏览器以外的设备）读取网页，所以*eslint-plugin-jsx-a11y*就表示 jsx 语法的可访问性的 eslint 规则

共计 33 条，分为推荐、严格两种模式，其实并没有太大区别，两种模式所有规则都是 error，推荐模式下有几个规则带有 options

推荐模式

```json
{
  "extends": ["plugin:jsx-a11y/recommended"]
}
```

开启严格模式

```json
{
  "extends": ["plugin:jsx-a11y/strict"]
}
```

- accessible-emoji：强制 emoji 表情用 span 标签包裹
- alt-text：
- anchor-has-content：强制所有 a 标签指向可访问的链接
- anchor-is-valid：
- aria-activedescendant-has-tabindex：
- aria-props：
- aria-proptypes：
- aria-role：
- aria-unsupported-elements：
- click-events-have-key-events：
- heading-has-content：
- html-has-lang：
- iframe-has-title：
- img-redundant-alt：
- interactive-supports-focus：
- label-has-associated-control：
- media-has-caption：
- mouse-events-have-key-events：
- no-access-key：
- no-autofocus：
- no-distracting-elements：
- no-interactive-element-to-noninteractive-role：
- no-noninteractive-element-interactions：
- no-noninteractive-element-to-interactive-role：
- no-noninteractive-tabindex：
- no-onchange：
- no-redundant-roles：
- no-static-element-interactions：强制绑定了 click 处理函数的可见元素指定 rote 属性
- role-has-required-aria-props：
- scope：强制 scope 属性仅用于 th 标签
- tabindex-no-positive：强制 tableIndex 的值不大于 0
