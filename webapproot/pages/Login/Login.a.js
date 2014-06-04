/*
*  Copyright (C) 2010 WaveMaker Software, Inc.
*
*  This file is part of the WaveMaker Client Runtime.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License.
*/
dojo.declare("Login", wm.Page, {
"preferredDevice": "desktop",
start: function() {
this.connect(this.domNode, "keydown", this, "keydown");
this.usernameInput.setDataValue(dojo.cookie("user") || "");
this.usernameInput.focus();
},
keydown: function(e) {
if (e.keyCode == dojo.keys.ENTER) {
this.loginButton.domNode.focus();
}
},
loginButtonClick: function(inSender) {
dojo.cookie("user", this.usernameInput.getDataValue(), {expires: 365});
this.loginErrorMsg.setCaption("");
wm.login(
[this.usernameInput.getDataValue(), this.passwordInput.getDataValue()],
null, dojo.hitch(this, "loginFailed"));
},
loginFailed: function(inResponse) {
this.loginErrorMsg.setCaption("Usuario y/o Contraseña invalido!");
this.usernameInput.focus();
},
_end: 0
});

Login.widgets = {
layoutBox: ["wm.Layout", {"styles":{},"width":"649px"}, {}, {
spacer2: ["wm.Spacer", {"height":"80%","styles":{},"width":"96px"}, {}],
loginMainPanel: ["wm.Panel", {"height":"344px","layoutKind":"left-to-right","styles":{}}, {}, {
spacer5: ["wm.Spacer", {"width":"100%"}, {}],
loginInputPanel: ["wm.Panel", {"_classes":{"domNode":["wm_Border_StyleFirefoxCurved4px","wm_Border_StyleSolid","wm_Border_Size1px","wm_Border_ColorLightGray","wm_FontSizePx_14px","wm_BackgroundColor_White"]},"borderColor":"#ffffff","height":"268px","padding":"10,55,10,55","styles":{},"verticalAlign":"middle","width":"450px"}, {}, {
logo_: ["wm.Picture", {"aspect":"v","height":"86px","source":"resources/images/iconsmaster_v2/Aprendoz_03.jpg","styles":{}}, {}],
label2: ["wm.Label", {"align":"center","caption":"Aprendoz Padres","height":"48px","padding":"4","width":"96px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
usernameInput: ["wm.Editor", {"caption":"Usuario","captionSize":"100px","height":"40px","padding":"2","styles":{}}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
passwordInput: ["wm.Editor", {"caption":"Contraseña","captionSize":"100px","height":"40px","padding":"2"}, {}, {
editor: ["wm._TextEditor", {"password":true}, {}]
}],
loginButtonPanel: ["wm.Panel", {"height":"44px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4"}, {}, {
passObject1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"align":"center","caption":"¿No puedes acceder a tu cuenta?","height":"32px","link":"http://aprendoz.rochester.edu.co/forgot-password","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
loginButton: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"border":"0","borderColor":"#aaa","caption":"Acceder","height":"100%","iconHeight":"20px","iconMargin":"0 -20px 0 0","iconUrl":undefined,"margin":"0","width":"110px"}, {"onclick":"loginButtonClick"}]
}],
spacer3: ["wm.Spacer", {"height":"11px"}, {}],
loginErrorMsg: ["wm.Label", {"align":"center","caption":" ","height":"100%","padding":"4","styles":{}}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
spacer4: ["wm.Spacer", {"styles":{},"width":"100%"}, {}]
}],
spacer1: ["wm.Spacer", {"height":"513px","width":"96px"}, {}],
panel2: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved12px","wm_BackgroundColor_White"]},"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"align":"center","caption":"Colegio Rochester  • Aprendoz © Versión 0.0.8 ● 2013","height":"48px","padding":"4","width":"513px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

Login.prototype._cssText = '#dijit_form_TextBox_0 {\
color: #a62121;\
}\
#dijit_form_TextBox_1 {\
color: #a62121;\
}\
.Login .Login-loginErrorMsg {\
font-family: "Scada", sans-serif;\
font-size: 18px;\
color: #a62121;\
letter-spacing: -0.05em;\
line-height: 20px;\
margin: 10px 0 30px;\
}\
.Login .Login-passObject1{\
font-size: 12px;\
text-decoration: none;\
}.Login .Login-layoutBox {\
background:  #FAFAFA url(resources/images/gradients/subtle_dots.png);\
color: #000;\
font: 14px Arial;\
margin: 0 auto;\
padding: 0;\
position: relative;\
}\
.Login .Login-panel_image {\
border-top-left-radius: 25px;\
}\
.Login .Login-loginInputPanel {\
border-bottom-right-radius: 25px;\
}\
.Login .Login-label2 {\
font-family: "Scada", sans-serif;\
font-size: 25px;\
color: #a62121;\
letter-spacing: -0.05em;\
line-height: 20px;\
margin: 10px 0 30px;\
}\
.Login .Login-usernameInput {\
border: 1px solid #c8c8c8;\
color: #777;\
margin: 0 0 10px;\
padding: 15px 10px 15px 40px;\
}\
.Login .Login-loginButton {\
background: rgb(247,249,250);\
background: -moz-linear-gradient(top, rgba(247,249,250,1) 0%, rgba(240,240,240,1) 100%);\
background: -webkit-linear-gradient(top, rgba(247,249,250,1) 0%,rgba(240,240,240,1) 100%);\
background: -o-linear-gradient(top, rgba(247,249,250,1) 0%,rgba(240,240,240,1) 100%);\
background: -ms-linear-gradient(top, rgba(247,249,250,1) 0%,rgba(240,240,240,1) 100%);\
background: linear-gradient(top, rgba(247,249,250,1) 0%,rgba(240,240,240,1) 100%);\
cursor: pointer;\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#f7f9fa", endColorstr="#f0f0f0",GradientType=0 );\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.1) inset;\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,0.1) inset;\
-ms-box-shadow: 0 1px 2px rgba(0,0,0,0.1) inset;\
-o-box-shadow: 0 1px 2px rgba(0,0,0,0.1) inset;\
box-shadow: 0 1px 2px rgba(0,0,0,0.1) inset;\
-webkit-border-radius: 0 0 5px 5px;\
-moz-border-radius: 0 0 5px 5px;\
-o-border-radius: 0 0 5px 5px;\
color: #7E7E7E;\
-ms-border-radius: 5px 5px 5px 5px;\
border-radius: 5px 5px 5px 5px;\
border-top: 1px solid #CFD5D9;\
}\
.Login .Login-passwordInput {\
border: 1px solid #c8c8c8;\
color: #777;\
margin: 0 0 10px;\
padding: 15px 10px 15px 40px;\
}\
';
Login.prototype._htmlText = '<div id="sample">Sample Markup</div>\
';