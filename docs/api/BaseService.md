# `BaseService<T>` 基础服务接口

### `T`

目标数据类型

### Properties

#### loading

* Type: `boolean`

加载中状态.

#### page

* Type: `Page<T>`

分页数据

#### searchParams
* Type: `any`

查询数据. `query`方法中使用

### Methods

#### `query(args?: any): Promise<any>`

数据查询接口

| Property |             Description              | Type  | Required | Default | Availability |
| :------: | :----------------------------------: | :---: | :------: | :-----: | :----------: |
|   args   | 请求参数; 任意类型，根据自身需求传递 |  any  |    O     |   无    |              |

#### `persist(args: T, options?: any): Promise<any>`

数据持久化接口,用于保存和更新数据

| Property |   Description    | Type  | Required | Default | Availability |
| :------: | :--------------: | :---: | :------: | :-----: | :----------: |
|   args   | 需要持久化的数据 |   T   |    M     |         |              |
| options  |   其他参数选项   |  any  |    O     |         |              |
