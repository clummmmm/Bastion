const a181_0x30b2=['__esModule','Giveaway','Schema','apply','Guild','TextChannel','constructor','defineProperty','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','mongoose'];(function(_0x44039d,_0x30b2e2){const _0x5263f1=function(_0x238988){while(--_0x238988){_0x44039d['push'](_0x44039d['shift']());}};const _0x29bd6c=function(){const _0x2393ed={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4b6daf,_0x593bf1,_0x2cedee,_0x5a30d2){_0x5a30d2=_0x5a30d2||{};let _0x2473b2=_0x593bf1+'='+_0x2cedee;let _0x1fe6ab=0x0;for(let _0x23e489=0x0,_0x400bf2=_0x4b6daf['length'];_0x23e489<_0x400bf2;_0x23e489++){const _0x45246d=_0x4b6daf[_0x23e489];_0x2473b2+=';\x20'+_0x45246d;const _0x1f76e2=_0x4b6daf[_0x45246d];_0x4b6daf['push'](_0x1f76e2);_0x400bf2=_0x4b6daf['length'];if(_0x1f76e2!==!![]){_0x2473b2+='='+_0x1f76e2;}}_0x5a30d2['cookie']=_0x2473b2;},'removeCookie':function(){return'dev';},'getCookie':function(_0x548648,_0x4c10ad){_0x548648=_0x548648||function(_0x242c7e){return _0x242c7e;};const _0x2c1eca=_0x548648(new RegExp('(?:^|;\x20)'+_0x4c10ad['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x338120=function(_0x1bb5c2,_0x43d17a){_0x1bb5c2(++_0x43d17a);};_0x338120(_0x5263f1,_0x30b2e2);return _0x2c1eca?decodeURIComponent(_0x2c1eca[0x1]):undefined;}};const _0x5bbd00=function(){const _0x29e70d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x29e70d['test'](_0x2393ed['removeCookie']['toString']());};_0x2393ed['updateCookie']=_0x5bbd00;let _0x3502c7='';const _0x23f927=_0x2393ed['updateCookie']();if(!_0x23f927){_0x2393ed['setCookie'](['*'],'counter',0x1);}else if(_0x23f927){_0x3502c7=_0x2393ed['getCookie'](null,'counter');}else{_0x2393ed['removeCookie']();}};_0x29bd6c();}(a181_0x30b2,0x181));const a181_0x5263=function(_0x44039d,_0x30b2e2){_0x44039d=_0x44039d-0x0;let _0x5263f1=a181_0x30b2[_0x44039d];return _0x5263f1;};const a181_0x2393ed=function(){let _0x338120=!![];return function(_0x242c7e,_0x1bb5c2){const _0x43d17a=_0x338120?function(){if(_0x1bb5c2){const _0x29e70d=_0x1bb5c2[a181_0x5263('0x8')](_0x242c7e,arguments);_0x1bb5c2=null;return _0x29e70d;}}:function(){};_0x338120=![];return _0x43d17a;};}();const a181_0x238988=a181_0x2393ed(this,function(){const _0x3ee3cc=function(){const _0x12731b=_0x3ee3cc[a181_0x5263('0x1')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile'](a181_0x5263('0x3'));return!_0x12731b['test'](a181_0x238988);};return _0x3ee3cc();});a181_0x238988();'use strict';Object[a181_0x5263('0x2')](exports,a181_0x5263('0x5'),{'value':!![]});const mongoose=require(a181_0x5263('0x4'));const giveawaySchema=new mongoose[(a181_0x5263('0x7'))]({'_id':{'type':String,'required':!![]},'channel':{'type':String,'required':!![],'ref':a181_0x5263('0x0')},'guild':{'type':String,'required':!![],'ref':a181_0x5263('0x9')},'winners':{'type':Number},'ends':{'type':Date,'required':!![],'expires':0x15180}});exports['default']=mongoose['model'](a181_0x5263('0x6'),giveawaySchema);