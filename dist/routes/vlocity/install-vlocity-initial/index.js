function a32_0x4a67(_0xcb3db5,_0x2c4893){const _0x193544=a32_0x1935();return a32_0x4a67=function(_0x4a674b,_0x2ecea0){_0x4a674b=_0x4a674b-0xcf;let _0x11b43b=_0x193544[_0x4a674b];return _0x11b43b;},a32_0x4a67(_0xcb3db5,_0x2c4893);}const a32_0x247938=a32_0x4a67;(function(_0x13c57d,_0x3b81dd){const _0x120773=a32_0x4a67,_0x3327fb=_0x13c57d();while(!![]){try{const _0xcf4824=parseInt(_0x120773(0xd2))/0x1*(-parseInt(_0x120773(0xde))/0x2)+parseInt(_0x120773(0xe2))/0x3+parseInt(_0x120773(0xe9))/0x4*(-parseInt(_0x120773(0xe7))/0x5)+-parseInt(_0x120773(0xd1))/0x6+parseInt(_0x120773(0xd6))/0x7*(parseInt(_0x120773(0xdd))/0x8)+parseInt(_0x120773(0xe3))/0x9*(parseInt(_0x120773(0xe0))/0xa)+parseInt(_0x120773(0xe5))/0xb;if(_0xcf4824===_0x3b81dd)break;else _0x3327fb['push'](_0x3327fb['shift']());}catch(_0x3bb784){_0x3327fb['push'](_0x3327fb['shift']());}}}(a32_0x1935,0x8fbc4));const {Router}=require(a32_0x247938(0xe6)),logger=require(a32_0x247938(0xd7)),constants=require(a32_0x247938(0xd9)),controller=require(a32_0x247938(0xe8)),utils=require('../../../services/utils'),router=new Router();function a32_0x1935(){const _0x25f768=['log','x-request-id','status','2551312qjvKZQ','4190BMsNcV','body','151630xnHYbC','headers','3080484xSlZGf','90tNfGFQ','REQUIRED_FIELDS_ERROR','10233553yxLVMj','express','3745tycvwg','./controller','5312UbkcTZ','post','createLog','checkRequiredFields','1561512ccLAJQ','431aAItZE','installVlocityInitial','START_INSTALL_VLOCITY_INITIAL','send','14auDnsQ','../../../services/logger','exports','../../../constants'];a32_0x1935=function(){return _0x25f768;};return a32_0x1935();}router[a32_0x247938(0xea)]('/',(_0x39ec97,_0x17e99d)=>{const _0x2bb188=a32_0x247938,_0x23e718=logger[_0x2bb188(0xcf)]('vlocity:install-vlocity-initial:'+_0x39ec97[_0x2bb188(0xe1)][_0x2bb188(0xdb)]);_0x23e718[_0x2bb188(0xda)](constants[_0x2bb188(0xd4)]);const _0x4ceef2=utils[_0x2bb188(0xd0)](_0x39ec97['body'],constants['REQUIRED_FIELDS_CLEAN_ORG_DATA']);if(_0x4ceef2['length']){_0x23e718[_0x2bb188(0xda)](constants[_0x2bb188(0xe4)]);const _0x350ad6={'status':constants['ERROR'],'error':{'message':constants['REQUIRED_FIELDS_ERROR'],'missingFields':_0x4ceef2}};return _0x23e718[_0x2bb188(0xda)](_0x350ad6),_0x17e99d['status'](0x190)[_0x2bb188(0xd5)](_0x350ad6);}return controller[_0x2bb188(0xd3)](_0x39ec97[_0x2bb188(0xdf)],_0x23e718)['catch'](_0x2c9a9f=>_0x23e718[_0x2bb188(0xda)](_0x2c9a9f)),_0x17e99d[_0x2bb188(0xdc)](0xc8)[_0x2bb188(0xd5)]('The\x20process\x20of\x20install\x20Vlocity\x20Initial\x20started.');}),module[a32_0x247938(0xd8)]=router;