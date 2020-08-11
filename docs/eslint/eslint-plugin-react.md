# eslint-plugin-react

react 专属 eslint 规则

快速开启推荐规则（21）

```json
{
  "extends": ["plugin:react/recommended"]
}
```

快速开启所有规则

```json
{
  "plugins": ["react"],
  "extends": ["eslint:all", "plugin:react/all"]
}
```

## 基本规则（49）

- react/boolean-prop-naming
- react/button-has-type
- react/default-props-match-prop-types
- react/destructuring-assignment
- ![推荐规则](../assets/images/recommended.png)react/display-name
- react/forbid-component-props
- react/forbid-dom-props
- react/forbid-elements
- react/forbid-prop-types
- react/forbid-foreign-prop-types
- react/no-access-state-in-setstate
- react/no-array-index-key
- ![推荐规则](../assets/images/recommended.png)react/no-children-prop
- react/no-danger
- ![推荐规则](../assets/images/recommended.png)react/no-danger-with-children
- ![推荐规则](../assets/images/recommended.png)react/no-deprecated
- react/no-did-mount-set-state
- react/no-did-update-set-state
- ![推荐规则](../assets/images/recommended.png)react/no-direct-mutation-state
- ![推荐规则](../assets/images/recommended.png)react/no-find-dom-node
- ![推荐规则](../assets/images/recommended.png)react/no-is-mounted
- react/no-multi-comp
- react/no-redundant-should-component-update
- ![推荐规则](../assets/images/recommended.png)react/no-render-return-value
- react/no-set-state
- react/no-typos
- ![推荐规则](../assets/images/recommended.png)react/no-string-refs
- react/no-this-in-sfc
- ![推荐规则](../assets/images/recommended.png)react/no-unescaped-entities
- ![推荐规则](../assets/images/recommended.png)react/no-unknown-property
- react/no-unsafe
- react/no-unused-prop-types
- react/no-unused-state
- react/no-will-update-set-state
- react/prefer-es6-class
- react/prefer-read-only-props
- react/prefer-stateless-function
- ![推荐规则](../assets/images/recommended.png)react/prop-types
- ![推荐规则](../assets/images/recommended.png)react/react-in-jsx-scope
- react/require-default-props
- react/require-optimization
- ![推荐规则](../assets/images/recommended.png)react/require-render-return
- react/self-closing-comp
- react/sort-comp
- react/sort-prop-types
- react/state-in-constructor
- react/static-property-placement
- react/style-prop-object
- react/void-dom-elements-no-children

## jsx 规则（34）

- react/jsx-boolean-value
- react/jsx-child-element-spacing
- react/jsx-closing-bracket-location
- react/jsx-closing-tag-location
- react/jsx-curly-newline
- react/jsx-curly-spacing
- react/jsx-equals-spacing
- react/jsx-filename-extension
- react/jsx-first-prop-new-line
- react/jsx-handler-names
- react/jsx-indent
- react/jsx-indent-props
- ![推荐规则](../assets/images/recommended.png)react/jsx-key
- react/jsx-max-depth
- react/jsx-max-props-per-line
- react/jsx-no-bind
- ![推荐规则](../assets/images/recommended.png)react/jsx-no-comment-textnodes
- ![推荐规则](../assets/images/recommended.png)react/jsx-no-duplicate-props
- react/jsx-no-literals
- ![推荐规则](../assets/images/recommended.png)react/jsx-no-target-blank:
- ![推荐规则](../assets/images/recommended.png)react/jsx-no-undef
- react/jsx-one-expression-per-line
- react/jsx-curly-brace-presence
- react/jsx-fragments
- react/jsx-pascal-case
- react/jsx-props-no-multi-spaces
- react/jsx-props-no-spreading
- react/jsx-sort-default-props
- react/jsx-sort-props
- react/jsx-space-before-closing
- react/jsx-tag-spacing
- ![推荐规则](../assets/images/recommended.png)react/jsx-uses-react
- ![推荐规则](../assets/images/recommended.png)react/jsx-uses-vars
- react/jsx-wrap-multilines
