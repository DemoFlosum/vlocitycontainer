const a48_0x26f32d=a48_0x3574;(function(_0x5c51f8,_0x20c7cd){const _0x5ccd14=a48_0x3574,_0x5853b3=_0x5c51f8();while(!![]){try{const _0x3e7818=-parseInt(_0x5ccd14(0xbc))/0x1*(-parseInt(_0x5ccd14(0xb0))/0x2)+-parseInt(_0x5ccd14(0xac))/0x3+parseInt(_0x5ccd14(0xb6))/0x4+parseInt(_0x5ccd14(0xb3))/0x5*(parseInt(_0x5ccd14(0xaa))/0x6)+parseInt(_0x5ccd14(0x9d))/0x7*(-parseInt(_0x5ccd14(0xba))/0x8)+-parseInt(_0x5ccd14(0xa4))/0x9+-parseInt(_0x5ccd14(0xb2))/0xa*(-parseInt(_0x5ccd14(0xab))/0xb);if(_0x3e7818===_0x20c7cd)break;else _0x5853b3['push'](_0x5853b3['shift']());}catch(_0xf9ffdc){_0x5853b3['push'](_0x5853b3['shift']());}}}(a48_0x2cfe,0xed155));const jsForce=require('jsforce'),http=require(a48_0x26f32d(0xbf));function a48_0x3574(_0x921884,_0x45180c){const _0x2cfe22=a48_0x2cfe();return a48_0x3574=function(_0x357439,_0x2fc058){_0x357439=_0x357439-0x9b;let _0x19200d=_0x2cfe22[_0x357439];return _0x19200d;},a48_0x3574(_0x921884,_0x45180c);}class JsForceHelper{constructor(_0x4f7340,_0x37435b){const _0x46dda7=a48_0x26f32d;this[_0x46dda7(0x9e)]=new jsForce[(_0x46dda7(0x9f))]({'instanceUrl':_0x4f7340[_0x46dda7(0xc2)],'accessToken':_0x4f7340['accessToken']}),this[_0x46dda7(0xb9)]=_0x4f7340['clientId'],this[_0x46dda7(0xbe)]=_0x4f7340[_0x46dda7(0xbe)],this[_0x46dda7(0xb7)]=_0x37435b,this['flosumAuth']=_0x4f7340;}async[a48_0x26f32d(0xa9)](_0x2645e3,_0x1637ac=![]){const _0x1bc497=a48_0x26f32d;try{await this[_0x1bc497(0x9e)]['sobject'](_0x1bc497(0xaf))[_0x1bc497(0xc1)](_0x2645e3);}catch(_0x3bd3e7){if(_0x3bd3e7?.['errorCode']===_0x1bc497(0x9b)&&!_0x1637ac&&this[_0x1bc497(0xb4)][_0x1bc497(0xb9)]&&this[_0x1bc497(0xb4)][_0x1bc497(0xbe)]){this[_0x1bc497(0xb7)][_0x1bc497(0xb8)](_0x3bd3e7['errorCode']+_0x1bc497(0xa5)),this[_0x1bc497(0x9e)][_0x1bc497(0x9c)]=await http[_0x1bc497(0xa7)](this[_0x1bc497(0xb4)]),await this[_0x1bc497(0xa9)](_0x2645e3,!![]);return;}throw _0x3bd3e7;}}async['updateAttachment'](_0x1688cf,_0x4e2170=![]){const _0x48a9ef=a48_0x26f32d;try{await this[_0x48a9ef(0x9e)][_0x48a9ef(0xc0)](_0x48a9ef(0xaf))[_0x48a9ef(0xbb)](_0x1688cf);}catch(_0x153d40){if(_0x153d40?.[_0x48a9ef(0xad)]===_0x48a9ef(0x9b)&&!_0x4e2170&&this[_0x48a9ef(0xb4)]['clientId']&&this['flosumAuth'][_0x48a9ef(0xbe)]){this[_0x48a9ef(0xb7)][_0x48a9ef(0xb8)](_0x153d40[_0x48a9ef(0xad)]+_0x48a9ef(0xa5)),this[_0x48a9ef(0x9e)][_0x48a9ef(0x9c)]=await http['refreshToken'](this['flosumAuth']),await this[_0x48a9ef(0xa1)](_0x1688cf,!![]);return;}throw _0x153d40;}}async[a48_0x26f32d(0xa0)](_0xb634e,_0x39ae4b,_0x50c62a=![]){const _0x46e13d=a48_0x26f32d;try{await this[_0x46e13d(0x9e)][_0x46e13d(0xc0)](_0xb634e+_0x46e13d(0xa3))[_0x46e13d(0xbb)](_0x39ae4b);}catch(_0x42186c){if(_0x42186c?.[_0x46e13d(0xad)]===_0x46e13d(0x9b)&&!_0x50c62a&&this[_0x46e13d(0xb4)]['clientId']&&this['flosumAuth']['clientSecret']){this[_0x46e13d(0xb7)][_0x46e13d(0xb8)](_0x42186c[_0x46e13d(0xad)]+_0x46e13d(0xa5)),this[_0x46e13d(0x9e)][_0x46e13d(0x9c)]=await http['refreshToken'](this[_0x46e13d(0xb4)]),await this[_0x46e13d(0xa0)](_0xb634e,_0x39ae4b,!![]);return;}throw _0x42186c;}}async['getAttachmentBodyStream'](_0x40e523,_0x10fcce=![]){const _0x4de9f1=a48_0x26f32d;try{return await this[_0x4de9f1(0x9e)][_0x4de9f1(0xb5)]('SELECT\x20Id\x20FROM\x20Account\x20LIMIT\x201'),this['jsForce'][_0x4de9f1(0xc0)](_0x4de9f1(0xaf))[_0x4de9f1(0xb1)](_0x40e523)['blob'](_0x4de9f1(0xbd));}catch(_0x4d1644){if(_0x4d1644?.[_0x4de9f1(0xad)]==='INVALID_SESSION_ID'&&!_0x10fcce&&this[_0x4de9f1(0xb4)][_0x4de9f1(0xb9)]&&this[_0x4de9f1(0xb4)][_0x4de9f1(0xbe)])return this[_0x4de9f1(0xb7)][_0x4de9f1(0xb8)](_0x4d1644[_0x4de9f1(0xad)]+'\x20refresh\x20access\x20token'),this[_0x4de9f1(0x9e)][_0x4de9f1(0x9c)]=await http['refreshToken'](this[_0x4de9f1(0xb4)]),await this[_0x4de9f1(0xa2)](_0x40e523,!![]);throw _0x4d1644;}}async[a48_0x26f32d(0xa8)](_0x44936a,_0x5b6d6d,_0x1d16d2=![]){const _0x472d0f=a48_0x26f32d;try{await this['jsForce'][_0x472d0f(0xc0)](_0x44936a+_0x472d0f(0xae))[_0x472d0f(0xbb)](_0x5b6d6d);}catch(_0x4abf6c){if(_0x4abf6c?.['errorCode']==='INVALID_SESSION_ID'&&!_0x1d16d2&&this[_0x472d0f(0xb4)][_0x472d0f(0xb9)]&&this[_0x472d0f(0xb4)][_0x472d0f(0xbe)]){this[_0x472d0f(0xb7)]['log'](_0x4abf6c[_0x472d0f(0xad)]+'\x20refresh\x20access\x20token'),this[_0x472d0f(0x9e)]['accessToken']=await http[_0x472d0f(0xa7)](this[_0x472d0f(0xb4)]),await this['updateMetadataLog'](_0x44936a,_0x5b6d6d,!![]);return;}throw _0x4abf6c;}}async[a48_0x26f32d(0xb5)](_0x511851,_0x5a2d98=![]){const _0x44e3f3=a48_0x26f32d;try{return await this['jsForce']['query'](_0x511851);}catch(_0x364283){if(_0x364283?.['errorCode']===_0x44e3f3(0x9b)&&!_0x5a2d98&&this['flosumAuth'][_0x44e3f3(0xb9)]&&this['flosumAuth']['clientSecret'])return this[_0x44e3f3(0xb7)][_0x44e3f3(0xb8)](_0x364283[_0x44e3f3(0xad)]+'\x20refresh\x20access\x20token'),this[_0x44e3f3(0x9e)]['accessToken']=await http[_0x44e3f3(0xa7)](this[_0x44e3f3(0xb4)]),await this['query'](_0x511851,!![]);throw _0x364283;}}async[a48_0x26f32d(0xa6)](_0x4b0b65,_0x5382b8=![]){const _0x457da2=a48_0x26f32d;try{return await this[_0x457da2(0x9e)][_0x457da2(0xa6)](_0x4b0b65);}catch(_0x4b2b95){if(_0x4b2b95?.[_0x457da2(0xad)]===_0x457da2(0x9b)&&!_0x5382b8&&this[_0x457da2(0xb4)][_0x457da2(0xb9)]&&this[_0x457da2(0xb4)]['clientSecret'])return this[_0x457da2(0xb7)][_0x457da2(0xb8)](_0x4b2b95[_0x457da2(0xad)]+'\x20refresh\x20access\x20token'),this[_0x457da2(0x9e)][_0x457da2(0x9c)]=await http[_0x457da2(0xa7)](this[_0x457da2(0xb4)]),await this[_0x457da2(0xa6)](_0x4b0b65,!![]);throw _0x4b2b95;}}}function a48_0x2cfe(){const _0x557706=['INVALID_SESSION_ID','accessToken','7iobRMJ','jsForce','Connection','updateSnapshot','updateAttachment','getAttachmentBodyStream','Snapshot_Vlocity__c','13058712KMEjeP','\x20refresh\x20access\x20token','queryMore','refreshToken','updateMetadataLog','createAttachment','3362730PNRGuf','804892HcIAGN','4310292FyhxoL','errorCode','Metadata_Log__c','Attachment','186562VrGhsf','record','100QpPgET','15GDJeEt','flosumAuth','query','7206668ZbGBdK','logger','log','clientId','14041136knlUfa','update','15oOhuyZ','Body','clientSecret','../http','sobject','create','instanceUrl'];a48_0x2cfe=function(){return _0x557706;};return a48_0x2cfe();}module['exports']={'JsForceHelper':JsForceHelper};