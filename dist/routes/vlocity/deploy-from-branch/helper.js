function a16_0xdeae(_0x27ea63,_0x1debde){const _0x208324=a16_0x2083();return a16_0xdeae=function(_0xdeaed1,_0x24e233){_0xdeaed1=_0xdeaed1-0x192;let _0x280316=_0x208324[_0xdeaed1];return _0x280316;},a16_0xdeae(_0x27ea63,_0x1debde);}const a16_0x1ca2b9=a16_0xdeae;function a16_0x2083(){const _0x553d65=['readdirSync','/services/apexrest/','retrieveBranchComponents','-separateMatrixVersions','Error\x20\x20Retrieve\x20Vlocity\x20Attachments\x20','nameSpacePrefix','-apex','appendFileSync','3908nAWzHW','212RYZEGP','retrieveData','vlocityToken','-job','base64','push','callComponentList','METHOD_ADD_DEPLOYMENT_STATUS_ATTACHMENTS','post','toString','JOB_FILE_NAME','BACKUP_FOLDER','/logs','1994165JOZqYh','Connection','UNZIP_CATALOG_NAME','CalculationProcedureVersion','METHOD_TYPE_GET_BRANCH_ATTACHMENTS','isSeparateCalculationProcedureVersions','Error\x20Deploy\x20Backup\x20Chunks\x20','packDeploy','../../../services/http','createBackupChunks','84DXjDlu','\x20Chunks\x20From\x20','application/zip','End\x20Send\x20Vlocity\x20Temp','Error\x20Add\x20Deployment\x20Status\x20Attachments\x20','Vlocity\x20Temp','lstatSync','../../../services/child-process','deployData','VLOCITY_TEMP_CATALOG','Error\x20Deploy\x20Data\x20','componentIdListJson','jsforce','then','backupData','Retrieved:\x20','replace','Start\x20Create\x20Vlocity\x20Temp\x20Zip','isSeparateMatrixVersions','lastComponentId','Start\x20Send\x20Vlocity\x20Temp','isDirectory','4548861wdvZxd','-Export.yaml','SOURCE_FOLDER','Start\x20Backup\x20Data','Start\x20Retrieve\x20Vlocity\x20Attachments','CalculationMatrixVersion','332241yeALUY','resolve','Success','METHOD_VLOCITY_BACKUP','addDeploymentStatusAttachments','FlosumErrors:\x20','End\x20Add\x20Deployment\x20Status\x20Attachments','Start\x20Add\x20Deployment\x20Status\x20Attachments','deployBackup','runApex','17148gMPolA','slice','callChildProcess','branchId','vlocity','Error\x20Backup\x20Data\x20','errors','createVlocityTempZip','currentStatus','split','existsSync','parse','flosumToken','createBackupJobYamlFile','Error\x20Create\x20Vlocity\x20Temp\x20Zip\x20','unlocked-packages','logger','isEnabledApexPostDeploy','timestamp','projectPath','isLWCActivation','flosumUrl','VLOCITY_JOB_INFO','16lzpInb','2320eTdhwq','-sf.instanceUrl','Error\x20Send\x20Vlocity\x20Temp\x20Zip\x20','sobject','logId','resolvePromise','log','idList','includes','Error\x20Create\x20Backup\x20Chunks\x20','vlocityUrl','attachLogId','forEach','getFolderSize','stringify','CREATED','Start\x20Deploy\x20Backup\x20Chunks','Error','jsForceConnection','job-yaml-','-sf.accessToken','../retrieve/helper','End\x20Deploy\x20Backup\x20Chunks','createProjectDirectory','toFixed','Failure','2019qEjBpy','MAX_SIZE_UNZIP_ATTACHMENT','\x20\x20-\x20','toBuffer','-separateCalculationProcedureVersions','addLocalFolder','apexCode','callBranchComponentList','length','Error\x20Create\x20Vlocity\x20Temp\x20Zip,\x20Vlocity\x20Temp\x20not\x20found','27896dBbNRi','../../../constants','sendVlocityTemp','size','currentErrors','Start\x20Create\x20Backup\x20Chunks','Start\x20Deploy\x20Data','8653010NgbtUB','recordList','Attachment','catch','attachmentPackage','componentsCount'];a16_0x2083=function(){return _0x553d65;};return a16_0x2083();}(function(_0x3d2189,_0x3dec8b){const _0x46db67=a16_0xdeae,_0x55601c=_0x3d2189();while(!![]){try{const _0x28cf8c=parseInt(_0x46db67(0x19a))/0x1*(parseInt(_0x46db67(0x199))/0x2)+-parseInt(_0x46db67(0x209))/0x3*(parseInt(_0x46db67(0x1ef))/0x4)+-parseInt(_0x46db67(0x1a7))/0x5+-parseInt(_0x46db67(0x1b1))/0x6*(parseInt(_0x46db67(0x1cd))/0x7)+-parseInt(_0x46db67(0x1ee))/0x8*(parseInt(_0x46db67(0x1c7))/0x9)+-parseInt(_0x46db67(0x21a))/0xa+-parseInt(_0x46db67(0x213))/0xb*(-parseInt(_0x46db67(0x1d7))/0xc);if(_0x28cf8c===_0x3dec8b)break;else _0x55601c['push'](_0x55601c['shift']());}catch(_0x322617){_0x55601c['push'](_0x55601c['shift']());}}}(a16_0x2083,0xacf1a));const fs=require('fs'),AdmZip=require('adm-zip'),childProcess=require(a16_0x1ca2b9(0x1b8)),constants=require(a16_0x1ca2b9(0x214)),http=require(a16_0x1ca2b9(0x1af)),storage=require('../../../services/storage'),jsForce=require(a16_0x1ca2b9(0x1bd)),{RetrieveHelper}=require(a16_0x1ca2b9(0x204));class DeployHelper{constructor(_0x53ce1d,_0x4d26dd,_0x144104){const _0x3aaa52=a16_0x1ca2b9;this['projectPath']=_0x53ce1d,this[_0x3aaa52(0x1ec)]=_0x4d26dd[_0x3aaa52(0x1ec)],this[_0x3aaa52(0x1e3)]=_0x4d26dd['flosumToken'],this[_0x3aaa52(0x1da)]=_0x4d26dd[_0x3aaa52(0x1da)],this['nameSpacePrefix']=_0x4d26dd['nameSpacePrefix'],this[_0x3aaa52(0x1f9)]=_0x4d26dd[_0x3aaa52(0x1f9)],this['vlocityToken']=_0x4d26dd['vlocityToken'],this[_0x3aaa52(0x1f3)]=_0x4d26dd['logId'],this[_0x3aaa52(0x1c3)]=_0x4d26dd['isSeparateMatrixVersions'],this['isSeparateCalculationProcedureVersions']=_0x4d26dd['isSeparateCalculationProcedureVersions'],this[_0x3aaa52(0x1eb)]=_0x4d26dd[_0x3aaa52(0x1eb)],this[_0x3aaa52(0x21f)]=_0x4d26dd[_0x3aaa52(0x21f)],this['componentIdListJson']=_0x4d26dd[_0x3aaa52(0x1bc)],this['attachLogId']=_0x4d26dd['attachLogId'],this[_0x3aaa52(0x1e8)]=!!_0x4d26dd[_0x3aaa52(0x1e8)],this[_0x3aaa52(0x20f)]=_0x4d26dd['apexCode'],this[_0x3aaa52(0x1e9)]=_0x4d26dd[_0x3aaa52(0x1e9)],this[_0x3aaa52(0x1e7)]=_0x144104,this[_0x3aaa52(0x201)]=new jsForce[(_0x3aaa52(0x1a8))]({'instanceUrl':this[_0x3aaa52(0x1ec)],'accessToken':this[_0x3aaa52(0x1e3)]});}[a16_0x1ca2b9(0x193)](){return new Promise((_0x1d1820,_0x589d5c)=>{const _0x4440b9=a16_0xdeae;try{this[_0x4440b9(0x1e7)][_0x4440b9(0x1f5)](_0x4440b9(0x1cb)),this[_0x4440b9(0x210)]()[_0x4440b9(0x1be)](_0x5455d8=>{const _0x100772=_0x4440b9;this[_0x100772(0x1e7)][_0x100772(0x1f5)]('End\x20\x20Retrieve\x20Vlocity\x20Attachments'),_0x1d1820(_0x5455d8);})[_0x4440b9(0x21d)](_0xb76a45=>{const _0x3ca465=_0x4440b9;this[_0x3ca465(0x1e7)][_0x3ca465(0x1f5)]('Error\x20\x20Retrieve\x20Vlocity\x20Attachments\x20'+_0xb76a45),_0x589d5c(_0xb76a45);});}catch(_0x4a95d2){this['logger'][_0x4440b9(0x1f5)](_0x4440b9(0x195)+_0x4a95d2),_0x589d5c(_0x4a95d2);}});}['callBranchComponentList'](_0x24451f='',_0x237114=[]){return new Promise((_0x2f4b12,_0x7d4332)=>{const _0x16c42e=a16_0xdeae;try{const _0x28857f=this[_0x16c42e(0x196)]?this[_0x16c42e(0x196)]['replace']('__','')+'/':'',_0x1262a7=this[_0x16c42e(0x1ec)]+_0x16c42e(0x192)+_0x28857f+'unlocked-packages',_0x2dbf29={'branchId':this[_0x16c42e(0x1da)],'lastComponentId':_0x24451f,'componentIdListJson':this[_0x16c42e(0x1bc)]},_0x3f1334={'methodType':constants[_0x16c42e(0x1ab)],'body':JSON['stringify'](_0x2dbf29)};http[_0x16c42e(0x1a2)](_0x1262a7,this[_0x16c42e(0x1e3)],this[_0x16c42e(0x196)],_0x3f1334)[_0x16c42e(0x1be)](_0x141d33=>{const _0x4fb9c0=_0x16c42e;let {data:_0x5a3370}=_0x141d33;_0x5a3370=JSON[_0x4fb9c0(0x1e2)](_0x5a3370),this[_0x4fb9c0(0x1e7)][_0x4fb9c0(0x1f5)](_0x4fb9c0(0x1c0)+Number['parseFloat'](''+_0x237114[_0x4fb9c0(0x211)]/this['componentsCount']*0x64)[_0x4fb9c0(0x207)](0x2)+'%'),_0x237114['push'](..._0x5a3370[_0x4fb9c0(0x21e)][_0x4fb9c0(0x21b)]),_0x5a3370[_0x4fb9c0(0x1c4)]!=='-1'?_0x5a3370[_0x4fb9c0(0x21e)][_0x4fb9c0(0x1f6)]&&_0x5a3370[_0x4fb9c0(0x21e)][_0x4fb9c0(0x1f6)][_0x4fb9c0(0x211)]?http[_0x4fb9c0(0x1a0)](this[_0x4fb9c0(0x1ec)],this[_0x4fb9c0(0x1e3)],_0x5a3370[_0x4fb9c0(0x21e)]['idList'],this['nameSpacePrefix'],this['componentsCount'],this[_0x4fb9c0(0x1e7)],_0x237114)[_0x4fb9c0(0x1be)](_0x2963a3=>this[_0x4fb9c0(0x210)](_0x5a3370[_0x4fb9c0(0x1c4)],_0x2963a3))['then'](_0x1f5dab=>_0x2f4b12(_0x1f5dab))[_0x4fb9c0(0x21d)](_0x1f54cf=>_0x7d4332(_0x1f54cf)):this['callBranchComponentList'](_0x5a3370[_0x4fb9c0(0x1c4)],_0x237114)[_0x4fb9c0(0x1be)](_0x2edccb=>_0x2f4b12(_0x2edccb))['catch'](_0x267a03=>{_0x7d4332(_0x267a03);}):_0x2f4b12(_0x237114);})[_0x16c42e(0x21d)](_0x72a39e=>{_0x7d4332(_0x72a39e);});}catch(_0x3dae48){_0x7d4332(_0x3dae48);}});}async[a16_0x1ca2b9(0x1bf)](){const _0x5ee7d1=a16_0x1ca2b9;try{this[_0x5ee7d1(0x1e7)][_0x5ee7d1(0x1f5)](_0x5ee7d1(0x1ca)),await storage[_0x5ee7d1(0x206)](this[_0x5ee7d1(0x1ea)]+'/'+constants[_0x5ee7d1(0x1a5)]),this[_0x5ee7d1(0x1e4)]();const _0x531055=fs[_0x5ee7d1(0x220)](this['projectPath']+'/'+constants[_0x5ee7d1(0x1c9)]),_0x2aab24=new RetrieveHelper(this['projectPath']+'/'+constants[_0x5ee7d1(0x1a5)],{'isNotIncludeDependencies':!![],'isSeparateMatrixVersions':_0x531055['includes'](_0x5ee7d1(0x1cc)),'isSeparateCalculationProcedureVersions':_0x531055[_0x5ee7d1(0x1f7)](_0x5ee7d1(0x1aa)),'authFlosum':{'instanceUrl':this[_0x5ee7d1(0x1ec)],'accessToken':this[_0x5ee7d1(0x1e3)]},'authVlosityOrg':{'instanceUrl':this['vlocityUrl'],'accessToken':this['vlocityToken']},'attachLogId':this[_0x5ee7d1(0x1fa)],'selectedDataPackTypes':'[]'},this['logger']);await _0x2aab24[_0x5ee7d1(0x19b)]();const _0x496e5f=await this[_0x5ee7d1(0x1b0)]();await this[_0x5ee7d1(0x1d5)](_0x496e5f),this[_0x5ee7d1(0x1e7)][_0x5ee7d1(0x1f5)]('End\x20Backup\x20Data');}catch(_0x411067){this[_0x5ee7d1(0x1e7)][_0x5ee7d1(0x1f5)](_0x5ee7d1(0x1dc)+_0x411067);throw _0x411067;}}['createBackupJobYamlFile'](){const _0x321f23=a16_0x1ca2b9;try{let _0x3838a4='projectPath:\x20./'+constants[_0x321f23(0x1a9)]+'\x0a';_0x3838a4+='manifest:\x0a';const _0xb8d4ce=fs[_0x321f23(0x220)](this[_0x321f23(0x1ea)]+'/'+constants[_0x321f23(0x1c9)]);for(const _0x1e8189 of _0xb8d4ce){const _0x678a92=fs['readdirSync'](this[_0x321f23(0x1ea)]+'/'+constants['SOURCE_FOLDER']+'/'+_0x1e8189);for(const _0x3f31e4 of _0x678a92){_0x3838a4+=_0x321f23(0x20b)+_0x1e8189+'/'+_0x3f31e4+'\x0a';}}fs[_0x321f23(0x198)](this[_0x321f23(0x1ea)]+'/'+constants['BACKUP_FOLDER']+'/'+constants[_0x321f23(0x1a4)],_0x3838a4);}catch(_0x508e2b){this['logger'][_0x321f23(0x1f5)](_0x321f23(0x1dc)+_0x508e2b);throw _0x508e2b;}}[a16_0x1ca2b9(0x1fc)](_0x4026f7){const _0x32f31d=a16_0x1ca2b9;let _0x1a1143=0x0;const _0x471f2b=fs[_0x32f31d(0x220)](_0x4026f7);return _0x471f2b[_0x32f31d(0x1fb)](_0x248d57=>{const _0x228b4e=_0x32f31d,_0x437acc=fs[_0x228b4e(0x1b7)](_0x4026f7+'/'+_0x248d57);_0x437acc[_0x228b4e(0x1c6)]()?_0x1a1143+=this[_0x228b4e(0x1fc)](_0x4026f7+'/'+_0x248d57):_0x1a1143+=_0x437acc[_0x228b4e(0x216)];}),_0x1a1143;}['createBackupChunks'](){return new Promise((_0x132829,_0xb56546)=>{const _0x49b12b=a16_0xdeae;try{this[_0x49b12b(0x1e7)][_0x49b12b(0x1f5)](_0x49b12b(0x218));const _0x3299c2=[],_0x360c07=this[_0x49b12b(0x1ea)]+'/'+constants[_0x49b12b(0x1a5)]+'/'+constants[_0x49b12b(0x1c9)];!fs[_0x49b12b(0x1e1)](_0x360c07)&&_0x132829([]);let _0xc5dfbe=new AdmZip(),_0x5431f3=0x0;const _0x284c83=fs[_0x49b12b(0x220)](_0x360c07);_0x284c83[_0x49b12b(0x1fb)](_0x4bcb0=>{const _0x22c3f0=_0x49b12b,_0x20e68e=fs['readdirSync'](_0x360c07+'/'+_0x4bcb0);_0x20e68e[_0x22c3f0(0x1fb)](_0x5e9a4c=>{const _0x4bf92e=_0x22c3f0,_0x9f6821=_0x360c07+'/'+_0x4bcb0+'/'+_0x5e9a4c,_0x39d294=this[_0x4bf92e(0x1fc)](_0x9f6821);_0x5431f3+_0x39d294>constants[_0x4bf92e(0x20a)]?(_0x3299c2[_0x4bf92e(0x19f)](_0xc5dfbe[_0x4bf92e(0x20c)]()['toString']('base64')),_0xc5dfbe=new AdmZip(),_0xc5dfbe[_0x4bf92e(0x20e)](_0x9f6821,_0x4bcb0+'/'+_0x5e9a4c),this[_0x4bf92e(0x1e7)][_0x4bf92e(0x1f5)]('Backup\x20Chunk\x20prepared,\x20size\x20=\x20'+_0x5431f3),_0x5431f3=_0x39d294):(_0x5431f3+=_0x39d294,_0xc5dfbe[_0x4bf92e(0x20e)](_0x9f6821,_0x4bcb0+'/'+_0x5e9a4c));});}),_0x3299c2[_0x49b12b(0x19f)](_0xc5dfbe[_0x49b12b(0x20c)]()[_0x49b12b(0x1a3)]('base64')),this[_0x49b12b(0x1e7)]['log']('End\x20Create\x20Backup\x20Chunks,\x20size\x20=\x20'+_0x3299c2[_0x49b12b(0x211)]),_0x132829(_0x3299c2);}catch(_0x1f2a8b){this[_0x49b12b(0x1e7)][_0x49b12b(0x1f5)](_0x49b12b(0x1f8)+_0x1f2a8b),_0xb56546(_0x1f2a8b);}});}[a16_0x1ca2b9(0x1d5)](_0x107430){return new Promise((_0x2f049e,_0x422439)=>{const _0x19e050=a16_0xdeae;try{this[_0x19e050(0x1e7)]['log'](_0x19e050(0x1ff));const _0x306f30=this[_0x19e050(0x196)]?.[_0x19e050(0x211)]?this[_0x19e050(0x196)][_0x19e050(0x1c1)]('__','')+'/':'',_0x4bfc94=this[_0x19e050(0x1ec)]+'/services/apexrest/'+_0x306f30+_0x19e050(0x1e6);let _0x4c1474=Promise[_0x19e050(0x1ce)]();_0x107430['forEach']((_0x511c90,_0x36b1e3)=>{const _0x3014a1=_0x19e050;_0x4c1474=_0x4c1474[_0x3014a1(0x1be)](()=>{const _0x592c85=_0x3014a1,_0x1a9f4c={'vlocityBackupZip':_0x511c90,'metadataLogId':this['logId']},_0x2d862a={'methodType':constants[_0x592c85(0x1d0)],'body':JSON[_0x592c85(0x1fd)](_0x1a9f4c)};return http[_0x592c85(0x1a2)](_0x4bfc94,this[_0x592c85(0x1e3)],this['nameSpacePrefix'],_0x2d862a)[_0x592c85(0x1be)](()=>this['logger'][_0x592c85(0x1f5)](_0x36b1e3+0x1+_0x592c85(0x1b2)+_0x107430['length']+'\x20Deployed.'));});}),_0x4c1474[_0x19e050(0x1be)](()=>{const _0x7e9ab5=_0x19e050;this['logger'][_0x7e9ab5(0x1f5)](_0x7e9ab5(0x205)),_0x2f049e();})[_0x19e050(0x21d)](_0x5a2f72=>{const _0x2a48a9=_0x19e050;this[_0x2a48a9(0x1e7)][_0x2a48a9(0x1f5)](_0x2a48a9(0x1ad)+_0x5a2f72),_0x422439(_0x5a2f72);});}catch(_0x26dc52){this['logger']['log'](_0x19e050(0x1ad)+_0x26dc52),_0x422439(_0x26dc52);}});}[a16_0x1ca2b9(0x1b9)](_0x38cd78,_0x2f21ea){return new Promise((_0x2e4f49,_0x49fd43)=>{const _0x7dc132=a16_0xdeae;try{this[_0x7dc132(0x1e7)][_0x7dc132(0x1f5)](_0x7dc132(0x219));const _0x588a4b=_0x7dc132(0x1db),_0x9ad307=[_0x7dc132(0x203),this[_0x7dc132(0x19c)],_0x7dc132(0x1f0),this[_0x7dc132(0x1f9)],_0x7dc132(0x19d),constants[_0x7dc132(0x1a4)],'-autoRetryErrors'];this['isSeparateMatrixVersions']&&_0x9ad307['push'](_0x7dc132(0x194));this[_0x7dc132(0x1ac)]&&_0x9ad307[_0x7dc132(0x19f)](_0x7dc132(0x20d));_0x9ad307[_0x7dc132(0x19f)](_0x7dc132(0x1ae));this[_0x7dc132(0x1e8)]&&(_0x9ad307[_0x7dc132(0x19f)](_0x7dc132(0x1d6)),_0x9ad307['push'](_0x7dc132(0x197)),_0x9ad307[_0x7dc132(0x19f)](_0x38cd78));this[_0x7dc132(0x1e7)]['log'](_0x9ad307[_0x7dc132(0x1d8)](0x2)['join']('\x20'));const _0x2c996d=()=>{const _0x55bbb4=_0x7dc132;http['updateAttachmentLog'](this['projectPath'],this[_0x55bbb4(0x201)],this[_0x55bbb4(0x1fa)],this[_0x55bbb4(0x1e7)],![]);},_0x5e562a={'cwd':this[_0x7dc132(0x1ea)],'maxBuffer':0x400*0x1f4};childProcess[_0x7dc132(0x1d9)](_0x588a4b,_0x9ad307,this[_0x7dc132(0x1e7)],_0x5e562a,_0x2f21ea,_0x2c996d)[_0x7dc132(0x1be)](_0x4b294e=>{const _0x16e9df=_0x7dc132;this['logger'][_0x16e9df(0x1f5)]('End\x20Deploy\x20Data'),_0x2e4f49(_0x4b294e);})['catch'](_0x23ac2d=>{const _0x2cb15c=_0x7dc132;this[_0x2cb15c(0x1e7)]['log'](_0x2cb15c(0x1bb)+_0x23ac2d),_0x49fd43(_0x23ac2d);});}catch(_0xc15078){this[_0x7dc132(0x1e7)]['log'](_0x7dc132(0x1bb)+_0xc15078),_0x49fd43(_0xc15078);}});}['addDeploymentStatusAttachments'](_0x127ca8){return new Promise((_0x300dab,_0x1aed24)=>{const _0x34e47d=a16_0xdeae;try{this[_0x34e47d(0x1e7)][_0x34e47d(0x1f5)](_0x34e47d(0x1d4));const _0x52403a=this[_0x34e47d(0x196)]?.[_0x34e47d(0x211)]?this['nameSpacePrefix'][_0x34e47d(0x1c1)]('__','')+'/':'',_0x1588dc=this[_0x34e47d(0x1ec)]+_0x34e47d(0x192)+_0x52403a+_0x34e47d(0x1e6),_0x4a8b47=[];_0x127ca8&&(_0x127ca8=JSON[_0x34e47d(0x1e2)](_0x127ca8),Object['keys'](_0x127ca8['currentStatus'])['forEach'](_0x1fc081=>{const _0x53fdfe=_0x34e47d,_0x3a9b12=_0x1fc081[_0x53fdfe(0x1e0)]('/');if(_0x3a9b12['length']===0x2){const _0x22068e=_0x3a9b12[0x0],_0x523b92=_0x3a9b12[0x1],_0x5024ca=_0x127ca8[_0x53fdfe(0x1df)][_0x1fc081]===_0x53fdfe(0x1cf)?_0x127ca8[_0x53fdfe(0x1df)][_0x1fc081]:_0x127ca8[_0x53fdfe(0x1df)][_0x1fc081]===_0x53fdfe(0x200)?_0x53fdfe(0x208):null,_0x339e85=_0x127ca8['currentErrors'][_0x1fc081]?_0x127ca8[_0x53fdfe(0x217)][_0x1fc081]:null,_0x1c0ec0=_0x5024ca===_0x53fdfe(0x1cf)?_0x53fdfe(0x1fe):null;_0x4a8b47[_0x53fdfe(0x19f)]({'componentName':_0x523b92,'componentType':_0x22068e,'status':_0x5024ca,'result':_0x1c0ec0,'errorMessage':_0x339e85});}}));const _0x1f93d8={'deploymentResultList':_0x4a8b47,'metadataLogId':this['logId']},_0x2c6804={'methodType':constants[_0x34e47d(0x1a1)],'body':JSON[_0x34e47d(0x1fd)](_0x1f93d8)};http[_0x34e47d(0x1a2)](_0x1588dc,this[_0x34e47d(0x1e3)],this[_0x34e47d(0x196)],_0x2c6804)['then'](()=>{const _0x17dbab=_0x34e47d;this[_0x17dbab(0x1e7)][_0x17dbab(0x1f5)](_0x17dbab(0x1d3)),_0x300dab();})['catch'](_0x4c0e87=>{const _0x972031=_0x34e47d;this[_0x972031(0x1e7)]['log'](_0x972031(0x1b5)+_0x4c0e87),_0x1aed24(_0x4c0e87);});}catch(_0x3e7713){this['logger'][_0x34e47d(0x1f5)]('Error\x20Add\x20Deployment\x20Status\x20Attachments\x20'+_0x3e7713),_0x1aed24(_0x3e7713);}});}[a16_0x1ca2b9(0x1f4)](_0x2db594){return new Promise((_0x47c2c6,_0x14a45a)=>{const _0x48c435=a16_0xdeae;try{_0x2db594[_0x48c435(0x1be)](_0x47c2c6)['catch'](_0x47c2c6);}catch(_0x238c91){_0x14a45a(_0x238c91);}});}[a16_0x1ca2b9(0x1de)](){return new Promise((_0xa3ce7b,_0x70142)=>{const _0x5989a9=a16_0xdeae;try{this[_0x5989a9(0x1e7)][_0x5989a9(0x1f5)](_0x5989a9(0x1c2));const _0x588105=this['projectPath']+'/'+constants[_0x5989a9(0x1ba)];if(fs[_0x5989a9(0x1e1)](_0x588105)){const _0x19c907=_0x588105+_0x5989a9(0x1a6);if(this[_0x5989a9(0x1e7)][_0x5989a9(0x1dd)]['length']&&fs[_0x5989a9(0x1e1)](_0x19c907)){const _0x7fb9a7=fs[_0x5989a9(0x220)](_0x19c907);if(_0x7fb9a7&&_0x7fb9a7[_0x5989a9(0x211)]){const _0x4a49f4=_0x7fb9a7[0x0];if(_0x4a49f4[_0x5989a9(0x1f7)](_0x5989a9(0x202))&&_0x4a49f4[_0x5989a9(0x1f7)](_0x5989a9(0x1c8))){const _0x415c7b=_0x5989a9(0x1d2)+JSON[_0x5989a9(0x1fd)](this['logger'][_0x5989a9(0x1dd)]);fs[_0x5989a9(0x198)]('./'+_0x19c907+'/'+_0x4a49f4,_0x415c7b);}}}const _0x475f7b=new AdmZip();_0x475f7b[_0x5989a9(0x20e)](_0x588105,constants[_0x5989a9(0x1ba)]),this[_0x5989a9(0x1e7)][_0x5989a9(0x1f5)]('End\x20Create\x20Vlocity\x20Temp\x20Zip'),_0xa3ce7b(_0x475f7b['toBuffer']()['toString'](_0x5989a9(0x19e)));}else this[_0x5989a9(0x1e7)][_0x5989a9(0x1f5)](_0x5989a9(0x212)),_0xa3ce7b();}catch(_0x16a140){this[_0x5989a9(0x1e7)][_0x5989a9(0x1f5)](_0x5989a9(0x1e5)+_0x16a140),_0xa3ce7b();}});}[a16_0x1ca2b9(0x215)](_0x4add8e){return new Promise((_0x3b4bd5,_0x41ef2d)=>{const _0x386640=a16_0xdeae;try{this['logger'][_0x386640(0x1f5)](_0x386640(0x1c5));const _0x5c8872={'Name':'Vlocity\x20Temp','ContentType':_0x386640(0x1b3),'Description':_0x386640(0x1b6),'ParentId':this[_0x386640(0x1f3)],'Body':_0x4add8e};this[_0x386640(0x201)][_0x386640(0x1f2)](_0x386640(0x21c))['create'](_0x5c8872)[_0x386640(0x1be)](()=>{const _0x3da979=_0x386640;this['logger'][_0x3da979(0x1f5)](_0x3da979(0x1b4)),_0x3b4bd5();})[_0x386640(0x21d)](_0x244469=>{const _0x510918=_0x386640;this[_0x510918(0x1e7)][_0x510918(0x1f5)](_0x510918(0x1f1)+_0x244469),_0x41ef2d(_0x244469);});}catch(_0x3edc05){this[_0x386640(0x1e7)][_0x386640(0x1f5)](_0x386640(0x1f1)+_0x3edc05),_0x41ef2d(_0x3edc05);}});}['completeDeployment'](_0x45a5cf,_0x8f178b=![]){return new Promise((_0x3d7cfc,_0x1809ef)=>{const _0x527a21=a16_0xdeae;try{Promise[_0x527a21(0x1ce)]()[_0x527a21(0x1be)](()=>this[_0x527a21(0x1de)]())[_0x527a21(0x1be)](_0x3b59a8=>{const _0x1d6d7f=_0x527a21;if(_0x3b59a8)return this[_0x1d6d7f(0x215)](_0x3b59a8);return Promise[_0x1d6d7f(0x1ce)]();})[_0x527a21(0x1be)](()=>this['resolvePromise'](storage['readFile'](this['projectPath'],constants[_0x527a21(0x1ba)]+'/'+constants[_0x527a21(0x1ed)],this[_0x527a21(0x1e7)])))[_0x527a21(0x1be)](_0x178fd4=>this[_0x527a21(0x1f4)](this[_0x527a21(0x1d1)](_0x178fd4)))[_0x527a21(0x1be)](()=>http['updateAttachmentLog'](this[_0x527a21(0x1ea)],this['jsForceConnection'],this[_0x527a21(0x1fa)],this[_0x527a21(0x1e7)],_0x8f178b,!![]))[_0x527a21(0x1be)](_0x4278da=>this[_0x527a21(0x1f4)](http['callUpdateLog'](this[_0x527a21(0x201)],this['logId'],this[_0x527a21(0x196)],_0x45a5cf,this[_0x527a21(0x1e7)],_0x4278da)));}catch(_0x3bb267){_0x1809ef(_0x3bb267);}});}}module['exports']={'DeployHelper':DeployHelper};