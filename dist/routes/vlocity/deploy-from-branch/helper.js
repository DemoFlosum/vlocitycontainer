function a24_0x3622(_0xa450c,_0x37f2e7){const _0x210cf0=a24_0x210c();return a24_0x3622=function(_0x36224b,_0x3aed88){_0x36224b=_0x36224b-0x1ce;let _0x38a116=_0x210cf0[_0x36224b];return _0x38a116;},a24_0x3622(_0xa450c,_0x37f2e7);}const a24_0x58d11f=a24_0x3622;(function(_0x485492,_0x59707b){const _0x5960f0=a24_0x3622,_0x181e4a=_0x485492();while(!![]){try{const _0x4f5639=-parseInt(_0x5960f0(0x252))/0x1+-parseInt(_0x5960f0(0x239))/0x2*(-parseInt(_0x5960f0(0x244))/0x3)+-parseInt(_0x5960f0(0x21f))/0x4+parseInt(_0x5960f0(0x250))/0x5+-parseInt(_0x5960f0(0x23c))/0x6+parseInt(_0x5960f0(0x1d9))/0x7*(-parseInt(_0x5960f0(0x235))/0x8)+parseInt(_0x5960f0(0x1e0))/0x9*(parseInt(_0x5960f0(0x1f1))/0xa);if(_0x4f5639===_0x59707b)break;else _0x181e4a['push'](_0x181e4a['shift']());}catch(_0x12fd2a){_0x181e4a['push'](_0x181e4a['shift']());}}}(a24_0x210c,0x502b2));function a24_0x210c(){const _0x6f1dcd=['slice','create','-apex','../retrieve/helper','-sf.instanceUrl','VLOCITY_TEMP_CATALOG','Error\x20Create\x20Backup\x20Chunks\x20','METHOD_VLOCITY_BACKUP','SOURCE_FOLDER','Error\x20Backup\x20Data\x20','Retrieved:\x20','push','../../../services/http','-separateCalculationProcedureVersions','callBranchComponentList','readFile','../../../constants','projectPath','VLOCITY_JOB_INFO','apexCode','currentStatus','Start\x20Send\x20Vlocity\x20Temp','catch','Failure','filter','Backup\x20Chunk\x20prepared,\x20size\x20=\x20','createProjectDirectory','size','toBuffer','log','985228pEbwsR','Error\x20add\x20deployment\x20status\x20','post','isLWCActivation','nameSpacePrefix','jsForceConnection','Error\x20Create\x20Vlocity\x20Temp\x20Zip,\x20Vlocity\x20Temp\x20not\x20found','retrieveData','Start\x20Add\x20Deployment\x20Status\x20Attachments','-autoRetryErrors','result','existsSync','Error\x20Send\x20Vlocity\x20Temp\x20Zip\x20','JOB_FILE_NAME','base64','/services/apexrest/','completeDeployment','backupData','attachLogId','logger','toString','Error\x20Create\x20Vlocity\x20Temp\x20Zip\x20','472vBxpME','sobject','Success','timestamp','186PlDeCx','flosumUrl','Error\x20Deploy\x20Data\x20','780546kAcuwQ','-Export.yaml','jsforce','/logs','recordList','BACKUP_FOLDER','readdirSync','Start\x20Deploy\x20Data','6906SCIpcT','vlocityToken','-separateMatrixVersions','isSeparateCalculationProcedureVersions','manifest:\x0a','addLocalFolder','application/zip','deployBackup','appendFileSync','Error\x20Deploy\x20Backup\x20Chunks\x20','parse','Connection','256240orcewt','branchId','226491sZivLE','callUpdateLog','unlocked-packages','componentsCount','errors','MAX_SIZE_UNZIP_ATTACHMENT','../../../services/storage','METHOD_ADD_DEPLOYMENT_STATUS_ATTACHMENTS','packDeploy','idList','End\x20\x20Retrieve\x20Vlocity\x20Attachments','attachmentPackage','projectPath:\x20./','toFixed','-job','\x20Deployed.','FlosumErrors:\x20','CalculationProcedureVersion','Start\x20Retrieve\x20Vlocity\x20Attachments','isDirectory','73318pfyNei','isSeparateMatrixVersions','vlocityUrl','updateAttachmentLog','then','Start\x20Create\x20Vlocity\x20Temp\x20Zip','callChildProcess','9bWkRuF','logId','Start\x20Deploy\x20Backup\x20Chunks','Error\x20update\x20metadata\x20log\x20','split','componentIdListJson','addDeploymentStatusAttachments','forEach','includes','vlocity','exports','adm-zip','Error\x20Add\x20Deployment\x20Status\x20Attachments\x20','lastComponentId','length','retrieveBranchComponents','resolvePromise','12838910qLfOCb','job-yaml-','flosumToken','sendVlocityTemp','Vlocity\x20Temp','isEnabledApexPostDeploy','getFolderSize','Error\x20\x20Retrieve\x20Vlocity\x20Attachments\x20','createBackupChunks','replace','errorMessage','CalculationMatrixVersion','Attachment','\x20\x20-\x20','End\x20Send\x20Vlocity\x20Temp','stringify'];a24_0x210c=function(){return _0x6f1dcd;};return a24_0x210c();}const fs=require('fs'),AdmZip=require(a24_0x58d11f(0x1eb)),jsForce=require(a24_0x58d11f(0x23e)),childProcess=require('../../../services/child-process'),constants=require(a24_0x58d11f(0x211)),http=require(a24_0x58d11f(0x20d)),storage=require(a24_0x58d11f(0x258)),{RetrieveHelper}=require(a24_0x58d11f(0x204));class DeployHelper{constructor(_0x275482,_0x5536cf,_0x34bf1d){const _0x2409e5=a24_0x58d11f;this[_0x2409e5(0x212)]=_0x275482,this[_0x2409e5(0x23a)]=_0x5536cf[_0x2409e5(0x23a)],this[_0x2409e5(0x1f3)]=_0x5536cf[_0x2409e5(0x1f3)],this[_0x2409e5(0x251)]=_0x5536cf['branchId'],this['nameSpacePrefix']=_0x5536cf[_0x2409e5(0x223)],this[_0x2409e5(0x1db)]=_0x5536cf['vlocityUrl'],this[_0x2409e5(0x245)]=_0x5536cf[_0x2409e5(0x245)],this['logId']=_0x5536cf['logId'],this[_0x2409e5(0x1da)]=_0x5536cf[_0x2409e5(0x1da)],this[_0x2409e5(0x247)]=_0x5536cf[_0x2409e5(0x247)],this[_0x2409e5(0x222)]=_0x5536cf['isLWCActivation'],this[_0x2409e5(0x255)]=_0x5536cf[_0x2409e5(0x255)],this[_0x2409e5(0x1e5)]=_0x5536cf[_0x2409e5(0x1e5)],this['attachLogId']=_0x5536cf[_0x2409e5(0x231)],this[_0x2409e5(0x1f6)]=!!_0x5536cf[_0x2409e5(0x1f6)],this['apexCode']=_0x5536cf[_0x2409e5(0x214)],this[_0x2409e5(0x238)]=_0x5536cf['timestamp'],this[_0x2409e5(0x232)]=_0x34bf1d,this[_0x2409e5(0x224)]=new jsForce[(_0x2409e5(0x24f))]({'instanceUrl':this[_0x2409e5(0x23a)],'accessToken':this[_0x2409e5(0x1f3)]});}[a24_0x58d11f(0x1ef)](){return new Promise((_0x465d32,_0x232302)=>{const _0x517565=a24_0x3622;try{this[_0x517565(0x232)][_0x517565(0x21e)](_0x517565(0x1d7)),this[_0x517565(0x20f)]()['then'](_0x3862ed=>{const _0x513840=_0x517565;this[_0x513840(0x232)][_0x513840(0x21e)](_0x513840(0x1cf)),_0x465d32(_0x3862ed);})[_0x517565(0x217)](_0x4b4159=>{const _0x2a7158=_0x517565;this[_0x2a7158(0x232)][_0x2a7158(0x21e)](_0x2a7158(0x1f8)+_0x4b4159),_0x232302(_0x4b4159);});}catch(_0xfc5cb8){this[_0x517565(0x232)]['log'](_0x517565(0x1f8)+_0xfc5cb8),_0x232302(_0xfc5cb8);}});}[a24_0x58d11f(0x20f)](_0x47e9cb='',_0x5add69=[]){return new Promise((_0x42b2b7,_0x287148)=>{const _0x54569b=a24_0x3622;try{const _0x8b185f=this[_0x54569b(0x223)]?this['nameSpacePrefix'][_0x54569b(0x1fa)]('__','')+'/':'',_0x2fa2e4=this[_0x54569b(0x23a)]+_0x54569b(0x22e)+_0x8b185f+'unlocked-packages',_0x17ff45={'branchId':this[_0x54569b(0x251)],'lastComponentId':_0x47e9cb,'componentIdListJson':this['componentIdListJson']},_0x4db262={'methodType':constants['METHOD_TYPE_GET_BRANCH_ATTACHMENTS'],'body':JSON[_0x54569b(0x200)](_0x17ff45)};http[_0x54569b(0x221)](_0x2fa2e4,this[_0x54569b(0x1f3)],this['nameSpacePrefix'],_0x4db262)[_0x54569b(0x1dd)](_0x596a2a=>{const _0x2fef37=_0x54569b;let {data:_0x2afd4b}=_0x596a2a;_0x2afd4b=JSON[_0x2fef37(0x24e)](_0x2afd4b),this['logger'][_0x2fef37(0x21e)](_0x2fef37(0x20b)+Number['parseFloat'](''+_0x5add69[_0x2fef37(0x1ee)]/this[_0x2fef37(0x255)]*0x64)[_0x2fef37(0x1d2)](0x2)+'%'),_0x5add69['push'](..._0x2afd4b[_0x2fef37(0x1d0)][_0x2fef37(0x240)]),_0x2afd4b[_0x2fef37(0x1ed)]!=='-1'?_0x2afd4b['attachmentPackage'][_0x2fef37(0x1ce)]&&_0x2afd4b[_0x2fef37(0x1d0)][_0x2fef37(0x1ce)][_0x2fef37(0x1ee)]?http['callComponentList'](this[_0x2fef37(0x23a)],this['flosumToken'],_0x2afd4b['attachmentPackage'][_0x2fef37(0x1ce)],this[_0x2fef37(0x223)],this[_0x2fef37(0x255)],this[_0x2fef37(0x232)],_0x5add69)['then'](_0x47b4d3=>this[_0x2fef37(0x20f)](_0x2afd4b[_0x2fef37(0x1ed)],_0x47b4d3))['then'](_0x5d8bb2=>_0x42b2b7(_0x5d8bb2))[_0x2fef37(0x217)](_0x1da4d4=>_0x287148(_0x1da4d4)):this[_0x2fef37(0x20f)](_0x2afd4b['lastComponentId'],_0x5add69)[_0x2fef37(0x1dd)](_0x4881d4=>_0x42b2b7(_0x4881d4))[_0x2fef37(0x217)](_0x32ab19=>{_0x287148(_0x32ab19);}):_0x42b2b7(_0x5add69);})[_0x54569b(0x217)](_0x5ed62b=>{_0x287148(_0x5ed62b);});}catch(_0x30ea5f){_0x287148(_0x30ea5f);}});}async[a24_0x58d11f(0x230)](){const _0x2297f2=a24_0x58d11f;try{this[_0x2297f2(0x232)]['log']('Start\x20Backup\x20Data'),await storage[_0x2297f2(0x21b)](this['projectPath']+'/'+constants[_0x2297f2(0x241)]),this['createBackupJobYamlFile']();const _0x3a2bb8=fs[_0x2297f2(0x242)](this['projectPath']+'/'+constants[_0x2297f2(0x209)]),_0x52d3f8=new RetrieveHelper(this['projectPath']+'/'+constants[_0x2297f2(0x241)],{'isNotIncludeDependencies':!![],'isSeparateMatrixVersions':_0x3a2bb8[_0x2297f2(0x1e8)](_0x2297f2(0x1fc)),'isSeparateCalculationProcedureVersions':_0x3a2bb8[_0x2297f2(0x1e8)](_0x2297f2(0x1d6)),'authFlosum':{'instanceUrl':this[_0x2297f2(0x23a)],'accessToken':this['flosumToken']},'authVlosityOrg':{'instanceUrl':this['vlocityUrl'],'accessToken':this[_0x2297f2(0x245)]},'attachLogId':this[_0x2297f2(0x231)],'selectedDataPackTypes':'[]'},this[_0x2297f2(0x232)]);await _0x52d3f8[_0x2297f2(0x226)]();const _0x4cc787=await this[_0x2297f2(0x1f9)]();await this[_0x2297f2(0x24b)](_0x4cc787),this[_0x2297f2(0x232)][_0x2297f2(0x21e)]('End\x20Backup\x20Data');}catch(_0x3ede61){this[_0x2297f2(0x232)][_0x2297f2(0x21e)](_0x2297f2(0x20a)+_0x3ede61);throw _0x3ede61;}}['createBackupJobYamlFile'](){const _0x10fc1b=a24_0x58d11f;try{let _0x30fa84=_0x10fc1b(0x1d1)+constants['UNZIP_CATALOG_NAME']+'\x0a';_0x30fa84+=_0x10fc1b(0x248);const _0x12193f=fs[_0x10fc1b(0x242)](this[_0x10fc1b(0x212)]+'/'+constants[_0x10fc1b(0x209)]);for(const _0x303184 of _0x12193f){const _0x1fc49e=fs[_0x10fc1b(0x242)](this[_0x10fc1b(0x212)]+'/'+constants['SOURCE_FOLDER']+'/'+_0x303184);for(const _0x5ab642 of _0x1fc49e){_0x30fa84+=_0x10fc1b(0x1fe)+_0x303184+'/'+_0x5ab642+'\x0a';}}fs[_0x10fc1b(0x24c)](this['projectPath']+'/'+constants[_0x10fc1b(0x241)]+'/'+constants[_0x10fc1b(0x22c)],_0x30fa84);}catch(_0xe98057){this[_0x10fc1b(0x232)][_0x10fc1b(0x21e)](_0x10fc1b(0x20a)+_0xe98057);throw _0xe98057;}}[a24_0x58d11f(0x1f7)](_0x42db1a){const _0x12c057=a24_0x58d11f;let _0x5bccbf=0x0;const _0x32103b=fs['readdirSync'](_0x42db1a);return _0x32103b[_0x12c057(0x1e7)](_0x34ea4b=>{const _0x1c698c=_0x12c057,_0x4afbe9=fs['lstatSync'](_0x42db1a+'/'+_0x34ea4b);_0x4afbe9[_0x1c698c(0x1d8)]()?_0x5bccbf+=this[_0x1c698c(0x1f7)](_0x42db1a+'/'+_0x34ea4b):_0x5bccbf+=_0x4afbe9[_0x1c698c(0x21c)];}),_0x5bccbf;}['createBackupChunks'](){return new Promise((_0x477b11,_0x3dd5ac)=>{const _0x57efe6=a24_0x3622;try{this['logger'][_0x57efe6(0x21e)]('Start\x20Create\x20Backup\x20Chunks');const _0x10faeb=[],_0x259c0c=this[_0x57efe6(0x212)]+'/'+constants[_0x57efe6(0x241)]+'/'+constants['SOURCE_FOLDER'];!fs['existsSync'](_0x259c0c)&&_0x477b11([]);let _0x349a56=new AdmZip(),_0x472704=0x0;const _0x534831=fs[_0x57efe6(0x242)](_0x259c0c);_0x534831[_0x57efe6(0x1e7)](_0x172728=>{const _0x47cdef=_0x57efe6,_0x189cd0=fs[_0x47cdef(0x242)](_0x259c0c+'/'+_0x172728);_0x189cd0['forEach'](_0x323a26=>{const _0x1bacd4=_0x47cdef,_0x47695d=_0x259c0c+'/'+_0x172728+'/'+_0x323a26,_0x208573=this['getFolderSize'](_0x47695d);_0x472704+_0x208573>constants[_0x1bacd4(0x257)]?(_0x10faeb[_0x1bacd4(0x20c)](_0x349a56['toBuffer']()[_0x1bacd4(0x233)]('base64')),_0x349a56=new AdmZip(),_0x349a56['addLocalFolder'](_0x47695d,_0x172728+'/'+_0x323a26),this['logger']['log'](_0x1bacd4(0x21a)+_0x472704),_0x472704=_0x208573):(_0x472704+=_0x208573,_0x349a56[_0x1bacd4(0x249)](_0x47695d,_0x172728+'/'+_0x323a26));});}),_0x10faeb['push'](_0x349a56[_0x57efe6(0x21d)]()[_0x57efe6(0x233)](_0x57efe6(0x22d))),this['logger'][_0x57efe6(0x21e)]('End\x20Create\x20Backup\x20Chunks,\x20size\x20=\x20'+_0x10faeb['length']),_0x477b11(_0x10faeb);}catch(_0x29d832){this[_0x57efe6(0x232)][_0x57efe6(0x21e)](_0x57efe6(0x207)+_0x29d832),_0x3dd5ac(_0x29d832);}});}[a24_0x58d11f(0x24b)](_0x370af3){return new Promise((_0x363ef0,_0x41e990)=>{const _0x403f87=a24_0x3622;try{this[_0x403f87(0x232)]['log'](_0x403f87(0x1e2));const _0x37f743=this['nameSpacePrefix']?.[_0x403f87(0x1ee)]?this[_0x403f87(0x223)][_0x403f87(0x1fa)]('__','')+'/':'',_0x12f27f=this['flosumUrl']+_0x403f87(0x22e)+_0x37f743+_0x403f87(0x254);let _0x421261=Promise['resolve']();_0x370af3[_0x403f87(0x1e7)]((_0x4248c3,_0x38e524)=>{const _0x37c193=_0x403f87;_0x421261=_0x421261[_0x37c193(0x1dd)](()=>{const _0x4b6abb=_0x37c193,_0x3a7ba8={'vlocityBackupZip':_0x4248c3,'metadataLogId':this[_0x4b6abb(0x1e1)]},_0x1567e7={'methodType':constants[_0x4b6abb(0x208)],'body':JSON[_0x4b6abb(0x200)](_0x3a7ba8)};return http[_0x4b6abb(0x221)](_0x12f27f,this[_0x4b6abb(0x1f3)],this[_0x4b6abb(0x223)],_0x1567e7)[_0x4b6abb(0x1dd)](()=>this[_0x4b6abb(0x232)][_0x4b6abb(0x21e)](_0x38e524+0x1+'\x20Chunks\x20From\x20'+_0x370af3[_0x4b6abb(0x1ee)]+_0x4b6abb(0x1d4)));});}),_0x421261[_0x403f87(0x1dd)](()=>{const _0x2cb6c1=_0x403f87;this[_0x2cb6c1(0x232)]['log']('End\x20Deploy\x20Backup\x20Chunks'),_0x363ef0();})[_0x403f87(0x217)](_0x4be971=>{const _0xba9400=_0x403f87;this['logger'][_0xba9400(0x21e)](_0xba9400(0x24d)+_0x4be971),_0x41e990(_0x4be971);});}catch(_0x59ce58){this[_0x403f87(0x232)][_0x403f87(0x21e)](_0x403f87(0x24d)+_0x59ce58),_0x41e990(_0x59ce58);}});}['deployData'](_0x272f5b,_0x5ce4d7){return new Promise((_0x23a2b1,_0x152912)=>{const _0x4b4128=a24_0x3622;try{this[_0x4b4128(0x232)][_0x4b4128(0x21e)](_0x4b4128(0x243));const _0x2006ae=_0x4b4128(0x1e9),_0x4050ff=['-sf.accessToken',this['vlocityToken'],_0x4b4128(0x205),this[_0x4b4128(0x1db)],_0x4b4128(0x1d3),constants[_0x4b4128(0x22c)],_0x4b4128(0x228)];this[_0x4b4128(0x1da)]&&_0x4050ff[_0x4b4128(0x20c)](_0x4b4128(0x246));this[_0x4b4128(0x247)]&&_0x4050ff[_0x4b4128(0x20c)](_0x4b4128(0x20e));_0x4050ff[_0x4b4128(0x20c)](_0x4b4128(0x25a));this['isEnabledApexPostDeploy']&&(_0x4050ff[_0x4b4128(0x20c)]('runApex'),_0x4050ff[_0x4b4128(0x20c)](_0x4b4128(0x203)),_0x4050ff[_0x4b4128(0x20c)](_0x272f5b));this['logger'][_0x4b4128(0x21e)](_0x4050ff[_0x4b4128(0x201)](0x2)['join']('\x20'));const _0x37506f=()=>{const _0x4287e9=_0x4b4128;http[_0x4287e9(0x1dc)](this[_0x4287e9(0x212)],this[_0x4287e9(0x224)],this[_0x4287e9(0x231)],this[_0x4287e9(0x232)],![]);},_0x12b1e9={'cwd':this[_0x4b4128(0x212)],'maxBuffer':0x400*0x1f4};childProcess[_0x4b4128(0x1df)](_0x2006ae,_0x4050ff,this['logger'],_0x12b1e9,_0x5ce4d7,_0x37506f)[_0x4b4128(0x1dd)](_0x3dd79e=>{this['logger']['log']('End\x20Deploy\x20Data'),_0x23a2b1(_0x3dd79e);})[_0x4b4128(0x217)](_0x526778=>{const _0xf23f2b=_0x4b4128;this[_0xf23f2b(0x232)][_0xf23f2b(0x21e)](_0xf23f2b(0x23b)+_0x526778),_0x152912(_0x526778);});}catch(_0x5e9f7b){this[_0x4b4128(0x232)]['log'](_0x4b4128(0x23b)+_0x5e9f7b),_0x152912(_0x5e9f7b);}});}async[a24_0x58d11f(0x1e6)](_0x332005){const _0x1cb1ab=a24_0x58d11f;try{if(!_0x332005)return 0x0;_0x332005=JSON[_0x1cb1ab(0x24e)](_0x332005),this[_0x1cb1ab(0x232)]['log'](_0x1cb1ab(0x227));const _0x364026=[];for(const _0x1ddf44 in _0x332005[_0x1cb1ab(0x215)]){const _0x23a22c=_0x1ddf44[_0x1cb1ab(0x1e4)]('/');if(_0x23a22c['length']!==0x2)continue;const [_0x219d0d,_0x757ca8]=_0x23a22c,_0x3c9bde={'componentType':_0x219d0d,'componentName':_0x757ca8},_0x1c4d36=_0x332005[_0x1cb1ab(0x215)][_0x1ddf44];_0x1c4d36==='Success'?(_0x3c9bde['status']=_0x1cb1ab(0x237),_0x3c9bde[_0x1cb1ab(0x229)]='CREATED'):(_0x3c9bde['status']=_0x1cb1ab(0x218),_0x3c9bde[_0x1cb1ab(0x1fb)]=_0x1c4d36),_0x364026[_0x1cb1ab(0x20c)](_0x3c9bde);}const _0x591846={'deploymentResultList':_0x364026,'metadataLogId':this[_0x1cb1ab(0x1e1)]},_0x5ed370={'methodType':constants[_0x1cb1ab(0x259)],'body':JSON[_0x1cb1ab(0x200)](_0x591846)},_0x431c7a=this[_0x1cb1ab(0x223)]?.[_0x1cb1ab(0x1ee)]?this['nameSpacePrefix'][_0x1cb1ab(0x1fa)]('__','')+'/':'',_0x2cb4ed=this[_0x1cb1ab(0x23a)]+_0x1cb1ab(0x22e)+_0x431c7a+'unlocked-packages';return await http[_0x1cb1ab(0x221)](_0x2cb4ed,this[_0x1cb1ab(0x1f3)],this[_0x1cb1ab(0x223)],_0x5ed370),this[_0x1cb1ab(0x232)]['log']('End\x20Add\x20Deployment\x20Status\x20Attachments'),_0x364026[_0x1cb1ab(0x219)](_0x108c56=>!_0x108c56[_0x1cb1ab(0x1fb)])['length'];}catch(_0x3b4e76){this[_0x1cb1ab(0x232)][_0x1cb1ab(0x21e)](_0x1cb1ab(0x1ec)+_0x3b4e76);throw _0x3b4e76;}}[a24_0x58d11f(0x1f0)](_0x5876b1){return new Promise((_0x2b7b41,_0x3111f6)=>{const _0x2a02ed=a24_0x3622;try{_0x5876b1['then'](_0x2b7b41)[_0x2a02ed(0x217)](_0x2b7b41);}catch(_0x362db9){_0x3111f6(_0x362db9);}});}['createVlocityTempZip'](){return new Promise((_0x27e2ee,_0x20c0a6)=>{const _0x129234=a24_0x3622;try{this[_0x129234(0x232)]['log'](_0x129234(0x1de));const _0x3f5c24=this['projectPath']+'/'+constants[_0x129234(0x206)];if(fs[_0x129234(0x22a)](_0x3f5c24)){const _0x58e8b4=_0x3f5c24+_0x129234(0x23f);if(this[_0x129234(0x232)][_0x129234(0x256)][_0x129234(0x1ee)]&&fs[_0x129234(0x22a)](_0x58e8b4)){const _0x43c8fa=fs[_0x129234(0x242)](_0x58e8b4);if(_0x43c8fa&&_0x43c8fa['length']){const _0x583c62=_0x43c8fa[0x0];if(_0x583c62[_0x129234(0x1e8)](_0x129234(0x1f2))&&_0x583c62[_0x129234(0x1e8)](_0x129234(0x23d))){const _0x3cb6b0=_0x129234(0x1d5)+JSON['stringify'](this[_0x129234(0x232)][_0x129234(0x256)]);fs[_0x129234(0x24c)]('./'+_0x58e8b4+'/'+_0x583c62,_0x3cb6b0);}}}const _0x1c1a2d=new AdmZip();_0x1c1a2d[_0x129234(0x249)](_0x3f5c24,constants[_0x129234(0x206)]),this[_0x129234(0x232)]['log']('End\x20Create\x20Vlocity\x20Temp\x20Zip'),_0x27e2ee(_0x1c1a2d[_0x129234(0x21d)]()[_0x129234(0x233)](_0x129234(0x22d)));}else this[_0x129234(0x232)][_0x129234(0x21e)](_0x129234(0x225)),_0x27e2ee();}catch(_0x394fd0){this[_0x129234(0x232)][_0x129234(0x21e)](_0x129234(0x234)+_0x394fd0),_0x27e2ee();}});}[a24_0x58d11f(0x1f4)](_0x31222e){return new Promise((_0x461b19,_0x54e30c)=>{const _0x5b5b82=a24_0x3622;try{this[_0x5b5b82(0x232)][_0x5b5b82(0x21e)](_0x5b5b82(0x216));const _0x294cbb={'Name':_0x5b5b82(0x1f5),'ContentType':_0x5b5b82(0x24a),'Description':_0x5b5b82(0x1f5),'ParentId':this[_0x5b5b82(0x1e1)],'Body':_0x31222e};this[_0x5b5b82(0x224)][_0x5b5b82(0x236)](_0x5b5b82(0x1fd))[_0x5b5b82(0x202)](_0x294cbb)[_0x5b5b82(0x1dd)](()=>{const _0x22c50e=_0x5b5b82;this[_0x22c50e(0x232)][_0x22c50e(0x21e)](_0x22c50e(0x1ff)),_0x461b19();})['catch'](_0x136b36=>{const _0x340eef=_0x5b5b82;this[_0x340eef(0x232)][_0x340eef(0x21e)](_0x340eef(0x22b)+_0x136b36),_0x54e30c(_0x136b36);});}catch(_0x1b8b66){this[_0x5b5b82(0x232)][_0x5b5b82(0x21e)](_0x5b5b82(0x22b)+_0x1b8b66),_0x54e30c(_0x1b8b66);}});}async[a24_0x58d11f(0x22f)](_0x5d0166,_0x2aaf4d=![]){const _0x3486f2=a24_0x58d11f,_0x4f7439=await this['createVlocityTempZip']();_0x4f7439&&await this[_0x3486f2(0x1f4)](_0x4f7439);let _0x112fc7=this['componentsCount'];try{const _0x5dc25a=await storage[_0x3486f2(0x210)](this[_0x3486f2(0x212)],constants[_0x3486f2(0x206)]+'/'+constants[_0x3486f2(0x213)],this['logger']);_0x112fc7=await this['addDeploymentStatusAttachments'](_0x5dc25a);}catch(_0x590491){this[_0x3486f2(0x232)][_0x3486f2(0x21e)](_0x3486f2(0x220)+_0x590491);}const _0x4f54e2=await http[_0x3486f2(0x1dc)](this[_0x3486f2(0x212)],this['jsForceConnection'],this['attachLogId'],this['logger'],_0x2aaf4d,!![]);try{await http[_0x3486f2(0x253)](this[_0x3486f2(0x224)],this['logId'],this[_0x3486f2(0x223)],_0x5d0166&&_0x112fc7>0x0,this[_0x3486f2(0x232)],_0x4f54e2||_0x112fc7!==this['componentsCount']);}catch(_0xbccb32){this[_0x3486f2(0x232)][_0x3486f2(0x21e)](_0x3486f2(0x1e3)+_0xbccb32);}}}module[a24_0x58d11f(0x1ea)]={'DeployHelper':DeployHelper};