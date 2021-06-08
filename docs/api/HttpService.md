# HttpService

基于`fetch`实现的`HTTP`客户端.

* 提供超时功能
* `Web`文件自动下载处理
* 

```typescript
import { execute } from '@aomi/common-service'
async function sendReq() {
  const res = await execute({
    url: 'http://api.xxx.com'
  })
}
```

### Methods

#### `configure(options: ConfigOption)`

全局参数配置


#### `options: ConfigOption`

支持的配置选项

| Property |             Description              | Type  | Required | Default | Availability |
| :------: | :----------------------------------: | :---: | :------: | :-----: | :----------: |
| getArgs | `GET`请求默认`query string` | object | O | | |
| contentType | 非`GET`请求默认的`Content-Type` | string | O | | |
| onDownload | 当请求结果为文件下载时的`response`处理方法 | `(url: string, response: Response) => Promise<void>` | O | `handleWebFileDownload` | |

#### handleWebFileDownload

Web 端文件下载处理,自动处理`response`并生成文件,并提示浏览器下载.

#### `execute(params: Params): Promise<any>`

执行网络请求.返回一个`Promise`对象,从该对象中获取服务端返回的数据.

##### `params: Params`

请求参数. 除了以下列出的参数外,同时支持所有`fetch`的`RequestInit`所有配置.

| Property |             Description              | Type  | Required | Default | Availability |
| :------: | :----------------------------------: | :---: | :------: | :-----: | :----------: |
| url | 请求地址 | string | M | | |
| body | 请求参数,如果是`GET`请求并且是对象,自动转换为`query string`。如果该值是`object`自动调用`JSON.stringify(body)` |
| timeout | 请求超时时间 | number | O | 60000 | |
| upload | 是否是文件上传,如果是文件上传自动删除Content-Type | boolean | O | | 
