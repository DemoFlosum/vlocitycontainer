const a33_0x540913=a33_0x4e83;function a33_0x4e83(_0x1be56a,_0x573866){const _0x1c6f6b=a33_0x1c6f();return a33_0x4e83=function(_0x4e83e6,_0x33fe54){_0x4e83e6=_0x4e83e6-0x15e;let _0x5d483e=_0x1c6f6b[_0x4e83e6];return _0x5d483e;},a33_0x4e83(_0x1be56a,_0x573866);}(function(_0x3cf797,_0x489c31){const _0x162dc0=a33_0x4e83,_0x1e6705=_0x3cf797();while(!![]){try{const _0x26b715=parseInt(_0x162dc0(0x171))/0x1*(-parseInt(_0x162dc0(0x15e))/0x2)+-parseInt(_0x162dc0(0x15f))/0x3+parseInt(_0x162dc0(0x16e))/0x4*(-parseInt(_0x162dc0(0x16b))/0x5)+-parseInt(_0x162dc0(0x162))/0x6*(-parseInt(_0x162dc0(0x170))/0x7)+parseInt(_0x162dc0(0x173))/0x8+parseInt(_0x162dc0(0x179))/0x9+-parseInt(_0x162dc0(0x176))/0xa;if(_0x26b715===_0x489c31)break;else _0x1e6705['push'](_0x1e6705['shift']());}catch(_0x4336bc){_0x1e6705['push'](_0x1e6705['shift']());}}}(a33_0x1c6f,0x9ec4d));const {Router}=require(a33_0x540913(0x169)),logger=require(a33_0x540913(0x163)),constants=require('../../../constants'),controller=require(a33_0x540913(0x168)),utils=require(a33_0x540913(0x165)),router=new Router();function a33_0x1c6f(){const _0x7b0452=['5857075naFRns','5BTkjwB','REQUIRED_FIELDS_ERROR','10045248GKYNVz','x-request-id','ERROR','11534840lCLWQc','checkRequiredFields','body','6726708mqoQkh','175834jfgDpA','955911KzzGNs','status','log','6BwTPTr','../../../services/logger','retrieve','../../../services/utils','createLog','send','./controller','express','vlocity:retrieve:','9850KWhJLT','catch','REQUIRED_FIELDS_RETRIEVE','564TLXYEv','REQUIRED_OBJECT_FIELDS_RETRIEVE'];a33_0x1c6f=function(){return _0x7b0452;};return a33_0x1c6f();}router['post']('/',(_0xf6789e,_0x106068)=>{const _0x36a093=a33_0x540913,_0x1eb3b9=logger[_0x36a093(0x166)](_0x36a093(0x16a)+_0xf6789e['headers'][_0x36a093(0x174)]),_0x4ff419=utils[_0x36a093(0x177)](_0xf6789e[_0x36a093(0x178)],constants[_0x36a093(0x16d)],constants[_0x36a093(0x16f)]);if(_0x4ff419['length']){_0x1eb3b9[_0x36a093(0x161)](constants[_0x36a093(0x172)]);const _0x42c3e6={'status':constants[_0x36a093(0x175)],'error':{'message':constants[_0x36a093(0x172)],'missingFields':_0x4ff419}};return _0x1eb3b9[_0x36a093(0x161)](_0x42c3e6),_0x106068[_0x36a093(0x160)](0x190)['send'](_0x42c3e6);}return controller[_0x36a093(0x164)](_0xf6789e[_0x36a093(0x178)],_0x1eb3b9)[_0x36a093(0x16c)](_0xd615b0=>_0x1eb3b9[_0x36a093(0x161)](_0xd615b0)),_0x106068[_0x36a093(0x160)](0xc8)[_0x36a093(0x167)]('The\x20process\x20of\x20retrieve\x20started.');}),module['exports']=router;