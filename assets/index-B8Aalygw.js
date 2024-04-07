import{j as e,L as w,P as r,r as v,c as b,a as j}from"./index-kaEL3jBi.js";const Z="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.5695%205.57411C19.1322%205.13652%2018.6129%204.7894%2018.0413%204.55257C17.4697%204.31574%2016.8571%204.19385%2016.2384%204.19385C15.6197%204.19385%2015.0071%204.31574%2014.4355%204.55257C13.864%204.7894%2013.3447%205.13652%2012.9073%205.57411L11.9996%206.48182L11.0919%205.57411C10.2084%204.69063%209.01015%204.19431%207.76073%204.19431C6.51132%204.19431%205.31307%204.69063%204.4296%205.57411C3.54613%206.45758%203.0498%207.65582%203.0498%208.90524C3.0498%2010.1547%203.54613%2011.3529%204.4296%2012.2364L5.33732%2013.1441L11.9996%2019.8063L18.6618%2013.1441L19.5695%2012.2364C20.0071%2011.799%2020.3542%2011.2797%2020.5911%2010.7081C20.8279%2010.1366%2020.9498%209.52392%2020.9498%208.90524C20.9498%208.28655%2020.8279%207.67392%2020.5911%207.10235C20.3542%206.53079%2020.0071%206.01148%2019.5695%205.57411Z'%20fill='%231CC8EE'%20stroke='%231CC8EE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",R="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.5695%205.57411C19.1322%205.13652%2018.6129%204.7894%2018.0413%204.55257C17.4697%204.31574%2016.8571%204.19385%2016.2384%204.19385C15.6197%204.19385%2015.0071%204.31574%2014.4355%204.55257C13.864%204.7894%2013.3447%205.13652%2012.9073%205.57411L11.9996%206.48182L11.0919%205.57411C10.2084%204.69063%209.01015%204.19431%207.76073%204.19431C6.51132%204.19431%205.31307%204.69063%204.4296%205.57411C3.54613%206.45758%203.0498%207.65582%203.0498%208.90524C3.0498%2010.1547%203.54613%2011.3529%204.4296%2012.2364L5.33732%2013.1441L11.9996%2019.8063L18.6618%2013.1441L19.5695%2012.2364C20.0071%2011.799%2020.3542%2011.2797%2020.5911%2010.7081C20.8279%2010.1366%2020.9498%209.52392%2020.9498%208.90524C20.9498%208.28655%2020.8279%207.67392%2020.5911%207.10235C20.3542%206.53079%2020.0071%206.01148%2019.5695%205.57411V5.57411Z'%20stroke='%23414242'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";function S({data:o=[],favorites:c=[]}){return o.forEach(t=>{t.favorite=!1}),c.forEach(t=>{const s=o.findIndex(a=>(a==null?void 0:a.RouteUID)===t.RouteUID);s!==-1&&(o[s].favorite=!0)}),e.jsx(e.Fragment,{children:o.map(t=>e.jsxs("li",{className:"d-flex justify-content-between align-items-center","data-start":t.DepartureStopNameZh,"data-end":t.DestinationStopNameZh,children:[e.jsxs(w,{to:"/citybus/"+t.RouteName.Zh_tw,className:"d-block px-4 py-3","data-start":t.DepartureStopNameZh,"data-end":t.DestinationStopNameZh,children:[e.jsx("h3",{className:"fs-1 lh-base text-one-line",children:t.RouteName.Zh_tw}),e.jsxs("h4",{className:"fs-3 text-light lh-base text-one-line","data-start":t.DepartureStopNameZh,"data-end":t.DestinationStopNameZh,children:[t.DepartureStopNameZh,e.jsx("span",{className:"text-primary mx-1",children:"往"}),t.DestinationStopNameZh]})]}),e.jsx("button",{type:"button",className:"btn-favorite p-0","data-favorite":t.RouteUID+"&"+t.RouteName.Zh_tw+"&"+t.DepartureStopNameZh+"&"+t.DestinationStopNameZh,children:t.favorite?e.jsx("img",{src:Z,className:"active d-block py-6 px-5",alt:"like_off"}):e.jsx("img",{src:R,className:"d-block py-6 px-5",alt:"like_off"})})]},t.RouteUID))})}S.propTypes={data:r.array,favorites:r.array};function k({data:o=[]}){const{city:c,setCity:t}=v.useContext(b),s=j.findIndex(a=>{var i;return a.CityCode===((i=o[0])==null?void 0:i.LocationCityCode)});return v.useEffect(()=>{s!==-1&&c!==j[s].CityName&&t(j[s].CityName)},[t,c,s]),e.jsx(e.Fragment,{children:o.map((a,i)=>{const{PositionLat:u,PositionLon:h}=a.StationPosition;return e.jsx("li",{className:"d-flex justify-content-between align-items-center","data-centerstr":u+"-"+h,"data-index":i,children:e.jsxs(w,{to:a.StationID+"-"+a.StationName.Zh_tw,"data-centerstr":u+"-"+h,"data-index":i,className:"d-block px-4 py-3",children:[e.jsx("h3",{className:"fs-1 lh-base text-one-line",children:a.StationName.Zh_tw}),e.jsx("h4",{className:"fs-3 text-gray-light lh-base text-one-line",children:a.StationAddress}),e.jsx("p",{className:"fs-3 text-light lh-base wb-keep-all m-0",children:a.Stops.map((p,N,f)=>{const C=f.length-1;return N!==C?p.RouteName.Zh_tw+", ":p.RouteName.Zh_tw})})]})},i)})})}k.propTypes={data:r.array};function I({setShow:o,setIndex:c,setCenter:t,title:s,data:a=[],page:i}){const{setRouteArr:u,favorites:h,setFavorites:p}=v.useContext(b),N=n=>{const{start:l,end:g,favorite:x}=n.target.parentNode.dataset;if(x||u([l,g]),x){const D=n.target.classList[0],d={RouteName:{}},m=x.split("&");switch(d.RouteUID=m[0],d.RouteName.Zh_tw=m[1],d.DepartureStopNameZh=m[2],d.DestinationStopNameZh=m[3],D){case"active":const L=h.filter(y=>y.RouteUID!==d.RouteUID);p(L);break;default:p(y=>[...y,d])}}},f=n=>{const{start:l}=n.target.parentNode.dataset;o&&l&&o()},C=n=>{const l=n.target.parentNode.dataset.centerstr||n.target.dataset.centerstr,g=n.target.parentNode.dataset.index||n.target.dataset.index;if(l){const x=l.split("-");t(x),c(g)}};return e.jsxs("div",{className:`datalist ${i==="nearby"?"pt-7":"py-7"}`,children:[e.jsx("h2",{className:"fs-2 mb-1",children:s||"請選擇縣市"}),e.jsx("ul",{className:s==="我的附近"?"":"pb-7",onClick:s==="我的附近"?C:N,onMouseOver:f,onTouchStart:f,children:s==="我的附近"?e.jsx(k,{data:a}):s==="我的收藏"&&a[0]===void 0?e.jsx(w,{to:"/citybus",className:"fs-3",children:"趕快去添加路線吧～"}):e.jsx(S,{data:a,favorites:h})})]})}I.propTypes={setShow:r.func,title:r.string,data:r.array,page:r.string,zoom:r.number,map:r.object};export{I as D};
