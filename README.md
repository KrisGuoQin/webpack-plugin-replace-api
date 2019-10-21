<!--
 * @Description: 
 * @Author: GuoQin
 * @Date: 2019-10-21 22:35:42
 * @LastEditors: GuoQin
 * @LastEditTime: 2019-10-21 23:05:36
 -->
# webpack-plugin-replace-api

项目中的接口地址可能来自多个域名，开发环境可以使用**devServer**配置代理解决。
一般情况下可以使用判断运行环境的形式，来加上接口的域名信息，可能要写多次的判断。
所以这里使用webpack插件来解决。

### 使用方式

```javascript
import WebpackPluginReplaceApi from 'webpack-plugin-replace-api';

const ReplaceApiOptions = [
    {
        test: /\/mobile/g,
        target: 'http://127.0.0.1'
    },
    {
        test: /\/pc/g,
        target: 'http://127.0.0.2'
    }
];

...

// mode: production

module.exports = {
    plugins: [
        new WebpackPluginReplaceApi(ReplaceApiOptions)
    ]
}
```

## CHANGELOG
CHANGELOG.md