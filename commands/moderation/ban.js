const a74_0xb208=['test','user','days','catch','COLORS','canManage','Page\x20','Users\x20banned\x20in\x20','member','guildBanAdd','values','errors','constructor','name','DARK_BUT_NOT_BLACK','Constants','\x20of\x20','Command','soft','BAN_MEMBERS','ban','../../utils/errors','ban\x20--list','resolver','../../utils/pagination','RED','Reason','fetchBans','ban\x20--user\x20USER_ID\x20--soft\x20--\x20REASON','exec','memberSoftBan','Banned\x20Users','INVALID_COMMAND_SYNTAX','client','page','\x20/\x20','items','ban\x20--user\x20USER_ID\x20--\x20REASON','join','ban\x20--user\x20USER_ID\x20--days\x20NUMBER\x20--\x20REASON','get','info','exports','ORANGE','It\x20allows\x20you\x20to\x20ban\x20(or\x20soft\x20ban)\x20users\x20from\x20the\x20server,\x20and\x20optionally\x20clear\x20their\x20messages\x20from\x20the\x20specified\x20number\x20of\x20days.\x20It\x20also\x20allows\x20you\x20to\x20list\x20all\x20the\x20users\x20banned\x20in\x20the\x20server.','map','guild','locale','resolveUser','cache','language','author','send','reason','tag','list','members','ban\x20--list\x20--page\x203','channel','getString','document','return\x20/\x22\x20+\x20this\x20+\x20\x22/','DiscordError','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}'];(function(_0x464c3e,_0xb20878){const _0x4f6d39=function(_0x4d07e8){while(--_0x4d07e8){_0x464c3e['push'](_0x464c3e['shift']());}},_0x39dfd4=function(){const _0x541b8e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x325da1,_0x39332a,_0x37ccfc,_0x480d7b){_0x480d7b=_0x480d7b||{};let _0x52d18a=_0x39332a+'='+_0x37ccfc,_0x43b0eb=0x0;for(let _0x1ec68b=0x0,_0x5b6df2=_0x325da1['length'];_0x1ec68b<_0x5b6df2;_0x1ec68b++){const _0x24a6f4=_0x325da1[_0x1ec68b];_0x52d18a+=';\x20'+_0x24a6f4;const _0x4729e1=_0x325da1[_0x24a6f4];_0x325da1['push'](_0x4729e1),_0x5b6df2=_0x325da1['length'],_0x4729e1!==!![]&&(_0x52d18a+='='+_0x4729e1);}_0x480d7b['cookie']=_0x52d18a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4d8617,_0x3870f8){_0x4d8617=_0x4d8617||function(_0x3a49b1){return _0x3a49b1;};const _0x35e4bc=_0x4d8617(new RegExp('(?:^|;\x20)'+_0x3870f8['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x12ddd2=function(_0x1910f3,_0x151bff){_0x1910f3(++_0x151bff);};return _0x12ddd2(_0x4f6d39,_0xb20878),_0x35e4bc?decodeURIComponent(_0x35e4bc[0x1]):undefined;}},_0x103d2c=function(){const _0x404e3d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x404e3d['test'](_0x541b8e['removeCookie']['toString']());};_0x541b8e['updateCookie']=_0x103d2c;let _0x355454='';const _0x11228e=_0x541b8e['updateCookie']();if(!_0x11228e)_0x541b8e['setCookie'](['*'],'counter',0x1);else _0x11228e?_0x355454=_0x541b8e['getCookie'](null,'counter'):_0x541b8e['removeCookie']();};_0x39dfd4();}(a74_0xb208,0x18b));const a74_0x4f6d=function(_0x464c3e,_0xb20878){_0x464c3e=_0x464c3e-0x0;let _0x4f6d39=a74_0xb208[_0x464c3e];return _0x4f6d39;};const a74_0x37ccfc=function(){let _0x597187=!![];return function(_0x1fdf1b,_0x368a99){const _0x5eb609=_0x597187?function(){if(_0x368a99){const _0x5428c4=_0x368a99['apply'](_0x1fdf1b,arguments);return _0x368a99=null,_0x5428c4;}}:function(){};return _0x597187=![],_0x5eb609;};}(),a74_0x39332a=a74_0x37ccfc(this,function(){const _0x57cfd0=function(){const _0x3d9f5b=_0x57cfd0[a74_0x4f6d('0x1')](a74_0x4f6d('0x32'))()['constructor'](a74_0x4f6d('0x34'));return!_0x3d9f5b[a74_0x4f6d('0x35')](a74_0x39332a);};return _0x57cfd0();});a74_0x39332a();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require(a74_0x4f6d('0xa')),pagination=require(a74_0x4f6d('0xd'));module[a74_0x4f6d('0x1f')]=class Ban extends tesseract_1[a74_0x4f6d('0x6')]{constructor(){super(a74_0x4f6d('0x9'),{'description':a74_0x4f6d('0x21'),'triggers':[],'arguments':{'alias':{'days':'d','list':'l','page':'p','soft':'s','user':'u'},'boolean':[a74_0x4f6d('0x2c'),a74_0x4f6d('0x7')],'default':{'days':0x0,'page':0x1},'number':[a74_0x4f6d('0x37'),'page'],'string':[a74_0x4f6d('0x36')]},'scope':a74_0x4f6d('0x23'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a74_0x4f6d('0x8')],'userPermissions':[a74_0x4f6d('0x8')],'syntax':[a74_0x4f6d('0xb'),a74_0x4f6d('0x2e'),a74_0x4f6d('0x1a'),a74_0x4f6d('0x11'),a74_0x4f6d('0x1c')]}),this[a74_0x4f6d('0x12')]=async(_0x14cf57,_0x4fa2fc)=>{if(_0x4fa2fc[a74_0x4f6d('0x2c')]){const _0x1e09ca=await _0x14cf57[a74_0x4f6d('0x23')][a74_0x4f6d('0x10')](),_0x398e8d=pagination['paginate']([..._0x1e09ca[a74_0x4f6d('0x3f')]()],_0x4fa2fc[a74_0x4f6d('0x17')]);return await _0x14cf57[a74_0x4f6d('0x2f')][a74_0x4f6d('0x29')]({'embed':{'color':tesseract_1['Constants'][a74_0x4f6d('0x39')][a74_0x4f6d('0x20')],'title':a74_0x4f6d('0x14'),'description':a74_0x4f6d('0x3c')+_0x14cf57[a74_0x4f6d('0x23')][a74_0x4f6d('0x2')],'fields':_0x398e8d[a74_0x4f6d('0x19')][a74_0x4f6d('0x22')](_0x2a0ec5=>({'name':_0x2a0ec5[a74_0x4f6d('0x36')][a74_0x4f6d('0x2b')]+a74_0x4f6d('0x18')+_0x2a0ec5[a74_0x4f6d('0x36')]['id'],'value':_0x2a0ec5[a74_0x4f6d('0x2a')]||'-'})),'footer':{'text':a74_0x4f6d('0x3b')+_0x398e8d[a74_0x4f6d('0x17')]+a74_0x4f6d('0x5')+_0x398e8d['pages']}}});}const _0x593554=this[a74_0x4f6d('0x16')][a74_0x4f6d('0xc')][a74_0x4f6d('0x25')](_0x4fa2fc[a74_0x4f6d('0x36')]);if(!_0x593554)throw new errors[(a74_0x4f6d('0x33'))](errors['BASTION_ERROR_TYPE'][a74_0x4f6d('0x15')],this[a74_0x4f6d('0x2')]);if(_0x14cf57[a74_0x4f6d('0x28')]['id']!==_0x14cf57[a74_0x4f6d('0x23')]['ownerID']&&_0x14cf57[a74_0x4f6d('0x23')]['members'][a74_0x4f6d('0x26')]['has'](_0x593554['id'])&&!_0x14cf57[a74_0x4f6d('0x3d')][a74_0x4f6d('0x3a')](_0x14cf57['guild'][a74_0x4f6d('0x2d')][a74_0x4f6d('0x26')][a74_0x4f6d('0x1d')](_0x593554['id'])))return await _0x14cf57[a74_0x4f6d('0x2f')][a74_0x4f6d('0x29')]({'embed':{'color':tesseract_1['Constants'][a74_0x4f6d('0x39')][a74_0x4f6d('0xe')],'title':this[a74_0x4f6d('0x16')]['locale'][a74_0x4f6d('0x30')](_0x14cf57['guild'][a74_0x4f6d('0x31')][a74_0x4f6d('0x27')],'errors','unauthorized'),'description':this[a74_0x4f6d('0x16')][a74_0x4f6d('0x24')][a74_0x4f6d('0x30')](_0x14cf57[a74_0x4f6d('0x23')][a74_0x4f6d('0x31')]['language'],a74_0x4f6d('0x0'),'rolePosition',_0x14cf57[a74_0x4f6d('0x28')][a74_0x4f6d('0x2b')],_0x593554[a74_0x4f6d('0x2b')])}})[a74_0x4f6d('0x38')](()=>{});const _0x5c397b=_0x4fa2fc['_'][a74_0x4f6d('0x1b')]('\x20')||'-';await _0x14cf57[a74_0x4f6d('0x23')][a74_0x4f6d('0x2d')][a74_0x4f6d('0x9')](_0x593554,{'days':_0x4fa2fc[a74_0x4f6d('0x37')],'reason':_0x5c397b}),_0x4fa2fc[a74_0x4f6d('0x7')]&&await _0x14cf57[a74_0x4f6d('0x23')]['members']['unban'](_0x593554,_0x5c397b),await _0x14cf57[a74_0x4f6d('0x2f')][a74_0x4f6d('0x29')]({'embed':{'color':tesseract_1[a74_0x4f6d('0x4')]['COLORS'][a74_0x4f6d('0x3')],'description':_0x4fa2fc[a74_0x4f6d('0x7')]?this[a74_0x4f6d('0x16')][a74_0x4f6d('0x24')]['getString'](_0x14cf57[a74_0x4f6d('0x23')][a74_0x4f6d('0x31')]['language'],a74_0x4f6d('0x1e'),a74_0x4f6d('0x13'),_0x14cf57[a74_0x4f6d('0x28')][a74_0x4f6d('0x2b')],_0x593554['tag']):this[a74_0x4f6d('0x16')][a74_0x4f6d('0x24')][a74_0x4f6d('0x30')](_0x14cf57[a74_0x4f6d('0x23')][a74_0x4f6d('0x31')][a74_0x4f6d('0x27')],a74_0x4f6d('0x1e'),a74_0x4f6d('0x3e'),_0x14cf57[a74_0x4f6d('0x28')][a74_0x4f6d('0x2b')],_0x593554['tag']),'fields':[{'name':a74_0x4f6d('0xf'),'value':_0x5c397b}],'footer':{'text':_0x593554['id']}}})[a74_0x4f6d('0x38')](()=>{});};}};