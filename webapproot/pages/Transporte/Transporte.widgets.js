Transporte.widgets = {
	transporterutasLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"type":"com.aprendoz_desarrollo.data.TransporteRutas"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.TransporteRutas","related":["grupoFamiliar","tipoTransporte"],"view":[
{"caption":"IdRuta","sortable":true,"dataIndex":"idRuta","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"NumeroRuta","sortable":true,"dataIndex":"numeroRuta","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"PlacaVehiculo","sortable":true,"dataIndex":"placaVehiculo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"NombreConductor","sortable":true,"dataIndex":"nombreConductor","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"TelefonoConductor","sortable":true,"dataIndex":"telefonoConductor","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"MovilConductor","sortable":true,"dataIndex":"movilConductor","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"NombreMonitora","sortable":true,"dataIndex":"nombreMonitora","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"TelefonoMonitor","sortable":true,"dataIndex":"telefonoMonitor","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"MovilMonitor","sortable":true,"dataIndex":"movilMonitor","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"IdAvantel","sortable":true,"dataIndex":"idAvantel","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},
{"caption":"NumeroAvantel","sortable":true,"dataIndex":"numeroAvantel","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},
{"caption":"NombreResponsable","sortable":true,"dataIndex":"nombreResponsable","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"descripcion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},
{"caption":"Telefono1","sortable":true,"dataIndex":"telefono1","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null},
{"caption":"Telefono2","sortable":true,"dataIndex":"telefono2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":14,"subType":null},
{"caption":"IdGrupoFamiliar","sortable":true,"dataIndex":"grupoFamiliar.idGrupoFamiliar","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"GrupoFamiliar","sortable":true,"dataIndex":"grupoFamiliar.grupoFamiliar","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"GrupoLdap","sortable":true,"dataIndex":"grupoFamiliar.grupoLdap","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"IdtipoTransporte","sortable":true,"dataIndex":"tipoTransporte.idtipoTransporte","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"TipoTransporte","sortable":true,"dataIndex":"tipoTransporte.tipoTransporte","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"tipoTransporte.descripcion","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}
]}, {}]
	}],
	grupoFamiliar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_desarrollo.data.GrupoFamiliar"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.GrupoFamiliar","view":[
{"caption":"GrupoLdap","sortable":true,"dataIndex":"grupoLdap","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"IdGrupoFamiliar","sortable":true,"dataIndex":"idGrupoFamiliar","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":38000,"subType":null,"widthUnits":"px"},
{"caption":"GrupoFamiliar","sortable":true,"dataIndex":"grupoFamiliar","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":38001,"subType":null,"widthUnits":"px"}
]}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top"}, {}, {
		panel_left: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"2,0,2,2","styles":{},"verticalAlign":"top","width":"100px"}, {}, {
			transporte_programacion: ["wm.Button", {"border":"0","caption":"Programación","desktopHeight":"70px","height":"70px","margin":"5,0,5,5","styles":{},"width":"90px"}, {}],
			transporte_permisos: ["wm.Button", {"border":"0","caption":"Rutas","desktopHeight":"70px","height":"70px","margin":"5,0,5,5","styles":{},"width":"90px"}, {}],
			transporte_solicitudes: ["wm.Button", {"border":"0","caption":"Solicitudes","desktopHeight":"70px","height":"70px","margin":"5,0,5,5","styles":{},"width":"90px"}, {}],
			idGrupoFamiliar: ["wm.Number", {"border":"0","caption":undefined,"dataValue":undefined,"displayValue":"","width":"100%"}, {}]
		}],
		panel_right: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			panel_rutas_center: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				transporterutasLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
					transporterutasDojoGrid: ["wm.DojoGrid", {"border":"1","columns":[
{"show":false,"field":"idRuta","title":"IdRuta","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"numeroRuta","title":"NumeroRuta","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"placaVehiculo","title":"Placa Vehículo","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"nombreConductor","title":"Nombre conductor","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"telefonoConductor","title":"TelefonoConductor","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"movilConductor","title":"MovilConductor","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"nombreMonitora","title":"NombreMonitora","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"telefonoMonitor","title":"TelefonoMonitor","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"movilMonitor","title":"MovilMonitor","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idAvantel","title":"IdAvantel","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"numeroAvantel","title":"NumeroAvantel","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"nombreResponsable","title":"NombreResponsable","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"descripcion","title":"Descripcion","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"telefono1","title":"Telefono1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"telefono2","title":"Telefono2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"grupoFamiliar.idGrupoFamiliar","title":"IdGrupoFamiliar","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"grupoFamiliar.grupoFamiliar","title":"GrupoFamiliar","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"grupoFamiliar.grupoLdap","title":"GrupoLdap","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tipoTransporte.idtipoTransporte","title":"IdtipoTransporte","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tipoTransporte.tipoTransporte","title":"TipoTransporte","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tipoTransporte.descripcion","title":"Descripcion","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Placa Vehículo: \" + ${placaVehiculo} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nombre conductor: \" + ${nombreConductor}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_desarrollo.data.TransporteRutas","height":"100%","margin":"4","minDesktopHeight":60,"width":"266px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"source":"transporterutasLiveVariable1","targetProperty":"dataSet"}, {}]
						}]
					}],
					transporterutasLiveForm1: ["wm.LiveForm", {"autoScroll":true,"height":"100%","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onBeginDelete":"transporterutasLiveForm1BeginDelete","onSuccess":"transporterutasLiveVariable1"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"transporterutasDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
						}],
						transporterutasLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"transporterutasLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
							savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
								saveButton1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"caption":"Guardar","height":"100%","margin":"4"}, {"onclick":"transporterutasLiveForm1EditPanel.saveData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"transporterutasLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
									}]
								}],
								cancelButton1: ["wm.Button", {"caption":"Cancelar","height":"100%","margin":"4"}, {"onclick":"transporterutasLiveForm1EditPanel.cancelEdit"}]
							}],
							operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								newButton1: ["wm.Button", {"caption":"Nuevo","height":"100%","margin":"4"}, {"onclick":"transporterutasLiveForm1EditPanel.beginDataInsert"}],
								updateButton1: ["wm.Button", {"caption":"Modificar","height":"100%","margin":"4"}, {"onclick":"transporterutasLiveForm1EditPanel.beginDataUpdate"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"transporterutasLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
									}]
								}],
								deleteButton1: ["wm.Button", {"caption":"Eliminar","height":"100%","margin":"4"}, {"onclick":"transporterutasLiveForm1EditPanel.deleteData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"transporterutasLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
									}]
								}]
							}]
						}],
						idRutaEditor1: ["wm.Number", {"border":"0","caption":"IdRuta","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idRuta","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}],
						numeroRutaEditor1: ["wm.Text", {"border":"0","caption":"NumeroRuta","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"numeroRuta","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}],
						placaVehiculoEditor1: ["wm.Text", {"border":"0","caption":"Placa Vehículo","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"placaVehiculo","height":"26px","helpText":"Ingrese la matrícula del vehículo. Ej. XYZ-456","placeHolder":"ABC-123","readonly":true,"required":true,"width":"100%"}, {}],
						nombreConductorEditor1: ["wm.Text", {"border":"0","caption":"Nombre del conductor","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"nombreConductor","helpText":undefined,"maxChars":65535,"placeHolder":"nombre del conductor","readonly":true,"required":true,"width":"100%"}, {}],
						telefonoConductorEditor1: ["wm.Text", {"border":"0","caption":"Teléfono","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"telefonoConductor","height":"26px","maxChars":15,"readonly":true,"required":true,"width":"100%"}, {}],
						movilConductorEditor1: ["wm.Text", {"border":"0","caption":"Móvil","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"movilConductor","height":"26px","maxChars":15,"readonly":true,"width":"100%"}, {}],
						nombreMonitoraEditor1: ["wm.LargeTextArea", {"caption":"NombreMonitora","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"nombreMonitora","height":"30px","maxChars":65535,"readonly":true,"showing":false,"width":"100%"}, {}],
						telefonoMonitorEditor1: ["wm.Text", {"border":"0","caption":"TelefonoMonitor","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"telefonoMonitor","height":"26px","maxChars":15,"readonly":true,"showing":false,"width":"100%"}, {}],
						movilMonitorEditor1: ["wm.Text", {"border":"0","caption":"MovilMonitor","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"movilMonitor","height":"26px","maxChars":15,"readonly":true,"showing":false,"width":"100%"}, {}],
						idAvantelEditor1: ["wm.Text", {"border":"0","caption":"IdAvantel","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"idAvantel","height":"26px","maxChars":5,"readonly":true,"showing":false,"width":"100%"}, {}],
						numeroAvantelEditor1: ["wm.Text", {"border":"0","caption":"NumeroAvantel","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"numeroAvantel","height":"26px","maxChars":15,"readonly":true,"showing":false,"width":"100%"}, {}],
						nombreResponsableEditor1: ["wm.LargeTextArea", {"caption":"NombreResponsable","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"0px","emptyValue":"emptyString","formField":"nombreResponsable","height":"0px","maxChars":65535,"readonly":true,"showing":false,"width":"0px"}, {}],
						descripcionEditor1: ["wm.LargeTextArea", {"caption":"Comentarios","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"89px","emptyValue":"emptyString","formField":"descripcion","height":"89px","maxChars":65535,"readonly":true,"width":"100%"}, {}],
						telefono1Editor1: ["wm.Text", {"border":"0","caption":"Telefono1","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"telefono1","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}],
						telefono2Editor1: ["wm.Text", {"border":"0","caption":"Telefono2","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"telefono2","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}],
						grupoFamiliarLookup1: ["wm.Lookup", {"autoDataSet":false,"caption":"Grupo familiar","captionAlign":"right","captionSize":"140px","dataType":"com.aprendoz_desarrollo.data.GrupoFamiliar","displayField":"grupoFamiliar","formField":"grupoFamiliar","height":"30px","readonly":true,"required":true,"width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								dataFieldWire: ["wm.Wire", {"source":"grupoFamiliarLookup1.liveVariable","targetProperty":"dataSet"}, {}],
								wire: ["wm.Wire", {"expression":undefined,"source":"grupoFamiliar","targetProperty":"dataSet"}, {}]
							}]
						}],
						tipoTransporteLookup1: ["wm.Lookup", {"caption":"Tipo transporte","captionAlign":"right","captionSize":"140px","dataType":"com.aprendoz_desarrollo.data.TipoTransporte","displayExpression":"${tipoTransporte}","displayField":"descripcion","formField":"tipoTransporte","height":"30px","readonly":true,"required":true,"width":"100%"}, {}],
						transporterutasSpacer: ["wm.Spacer", {"height":"100%","width":"10px"}, {}]
					}]
				}]
			}]
		}]
	}]
}