const a28_0x4e22=['client','DiscordError','BASTION_ERROR_TYPE','user','LIMITED_PREMIUM_MEMBERSHIP','Constants','guildPrefixUpdate','../../utils/constants','info','It\x20allows\x20you\x20set\x20custom\x20prefixes\x20for\x20Bastion\x20in\x20your\x20server.','constructor','errors','IRIS','MANAGE_GUILD','fetchPremiumTier','../../utils/errors','compile','locale','../../utils/omnic','join','tag','prefixes','test','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','language','LIMITS','document','PremiumTier','COLORS','prefix\x20--\x20PREFIX','guildPrefixes','Prefixes','return\x20/\x22\x20+\x20this\x20+\x20\x22/','PREFIXES','prefix','catch','send','premiumPrefix','channel','guild','apply','exec','GOLD','PREMIUM_MEMBERSHIP_REQUIRED','author','length','getString','isPublicBastion','PLATINUM'];(function(_0x4a133f,_0x4e2275){const _0x515a89=function(_0x18001e){while(--_0x18001e){_0x4a133f['push'](_0x4a133f['shift']());}};const _0x46a3e4=function(){const _0x59c29b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4207d7,_0x13e65b,_0x30973d,_0xc24bcb){_0xc24bcb=_0xc24bcb||{};let _0x4a17e5=_0x13e65b+'='+_0x30973d;let _0x3f0370=0x0;for(let _0x2d0777=0x0,_0x1ccd9d=_0x4207d7['length'];_0x2d0777<_0x1ccd9d;_0x2d0777++){const _0x55e4ff=_0x4207d7[_0x2d0777];_0x4a17e5+=';\x20'+_0x55e4ff;const _0x4b0ee1=_0x4207d7[_0x55e4ff];_0x4207d7['push'](_0x4b0ee1);_0x1ccd9d=_0x4207d7['length'];if(_0x4b0ee1!==!![]){_0x4a17e5+='='+_0x4b0ee1;}}_0xc24bcb['cookie']=_0x4a17e5;},'removeCookie':function(){return'dev';},'getCookie':function(_0x34465a,_0x2f0d6b){_0x34465a=_0x34465a||function(_0x5db663){return _0x5db663;};const _0x7267b8=_0x34465a(new RegExp('(?:^|;\x20)'+_0x2f0d6b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x27e4b0=function(_0x81fee4,_0xe2d1e8){_0x81fee4(++_0xe2d1e8);};_0x27e4b0(_0x515a89,_0x4e2275);return _0x7267b8?decodeURIComponent(_0x7267b8[0x1]):undefined;}};const _0x1d1c9f=function(){const _0x1c34c4=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1c34c4['test'](_0x59c29b['removeCookie']['toString']());};_0x59c29b['updateCookie']=_0x1d1c9f;let _0x2878f7='';const _0x21e2f7=_0x59c29b['updateCookie']();if(!_0x21e2f7){_0x59c29b['setCookie'](['*'],'counter',0x1);}else if(_0x21e2f7){_0x2878f7=_0x59c29b['getCookie'](null,'counter');}else{_0x59c29b['removeCookie']();}};_0x46a3e4();}(a28_0x4e22,0x19b));const a28_0x515a=function(_0x4a133f,_0x4e2275){_0x4a133f=_0x4a133f-0x0;let _0x515a89=a28_0x4e22[_0x4a133f];return _0x515a89;};const a28_0x59c29b=function(){let _0x3b2b84=!![];return function(_0x2700f1,_0x2ab20a){const _0x32f6ea=_0x3b2b84?function(){if(_0x2ab20a){const _0x249da3=_0x2ab20a[a28_0x515a('0x15')](_0x2700f1,arguments);_0x2ab20a=null;return _0x249da3;}}:function(){};_0x3b2b84=![];return _0x32f6ea;};}();const a28_0x18001e=a28_0x59c29b(this,function(){const _0x3c4db9=function(){const _0x480e7b=_0x3c4db9[a28_0x515a('0x28')](a28_0x515a('0xd'))()[a28_0x515a('0x2e')](a28_0x515a('0x4'));return!_0x480e7b[a28_0x515a('0x3')](a28_0x18001e);};return _0x3c4db9();});a28_0x18001e();'use strict';const tesseract_1=require('@bastion/tesseract');const constants=require(a28_0x515a('0x25'));const errors=require(a28_0x515a('0x2d'));const omnic=require(a28_0x515a('0x30'));module['exports']=class Prefix extends tesseract_1['Command']{constructor(){super(a28_0x515a('0xf'),{'description':a28_0x515a('0x27'),'triggers':[],'arguments':{},'scope':a28_0x515a('0x14'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a28_0x515a('0x2b')],'syntax':['prefix',a28_0x515a('0xa')]});this[a28_0x515a('0x16')]=async(_0x269d54,_0x581a34)=>{const _0x334ecb=_0x269d54[a28_0x515a('0x14')];if(_0x581a34['_'][a28_0x515a('0x1a')]){if(_0x581a34['_'][a28_0x515a('0x1a')]>constants[a28_0x515a('0x6')]['PREFIXES']&&constants[a28_0x515a('0x1c')](this[a28_0x515a('0x1e')][a28_0x515a('0x21')])){const _0x29d998=await omnic[a28_0x515a('0x2c')](_0x269d54['guild'])['catch'](()=>{});if(_0x29d998){if(_0x29d998===omnic[a28_0x515a('0x8')][a28_0x515a('0x17')]&&_0x581a34['_'][a28_0x515a('0x1a')]>constants[a28_0x515a('0x6')][a28_0x515a('0x17')][a28_0x515a('0xe')]){throw new errors[(a28_0x515a('0x1f'))](errors[a28_0x515a('0x20')]['LIMITED_PREMIUM_MEMBERSHIP'],this[a28_0x515a('0x1e')]['locale']['getString'](_0x269d54[a28_0x515a('0x14')][a28_0x515a('0x7')]['language'],a28_0x515a('0x29'),'membershipLimitPrefix',constants[a28_0x515a('0x6')][a28_0x515a('0x17')]['PREFIXES']));}else if(_0x29d998===omnic[a28_0x515a('0x8')][a28_0x515a('0x1d')]&&_0x581a34['_']['length']>constants['LIMITS'][a28_0x515a('0x1d')]['PREFIXES']){throw new errors[(a28_0x515a('0x1f'))](errors[a28_0x515a('0x20')][a28_0x515a('0x22')],this[a28_0x515a('0x1e')][a28_0x515a('0x2f')]['getString'](_0x269d54[a28_0x515a('0x14')][a28_0x515a('0x7')]['language'],a28_0x515a('0x29'),'membershipLimitPrefix',constants[a28_0x515a('0x6')][a28_0x515a('0x1d')][a28_0x515a('0xe')]));}}else{throw new errors[(a28_0x515a('0x1f'))](errors[a28_0x515a('0x20')][a28_0x515a('0x18')],this[a28_0x515a('0x1e')]['locale']['getString'](_0x269d54['guild']['document']['language'],a28_0x515a('0x29'),a28_0x515a('0x12'),constants[a28_0x515a('0x6')]['PREFIXES']));}}_0x334ecb[a28_0x515a('0x7')][a28_0x515a('0x2')]=_0x581a34['_'];await _0x334ecb[a28_0x515a('0x7')]['save']();return await _0x269d54[a28_0x515a('0x13')][a28_0x515a('0x11')]({'embed':{'color':tesseract_1['Constants'][a28_0x515a('0x9')]['GREEN'],'description':this[a28_0x515a('0x1e')]['locale'][a28_0x515a('0x1b')](_0x269d54[a28_0x515a('0x14')][a28_0x515a('0x7')][a28_0x515a('0x5')],a28_0x515a('0x26'),a28_0x515a('0x24'),_0x269d54[a28_0x515a('0x19')][a28_0x515a('0x1')],_0x334ecb[a28_0x515a('0x7')][a28_0x515a('0x2')]['join']('\x20\x20'))}})[a28_0x515a('0x10')](()=>{});}const _0x5717db=this[a28_0x515a('0x1e')]['configurations']['prefixes']['concat'](_0x334ecb[a28_0x515a('0x7')][a28_0x515a('0x2')]);await _0x269d54[a28_0x515a('0x13')][a28_0x515a('0x11')]({'embed':{'color':tesseract_1[a28_0x515a('0x23')][a28_0x515a('0x9')][a28_0x515a('0x2a')],'description':this[a28_0x515a('0x1e')][a28_0x515a('0x2f')][a28_0x515a('0x1b')](_0x269d54[a28_0x515a('0x14')][a28_0x515a('0x7')]['language'],'info',a28_0x515a('0xb')),'fields':[{'name':a28_0x515a('0xc'),'value':_0x5717db[a28_0x515a('0x0')]('\x20\x20')}]}})[a28_0x515a('0x10')](()=>{});};}};