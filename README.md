# The F2E 全台公車動態時刻查詢應用服務 | [Demo](https://johnsonmao.github.io/taiwan_bus)

## 作品說明

The F2E 全台公車動態時刻查詢應用服務
以手機網頁為方向來開發
採用 [TDX 運輸資料流通服務](https://tdx.transportdata.tw/)
實現查詢公車路線、收藏、查看路線地圖的功能。

## 系統說明

本專案運行方式是使用 `yarn`、`yarn start`
node 版本 `v16.4.2`
yarn 版本 `v1.22.11`

## 資料夾說明

```
|- /src
    |- /api：存放 API 串接整合資料
    |- /asset：通用 Icon 與 SCSS
    |- /components：元件
    |- /pages：頁面
    |- /utils：通用工具、設置
```

## 使用技術

- React
- Leaflet
- PubSub-js
- Bootstrap 5

## 第三方服務

- MapBox
## 引用圖檔 與 設計

設計採用 [KT](https://ktdesigner.neocities.org/UIweb/TaiwanBus.html) 的設計稿

Cover photo by <a href="https://unsplash.com/@malteesimo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Malte Schmidt</a> on <a href="https://unsplash.com/s/photos/city?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
