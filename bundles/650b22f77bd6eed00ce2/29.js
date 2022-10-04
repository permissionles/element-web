(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1508:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return B}));var s,r=a(18),o=a.n(r),n=a(91),i=a.n(n),c=a(355),l=a.n(c),h=a(1),u=a(151),p=a(93),d=a(92),y=a(98),m=a(219),g=a(152),S=a(276),b=a(309),P=a(223),C=a(94),f=a(114),w=a(176),k=a(327),v=a(206),E=a(260),O=a(108),K=a(105),j=a(104),_=a(237);!function(e){e.Loading="loading",e.LoadError="load_error",e.ChooseKeyPassphrase="choose_key_passphrase",e.Migrate="migrate",e.Passphrase="passphrase",e.PassphraseConfirm="passphrase_confirm",e.ShowKey="show_key",e.Storing="storing",e.ConfirmSkip="confirm_skip"}(s||(s={}));class B extends i.a.PureComponent{constructor(e){let t;super(e),o()(this,"recoveryKey",void 0),o()(this,"backupKey",void 0),o()(this,"recoveryKeyNode",Object(n.createRef)()),o()(this,"passphraseField",Object(n.createRef)()),o()(this,"onKeyBackupStatusChange",()=>{this.state.phase===s.Migrate&&this.fetchBackupInfo()}),o()(this,"onKeyPassphraseChange",e=>{this.setState({passPhraseKeySelected:e.target.value})}),o()(this,"onChooseKeyPassphraseFormSubmit",async()=>{this.state.passPhraseKeySelected===v.a.Key?(this.recoveryKey=await p.a.get().createRecoveryKeyFromPassphrase(),this.setState({copied:!1,downloaded:!1,setPassphrase:!1,phase:s.ShowKey})):this.setState({copied:!1,downloaded:!1,phase:s.Passphrase})}),o()(this,"onMigrateFormSubmit",e=>{e.preventDefault(),this.state.backupSigStatus.usable?this.bootstrapSecretStorage():this.restoreBackup()}),o()(this,"onCopyClick",()=>{Object(g.b)(this.recoveryKeyNode.current)&&this.setState({copied:!0})}),o()(this,"onDownloadClick",()=>{const e=new Blob([this.recoveryKey.encodedPrivateKey],{type:"text/plain;charset=us-ascii"});l.a.saveAs(e,"security-key.txt"),this.setState({downloaded:!0})}),o()(this,"doBootstrapUIAuth",async e=>{if(this.state.canUploadKeysWithPasswordOnly&&this.state.accountPassword)await e({type:"m.login.password",identifier:{type:"m.id.user",user:p.a.get().getUserId()},user:p.a.get().getUserId(),password:this.state.accountPassword});else{const t={[S.c.PHASE_PREAUTH]:{title:Object(d.a)("Use Single Sign On to continue"),body:Object(d.a)("To continue, use Single Sign On to prove your identity."),continueText:Object(d.a)("Single Sign On"),continueKind:"primary"},[S.c.PHASE_POSTAUTH]:{title:Object(d.a)("Confirm encryption setup"),body:Object(d.a)("Click the button below to confirm setting up encryption."),continueText:Object(d.a)("Confirm"),continueKind:"primary"}},{finished:a}=y.a.createDialog(_.a,{title:Object(d.a)("Setting up keys"),matrixClient:p.a.get(),makeRequest:e,aestheticsForStagePhases:{[S.c.LOGIN_TYPE]:t,[S.c.UNSTABLE_LOGIN_TYPE]:t}}),[s]=await a;if(!s)throw new Error("Cross-signing key upload auth canceled")}}),o()(this,"bootstrapSecretStorage",async()=>{this.setState({phase:s.Storing,error:null});const e=p.a.get(),{forceReset:t}=this.props;try{t?(h.a.log("Forcing secret storage reset"),await e.bootstrapSecretStorage({createSecretStorageKey:async()=>this.recoveryKey,setupNewKeyBackup:!0,setupNewSecretStorage:!0})):(await e.bootstrapCrossSigning({authUploadDeviceSigningKeys:this.doBootstrapUIAuth}),await e.bootstrapSecretStorage({createSecretStorageKey:async()=>this.recoveryKey,keyBackupInfo:this.state.backupInfo,setupNewKeyBackup:!this.state.backupInfo,getKeyBackupPassphrase:async()=>this.backupKey?this.backupKey:Object(m.e)()})),this.props.onFinished(!0)}catch(e){this.state.canUploadKeysWithPasswordOnly&&401===e.httpStatus&&e.data.flows?this.setState({accountPassword:"",accountPasswordCorrect:!1,phase:s.Migrate}):this.setState({error:e}),h.a.error("Error bootstrapping secret storage",e)}}),o()(this,"onCancel",()=>{this.props.onFinished(!1)}),o()(this,"restoreBackup",async()=>{const{finished:e}=y.a.createDialog(k.a,{showSummary:!1,keyCallback:e=>this.backupKey=e},null,!1,!1);await e;const{backupSigStatus:t}=await this.fetchBackupInfo();t.usable&&this.state.canUploadKeysWithPasswordOnly&&this.state.accountPassword&&this.bootstrapSecretStorage()}),o()(this,"onLoadRetryClick",()=>{this.setState({phase:s.Loading}),this.fetchBackupInfo()}),o()(this,"onShowKeyContinueClick",()=>{this.bootstrapSecretStorage()}),o()(this,"onCancelClick",()=>{this.setState({phase:s.ConfirmSkip})}),o()(this,"onGoBackClick",()=>{this.setState({phase:s.ChooseKeyPassphrase})}),o()(this,"onPassPhraseNextClick",async e=>{if(e.preventDefault(),this.passphraseField.current){if(await this.passphraseField.current.validate({allowEmpty:!1}),!this.passphraseField.current.state.valid)return this.passphraseField.current.focus(),void this.passphraseField.current.validate({allowEmpty:!1,focused:!0});this.setState({phase:s.PassphraseConfirm})}}),o()(this,"onPassPhraseConfirmNextClick",async e=>{e.preventDefault(),this.state.passPhrase===this.state.passPhraseConfirm&&(this.recoveryKey=await p.a.get().createRecoveryKeyFromPassphrase(this.state.passPhrase),this.setState({copied:!1,downloaded:!1,setPassphrase:!0,phase:s.ShowKey}))}),o()(this,"onSetAgainClick",()=>{this.setState({passPhrase:"",passPhraseValid:!1,passPhraseConfirm:"",phase:s.Passphrase})}),o()(this,"onPassPhraseValidate",e=>{this.setState({passPhraseValid:e.valid})}),o()(this,"onPassPhraseChange",e=>{this.setState({passPhrase:e.target.value})}),o()(this,"onPassPhraseConfirmChange",e=>{this.setState({passPhraseConfirm:e.target.value})}),o()(this,"onAccountPasswordChange",e=>{this.setState({accountPassword:e.target.value})});t=Object(v.e)().includes(v.a.Key)?v.a.Key:v.a.Passphrase;const a=e.accountPassword||"";let r=null;a?r=!0:this.queryKeyUploadAuth(),this.state={phase:s.Loading,passPhrase:"",passPhraseValid:!1,passPhraseConfirm:"",copied:!1,downloaded:!1,setPassphrase:!1,backupInfo:null,backupSigStatus:null,accountPasswordCorrect:null,canSkip:!Object(v.g)(),canUploadKeysWithPasswordOnly:r,passPhraseKeySelected:t,accountPassword:a},p.a.get().on(u.b.KeyBackupStatus,this.onKeyBackupStatusChange),this.getInitialPhase()}componentWillUnmount(){p.a.get().removeListener(u.b.KeyBackupStatus,this.onKeyBackupStatusChange)}getInitialPhase(){var e;const t=null===(e=E.a.createSecretStorageKey)||void 0===e?void 0:e.call(E.a);if(t)return h.a.log("Created key via customisations, jumping to bootstrap step"),this.recoveryKey={privateKey:t},void this.bootstrapSecretStorage();this.fetchBackupInfo()}async fetchBackupInfo(){try{const e=await p.a.get().getKeyBackupVersion(),t=p.a.get().isCryptoEnabled()&&await p.a.get().isKeyBackupTrusted(e),{forceReset:a}=this.props,r=e&&!a?s.Migrate:s.ChooseKeyPassphrase;return this.setState({phase:r,backupInfo:e,backupSigStatus:t}),{backupInfo:e,backupSigStatus:t}}catch(e){this.setState({phase:s.LoadError})}}async queryKeyUploadAuth(){try{await p.a.get().uploadDeviceSigningKeys(null,{}),h.a.log("uploadDeviceSigningKeys unexpectedly succeeded without UI auth!")}catch(e){if(!e.data||!e.data.flows)return void h.a.log("uploadDeviceSigningKeys advertised no flows!");const t=e.data.flows.some(e=>1===e.stages.length&&"m.login.password"===e.stages[0]);this.setState({canUploadKeysWithPasswordOnly:t})}}renderOptionKey(){return i.a.createElement(P.a,{key:v.a.Key,value:v.a.Key,name:"keyPassphrase",checked:this.state.passPhraseKeySelected===v.a.Key,onChange:this.onKeyPassphraseChange,outlined:!0},i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_optionTitle"},i.a.createElement("span",{className:"mx_CreateSecretStorageDialog_optionIcon mx_CreateSecretStorageDialog_optionIcon_secureBackup"}),Object(d.a)("Generate a Security Key")),i.a.createElement("div",null,Object(d.a)("We'll generate a Security Key for you to store somewhere safe, like a password manager or a safe.")))}renderOptionPassphrase(){return i.a.createElement(P.a,{key:v.a.Passphrase,value:v.a.Passphrase,name:"keyPassphrase",checked:this.state.passPhraseKeySelected===v.a.Passphrase,onChange:this.onKeyPassphraseChange,outlined:!0},i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_optionTitle"},i.a.createElement("span",{className:"mx_CreateSecretStorageDialog_optionIcon mx_CreateSecretStorageDialog_optionIcon_securePhrase"}),Object(d.a)("Enter a Security Phrase")),i.a.createElement("div",null,Object(d.a)("Use a secret phrase only you know, and optionally save a Security Key to use for backup.")))}renderPhaseChooseKeyPassphrase(){const e=Object(v.e)(),t=e.includes(v.a.Key)?this.renderOptionKey():null,a=e.includes(v.a.Passphrase)?this.renderOptionPassphrase():null;return i.a.createElement("form",{onSubmit:this.onChooseKeyPassphraseFormSubmit},i.a.createElement("p",{className:"mx_CreateSecretStorageDialog_centeredBody"},Object(d.a)("Safeguard against losing access to encrypted messages & data by backing up encryption keys on your server.")),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_primaryContainer",role:"radiogroup"},t,a),i.a.createElement(f.a,{primaryButton:Object(d.a)("Continue"),onPrimaryButtonClick:this.onChooseKeyPassphraseFormSubmit,onCancel:this.onCancelClick,hasCancel:this.state.canSkip}))}renderPhaseMigrate(){let e,t=Object(d.a)("Next");return this.state.canUploadKeysWithPasswordOnly?e=i.a.createElement("div",null,i.a.createElement("div",null,Object(d.a)("Enter your account password to confirm the upgrade:")),i.a.createElement("div",null,i.a.createElement(O.a,{type:"password",label:Object(d.a)("Password"),value:this.state.accountPassword,onChange:this.onAccountPasswordChange,forceValidity:!1!==this.state.accountPasswordCorrect&&null,autoFocus:!0}))):this.state.backupSigStatus.usable?e=i.a.createElement("p",null,Object(d.a)("You'll need to authenticate with the server to confirm the upgrade.")):(e=i.a.createElement("div",null,i.a.createElement("div",null,Object(d.a)("Restore your key backup to upgrade your encryption"))),t=Object(d.a)("Restore")),i.a.createElement("form",{onSubmit:this.onMigrateFormSubmit},i.a.createElement("p",null,Object(d.a)("Upgrade this session to allow it to verify other sessions, granting them access to encrypted messages and marking them as trusted for other users.")),i.a.createElement("div",null,e),i.a.createElement(f.a,{primaryButton:t,onPrimaryButtonClick:this.onMigrateFormSubmit,hasCancel:!1,primaryDisabled:this.state.canUploadKeysWithPasswordOnly&&!this.state.accountPassword},i.a.createElement("button",{type:"button",className:"danger",onClick:this.onCancelClick},Object(d.a)("Skip"))))}renderPhasePassPhrase(){return i.a.createElement("form",{onSubmit:this.onPassPhraseNextClick},i.a.createElement("p",null,Object(d.a)("Enter a security phrase only you know, as it's used to safeguard your data. To be secure, you shouldn't re-use your account password.")),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_passPhraseContainer"},i.a.createElement(b.a,{className:"mx_CreateSecretStorageDialog_passPhraseField",onChange:this.onPassPhraseChange,minScore:4,value:this.state.passPhrase,onValidate:this.onPassPhraseValidate,fieldRef:this.passphraseField,autoFocus:!0,label:Object(d.c)("Enter a Security Phrase"),labelEnterPassword:Object(d.c)("Enter a Security Phrase"),labelStrongPassword:Object(d.c)("Great! This Security Phrase looks strong enough."),labelAllowedButUnsafe:Object(d.c)("Great! This Security Phrase looks strong enough.")})),i.a.createElement(f.a,{primaryButton:Object(d.a)("Continue"),onPrimaryButtonClick:this.onPassPhraseNextClick,hasCancel:!1,disabled:!this.state.passPhraseValid},i.a.createElement("button",{type:"button",onClick:this.onCancelClick,className:"danger"},Object(d.a)("Cancel"))))}renderPhasePassPhraseConfirm(){let e,t;this.state.passPhraseConfirm===this.state.passPhrase?(e=Object(d.a)("That matches!"),t=Object(d.a)("Use a different passphrase?")):this.state.passPhrase.startsWith(this.state.passPhraseConfirm)||(e=Object(d.a)("That doesn't match."),t=Object(d.a)("Go back to set it again."));let a=null;return e&&(a=i.a.createElement("div",null,i.a.createElement("div",null,e),i.a.createElement(C.a,{kind:"link",onClick:this.onSetAgainClick},t))),i.a.createElement("form",{onSubmit:this.onPassPhraseConfirmNextClick},i.a.createElement("p",null,Object(d.a)("Enter your Security Phrase a second time to confirm it.")),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_passPhraseContainer"},i.a.createElement(O.a,{type:"password",onChange:this.onPassPhraseConfirmChange,value:this.state.passPhraseConfirm,className:"mx_CreateSecretStorageDialog_passPhraseField",label:Object(d.a)("Confirm your Security Phrase"),autoFocus:!0,autoComplete:"new-password"}),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_passPhraseMatch"},a)),i.a.createElement(f.a,{primaryButton:Object(d.a)("Continue"),onPrimaryButtonClick:this.onPassPhraseConfirmNextClick,hasCancel:!1,disabled:this.state.passPhrase!==this.state.passPhraseConfirm},i.a.createElement("button",{type:"button",onClick:this.onCancelClick,className:"danger"},Object(d.a)("Skip"))))}renderPhaseShowKey(){let e;return e=this.state.phase===s.ShowKey?i.a.createElement(f.a,{primaryButton:Object(d.a)("Continue"),disabled:!this.state.downloaded&&!this.state.copied&&!this.state.setPassphrase,onPrimaryButtonClick:this.onShowKeyContinueClick,hasCancel:!1}):i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_continueSpinner"},i.a.createElement(w.a,null)),i.a.createElement("div",null,i.a.createElement("p",null,Object(d.a)("Store your Security Key somewhere safe, like a password manager or a safe, as it's used to safeguard your encrypted data.")),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_primaryContainer mx_CreateSecretStorageDialog_recoveryKeyPrimarycontainer"},i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_recoveryKeyContainer"},i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_recoveryKey"},i.a.createElement("code",{ref:this.recoveryKeyNode},this.recoveryKey.encodedPrivateKey)),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_recoveryKeyButtons"},i.a.createElement(C.a,{kind:"primary",className:"mx_Dialog_primary",onClick:this.onDownloadClick,disabled:this.state.phase===s.Storing},Object(d.a)("Download")),i.a.createElement("span",null,Object(d.a)("%(downloadButton)s or %(copyButton)s",{downloadButton:"",copyButton:""})),i.a.createElement(C.a,{kind:"primary",className:"mx_Dialog_primary mx_CreateSecretStorageDialog_recoveryKeyButtons_copyBtn",onClick:this.onCopyClick,disabled:this.state.phase===s.Storing},this.state.copied?Object(d.a)("Copied!"):Object(d.a)("Copy"))))),e)}renderBusyPhase(){return i.a.createElement("div",null,i.a.createElement(j.a,null))}renderPhaseLoadError(){return i.a.createElement("div",null,i.a.createElement("p",null,Object(d.a)("Unable to query secret storage status")),i.a.createElement("div",{className:"mx_Dialog_buttons"},i.a.createElement(f.a,{primaryButton:Object(d.a)("Retry"),onPrimaryButtonClick:this.onLoadRetryClick,hasCancel:this.state.canSkip,onCancel:this.onCancel})))}renderPhaseSkipConfirm(){return i.a.createElement("div",null,i.a.createElement("p",null,Object(d.a)("If you cancel now, you may lose encrypted messages & data if you lose access to your logins.")),i.a.createElement("p",null,Object(d.a)("You can also set up Secure Backup & manage your keys in Settings.")),i.a.createElement(f.a,{primaryButton:Object(d.a)("Go back"),onPrimaryButtonClick:this.onGoBackClick,hasCancel:!1},i.a.createElement("button",{type:"button",className:"danger",onClick:this.onCancel},Object(d.a)("Cancel"))))}titleForPhase(e){switch(e){case s.ChooseKeyPassphrase:return Object(d.a)("Set up Secure Backup");case s.Migrate:return Object(d.a)("Upgrade your encryption");case s.Passphrase:return Object(d.a)("Set a Security Phrase");case s.PassphraseConfirm:return Object(d.a)("Confirm Security Phrase");case s.ConfirmSkip:return Object(d.a)("Are you sure?");case s.ShowKey:return Object(d.a)("Save your Security Key");case s.Storing:return Object(d.a)("Setting up keys");default:return""}}render(){let e;if(this.state.error)e=i.a.createElement("div",null,i.a.createElement("p",null,Object(d.a)("Unable to set up secret storage")),i.a.createElement("div",{className:"mx_Dialog_buttons"},i.a.createElement(f.a,{primaryButton:Object(d.a)("Retry"),onPrimaryButtonClick:this.bootstrapSecretStorage,hasCancel:this.state.canSkip,onCancel:this.onCancel})));else switch(this.state.phase){case s.Loading:e=this.renderBusyPhase();break;case s.LoadError:e=this.renderPhaseLoadError();break;case s.ChooseKeyPassphrase:e=this.renderPhaseChooseKeyPassphrase();break;case s.Migrate:e=this.renderPhaseMigrate();break;case s.Passphrase:e=this.renderPhasePassPhrase();break;case s.PassphraseConfirm:e=this.renderPhasePassPhraseConfirm();break;case s.ShowKey:e=this.renderPhaseShowKey();break;case s.Storing:e=this.renderBusyPhase();break;case s.ConfirmSkip:e=this.renderPhaseSkipConfirm()}let t=null;switch(this.state.phase){case s.Passphrase:case s.PassphraseConfirm:t=["mx_CreateSecretStorageDialog_titleWithIcon","mx_CreateSecretStorageDialog_securePhraseTitle"];break;case s.ShowKey:t=["mx_CreateSecretStorageDialog_titleWithIcon","mx_CreateSecretStorageDialog_secureBackupTitle"];break;case s.ChooseKeyPassphrase:t="mx_CreateSecretStorageDialog_centeredTitle"}return i.a.createElement(K.a,{className:"mx_CreateSecretStorageDialog",onFinished:this.props.onFinished,title:this.titleForPhase(this.state.phase),titleClass:t,hasCancel:this.props.hasCancel&&[s.Passphrase].includes(this.state.phase),fixedWidth:!1},i.a.createElement("div",null,e))}}o()(B,"defaultProps",{hasCancel:!0,forceReset:!1})},309:function(e,t,a){"use strict";var s=a(18),r=a.n(s),o=a(91),n=a.n(o),i=a(97),c=a.n(i),l=a(101),h=a(169),u=a(92),p=a(108);class d extends o.PureComponent{constructor(){super(...arguments),r()(this,"validate",Object(h.a)({description:function(e){const t=e?e.score:0;return n.a.createElement("progress",{className:"mx_PassphraseField_progress",max:4,value:t})},deriveData:async e=>{let{value:t}=e;if(!t)return null;const{scorePassword:s}=await a.e(28).then(a.bind(null,847));return s(t)},rules:[{key:"required",test:e=>{let{value:t,allowEmpty:a}=e;return a||!!t},invalid:()=>Object(u.a)(this.props.labelEnterPassword)},{key:"complexity",test:async function(e,t){let{value:a}=e;if(!a)return!1;const s=t.score>=this.props.minScore;return l.b.get("dangerously_allow_unsafe_and_insecure_passwords")||s},valid:function(e){return e.score>=this.props.minScore?Object(u.a)(this.props.labelStrongPassword):Object(u.a)(this.props.labelAllowedButUnsafe)},invalid:function(e){if(!e)return null;const{feedback:t}=e;return t.warning||t.suggestions[0]||Object(u.a)("Keep going...")}}]})),r()(this,"onValidate",async e=>{const t=await this.validate(e);return this.props.onValidate&&this.props.onValidate(t),t})}render(){return n.a.createElement(p.a,{id:this.props.id,autoFocus:this.props.autoFocus,className:c()("mx_PassphraseField",this.props.className),ref:this.props.fieldRef,type:"password",autoComplete:"new-password",label:Object(u.a)(this.props.label),value:this.props.value,onChange:this.props.onChange,onValidate:this.onValidate})}}r()(d,"defaultProps",{label:Object(u.c)("Password"),labelEnterPassword:Object(u.c)("Enter password"),labelStrongPassword:Object(u.c)("Nice, strong password!"),labelAllowedButUnsafe:Object(u.c)("Password is allowed, but unsafe")}),t.a=d},355:function(e,t,a){(function(a){var s,r,o;r=[],void 0===(o="function"==typeof(s=function(){"use strict";function t(e,t,a){var s=new XMLHttpRequest;s.open("GET",e),s.responseType="blob",s.onload=function(){i(s.response,t,a)},s.onerror=function(){console.error("could not download file")},s.send()}function s(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,n=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),i=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!n?function(e,a,n){var i=o.URL||o.webkitURL,c=document.createElement("a");a=a||e.name||"download",c.download=a,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?r(c):s(c.href)?t(e,a,n):r(c,c.target="_blank")):(c.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,o){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,o),a);else if(s(e))t(e,a,o);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout((function(){r(n)}))}}:function(e,a,s,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return t(e,a,s);var i="application/octet-stream"===e.type,c=/constructor/i.test(o.HTMLElement)||o.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&c||n)&&"undefined"!=typeof FileReader){var h=new FileReader;h.onloadend=function(){var e=h.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},h.readAsDataURL(e)}else{var u=o.URL||o.webkitURL,p=u.createObjectURL(e);r?r.location=p:location.href=p,r=null,setTimeout((function(){u.revokeObjectURL(p)}),4e4)}});o.saveAs=i.saveAs=i,e.exports=i})?s.apply(t,r):s)||(e.exports=o)}).call(this,a(31))}}]);
//# sourceMappingURL=29.js.map