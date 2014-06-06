Login.widgets = {
	layoutBox: ["wm.Layout", {"styles":{},"width":"649px"}, {}, {
		spacer2: ["wm.Spacer", {"height":"80%","styles":{},"width":"96px"}, {}],
		loginMainPanel: ["wm.Panel", {"height":"344px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{}}, {}, {
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
			}]
		}],
		spacer1: ["wm.Spacer", {"height":"100%","width":"96px"}, {}],
		panel2: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			label1: ["wm.Label", {"align":"center","caption":"Colegio Rochester - Aprendoz © Versión 0.0.8- 2013 - 2014","height":"48px","padding":"4","styles":{"fontSize":"13px"},"width":"513px"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}