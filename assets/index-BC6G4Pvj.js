import{f as d,g as S}from"./index-kaEL3jBi.js";import{h as y}from"./useFetch-G5E5aif_.js";var g={exports:{}};/** @license
 *
 *  Copyright (C) 2012 K. Arthur Endsley (kaendsle@mtu.edu)
 *  Michigan Tech Research Institute (MTRI)
 *  3600 Green Court, Suite 100, Ann Arbor, MI, 48105
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */(function(p,u){(function(f,l){p.exports=l()})(d,function(){var f,l,n;return n=function(t){if(t instanceof n)return t;if(!(this instanceof n))return new n(t);this._wrapped=t},f=function(t,e){return t.substring(0,e.length)===e},l=function(t,e){return t.substring(t.length-e.length)===e},n.delimiter=" ",n.isArray=function(t){return!!(t&&t.constructor===Array)},n.trim=function(t,e){for(e=e||" ";f(t,e);)t=t.substring(1);for(;l(t,e);)t=t.substring(0,t.length-1);return t},n.Wkt=function(t){this.delimiter=n.delimiter||" ",this.wrapVertices=!0,this.regExes={typeStr:/^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,spaces:/\s+|\+/,numeric:/-*\d+(\.*\d+)?/,comma:/\s*,\s*/,parenComma:/\)\s*,\s*\(/,coord:/-*\d+\.*\d+ -*\d+\.*\d+/,doubleParenComma:/\)\s*\)\s*,\s*\(\s*\(/,ogcTypes:/^(multi)?(point|line|polygon|box)?(string)?$/i,crudeJson:/^{.*"(type|coordinates|geometries|features)":.*}$/},this._stripWhitespaceAndParens=function(e){var s=e.trim(),i=s.replace(/^\(?(.*?)\)?$/,"$1");return i},this.components=void 0,t&&typeof t=="string"?this.read(t):t&&typeof t!==void 0&&this.fromObject(t)},n.Wkt.prototype.isCollection=function(){switch(this.type.slice(0,5)){case"multi":return!0;case"polyg":return!0;default:return!1}},n.Wkt.prototype.sameCoords=function(t,e){return t.x===e.x&&t.y===e.y},n.Wkt.prototype.fromObject=function(t){var e;return t.hasOwnProperty("type")&&t.hasOwnProperty("coordinates")?e=this.fromJson(t):e=this.deconstruct.call(this,t),this.components=e.components,this.isRectangle=e.isRectangle||!1,this.type=e.type,this},n.Wkt.prototype.toObject=function(t){var e=this.construct[this.type].call(this,t);return typeof e=="object"&&!n.isArray(e)&&(e.properties=this.properties),e},n.Wkt.prototype.toString=function(t){return this.write()},n.Wkt.prototype.fromJson=function(t){var e,s,i,o,a,c;if(this.type=t.type.toLowerCase(),this.components=[],t.hasOwnProperty("geometry"))return this.fromJson(t.geometry),this.properties=t.properties,this;if(o=t.coordinates,!n.isArray(o[0]))this.components.push({x:o[0],y:o[1]});else for(e in o)if(o.hasOwnProperty(e))if(!n.isArray(o[e][0]))this.type==="multipoint"?this.components.push([{x:o[e][0],y:o[e][1]}]):this.components.push({x:o[e][0],y:o[e][1]});else{c=[];for(s in o[e])if(o[e].hasOwnProperty(s))if(!n.isArray(o[e][s][0]))c.push({x:o[e][s][0],y:o[e][s][1]});else{a=[];for(i in o[e][s])o[e][s].hasOwnProperty(i)&&a.push({x:o[e][s][i][0],y:o[e][s][i][1]});c.push(a)}this.components.push(c)}return this},n.Wkt.prototype.toJson=function(){var t,e,s,i,o,a,c;if(t=this.components,e={coordinates:[],type:(function(){var r,h,m;h=this.regExes.ogcTypes.exec(this.type).slice(1),m=[];for(r in h)h.hasOwnProperty(r)&&h[r]!==void 0&&m.push(h[r].toLowerCase().slice(0,1).toUpperCase()+h[r].toLowerCase().slice(1));return m}).call(this).join("")},this.type.toLowerCase()==="box"){e.type="Polygon",e.bbox=[];for(s in t)t.hasOwnProperty(s)&&(e.bbox=e.bbox.concat([t[s].x,t[s].y]));return e.coordinates=[[[t[0].x,t[0].y],[t[0].x,t[1].y],[t[1].x,t[1].y],[t[1].x,t[0].y],[t[0].x,t[0].y]]],e}for(s in t)if(t.hasOwnProperty(s))if(n.isArray(t[s])){c=[];for(i in t[s])if(t[s].hasOwnProperty(i))if(n.isArray(t[s][i])){a=[];for(o in t[s][i])t[s][i].hasOwnProperty(o)&&a.push([t[s][i][o].x,t[s][i][o].y]);c.push(a)}else t[s].length>1?c.push([t[s][i].x,t[s][i].y]):c=c.concat([t[s][i].x,t[s][i].y]);e.coordinates.push(c)}else t.length>1?e.coordinates.push([t[s].x,t[s].y]):e.coordinates=e.coordinates.concat([t[s].x,t[s].y]);return e},n.Wkt.prototype.merge=function(t){var e=this.type.slice(0,5);if(this.type!==t.type&&this.type.slice(5,this.type.length)!==t.type)throw TypeError("The input geometry types must agree or the calling this.Wkt.Wkt instance must be a multigeometry of the other");switch(e){case"point":this.components=[this.components.concat(t.components)];break;case"multi":this.components=this.components.concat(t.type.slice(0,5)==="multi"?t.components:[t.components]);break;default:this.components=[this.components,t.components];break}return e!=="multi"&&(this.type="multi"+this.type),this},n.Wkt.prototype.read=function(t){var e;if(e=this.regExes.typeStr.exec(t),e)this.type=e[1].toLowerCase(),this.base=e[2],this.ingest[this.type]&&(this.components=this.ingest[this.type].apply(this,[this.base]));else if(this.regExes.crudeJson.test(t))if(typeof JSON=="object"&&typeof JSON.parse=="function")this.fromJson(JSON.parse(t));else throw console.log("JSON.parse() is not available; cannot parse GeoJSON strings"),{name:"JSONError",message:"JSON.parse() is not available; cannot parse GeoJSON strings"};else throw console.log("Invalid WKT string provided to read()"),{name:"WKTError",message:"Invalid WKT string provided to read()"};return this},n.Wkt.prototype.write=function(t){var e,s,i;for(t=t||this.components,s=[],s.push(this.type.toUpperCase()+"("),e=0;e<t.length;e+=1){if(this.isCollection()&&e>0&&s.push(","),!this.extract[this.type])return null;i=this.extract[this.type].apply(this,[t[e]]),this.isCollection()&&this.type!=="multipoint"?s.push("("+i+")"):(s.push(i),e!==t.length-1&&this.type!=="multipoint"&&s.push(","))}return s.push(")"),s.join("")},n.Wkt.prototype.extract={point:function(t){return String(t.x)+this.delimiter+String(t.y)},multipoint:function(t){var e,s=[],i;for(e=0;e<t.length;e+=1)i=this.extract.point.apply(this,[t[e]]),this.wrapVertices&&(i="("+i+")"),s.push(i);return s.join(",")},linestring:function(t){return this.extract.point.apply(this,[t])},multilinestring:function(t){var e,s=[];if(t.length)for(e=0;e<t.length;e+=1)s.push(this.extract.linestring.apply(this,[t[e]]));else s.push(this.extract.point.apply(this,[t]));return s.join(",")},polygon:function(t){return this.extract.multilinestring.apply(this,[t])},multipolygon:function(t){var e,s=[];for(e=0;e<t.length;e+=1)s.push("("+this.extract.polygon.apply(this,[t[e]])+")");return s.join(",")},box:function(t){return this.extract.linestring.apply(this,[t])},geometrycollection:function(t){console.log("The geometrycollection WKT type is not yet supported.")}},n.Wkt.prototype.ingest={point:function(t){var e=n.trim(t).split(this.regExes.spaces);return[{x:parseFloat(this.regExes.numeric.exec(e[0])[0]),y:parseFloat(this.regExes.numeric.exec(e[1])[0])}]},multipoint:function(t){var e,s,i;for(s=[],i=n.trim(t).split(this.regExes.comma),e=0;e<i.length;e+=1)s.push(this.ingest.point.apply(this,[i[e]]));return s},linestring:function(t){var e,s,i;for(s=this.ingest.multipoint.apply(this,[t]),i=[],e=0;e<s.length;e+=1)i=i.concat(s[e]);return i},multilinestring:function(t){var e,s,i,o;for(s=[],o=n.trim(t).split(this.regExes.doubleParenComma),o.length===1&&(o=n.trim(t).split(this.regExes.parenComma)),e=0;e<o.length;e+=1)i=this._stripWhitespaceAndParens(o[e]),s.push(this.ingest.linestring.apply(this,[i]));return s},polygon:function(t){var e,s,i,o,a,c;for(c=n.trim(t).split(this.regExes.parenComma),i=[],e=0;e<c.length;e+=1){for(a=this._stripWhitespaceAndParens(c[e]).split(this.regExes.comma),o=[],s=0;s<a.length;s+=1){var r=a[s].split(this.regExes.spaces);if(r.length>2&&(r=r.filter(function(x){return x!=""})),r.length===2){var h=r[0],m=r[1];o.push({x:parseFloat(h),y:parseFloat(m)})}}i.push(o)}return i},box:function(t){var e,s,i;for(s=this.ingest.multipoint.apply(this,[t]),i=[],e=0;e<s.length;e+=1)i=i.concat(s[e]);return i},multipolygon:function(t){var e,s,i,o;for(s=[],o=n.trim(t).split(this.regExes.doubleParenComma),e=0;e<o.length;e+=1)i=this._stripWhitespaceAndParens(o[e]),s.push(this.ingest.polygon.apply(this,[i]));return s},geometrycollection:function(t){console.log("The geometrycollection WKT type is not yet supported.")}},n})})(g);var v=g.exports;const w=S(v),$=p=>p?y.get(`/api/basic/v2/Bus/Route/City/${p}`,{$select:["RouteUID","RouteName","DepartureStopNameZh","DestinationStopNameZh"]}):[],W=(p,u)=>y.get(`/api/basic/v2/Bus/StopOfRoute/City/${p}/${u}`,{$select:["RouteUID","Direction","Stops"]}),O=(p,u)=>y.get(`/api/basic/v2/Bus/RealTimeNearStop/City/${p}/${u}`,{$select:["PlateNumb","StopID","A2EventType"]}),E=(p,u)=>y.get(`/api/basic/v2/Bus/EstimatedTimeOfArrival/City/${p}/${u}`,{$select:["RouteName","StopID","Direction","EstimateTime","StopStatus"]}),C=(p,u)=>y.get(`/api/basic/v2/Bus/Shape/City/${p}/${u}`,{$select:["RouteUID","RouteName","Direction","Geometry"]}),b=(p,u)=>y.get(`/api/basic/v2/Bus/RealTimeByFrequency/City/${p}/${u}`,{$select:["PlateNumb","BusPosition","Speed","Direction","Azimuth"]}),D=async(p,u)=>{if(!p||!u)return[];const f=[C(p,u),W(p,u),O(p,u),E(p,u),b(p,u)],[l,n,t,e,s]=await Promise.all(f),i=new w.Wkt;i.read(l[0].Geometry);const o=i.toJson().coordinates.map(r=>r.reverse()),a=[[],[],o,s],c=[...n[0].Stops,...n[1].Stops].sort((r,h)=>r.StopID-h.StopID);return e.sort((r,h)=>r.StopID-h.StopID),c.forEach((r,h)=>{Object.assign(r,e[h])}),c.forEach(r=>{(r.Direction===0||r.Direction===1)&&a[r.Direction].push(r)}),a[0].sort((r,h)=>r.StopSequence-h.StopSequence),a[1].sort((r,h)=>r.StopSequence-h.StopSequence),t.forEach(r=>{a[r.Direction][r.StopSequence-1]=Object.assign(a[r.Direction][r.StopSequence-1],r)}),a};export{$ as a,D as b};
