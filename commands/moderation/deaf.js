const a75_0x3ede=['locale','errors','name','@bastion/tesseract','compile','unauthorized','author','apply','user','DEAFEN_MEMBERS','DiscordError','Command','setDeaf','memberUnsetDeaf','return\x20/\x22\x20+\x20this\x20+\x20\x22/','client','ORANGE','It\x20allows\x20you\x20to\x20deafen\x20(and\x20undeafen)\x20users\x20in\x20the\x20server.\x20Deafened\x20users\x20can\x27t\x20listen\x20anything\x20in\x20the\x20server\x27s\x20voice\x20channels.','deaf','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Constants','send','set','resolveGuildMember','constructor','tag','exports','voice','../../utils/errors','deaf\x20--user\x20USER_ID\x20--\x20REASON','document','Reason','channel','ownerID','guild','member','info','test','resolver','RED','getString','exec','join','language'];(function(_0x5ad097,_0x3edec9){const _0x24a28b=function(_0x3518b9){while(--_0x3518b9){_0x5ad097['push'](_0x5ad097['shift']());}};const _0x1e57b1=function(){const _0xacbd77={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x44e215,_0x1d69cc,_0x3e58c6,_0x186962){_0x186962=_0x186962||{};let _0xfab86b=_0x1d69cc+'='+_0x3e58c6;let _0x339311=0x0;for(let _0x298c41=0x0,_0x2f8b4a=_0x44e215['length'];_0x298c41<_0x2f8b4a;_0x298c41++){const _0x2a0ba2=_0x44e215[_0x298c41];_0xfab86b+=';\x20'+_0x2a0ba2;const _0x189e38=_0x44e215[_0x2a0ba2];_0x44e215['push'](_0x189e38);_0x2f8b4a=_0x44e215['length'];if(_0x189e38!==!![]){_0xfab86b+='='+_0x189e38;}}_0x186962['cookie']=_0xfab86b;},'removeCookie':function(){return'dev';},'getCookie':function(_0xfe2691,_0xbfdc65){_0xfe2691=_0xfe2691||function(_0x724eea){return _0x724eea;};const _0x2ead7f=_0xfe2691(new RegExp('(?:^|;\x20)'+_0xbfdc65['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x10fc00=function(_0x283f21,_0x5bb461){_0x283f21(++_0x5bb461);};_0x10fc00(_0x24a28b,_0x3edec9);return _0x2ead7f?decodeURIComponent(_0x2ead7f[0x1]):undefined;}};const _0xfdbcab=function(){const _0x2a163c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2a163c['test'](_0xacbd77['removeCookie']['toString']());};_0xacbd77['updateCookie']=_0xfdbcab;let _0x3d6969='';const _0x2c2f7b=_0xacbd77['updateCookie']();if(!_0x2c2f7b){_0xacbd77['setCookie'](['*'],'counter',0x1);}else if(_0x2c2f7b){_0x3d6969=_0xacbd77['getCookie'](null,'counter');}else{_0xacbd77['removeCookie']();}};_0x1e57b1();}(a75_0x3ede,0x1e1));const a75_0x24a2=function(_0x5ad097,_0x3edec9){_0x5ad097=_0x5ad097-0x0;let _0x24a28b=a75_0x3ede[_0x5ad097];return _0x24a28b;};const a75_0xacbd77=function(){let _0x43fb69=!![];return function(_0x392c5e,_0x67f094){const _0x33232b=_0x43fb69?function(){if(_0x67f094){const _0x2ecd3e=_0x67f094[a75_0x24a2('0xa')](_0x392c5e,arguments);_0x67f094=null;return _0x2ecd3e;}}:function(){};_0x43fb69=![];return _0x33232b;};}();const a75_0x3518b9=a75_0xacbd77(this,function(){const _0x72f095=function(){const _0x1594e7=_0x72f095[a75_0x24a2('0x1b')](a75_0x24a2('0x11'))()[a75_0x24a2('0x7')](a75_0x24a2('0x16'));return!_0x1594e7[a75_0x24a2('0x28')](a75_0x3518b9);};return _0x72f095();});a75_0x3518b9();'use strict';const tesseract_1=require(a75_0x24a2('0x6'));const errors=require(a75_0x24a2('0x1f'));module[a75_0x24a2('0x1d')]=class Deaf extends tesseract_1[a75_0x24a2('0xe')]{constructor(){super(a75_0x24a2('0x15'),{'description':a75_0x24a2('0x14'),'triggers':[],'arguments':{'configuration':{'negation-prefix':'un'},'alias':{'user':'u'},'default':{'set':!![]},'boolean':[a75_0x24a2('0x19')],'string':[a75_0x24a2('0xb')]},'scope':a75_0x24a2('0x25'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a75_0x24a2('0xc')],'userPermissions':[a75_0x24a2('0xc')],'syntax':[a75_0x24a2('0x20'),'deaf\x20--unset\x20--user\x20USER_ID\x20--\x20REASON']});this[a75_0x24a2('0x0')]=async(_0x46a6fc,_0x20a31c)=>{const _0x22c8eb=this[a75_0x24a2('0x12')][a75_0x24a2('0x29')][a75_0x24a2('0x1a')](_0x46a6fc[a75_0x24a2('0x25')],_0x20a31c['user']);if(!_0x22c8eb)throw new errors[(a75_0x24a2('0xd'))](errors['BASTION_ERROR_TYPE']['INVALID_COMMAND_SYNTAX'],this[a75_0x24a2('0x5')]);if(_0x46a6fc[a75_0x24a2('0x9')]['id']!==_0x46a6fc['guild'][a75_0x24a2('0x24')]&&!_0x46a6fc[a75_0x24a2('0x26')]['canManage'](_0x22c8eb)){return await _0x46a6fc[a75_0x24a2('0x23')][a75_0x24a2('0x18')]({'embed':{'color':tesseract_1[a75_0x24a2('0x17')]['COLORS'][a75_0x24a2('0x2a')],'title':this[a75_0x24a2('0x12')]['locale'][a75_0x24a2('0x2b')](_0x46a6fc['guild'][a75_0x24a2('0x21')]['language'],a75_0x24a2('0x4'),a75_0x24a2('0x8')),'description':this['client'][a75_0x24a2('0x3')]['getString'](_0x46a6fc[a75_0x24a2('0x25')][a75_0x24a2('0x21')]['language'],a75_0x24a2('0x4'),'rolePosition',_0x46a6fc['author'][a75_0x24a2('0x1c')],_0x22c8eb[a75_0x24a2('0xb')][a75_0x24a2('0x1c')])}})['catch'](()=>{});}const _0x8f9783=_0x20a31c['_'][a75_0x24a2('0x1')]('\x20')||'-';await _0x22c8eb[a75_0x24a2('0x1e')][a75_0x24a2('0xf')](!!_0x20a31c[a75_0x24a2('0x19')],_0x8f9783);await _0x46a6fc[a75_0x24a2('0x23')][a75_0x24a2('0x18')]({'embed':{'color':tesseract_1[a75_0x24a2('0x17')]['COLORS'][a75_0x24a2('0x13')],'description':_0x20a31c[a75_0x24a2('0x19')]?this[a75_0x24a2('0x12')][a75_0x24a2('0x3')][a75_0x24a2('0x2b')](_0x46a6fc[a75_0x24a2('0x25')][a75_0x24a2('0x21')][a75_0x24a2('0x2')],a75_0x24a2('0x27'),'memberSetDeaf',_0x46a6fc[a75_0x24a2('0x9')]['tag'],_0x22c8eb[a75_0x24a2('0xb')][a75_0x24a2('0x1c')]):this[a75_0x24a2('0x12')][a75_0x24a2('0x3')][a75_0x24a2('0x2b')](_0x46a6fc[a75_0x24a2('0x25')]['document'][a75_0x24a2('0x2')],a75_0x24a2('0x27'),a75_0x24a2('0x10'),_0x46a6fc[a75_0x24a2('0x9')][a75_0x24a2('0x1c')],_0x22c8eb[a75_0x24a2('0xb')][a75_0x24a2('0x1c')]),'fields':[{'name':a75_0x24a2('0x22'),'value':_0x8f9783}],'footer':{'text':_0x22c8eb['id']}}})['catch'](()=>{});};}};