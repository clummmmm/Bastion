const a65_0x5cdc=['Constants','info','roleNotFound','../../utils/omnic','resolver','join','../../utils/numbers','send','membershipLimitLevelRoles','getString','NO_ROLES_FOR_LEVEL','PLATINUM','get','catch','length','_id','PremiumTier','errors','language','ROLES_PER_LEVEL','apply','../../models/Role','Level-Up\x20Roles','resolveRole','test','membershipLimitRoleLevels','Level\x20','clamp','remove','ROLE_NOT_FOUND','level','guild','channel','exec','document','Command','keys','../../utils/errors','default','IRIS','resolveRoles','locale','LIMITED_PREMIUM_MEMBERSHIP','COLORS','GOLD','has','countDocuments','fetchDocument','../../utils/gamification','role','levelUpRoles\x20--level\x20NUMBER\x20--role\x20ROLE','DiscordError','exports','save','ROLE_LEVELS','BASTION_ERROR_TYPE','push','author','levelUpRoles','client','../../utils/constants','MAX_LEVEL','MANAGE_ROLES','roleLevelClear','name','map','cache','LIMITS','tag','roles','GREEN','levelUpRoles\x20--level\x20NUMBER\x20--remove','@bastion/tesseract','user','constructor','roleLevelAdd','compile'];(function(_0x4975aa,_0x5cdc28){const _0x517846=function(_0x196829){while(--_0x196829){_0x4975aa['push'](_0x4975aa['shift']());}};const _0x28a2fb=function(){const _0x1f7a96={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x56e986,_0x8c645d,_0x594a0d,_0x25c86f){_0x25c86f=_0x25c86f||{};let _0x58aecf=_0x8c645d+'='+_0x594a0d;let _0xb01129=0x0;for(let _0x130f52=0x0,_0x115f7d=_0x56e986['length'];_0x130f52<_0x115f7d;_0x130f52++){const _0x3727a5=_0x56e986[_0x130f52];_0x58aecf+=';\x20'+_0x3727a5;const _0xb998d7=_0x56e986[_0x3727a5];_0x56e986['push'](_0xb998d7);_0x115f7d=_0x56e986['length'];if(_0xb998d7!==!![]){_0x58aecf+='='+_0xb998d7;}}_0x25c86f['cookie']=_0x58aecf;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3e6da7,_0x3477cb){_0x3e6da7=_0x3e6da7||function(_0x50a5d3){return _0x50a5d3;};const _0x2ba77c=_0x3e6da7(new RegExp('(?:^|;\x20)'+_0x3477cb['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3b85ad=function(_0x57c95a,_0x2656f2){_0x57c95a(++_0x2656f2);};_0x3b85ad(_0x517846,_0x5cdc28);return _0x2ba77c?decodeURIComponent(_0x2ba77c[0x1]):undefined;}};const _0x5336b0=function(){const _0x5ae527=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5ae527['test'](_0x1f7a96['removeCookie']['toString']());};_0x1f7a96['updateCookie']=_0x5336b0;let _0x3711c5='';const _0x22b2d5=_0x1f7a96['updateCookie']();if(!_0x22b2d5){_0x1f7a96['setCookie'](['*'],'counter',0x1);}else if(_0x22b2d5){_0x3711c5=_0x1f7a96['getCookie'](null,'counter');}else{_0x1f7a96['removeCookie']();}};_0x28a2fb();}(a65_0x5cdc,0x198));const a65_0x5178=function(_0x4975aa,_0x5cdc28){_0x4975aa=_0x4975aa-0x0;let _0x517846=a65_0x5cdc[_0x4975aa];return _0x517846;};const a65_0x1f7a96=function(){let _0x441d83=!![];return function(_0x8d71e8,_0x125b48){const _0x1b6315=_0x441d83?function(){if(_0x125b48){const _0x4ffe2a=_0x125b48[a65_0x5178('0x4a')](_0x8d71e8,arguments);_0x125b48=null;return _0x4ffe2a;}}:function(){};_0x441d83=![];return _0x1b6315;};}();const a65_0x196829=a65_0x1f7a96(this,function(){const _0x2531c1=function(){const _0x429ca9=_0x2531c1[a65_0x5178('0x33')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a65_0x5178('0x35')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x429ca9[a65_0x5178('0x1')](a65_0x196829);};return _0x2531c1();});a65_0x196829();'use strict';const tesseract_1=require(a65_0x5178('0x31'));const Role_1=require(a65_0x5178('0x4b'));const constants=require(a65_0x5178('0x25'));const errors=require(a65_0x5178('0xe'));const gamification=require(a65_0x5178('0x19'));const numbers=require(a65_0x5178('0x3c'));const omnic=require(a65_0x5178('0x39'));module[a65_0x5178('0x1d')]=class LevelUpRolesCommand extends tesseract_1[a65_0x5178('0xc')]{constructor(){super(a65_0x5178('0x23'),{'description':'It\x20allows\x20you\x20to\x20add\x20roles\x20to\x20a\x20level.\x20When\x20members\x20reach\x20that\x20level,\x20they\x27ll\x20be\x20awarded\x20those\x20roles.','triggers':[],'arguments':{'array':['role'],'boolean':[a65_0x5178('0x5')],'string':[a65_0x5178('0x1a')],'number':[a65_0x5178('0x7')],'coerce':{'level':_0x28ee5c=>numbers[a65_0x5178('0x4')](_0x28ee5c,0x1,gamification[a65_0x5178('0x26')])}},'scope':a65_0x5178('0x8'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a65_0x5178('0x27')],'userPermissions':[a65_0x5178('0x27')],'syntax':[a65_0x5178('0x23'),'levelUpRoles\x20--level\x20NUMBER',a65_0x5178('0x1b'),a65_0x5178('0x30')]});this[a65_0x5178('0xa')]=async(_0xd672c9,_0x3f929d)=>{if(_0x3f929d['level']){if(_0x3f929d[a65_0x5178('0x1a')]){if(constants['isPublicBastion'](this['client'][a65_0x5178('0x32')])){const _0x48e39b=await omnic['fetchPremiumTier'](_0xd672c9[a65_0x5178('0x8')])['catch'](()=>{});const _0x10accb=await Role_1[a65_0x5178('0xf')]['distinct'](a65_0x5178('0x7'),{'guild':_0xd672c9[a65_0x5178('0x8')]['id'],'level':{'$exists':!![],'$ne':null}});if(_0x48e39b){if(_0x48e39b===omnic[a65_0x5178('0x46')][a65_0x5178('0x15')]&&_0x10accb[a65_0x5178('0x44')]>=constants[a65_0x5178('0x2c')]['GOLD']['ROLE_LEVELS']){throw new errors[(a65_0x5178('0x1c'))](errors[a65_0x5178('0x20')]['LIMITED_PREMIUM_MEMBERSHIP'],this[a65_0x5178('0x24')][a65_0x5178('0x12')]['getString'](_0xd672c9[a65_0x5178('0x8')][a65_0x5178('0xb')][a65_0x5178('0x48')],a65_0x5178('0x47'),'membershipLimitRoleLevels',constants[a65_0x5178('0x2c')][a65_0x5178('0x15')]['ROLE_LEVELS']));}else if(_0x48e39b===omnic[a65_0x5178('0x46')][a65_0x5178('0x41')]&&_0x10accb['length']>=constants['LIMITS'][a65_0x5178('0x41')][a65_0x5178('0x1f')]){throw new errors[(a65_0x5178('0x1c'))](errors[a65_0x5178('0x20')]['LIMITED_PREMIUM_MEMBERSHIP'],this['client'][a65_0x5178('0x12')]['getString'](_0xd672c9['guild']['document'][a65_0x5178('0x48')],a65_0x5178('0x47'),a65_0x5178('0x2'),constants[a65_0x5178('0x2c')][a65_0x5178('0x41')][a65_0x5178('0x1f')]));}}else if(_0x10accb[a65_0x5178('0x44')]>=constants[a65_0x5178('0x2c')]['ROLE_LEVELS']){throw new errors[(a65_0x5178('0x1c'))](errors[a65_0x5178('0x20')]['PREMIUM_MEMBERSHIP_REQUIRED'],this[a65_0x5178('0x24')]['locale']['getString'](_0xd672c9[a65_0x5178('0x8')]['document'][a65_0x5178('0x48')],a65_0x5178('0x47'),'premiumRoleLevels',constants['LIMITS'][a65_0x5178('0x1f')]));}const _0x5198be=await Role_1['default'][a65_0x5178('0x17')]({'guild':_0xd672c9[a65_0x5178('0x8')]['id'],'level':_0x3f929d[a65_0x5178('0x7')]});if(_0x48e39b){if(_0x48e39b===omnic[a65_0x5178('0x46')][a65_0x5178('0x15')]&&_0x5198be>=constants[a65_0x5178('0x2c')][a65_0x5178('0x15')][a65_0x5178('0x49')]){throw new errors['DiscordError'](errors[a65_0x5178('0x20')]['LIMITED_PREMIUM_MEMBERSHIP'],this['client'][a65_0x5178('0x12')]['getString'](_0xd672c9[a65_0x5178('0x8')][a65_0x5178('0xb')][a65_0x5178('0x48')],'errors',a65_0x5178('0x3e'),constants['LIMITS'][a65_0x5178('0x15')][a65_0x5178('0x49')]));}else if(_0x48e39b===omnic[a65_0x5178('0x46')][a65_0x5178('0x41')]&&_0x5198be>=constants['LIMITS'][a65_0x5178('0x41')]['ROLES_PER_LEVEL']){throw new errors[(a65_0x5178('0x1c'))](errors[a65_0x5178('0x20')][a65_0x5178('0x13')],this[a65_0x5178('0x24')][a65_0x5178('0x12')][a65_0x5178('0x3f')](_0xd672c9['guild'][a65_0x5178('0xb')][a65_0x5178('0x48')],a65_0x5178('0x47'),a65_0x5178('0x3e'),constants[a65_0x5178('0x2c')][a65_0x5178('0x41')][a65_0x5178('0x49')]));}}else if(_0x5198be>=constants[a65_0x5178('0x2c')][a65_0x5178('0x49')]){throw new errors[(a65_0x5178('0x1c'))](errors['BASTION_ERROR_TYPE']['PREMIUM_MEMBERSHIP_REQUIRED'],this['client'][a65_0x5178('0x12')]['getString'](_0xd672c9['guild'][a65_0x5178('0xb')]['language'],a65_0x5178('0x47'),'premiumLevelRoles',constants[a65_0x5178('0x2c')]['ROLES_PER_LEVEL']));}}const _0x2b4c83=this[a65_0x5178('0x24')]['resolver'][a65_0x5178('0x0')](_0xd672c9[a65_0x5178('0x8')],_0x3f929d[a65_0x5178('0x1a')][a65_0x5178('0x3b')]('\x20'));if(!_0x2b4c83)throw new errors[(a65_0x5178('0x1c'))](errors[a65_0x5178('0x20')][a65_0x5178('0x6')],this[a65_0x5178('0x24')][a65_0x5178('0x12')][a65_0x5178('0x3f')](_0xd672c9[a65_0x5178('0x8')][a65_0x5178('0xb')][a65_0x5178('0x48')],'error',a65_0x5178('0x38')));let _0x41a95b=await _0x2b4c83[a65_0x5178('0x18')]();if(!_0x41a95b){_0x41a95b=await _0x2b4c83['createDocument']();}_0x41a95b[a65_0x5178('0x7')]=_0x3f929d[a65_0x5178('0x7')];await _0x41a95b[a65_0x5178('0x1e')]();return await _0xd672c9[a65_0x5178('0x9')]['send']({'embed':{'color':tesseract_1[a65_0x5178('0x36')][a65_0x5178('0x14')][a65_0x5178('0x2f')],'description':this[a65_0x5178('0x24')][a65_0x5178('0x12')][a65_0x5178('0x3f')](_0xd672c9[a65_0x5178('0x8')][a65_0x5178('0xb')]['language'],'info',a65_0x5178('0x34'),_0xd672c9['author'][a65_0x5178('0x2d')],_0x2b4c83[a65_0x5178('0x29')],_0x3f929d[a65_0x5178('0x7')])}})[a65_0x5178('0x43')](()=>{});}if(_0x3f929d[a65_0x5178('0x5')]){await Role_1[a65_0x5178('0xf')]['updateMany']({'guild':_0xd672c9[a65_0x5178('0x8')]['id'],'level':_0x3f929d['level']},{'$unset':{'level':0x1}});return await _0xd672c9[a65_0x5178('0x9')][a65_0x5178('0x3d')]({'embed':{'color':tesseract_1[a65_0x5178('0x36')]['COLORS']['RED'],'description':this['client'][a65_0x5178('0x12')]['getString'](_0xd672c9['guild'][a65_0x5178('0xb')][a65_0x5178('0x48')],a65_0x5178('0x37'),a65_0x5178('0x28'),_0xd672c9[a65_0x5178('0x22')]['tag'],_0x3f929d[a65_0x5178('0x7')])}})['catch'](()=>{});}const _0x214930=await Role_1[a65_0x5178('0xf')]['find']({'guild':_0xd672c9[a65_0x5178('0x8')]['id'],'level':_0x3f929d[a65_0x5178('0x7')]});if(!_0x214930['length'])throw new Error(a65_0x5178('0x40'));const _0xc1350a=this[a65_0x5178('0x24')][a65_0x5178('0x3a')][a65_0x5178('0x11')](_0xd672c9[a65_0x5178('0x8')],_0x214930[a65_0x5178('0x2a')](_0x326545=>_0x326545[a65_0x5178('0x45')]));return await _0xd672c9[a65_0x5178('0x9')][a65_0x5178('0x3d')]({'embed':{'color':tesseract_1[a65_0x5178('0x36')][a65_0x5178('0x14')][a65_0x5178('0x10')],'title':a65_0x5178('0x3')+_0x3f929d[a65_0x5178('0x7')],'fields':[{'name':'Roles','value':_0xc1350a[a65_0x5178('0x2a')](_0x39fd3a=>_0x39fd3a[a65_0x5178('0x29')])['join']('\x0a')}]}})[a65_0x5178('0x43')](()=>{});}const _0x1385c9=await Role_1['default']['find']({'guild':_0xd672c9[a65_0x5178('0x8')]['id'],'level':{'$exists':!![],'$ne':null}});if(!_0x1385c9[a65_0x5178('0x44')])throw new Error('NO_LEVEL_UP_ROLES');const _0x118a1e={};for(const _0x2ad327 of _0x1385c9){if(_0x2ad327[a65_0x5178('0x7')]in _0x118a1e){_0x118a1e[_0x2ad327[a65_0x5178('0x7')]][a65_0x5178('0x21')](_0x2ad327[a65_0x5178('0x45')]);}else{_0x118a1e[_0x2ad327[a65_0x5178('0x7')]]=[_0x2ad327[a65_0x5178('0x45')]];}}return await _0xd672c9[a65_0x5178('0x9')][a65_0x5178('0x3d')]({'embed':{'color':tesseract_1['Constants'][a65_0x5178('0x14')]['IRIS'],'title':a65_0x5178('0x4c'),'fields':Object[a65_0x5178('0xd')](_0x118a1e)['map'](_0x7a9160=>({'name':'Level\x20'+_0x7a9160,'value':_0x118a1e[_0x7a9160][a65_0x5178('0x2a')](_0xd9fe8a=>_0xd672c9[a65_0x5178('0x8')]['roles']['cache'][a65_0x5178('0x16')](_0xd9fe8a)?_0xd672c9[a65_0x5178('0x8')][a65_0x5178('0x2e')][a65_0x5178('0x2b')][a65_0x5178('0x42')](_0xd9fe8a)[a65_0x5178('0x29')]:_0xd9fe8a)[a65_0x5178('0x3b')](',\x20')}))}})['catch'](()=>{});};}};