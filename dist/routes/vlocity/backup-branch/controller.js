const a9_0x5c52eb=a9_0x3585;function a9_0x2d53(){const _0x4672ee=['2277149tTWhcv','exports','getTime','2324KDOXkV','880591uaSeQL','then','catch','createJobFileRollback','prepareDataForDeploy','2zVrIKv','attachLogId','pipelineKey','componentsMap','7344128Dpsxvx','vlocityNameSpacePrefix','checkExistComponents','vlocityUrl','6pDhZnw','../../../services/storage','nameSpacePrefix','parse','217863WWLrTN','vlocityToken','snapshotType','3415MEEbmD','45kARlSa','join','logId','599504YqkOWs','createProjectDirectory','../../../services/http','resolve','timestamp','handleNoComponents','callContinuePipelineVlocityDeploy','8271890DEIeav','log','flosumUrl','branchId','pipelineId'];a9_0x2d53=function(){return _0x4672ee;};return a9_0x2d53();}(function(_0x4fe357,_0x4627ff){const _0x1e8347=a9_0x3585,_0x25cbe8=_0x4fe357();while(!![]){try{const _0x3f8547=-parseInt(_0x1e8347(0x183))/0x1*(-parseInt(_0x1e8347(0x160))/0x2)+parseInt(_0x1e8347(0x16c))/0x3+parseInt(_0x1e8347(0x182))/0x4*(parseInt(_0x1e8347(0x16f))/0x5)+parseInt(_0x1e8347(0x168))/0x6*(-parseInt(_0x1e8347(0x17f))/0x7)+parseInt(_0x1e8347(0x173))/0x8*(-parseInt(_0x1e8347(0x170))/0x9)+-parseInt(_0x1e8347(0x17a))/0xa+parseInt(_0x1e8347(0x164))/0xb;if(_0x3f8547===_0x4627ff)break;else _0x25cbe8['push'](_0x25cbe8['shift']());}catch(_0x2579d3){_0x25cbe8['push'](_0x25cbe8['shift']());}}}(a9_0x2d53,0x77c01));const helper=require('./helper'),storage=require(a9_0x5c52eb(0x169)),http=require(a9_0x5c52eb(0x175)),path=require('path'),{pathConfig}=require('../../../config/path');function a9_0x3585(_0x31c207,_0x401a68){const _0x2d5325=a9_0x2d53();return a9_0x3585=function(_0x358558,_0x18244f){_0x358558=_0x358558-0x160;let _0x2c2a26=_0x2d5325[_0x358558];return _0x2c2a26;},a9_0x3585(_0x31c207,_0x401a68);}function backupBranch(_0x43f56b,_0x432397){return new Promise((_0x513ea3,_0x4bd674)=>{const _0x2e1fb8=a9_0x3585;try{console[_0x2e1fb8(0x17b)](_0x43f56b);const _0x21fa2d=_0x43f56b[_0x2e1fb8(0x17c)],_0x25d5b5=_0x43f56b['flosumToken'],_0x271bc4=_0x43f56b[_0x2e1fb8(0x167)],_0x7e1109=_0x43f56b[_0x2e1fb8(0x16d)],_0x306278=_0x43f56b[_0x2e1fb8(0x172)],_0x36620b=_0x43f56b[_0x2e1fb8(0x177)],_0x4f3b32=_0x43f56b[_0x2e1fb8(0x16a)],_0x4f2b59=_0x43f56b[_0x2e1fb8(0x165)],_0x326060=_0x43f56b[_0x2e1fb8(0x161)],_0x3719b8=JSON[_0x2e1fb8(0x16b)](_0x43f56b[_0x2e1fb8(0x163)]),_0x4968ae=_0x43f56b[_0x2e1fb8(0x17e)],_0x1fb4b8=_0x43f56b[_0x2e1fb8(0x17d)],_0x5d4cd3=_0x43f56b['pipelineNumber'],_0x43b400=_0x43f56b[_0x2e1fb8(0x162)],_0x14d967=_0x43f56b[_0x2e1fb8(0x16e)]+'_'+_0x36620b+'_'+_0x43f56b[_0x2e1fb8(0x172)],_0x13a509=path[_0x2e1fb8(0x171)](pathConfig['tmpPath'],_0x14d967);Promise[_0x2e1fb8(0x176)]()[_0x2e1fb8(0x184)](()=>storage[_0x2e1fb8(0x174)](_0x13a509))['then'](()=>helper[_0x2e1fb8(0x186)](_0x13a509,_0x3719b8,_0x4f2b59,_0x432397))[_0x2e1fb8(0x184)](()=>helper['retrieveData'](_0x13a509,_0x271bc4,_0x7e1109,_0x432397))[_0x2e1fb8(0x184)](()=>storage[_0x2e1fb8(0x166)](_0x13a509,_0x432397))[_0x2e1fb8(0x184)](_0x2d8162=>{const _0x53fbcc=_0x2e1fb8;return _0x2d8162?helper[_0x53fbcc(0x187)](_0x13a509,_0x432397)[_0x53fbcc(0x184)](_0x4d0184=>helper['deployData'](_0x21fa2d,_0x25d5b5,_0x4f3b32,_0x306278,_0x4d0184,_0x4968ae,_0x5d4cd3,_0x1fb4b8,_0x432397)):helper[_0x53fbcc(0x178)](_0x21fa2d,_0x25d5b5,_0x4f3b32,_0x306278,_0x4968ae,_0x5d4cd3,_0x1fb4b8,_0x432397);})[_0x2e1fb8(0x184)](()=>{const _0x43d15c=_0x2e1fb8;return _0x4968ae&&_0x43b400&&_0x5d4cd3?helper[_0x43d15c(0x179)](_0x21fa2d,_0x25d5b5,_0x4f3b32,_0x4968ae,_0x5d4cd3,_0x43b400,_0x1fb4b8,_0x306278,_0x432397):Promise[_0x43d15c(0x176)]();})[_0x2e1fb8(0x185)](_0x1c4626=>{const _0x4f5a53=_0x2e1fb8;http['callUpdateInfo'](_0x21fa2d,_0x25d5b5,_0x306278,_0x4f3b32,_0x326060,'Completed\x20Date:\x20'+helper[_0x4f5a53(0x181)]()+'\x0a',![],_0x432397,!![]),_0x4bd674(_0x1c4626);})[_0x2e1fb8(0x184)](()=>storage['removeProject'](_0x13a509,_0x432397));}catch(_0x555c23){_0x4bd674(_0x555c23);}});}module[a9_0x5c52eb(0x180)]={'backupBranch':backupBranch};