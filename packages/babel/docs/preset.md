<!--
 * @Author: SilvesterChiao
 * @Date: 2020-05-11 14:23:53
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-08-14 11:02:43
 -->

# Babel 预设

preset 就是 plugin 的集合

## es2015

## es201x, latest

## env

env 包含 es2015, es2016, es2017
    [babel-preset-env]()
    [@babel/preset-env]()

```json
{
    "parests": [
        [
            "env", {
                "targets": {
                    "browsers": ["last 2 versions", 'safari >= 7']
                }
            }
        ]
    ]
}
```

## react
