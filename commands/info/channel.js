const a53_0x1628=['../../utils/strings','resolveGuildChannel','join','topic','permissionsLocked','test','createdAt','\x20Members','parent','name','Constants','members','toString','\x20Channel','toTitleCase','Synced','resolver','client','@bastion/tesseract','catch','channelInfo','getString','size','channelNotFound','constructor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','apply','locale','return\x20/\x22\x20+\x20this\x20+\x20\x22/','It\x20allows\x20you\x20see\x20the\x20information\x20of\x20a\x20channel.','Position','errors','send','guild','document'];(function(_0x5a9296,_0x1628c9){const _0x2ea667=function(_0x27904e){while(--_0x27904e){_0x5a9296['push'](_0x5a9296['shift']());}},_0x39c6c9=function(){const _0x4fb8ea={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x34dfa7,_0x56f165,_0x12a75a,_0xa3eeb8){_0xa3eeb8=_0xa3eeb8||{};let _0xad98f1=_0x56f165+'='+_0x12a75a,_0x473844=0x0;for(let _0x2ea002=0x0,_0x582849=_0x34dfa7['length'];_0x2ea002<_0x582849;_0x2ea002++){const _0x196381=_0x34dfa7[_0x2ea002];_0xad98f1+=';\x20'+_0x196381;const _0xe41ceb=_0x34dfa7[_0x196381];_0x34dfa7['push'](_0xe41ceb),_0x582849=_0x34dfa7['length'],_0xe41ceb!==!![]&&(_0xad98f1+='='+_0xe41ceb);}_0xa3eeb8['cookie']=_0xad98f1;},'removeCookie':function(){return'dev';},'getCookie':function(_0x34655f,_0x1179de){_0x34655f=_0x34655f||function(_0x544794){return _0x544794;};const _0x558075=_0x34655f(new RegExp('(?:^|;\x20)'+_0x1179de['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4d4479=function(_0x393c6b,_0x618065){_0x393c6b(++_0x618065);};return _0x4d4479(_0x2ea667,_0x1628c9),_0x558075?decodeURIComponent(_0x558075[0x1]):undefined;}},_0x28d928=function(){const _0x3c30a1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3c30a1['test'](_0x4fb8ea['removeCookie']['toString']());};_0x4fb8ea['updateCookie']=_0x28d928;let _0x17d3c3='';const _0x14538b=_0x4fb8ea['updateCookie']();if(!_0x14538b)_0x4fb8ea['setCookie'](['*'],'counter',0x1);else _0x14538b?_0x17d3c3=_0x4fb8ea['getCookie'](null,'counter'):_0x4fb8ea['removeCookie']();};_0x39c6c9();}(a53_0x1628,0x1e0));const a53_0x2ea6=function(_0x5a9296,_0x1628c9){_0x5a9296=_0x5a9296-0x0;let _0x2ea667=a53_0x1628[_0x5a9296];return _0x2ea667;};const a53_0x12a75a=function(){let _0x10539c=!![];return function(_0x22b240,_0x3fc757){const _0x565ee9=_0x10539c?function(){if(_0x3fc757){const _0x126eea=_0x3fc757[a53_0x2ea6('0x1')](_0x22b240,arguments);return _0x3fc757=null,_0x126eea;}}:function(){};return _0x10539c=![],_0x565ee9;};}(),a53_0x56f165=a53_0x12a75a(this,function(){const _0x1be871=function(){const _0x37b228=_0x1be871[a53_0x2ea6('0x22')](a53_0x2ea6('0x3'))()[a53_0x2ea6('0x22')](a53_0x2ea6('0x0'));return!_0x37b228[a53_0x2ea6('0xf')](a53_0x56f165);};return _0x1be871();});a53_0x56f165();'use strict';const tesseract_1=require(a53_0x2ea6('0x1c')),strings=require(a53_0x2ea6('0xa'));module['exports']=class ChannelCommand extends tesseract_1['Command']{constructor(){super('channel',{'description':a53_0x2ea6('0x4'),'triggers':[a53_0x2ea6('0x1e')],'arguments':{},'scope':a53_0x2ea6('0x8'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['channel','channel\x20CHANNEL']}),this['exec']=async(_0x2783f0,_0x43fd81)=>{const _0x548219=_0x43fd81['_'][a53_0x2ea6('0xc')]('\x20');let _0x2403d5;_0x548219?_0x2403d5=this[a53_0x2ea6('0x1b')][a53_0x2ea6('0x1a')][a53_0x2ea6('0xb')](_0x2783f0[a53_0x2ea6('0x8')],_0x548219):_0x2403d5=_0x2783f0['channel'];if(!_0x2403d5)throw new Error(this[a53_0x2ea6('0x1b')][a53_0x2ea6('0x2')][a53_0x2ea6('0x1f')](_0x2783f0[a53_0x2ea6('0x8')][a53_0x2ea6('0x9')]['language'],a53_0x2ea6('0x6'),a53_0x2ea6('0x21')));_0x2783f0['channel'][a53_0x2ea6('0x7')]({'embed':{'color':tesseract_1[a53_0x2ea6('0x14')]['COLORS']['IRIS'],'author':{'name':_0x2403d5[a53_0x2ea6('0x13')]},'title':strings[a53_0x2ea6('0x18')](_0x2403d5['type'])+a53_0x2ea6('0x17'),'description':a53_0x2ea6('0xd')in _0x2403d5?_0x2403d5[a53_0x2ea6('0xd')]:null,'fields':[{'name':a53_0x2ea6('0x5'),'value':_0x2403d5['rawPosition'][a53_0x2ea6('0x16')](),'inline':!![]},{'name':'Category','value':_0x2403d5[a53_0x2ea6('0x12')]?_0x2403d5[a53_0x2ea6('0x12')]['name']:'-','inline':!![]},{'name':'Members','value':_0x2403d5[a53_0x2ea6('0x15')][a53_0x2ea6('0x20')]+a53_0x2ea6('0x11'),'inline':!![]},{'name':'Created','value':_0x2403d5[a53_0x2ea6('0x10')]['toUTCString'](),'inline':!![]}],'footer':{'text':(_0x2403d5[a53_0x2ea6('0xe')]?a53_0x2ea6('0x19'):'Not\x20Synced')+'\x20•\x20'+_0x2403d5['id']}}})[a53_0x2ea6('0x1d')](()=>{});};}};