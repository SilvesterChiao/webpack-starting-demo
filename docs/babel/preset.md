<!--
 * @Author: SilvesterChiao
 * @Date: 2020-05-11 14:23:53
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-08-12 15:07:22
 -->

# Babel 预设

preset 就是 plugin 的集合

## es2015

## es201x, latest

## env

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
