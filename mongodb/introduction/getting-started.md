# 开始

有一个交互实例

1. 切换数据库

- `db`
- `use [dbName]`

2. 插入几条数据

```js
db.movies.insertMany([
  {
    title: 'Titanic',
    year: 1997,
    genres: ['Drama', 'Romance'],
    rated: 'PG-13',
    languages: ['English', 'French', 'German', 'Swedish', 'Italian', 'Russian'],
    released: ISODate('1997-12-19T00:00:00.000Z'),
    awards: {
      wins: 127,
      nominations: 63,
      text: 'Won 11 Oscars. Another 116 wins & 63 nominations.',
    },
    cast: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane', 'Kathy Bates'],
    directors: ['James Cameron'],
  },
])
```

3. 查询数据

```js
db.movies.find({})
```

- 普通的值可以直接固定
- 数字比如 year 可以比大小
  - `$lt` less-than 小于
  - `$gt` greater-than 大于
  - `$in` 数组中包含的内容，也可以是字符串数组

4. 筛选返回

```js
db.movies.find({}, { title: 1, directors: 1, year: 1 })
```

默认返回 \_id 可以通过 `_id:0` 来取消

5. 聚合 $group

把多个文档的值组合到一起返回单个结果，也就是操作返回的数据结果

比如 计算每个值出现的次数 `genres`，这是一个字符串数组，传递了三个参数

- `$unwind` 输出一个文档，每个 genres 数组的元素。也就是对这个字段动手
- `$group` 确定返回的内容结构
- 筛选排序，按照其中的某个字段排序

```js
db.movies.aggregate([
  { $unwind: '$genres' },
  {
    $group: {
      _id: '$genres',
      genreCount: { $count: {} },
    },
  },
  { $sort: { genreCount: -1 } },
])
```

介绍了很多基本思路，细节慢慢谈

next [数据库和集合](../core/databases-and-collections.md)
