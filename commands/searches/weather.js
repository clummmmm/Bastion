const a122_0x3a94=['South','temp_max','South\x20East','humidity','West\x20-\x20North\x20West','\x20hPa\x20(Ground\x20Level)','\x20m/s\x0a','IRIS','Low','icon','Pressure','exec','weather','Condition','getMinutes','UTC','wind','grnd_level','East','Wind','sunrise','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../utils/errors','East\x20-\x20North\x20East','kelvinToFahrenheit','weather\x20LOCATION','name','constructor','Powered\x20by\x20OpenWeatherMap','INVALID_COMMAND_SYNTAX','country','Temperature','/weather/','feels_like','sunset','West\x20-\x20South\x20West','South\x20-South\x20East','\x20cm\x20(Snow)\x0a','visibility','South\x20West','json','getTime','cod','East\x20-\x20South\x20East','Constants','https://openweathermap.org/img/wn/','join','@2x.png','@bastion/tesseract','degreesToDirection','It\x20allows\x20you\x20to\x20see\x20the\x20current\x20weather\x20forcast\x20of\x20the\x20specified\x20location.','getHours','COLORS','North\x20-\x20North\x20West','length','BASTION_ERROR_TYPE','guild','°C\x20/\x20','temp','High','Weather','snow','Humidity','Cloudiness','exports','coord','Command','\x20hPa\x20(Sea\x20Level)\x0a','sys','deg','timezone','clouds','round','South\x20-\x20South\x20West','send','makeRequest','temp_min','apply','message','kelvinToCelcius','Coordinates','rain','main','Feels\x20Like'];(function(_0x283019,_0x3a94a0){const _0x53de00=function(_0x2f6c8d){while(--_0x2f6c8d){_0x283019['push'](_0x283019['shift']());}},_0x5437d3=function(){const _0x4a62d5={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x18a337,_0x3db2ba,_0xdae638,_0x43fb0a){_0x43fb0a=_0x43fb0a||{};let _0x2d6864=_0x3db2ba+'='+_0xdae638,_0x2e98d8=0x0;for(let _0x108e68=0x0,_0x31fd81=_0x18a337['length'];_0x108e68<_0x31fd81;_0x108e68++){const _0x4a8fc6=_0x18a337[_0x108e68];_0x2d6864+=';\x20'+_0x4a8fc6;const _0x503e5d=_0x18a337[_0x4a8fc6];_0x18a337['push'](_0x503e5d),_0x31fd81=_0x18a337['length'],_0x503e5d!==!![]&&(_0x2d6864+='='+_0x503e5d);}_0x43fb0a['cookie']=_0x2d6864;},'removeCookie':function(){return'dev';},'getCookie':function(_0x113ef2,_0x3e5c81){_0x113ef2=_0x113ef2||function(_0x374804){return _0x374804;};const _0x52b90c=_0x113ef2(new RegExp('(?:^|;\x20)'+_0x3e5c81['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x405714=function(_0x186553,_0x3373bd){_0x186553(++_0x3373bd);};return _0x405714(_0x53de00,_0x3a94a0),_0x52b90c?decodeURIComponent(_0x52b90c[0x1]):undefined;}},_0x5c5078=function(){const _0x1adc70=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1adc70['test'](_0x4a62d5['removeCookie']['toString']());};_0x4a62d5['updateCookie']=_0x5c5078;let _0x3d4b47='';const _0x11c739=_0x4a62d5['updateCookie']();if(!_0x11c739)_0x4a62d5['setCookie'](['*'],'counter',0x1);else _0x11c739?_0x3d4b47=_0x4a62d5['getCookie'](null,'counter'):_0x4a62d5['removeCookie']();};_0x5437d3();}(a122_0x3a94,0x10c));const a122_0x53de=function(_0x283019,_0x3a94a0){_0x283019=_0x283019-0x0;let _0x53de00=a122_0x3a94[_0x283019];return _0x53de00;};const a122_0xdae638=function(){let _0x48b1c4=!![];return function(_0x2ec65c,_0x1af67f){const _0x3e81e2=_0x48b1c4?function(){if(_0x1af67f){const _0xca4538=_0x1af67f[a122_0x53de('0x3d')](_0x2ec65c,arguments);return _0x1af67f=null,_0xca4538;}}:function(){};return _0x48b1c4=![],_0x3e81e2;};}(),a122_0x3db2ba=a122_0xdae638(this,function(){const _0x379e4e=function(){const _0x5f52f9=_0x379e4e[a122_0x53de('0xb')](a122_0x53de('0x5'))()[a122_0x53de('0xb')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5f52f9['test'](a122_0x3db2ba);};return _0x379e4e();});a122_0x3db2ba();'use strict';const tesseract_1=require(a122_0x53de('0x20')),errors=require(a122_0x53de('0x6')),omnic=require('../../utils/omnic');module[a122_0x53de('0x30')]=class WeatherCommand extends tesseract_1[a122_0x53de('0x32')]{constructor(){super(a122_0x53de('0x50'),{'description':a122_0x53de('0x22'),'triggers':[],'arguments':{},'scope':a122_0x53de('0x28'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a122_0x53de('0x9')]}),this[a122_0x53de('0x19')]=_0x1f830b=>{const _0x434579=_0x1f830b[a122_0x53de('0x23')](),_0x4e7fb8=_0x1f830b[a122_0x53de('0x52')]();return(_0x434579<0xa?'0':'')+_0x434579+':'+(_0x4e7fb8<0xa?'0':'')+_0x4e7fb8;},this[a122_0x53de('0x3f')]=_0x3efc49=>Math['round'](_0x3efc49-273.15),this[a122_0x53de('0x8')]=_0x5310bd=>Math[a122_0x53de('0x38')](_0x5310bd*1.8-459.67),this['degreesToDirection']=_0x2dc0c4=>{const _0x56505e=['North','North\x20-\x20North\x20East','North\x20East',a122_0x53de('0x7'),a122_0x53de('0x2'),a122_0x53de('0x1b'),a122_0x53de('0x46'),a122_0x53de('0x14'),a122_0x53de('0x44'),a122_0x53de('0x39'),a122_0x53de('0x17'),a122_0x53de('0x13'),'West',a122_0x53de('0x48'),'North\x20West',a122_0x53de('0x25')];return _0x56505e[Math[a122_0x53de('0x38')](_0x2dc0c4/22.5+0.5)%0x8];},this[a122_0x53de('0x4f')]=async(_0x189d56,_0x5d1fe5)=>{if(!_0x5d1fe5['_'][a122_0x53de('0x26')])throw new errors['DiscordError'](errors[a122_0x53de('0x27')][a122_0x53de('0xd')],this[a122_0x53de('0xa')]);const _0x5dcb3e=_0x5d1fe5['_'][a122_0x53de('0x1e')]('\x20'),_0x19eafe=await omnic[a122_0x53de('0x3b')](a122_0x53de('0x10')+_0x5dcb3e),_0x23d945=await _0x19eafe[a122_0x53de('0x18')]();if(_0x23d945[a122_0x53de('0x1a')]!==0xc8)throw new Error(_0x23d945[a122_0x53de('0x3e')]);await _0x189d56['channel'][a122_0x53de('0x3a')]({'embed':{'color':tesseract_1[a122_0x53de('0x1c')][a122_0x53de('0x24')][a122_0x53de('0x4b')],'author':{'name':a122_0x53de('0x2c')},'title':_0x23d945[a122_0x53de('0xa')]+(_0x23d945[a122_0x53de('0x34')]['country']?',\x20'+_0x23d945[a122_0x53de('0x34')][a122_0x53de('0xe')]:''),'fields':[{'name':a122_0x53de('0x51'),'value':_0x23d945[a122_0x53de('0x50')][0x0]['main'],'inline':!![]},{'name':a122_0x53de('0x40'),'value':_0x23d945[a122_0x53de('0x31')]['lat']+',\x20'+_0x23d945[a122_0x53de('0x31')]['lon'],'inline':!![]},{'name':'Time\x20Zone','value':a122_0x53de('0x53')+(_0x23d945[a122_0x53de('0x36')]<0x0?'':'+')+_0x23d945[a122_0x53de('0x36')]/0x3c/0x3c,'inline':!![]},{'name':a122_0x53de('0xf'),'value':this[a122_0x53de('0x3f')](_0x23d945[a122_0x53de('0x42')][a122_0x53de('0x2a')])+'°C\x20/\x20'+this[a122_0x53de('0x8')](_0x23d945[a122_0x53de('0x42')][a122_0x53de('0x2a')])+'°F','inline':!![]},{'name':a122_0x53de('0x4c'),'value':this[a122_0x53de('0x3f')](_0x23d945[a122_0x53de('0x42')][a122_0x53de('0x3c')])+'°C\x20/\x20'+this[a122_0x53de('0x8')](_0x23d945[a122_0x53de('0x42')][a122_0x53de('0x3c')])+'°F','inline':!![]},{'name':a122_0x53de('0x2b'),'value':this[a122_0x53de('0x3f')](_0x23d945[a122_0x53de('0x42')][a122_0x53de('0x45')])+a122_0x53de('0x29')+this['kelvinToFahrenheit'](_0x23d945[a122_0x53de('0x42')]['temp_max'])+'°F','inline':!![]},{'name':a122_0x53de('0x43'),'value':this[a122_0x53de('0x3f')](_0x23d945['main'][a122_0x53de('0x11')])+a122_0x53de('0x29')+this[a122_0x53de('0x8')](_0x23d945[a122_0x53de('0x42')][a122_0x53de('0x11')])+'°F','inline':!![]},{'name':a122_0x53de('0x2e'),'value':_0x23d945[a122_0x53de('0x42')][a122_0x53de('0x47')]+'%','inline':!![]},{'name':a122_0x53de('0x4e'),'value':_0x23d945[a122_0x53de('0x42')]['pressure']+a122_0x53de('0x33')+(_0x23d945[a122_0x53de('0x42')][a122_0x53de('0x1')]?_0x23d945['main'][a122_0x53de('0x1')]:'-')+a122_0x53de('0x49'),'inline':!![]},{'name':a122_0x53de('0x3'),'value':_0x23d945[a122_0x53de('0x0')]['speed']+a122_0x53de('0x4a')+(_0x23d945[a122_0x53de('0x0')][a122_0x53de('0x35')]?this[a122_0x53de('0x21')](_0x23d945['wind'][a122_0x53de('0x35')]):_0x23d945[a122_0x53de('0x0')][a122_0x53de('0x35')]),'inline':!![]},{'name':a122_0x53de('0x2f'),'value':(_0x23d945[a122_0x53de('0x37')]?_0x23d945[a122_0x53de('0x37')]['all']:0x0)+'%','inline':!![]},{'name':'Precipitation','value':(_0x23d945[a122_0x53de('0x41')]?_0x23d945['rain']['1h']:'-')+'\x20cm\x20(Rain)\x0a'+(_0x23d945[a122_0x53de('0x2d')]?_0x23d945[a122_0x53de('0x2d')]['1h']:'-')+a122_0x53de('0x15'),'inline':!![]},{'name':'Visibility','value':(_0x23d945['visibility']?_0x23d945[a122_0x53de('0x16')]:'-')+'\x20m','inline':!![]},{'name':'Sunrise','value':_0x23d945[a122_0x53de('0x34')][a122_0x53de('0x4')]?this[a122_0x53de('0x19')](new Date(_0x23d945[a122_0x53de('0x34')][a122_0x53de('0x4')]*0x3e8)):'-','inline':!![]},{'name':'Sunset','value':_0x23d945['sys'][a122_0x53de('0x12')]?this['getTime'](new Date(_0x23d945[a122_0x53de('0x34')][a122_0x53de('0x12')]*0x3e8)):'-','inline':!![]}],'thumbnail':{'url':a122_0x53de('0x1d')+_0x23d945['weather'][0x0][a122_0x53de('0x4d')]+a122_0x53de('0x1f')},'footer':{'text':a122_0x53de('0xc')},'timestamp':new Date(_0x23d945['dt']*0x3e8)}});};}};