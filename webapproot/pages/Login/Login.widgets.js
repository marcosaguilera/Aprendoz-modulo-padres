Login.widgets = {
	layoutBox: ["wm.Layout", {"width":"649px"}, {}, {
		spacer2: ["wm.Spacer", {"height":"80px","width":"96px"}, {}],
		panel1: ["wm.Panel", {"height":"136px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			panel_image: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"450px"}, {}, {
				picture1: ["wm.Picture", {"aspect":"h","height":"131px","source":"http://aprendoz.rochester.edu.co/bundles/rochesteraprendoz/images/logo.jpg","width":"330px"}, {}]
			}]
		}],
		loginMainPanel: ["wm.Panel", {"height":"280px","layoutKind":"left-to-right"}, {}, {
			spacer5: ["wm.Spacer", {"width":"100%"}, {}],
			loginInputPanel: ["wm.Panel", {"_classes":{"domNode":["wm_Border_StyleFirefoxCurved4px","wm_Border_StyleSolid","wm_Border_Size1px","wm_Border_ColorLightGray","wm_FontSizePx_14px","wm_BackgroundColor_White"]},"borderColor":"#ffffff","padding":"5,55,10,55","width":"450px"}, {}, {
				label2: ["wm.Label", {"align":"center","caption":"Aprendoz Padres","height":"48px","padding":"4","width":"96px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				usernameInput: ["wm.Editor", {"caption":"Usuario","captionSize":"100px","height":"40px","padding":"2"}, {}, {
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
				loginErrorMsg: ["wm.Label", {"align":"center","caption":" ","height":"100%","padding":"4"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			spacer4: ["wm.Spacer", {"width":"100%"}, {}]
		}],
		spacer1: ["wm.Spacer", {"height":"513px","width":"96px"}, {}],
		panel2: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved12px","wm_BackgroundColor_White"]},"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"align":"center","caption":"Colegio Rochester  • Aprendoz © Versión 0.0.8 ● 2013","height":"48px","padding":"4","width":"513px"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}