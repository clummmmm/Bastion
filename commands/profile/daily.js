const a108_0x1c87=['claimStreakFirst','author','getRandomInt','credit','claimStreakLast','../../utils/numbers','COLORS','premiumSinceTimestamp','exports','joinedTimestamp','document','Daily\x20Reward','Command','claimRewardBooster','catch','getClaimMessageKey','getDate','apply','IRIS','locale','language','info','../../models/Member','claimStreakClaimed','getString','exec','claimStreak','channel','getTime','default','findOne','constructor','It\x20allows\x20you\x20to\x20claim\x20Bastion\x20Coins,\x20that\x20every\x20member\x20receives\x20as\x20a\x20reward\x20for\x20being\x20in\x20the\x20server.\x20You\x20can\x20claim\x20your\x20rewards\x20once\x20every\x2024\x20hours.','daily','toDateString','alreadyClaimed','guild','lastClaimed','member','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','client'];(function(_0x27f85e,_0x1c8792){const _0x5c521f=function(_0x97e576){while(--_0x97e576){_0x27f85e['push'](_0x27f85e['shift']());}},_0x149492=function(){const _0x2b1bce={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4b1e2b,_0x1687fd,_0x53b01b,_0x130fad){_0x130fad=_0x130fad||{};let _0x249ade=_0x1687fd+'='+_0x53b01b,_0x3f78c6=0x0;for(let _0x55d98a=0x0,_0x3138c7=_0x4b1e2b['length'];_0x55d98a<_0x3138c7;_0x55d98a++){const _0x39f37b=_0x4b1e2b[_0x55d98a];_0x249ade+=';\x20'+_0x39f37b;const _0x5c751f=_0x4b1e2b[_0x39f37b];_0x4b1e2b['push'](_0x5c751f),_0x3138c7=_0x4b1e2b['length'],_0x5c751f!==!![]&&(_0x249ade+='='+_0x5c751f);}_0x130fad['cookie']=_0x249ade;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5cfdba,_0x11a3f4){_0x5cfdba=_0x5cfdba||function(_0x3572cf){return _0x3572cf;};const _0x1f6c01=_0x5cfdba(new RegExp('(?:^|;\x20)'+_0x11a3f4['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x32c8e7=function(_0x1b4f07,_0x3d1300){_0x1b4f07(++_0x3d1300);};return _0x32c8e7(_0x5c521f,_0x1c8792),_0x1f6c01?decodeURIComponent(_0x1f6c01[0x1]):undefined;}},_0x58a734=function(){const _0x5b64b5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5b64b5['test'](_0x2b1bce['removeCookie']['toString']());};_0x2b1bce['updateCookie']=_0x58a734;let _0x237e46='';const _0x27082a=_0x2b1bce['updateCookie']();if(!_0x27082a)_0x2b1bce['setCookie'](['*'],'counter',0x1);else _0x27082a?_0x237e46=_0x2b1bce['getCookie'](null,'counter'):_0x2b1bce['removeCookie']();};_0x149492();}(a108_0x1c87,0x10c));const a108_0x5c52=function(_0x27f85e,_0x1c8792){_0x27f85e=_0x27f85e-0x0;let _0x5c521f=a108_0x1c87[_0x27f85e];return _0x5c521f;};const a108_0x53b01b=function(){let _0x4a528e=!![];return function(_0x1459df,_0x3c614d){const _0x16862e=_0x4a528e?function(){if(_0x3c614d){const _0x32195b=_0x3c614d[a108_0x5c52('0x24')](_0x1459df,arguments);return _0x3c614d=null,_0x32195b;}}:function(){};return _0x4a528e=![],_0x16862e;};}(),a108_0x1687fd=a108_0x53b01b(this,function(){const _0xb01886=function(){const _0x431738=_0xb01886[a108_0x5c52('0x9')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a108_0x5c52('0x9')](a108_0x5c52('0x11'));return!_0x431738['test'](a108_0x1687fd);};return _0xb01886();});a108_0x1687fd();'use strict';const tesseract_1=require('@bastion/tesseract'),Member_1=require(a108_0x5c52('0x0')),numbers=require(a108_0x5c52('0x18'));module[a108_0x5c52('0x1b')]=class DailyCommand extends tesseract_1[a108_0x5c52('0x1f')]{constructor(){super(a108_0x5c52('0xb'),{'description':a108_0x5c52('0xa'),'triggers':['claim'],'arguments':{},'scope':a108_0x5c52('0xe'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[a108_0x5c52('0x22')]=_0x177c77=>{switch(_0x177c77){case 0x1:return a108_0x5c52('0x13');case 0x6:return a108_0x5c52('0x17');case 0x7:return a108_0x5c52('0x1');default:return'claimStreak';}},this[a108_0x5c52('0x3')]=async _0x3419af=>{const _0xb3c123=await Member_1[a108_0x5c52('0x7')][a108_0x5c52('0x8')]({'user':_0x3419af['author']['id'],'guild':_0x3419af[a108_0x5c52('0xe')]['id']}),_0x22ee48=new Date(),_0x40251d=(_0x3fdd40=>new Date(_0x3fdd40['setDate'](_0x3fdd40[a108_0x5c52('0x23')]()-0x1)))(new Date()),_0x15acb0=new Date(_0xb3c123[a108_0x5c52('0xf')]);if(_0x22ee48[a108_0x5c52('0xc')]()===_0x15acb0['toDateString']())throw new Error(this['client'][a108_0x5c52('0x26')][a108_0x5c52('0x2')](_0x3419af[a108_0x5c52('0xe')][a108_0x5c52('0x1d')][a108_0x5c52('0x27')],'errors',a108_0x5c52('0xd'),_0x3419af[a108_0x5c52('0x14')]['tag']));_0xb3c123[a108_0x5c52('0xf')]=_0x22ee48[a108_0x5c52('0x6')]();let _0x3e6c4f=numbers[a108_0x5c52('0x15')](0x2a,0x80);_0x22ee48['getTime']()-_0x3419af['member'][a108_0x5c52('0x1c')]<0xf731400&&(_0x3e6c4f/=0x2);_0xb3c123[a108_0x5c52('0x4')]=_0x40251d[a108_0x5c52('0xc')]()===_0x15acb0[a108_0x5c52('0xc')]()?_0xb3c123[a108_0x5c52('0x4')]+0x1:0x1;const _0x567ca9=this[a108_0x5c52('0x12')][a108_0x5c52('0x26')][a108_0x5c52('0x2')](_0x3419af[a108_0x5c52('0xe')][a108_0x5c52('0x1d')][a108_0x5c52('0x27')],a108_0x5c52('0x28'),this[a108_0x5c52('0x22')](_0xb3c123[a108_0x5c52('0x4')]),0x7-_0xb3c123['claimStreak']);_0xb3c123[a108_0x5c52('0x4')]===0x7&&(_0xb3c123['claimStreak']=0x0,_0x3e6c4f+=numbers[a108_0x5c52('0x15')](0x200,0x400)),_0x3419af[a108_0x5c52('0x10')][a108_0x5c52('0x1a')]&&(_0x3e6c4f*=0x2),await _0x3419af['member'][a108_0x5c52('0x16')](_0x3e6c4f,a108_0x5c52('0x1e'),_0xb3c123),await _0xb3c123['save'](),_0x3419af[a108_0x5c52('0x5')]['send']({'embed':{'color':tesseract_1['Constants'][a108_0x5c52('0x19')][a108_0x5c52('0x25')],'description':this['client'][a108_0x5c52('0x26')][a108_0x5c52('0x2')](_0x3419af[a108_0x5c52('0xe')][a108_0x5c52('0x1d')][a108_0x5c52('0x27')],a108_0x5c52('0x28'),'claim',_0x3419af[a108_0x5c52('0x14')]['tag'])+'\x0a\x0a'+_0x567ca9,'footer':{'text':_0x3419af['member'][a108_0x5c52('0x1a')]?this[a108_0x5c52('0x12')][a108_0x5c52('0x26')][a108_0x5c52('0x2')](_0x3419af[a108_0x5c52('0xe')]['document'][a108_0x5c52('0x27')],a108_0x5c52('0x28'),a108_0x5c52('0x20')):''}}})[a108_0x5c52('0x21')](()=>{});};}};