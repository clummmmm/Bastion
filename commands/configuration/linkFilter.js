const a23_0x5f20=['tag','It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20Link\x20Filter\x20in\x20the\x20server.\x20And\x20it\x20also\x20allows\x20you\x20to\x20configure\x20if\x20violation\x20of\x20this\x20filter\x20should\x20be\x20considered\x20an\x20infraction.','@bastion/tesseract','MANAGE_GUILD','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Constants','infraction','apply','info','send','return\x20/\x22\x20+\x20this\x20+\x20\x22/','save','linkFilterEnabled','test','linkFilterDisable','document','exports','compile','catch','filters','linkFilter','Command','enabled','filterInfractionDisabled','guild','COLORS','filterInfractionEnabled','disable','GREEN','constructor','linkFilter\x20--no-infraction','client','enable','channel','exec','locale','getString','linkFilter\x20--disable','linkFilter\x20--enable','language','linkFilterEnable'];(function(_0xcbb1f8,_0x5f2088){const _0x4de43b=function(_0x3a1f9f){while(--_0x3a1f9f){_0xcbb1f8['push'](_0xcbb1f8['shift']());}};const _0x3d4b37=function(){const _0x2142de={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x83c0a9,_0x431ccc,_0x40039c,_0x43f86f){_0x43f86f=_0x43f86f||{};let _0x24fb7d=_0x431ccc+'='+_0x40039c;let _0x1cbf97=0x0;for(let _0x8cd9=0x0,_0x3f394f=_0x83c0a9['length'];_0x8cd9<_0x3f394f;_0x8cd9++){const _0x22c447=_0x83c0a9[_0x8cd9];_0x24fb7d+=';\x20'+_0x22c447;const _0x455fb0=_0x83c0a9[_0x22c447];_0x83c0a9['push'](_0x455fb0);_0x3f394f=_0x83c0a9['length'];if(_0x455fb0!==!![]){_0x24fb7d+='='+_0x455fb0;}}_0x43f86f['cookie']=_0x24fb7d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5ad23f,_0x558cd7){_0x5ad23f=_0x5ad23f||function(_0x42d0a9){return _0x42d0a9;};const _0x350913=_0x5ad23f(new RegExp('(?:^|;\x20)'+_0x558cd7['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x33cd59=function(_0x18a8ff,_0x30961f){_0x18a8ff(++_0x30961f);};_0x33cd59(_0x4de43b,_0x5f2088);return _0x350913?decodeURIComponent(_0x350913[0x1]):undefined;}};const _0x42105e=function(){const _0x5542b0=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5542b0['test'](_0x2142de['removeCookie']['toString']());};_0x2142de['updateCookie']=_0x42105e;let _0x2864e8='';const _0x3a38b=_0x2142de['updateCookie']();if(!_0x3a38b){_0x2142de['setCookie'](['*'],'counter',0x1);}else if(_0x3a38b){_0x2864e8=_0x2142de['getCookie'](null,'counter');}else{_0x2142de['removeCookie']();}};_0x3d4b37();}(a23_0x5f20,0x99));const a23_0x4de4=function(_0xcbb1f8,_0x5f2088){_0xcbb1f8=_0xcbb1f8-0x0;let _0x4de43b=a23_0x5f20[_0xcbb1f8];return _0x4de43b;};const a23_0x2142de=function(){let _0x1c2238=!![];return function(_0x4434fb,_0x88dd00){const _0x1cced2=_0x1c2238?function(){if(_0x88dd00){const _0x1f504b=_0x88dd00[a23_0x4de4('0x12')](_0x4434fb,arguments);_0x88dd00=null;return _0x1f504b;}}:function(){};_0x1c2238=![];return _0x1cced2;};}();const a23_0x3a1f9f=a23_0x2142de(this,function(){const _0x14374a=function(){const _0x45b48f=_0x14374a[a23_0x4de4('0x28')](a23_0x4de4('0x15'))()[a23_0x4de4('0x1c')](a23_0x4de4('0xf'));return!_0x45b48f[a23_0x4de4('0x18')](a23_0x3a1f9f);};return _0x14374a();});a23_0x3a1f9f();'use strict';const tesseract_1=require(a23_0x4de4('0xd'));module[a23_0x4de4('0x1b')]=class LinkFilterCommand extends tesseract_1[a23_0x4de4('0x20')]{constructor(){super(a23_0x4de4('0x1f'),{'description':a23_0x4de4('0xc'),'triggers':[],'arguments':{'alias':{'disable':['d'],'enable':['e'],'infraction':['i']},'boolean':[a23_0x4de4('0x26'),'enable','infraction']},'scope':a23_0x4de4('0x23'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a23_0x4de4('0xe')],'syntax':[a23_0x4de4('0x1f'),a23_0x4de4('0x8'),a23_0x4de4('0x7'),'linkFilter\x20--infraction',a23_0x4de4('0x0')]});this[a23_0x4de4('0x4')]=async(_0x20d4af,_0x1a13ef)=>{const _0x4777a9=_0x20d4af['guild'];_0x4777a9[a23_0x4de4('0x1a')][a23_0x4de4('0x1e')]={..._0x4777a9[a23_0x4de4('0x1a')]['filters'],'linkFilter':{'enabled':_0x1a13ef[a23_0x4de4('0x26')]?undefined:_0x1a13ef[a23_0x4de4('0x2')]||_0x4777a9[a23_0x4de4('0x1a')][a23_0x4de4('0x1e')]&&_0x4777a9['document']['filters'][a23_0x4de4('0x1f')]&&_0x4777a9[a23_0x4de4('0x1a')][a23_0x4de4('0x1e')]['linkFilter'][a23_0x4de4('0x21')]?!![]:undefined,'infraction':_0x1a13ef['infraction']===![]?undefined:_0x1a13ef['infraction']||_0x4777a9[a23_0x4de4('0x1a')][a23_0x4de4('0x1e')]&&_0x4777a9['document'][a23_0x4de4('0x1e')][a23_0x4de4('0x1f')]&&_0x4777a9[a23_0x4de4('0x1a')]['filters'][a23_0x4de4('0x1f')][a23_0x4de4('0x11')]?!![]:undefined}};await _0x4777a9[a23_0x4de4('0x1a')][a23_0x4de4('0x16')]();await _0x20d4af[a23_0x4de4('0x3')][a23_0x4de4('0x14')]({'embed':{'color':_0x1a13ef[a23_0x4de4('0x2')]?tesseract_1[a23_0x4de4('0x10')][a23_0x4de4('0x24')][a23_0x4de4('0x27')]:_0x1a13ef['disable']?tesseract_1[a23_0x4de4('0x10')]['COLORS']['RED']:tesseract_1[a23_0x4de4('0x10')]['COLORS']['IRIS'],'description':this['client'][a23_0x4de4('0x5')][a23_0x4de4('0x6')](_0x20d4af[a23_0x4de4('0x23')][a23_0x4de4('0x1a')]['language'],a23_0x4de4('0x13'),_0x1a13ef[a23_0x4de4('0x2')]?a23_0x4de4('0xa'):_0x1a13ef['disable']?a23_0x4de4('0x19'):_0x4777a9[a23_0x4de4('0x1a')][a23_0x4de4('0x1e')][a23_0x4de4('0x1f')][a23_0x4de4('0x21')]?a23_0x4de4('0x17'):'linkFilterDisabled',_0x20d4af['author'][a23_0x4de4('0xb')]),'footer':{'text':_0x4777a9[a23_0x4de4('0x1a')]['filters']['linkFilter'][a23_0x4de4('0x21')]?this[a23_0x4de4('0x1')][a23_0x4de4('0x5')][a23_0x4de4('0x6')](_0x20d4af[a23_0x4de4('0x23')][a23_0x4de4('0x1a')][a23_0x4de4('0x9')],a23_0x4de4('0x13'),_0x4777a9[a23_0x4de4('0x1a')][a23_0x4de4('0x1e')][a23_0x4de4('0x1f')]['infraction']?a23_0x4de4('0x25'):a23_0x4de4('0x22')):''}}})[a23_0x4de4('0x1d')](()=>{});};}};