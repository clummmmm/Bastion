const a60_0x4e35=['BASTION_ERROR_TYPE','slowmode','guild','channels\x20--create\x20NAME\x20--limit\x201-99\x20--\x20REASON','delete','../../utils/numbers','client','locale','name','channels','info','cache','toLowerCase','catch','type','MANAGE_CHANNELS','create','limit','premiumTier','channels\x20--delete\x20--\x20REASON','author','getString','channels\x20--create\x20NAME\x20--slowmode\x20--\x20REASON','channels\x20--create\x20NAME\x20--nsfw\x20--\x20REASON','text','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','channel','COLORS','tag','textChannelRename','../../utils/errors','language','nsfw','It\x20allows\x20you\x20create,\x20delete\x20and\x20update\x20channels\x20in\x20the\x20server.','Constants','@bastion/tesseract','channels\x20--create\x20NAME\x20--category\x20ID\x20--\x20REASON','channels\x20--rename\x20NAME\x20--\x20REASON','topic','document','edit','channels\x20--create\x20NAME\x20--\x20REASON','test','category','apply','rename','ChannelCreate','default','clamp','send','INVALID_COMMAND_SYNTAX','includes','join','exports','return\x20/\x22\x20+\x20this\x20+\x20\x22/','channels\x20--create\x20NAME\x20--topic\x20TOPIC\x20--\x20REASON','has','GREEN','../../utils/confirmation','length','channelDeleteQuestion'];(function(_0x56cae3,_0x4e3520){const _0x45e3d1=function(_0x245c75){while(--_0x245c75){_0x56cae3['push'](_0x56cae3['shift']());}};const _0xc81ace=function(){const _0x3c4159={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xa329f9,_0x56bcf8,_0x33960b,_0x2cf9a8){_0x2cf9a8=_0x2cf9a8||{};let _0x18a3e9=_0x56bcf8+'='+_0x33960b;let _0x3269ac=0x0;for(let _0x2bcf02=0x0,_0x392dd4=_0xa329f9['length'];_0x2bcf02<_0x392dd4;_0x2bcf02++){const _0x286828=_0xa329f9[_0x2bcf02];_0x18a3e9+=';\x20'+_0x286828;const _0x56ce6a=_0xa329f9[_0x286828];_0xa329f9['push'](_0x56ce6a);_0x392dd4=_0xa329f9['length'];if(_0x56ce6a!==!![]){_0x18a3e9+='='+_0x56ce6a;}}_0x2cf9a8['cookie']=_0x18a3e9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x82c08f,_0x291125){_0x82c08f=_0x82c08f||function(_0x35bb1f){return _0x35bb1f;};const _0x1b270d=_0x82c08f(new RegExp('(?:^|;\x20)'+_0x291125['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x53d562=function(_0x31e5d8,_0x3a5244){_0x31e5d8(++_0x3a5244);};_0x53d562(_0x45e3d1,_0x4e3520);return _0x1b270d?decodeURIComponent(_0x1b270d[0x1]):undefined;}};const _0xf885e3=function(){const _0x34361e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x34361e['test'](_0x3c4159['removeCookie']['toString']());};_0x3c4159['updateCookie']=_0xf885e3;let _0x8f37c3='';const _0x5699aa=_0x3c4159['updateCookie']();if(!_0x5699aa){_0x3c4159['setCookie'](['*'],'counter',0x1);}else if(_0x5699aa){_0x8f37c3=_0x3c4159['getCookie'](null,'counter');}else{_0x3c4159['removeCookie']();}};_0xc81ace();}(a60_0x4e35,0x1d0));const a60_0x45e3=function(_0x56cae3,_0x4e3520){_0x56cae3=_0x56cae3-0x0;let _0x45e3d1=a60_0x4e35[_0x56cae3];return _0x45e3d1;};const a60_0x3c4159=function(){let _0x2c4f4c=!![];return function(_0x2f5527,_0xd9ff62){const _0x29fbfb=_0x2c4f4c?function(){if(_0xd9ff62){const _0x2d61bf=_0xd9ff62[a60_0x45e3('0x7')](_0x2f5527,arguments);_0xd9ff62=null;return _0x2d61bf;}}:function(){};_0x2c4f4c=![];return _0x29fbfb;};}();const a60_0x245c75=a60_0x3c4159(this,function(){const _0x287ed5=function(){const _0x4d8df5=_0x287ed5['constructor'](a60_0x45e3('0x11'))()['compile'](a60_0x45e3('0x31'));return!_0x4d8df5[a60_0x45e3('0x5')](a60_0x245c75);};return _0x287ed5();});a60_0x245c75();'use strict';const tesseract_1=require(a60_0x45e3('0x3b'));const confirmation_1=require(a60_0x45e3('0x15'));const errors=require(a60_0x45e3('0x36'));const numbers=require(a60_0x45e3('0x1d'));module[a60_0x45e3('0x10')]=class ChannelsCommand extends tesseract_1['Command']{constructor(){super(a60_0x45e3('0x21'),{'description':a60_0x45e3('0x39'),'triggers':[],'arguments':{'array':[a60_0x45e3('0x28'),'rename',a60_0x45e3('0x1')],'boolean':[a60_0x45e3('0x1c'),a60_0x45e3('0x38'),a60_0x45e3('0x19')],'number':[a60_0x45e3('0x29')],'string':[a60_0x45e3('0x6'),'create',a60_0x45e3('0x8'),'topic'],'coerce':{'type':_0x500591=>['category','text','voice'][a60_0x45e3('0xe')](_0x500591[a60_0x45e3('0x24')]())?_0x500591:a60_0x45e3('0x30'),'limit':_0x5c9556=>numbers[a60_0x45e3('0xb')](_0x5c9556,0x1,0x63)}},'scope':a60_0x45e3('0x1a'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a60_0x45e3('0x27')],'userPermissions':[a60_0x45e3('0x27')],'syntax':[a60_0x45e3('0x4'),'channels\x20--create\x20NAME\x20--type\x20TYPE\x20--\x20REASON',a60_0x45e3('0x3c'),a60_0x45e3('0x12'),a60_0x45e3('0x1b'),a60_0x45e3('0x2e'),a60_0x45e3('0x2f'),a60_0x45e3('0x2b'),a60_0x45e3('0x0')]});this['exec']=async(_0x2cc18e,_0x5e3797)=>{const _0x3ca5ac=_0x5e3797['_'][a60_0x45e3('0xf')]('\x20')||'-';if(_0x5e3797[a60_0x45e3('0x28')]&&_0x5e3797[a60_0x45e3('0x28')][a60_0x45e3('0x16')]){const _0x715804=_0x5e3797[a60_0x45e3('0x28')]['join']('\x20');const _0x2add6e=await _0x2cc18e['guild'][a60_0x45e3('0x21')][a60_0x45e3('0x28')](_0x715804,{'type':_0x5e3797[a60_0x45e3('0x26')],'bitrate':_0x2cc18e['guild'][a60_0x45e3('0x2a')]*0x1f400||0x17700,'nsfw':_0x5e3797['nsfw'],'reason':_0x3ca5ac,'topic':_0x5e3797[a60_0x45e3('0x1')]&&_0x5e3797[a60_0x45e3('0x1')][a60_0x45e3('0x16')]?_0x5e3797['topic'][a60_0x45e3('0xf')]('\x20'):'','userLimit':_0x5e3797['limit']?_0x5e3797[a60_0x45e3('0x29')]:0x0,'rateLimitPerUser':_0x5e3797[a60_0x45e3('0x19')]?0x5:0x0,'parent':_0x2cc18e[a60_0x45e3('0x1a')]['channels'][a60_0x45e3('0x23')][a60_0x45e3('0x13')](_0x5e3797[a60_0x45e3('0x6')])?_0x5e3797[a60_0x45e3('0x6')]:_0x2cc18e[a60_0x45e3('0x32')]['parent']});return await _0x2cc18e[a60_0x45e3('0x32')][a60_0x45e3('0xc')]({'embed':{'color':tesseract_1[a60_0x45e3('0x3a')][a60_0x45e3('0x33')][a60_0x45e3('0x14')],'description':this['client'][a60_0x45e3('0x1f')]['getString'](_0x2cc18e[a60_0x45e3('0x1a')][a60_0x45e3('0x2')][a60_0x45e3('0x37')],a60_0x45e3('0x22'),_0x2add6e['type']+a60_0x45e3('0x9'),_0x2cc18e[a60_0x45e3('0x2c')][a60_0x45e3('0x34')],_0x2add6e[a60_0x45e3('0x20')],_0x3ca5ac)}})[a60_0x45e3('0x25')](()=>{});}if(_0x5e3797[a60_0x45e3('0x1c')]){const _0x5c6a9f=await confirmation_1[a60_0x45e3('0xa')](_0x2cc18e,this['client']['locale'][a60_0x45e3('0x2d')](_0x2cc18e[a60_0x45e3('0x1a')][a60_0x45e3('0x2')]['language'],'info',a60_0x45e3('0x17'),_0x2cc18e[a60_0x45e3('0x2c')][a60_0x45e3('0x34')],_0x2cc18e[a60_0x45e3('0x32')][a60_0x45e3('0x20')]));if(_0x5c6a9f){await _0x2cc18e[a60_0x45e3('0x32')][a60_0x45e3('0x1c')](_0x3ca5ac);}return!![];}if(_0x5e3797[a60_0x45e3('0x8')]&&_0x5e3797['rename'][a60_0x45e3('0x16')]){const _0x4e7236=await _0x2cc18e[a60_0x45e3('0x32')][a60_0x45e3('0x3')]({'name':_0x5e3797[a60_0x45e3('0x8')][a60_0x45e3('0xf')]('\x20')});return await _0x2cc18e['channel'][a60_0x45e3('0xc')]({'embed':{'color':tesseract_1[a60_0x45e3('0x3a')][a60_0x45e3('0x33')][a60_0x45e3('0x14')],'description':this[a60_0x45e3('0x1e')][a60_0x45e3('0x1f')][a60_0x45e3('0x2d')](_0x2cc18e[a60_0x45e3('0x1a')][a60_0x45e3('0x2')]['language'],a60_0x45e3('0x22'),a60_0x45e3('0x35'),_0x2cc18e[a60_0x45e3('0x2c')][a60_0x45e3('0x34')],_0x4e7236[a60_0x45e3('0x20')],_0x3ca5ac)}})[a60_0x45e3('0x25')](()=>{});}throw new errors['DiscordError'](errors[a60_0x45e3('0x18')][a60_0x45e3('0xd')],this['name']);};}};