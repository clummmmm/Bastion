const a119_0xe359=['name','/urbandictionary/definitions/','exports','permalink','Downvotes','../../utils/omnic','Powered\x20by\x20Urban\x20Dictionary','written_on','Command','length','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Examples','send','join','urbanDictionary\x20WORD','thumbs_up','return\x20/\x22\x20+\x20this\x20+\x20\x22/','BASTION_ERROR_TYPE','IRIS','COLORS','test','list','urbanDictionary','exec','apply','../../utils/errors','Constants','compile','constructor','Urban\x20Dictionary','guild'];(function(_0x32b35c,_0xe359f9){const _0x4fd2d3=function(_0x4a310d){while(--_0x4a310d){_0x32b35c['push'](_0x32b35c['shift']());}};const _0x23afc1=function(){const _0xd231ac={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x573d17,_0x37c784,_0x1b1149,_0x39a3bf){_0x39a3bf=_0x39a3bf||{};let _0x52852c=_0x37c784+'='+_0x1b1149;let _0x2d1970=0x0;for(let _0x41878c=0x0,_0x444363=_0x573d17['length'];_0x41878c<_0x444363;_0x41878c++){const _0x25f798=_0x573d17[_0x41878c];_0x52852c+=';\x20'+_0x25f798;const _0xcd5bfb=_0x573d17[_0x25f798];_0x573d17['push'](_0xcd5bfb);_0x444363=_0x573d17['length'];if(_0xcd5bfb!==!![]){_0x52852c+='='+_0xcd5bfb;}}_0x39a3bf['cookie']=_0x52852c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x49893a,_0x1e617c){_0x49893a=_0x49893a||function(_0x1565fe){return _0x1565fe;};const _0x35f351=_0x49893a(new RegExp('(?:^|;\x20)'+_0x1e617c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3ac6b8=function(_0x59dd76,_0x3d9fec){_0x59dd76(++_0x3d9fec);};_0x3ac6b8(_0x4fd2d3,_0xe359f9);return _0x35f351?decodeURIComponent(_0x35f351[0x1]):undefined;}};const _0xee0496=function(){const _0x519327=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x519327['test'](_0xd231ac['removeCookie']['toString']());};_0xd231ac['updateCookie']=_0xee0496;let _0x9e8bba='';const _0x14557d=_0xd231ac['updateCookie']();if(!_0x14557d){_0xd231ac['setCookie'](['*'],'counter',0x1);}else if(_0x14557d){_0x9e8bba=_0xd231ac['getCookie'](null,'counter');}else{_0xd231ac['removeCookie']();}};_0x23afc1();}(a119_0xe359,0x139));const a119_0x4fd2=function(_0x32b35c,_0xe359f9){_0x32b35c=_0x32b35c-0x0;let _0x4fd2d3=a119_0xe359[_0x32b35c];return _0x4fd2d3;};const a119_0xd231ac=function(){let _0x3a750b=!![];return function(_0x26d89d,_0x5052ed){const _0x2c8838=_0x3a750b?function(){if(_0x5052ed){const _0x4531d1=_0x5052ed[a119_0x4fd2('0x15')](_0x26d89d,arguments);_0x5052ed=null;return _0x4531d1;}}:function(){};_0x3a750b=![];return _0x2c8838;};}();const a119_0x4a310d=a119_0xd231ac(this,function(){const _0x5b079b=function(){const _0x550f66=_0x5b079b[a119_0x4fd2('0x19')](a119_0x4fd2('0xd'))()[a119_0x4fd2('0x18')](a119_0x4fd2('0x7'));return!_0x550f66[a119_0x4fd2('0x11')](a119_0x4a310d);};return _0x5b079b();});a119_0x4a310d();'use strict';const tesseract_1=require('@bastion/tesseract');const errors=require(a119_0x4fd2('0x16'));const omnic=require(a119_0x4fd2('0x2'));module[a119_0x4fd2('0x1e')]=class UrbanDictionaryCommand extends tesseract_1[a119_0x4fd2('0x5')]{constructor(){super(a119_0x4fd2('0x13'),{'description':'It\x20allows\x20you\x20to\x20search\x20the\x20Urban\x20Dictionary\x20for\x20definitions\x20of\x20the\x20specified\x20word.','triggers':['ud'],'arguments':{},'scope':a119_0x4fd2('0x1b'),'owner':![],'nsfw':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a119_0x4fd2('0xb')]});this[a119_0x4fd2('0x14')]=async(_0x3f2670,_0x50d4bf)=>{if(!_0x50d4bf['_'][a119_0x4fd2('0x6')])throw new errors['DiscordError'](errors[a119_0x4fd2('0xe')]['INVALID_COMMAND_SYNTAX'],this[a119_0x4fd2('0x1c')]);const _0x1ab73b=_0x50d4bf['_'][a119_0x4fd2('0xa')]('\x20');const _0x435417=await omnic['makeRequest'](a119_0x4fd2('0x1d')+encodeURIComponent(_0x1ab73b));const _0x3b811c=await _0x435417['json']();if(!_0x3b811c||!_0x3b811c[a119_0x4fd2('0x12')]||!_0x3b811c[a119_0x4fd2('0x12')][a119_0x4fd2('0x6')])throw new Error('NO_DEFINITIONS_FOUND');await _0x3f2670['channel'][a119_0x4fd2('0x9')]({'embed':{'color':tesseract_1[a119_0x4fd2('0x17')][a119_0x4fd2('0x10')][a119_0x4fd2('0xf')],'author':{'name':a119_0x4fd2('0x1a'),'url':'https://urbandictionary.com'},'title':_0x3b811c[a119_0x4fd2('0x12')][0x0]['word'],'url':_0x3b811c[a119_0x4fd2('0x12')][0x0][a119_0x4fd2('0x0')],'description':_0x3b811c[a119_0x4fd2('0x12')][0x0]['definition'],'fields':[{'name':a119_0x4fd2('0x8'),'value':_0x3b811c[a119_0x4fd2('0x12')][0x0]['example']},{'name':'Upvotes','value':_0x3b811c[a119_0x4fd2('0x12')][0x0][a119_0x4fd2('0xc')],'inline':!![]},{'name':a119_0x4fd2('0x1'),'value':_0x3b811c['list'][0x0]['thumbs_down'],'inline':!![]}],'footer':{'text':a119_0x4fd2('0x3')},'timestamp':new Date(_0x3b811c['list'][0x0][a119_0x4fd2('0x4')])}});};}};