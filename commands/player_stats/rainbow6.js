const a103_0x2530=['\x20has\x20played\x20PvP\x20matches\x20for\x20','test','\x20kills\x20/\x20','Losses','region','constructor','Asia','\x20•\x20Powered\x20by\x20Ubisoft','INVALID_COMMAND_SYNTAX','losses','Assists','Level','wins','image','Europe','skillMean','platforms','LDR','rainbow6','exports','deaths','name','guild','length','America','exec','xbl','PvE','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Rainbow\x206\x20player\x20in\x20any\x20supported\x20platform.','playtime','makeRequest','\x20hours.','compile','rainbow6\x20USERNAME\x20--platform\x20PLATFORM','Matches','Deaths','toFixed','pvp','Kills','matches','psn','platform','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','uplay','stats','resolveRegion','username','send','BASTION_ERROR_TYPE','WLR','PvP','\x0a**SKILL**\x20','PLAYER_DOESNT_EXIST','seasons','../../utils/omnic','json','apply','keys','Rainbow\x206\x20-\x20Player\x20Stats','current','kills','Wins','pop','rank','level','map','apac','../../utils/errors','DiscordError','pve','KDR','general','toLowerCase','ncsa','push','values','user','RAINBOW6','Command','COLORS','\x20losses','assists'];(function(_0xa44c97,_0x253092){const _0x2cfa65=function(_0x575408){while(--_0x575408){_0xa44c97['push'](_0xa44c97['shift']());}};const _0x40c12e=function(){const _0x34bfe2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x547cf7,_0x181cbd,_0x2617e8,_0x24d5d4){_0x24d5d4=_0x24d5d4||{};let _0x4cea61=_0x181cbd+'='+_0x2617e8;let _0x4f80c6=0x0;for(let _0x63fdf=0x0,_0xb408df=_0x547cf7['length'];_0x63fdf<_0xb408df;_0x63fdf++){const _0x1cacb5=_0x547cf7[_0x63fdf];_0x4cea61+=';\x20'+_0x1cacb5;const _0x40c266=_0x547cf7[_0x1cacb5];_0x547cf7['push'](_0x40c266);_0xb408df=_0x547cf7['length'];if(_0x40c266!==!![]){_0x4cea61+='='+_0x40c266;}}_0x24d5d4['cookie']=_0x4cea61;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1f8306,_0x325b29){_0x1f8306=_0x1f8306||function(_0x4c57a9){return _0x4c57a9;};const _0xd69581=_0x1f8306(new RegExp('(?:^|;\x20)'+_0x325b29['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x30d2db=function(_0x4a623a,_0x9ac6cc){_0x4a623a(++_0x9ac6cc);};_0x30d2db(_0x2cfa65,_0x253092);return _0xd69581?decodeURIComponent(_0xd69581[0x1]):undefined;}};const _0x4391a2=function(){const _0x5250bf=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5250bf['test'](_0x34bfe2['removeCookie']['toString']());};_0x34bfe2['updateCookie']=_0x4391a2;let _0x2e188c='';const _0x15cca1=_0x34bfe2['updateCookie']();if(!_0x15cca1){_0x34bfe2['setCookie'](['*'],'counter',0x1);}else if(_0x15cca1){_0x2e188c=_0x34bfe2['getCookie'](null,'counter');}else{_0x34bfe2['removeCookie']();}};_0x40c12e();}(a103_0x2530,0x8f));const a103_0x2cfa=function(_0xa44c97,_0x253092){_0xa44c97=_0xa44c97-0x0;let _0x2cfa65=a103_0x2530[_0xa44c97];return _0x2cfa65;};const a103_0x34bfe2=function(){let _0x188550=!![];return function(_0x3a0b7a,_0x102c2d){const _0x1f4ee3=_0x188550?function(){if(_0x102c2d){const _0x4e4d97=_0x102c2d[a103_0x2cfa('0x4d')](_0x3a0b7a,arguments);_0x102c2d=null;return _0x4e4d97;}}:function(){};_0x188550=![];return _0x1f4ee3;};}();const a103_0x575408=a103_0x34bfe2(this,function(){const _0x53e525=function(){const _0xd222ff=_0x53e525[a103_0x2cfa('0x1a')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a103_0x2cfa('0x35')](a103_0x2cfa('0x3f'));return!_0xd222ff[a103_0x2cfa('0x16')](a103_0x575408);};return _0x53e525();});a103_0x575408();'use strict';const tesseract_1=require('@bastion/tesseract');const constants=require('../../utils/constants');const errors=require(a103_0x2cfa('0x6'));const omnic=require(a103_0x2cfa('0x4b'));module[a103_0x2cfa('0x28')]=class Rainbow6Command extends tesseract_1[a103_0x2cfa('0x11')]{constructor(){super(a103_0x2cfa('0x27'),{'description':a103_0x2cfa('0x31'),'triggers':['r6'],'arguments':{'alias':{'platform':['p']},'string':[a103_0x2cfa('0x3e')]},'scope':a103_0x2cfa('0x2b'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['rainbow6\x20USERNAME',a103_0x2cfa('0x36')]});this[a103_0x2cfa('0x42')]=_0x4db193=>{_0x4db193=_0x4db193['toLowerCase']();switch(_0x4db193){case'emea':return a103_0x2cfa('0x23');case a103_0x2cfa('0xc'):return a103_0x2cfa('0x2d');case a103_0x2cfa('0x5'):return a103_0x2cfa('0x1b');default:return _0x4db193;}};this[a103_0x2cfa('0x2e')]=async(_0x5d192b,_0x27baa3)=>{if(!_0x27baa3['_']['length'])throw new errors[(a103_0x2cfa('0x7'))](errors[a103_0x2cfa('0x45')][a103_0x2cfa('0x1d')],this['name']);const _0x3aa463=_0x27baa3['_']['join']('\x20');const _0x19d195=_0x27baa3[a103_0x2cfa('0x3e')]&&this[a103_0x2cfa('0x25')]['includes'](_0x27baa3[a103_0x2cfa('0x3e')][a103_0x2cfa('0xb')]())?_0x27baa3['platform'][a103_0x2cfa('0xb')]():this[a103_0x2cfa('0x25')][0x0];const _0x1e1b0c=await omnic[a103_0x2cfa('0x33')]('/playerstats/rainbow6/'+_0x19d195+'/'+encodeURIComponent(_0x3aa463));const _0x179843=await _0x1e1b0c[a103_0x2cfa('0x4c')]();if(!Object[a103_0x2cfa('0x4e')](_0x179843)[a103_0x2cfa('0x2c')])throw new Error(a103_0x2cfa('0x49'));const _0x3edd11=[{'name':a103_0x2cfa('0x20'),'value':_0x179843[a103_0x2cfa('0x3')][a103_0x2cfa('0x3')],'inline':!![]},{'name':'XP','value':_0x179843[a103_0x2cfa('0x3')]['xp'],'inline':!![]}];let _0x51e62a;if(_0x179843[a103_0x2cfa('0x2')]){const _0xb627f5=Object[a103_0x2cfa('0x4e')](_0x179843[a103_0x2cfa('0x2')]['seasons']);if(_0xb627f5[a103_0x2cfa('0x2c')]){const _0x4d0e98=_0x179843[a103_0x2cfa('0x2')][a103_0x2cfa('0x4a')][_0xb627f5[a103_0x2cfa('0x1')]()];let _0x160628=-0x1;_0x3edd11[a103_0x2cfa('0xd')]({'name':'Season\x20-\x20'+_0x4d0e98['id'],'value':_0x4d0e98[a103_0x2cfa('0x2a')]},...Object[a103_0x2cfa('0xe')](_0x4d0e98['regions'])[a103_0x2cfa('0x4')](_0x58fdbc=>{if(_0x58fdbc[a103_0x2cfa('0x50')]['id']>_0x160628){_0x160628=_0x58fdbc[a103_0x2cfa('0x50')]['id'];_0x51e62a=_0x58fdbc[a103_0x2cfa('0x50')][a103_0x2cfa('0x22')];}return{'name':this[a103_0x2cfa('0x42')](_0x58fdbc[a103_0x2cfa('0x19')]),'value':_0x58fdbc[a103_0x2cfa('0x50')]['name']+'\x20-\x20Rank\x20'+_0x58fdbc[a103_0x2cfa('0x50')]['id']+a103_0x2cfa('0x48')+_0x58fdbc[a103_0x2cfa('0x24')][a103_0x2cfa('0x39')](0x2)+'\x20±\x20'+_0x58fdbc['skillStdev'][a103_0x2cfa('0x39')](0x2)+'\x0a'+_0x58fdbc[a103_0x2cfa('0x51')]+a103_0x2cfa('0x17')+_0x58fdbc['deaths']+'\x20deaths\x0a'+_0x58fdbc[a103_0x2cfa('0x21')]+'\x20wins\x20/\x20'+_0x58fdbc[a103_0x2cfa('0x1e')]+a103_0x2cfa('0x13'),'inline':!![]};}));}}if(_0x179843['stats']['pvp']&&_0x179843[a103_0x2cfa('0x41')][a103_0x2cfa('0x3a')][a103_0x2cfa('0xa')]){_0x3edd11[a103_0x2cfa('0xd')]({'name':a103_0x2cfa('0x47'),'value':_0x179843[a103_0x2cfa('0xf')]['username']+a103_0x2cfa('0x15')+(_0x179843[a103_0x2cfa('0x41')]['pvp'][a103_0x2cfa('0xa')][a103_0x2cfa('0x32')]/0x3c/0x3c)[a103_0x2cfa('0x39')](0x2)+a103_0x2cfa('0x34')},{'name':a103_0x2cfa('0x37'),'value':_0x179843['stats'][a103_0x2cfa('0x3a')][a103_0x2cfa('0xa')][a103_0x2cfa('0x3c')],'inline':!![]},{'name':a103_0x2cfa('0x0'),'value':_0x179843[a103_0x2cfa('0x41')][a103_0x2cfa('0x3a')][a103_0x2cfa('0xa')][a103_0x2cfa('0x21')],'inline':!![]},{'name':a103_0x2cfa('0x18'),'value':_0x179843['stats'][a103_0x2cfa('0x3a')][a103_0x2cfa('0xa')][a103_0x2cfa('0x1e')],'inline':!![]},{'name':a103_0x2cfa('0x3b'),'value':_0x179843[a103_0x2cfa('0x41')][a103_0x2cfa('0x3a')][a103_0x2cfa('0xa')][a103_0x2cfa('0x51')],'inline':!![]},{'name':a103_0x2cfa('0x1f'),'value':_0x179843[a103_0x2cfa('0x41')][a103_0x2cfa('0x3a')]['general'][a103_0x2cfa('0x14')],'inline':!![]},{'name':a103_0x2cfa('0x38'),'value':_0x179843['stats'][a103_0x2cfa('0x3a')][a103_0x2cfa('0xa')][a103_0x2cfa('0x29')],'inline':!![]},{'name':a103_0x2cfa('0x46'),'value':_0x179843[a103_0x2cfa('0x41')][a103_0x2cfa('0x3a')][a103_0x2cfa('0xa')][a103_0x2cfa('0x1e')]?(_0x179843[a103_0x2cfa('0x41')][a103_0x2cfa('0x3a')][a103_0x2cfa('0xa')]['wins']/_0x179843[a103_0x2cfa('0x41')]['pvp']['general'][a103_0x2cfa('0x1e')])[a103_0x2cfa('0x39')](0x2):_0x179843[a103_0x2cfa('0x41')]['pvp'][a103_0x2cfa('0xa')][a103_0x2cfa('0x21')],'inline':!![]},{'name':a103_0x2cfa('0x26'),'value':_0x179843['stats'][a103_0x2cfa('0x3a')][a103_0x2cfa('0xa')][a103_0x2cfa('0x29')]?(_0x179843[a103_0x2cfa('0x41')][a103_0x2cfa('0x3a')][a103_0x2cfa('0xa')][a103_0x2cfa('0x51')]/_0x179843['stats'][a103_0x2cfa('0x3a')][a103_0x2cfa('0xa')]['deaths'])[a103_0x2cfa('0x39')](0x2):_0x179843[a103_0x2cfa('0x41')]['pvp'][a103_0x2cfa('0xa')]['kills'],'inline':!![]});}if(_0x179843[a103_0x2cfa('0x41')][a103_0x2cfa('0x8')]&&_0x179843[a103_0x2cfa('0x41')][a103_0x2cfa('0x8')][a103_0x2cfa('0xa')]){_0x3edd11['push']({'name':a103_0x2cfa('0x30'),'value':_0x179843['user'][a103_0x2cfa('0x43')]+'\x20has\x20played\x20PvE\x20matches\x20for\x20'+(_0x179843[a103_0x2cfa('0x41')][a103_0x2cfa('0x8')]['general'][a103_0x2cfa('0x32')]/0x3c/0x3c)[a103_0x2cfa('0x39')](0x2)+'\x20hours.'},{'name':a103_0x2cfa('0x37'),'value':_0x179843['stats'][a103_0x2cfa('0x8')][a103_0x2cfa('0xa')][a103_0x2cfa('0x3c')],'inline':!![]},{'name':a103_0x2cfa('0x0'),'value':_0x179843['stats'][a103_0x2cfa('0x8')][a103_0x2cfa('0xa')][a103_0x2cfa('0x21')],'inline':!![]},{'name':'Losses','value':_0x179843[a103_0x2cfa('0x41')][a103_0x2cfa('0x8')][a103_0x2cfa('0xa')][a103_0x2cfa('0x1e')],'inline':!![]},{'name':'Kills','value':_0x179843[a103_0x2cfa('0x41')]['pve'][a103_0x2cfa('0xa')]['kills'],'inline':!![]},{'name':'Assists','value':_0x179843[a103_0x2cfa('0x41')][a103_0x2cfa('0x8')][a103_0x2cfa('0xa')][a103_0x2cfa('0x14')],'inline':!![]},{'name':'Deaths','value':_0x179843['stats']['pve'][a103_0x2cfa('0xa')][a103_0x2cfa('0x29')],'inline':!![]},{'name':a103_0x2cfa('0x46'),'value':_0x179843[a103_0x2cfa('0x41')][a103_0x2cfa('0x8')][a103_0x2cfa('0xa')]['losses']?(_0x179843[a103_0x2cfa('0x41')]['pve']['general'][a103_0x2cfa('0x21')]/_0x179843[a103_0x2cfa('0x41')][a103_0x2cfa('0x8')]['general']['losses'])['toFixed'](0x2):_0x179843[a103_0x2cfa('0x41')][a103_0x2cfa('0x8')][a103_0x2cfa('0xa')][a103_0x2cfa('0x21')],'inline':!![]},{'name':a103_0x2cfa('0x9'),'value':_0x179843[a103_0x2cfa('0x41')]['pve'][a103_0x2cfa('0xa')][a103_0x2cfa('0x29')]?(_0x179843[a103_0x2cfa('0x41')][a103_0x2cfa('0x8')][a103_0x2cfa('0xa')][a103_0x2cfa('0x51')]/_0x179843['stats']['pve']['general']['deaths'])[a103_0x2cfa('0x39')](0x2):_0x179843[a103_0x2cfa('0x41')]['pve']['general']['kills'],'inline':!![]});}await _0x5d192b['channel'][a103_0x2cfa('0x44')]({'embed':{'color':constants[a103_0x2cfa('0x12')][a103_0x2cfa('0x10')],'author':{'name':_0x179843['user']['username']},'title':a103_0x2cfa('0x4f'),'fields':_0x3edd11,'thumbnail':{'url':_0x51e62a},'footer':{'text':_0x179843[a103_0x2cfa('0xf')][a103_0x2cfa('0x3e')]['toUpperCase']()+a103_0x2cfa('0x1c')}}});};this['platforms']=[a103_0x2cfa('0x40'),'steam',a103_0x2cfa('0x3d'),a103_0x2cfa('0x2f')];}};