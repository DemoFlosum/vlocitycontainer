const a18_0x3c9a50=a18_0x2227;function a18_0x2227(_0x56a158,_0x397aa){const _0x4c1db2=a18_0x4c1d();return a18_0x2227=function(_0x2227ea,_0x5aa47b){_0x2227ea=_0x2227ea-0x12b;let _0x3cafbe=_0x4c1db2[_0x2227ea];return _0x3cafbe;},a18_0x2227(_0x56a158,_0x397aa);}(function(_0x30a7ed,_0x2d4e6c){const _0x3acc10=a18_0x2227,_0x1d1d14=_0x30a7ed();while(!![]){try{const _0x5e8024=parseInt(_0x3acc10(0x143))/0x1*(-parseInt(_0x3acc10(0x13f))/0x2)+-parseInt(_0x3acc10(0x130))/0x3*(parseInt(_0x3acc10(0x13d))/0x4)+parseInt(_0x3acc10(0x12c))/0x5+-parseInt(_0x3acc10(0x131))/0x6+parseInt(_0x3acc10(0x135))/0x7+parseInt(_0x3acc10(0x13a))/0x8+parseInt(_0x3acc10(0x133))/0x9;if(_0x5e8024===_0x2d4e6c)break;else _0x1d1d14['push'](_0x1d1d14['shift']());}catch(_0x1f42b1){_0x1d1d14['push'](_0x1d1d14['shift']());}}}(a18_0x4c1d,0xe65cf));function a18_0x4c1d(){const _0x2c932a=['express','9270045uJnQQS','./controller','send','log','3JxYTDh','9616242EPzbvI','START_CLEAN_ORG_DATA','11037789WMqJQd','cleanOrgData','12133044FnYtpu','headers','length','checkRequiredFields','catch','4272968xFnWqC','REQUIRED_FIELDS_CLEAN_ORG_DATA','REQUIRED_FIELDS_ERROR','4283572fhCnrV','vlocity:clean-org-data:','288446nYfeyF','../../../services/utils','ERROR','body','12tThPOS','createLog'];a18_0x4c1d=function(){return _0x2c932a;};return a18_0x4c1d();}const {Router}=require(a18_0x3c9a50(0x12b)),logger=require('../../../services/logger'),constants=require('../../../constants'),controller=require(a18_0x3c9a50(0x12d)),utils=require(a18_0x3c9a50(0x140)),router=new Router();router['post']('/',(_0x1f3a92,_0x51764d)=>{const _0x142bf0=a18_0x3c9a50,_0x5ae5c3=logger[_0x142bf0(0x144)](_0x142bf0(0x13e)+_0x1f3a92[_0x142bf0(0x136)]['x-request-id']);_0x5ae5c3[_0x142bf0(0x12f)](constants[_0x142bf0(0x132)]);const _0x21e4d5=utils[_0x142bf0(0x138)](_0x1f3a92[_0x142bf0(0x142)],constants[_0x142bf0(0x13b)]);if(_0x21e4d5[_0x142bf0(0x137)]){_0x5ae5c3['log'](constants[_0x142bf0(0x13c)]);const _0x25564b={'status':constants[_0x142bf0(0x141)],'error':{'message':constants[_0x142bf0(0x13c)],'missingFields':_0x21e4d5}};return _0x5ae5c3[_0x142bf0(0x12f)](_0x25564b),_0x51764d['status'](0x190)[_0x142bf0(0x12e)](_0x25564b);}return controller[_0x142bf0(0x134)](_0x1f3a92['body'],_0x5ae5c3)[_0x142bf0(0x139)](_0x50a7e1=>_0x5ae5c3[_0x142bf0(0x12f)](_0x50a7e1)),_0x51764d['status'](0xc8)['send']('The\x20process\x20of\x20clean\x20org\x20data\x20started.');}),module['exports']=router;