const a117_0x1c6b=['pokemon\x20NAME','Mega','Evolution\x20Line','guild','COLORS','https://pokeapi.glitch.me/v1/pokemon/','Discovered\x20in\x20generation\x20','../../utils/errors','legendary','starter','mythical','height','Normal:\x20','Pokémon','gender','apply','Legendary\x20','channel','send','Weight','pokemon','Command','exec','name','length','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Powered\x20by\x20PokéDex\x20API','hidden','Ultra\x20Beast','default','Description','@bastion/tesseract','error','IRIS','\x20->\x20','Mythical\x20','Constants','evolutionLine','message','It\x20allows\x20you\x20to\x20search\x20for\x20information\x20on\x20the\x20specified\x20Pokémon.','Species','join','ultraBeast','eggGroups','abilities','mega','node-fetch','exports','BASTION_ERROR_TYPE','types','constructor','normal','description','gen','test'];(function(_0x3d437f,_0x1c6b5d){const _0x25e309=function(_0x4fe84b){while(--_0x4fe84b){_0x3d437f['push'](_0x3d437f['shift']());}};const _0x54c351=function(){const _0x3ac511={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x56e7e5,_0x4e5d46,_0x2a1b64,_0x2f8bd2){_0x2f8bd2=_0x2f8bd2||{};let _0x3472a2=_0x4e5d46+'='+_0x2a1b64;let _0x222bb5=0x0;for(let _0x20c73c=0x0,_0x44aa88=_0x56e7e5['length'];_0x20c73c<_0x44aa88;_0x20c73c++){const _0x4f4b4e=_0x56e7e5[_0x20c73c];_0x3472a2+=';\x20'+_0x4f4b4e;const _0x25d3fd=_0x56e7e5[_0x4f4b4e];_0x56e7e5['push'](_0x25d3fd);_0x44aa88=_0x56e7e5['length'];if(_0x25d3fd!==!![]){_0x3472a2+='='+_0x25d3fd;}}_0x2f8bd2['cookie']=_0x3472a2;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2dfdae,_0x3cef3e){_0x2dfdae=_0x2dfdae||function(_0x379e07){return _0x379e07;};const _0x27ce43=_0x2dfdae(new RegExp('(?:^|;\x20)'+_0x3cef3e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x497b4c=function(_0x122864,_0x4a4105){_0x122864(++_0x4a4105);};_0x497b4c(_0x25e309,_0x1c6b5d);return _0x27ce43?decodeURIComponent(_0x27ce43[0x1]):undefined;}};const _0x56d302=function(){const _0x2c2fad=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2c2fad['test'](_0x3ac511['removeCookie']['toString']());};_0x3ac511['updateCookie']=_0x56d302;let _0x2d9da6='';const _0x32ce81=_0x3ac511['updateCookie']();if(!_0x32ce81){_0x3ac511['setCookie'](['*'],'counter',0x1);}else if(_0x32ce81){_0x2d9da6=_0x3ac511['getCookie'](null,'counter');}else{_0x3ac511['removeCookie']();}};_0x54c351();}(a117_0x1c6b,0x165));const a117_0x25e3=function(_0x3d437f,_0x1c6b5d){_0x3d437f=_0x3d437f-0x0;let _0x25e309=a117_0x1c6b[_0x3d437f];return _0x25e309;};const a117_0x3ac511=function(){let _0x564716=!![];return function(_0x36c9a4,_0xa76d0a){const _0x5ad8a9=_0x564716?function(){if(_0xa76d0a){const _0x28eab9=_0xa76d0a[a117_0x25e3('0x2b')](_0x36c9a4,arguments);_0xa76d0a=null;return _0x28eab9;}}:function(){};_0x564716=![];return _0x5ad8a9;};}();const a117_0x4fe84b=a117_0x3ac511(this,function(){const _0x4dfb1f=function(){const _0x25d6d2=_0x4dfb1f[a117_0x25e3('0x17')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile'](a117_0x25e3('0x35'));return!_0x25d6d2[a117_0x25e3('0x1b')](a117_0x4fe84b);};return _0x4dfb1f();});a117_0x4fe84b();'use strict';const tesseract_1=require(a117_0x25e3('0x4'));const node_fetch_1=require(a117_0x25e3('0x13'));const errors=require(a117_0x25e3('0x23'));module[a117_0x25e3('0x14')]=class PokemonCommand extends tesseract_1[a117_0x25e3('0x31')]{constructor(){super(a117_0x25e3('0x30'),{'description':a117_0x25e3('0xc'),'triggers':[],'arguments':{},'scope':a117_0x25e3('0x1f'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a117_0x25e3('0x1c'),'pokemon\x20NUMBER']});this[a117_0x25e3('0x32')]=async(_0x4ef430,_0x9f5d5b)=>{if(!_0x9f5d5b['_'][a117_0x25e3('0x34')])throw new errors['DiscordError'](errors[a117_0x25e3('0x15')]['INVALID_COMMAND_SYNTAX'],this[a117_0x25e3('0x33')]);const _0x498319=_0x9f5d5b['_'][a117_0x25e3('0xe')]('\x20');const _0x5c8f52=await node_fetch_1[a117_0x25e3('0x2')](a117_0x25e3('0x21')+encodeURIComponent(_0x498319));const _0x4ef09d=await _0x5c8f52['json']();if(_0x4ef09d[a117_0x25e3('0x5')])throw new Error(_0x4ef09d[a117_0x25e3('0xb')]);await _0x4ef430[a117_0x25e3('0x2d')][a117_0x25e3('0x2e')]({'embed':{'color':tesseract_1[a117_0x25e3('0x9')][a117_0x25e3('0x20')][a117_0x25e3('0x6')],'author':{'name':(_0x4ef09d[0x0][a117_0x25e3('0x26')]?a117_0x25e3('0x8'):'')+(_0x4ef09d[0x0][a117_0x25e3('0x24')]?a117_0x25e3('0x2c'):'')+(_0x4ef09d[0x0][a117_0x25e3('0x12')]?a117_0x25e3('0x1d'):'')+(_0x4ef09d[0x0][a117_0x25e3('0xf')]?a117_0x25e3('0x1'):'')+(_0x4ef09d[0x0][a117_0x25e3('0x25')]?'Starter\x20':'')+a117_0x25e3('0x29')},'title':_0x4ef09d[0x0]['name'],'description':a117_0x25e3('0x22')+_0x4ef09d[0x0][a117_0x25e3('0x1a')],'fields':[{'name':'Number','value':_0x4ef09d[0x0]['number'],'inline':!![]},{'name':a117_0x25e3('0xd'),'value':_0x4ef09d[0x0]['species'],'inline':!![]},{'name':'Types','value':_0x4ef09d[0x0][a117_0x25e3('0x16')][a117_0x25e3('0xe')]('\x0a'),'inline':!![]},{'name':'Abilities','value':a117_0x25e3('0x28')+(_0x4ef09d[0x0][a117_0x25e3('0x11')][a117_0x25e3('0x18')][a117_0x25e3('0xe')](',\x20')||'-')+'\x0aHidden:\x20'+(_0x4ef09d[0x0][a117_0x25e3('0x11')][a117_0x25e3('0x0')][a117_0x25e3('0xe')](',\x20')||'-'),'inline':!![]},{'name':'Egg\x20Groups','value':_0x4ef09d[0x0][a117_0x25e3('0x10')][a117_0x25e3('0xe')]('\x0a'),'inline':!![]},{'name':'Gender\x20Ratio','value':_0x4ef09d[0x0][a117_0x25e3('0x2a')][a117_0x25e3('0x34')]?_0x4ef09d[0x0]['gender'][0x0]+':'+_0x4ef09d[0x0][a117_0x25e3('0x2a')][0x1]:'Genderless','inline':!![]},{'name':'Height','value':_0x4ef09d[0x0][a117_0x25e3('0x27')],'inline':!![]},{'name':a117_0x25e3('0x2f'),'value':_0x4ef09d[0x0]['weight'],'inline':!![]},{'name':a117_0x25e3('0x1e'),'value':_0x4ef09d[0x0]['family'][a117_0x25e3('0xa')][a117_0x25e3('0xe')](a117_0x25e3('0x7'))},{'name':a117_0x25e3('0x3'),'value':_0x4ef09d[0x0][a117_0x25e3('0x19')]}],'thumbnail':{'url':_0x4ef09d[0x0]['sprite']},'footer':{'text':a117_0x25e3('0x36')}}});};}};