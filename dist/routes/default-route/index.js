const a7_0x1e0886=a7_0x496c;function a7_0x496c(_0x157636,_0x512afe){const _0x5a2f9b=a7_0x5a2f();return a7_0x496c=function(_0x496c3e,_0x376882){_0x496c3e=_0x496c3e-0x18c;let _0x329d33=_0x5a2f9b[_0x496c3e];return _0x329d33;},a7_0x496c(_0x157636,_0x512afe);}function a7_0x5a2f(){const _0x2b8016=['../../services/utils','reqQuery:\x0a%o','x-request-id','reqBody:\x0a%o','getHeaders','express','128460ChHxwS','resHeaders:\x0a%o','601330WTIjJV','No\x20Authorization','4bqMCGD','483348oTkeCz','7qIAIOx','ERROR','query','unpack:root:','enable','reqHeaders:\x0a%o','SALESFORCE_TOKEN','statusCode','random','18xCTFEv','authorization','removeSensitiveData','reqParams:\x0a%o','6491768cBnxEA','15597153pvifDP','send','1832205uiGrLE','headers','env','reqPath:\x20%s','slice','debug','body','use','vlocity*','exports','248411uhzkjr','80OcVfxh','STATUS_400_INVALID_JSON_ERROR'];a7_0x5a2f=function(){return _0x2b8016;};return a7_0x5a2f();}(function(_0x4726e5,_0x310823){const _0x183bb1=a7_0x496c,_0x45e26d=_0x4726e5();while(!![]){try{const _0x1686af=-parseInt(_0x183bb1(0x1a3))/0x1+parseInt(_0x183bb1(0x1b1))/0x2+parseInt(_0x183bb1(0x199))/0x3*(-parseInt(_0x183bb1(0x1b0))/0x4)+-parseInt(_0x183bb1(0x1a4))/0x5*(-parseInt(_0x183bb1(0x1ac))/0x6)+parseInt(_0x183bb1(0x1b2))/0x7*(-parseInt(_0x183bb1(0x196))/0x8)+-parseInt(_0x183bb1(0x192))/0x9*(-parseInt(_0x183bb1(0x1ae))/0xa)+parseInt(_0x183bb1(0x197))/0xb;if(_0x1686af===_0x310823)break;else _0x45e26d['push'](_0x45e26d['shift']());}catch(_0x4baced){_0x45e26d['push'](_0x45e26d['shift']());}}}(a7_0x5a2f,0x6e4de));const debug=require(a7_0x1e0886(0x19e)),{v4:uuidv4}=require('uuid'),{Router}=require(a7_0x1e0886(0x1ab)),utils=require(a7_0x1e0886(0x1a6)),constants=require('../../constants'),router=new Router();router[a7_0x1e0886(0x1a0)]((_0xa6d3a4,_0x4c1073,_0xfc74a6)=>{const _0x3278e9=a7_0x1e0886;!_0xa6d3a4[_0x3278e9(0x19a)]['x-request-id']&&(_0xa6d3a4['headers']['x-request-id']=Math[_0x3278e9(0x191)]()['toString'](0x10)[_0x3278e9(0x19d)](0x2)),_0xfc74a6();}),router['use']((_0x38957c,_0x16d8f6,_0x51de69,_0x394950)=>{const _0x284bb5=a7_0x1e0886;debug['enable'](_0x284bb5(0x1a1));const _0x9b5d08=debug('vlocity:root:'+_0x38957c[_0x284bb5(0x19a)]['x-request-id']);return _0x9b5d08(constants['STATUS_400_INVALID_JSON_ERROR']),_0x51de69['status'](0x190)[_0x284bb5(0x198)]({'status':constants[_0x284bb5(0x1b3)],'error':{'message':constants[_0x284bb5(0x1a5)]}});}),router[a7_0x1e0886(0x1a0)]((_0x1c5598,_0x4a825d,_0x390e28)=>{const _0x3a5495=a7_0x1e0886;debug[_0x3a5495(0x18d)](_0x3a5495(0x1a1));const _0x3e7f76=debug(_0x3a5495(0x18c)+_0x1c5598['headers'][_0x3a5495(0x1a8)]);if(process[_0x3a5495(0x19b)]['SALESFORCE_TOKEN']&&_0x1c5598[_0x3a5495(0x19a)][_0x3a5495(0x193)]!==process['env'][_0x3a5495(0x18f)]){_0x4a825d[_0x3a5495(0x190)]=0x191,_0x4a825d[_0x3a5495(0x198)](_0x3a5495(0x1af));return;}_0x3e7f76(_0x3a5495(0x19c),utils[_0x3a5495(0x194)](_0x1c5598['path'])),_0x3e7f76(_0x3a5495(0x18e),utils[_0x3a5495(0x194)](_0x1c5598[_0x3a5495(0x19a)])),_0x3e7f76(_0x3a5495(0x195),utils['removeSensitiveData'](_0x1c5598['params'])),_0x3e7f76(_0x3a5495(0x1a7),utils[_0x3a5495(0x194)](_0x1c5598[_0x3a5495(0x1b4)])),_0x3e7f76(_0x3a5495(0x1a9),utils[_0x3a5495(0x194)](_0x1c5598[_0x3a5495(0x19f)])),_0x3e7f76(_0x3a5495(0x1ad),utils[_0x3a5495(0x194)](_0x4a825d[_0x3a5495(0x1aa)]())),_0x390e28();}),module[a7_0x1e0886(0x1a2)]=router;