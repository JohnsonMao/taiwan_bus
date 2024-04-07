# The F2E 全台公車動態時刻查詢應用服務 | [Demo](https://johnsonmao.github.io/taiwan_bus)

## 作品畫面

![The F2E 全台公車動態時刻查詢應用服務畫面](https://i.imgur.com/Gc44QTB.png)
## 作品說明

設計採用 [KT](https://www.behance.net/gallery/131646273/Taiwan-Bus-Project) 的設計稿，目前設計師已把 Figma 關閉，可以自行連絡設計師觀看 Figma 設計稿。

The F2E 全台公車動態時刻查詢應用服務，以行動裝置的方向開發，使用 [TDX 運輸資料流通服務](https://tdx.transportdata.tw/) API 實現查詢公車路線、收藏、查看路線地圖與附近公車站牌的功能。

## 系統說明

本專案 2021 年使用 `create-react-app` 建置，2024 重構成 Vite 建置，並部署到 Github Pages。

## 如何在本地端啟動專案

- Node 版本 `v20.10.0`
- pnpm 版本 `v8.13.1`

請新增 .env 檔案並填入 TDX 與 MapBox 環境變數

```bash
VITE_CLIENT_ID=     # TDX Client ID
VITE_CLIENT_SECRET= # TDX Client Secret
VITE_MAP_USERNAME=  # MapBox Username
VITE_MAP_STYLE_ID=  # MapBox style ID
VITE_MAP_TOKEN=     # MapBox token
```

啟動專案

```bash
pnpm install # 下載依賴套件
pnpm dev     # 開發模式
```

## 資料夾說明

```
|- /src
    |- /api：存放 API 串接整合資料
    |- /asset：Icon, config 與 SCSS
    |- /components：共用元件
    |- /hooks：共用 hooks
    |- /pages：頁面
    |- /utils：通用工具
```

## 使用技術

- React
- Leaflet
- PubSub-js
- BootStrap

## 第三方服務

- [TDX 運輸資料流通服務](https://tdx.transportdata.tw/)
- [MapBox](https://www.mapbox.com/)

## 引用圖檔

Cover photo by <a href="https://unsplash.com/@malteesimo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Malte Schmidt</a> on <a href="https://unsplash.com/s/photos/city?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
