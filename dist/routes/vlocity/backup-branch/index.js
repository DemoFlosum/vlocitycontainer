function a15_0xee8d(_0x25a07c,_0x185d97){const _0x46c3d7=a15_0x46c3();return a15_0xee8d=function(_0xee8dee,_0x4be7eb){_0xee8dee=_0xee8dee-0x110;let _0x1db38c=_0x46c3d7[_0xee8dee];return _0x1db38c;},a15_0xee8d(_0x25a07c,_0x185d97);}const a15_0x3c0bae=a15_0xee8d;(function(_0x218fd4,_0x568415){const _0x39e80d=a15_0xee8d,_0x125526=_0x218fd4();while(!![]){try{const _0x4ea09=parseInt(_0x39e80d(0x112))/0x1+-parseInt(_0x39e80d(0x126))/0x2+parseInt(_0x39e80d(0x113))/0x3+parseInt(_0x39e80d(0x121))/0x4*(-parseInt(_0x39e80d(0x114))/0x5)+-parseInt(_0x39e80d(0x120))/0x6+-parseInt(_0x39e80d(0x123))/0x7+parseInt(_0x39e80d(0x11c))/0x8;if(_0x4ea09===_0x568415)break;else _0x125526['push'](_0x125526['shift']());}catch(_0x4030c6){_0x125526['push'](_0x125526['shift']());}}}(a15_0x46c3,0xcef60));const {Router}=require(a15_0x3c0bae(0x12c)),logger=require(a15_0x3c0bae(0x12a)),constants=require(a15_0x3c0bae(0x11f)),controller=require(a15_0x3c0bae(0x11a)),utils=require('../../../services/utils'),router=new Router();function a15_0x46c3(){const _0x20eb1b=['ERROR','createLog','body','./controller','x-request-id','9503904TyeSOC','status','vlocity:backup-branch:','../../../constants','1766430DVeBkt','4ZzvrtZ','exports','1194403VpTHAD','catch','send','2294182ItbSSD','length','log','headers','../../../services/logger','The\x20process\x20of\x20retrieve\x20started.','express','START_BACKUP_BRANCH','REQUIRED_FIELDS_ERROR','313773ezjlkK','3012429kUUREv','230335CSXhVx','post','checkRequiredFields'];a15_0x46c3=function(){return _0x20eb1b;};return a15_0x46c3();}router[a15_0x3c0bae(0x115)]('/',(_0x5a124f,_0x2431e2)=>{const _0x189e8a=a15_0x3c0bae,_0x1caaac=logger[_0x189e8a(0x118)](_0x189e8a(0x11e)+_0x5a124f[_0x189e8a(0x129)][_0x189e8a(0x11b)]);_0x1caaac[_0x189e8a(0x128)](constants[_0x189e8a(0x110)]);const _0x2b912f=utils[_0x189e8a(0x116)](_0x5a124f[_0x189e8a(0x119)],constants['REQUIRED_FIELDS_BACKUP']);if(_0x2b912f[_0x189e8a(0x127)]){_0x1caaac['log'](constants[_0x189e8a(0x111)]);const _0x426fb8={'status':constants[_0x189e8a(0x117)],'error':{'message':constants[_0x189e8a(0x111)],'missingFields':_0x2b912f}};return _0x1caaac[_0x189e8a(0x128)](_0x426fb8),_0x2431e2['status'](0x190)['send'](_0x426fb8);}return controller['backupBranch'](_0x5a124f['body'],_0x1caaac)[_0x189e8a(0x124)](_0x54d6d7=>_0x1caaac['log'](_0x54d6d7)),_0x2431e2[_0x189e8a(0x11d)](0xc8)[_0x189e8a(0x125)](_0x189e8a(0x12b));}),module[a15_0x3c0bae(0x122)]=router;