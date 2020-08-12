<!--
 * @Author: SilvesterChiao
 * @Date: 2020-05-11 15:51:37
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-08-12 16:53:35
 -->

# 配置文件

Babel 的配置文件支持以下几种

- .babelrc
- .babelrc.js

## options

- presets
- env
```json
{
    "env": {
        "development": {
            "plugins": [
                [
                    "react-transform",
                    {
                        "transforms": [
                            {
                                "transform": "react-transform-hmr",
                                "imports": ["react"],
                                "locals": ["module"]
                            }
                        ]
                    }
                ]
            ]
        }
    }
}
```
- plugins
- ignore
- only
- modules: amd, umd, systemjs, commonjs, false
- minified: true
- parser: "babel-eslint"
