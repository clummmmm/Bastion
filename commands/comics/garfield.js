const a13_0x3c44=['IRIS','img','return\x20/\x22\x20+\x20this\x20+\x20\x22/','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Powered\x20by\x20Garfield','apply','exports','guild','garfield','../../utils/omnic','Garfield','It\x20allows\x20you\x20to\x20see\x20the\x20latest\x20Garfield\x20comic\x20strip.','compile','channel','COLORS','/comics/garfield/latest','test','Constants','send','url','makeRequest'];(function(_0x160fd1,_0x3c44ec){const _0x515a50=function(_0x196886){while(--_0x196886){_0x160fd1['push'](_0x160fd1['shift']());}};const _0x421d91=function(){const _0x1d80ff={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x405938,_0x8737bd,_0x25e66c,_0x354ebb){_0x354ebb=_0x354ebb||{};let _0x54e4ac=_0x8737bd+'='+_0x25e66c;let _0x12b75d=0x0;for(let _0x25f42e=0x0,_0x5c0baf=_0x405938['length'];_0x25f42e<_0x5c0baf;_0x25f42e++){const _0x342864=_0x405938[_0x25f42e];_0x54e4ac+=';\x20'+_0x342864;const _0x4709db=_0x405938[_0x342864];_0x405938['push'](_0x4709db);_0x5c0baf=_0x405938['length'];if(_0x4709db!==!![]){_0x54e4ac+='='+_0x4709db;}}_0x354ebb['cookie']=_0x54e4ac;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3734f7,_0x57b4ac){_0x3734f7=_0x3734f7||function(_0x5e1797){return _0x5e1797;};const _0x330afd=_0x3734f7(new RegExp('(?:^|;\x20)'+_0x57b4ac['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x10c040=function(_0x1eda11,_0x426b42){_0x1eda11(++_0x426b42);};_0x10c040(_0x515a50,_0x3c44ec);return _0x330afd?decodeURIComponent(_0x330afd[0x1]):undefined;}};const _0x3a5452=function(){const _0x3b4432=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3b4432['test'](_0x1d80ff['removeCookie']['toString']());};_0x1d80ff['updateCookie']=_0x3a5452;let _0x198978='';const _0x4a9db6=_0x1d80ff['updateCookie']();if(!_0x4a9db6){_0x1d80ff['setCookie'](['*'],'counter',0x1);}else if(_0x4a9db6){_0x198978=_0x1d80ff['getCookie'](null,'counter');}else{_0x1d80ff['removeCookie']();}};_0x421d91();}(a13_0x3c44,0xc0));const a13_0x515a=function(_0x160fd1,_0x3c44ec){_0x160fd1=_0x160fd1-0x0;let _0x515a50=a13_0x3c44[_0x160fd1];return _0x515a50;};const a13_0x1d80ff=function(){let _0x1f78c3=!![];return function(_0x2dc4e3,_0x48c1d0){const _0x824430=_0x1f78c3?function(){if(_0x48c1d0){const _0x2d8017=_0x48c1d0[a13_0x515a('0x2')](_0x2dc4e3,arguments);_0x48c1d0=null;return _0x2d8017;}}:function(){};_0x1f78c3=![];return _0x824430;};}();const a13_0x196886=a13_0x1d80ff(this,function(){const _0x43377e=function(){const _0x548573=_0x43377e['constructor'](a13_0x515a('0x14'))()[a13_0x515a('0x9')](a13_0x515a('0x0'));return!_0x548573[a13_0x515a('0xd')](a13_0x196886);};return _0x43377e();});a13_0x196886();'use strict';const tesseract_1=require('@bastion/tesseract');const omnic=require(a13_0x515a('0x6'));module[a13_0x515a('0x3')]=class GarfieldCommand extends tesseract_1['Command']{constructor(){super(a13_0x515a('0x5'),{'description':a13_0x515a('0x8'),'triggers':[],'arguments':{},'scope':a13_0x515a('0x4'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]});this['exec']=async _0x3ce2f0=>{const _0x6ce6c7=await omnic[a13_0x515a('0x11')](a13_0x515a('0xc'));const _0x51f9e5=await _0x6ce6c7['json']();await _0x3ce2f0[a13_0x515a('0xa')][a13_0x515a('0xf')]({'embed':{'color':tesseract_1[a13_0x515a('0xe')][a13_0x515a('0xb')][a13_0x515a('0x12')],'author':{'name':a13_0x515a('0x7'),'url':_0x51f9e5[a13_0x515a('0x10')]},'fields':[{'name':'Publication\x20Date','value':new Date()['toDateString'](),'inline':!![]}],'image':{'url':_0x51f9e5[a13_0x515a('0x13')]},'footer':{'text':a13_0x515a('0x1')}}});};}};