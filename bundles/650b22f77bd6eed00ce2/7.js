(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{844:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var s,r=t(18),n=t.n(r),i=t(91),c=t.n(i),o=t(355),l=t.n(o),h=t(1),u=t(93),p=t(92),m=t(219),y=t(94),d=t(152),k=t(309),b=t(104),P=t(105),C=t(114);!function(e){e.Passphrase="passphrase",e.PassphraseConfirm="passphrase_confirm",e.ShowKey="show_key",e.KeepItSafe="keep_it_safe",e.BackingUp="backing_up",e.Done="done",e.OptOutConfirm="opt_out_confirm"}(s||(s={}));class f extends c.a.PureComponent{constructor(e){super(e),n()(this,"keyBackupInfo",void 0),n()(this,"recoveryKeyNode",Object(i.createRef)()),n()(this,"passphraseField",Object(i.createRef)()),n()(this,"onCopyClick",()=>{Object(d.b)(this.recoveryKeyNode.current)&&this.setState({copied:!0,phase:s.KeepItSafe})}),n()(this,"onDownloadClick",()=>{const e=new Blob([this.keyBackupInfo.recovery_key],{type:"text/plain;charset=us-ascii"});l.a.saveAs(e,"security-key.txt"),this.setState({downloaded:!0,phase:s.KeepItSafe})}),n()(this,"createBackup",async()=>{const{secureSecretStorage:e}=this.state;let a;this.setState({phase:s.BackingUp,error:null});try{e?await Object(m.b)(async()=>{a=await u.a.get().prepareKeyBackupVersion(null,{secureSecretStorage:!0}),a=await u.a.get().createKeyBackupVersion(a)}):a=await u.a.get().createKeyBackupVersion(this.keyBackupInfo),await u.a.get().scheduleAllGroupSessionsForBackup(),this.setState({phase:s.Done})}catch(e){h.a.error("Error creating key backup",e),a&&u.a.get().deleteKeyBackupVersion(a.version),this.setState({error:e})}}),n()(this,"onCancel",()=>{this.props.onFinished(!1)}),n()(this,"onDone",()=>{this.props.onFinished(!0)}),n()(this,"onSetUpClick",()=>{this.setState({phase:s.Passphrase})}),n()(this,"onSkipPassPhraseClick",async()=>{this.keyBackupInfo=await u.a.get().prepareKeyBackupVersion(),this.setState({copied:!1,downloaded:!1,phase:s.ShowKey})}),n()(this,"onPassPhraseNextClick",async e=>{if(e.preventDefault(),this.passphraseField.current){if(await this.passphraseField.current.validate({allowEmpty:!1}),!this.passphraseField.current.state.valid)return this.passphraseField.current.focus(),void this.passphraseField.current.validate({allowEmpty:!1,focused:!0});this.setState({phase:s.PassphraseConfirm})}}),n()(this,"onPassPhraseConfirmNextClick",async e=>{e.preventDefault(),this.state.passPhrase===this.state.passPhraseConfirm&&(this.keyBackupInfo=await u.a.get().prepareKeyBackupVersion(this.state.passPhrase),this.setState({copied:!1,downloaded:!1,phase:s.ShowKey}))}),n()(this,"onSetAgainClick",()=>{this.setState({passPhrase:"",passPhraseValid:!1,passPhraseConfirm:"",phase:s.Passphrase})}),n()(this,"onKeepItSafeBackClick",()=>{this.setState({phase:s.ShowKey})}),n()(this,"onPassPhraseValidate",e=>{this.setState({passPhraseValid:e.valid})}),n()(this,"onPassPhraseChange",e=>{this.setState({passPhrase:e.target.value})}),n()(this,"onPassPhraseConfirmChange",e=>{this.setState({passPhraseConfirm:e.target.value})}),this.state={secureSecretStorage:null,phase:s.Passphrase,passPhrase:"",passPhraseValid:!1,passPhraseConfirm:"",copied:!1,downloaded:!1}}async componentDidMount(){const e=u.a.get(),a=await e.doesServerSupportUnstableFeature("org.matrix.e2e_cross_signing");this.setState({secureSecretStorage:a}),a&&(this.setState({phase:s.BackingUp}),this.createBackup())}renderPhasePassPhrase(){return c.a.createElement("form",{onSubmit:this.onPassPhraseNextClick},c.a.createElement("p",null,Object(p.a)("<b>Warning</b>: You should only set up key backup from a trusted computer.",{},{b:e=>c.a.createElement("b",null,e)})),c.a.createElement("p",null,Object(p.a)("We'll store an encrypted copy of your keys on our server. Secure your backup with a Security Phrase.")),c.a.createElement("p",null,Object(p.a)("For maximum security, this should be different from your account password.")),c.a.createElement("div",{className:"mx_CreateKeyBackupDialog_primaryContainer"},c.a.createElement("div",{className:"mx_CreateKeyBackupDialog_passPhraseContainer"},c.a.createElement(k.a,{className:"mx_CreateKeyBackupDialog_passPhraseInput",onChange:this.onPassPhraseChange,minScore:4,value:this.state.passPhrase,onValidate:this.onPassPhraseValidate,fieldRef:this.passphraseField,autoFocus:!0,label:Object(p.c)("Enter a Security Phrase"),labelEnterPassword:Object(p.c)("Enter a Security Phrase"),labelStrongPassword:Object(p.c)("Great! This Security Phrase looks strong enough."),labelAllowedButUnsafe:Object(p.c)("Great! This Security Phrase looks strong enough.")}))),c.a.createElement(C.a,{primaryButton:Object(p.a)("Next"),onPrimaryButtonClick:this.onPassPhraseNextClick,hasCancel:!1,disabled:!this.state.passPhraseValid}),c.a.createElement("details",null,c.a.createElement("summary",null,Object(p.a)("Advanced")),c.a.createElement(y.a,{kind:"primary",onClick:this.onSkipPassPhraseClick},Object(p.a)("Set up with a Security Key"))))}renderPhasePassPhraseConfirm(){let e,a;this.state.passPhraseConfirm===this.state.passPhrase?(e=Object(p.a)("That matches!"),a=Object(p.a)("Use a different passphrase?")):this.state.passPhrase.startsWith(this.state.passPhraseConfirm)||(e=Object(p.a)("That doesn't match."),a=Object(p.a)("Go back to set it again."));let t=null;return e&&(t=c.a.createElement("div",{className:"mx_CreateKeyBackupDialog_passPhraseMatch"},c.a.createElement("div",null,e),c.a.createElement(y.a,{kind:"link",onClick:this.onSetAgainClick},a))),c.a.createElement("form",{onSubmit:this.onPassPhraseConfirmNextClick},c.a.createElement("p",null,Object(p.a)("Enter your Security Phrase a second time to confirm it.")),c.a.createElement("div",{className:"mx_CreateKeyBackupDialog_primaryContainer"},c.a.createElement("div",{className:"mx_CreateKeyBackupDialog_passPhraseContainer"},c.a.createElement("div",null,c.a.createElement("input",{type:"password",onChange:this.onPassPhraseConfirmChange,value:this.state.passPhraseConfirm,className:"mx_CreateKeyBackupDialog_passPhraseInput",placeholder:Object(p.a)("Repeat your Security Phrase..."),autoFocus:!0})),t)),c.a.createElement(C.a,{primaryButton:Object(p.a)("Next"),onPrimaryButtonClick:this.onPassPhraseConfirmNextClick,hasCancel:!1,disabled:this.state.passPhrase!==this.state.passPhraseConfirm}))}renderPhaseShowKey(){return c.a.createElement("div",null,c.a.createElement("p",null,Object(p.a)("Your Security Key is a safety net - you can use it to restore access to your encrypted messages if you forget your Security Phrase.")),c.a.createElement("p",null,Object(p.a)("Keep a copy of it somewhere secure, like a password manager or even a safe.")),c.a.createElement("div",{className:"mx_CreateKeyBackupDialog_primaryContainer"},c.a.createElement("div",{className:"mx_CreateKeyBackupDialog_recoveryKeyHeader"},Object(p.a)("Your Security Key")),c.a.createElement("div",{className:"mx_CreateKeyBackupDialog_recoveryKeyContainer"},c.a.createElement("div",{className:"mx_CreateKeyBackupDialog_recoveryKey"},c.a.createElement("code",{ref:this.recoveryKeyNode},this.keyBackupInfo.recovery_key)),c.a.createElement("div",{className:"mx_CreateKeyBackupDialog_recoveryKeyButtons"},c.a.createElement("button",{className:"mx_Dialog_primary",onClick:this.onCopyClick},Object(p.a)("Copy")),c.a.createElement("button",{className:"mx_Dialog_primary",onClick:this.onDownloadClick},Object(p.a)("Download"))))))}renderPhaseKeepItSafe(){let e;return this.state.copied?e=Object(p.a)("Your Security Key has been <b>copied to your clipboard</b>, paste it to:",{},{b:e=>c.a.createElement("b",null,e)}):this.state.downloaded&&(e=Object(p.a)("Your Security Key is in your <b>Downloads</b> folder.",{},{b:e=>c.a.createElement("b",null,e)})),c.a.createElement("div",null,e,c.a.createElement("ul",null,c.a.createElement("li",null,Object(p.a)("<b>Print it</b> and store it somewhere safe",{},{b:e=>c.a.createElement("b",null,e)})),c.a.createElement("li",null,Object(p.a)("<b>Save it</b> on a USB key or backup drive",{},{b:e=>c.a.createElement("b",null,e)})),c.a.createElement("li",null,Object(p.a)("<b>Copy it</b> to your personal cloud storage",{},{b:e=>c.a.createElement("b",null,e)}))),c.a.createElement(C.a,{primaryButton:Object(p.a)("Continue"),onPrimaryButtonClick:this.createBackup,hasCancel:!1},c.a.createElement("button",{onClick:this.onKeepItSafeBackClick},Object(p.a)("Back"))))}renderBusyPhase(){return c.a.createElement("div",null,c.a.createElement(b.a,null))}renderPhaseDone(){return c.a.createElement("div",null,c.a.createElement("p",null,Object(p.a)("Your keys are being backed up (the first backup could take a few minutes).")),c.a.createElement(C.a,{primaryButton:Object(p.a)("OK"),onPrimaryButtonClick:this.onDone,hasCancel:!1}))}renderPhaseOptOutConfirm(){return c.a.createElement("div",null,Object(p.a)("Without setting up Secure Message Recovery, you won't be able to restore your encrypted message history if you log out or use another session."),c.a.createElement(C.a,{primaryButton:Object(p.a)("Set up Secure Message Recovery"),onPrimaryButtonClick:this.onSetUpClick,hasCancel:!1},c.a.createElement("button",{onClick:this.onCancel},"I understand, continue without")))}titleForPhase(e){switch(e){case s.Passphrase:return Object(p.a)("Secure your backup with a Security Phrase");case s.PassphraseConfirm:return Object(p.a)("Confirm your Security Phrase");case s.OptOutConfirm:return Object(p.a)("Warning!");case s.ShowKey:case s.KeepItSafe:return Object(p.a)("Make a copy of your Security Key");case s.BackingUp:return Object(p.a)("Starting backup...");case s.Done:return Object(p.a)("Success!");default:return Object(p.a)("Create key backup")}}render(){let e;if(this.state.error)e=c.a.createElement("div",null,c.a.createElement("p",null,Object(p.a)("Unable to create key backup")),c.a.createElement(C.a,{primaryButton:Object(p.a)("Retry"),onPrimaryButtonClick:this.createBackup,hasCancel:!0,onCancel:this.onCancel}));else switch(this.state.phase){case s.Passphrase:e=this.renderPhasePassPhrase();break;case s.PassphraseConfirm:e=this.renderPhasePassPhraseConfirm();break;case s.ShowKey:e=this.renderPhaseShowKey();break;case s.KeepItSafe:e=this.renderPhaseKeepItSafe();break;case s.BackingUp:e=this.renderBusyPhase();break;case s.Done:e=this.renderPhaseDone();break;case s.OptOutConfirm:e=this.renderPhaseOptOutConfirm()}return c.a.createElement(P.a,{className:"mx_CreateKeyBackupDialog",onFinished:this.props.onFinished,title:this.titleForPhase(this.state.phase),hasCancel:[s.Passphrase,s.Done].includes(this.state.phase)},c.a.createElement("div",null,e))}}}}]);
//# sourceMappingURL=7.js.map