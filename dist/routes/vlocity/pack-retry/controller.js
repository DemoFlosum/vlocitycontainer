const a28_0x30f2ad=a28_0x10aa;(function(_0x195450,_0x320210){const _0x317675=a28_0x10aa,_0x137ce2=_0x195450();while(!![]){try{const _0x5c0f8c=-parseInt(_0x317675(0x10a))/0x1+parseInt(_0x317675(0x10f))/0x2+-parseInt(_0x317675(0x103))/0x3*(parseInt(_0x317675(0x109))/0x4)+parseInt(_0x317675(0xf6))/0x5*(-parseInt(_0x317675(0xff))/0x6)+-parseInt(_0x317675(0x111))/0x7*(-parseInt(_0x317675(0x100))/0x8)+parseInt(_0x317675(0xf4))/0x9*(-parseInt(_0x317675(0xfc))/0xa)+parseInt(_0x317675(0x110))/0xb*(parseInt(_0x317675(0xfa))/0xc);if(_0x5c0f8c===_0x320210)break;else _0x137ce2['push'](_0x137ce2['shift']());}catch(_0x26d1ae){_0x137ce2['push'](_0x137ce2['shift']());}}}(a28_0x64d7,0xb944c));const jsForce=require('jsforce'),storage=require(a28_0x30f2ad(0x105)),helper=require(a28_0x30f2ad(0xf0)),http=require('../../../services/http'),{RetrieveHelper}=require(a28_0x30f2ad(0xf9)),path=require(a28_0x30f2ad(0x116)),{pathConfig}=require(a28_0x30f2ad(0x10e));function a28_0x10aa(_0x59ebef,_0x1483a5){const _0x64d7fd=a28_0x64d7();return a28_0x10aa=function(_0x10aa54,_0x710cc8){_0x10aa54=_0x10aa54-0xee;let _0x1ba49d=_0x64d7fd[_0x10aa54];return _0x1ba49d;},a28_0x10aa(_0x59ebef,_0x1483a5);}function packRetry(_0x3dd941,_0x466168){return new Promise((_0x223d26,_0x385f95)=>{const _0xb4c894=a28_0x10aa,_0x34ae4a=JSON['parse'](JSON['stringify'](_0x3dd941));_0x34ae4a['vlocityTempZip']=_0xb4c894(0xfd),console[_0xb4c894(0xef)](_0xb4c894(0x114)),console['log'](_0x34ae4a);const _0x380340=_0x3dd941[_0xb4c894(0xee)],_0x4b95ea=_0x3dd941[_0xb4c894(0x113)],_0x29e6a8=_0x3dd941['vlocityUrl'],_0x43287d=_0x3dd941['vlocityToken'],_0x2d9ef9=_0x3dd941[_0xb4c894(0xfb)],_0x45f86e=_0x3dd941['attachLogId'],_0x528f08=_0x3dd941[_0xb4c894(0x10c)],_0x5b6eb1=_0x3dd941[_0xb4c894(0x106)],_0x3ebc86=_0x3dd941[_0xb4c894(0x112)],_0x181fa8=_0x3dd941[_0xb4c894(0x101)];let _0x57aed5=![],_0x266a5d;_0x3dd941[_0xb4c894(0xf1)]||_0x3dd941['vlocityTempAttachmentId']?_0x266a5d=_0x3ebc86+'_'+_0x528f08+'_'+_0x45f86e:(_0x57aed5=!![],_0x266a5d=_0x3dd941['projectName']);const _0x180362=path['join'](pathConfig[_0xb4c894(0x10d)],_0x266a5d),_0x249372=new RetrieveHelper(_0x180362,{'snapshotId':_0x181fa8,'nameSpacePrefix':_0x5b6eb1,'logId':_0x2d9ef9,'attachLogId':_0x45f86e,'authFlosum':{'instanceUrl':_0x380340,'accessToken':_0x4b95ea},'authVlosityOrg':{'instanceUrl':_0x29e6a8,'accessToken':_0x43287d},'selectedDataPackTypes':'[]'},_0x466168),_0x3fda76=new jsForce[(_0xb4c894(0x104))]({'instanceUrl':_0x380340,'accessToken':_0x4b95ea});Promise[_0xb4c894(0x107)]()['then'](()=>{const _0x3c19ef=_0xb4c894;let _0x27eaaf=Promise[_0x3c19ef(0x107)]();return!_0x57aed5&&(_0x27eaaf=_0x27eaaf[_0x3c19ef(0xf5)](()=>storage[_0x3c19ef(0x10b)](_0x180362)),_0x3dd941[_0x3c19ef(0xf1)]?_0x27eaaf=_0x27eaaf['then'](()=>helper[_0x3c19ef(0x102)](_0x180362,_0x3dd941[_0x3c19ef(0xf1)],_0x466168)):_0x27eaaf=_0x27eaaf[_0x3c19ef(0xf5)](()=>http[_0x3c19ef(0x115)](_0x3fda76,_0x3dd941['vlocityTempAttachmentId'],_0x466168,![]))[_0x3c19ef(0xf5)](_0x1d714e=>helper[_0x3c19ef(0x102)](_0x180362,_0x1d714e,_0x466168))),_0x27eaaf;})[_0xb4c894(0xf5)](()=>helper[_0xb4c894(0xf2)](_0x180362,_0x29e6a8,_0x43287d,_0x3fda76,_0x45f86e,_0x466168))['then'](()=>helper[_0xb4c894(0xfe)](_0x180362,_0x466168))['then'](_0x30ddaa=>{const _0x54e4a7=_0xb4c894;if(_0x30ddaa)return _0x249372[_0x54e4a7(0xf7)]()[_0x54e4a7(0xf5)](_0xc2b3f3=>_0x249372['deployComponents'](_0xc2b3f3));return Promise[_0x54e4a7(0x107)]();})[_0xb4c894(0xf5)](()=>{const _0x5d2e9d=_0xb4c894;if(_0x57aed5)_0x223d26();else return Promise[_0x5d2e9d(0x107)]()['then'](()=>_0x249372['completeDeployment'](!![]))['catch'](_0x55d043=>{const _0x538d42=_0x5d2e9d;_0x249372[_0x538d42(0x108)](!![],!![])['then'](()=>_0x385f95(_0x55d043))[_0x538d42(0xf8)](_0x443035=>_0x385f95(_0x55d043+'\x0a'+_0x443035));})[_0x5d2e9d(0xf5)](()=>storage[_0x5d2e9d(0xf3)](_0x180362,_0x466168));});});}module['exports']={'packRetry':packRetry};function a28_0x64d7(){const _0x2ab4b2=['getAttachmentBody','path','flosumUrl','log','./helper','vlocityTempZip','packRetry','removeProject','54OEwXHz','then','5dDOmGQ','prepareDataForDeploy','catch','../retrieve/helper','17948040rdqMYY','logId','1909510FzUqBo','zip','isNeedToDeploy','4217178uLCuBg','123208gbDNHD','snapshotId','unzipVlocityTemp','23523rvPKcb','Connection','../../../services/storage','nameSpacePrefix','resolve','completeDeployment','668dpOChR','1038167xvcUsD','createProjectDirectory','timestamp','tmpPath','../../../config/path','2418108rkSQRF','22cYDVle','343YNMOMN','snapshotType','flosumToken','---\x20body'];a28_0x64d7=function(){return _0x2ab4b2;};return a28_0x64d7();}