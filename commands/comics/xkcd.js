const a14_0x2fb2=['Publication\x20Date','compile','It\x20allows\x20you\x20to\x20see\x20the\x20latest\x20xkcd\x20comic\x20strip.','Constants','Command','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','exports','return\x20/\x22\x20+\x20this\x20+\x20\x22/','img','json','Powered\x20by\x20xkcd','@bastion/tesseract','COLORS','safe_title','[Open\x20Link](https://www.explainxkcd.com/wiki/index.php/','https://xkcd.com','channel','../../utils/omnic','constructor','num','makeRequest','xkcd','guild','Explain\x20It!'];(function(_0x9af74e,_0x2fb243){const _0x5c69da=function(_0x4ca172){while(--_0x4ca172){_0x9af74e['push'](_0x9af74e['shift']());}};const _0xd182f6=function(){const _0x289623={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x330682,_0x29ed43,_0x24fb73,_0x58bbe2){_0x58bbe2=_0x58bbe2||{};let _0x1967ac=_0x29ed43+'='+_0x24fb73;let _0x1a1345=0x0;for(let _0x499622=0x0,_0x23a60e=_0x330682['length'];_0x499622<_0x23a60e;_0x499622++){const _0x1f626a=_0x330682[_0x499622];_0x1967ac+=';\x20'+_0x1f626a;const _0x148256=_0x330682[_0x1f626a];_0x330682['push'](_0x148256);_0x23a60e=_0x330682['length'];if(_0x148256!==!![]){_0x1967ac+='='+_0x148256;}}_0x58bbe2['cookie']=_0x1967ac;},'removeCookie':function(){return'dev';},'getCookie':function(_0x449178,_0x51a58c){_0x449178=_0x449178||function(_0x4667f0){return _0x4667f0;};const _0xcd8940=_0x449178(new RegExp('(?:^|;\x20)'+_0x51a58c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x535c51=function(_0x1f8eb6,_0x56c2a9){_0x1f8eb6(++_0x56c2a9);};_0x535c51(_0x5c69da,_0x2fb243);return _0xcd8940?decodeURIComponent(_0xcd8940[0x1]):undefined;}};const _0x534e28=function(){const _0xe6d105=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xe6d105['test'](_0x289623['removeCookie']['toString']());};_0x289623['updateCookie']=_0x534e28;let _0x532a23='';const _0x142bc4=_0x289623['updateCookie']();if(!_0x142bc4){_0x289623['setCookie'](['*'],'counter',0x1);}else if(_0x142bc4){_0x532a23=_0x289623['getCookie'](null,'counter');}else{_0x289623['removeCookie']();}};_0xd182f6();}(a14_0x2fb2,0x8c));const a14_0x5c69=function(_0x9af74e,_0x2fb243){_0x9af74e=_0x9af74e-0x0;let _0x5c69da=a14_0x2fb2[_0x9af74e];return _0x5c69da;};const a14_0x289623=function(){let _0xecb818=!![];return function(_0x413949,_0x282de4){const _0x42f0d0=_0xecb818?function(){if(_0x282de4){const _0x2d99de=_0x282de4['apply'](_0x413949,arguments);_0x282de4=null;return _0x2d99de;}}:function(){};_0xecb818=![];return _0x42f0d0;};}();const a14_0x4ca172=a14_0x289623(this,function(){const _0x51404c=function(){const _0x44ffdc=_0x51404c[a14_0x5c69('0x16')](a14_0x5c69('0xb'))()[a14_0x5c69('0x5')](a14_0x5c69('0x9'));return!_0x44ffdc['test'](a14_0x4ca172);};return _0x51404c();});a14_0x4ca172();'use strict';const tesseract_1=require(a14_0x5c69('0xf'));const omnic=require(a14_0x5c69('0x15'));module[a14_0x5c69('0xa')]=class XKCDCommand extends tesseract_1[a14_0x5c69('0x8')]{constructor(){super(a14_0x5c69('0x1'),{'description':a14_0x5c69('0x6'),'triggers':[],'arguments':{},'scope':a14_0x5c69('0x2'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]});this['exec']=async _0x3a7dc3=>{const _0x181214=await omnic[a14_0x5c69('0x0')]('/comics/xkcd');const _0x4c5696=await _0x181214[a14_0x5c69('0xd')]();await _0x3a7dc3[a14_0x5c69('0x14')]['send']({'embed':{'color':tesseract_1[a14_0x5c69('0x7')][a14_0x5c69('0x10')]['IRIS'],'author':{'name':a14_0x5c69('0x1'),'url':a14_0x5c69('0x13')},'title':_0x4c5696[a14_0x5c69('0x11')]||_0x4c5696['title'],'description':_0x4c5696['alt'],'fields':[{'name':'Comic\x20Number','value':_0x4c5696[a14_0x5c69('0x17')],'inline':!![]},{'name':a14_0x5c69('0x4'),'value':_0x4c5696['day']+'-'+_0x4c5696['month']+'-'+_0x4c5696['year'],'inline':!![]},{'name':a14_0x5c69('0x3'),'value':a14_0x5c69('0x12')+_0x4c5696['num']+')','inline':!![]}],'image':{'url':_0x4c5696[a14_0x5c69('0xc')]},'footer':{'text':a14_0x5c69('0xe')}}});};}};