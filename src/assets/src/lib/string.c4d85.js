(function(n){n.math=Math;var t=n.json={},e=n.string={};t.encode=function(n){return JSON.stringify(n)},t.decode=function(n){return JSON.parse(n)},e.split=function(n,t){return n.split(t)},e.splitByChar=e.split,e.trim=function(n){return n.replace(/^\s*/,"").replace(/\s*$/,"")},e.format=sprintf,e.sub=function(n,t,e){return n.substring(t,e)},e.reverse=function(n){return n.split("").reverse().join("")},e.find=function(n,t){return n.indexOf(t)},e.hasSuffix=function(n,t){return n.length>=t.length&&n.substr(n.length-t.length)==t},e.hasPrefix=function(n,t){return n.length>=t.length&&n.substr(0,t.length)==t}})("object"==typeof window&&window||"object"==typeof global&&global||this);