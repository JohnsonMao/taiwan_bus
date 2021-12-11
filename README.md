# The F2E 全台公車動態時刻查詢應用服務 | [Demo](https://johnsonmao.github.io/taiwan_bus)

## 作品畫面

![The F2E 全台公車動態時刻查詢應用服務畫面](https://i.imgur.com/tmPiHsW.png)
## 作品說明

設計採用 [KT](https://ktdesigner.neocities.org/UIweb/TaiwanBus.html) 的設計稿

The F2E 全台公車動態時刻查詢應用服務，以行動裝置的方向開發，使用 [TDX 運輸資料流通服務](https://tdx.transportdata.tw/) API 實現查詢公車路線、收藏、查看路線地圖的功能。

## 系統說明

本專案使用 `create-react-app` ，並部署到 Github Pages，運行方式使用 `yarn` 下載依賴包， `yarn start` 運行

- Node 版本 `v16.4.2`
- yarn 版本 `v1.22.11`
- React 版本 `v17.0.2`
- React-router-dom 版本 `v6.0.2`

## 資料夾說明

```
|- /src
    |- /api：存放 API 串接整合資料
    |- /asset：Icon 與 SCSS
    |- /components：共用元件
    |- /pages：頁面
    |- /utils：通用工具 Hook、設置常數
```

## 使用技術

- React
- Leaflet
- PubSub-js
- BootStrap

## 第三方服務

- MapBox
## 引用圖檔

Cover photo by <a href="https://unsplash.com/@malteesimo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Malte Schmidt</a> on <a href="https://unsplash.com/s/photos/city?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
