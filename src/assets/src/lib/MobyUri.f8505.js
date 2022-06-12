(function(t,r){"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r():t.MobyUri=r()})(this,function(){var t=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,r=/^([^\@]+)\@/,e=/:(\d+)$/,i=/^([^=]+)(?:=(.*))?$/,n=function(t){return"[object Array]"===Object.prototype.toString.call(t)};function s(t){return this.parse(t)}for(var h in s.prototype={parse:function(r){var e=r?r.match(t):[];return this.scheme(e[2]||"").authority(e[4]||"").path_set(e[5]||"").fragment(e[9]||"").query_set(e[7]||"")},clone:function(){var t=this.constructor();for(var r in this)t[r]=this[r];return t},gs:function(t,r,e){return void 0!==t?(this[r]=t,this):e?e(this[r]):this[r]},fragment:function(t){return this.gs(t,"_fragment")},user_info:function(t){return this.gs(t,"_userinfo",function(t){return void 0===t?t:encodeURI(t)})},path_set:function(t){return this._path_parse(t),this},path_basename_set:function(t){return this._path_trailing_slash?(this._path.push(t),this._path_trailing_slash=!1):this._path[this._path.length-1]=t,this},_path_parse:function(t){var r=(t=decodeURIComponent(t||"")).split("/");return this._path_leading_slash=!1,this._path_trailing_slash=!1,t.match(/^\//)&&(this._path_leading_slash=!0,r.shift()),r.length>1&&t.match(/\/$/)&&(this._path_trailing_slash=!0,r.pop()),this._path=r,r},path_to_string:function(t){return t=(t||this._path).join("/"),this._path_leading_slash&&(t="/"+t),this._path_trailing_slash&&(t+="/"),t},path_to_dir:function(){var t=this._path;return this._path_trailing_slash||(t.pop(),t.push("")),this.path_to_string(t)},path_parts:function(t){return this.gs(t,"_path")},scheme:function(t){return this.gs(t,"_scheme")},port:function(t){return this.gs(t,"_port")},host:function(t){return this.gs(t,"_host")},protocol:function(){return this.scheme.toLowerCase()},authority:function(t){var i,n,s;return void 0!==t?(this._authority=t,(i=t.match(r))&&(t=t.replace(r,""),this.user_info(i[1])),(n=t.match(e))&&(t=t.replace(e,""),this.port(n[1])),this.host(t),this):(t="",(s=this.user_info())&&(t=s+"@"),t+=this.host(),(n=this.port())&&(t+=":"+n),t)},to_string:function(){var t=this.query_to_string(),r=this.fragment(),e=this.scheme();return(e?e+"://":"")+this.authority()+this.path_to_string()+(t?"?"+t:"")+(r?"#"+r:"")},query_to_string:function(){for(var t=[],r=this._query[0],e=this._query[1],i=0;i<r.length;i++)t.push(encodeURIComponent(r[i])+"="+encodeURIComponent(e[i]));return t.join("&")},query_get:function(t){for(var r={},e=this._query,i=0;i<e[0].length;i++){var n=e[0][i],s=e[1][i];t&&n!==t||r[n]||(r[n]=s)}return t?r[t]:r},query_get_all:function(t){for(var r={},e=this._query,i=0;i<e[0].length;i++){var n=e[0][i],s=e[1][i];t&&n!==t||(r[n]?r[n].push(s):r[n]=[s])}return t?r[t]:r},_query_parse:function(t){for(var r=[[],[]],e=t.split(/&|;|\?/),n=0;n<e.length;n++){var s=e[n].match(i);if(s&&void 0!==s[s.length-1]){s.shift();for(var h=0;h<s.length;h++){var o=s[h];r[h].push(decodeURIComponent(o.replace("+"," ","g")))}}}return r},_query_toList:function(t,r,e){for(var i in e)if(n(e[i]))for(var s=0;s<e[i].length;s++){var h=e[i][s];t.push(i),r.push(h)}else void 0!==e[i]&&null!==e[i]&&(t.push(i),r.push(e[i]));return[t,r]},query_push:function(t){return this._query=this._query_toList(this._query[0],this._query[1],t),this},query_merge:function(t){var r=this._query[0],e=this._query[1];for(var i in t)for(var s=!1,h=0;h<r.length;h++)if(i===r[h]){if(s){r.splice(h,1),e.splice(h,1);continue}n(t[i])?e[h]=t[i].shift():void 0===t[i]||null===t[i]?(r.splice(h,1),e.splice(h,1),delete t[i]):(e[h]=t[i],delete t[i]),s=!0}return this.query_push(t),this},query_clear:function(){return this._query=[[],[]],this},query_set:function(){var t=Array.prototype.slice.call(arguments);if(1===t.length)"object"==typeof t[0]?this._query=this._query_toList([],[],t[0]):this._query=this._query_parse(t[0]);else if(0===t.length)this.query_clear();else{var r={};r[t[0]]=t[1],this.query_merge(r)}return this}},s.prototype)if(!h.match(/^_/)){var o=h.replace(/(\_[a-z])/g,function(t){return t.toUpperCase().replace("_","")});s.prototype[o]=s.prototype[h]}return s});