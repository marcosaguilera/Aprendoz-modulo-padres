Schedule.widgets = {
	activitiesServiceVar: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"studentSujectActivities","service":"aprendoz_desarrollo"}, {"onSuccess":"activitiesServiceVarSuccess"}, {
		input: ["wm.ServiceInput", {"type":"studentSujectActivitiesInputs"}, {}]
	}],
	parents_global_currentSy2: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getSyByCurDate","service":"aprendoz_desarrollo"}, {"onSuccess":"parents_global_currentSy2Success"}, {
		input: ["wm.ServiceInput", {"type":"getSyByCurDateInputs"}, {}]
	}],
	details_activities_estudent: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"detailsActivitiesStudent","service":"aprendoz_desarrollo"}, {}, {
		input: ["wm.ServiceInput", {"type":"detailsActivitiesStudentInputs"}, {}]
	}],
	logActivities: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"480px","height":"480px","styles":{"backgroundColor":"#ecf0f1"},"title":"Detalles de Actividades y tareas","titlebarBorderColor":"#fbfbfb","titlebarHeight":"26"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"1","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			detallesDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"title","title":"Asignatura","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"id","title":"#Actividad","width":"80px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"fecha","title":"Fecha","width":"90px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"actividad","title":"Actividad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idasignatura","title":"Idasignatura","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Asignatura: \" + ${title} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"#Actividad: \" + ${id}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha: \" + ${wm.runtimeId}.formatCell(\"fecha\", ${fecha}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Actividad: \" + ${actividad}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_desarrollo.data.output.DetailsActivitiesStudentRtnType","height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"13px"}}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"details_activities_estudent","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1","desktopHeight":"34px","height":"34px"}, {}, {
			cerrar_dialog_box: ["wm.Button", {"_classes":{"domNode":["detalles"]},"caption":"Cerrar","margin":"4","styles":{}}, {"onclick":"logActivities.hide"}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","padding":"10","styles":{"backgroundColor":"#bdc3c7"},"verticalAlign":"top"}, {}, {
		schedule_main_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{"backgroundColor":"#d2c9c9"},"verticalAlign":"top","width":"100%"}, {}, {
			schedule_builder: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
				panel1: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#ecf0f1"},"verticalAlign":"middle","width":"100%"}, {}, {
					detalles: ["wm.Button", {"_classes":{"domNode":["detalles"]},"caption":"Ver detalles","desktopHeight":"43px","height":"43px","margin":"4","styles":{},"width":"136px"}, {"onclick":"detallesClick"}],
					fire: ["wm.Button", {"caption":"fire_button","margin":"4","showing":false}, {"onclick":"fireClick"}]
				}],
				schedule_builder_container: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}]
			}]
		}]
	}]
}