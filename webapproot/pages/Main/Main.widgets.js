Main.widgets = {
	logout: ["wm.ServiceVariable", {"operation":"logout","service":"securityService"}, {"onResult":"salir"}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	salir: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Login\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	dash_asignaturas_estudiante: ["wm.ServiceVariable", {"operation":"hql_dash_asignaturas","service":"aprendoz_desarrollo"}, {"onSuccess":"dash_asignaturas_estudianteSuccess"}, {
		input: ["wm.ServiceInput", {"type":"hql_dash_asignaturasInputs"}, {}]
	}],
	parents_global_username: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"getUserName","service":"securityService","startUpdate":true}, {"onSuccess":"parents_global_usernameSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	parents_global_user_info: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"personaGetInfo","service":"aprendoz_desarrollo"}, {"onSuccess":"parents_global_user_infoSuccess","onSuccess1":"parents_global_user_infoSuccess1","onSuccess2":"parents_global_user_infoSuccess2","onSuccess3":"parents_global_user_infoSuccess3"}, {
		input: ["wm.ServiceInput", {"type":"personaGetInfoInputs"}, {}]
	}],
	parents_local_performance_familyGroup: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getGrupoFamiliarbyUser","service":"aprendoz_desarrollo","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getGrupoFamiliarbyUserInputs"}, {}]
	}],
	parents_local_student_chart: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"hql_dash_asignaturas","service":"aprendoz_desarrollo"}, {"onSuccess":"parents_local_student_chartSuccess"}, {
		input: ["wm.ServiceInput", {"type":"hql_dash_asignaturasInputs"}, {}]
	}],
	parents_global_currentSy: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getSyByCurDate","service":"aprendoz_desarrollo"}, {}, {
		input: ["wm.ServiceInput", {"type":"getSyByCurDateInputs"}, {}]
	}],
	parents_local_student_subjects: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"hql_dash_asignaturas","service":"aprendoz_desarrollo"}, {}, {
		input: ["wm.ServiceInput", {"type":"hql_dash_asignaturasInputs"}, {}]
	}],
	parents_local_students_learnings: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"parentsSubjectStructure","service":"aprendoz_desarrollo"}, {}, {
		input: ["wm.ServiceInput", {"type":"parentsSubjectStructureInputs"}, {}]
	}],
	parents_local_educom: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"parentsCostosEduCom","service":"aprendoz_desarrollo"}, {"onSuccess":"parents_local_educomSuccess"}, {
		input: ["wm.ServiceInput", {"type":"parentsCostosEduComInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"comunity_educom_age_filter.dataValue","targetProperty":"y"}, {}]
			}]
		}]
	}],
	parents_variable_payment_type: ["wm.Variable", {"isList":true,"json":"[\n\t{\n\t\t\"name\": \"Mensual\", \n\t\t\"dataValue\": \"mensual\"\n\t}, \n\t{\n\t\t\"name\": \"Un solo pago\", \n\t\t\"dataValue\": \"un_solo_pago\"\n\t}\n]","type":"EntryData"}, {}],
	parents_viarbale_action_form: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.InscAlumCosto"}, {}],
	parents_local_students_learningDetails: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"parentsLearningsStructure","service":"aprendoz_desarrollo"}, {"onSuccess":"parents_local_students_learningDetailsSuccess"}, {
		input: ["wm.ServiceInput", {"type":"parentsLearningsStructureInputs"}, {}]
	}],
	parents_local_students_final_score: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"parentsFinalCualification","service":"aprendoz_desarrollo"}, {"onSuccess":"parents_local_students_final_scoreSuccess"}, {
		input: ["wm.ServiceInput", {"type":"parentsFinalCualificationInputs"}, {}]
	}],
	parents_local_students_historical_score: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"parentsHistoryCualifications","service":"aprendoz_desarrollo"}, {"onSuccess":"parents_local_students_historical_scoreSuccess"}, {
		input: ["wm.ServiceInput", {"type":"parentsHistoryCualificationsInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"performance_family_grid.selectedItem.pid","targetProperty":"idPer2"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"performance_student_details_learnings.selectedItem.idaprendizaje","targetProperty":"idApr2"}, {}]
			}]
		}]
	}],
	parents_local_students_score_details: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"parentsScoreDetails","service":"aprendoz_desarrollo"}, {"onSuccess":"parents_local_students_score_detailsSuccess"}, {
		input: ["wm.ServiceInput", {"type":"parentsScoreDetailsInputs"}, {}]
	}],
	parents_variable_insert_educom_subscription: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.InscPersonaEduCom"}, {}],
	parents_variable_transp_options: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Si\",\"dataValue\":\"1\"},{\"name\":\"No\",\"dataValue\":\"0\"}]","type":"EntryData"}, {}],
	parents_local_comunity_subscribed_curses: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","maxResults":20,"startUpdate":false,"type":"com.aprendoz_desarrollo.data.InscPersonaEduCom"}, {"onSuccess":"parents_local_comunity_subscribed_cursesSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"performance_family_grid.selectedItem.pid","targetProperty":"filter.persona.idPersona"}, {}]
		}],
		liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.InscPersonaEduCom","related":["educom","educom.sy","educom.costos","persona"],"view":[
{"caption":"IdInscPersonaEduCom","sortable":true,"dataIndex":"idInscPersonaEduCom","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"FechaCreacion","sortable":true,"dataIndex":"fechaCreacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"FechaActualizacion","sortable":true,"dataIndex":"fechaActualizacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Descuento","sortable":true,"dataIndex":"descuento","type":"java.lang.Double","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"TomaTransporte","sortable":true,"dataIndex":"tomaTransporte","type":"java.lang.Byte","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Plazo","sortable":true,"dataIndex":"plazo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"ActivoRetirado","sortable":true,"dataIndex":"activoRetirado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Beca","sortable":true,"dataIndex":"beca","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}
]}, {}]
	}],
	recordInserted: ["wm.NavigationCall", {"operation":"showToast"}, {}, {
		input: ["wm.ServiceInput", {"type":"showToastInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Curso inscrito exitosamente.\"","targetProperty":"content"}, {}],
				wire1: ["wm.Wire", {"expression":"3000","targetProperty":"duration"}, {}],
				wire2: ["wm.Wire", {"expression":"\"Success\"","targetProperty":"cssClasses"}, {}],
				wire3: ["wm.Wire", {"expression":"\"bottom center\"","targetProperty":"dialogPosition"}, {}]
			}]
		}]
	}],
	errorInsertion: ["wm.NavigationCall", {"operation":"showToast"}, {}, {
		input: ["wm.ServiceInput", {"type":"showToastInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Error al realizar la incripción.\"","targetProperty":"content"}, {}],
				wire1: ["wm.Wire", {"expression":"3000","targetProperty":"duration"}, {}],
				wire2: ["wm.Wire", {"expression":"\"Error\"","targetProperty":"cssClasses"}, {}],
				wire3: ["wm.Wire", {"expression":"\"bottom center\"","targetProperty":"dialogPosition"}, {}]
			}]
		}]
	}],
	parents_local_educom_delete_record: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"parentsDeleteSubscription","service":"aprendoz_desarrollo"}, {"onError":"deleteRecordError","onSuccess":"parents_local_comunity_subscribed_curses","onSuccess1":"deleteRecordSuccess"}, {
		input: ["wm.ServiceInput", {"type":"parentsDeleteSubscriptionInputs"}, {}]
	}],
	deleteRecordSuccess: ["wm.NavigationCall", {"operation":"showToast"}, {}, {
		input: ["wm.ServiceInput", {"type":"showToastInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Curso retirado exitosamente.\"","targetProperty":"content"}, {}],
				wire1: ["wm.Wire", {"expression":"3000","targetProperty":"duration"}, {}],
				wire2: ["wm.Wire", {"expression":"\"Success\"","targetProperty":"cssClasses"}, {}],
				wire3: ["wm.Wire", {"expression":"\"bottom center\"","targetProperty":"dialogPosition"}, {}]
			}]
		}]
	}],
	deleteRecordError: ["wm.NavigationCall", {"operation":"showToast"}, {}, {
		input: ["wm.ServiceInput", {"type":"showToastInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Error al retirar el curso inscrito.\"","targetProperty":"content"}, {}],
				wire1: ["wm.Wire", {"expression":"3000","targetProperty":"duration"}, {}],
				wire2: ["wm.Wire", {"expression":"\"Error\"","targetProperty":"cssClasses"}, {}],
				wire3: ["wm.Wire", {"expression":"\"bottom center\"","targetProperty":"dialogPosition"}, {}]
			}]
		}]
	}],
	templateUsernameVar: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	templateLogoutVar: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	navigationCall1: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Schedule\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"schedule_page_container","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	timeListener: ["wm.Timer", {"repeating":false}, {"onTimerFire":"timeListenerTimerFire"}],
	gestionencuestasLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"type":"com.aprendoz_desarrollo.data.GestionEncuestas"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.GestionEncuestas","related":["persona"],"view":[
{"caption":"IdPkEncuesta","sortable":true,"dataIndex":"idPkEncuesta","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"FechaIngreso","sortable":true,"dataIndex":"fechaIngreso","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"FechaActualizacion","sortable":true,"dataIndex":"fechaActualizacion","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Tipo","sortable":true,"dataIndex":"tipo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Grado","sortable":true,"dataIndex":"grado","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"P1","sortable":true,"dataIndex":"p1","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"P2","sortable":true,"dataIndex":"p2","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"P3","sortable":true,"dataIndex":"p3","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"P4","sortable":true,"dataIndex":"p4","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"P5","sortable":true,"dataIndex":"p5","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},
{"caption":"P6","sortable":true,"dataIndex":"p6","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},
{"caption":"P7","sortable":true,"dataIndex":"p7","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},
{"caption":"P8","sortable":true,"dataIndex":"p8","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},
{"caption":"P9","sortable":true,"dataIndex":"p9","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null},
{"caption":"P10","sortable":true,"dataIndex":"p10","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":14,"subType":null},
{"caption":"P11","sortable":true,"dataIndex":"p11","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":15,"subType":null},
{"caption":"P12","sortable":true,"dataIndex":"p12","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":16,"subType":null},
{"caption":"P13","sortable":true,"dataIndex":"p13","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":17,"subType":null},
{"caption":"P14","sortable":true,"dataIndex":"p14","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":18,"subType":null},
{"caption":"P15","sortable":true,"dataIndex":"p15","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":19,"subType":null},
{"caption":"P16","sortable":true,"dataIndex":"p16","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":20,"subType":null},
{"caption":"P17","sortable":true,"dataIndex":"p17","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":21,"subType":null},
{"caption":"P18","sortable":true,"dataIndex":"p18","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":22,"subType":null},
{"caption":"P19","sortable":true,"dataIndex":"p19","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":23,"subType":null},
{"caption":"P20","sortable":true,"dataIndex":"p20","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":24,"subType":null},
{"caption":"Sugerencias","sortable":true,"dataIndex":"sugerencias","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":25,"subType":null}
]}, {}]
	}],
	gestionencuestasLiveVariable2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"type":"com.aprendoz_desarrollo.data.GestionEncuestas"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.GestionEncuestas","related":["persona"],"view":[
{"caption":"IdPkEncuesta","sortable":true,"dataIndex":"idPkEncuesta","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"FechaIngreso","sortable":true,"dataIndex":"fechaIngreso","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"FechaActualizacion","sortable":true,"dataIndex":"fechaActualizacion","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Tipo","sortable":true,"dataIndex":"tipo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Grado","sortable":true,"dataIndex":"grado","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"P1","sortable":true,"dataIndex":"p1","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"P2","sortable":true,"dataIndex":"p2","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"P3","sortable":true,"dataIndex":"p3","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"P4","sortable":true,"dataIndex":"p4","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"P5","sortable":true,"dataIndex":"p5","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},
{"caption":"P6","sortable":true,"dataIndex":"p6","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},
{"caption":"P7","sortable":true,"dataIndex":"p7","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},
{"caption":"P8","sortable":true,"dataIndex":"p8","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},
{"caption":"P9","sortable":true,"dataIndex":"p9","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null},
{"caption":"P10","sortable":true,"dataIndex":"p10","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":14,"subType":null},
{"caption":"P11","sortable":true,"dataIndex":"p11","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":15,"subType":null},
{"caption":"P12","sortable":true,"dataIndex":"p12","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":16,"subType":null},
{"caption":"P13","sortable":true,"dataIndex":"p13","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":17,"subType":null},
{"caption":"P14","sortable":true,"dataIndex":"p14","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":18,"subType":null},
{"caption":"P15","sortable":true,"dataIndex":"p15","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":19,"subType":null},
{"caption":"P16","sortable":true,"dataIndex":"p16","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":20,"subType":null},
{"caption":"P17","sortable":true,"dataIndex":"p17","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":21,"subType":null},
{"caption":"P18","sortable":true,"dataIndex":"p18","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":22,"subType":null},
{"caption":"P19","sortable":true,"dataIndex":"p19","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":23,"subType":null},
{"caption":"P20","sortable":true,"dataIndex":"p20","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":24,"subType":null},
{"caption":"Sugerencias","sortable":true,"dataIndex":"sugerencias","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":25,"subType":null}
]}, {}]
	}],
	opcionesEncuestasVariable: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"SIEMPRE\",\"dataValue\":\"4\"},{\"name\":\"CASI SIEMPRE\",\"dataValue\":\"3\"},{\"name\":\"CASI NUNCA\",\"dataValue\":\"2\"},{\"name\":\"NUNCA\",\"dataValue\":\"1\"}]","type":"EntryData"}, {}],
	encuestaActions: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.GestionEncuestas"}, {}],
	encuestaRegistroFamilia: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.GestionEncuestasGrupoFamiliar"}, {}],
	getLogEncuesta: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getLogEncuesta","service":"aprendoz_desarrollo"}, {"onSuccess":"getLogEncuestaSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getLogEncuestaInputs"}, {}]
	}],
	getEducomCount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getEducomCount","service":"aprendoz_desarrollo"}, {"onSuccess":"getEducomCountSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getEducomCountInputs"}, {}]
	}],
	getEducomEAD: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getEducomEAD","service":"aprendoz_desarrollo"}, {}, {
		input: ["wm.ServiceInput", {"type":"getEducomEADInputs"}, {}]
	}],
	getEducomEPD: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getEducomEPD","service":"aprendoz_desarrollo"}, {}, {
		input: ["wm.ServiceInput", {"type":"getEducomEPDInputs"}, {}]
	}],
	getMaxEducom: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getMaxEducom","service":"aprendoz_desarrollo"}, {}, {
		input: ["wm.ServiceInput", {"type":"getMaxEducomInputs"}, {}]
	}],
	getEducomOLA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getEducomOLA","service":"aprendoz_desarrollo"}, {}, {
		input: ["wm.ServiceInput", {"type":"getEducomOLAInputs"}, {}]
	}],
	getEducomECR: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getEducomECR","service":"aprendoz_desarrollo"}, {}, {
		input: ["wm.ServiceInput", {"type":"getEducomECRInputs"}, {}]
	}],
	getEducomEFA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getEducomAFR","service":"aprendoz_desarrollo"}, {}, {
		input: ["wm.ServiceInput", {"type":"getEducomAFRInputs"}, {}]
	}],
	log_acciones_padres: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.LogAccionesPadres"}, {}],
	updatePasswordSetter: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"updatePasswordProfile","service":"aprendoz_desarrollo"}, {"onError":"updatePasswordWarning","onSuccess":"updatePasswordSuccess"}, {
		input: ["wm.ServiceInput", {"type":"updatePasswordProfileInputs"}, {}]
	}],
	updatePassSV: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast"}, {}, {
		input: ["wm.ServiceInput", {"type":"Inputs"}, {}]
	}],
	updatePasswordSuccess: ["wm.NavigationCall", {"operation":"showToast"}, {}, {
		input: ["wm.ServiceInput", {"type":"showToastInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"3000","targetProperty":"duration"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Success\"","targetProperty":"cssClasses"}, {}],
				wire2: ["wm.Wire", {"expression":"\"center center\"","targetProperty":"dialogPosition"}, {}],
				wire3: ["wm.Wire", {"expression":"\"¡Clave actualizada exitosamente!\"","targetProperty":"content"}, {}]
			}]
		}]
	}],
	updatePasswordWarning: ["wm.NavigationCall", {"operation":"showToast"}, {}, {
		input: ["wm.ServiceInput", {"type":"showToastInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"¡Acción no completada!, intente nuevamente\"","targetProperty":"content"}, {}],
				wire1: ["wm.Wire", {"expression":"3000","targetProperty":"duration"}, {}],
				wire2: ["wm.Wire", {"expression":"\"Warning\"","targetProperty":"cssClasses"}, {}],
				wire3: ["wm.Wire", {"expression":"\"center center\"","targetProperty":"dialogPosition"}, {}]
			}]
		}]
	}],
	transportenovedadesLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"orderBy":"desc: idNovedades","startUpdate":false,"type":"com.aprendoz_desarrollo.data.TransporteNovedades"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.TransporteNovedades","related":["transporteRutas","persona","tipoSolicitud"],"view":[
{"caption":"IdNovedades","sortable":true,"dataIndex":"idNovedades","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"FechaSolicitudInicio","sortable":true,"dataIndex":"fechaSolicitudInicio","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"FechaSolicitudFin","sortable":true,"dataIndex":"fechaSolicitudFin","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"HoraProgramada","sortable":true,"dataIndex":"horaProgramada","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"NumeroPuerta","sortable":true,"dataIndex":"numeroPuerta","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"AprobacionDirNivel","sortable":true,"dataIndex":"aprobacionDirNivel","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"ComentarioDirNivel","sortable":true,"dataIndex":"comentarioDirNivel","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"AprobacionCoordinador","sortable":true,"dataIndex":"aprobacionCoordinador","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"ComentarioCoordinador","sortable":true,"dataIndex":"comentarioCoordinador","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"AprobacionTransporte","sortable":true,"dataIndex":"aprobacionTransporte","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},
{"caption":"ComentarioTransporte","sortable":true,"dataIndex":"comentarioTransporte","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},
{"caption":"AprobacionEnfermeria","sortable":true,"dataIndex":"aprobacionEnfermeria","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},
{"caption":"ComentarioEnfermeria","sortable":true,"dataIndex":"comentarioEnfermeria","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},
{"caption":"Observaciones","sortable":true,"dataIndex":"observaciones","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null},
{"caption":"FechaCreacion","sortable":true,"dataIndex":"fechaCreacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":14,"subType":null},
{"caption":"FechaActualizacion","sortable":true,"dataIndex":"fechaActualizacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":15,"subType":null}
]}, {}]
	}],
	tipoSolicitudLiveVariable: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_desarrollo.data.TipoSolicitud"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.TipoSolicitud","view":[
{"caption":"IdTipoSolicitud","sortable":true,"dataIndex":"idTipoSolicitud","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Solicitud","sortable":true,"dataIndex":"solicitud","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"DisponiblePadres","sortable":true,"dataIndex":"disponiblePadres","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"DisponibleAdmon","sortable":true,"dataIndex":"disponibleAdmon","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null}
]}, {}]
	}],
	autorizadosLiveVariable: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_desarrollo.data.TransporteRutas"}, {}, {
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
{"caption":"Telefono2","sortable":true,"dataIndex":"telefono2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":14,"subType":null}
]}, {}]
	}],
	solicitudPersonaLiveVariable: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","maxResults":5,"startUpdate":false,"type":"com.aprendoz_desarrollo.data.Persona"}, {"onSuccess":"solicitudPersonaLiveVariableSuccess"}, {
		liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.Persona","view":[
{"caption":"IdPersona","sortable":true,"dataIndex":"idPersona","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"NombreLdap","sortable":true,"dataIndex":"nombreLdap","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Clave","sortable":true,"dataIndex":"clave","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Codigo","sortable":true,"dataIndex":"codigo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Email","sortable":true,"dataIndex":"email","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Matriculado","sortable":true,"dataIndex":"matriculado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"ActivoRetirado","sortable":true,"dataIndex":"activoRetirado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Apellido1","sortable":true,"dataIndex":"apellido1","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"Apellido2","sortable":true,"dataIndex":"apellido2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"Nombre1","sortable":true,"dataIndex":"nombre1","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},
{"caption":"Nombre2","sortable":true,"dataIndex":"nombre2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},
{"caption":"NivelAcademico","sortable":true,"dataIndex":"nivelAcademico","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},
{"caption":"FechaNacimiento","sortable":true,"dataIndex":"fechaNacimiento","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},
{"caption":"DireccionResidencia","sortable":true,"dataIndex":"direccionResidencia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null},
{"caption":"Telefono","sortable":true,"dataIndex":"telefono","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":14,"subType":null},
{"caption":"Telefono2","sortable":true,"dataIndex":"telefono2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":15,"subType":null},
{"caption":"Religion","sortable":true,"dataIndex":"religion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":16,"subType":null},
{"caption":"TipoDocumento","sortable":true,"dataIndex":"tipoDocumento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":17,"subType":null},
{"caption":"NoDocumento","sortable":true,"dataIndex":"noDocumento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":18,"subType":null},
{"caption":"Nacionalidad","sortable":true,"dataIndex":"nacionalidad","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":19,"subType":null},
{"caption":"LugarNacimientoDepartamento","sortable":true,"dataIndex":"lugarNacimientoDepartamento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":20,"subType":null},
{"caption":"LugarNacimientoMunicipio","sortable":true,"dataIndex":"lugarNacimientoMunicipio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":21,"subType":null},
{"caption":"LugarExpedicionMunicipio","sortable":true,"dataIndex":"lugarExpedicionMunicipio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":22,"subType":null},
{"caption":"LugarExpedicionDepartamento","sortable":true,"dataIndex":"lugarExpedicionDepartamento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":23,"subType":null},
{"caption":"PaisDomicilio","sortable":true,"dataIndex":"paisDomicilio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":24,"subType":null},
{"caption":"Barrio","sortable":true,"dataIndex":"barrio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":25,"subType":null},
{"caption":"CodigoPostal","sortable":true,"dataIndex":"codigoPostal","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":26,"subType":null},
{"caption":"Municipio","sortable":true,"dataIndex":"municipio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":27,"subType":null},
{"caption":"Departamento","sortable":true,"dataIndex":"departamento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":28,"subType":null},
{"caption":"SaludPrepagada","sortable":true,"dataIndex":"saludPrepagada","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":29,"subType":null},
{"caption":"Eps","sortable":true,"dataIndex":"eps","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":30,"subType":null},
{"caption":"NumeroContratoSalud","sortable":true,"dataIndex":"numeroContratoSalud","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":31,"subType":null},
{"caption":"ClinicaEmergencia","sortable":true,"dataIndex":"clinicaEmergencia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":32,"subType":null},
{"caption":"ViveCon","sortable":true,"dataIndex":"viveCon","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":33,"subType":null},
{"caption":"TipoSangre","sortable":true,"dataIndex":"tipoSangre","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":34,"subType":null},
{"caption":"Sexo","sortable":true,"dataIndex":"sexo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":35,"subType":null},
{"caption":"CodigoFamilia","sortable":true,"dataIndex":"codigoFamilia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":36,"subType":null},
{"caption":"FechaIngreso","sortable":true,"dataIndex":"fechaIngreso","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":37,"subType":null},
{"caption":"GradoIngreso","sortable":true,"dataIndex":"gradoIngreso","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":38,"subType":null},
{"caption":"CursoIngreso","sortable":true,"dataIndex":"cursoIngreso","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":39,"subType":null},
{"caption":"FechaRetiro","sortable":true,"dataIndex":"fechaRetiro","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":40,"subType":null},
{"caption":"ComentarioRetiro","sortable":true,"dataIndex":"comentarioRetiro","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":41,"subType":null},
{"caption":"ColegioAnterior","sortable":true,"dataIndex":"colegioAnterior","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":42,"subType":null},
{"caption":"HijoDeExalumno","sortable":true,"dataIndex":"hijoDeExalumno","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":43,"subType":null},
{"caption":"NombrePadreExalumno","sortable":true,"dataIndex":"nombrePadreExalumno","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":44,"subType":null},
{"caption":"Promocion","sortable":true,"dataIndex":"promocion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":45,"subType":null},
{"caption":"NumeroTarjetaCredito","sortable":true,"dataIndex":"numeroTarjetaCredito","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":46,"subType":null},
{"caption":"Profesion","sortable":true,"dataIndex":"profesion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":47,"subType":null},
{"caption":"Empresa","sortable":true,"dataIndex":"empresa","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":48,"subType":null},
{"caption":"Cargo","sortable":true,"dataIndex":"cargo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":49,"subType":null},
{"caption":"Celular","sortable":true,"dataIndex":"celular","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":50,"subType":null},
{"caption":"DireccionOficina","sortable":true,"dataIndex":"direccionOficina","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":51,"subType":null},
{"caption":"TelefonoOficina","sortable":true,"dataIndex":"telefonoOficina","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":52,"subType":null},
{"caption":"Parentesco","sortable":true,"dataIndex":"parentesco","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":53,"subType":null},
{"caption":"RutaM","sortable":true,"dataIndex":"rutaM","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":54,"subType":null},
{"caption":"RutaT","sortable":true,"dataIndex":"rutaT","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":55,"subType":null},
{"caption":"TomaAlmuerzo","sortable":true,"dataIndex":"tomaAlmuerzo","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":56,"subType":null},
{"caption":"TomaMediasNueves","sortable":true,"dataIndex":"tomaMediasNueves","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":57,"subType":null},
{"caption":"TomaSeguroAccidentes","sortable":true,"dataIndex":"tomaSeguroAccidentes","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":58,"subType":null},
{"caption":"NoPlaqueta","sortable":true,"dataIndex":"noPlaqueta","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":59,"subType":null},
{"caption":"InscAlumCursoIdInscAlumCurso","sortable":true,"dataIndex":"inscAlumCursoIdInscAlumCurso","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":60,"subType":null}
]}, {}]
	}],
	insertImgUser: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.PerfilPersonaImg"}, {}],
	getImgNameService: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"imgNameByUser","service":"aprendoz_desarrollo"}, {"onSuccess":"getImgNameServiceSuccess"}, {
		input: ["wm.ServiceInput", {"type":"imgNameByUserInputs"}, {}]
	}],
	getImgUpdate: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"imgUpdateNameByUser","service":"aprendoz_desarrollo"}, {"onSuccess":"getImgUpdateSuccess"}, {
		input: ["wm.ServiceInput", {"type":"imgUpdateNameByUserInputs"}, {}]
	}],
	uploadCustom: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"listFiles","service":"FileUploadDownload"}, {}, {
		input: ["wm.ServiceInput", {"type":"listFilesInputs"}, {}]
	}],
	syDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"197px","height":"197px","styles":{},"title":"sy","width":"500px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			syLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"114px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"syLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"syDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				idSyEditor1: ["wm.Number", {"border":"0","caption":"IdSy","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idSy","height":"26px","required":true,"width":"100%"}, {}],
				schoolYearEditor1: ["wm.Text", {"border":"0","caption":"SchoolYear","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"schoolYear","height":"26px","maxChars":45,"width":"100%"}, {}],
				fechaDesdeEditor1: ["wm.DateTime", {"border":"0","caption":"FechaDesde","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"fechaDesde","height":"26px","width":"100%"}, {}],
				fechaHastaEditor1: ["wm.DateTime", {"border":"0","caption":"FechaHasta","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"fechaHasta","height":"26px","width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"33px","height":"33px"}, {}, {
			sySaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"syLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"syLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			syCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"syDialog.hide","onclick1":"syLiveForm1.cancelEdit"}]
		}]
	}],
	comunity_dialog_terms: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","styles":{"backgroundColor":"#3752a3","color":"#ffffff"},"title":"Terminos y condiciones"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			comunity_terms_conditions: ["wm.LargeTextArea", {"border":"0","caption":undefined,"dataValue":"<p>Se requiere realizar la inscripci&oacute;n a trav&eacute;s de&nbsp;<strong>APRENDOZ</strong>, con su usuario y contrase&ntilde;a, en su m&oacute;dulo de&nbsp;<strong>Padres y Estudiantes</strong>, dentro de la pesta&ntilde;a de&nbsp;<strong>Educaci&oacute;n Comunitaria</strong>. No se genera cobro por dicha actividad.</p>  <p>Cada estudiante podr&aacute; inscribirse en una actividad deportiva (de EPD u OLA) y una actividad art&iacute;stica, cient&iacute;fica o recreativa (de EFA o ECR), siendo dos el m&aacute;ximo de actividades por estudiante. Solo se podr&aacute; incluir una tercera, si esta pertenece a las actividades adicionales de fin de semana de OLA. Recuerde que todas las actividades tienen cupos limitados.</p>  <p>Las actividades adicionales de fin de semana, publicadas en el folleto edu-com, se pagar&aacute;n de acuerdo con las tarifas que all&iacute; aparecen y su cobro se realizar&aacute; a trav&eacute;s de la tarjeta Diners-Davivienda. Para aquellos padres de familia que cancelaron el valor de las mensualidades de manera anticipada, el pago de las actividades deber&aacute;n realizarlo directamente en la tesorer&iacute;a del Colegio o consignando a nuestra cuenta de ahorros del Banco de Bogot&aacute; No. 085218527&nbsp;a nombre de Fundaci&oacute;n Educativa Rochester y registrando el c&oacute;digo del alumno en referencia 1.</p>  <p><strong>Fechas de inscripci&oacute;n:</strong>&nbsp;Martes 26 al Jueves 28 de Agosto de 2014</p>  <p><strong>Fecha de inicio de las actividades:</strong>&nbsp;1 de Septiembre de 2014.</p>  <p><strong>Fecha de finalizaci&oacute;n del semestre:</strong>&nbsp;10 de Diciembre de 2014.</p>  <p><strong>Transporte:</strong>&nbsp;Las rutas extracurriculares puerta a puerta saldr&aacute;n los lunes a las 3:00 p.m., y de martes a viernes a las 5:00 p.m.</p>  <p>Para los estudiantes que son recogidos en el colegio por sus padres o acudientes, les recordamos lo importante que es el recogerlos puntualmente, puesto que los lunes despu&eacute;s de las 3:00 p.m. y de martes a viernes despu&eacute;s de las 5:00 p.m., no hay personal que pueda hacerse cargo de ellos.</p>","displayValue":"<p>Se requiere realizar la inscripci&oacute;n a trav&eacute;s de&nbsp;<strong>APRENDOZ</strong>, con su usuario y contrase&ntilde;a, en su m&oacute;dulo de&nbsp;<strong>Padres y Estudiantes</strong>, dentro de la pesta&ntilde;a de&nbsp;<strong>Educaci&oacute;n Comunitaria</strong>. No se genera cobro por dicha actividad.</p>  <p>Cada estudiante podr&aacute; inscribirse en una actividad deportiva (de EPD u OLA) y una actividad art&iacute;stica, cient&iacute;fica o recreativa (de EFA o ECR), siendo dos el m&aacute;ximo de actividades por estudiante. Solo se podr&aacute; incluir una tercera, si esta pertenece a las actividades adicionales de fin de semana de OLA. Recuerde que todas las actividades tienen cupos limitados.</p>  <p>Las actividades adicionales de fin de semana, publicadas en el folleto edu-com, se pagar&aacute;n de acuerdo con las tarifas que all&iacute; aparecen y su cobro se realizar&aacute; a trav&eacute;s de la tarjeta Diners-Davivienda. Para aquellos padres de familia que cancelaron el valor de las mensualidades de manera anticipada, el pago de las actividades deber&aacute;n realizarlo directamente en la tesorer&iacute;a del Colegio o consignando a nuestra cuenta de ahorros del Banco de Bogot&aacute; No. 085218527&nbsp;a nombre de Fundaci&oacute;n Educativa Rochester y registrando el c&oacute;digo del alumno en referencia 1.</p>  <p><strong>Fechas de inscripci&oacute;n:</strong>&nbsp;Martes 26 al Jueves 28 de Agosto de 2014</p>  <p><strong>Fecha de inicio de las actividades:</strong>&nbsp;1 de Septiembre de 2014.</p>  <p><strong>Fecha de finalizaci&oacute;n del semestre:</strong>&nbsp;10 de Diciembre de 2014.</p>  <p><strong>Transporte:</strong>&nbsp;Las rutas extracurriculares puerta a puerta saldr&aacute;n los lunes a las 3:00 p.m., y de martes a viernes a las 5:00 p.m.</p>  <p>Para los estudiantes que son recogidos en el colegio por sus padres o acudientes, les recordamos lo importante que es el recogerlos puntualmente, puesto que los lunes despu&eacute;s de las 3:00 p.m. y de martes a viernes despu&eacute;s de las 5:00 p.m., no hay personal que pueda hacerse cargo de ellos.</p>","height":"100%","helpText":undefined,"readonly":true,"styles":{"color":"#060606","fontSize":"14px"},"width":"100%"}, {}]
		}],
		buttonBar1: ["wm.ButtonBarPanel", {"border":"1","desktopHeight":"34px","height":"34px","horizontalAlign":"left","styles":{},"verticalAlign":"middle"}, {}, {
			comunity_iagree_radio: ["wm.RadioButton", {"caption":"<font color=\"white\">Acepto los terminos","captionAlign":"left","captionPosition":"right","captionSize":"50px","displayValue":"","groupValue":"WAR","styles":{},"width":"166px"}, {"onchange":"comunity_iagree_radioChange"}],
			comunity_disagree_radio: ["wm.RadioButton", {"caption":"<font color=\"white\">No estoy de acuerdo","captionAlign":"left","captionPosition":"right","captionSize":"50px","displayValue":"","groupValue":"WAR","styles":{"color":"#ffffff"},"width":"161px"}, {}],
			comunity_terms_spacer: ["wm.Spacer", {"height":"100%","width":"100%"}, {}],
			comunity_terms_accept: ["wm.Button", {"caption":"Aceptar","disabled":true,"margin":"4"}, {"onclick":"comunity_terms_acceptClick","onclick1":"comunity_terms_acceptClick1"}],
			comunity_terms_non_accept: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"comunity_dialog_terms.hide"}]
		}]
	}],
	loadingDialog1: ["wm.LoadingDialog", {"caption":"Unos segundos mas...","serviceVariableToTrack":["parents_global_user_info","parents_global_username","parents_local_performance_familyGroup"]}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	designableDialog1: ["wm.DesignableDialog", {"buttonBarId":"buttonBar2","containerWidgetId":"containerWidget2","desktopHeight":"550px","height":"550px","noEscape":true,"styles":{"backgroundColor":"#3752a3"},"title":"<font-color=\"white\">Encuesta Colegio Rochester - 2014"}, {}, {
		containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#fff"},"verticalAlign":"top","width":"100%"}, {}, {
			estudiante: ["wm.Label", {"align":"center","caption":"LO SENTIMOS, PERO ESTA ENCUESTA SOLO PUEDE SER DILIGENCIADA POR UN ADULTO. <br><br>Agradecemos su comprensión.","height":"100%","padding":"4","showing":false,"singleLine":false,"styles":{"backgroundColor":"#fff","color":"#c5363a","fontSize":"13px"},"width":"100%"}, {}],
			wizardLayers1: ["wm.WizardLayers", {"showing":false,"styles":{}}, {"onDoneClick":"wizardLayers1DoneClick"}, {
				layer1: ["wm.Layer", {"caption":"Inicio","horizontalAlign":"center","padding":"0,50,0,50","styles":{"color":"#090808"},"themeStyleType":"ContentPanel","verticalAlign":"middle"}, {}, {
					panel5: ["wm.Panel", {"height":"81px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						picture2: ["wm.Picture", {"aspect":"h","height":"73px","source":"http://aprendoz.rochester.edu.co/recursos/Logo_Rochester_Esp.png","styles":{},"width":"94px"}, {}]
					}],
					label2: ["wm.Label", {"align":"center","caption":"Encuesta de satisfacción de los padres de familia","height":"47px","padding":"4","styles":{"fontSize":"14px"},"width":"200%"}, {}],
					label3: ["wm.Label", {"align":"center","caption":"Dentro del proceso de excelencia (EFQM) del Rochester, te solicitamos contestar esta encuesta como miembro esencial de nuestra comunidad de aprendizaje. La utilizarán varios equipos de mejora del colegio para el mejoramiento y la innovación de los servicios escolares.<br><br>Para iniciar haga clic en \"Next\"","height":"116px","padding":"4","singleLine":false,"styles":{"fontSize":"12px"},"width":"200%"}, {}]
				}],
				layer2: ["wm.Layer", {"autoScroll":true,"caption":"Sección 1","horizontalAlign":"center","padding":"0,30,0,30","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					p1: ["wm.RadioSet", {"caption":"1.\tMe siento en confianza en el colegio.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"styles":{},"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					p2: ["wm.RadioSet", {"caption":"2.\tMe siento querida(o) y tenida(o) en cuenta en el colegio.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"styles":{},"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					p3: ["wm.RadioSet", {"caption":"3.\tTengo un alto sentido de pertenencia al colegio.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					p4: ["wm.RadioSet", {"caption":"4.\tPercibo exigente y retador el plan de estudios del colegio.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					p5: ["wm.RadioSet", {"caption":"5.\tPercibo útil el plan de estudios del colegio para la vida personal y profesional de mi hijo(a).","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				layer3: ["wm.Layer", {"autoScroll":true,"caption":"Sección 2","horizontalAlign":"left","padding":"0,30,0,30","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					p6: ["wm.RadioSet", {"caption":"6.\tMe gusta el nivel académico del colegio.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"styles":{},"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					p7: ["wm.RadioSet", {"caption":"7.\tMe gusta la formación en valores y ética que ofrece el colegio.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					p8: ["wm.RadioSet", {"caption":"8.\tMe ha servido la Teoría de la Elección en la crianza de mi hijo(a) y en mi vida.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					p9: ["wm.RadioSet", {"caption":"9.\tMe gusta el sistema de evaluación e información del aprendizaje y desempeño estudiantil del colegio.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					p10: ["wm.RadioSet", {"caption":"10.\tPercibo respeto en las relaciones entre mi hijo(a) y sus profesores.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				layer4: ["wm.Layer", {"autoScroll":true,"caption":"Sección 3","horizontalAlign":"left","padding":"0,30,0,30","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					p11: ["wm.RadioSet", {"caption":"11.\tMe sirven efectivamente las formas de comunicación en el colegio (telefonía, portal comunitario, Thursday Times, etc.).","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					p12: ["wm.RadioSet", {"caption":"12.\tMe gustan las instalaciones del colegio.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					p13: ["wm.RadioSet", {"caption":"13.\tMe siento tranquilo(a) con los procedimientos de seguridad del colegio.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"styles":{},"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					p14: ["wm.RadioSet", {"caption":"14.\tEstoy satisfecho(a) con el costo educativo del colegio con relación al beneficio que obtengo.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					p15: ["wm.RadioSet", {"caption":"15.\tMe gusta el servicio de alimentos del colegio.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				layer5: ["wm.Layer", {"autoScroll":true,"caption":"Sección 4","horizontalAlign":"left","padding":"0,30,0,30","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					p16: ["wm.RadioSet", {"caption":"16.\t Me gusta el servicio de transporte del colegio.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					p17: ["wm.RadioSet", {"caption":"17. Me gusta el servicio administrativo del colegio.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					p18: ["wm.RadioSet", {"caption":"18. Me gustan las actividades extracurriculares que ofrece el colegio.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"styles":{},"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					p19: ["wm.RadioSet", {"caption":"19.\tMe gusta el servicio de biblioteca (CRA) del colegio.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					p20: ["wm.RadioSet", {"caption":"20.\tMe gusta el servicio del Centro de Bienestar del colegio.","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","required":true,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"opcionesEncuestasVariable","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				layer6: ["wm.Layer", {"caption":"Sugerencias","horizontalAlign":"center","padding":"0,40,0,40","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"middle"}, {}, {
					sugerencias: ["wm.LargeTextArea", {"border":"0","caption":"Espacio para sugerencias (opcional)","captionPosition":"left","captionSize":"100px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","styles":{},"width":"100%"}, {}]
				}],
				layer7: ["wm.Layer", {"caption":"Finalización Encuesta","horizontalAlign":"center","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"middle"}, {}, {
					label4: ["wm.Label", {"align":"center","caption":"Ha completado la encuesta de manera satisfactoria. <br><br>Gracias por su colaboración y tiempo. <br><br>Para finalizar clic en \"Guardar y Terminar\"","height":"98px","padding":"4","singleLine":false,"styles":{"color":"#151313","fontSize":"11px"},"width":"405px"}, {}],
					Guardar_y_Terminar: ["wm.Button", {"_classes":{"domNode":["detalles"]},"caption":"Guardar y Terminar","desktopHeight":"40px","height":"40px","margin":"4","styles":{},"width":"160px"}, {"onclick":"Guardar_y_TerminarClick","onclick1":"Guardar_y_TerminarClick1"}]
				}]
			}],
			encuestaLiveForm: ["wm.LiveForm", {"height":"36px","horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {"onSuccess":"encuestaLiveFormSuccess"}],
			logEncuestaForm: ["wm.LiveForm", {"horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {}]
		}],
		buttonBar2: ["wm.ButtonBarPanel", {"border":"1","height":"15px"}, {}]
	}],
	loadingDialog2: ["wm.LoadingDialog", {"caption":"Verificando encuesta...","serviceVariableToTrack":["getLogEncuesta"]}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	educomLoadingDialog3: ["wm.LoadingDialog", {"caption":"Cargando...","serviceVariableToTrack":["parents_local_educom"]}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"comunity_costs_grid","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	SettingsDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar3","containerWidgetId":"","desktopHeight":"560px","height":"560px","styles":{},"title":"Perfil de usuario","width":"680px"}, {}, {
		containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			leftPanelSettings: ["wm.Panel", {"height":"100%","horizontalAlign":"center","styles":{"backgroundColor":"#f7f7f7"},"verticalAlign":"middle","width":"60%"}, {}, {
				pictureSettings: ["wm.Picture", {"_classes":{"domNode":["image_round"]},"aspect":"h","height":"153px","source":"https://diasporabrazil.org/assets/user/default.png","styles":{},"width":"150px"}, {}],
				LogIngresoLiveForm: ["wm.LiveForm", {"height":"49px","horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {}],
				profile_name: ["wm.Label", {"_classes":{"domNode":["text-color-red"]},"align":"center","caption":"Nombre completo","height":"28px","padding":"4","styles":{},"width":"100%"}, {}],
				profile_rol: ["wm.Label", {"_classes":{"domNode":["text-color-red"]},"align":"center","caption":"Tipo","height":"28px","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
				profileFileUpload: ["wm.DojoFileUpload", {"showing":false,"styles":{},"width":"95%"}, {"onSuccess":"profileFileUploadSuccess"}, {
					input: ["wm.ServiceInput", {"type":"uploadFileInputs"}, {}]
				}],
				profile_changePic: ["wm.Button", {"_classes":{"domNode":["Green"]},"caption":"Cambiar foto","margin":"4","styles":{},"width":"180px"}, {"onclick":"profile_changePicClick"}],
				profileImgForm: ["wm.LiveForm", {"height":"49px","horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {"onSuccess":"profileImgFormSuccess"}]
			}],
			rightPanelSettings: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				changePasswordPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"center","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
					passwordEditText: ["wm.Text", {"border":"0","caption":"Nueva clave","changeOnKey":true,"dataValue":undefined,"desktopHeight":"32px","displayValue":"","height":"32px","password":true,"placeHolder":"******","required":true,"styles":{}}, {"onchange":"passwordEditTextChange"}],
					rePasswordEditText: ["wm.Text", {"border":"0","caption":"Re-Clave","changeOnKey":true,"dataValue":undefined,"desktopHeight":"32px","displayValue":"","height":"32px","password":true,"placeHolder":"******","required":true,"styles":{}}, {"onchange":"rePasswordEditTextChange"}],
					passwordValidator: ["wm.Label", {"align":"center","caption":"","padding":"4","styles":{},"width":"300px"}, {}],
					panel6: ["wm.Panel", {"height":"40px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"300px"}, {}, {
						cancelButton: ["wm.Button", {"_classes":{"domNode":["red"]},"caption":"Cancelar","height":"100%","margin":"4","styles":{},"width":"100px"}, {}],
						updatePasswordButton: ["wm.Button", {"_classes":{"domNode":["blueButton"]},"caption":"Enviar","disabled":true,"height":"100%","margin":"4","styles":{},"width":"100px"}, {"onclick":"updatePasswordButtonClick"}]
					}]
				}]
			}]
		}],
		buttonBar3: ["wm.ButtonBarPanel", {"border":"1","desktopHeight":"34px","height":"34px","styles":{"backgroundColor":"#e8e8e8"}}, {}, {
			closeSettings: ["wm.Button", {"_classes":{"domNode":["red"]},"caption":"Cerrar","margin":"4","styles":{}}, {"onclick":"SettingsDialog.hide"}]
		}]
	}],
	autorizacionesDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar4","containerWidgetId":"containerWidget4","desktopHeight":"600px","height":"600px","styles":{},"title":"Autorizaciones de Rutas"}, {}, {
		containerWidget4: ["wm.Container", {"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"Transporte_autorizaciones","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
		}],
		buttonBar4: ["wm.ButtonBarPanel", {"border":"1","desktopHeight":"34px","height":"34px","styles":{}}, {}, {
			autorizacionCloseButton: ["wm.Button", {"_classes":{"domNode":["red"]},"caption":"Cerrar","margin":"4","styles":{}}, {"onclick":"autorizacionesDialog.hide"}]
		}]
	}],
	permisosDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar5","containerWidgetId":"containerWidget5","desktopHeight":"680px","height":"680px","title":"Solicitud de Permisos","width":"720px"}, {}, {
		containerWidget5: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			transportenovedadesLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
				transportenovedadesDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["pointer"]},"border":"1","columns":[
{"show":true,"field":"idNovedades","title":"Historial de Solicitudes","width":"80px","align":"left","formatFunc":"","expression":"\"<br>\"+\n\"No. Solicitud: \"+${idNovedades}+\"<br>\"+\n\"Tipo solicitud: \"+${tipoSolicitud.solicitud}+\"<br>\"+\n\"Observaciones:<br>\"+${observaciones}+\"<br>\"+\n\"<br>\"","mobileColumn":false},
{"show":false,"field":"fechaSolicitudInicio","title":"FechaSolicitudInicio","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"fechaSolicitudFin","title":"FechaSolicitudFin","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"horaProgramada","title":"HoraProgramada","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"numeroPuerta","title":"NumeroPuerta","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"aprobacionDirNivel","title":"AprobacionDirNivel","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"comentarioDirNivel","title":"ComentarioDirNivel","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"aprobacionCoordinador","title":"AprobacionCoordinador","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"comentarioCoordinador","title":"ComentarioCoordinador","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"aprobacionTransporte","title":"AprobacionTransporte","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"comentarioTransporte","title":"ComentarioTransporte","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"aprobacionEnfermeria","title":"AprobacionEnfermeria","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"comentarioEnfermeria","title":"ComentarioEnfermeria","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"observaciones","title":"Observaciones","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"fechaCreacion","title":"FechaCreacion","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"fechaActualizacion","title":"FechaActualizacion","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Historial de Solicitudes: \" + ${wm.runtimeId}.formatCell(\"idNovedades\", ${idNovedades}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_desarrollo.data.TransporteNovedades","height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"styles":{"fontSize":"11px"},"width":"210px"}, {"onSelect":"transportenovedadesDojoGridSelect"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"source":"transportenovedadesLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}],
				transportenovedadesLiveForm1: ["wm.LiveForm", {"autoScroll":true,"height":"100%","horizontalAlign":"center","readonly":true,"styles":{},"verticalAlign":"top"}, {"onBeginInsert":"transportenovedadesLiveForm1BeginInsert","onBeginInsert1":"transportenovedadesLiveForm1BeginInsert1","onBeginUpdate":"transportenovedadesLiveForm1BeginUpdate","onSuccess":"transportenovedadesLiveVariable1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"transportenovedadesDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
					}],
					label5: ["wm.Label", {"align":"center","caption":"Seleccione el tipo de permiso haciendo clic en los botones a continuación","padding":"4","styles":{"backgroundColor":"#cdcdcd","color":"#020202"},"width":"100%"}, {}],
					header_header: ["wm.Panel", {"height":"60px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"backgroundColor":"#f0f0f0"},"verticalAlign":"middle","width":"100%"}, {}, {
						permisosTemporal: ["wm.Button", {"_classes":{"domNode":["Green"]},"caption":"Permiso para el día","desktopHeight":"34px","height":"34px","margin":"4","styles":{},"width":"135px"}, {"onclick":"permisosTemporalClick"}],
						permisosPermanente: ["wm.Button", {"_classes":{"domNode":["Green"]},"caption":"Permiso permanente","desktopHeight":"34px","height":"34px","margin":"4","styles":{},"width":"135px"}, {"onclick":"permisosPermanenteClick"}]
					}],
					idNovedadesEditor1: ["wm.Number", {"border":"0","caption":"No. registro","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"zero","formField":"idNovedades","height":"32px","readonly":true,"required":true,"showing":false,"styles":{},"width":"100%"}, {}],
					personaLookup1: ["wm.Lookup", {"autoDataSet":false,"caption":"Estudiante","captionSize":"140px","dataType":"com.aprendoz_desarrollo.data.Persona","desktopHeight":"32px","displayField":"idPersona","formField":"persona","height":"32px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							dataFieldWire: ["wm.Wire", {"source":"personaLookup1.liveVariable","targetProperty":"dataSet"}, {}],
							wire: ["wm.Wire", {"expression":undefined,"source":"solicitudPersonaLiveVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					tipoSolicitudLookup1: ["wm.Lookup", {"autoDataSet":false,"caption":"Tipo de Solicitud","captionSize":"140px","dataType":"com.aprendoz_desarrollo.data.TipoSolicitud","desktopHeight":"32px","displayField":"solicitud","formField":"tipoSolicitud","height":"32px","placeHolder":"Tipo de solicitud. Ej. Cambio Ruta ","readonly":true,"required":true,"showing":false,"width":"100%"}, {"onchange":"tipoSolicitudLookup1Change"}, {
						binding: ["wm.Binding", {}, {}, {
							dataFieldWire: ["wm.Wire", {"source":"tipoSolicitudLookup1.liveVariable","targetProperty":"dataSet"}, {}],
							wire: ["wm.Wire", {"expression":undefined,"source":"tipoSolicitudLiveVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					transporteRutasLookup1: ["wm.Lookup", {"autoDataSet":false,"caption":"Autorizados","captionSize":"140px","dataType":"com.aprendoz_desarrollo.data.TransporteRutas","desktopHeight":"32px","displayField":"nombreConductor","formField":"transporteRutas","height":"32px","readonly":true,"showing":false,"styles":{},"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							dataFieldWire: ["wm.Wire", {"source":"transporteRutasLookup1.liveVariable","targetProperty":"dataSet"}, {}],
							wire: ["wm.Wire", {"expression":undefined,"source":"autorizadosLiveVariable","targetProperty":"dataSet"}, {}]
						}]
					}],
					fechaSolicitudInicioEditor1: ["wm.DateTime", {"border":"0","caption":"Fecha inicio","captionSize":"140px","dateMode":"Date","desktopHeight":"32px","emptyValue":"zero","formField":"fechaSolicitudInicio","height":"32px","readonly":true,"showing":false,"styles":{},"width":"100%"}, {}],
					fechaSolicitudFinEditor1: ["wm.DateTime", {"border":"0","caption":"Fecha fin","captionSize":"140px","dateMode":"Date","desktopHeight":"32px","emptyValue":"zero","formField":"fechaSolicitudFin","height":"32px","readonly":true,"showing":false,"styles":{},"width":"100%"}, {}],
					horaProgramadaEditor1: ["wm.Time", {"border":"0","caption":"Hora","captionSize":"140px","desktopHeight":"32px","emptyValue":"zero","formField":"horaProgramada","height":"32px","readonly":true,"showing":false,"styles":{},"width":"100%"}, {}],
					numeroPuertaEditor1: ["wm.Number", {"border":"0","caption":"NumeroPuerta","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"numeroPuerta","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}],
					aprobacionDirNivelEditor1: ["wm.Checkbox", {"caption":"AprobacionDirNivel","captionSize":"140px","desktopHeight":"26px","displayValue":false,"formField":"aprobacionDirNivel","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}],
					comentarioDirNivelEditor1: ["wm.LargeTextArea", {"border":"0","caption":"ComentarioDirNivel","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"comentarioDirNivel","height":"80px","maxChars":65535,"readonly":true,"showing":false,"width":"100%"}, {}],
					aprobacionCoordinadorEditor1: ["wm.Checkbox", {"caption":"AprobacionCoordinador","captionSize":"140px","desktopHeight":"26px","displayValue":false,"formField":"aprobacionCoordinador","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}],
					comentarioCoordinadorEditor1: ["wm.LargeTextArea", {"border":"0","caption":"ComentarioCoordinador","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"comentarioCoordinador","height":"80px","maxChars":65535,"readonly":true,"showing":false,"width":"100%"}, {}],
					aprobacionTransporteEditor1: ["wm.Checkbox", {"caption":"AprobacionTransporte","captionSize":"140px","desktopHeight":"26px","displayValue":false,"formField":"aprobacionTransporte","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}],
					comentarioTransporteEditor1: ["wm.LargeTextArea", {"border":"0","caption":"ComentarioTransporte","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"comentarioTransporte","height":"80px","maxChars":65535,"readonly":true,"showing":false,"width":"100%"}, {}],
					aprobacionEnfermeriaEditor1: ["wm.Checkbox", {"caption":"AprobacionEnfermeria","captionSize":"140px","desktopHeight":"0px","displayValue":false,"formField":"aprobacionEnfermeria","height":"0px","readonly":true,"showing":false,"width":"0px"}, {}],
					comentarioEnfermeriaEditor1: ["wm.LargeTextArea", {"border":"0","caption":"ComentarioEnfermeria","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"comentarioEnfermeria","height":"80px","maxChars":65535,"readonly":true,"showing":false,"width":"100%"}, {}],
					observacionesEditor1: ["wm.LargeTextArea", {"border":"0","caption":"Observaciones","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"104px","emptyValue":"emptyString","formField":"observaciones","height":"104px","readonly":true,"showing":false,"styles":{},"width":"100%"}, {}],
					fechaCreacionEditor1: ["wm.DateTime", {"border":"0","caption":"FechaCreacion","captionSize":"140px","desktopHeight":"32px","emptyValue":"zero","formField":"fechaCreacion","height":"32px","readonly":true,"showing":false,"width":"100%"}, {}],
					fechaActualizacionEditor1: ["wm.DateTime", {"border":"0","caption":"FechaActualizacion","captionSize":"140px","desktopHeight":"32px","emptyValue":"zero","formField":"fechaActualizacion","height":"32px","readonly":true,"showing":false,"width":"100%"}, {}],
					transportenovedadesSpacer: ["wm.Spacer", {"height":"100%","width":"10px"}, {}],
					transportenovedadesLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"transportenovedadesLiveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1","showing":false}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"_classes":{"domNode":["Green"]},"caption":"Guardar","height":"100%","margin":"4","styles":{}}, {"onclick":"transportenovedadesLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"transportenovedadesLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"_classes":{"domNode":["red"]},"caption":"Cancelar","height":"100%","margin":"4","styles":{}}, {"onclick":"transportenovedadesLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"_classes":{"domNode":["blueButton"]},"caption":"Nuevo","height":"100%","margin":"4","styles":{}}, {"onclick":"transportenovedadesLiveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"_classes":{"domNode":["blueButton"]},"caption":"Actualizar","height":"100%","margin":"4","styles":{}}, {"onclick":"transportenovedadesLiveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"transportenovedadesLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"_classes":{"domNode":["red"]},"caption":"Borrar","height":"100%","margin":"4","styles":{}}, {"onclick":"transportenovedadesLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"transportenovedadesLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}],
		buttonBar5: ["wm.ButtonBarPanel", {"border":"1","desktopHeight":"34px","height":"34px"}, {}, {
			permisosCloseButton: ["wm.Button", {"_classes":{"domNode":["red"]},"caption":"Cerrar","margin":"4","styles":{}}, {"onclick":"permisosDialog.hide"}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"autoScroll":false,"height":"817px","horizontalAlign":"center","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"740px"}, {}, {
		FancyCentered: ["wm.Template", {"height":"100%","horizontalAlign":"left","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"90%"}, {}, {
			FancyCentered1: ["wm.Template", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				templateMain: ["wm.Template", {"_classes":{"domNode":["template-main"]},"autoScroll":true,"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
					content: ["wm.Panel", {"freeze":true,"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						panelHeader: ["wm.Panel", {"_classes":{"domNode":["template-header-panel","wm_BackgroundColor_White"]},"height":"80px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}],
						panel1: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							templateTopLeft: ["wm.Panel", {"_classes":{"domNode":["template-top-left"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}],
							templateTop: ["wm.Panel", {"_classes":{"domNode":["template-top-center"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}],
							templateTopRight: ["wm.Panel", {"_classes":{"domNode":["template-top-right"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}]
						}],
						panel2: ["wm.Panel", {"freeze":true,"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							templateLeft: ["wm.Panel", {"_classes":{"domNode":["template-left"]},"freeze":true,"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"24px"}, {}],
							templateContent: ["wm.Panel", {"_classes":{"domNode":["template-content"]},"height":"100%","horizontalAlign":"right","verticalAlign":"top","width":"100%"}, {}, {
								aprendoz_header: ["wm.Panel", {"height":"90px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
									parents_top_image_parents: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/icons%20v2/Aprendoz_padres.jpg","width":"110px"}, {}],
									parents_spacer1: ["wm.Spacer", {"height":"48px","width":"38px"}, {}],
									parents_logo_aprendoz: ["wm.Picture", {"aspect":"h","height":"52px","source":"resources/images/icons%20v2/Aprendoz_03.jpg","styles":{},"width":"265px"}, {}],
									spacer1: ["wm.Spacer", {"height":"48px","width":"100%"}, {}],
									parents_header_panel_sec: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"96px"}, {}, {
										SecurityLogoutButton: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_10px","red"]},"border":"0","borderColor":"#666666","caption":"Salir","margin":"0","styles":{"color":"#ffffff"},"width":"100%"}, {"onclick":"templateLogoutVar"}],
										SecurityProfileButton: ["wm.Button", {"_classes":{"domNode":["blueButton"]},"border":"0","caption":"<br>Perfil de usuario","height":"100%","iconHeight":"32px","iconMargin":"0 0px 0 0","iconUrl":"resources/images/iconsmaster_v2/profile.png","iconWidth":"32px","margin":"0","styles":{},"width":"100%"}, {"onclick":"SettingsDialog.show","onclick1":"SecurityProfileButtonClick1"}]
									}]
								}],
								parents_line_long: ["wm.Panel", {"height":"6px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#3752a3"},"verticalAlign":"top","width":"100%"}, {}],
								parents_menu_panel: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"padding":"0,0,0,20","styles":{"backgroundColor":"#a3a3a3"},"verticalAlign":"top","width":"100%"}, {}, {
									parents_estudents_performance: ["wm.Button", {"border":"0","borderColor":"","caption":"Calificaciones","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/students.png","iconWidth":"24px","margin":"0,6,0,0","padding":"4,12,4,12","styles":{"borderRadius":"0px","backgroundColor":"#3652a4"},"width":"145.5px"}, {"onclick":"parents_estudents_performanceClick","onclick3":"parents_estudents_performanceClick3","onclick4":"parents_estudents_performanceClick4"}],
									parents_homework: ["wm.Button", {"border":"0","borderColor":"","caption":"Tareas y trabajos","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/homework.png","iconWidth":"24px","margin":"0,6,0,0","padding":"4,12,4,12","showing":false,"styles":{"borderRadius":"0px"},"width":"120undefined"}, {"onclick":"parents_homeworkClick"}],
									parents_update_data: ["wm.Button", {"border":"0","borderColor":"","caption":"Actualizar datos","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/update.png","iconWidth":"24px","margin":"0,6,0,0","padding":"4,12,4,12","showing":false,"styles":{"borderRadius":"0px"},"width":"120undefined"}, {"onclick":"parents_update_dataClick"}],
									schoolar_schedule: ["wm.Button", {"border":"0","borderColor":"","caption":"Trabajos y activiades","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/schedule.png","iconWidth":"24px","margin":"0,6,0,0","padding":"4,12,4,12","styles":{"borderRadius":"0px"},"width":"137.5px"}, {"onclick":"schoolar_scheduleClick","onclick1":"schoolar_scheduleClick1","onclick2":"schoolar_scheduleClick2"}],
									parents_comunity_comunication: ["wm.Button", {"border":"0","borderColor":"","caption":"Educación comunitaria","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/extracurricular.png","iconWidth":"24px","margin":"0,4,0,0","padding":"4,12,4,12","roles":["2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"],"styles":{"borderRadius":"0px"},"width":"140px"}, {"onclick":"parents_comunity_comunicationClick","onclick1":"parents_comunity_comunicationClick1","onclick2":"parents_comunity_comunicationClick2","onclick3":"parents_comunity_comunicationClick3"}],
									parents_account_state: ["wm.Button", {"border":"0","borderColor":"","caption":"Estado de cuenta","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/money.png","iconWidth":"24px","margin":"0,6,0,0","padding":"4,12,4,12","styles":{"borderRadius":"0px"},"width":"110undefined"}, {"onclick":"parents_account_stateClick","onclick1":"parents_account_stateClick1","onclick2":"parents_account_stateClick2"}],
									parents_transportship: ["wm.Button", {"border":"0","borderColor":"","caption":"Permisos","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/bus.png","iconWidth":"24px","margin":"0,4,0,0","padding":"4,12,4,12","roles":["2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"],"showing":false,"styles":{"borderRadius":"0px"},"width":"140px"}, {"onclick":"parents_transportshipClick","onclick1":"parents_transportshipClick1"}]
								}],
								parents_spacer2: ["wm.Spacer", {"height":"15px","styles":{},"width":"100%"}, {}],
								panel_main_contents: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
									performance_left_details: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"center","lock":true,"styles":{},"verticalAlign":"top","width":"245px"}, {}, {
										performance_top_header: ["wm.Label", {"caption":"CALIFICACIONES DEL ESTUDIANTE","height":"69px","padding":"4","singleLine":false,"styles":{"backgroundColor":"#63bb00"},"width":"100%"}, {}],
										performance_left_buttons_panel: ["wm.Panel", {"height":"29px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
											performance_general_button: ["wm.Button", {"border":"0","borderColor":"","caption":" General","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/general.png","iconWidth":"24px","margin":"0","styles":{"backgroundColor":"#63bb00"},"width":"100%"}, {"onclick":"performance_general_buttonClick","onclick1":"performance_general_buttonClick1","onclick2":"performance_general_buttonClick2"}],
											performance_general_tracking: ["wm.Button", {"border":"0","borderColor":"","caption":" Desempeño","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/develop.png","iconWidth":"24px","margin":"0","styles":{"backgroundColor":"#a3a3a3"},"width":"100%"}, {"onclick":"performance_general_trackingClick","onclick1":"performance_general_trackingClick1","onclick2":"performance_general_trackingClick2"}]
										}],
										performance_spacer1: ["wm.Spacer", {"height":"15px","styles":{},"width":"100%"}, {}],
										performance_family_grid: ["wm.DojoGrid", {"_classes":{"domNode":["Striped"]},"border":"1","borderColor":"#bbb","columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${wm.runtimeId}.formatCell(\"code\", ${code}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Integrantes: \" + ${wm.runtimeId}.formatCell(\"nombres\", ${nombres}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"code","title":" ","width":"60px","align":"left","formatFunc":"","editorProps":null,"expression":"'<img src=\"http://www.rochester.edu.co/fotosestudiantes/'+${code}+\".Jpeg\"+'\" width=\"60\" height=\"70\"/><center>'","mobileColumn":false},
{"show":true,"field":"nombres","title":"Integrantes","width":"100%","align":"left","formatFunc":"","expression":"${nombres}+\"<br>\"+${apellidos}+\"<br><u>\"+${tipo}+\"</u>\"","mobileColumn":false},
{"show":false,"field":"apellidos","title":"Apellidos","width":"100%","align":"left","formatFunc":"","expression":"","mobileColumn":false},
{"show":false,"field":"tipo","title":"Tipo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"familia","title":"Familia","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idtipo","title":"Idtipo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"pid","title":"Pid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"user","title":"User","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idgrupo","title":"Idgrupo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"curso","title":"Curso","width":"100%","displayType":"Java.lang.Integer","align":"left","formatFunc":""},
{"show":false,"field":"grado","title":"Grado","width":"100%","displayType":"Java.lang.String","align":"left","formatFunc":""}
],"dsType":"com.aprendoz_desarrollo.data.output.GetGrupoFamiliarbyUserRtnType","height":"110%","localizationStructure":{},"margin":"0","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"12px"}}, {"onSelect":"performance_family_gridSelect","onSelect1":"performance_family_gridSelect1","onSelect2":"performance_family_gridSelect2","onSelect3":"performance_family_gridSelect3","onSelect4":"performance_family_gridSelect4","onSelect5":"performance_family_gridSelect5","onSelect6":"performance_family_gridSelect6"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"parents_local_performance_familyGroup","targetProperty":"dataSet"}, {}]
											}]
										}],
										performance_spacer2: ["wm.Spacer", {"height":"15px","styles":{},"width":"100%"}, {}],
										performance_call_us: ["wm.Picture", {"aspect":"h","height":"30px","source":"resources/images/icons%20v2/Aprendoz_19.jpg","styles":{},"width":"178px"}, {}]
									}],
									panel_comunity_education: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"padding":"0,6,0,15","showing":false,"styles":{},"verticalAlign":"top","width":"100%"}, {}, {
										panel4: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
											comunity_costs_label1: ["wm.Label", {"caption":"CURSOS OFERTADOS","height":"30px","padding":"4","styles":{"color":"#3752a3","fontSize":"15px","fontWeight":"bolder"},"width":"100%"}, {}],
											comunity_educom_age_filter: ["wm.Number", {"border":"0","caption":"Para filtrar los cursos ingrese edad","captionSize":"200px","changeOnKey":true,"dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","helpText":"Ingrese una edad para filtrar los cursos correspondientes.","placeHolder":"#","showing":false,"styles":{},"width":"260px"}, {"onchange":"comunity_educom_age_filterChange"}]
										}],
										comunity_costs_grid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"idcosto","title":"Idcosto","width":"80px","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":false,"field":"codigo","title":"Código","width":"60px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"tipoeducom","title":"Tipo","width":"50px","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":false,"field":"id","title":"Id","width":"50px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"edad1","title":"Edad","width":"90px","align":"left","formatFunc":"","editorProps":null,"expression":"${edad2}+\"-\"+${edad1}+\" año(s)\"","mobileColumn":false},
{"show":true,"field":"nombre","title":"Curso","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fechainicio","title":"Inicia","width":"90px","align":"left","formatFunc":"wm_date_formatter","editorProps":null,"mobileColumn":false},
{"show":true,"field":"fechafin","title":"Finaliza","width":"90px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"pagoAnticipado","title":"Valor pago anticipado","width":"82px","align":"left","formatFunc":"wm_number_formatter","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":true,"field":"valor","title":"Valor","width":"95px","align":"left","formatFunc":"wm_number_formatter","formatProps":{"currency":"COP","dijits":0},"expression":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Tipo: \" + ${tipoeducom} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Curso: \" + ${nombre}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Inicia: \" + ${wm.runtimeId}.formatCell(\"fechainicio\", ${fechainicio}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Finaliza: \" + ${wm.runtimeId}.formatCell(\"fechafin\", ${fechafin}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Valor: \" + ${wm.runtimeId}.formatCell(\"valor\", ${valor}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"edad2","title":"Edad2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"fecha2","title":"Fecha2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"fecha1","title":"Fecha1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"cupoMaximo","title":"CupoMaximo","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"300px","margin":"0","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"12px"}}, {"onSelect":"comunity_costs_gridSelect","onSelect1":"comunity_costs_gridSelect1"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"parents_local_educom","targetProperty":"dataSet"}, {}]
											}]
										}],
										comunity_guide_label: ["wm.Label", {"_classes":{"domNode":["red"]},"caption":"EFA = Escuelas Formación Artística |  EPD = Escuelas PreDeportivas | EAD = Equipos de Alto Desempeño |  OLA = Centro Acuático Olga León de Aljure  |  ECR = Científicas y Recreativas","height":"39px","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {}],
										comunity_space1: ["wm.Spacer", {"height":"10px","styles":{},"width":"100%"}, {}],
										comunity_payment_type: ["wm.SelectMenu", {"caption":"Seleccione una forma de pago","captionSize":"180px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","helpText":"¿Qué es esto? <br><br>Un solo pago: Se le cargará el total en una sola cuota en la siguiente mensualidad<br><br>Mensual: Usted realizará los pagos  de manera mensual.","styles":{},"width":"350px"}, {"onchange":"comunity_payment_typeChange"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"parents_variable_payment_type","targetProperty":"dataSet"}, {}]
											}]
										}],
										comunity_action_liveForm: ["wm.LiveForm", {"height":"37px","horizontalAlign":"left","showing":false,"styles":{},"verticalAlign":"top"}, {"onError":"errorInsertion","onSuccess":"parents_local_comunity_subscribed_curses","onSuccess1":"recordInserted","onSuccess2":"comunity_dialog_terms.hide"}],
										comunity_top_panel: ["wm.Panel", {"height":"60px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
											comunity_transp_selection: ["wm.RadioSet", {"border":"1","borderColor":"#ffffff","caption":"¿Desea contratar transporte extracurricular?","captionSize":"180px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","helpText":"¿Que es esto?<br><br>En esta selección usted podrá definir si contratará el servicio de transporte extracurricular ofrecido por el Colegio para su hijo.<br><br>En caso contrario se entenderá que el estudiante será recogido por un responsable.","styles":{},"width":"350px"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"parents_variable_transp_options","targetProperty":"dataSet"}, {}]
												}]
											}],
											comunity_spacer1: ["wm.Spacer", {"height":"60px","styles":{},"width":"100%"}, {}],
											comunity_button_add: ["wm.Button", {"caption":"[+] Inscribir","desktopHeight":"40px","disabled":true,"height":"40px","margin":"0,10,0,0","mobileHeight":"100%","padding":"0,0,0,0","styles":{},"width":"90px"}, {"onclick":"comunity_button_addClick","onclick1":"comunity_button_addClick1"}]
										}],
										comunity_costs_label2: ["wm.Label", {"caption":"CURSOS INSCRITOS","height":"30px","padding":"4","styles":{"color":"#3752a3","fontSize":"15px","fontWeight":"bolder"},"width":"100%"}, {}],
										comunity_action_inscription_educom: ["wm.LiveForm", {"horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {"onError":"errorInsertion","onSuccess":"parents_local_comunity_subscribed_curses","onSuccess1":"recordInserted","onSuccess2":"comunity_dialog_terms.hide"}],
										comunity_costs_grid1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Transporte: \" + ${tomaTransporte} +\n\"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"idInscPersonaEduCom","title":" ","width":"60px","align":"center","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"fechaCreacion","title":"FechaCreacion","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"fechaActualizacion","title":"FechaActualizacion","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"descuento","title":"Descuento","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"plazo","title":"Plazo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"activoRetirado","title":"ActivoRetirado","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"beca","title":"Beca","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"tomaTransporte","title":"Transporte","width":"80px","align":"center","formatFunc":"","fieldType":"dojox.grid.cells.Bool","editorProps":null,"mobileColumn":false}
],"height":"150px","margin":"0","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"13px","color":"#020202"}}, {"onSelect":"comunity_costs_grid1Select"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"parents_local_comunity_subscribed_curses","targetProperty":"dataSet"}, {}]
											}]
										}],
										comunity_top_panel2: ["wm.Panel", {"height":"40px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
											comunity_button_delete: ["wm.Button", {"caption":"[-] Retirar","disabled":true,"height":"100%","margin":"0","styles":{},"width":"90px"}, {"onclick":"comunity_button_deleteClick"}]
										}]
									}],
									panel_inicio: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"center","lock":true,"padding":"5,15,5,15","showing":false,"styles":{},"verticalAlign":"top","width":"100%"}, {}, {
										parents_greetings_panel: ["wm.Panel", {"height":"50px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
											parents_hi_name: ["wm.Label", {"align":"center","caption":"BIENVENIDO, ","padding":"4","styles":{"color":"#2d2626","fontSize":"14px"},"width":"100%"}, {}],
											parents_hi_family: ["wm.Label", {"align":"center","caption":"GRUPO FAMILIAR,","padding":"4","styles":{"color":"#2d2929","fontSize":"14px","fontWeight":"bold"},"width":"100%"}, {}]
										}],
										parents_news_panel: ["wm.Panel", {"height":"138px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,0","styles":{"backgroundColor":"#ddf2d1"},"verticalAlign":"top","width":"100%"}, {}, {
											parents_news_title: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/icons%20v2/auncions_img.png","width":"52px"}, {}],
											picture1: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/iconsmaster_v2/aprendoz.jpg","width":"100%"}, {}]
										}],
										dashboard_d1: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"425px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"styles":{},"verticalAlign":"top","width":"100%"}, {}],
										parents_spacer3: ["wm.Spacer", {"height":"15px","width":"96px"}, {}],
										parents_thus_times_access: ["wm.Picture", {"aspect":"h","height":"55px","source":"resources/images/icons%20v2/Aprendoz_tt_padres.jpg","styles":{},"width":"100%"}, {}]
									}],
									panel_performance: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","lock":true,"showing":false,"styles":{},"verticalAlign":"top","width":"100%"}, {}, {
										performance_student_track: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"0,0,0,20","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
											performance_student_sy: ["wm.Label", {"align":"center","caption":"AÑO ESCOLAR","height":"27px","padding":"4","styles":{"color":"#3652a4","fontSize":"16px","fontWeight":"bold"},"width":"100%"}, {}],
											performance_student_header: ["wm.Panel", {"height":"27px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												performance_student_asignaturas: ["wm.Label", {"align":"left","caption":"ASIGNATURAS","height":"100%","padding":"4","styles":{"color":"#3652a4","fontSize":"14px","fontWeight":"bold"},"width":"100%"}, {}],
												performance_student_download1: ["wm.Button", {"border":"0","borderColor":"","caption":"Generar reporte","disabled":true,"height":"100%","margin":"0","styles":{"backgroundColor":"#63bb00","color":"#ffffff"},"width":"134px"}, {"onclick":"performance_student_download1Click"}]
											}],
											performance_student_subjects: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idasignatura","title":"Código<br>","width":"80px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"asignatura","title":"Asignatura<br> ","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"calificacion","title":"Calificación","width":"30%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"puntaje","title":"Puntaje","width":"30%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"porcentaje","title":"Porcentaje","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"esperados","title":"Esperados","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idalumno","title":"Idalumno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"sy","title":"Sy","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"logrados","title":"Logrados","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Código<br>: \" + ${idasignatura} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Asignatura<br> : \" + ${asignatura}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Calificación: \" + ${calificacion}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Puntaje: \" + ${puntaje}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_desarrollo.data.output.Hql_dash_asignaturasRtnType","height":"220px","margin":"0","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"12px"}}, {"onDeselect":"performance_student_subjectsDeselect","onSelect":"performance_student_subjectsSelect","onSelect1":"performance_student_subjectsSelect1","onSelect2":"performance_student_subjectsSelect2"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"parents_local_student_subjects","targetProperty":"dataSet"}, {}]
												}]
											}],
											performance_student_details: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"15,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
												performance_student_details_left: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"0,15,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
													performance_student_learnings: ["wm.Label", {"align":"left","caption":"APRENDIZAJES","height":"27px","padding":"0,0,0,0","styles":{"color":"#3652a4","fontSize":"14px","fontWeight":"bold"},"width":"100%"}, {}],
													performance_student_details_learnings: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"idunidad","title":"Idunidad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idaprendizaje","title":" ","width":"65px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"fecha","title":"Fecha<br>esperada","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":null,"mobileColumn":false},
{"show":true,"field":"aprendizaje","title":"Aprendizajes","width":"100%","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":false,"field":"idsubtopico","title":"Idsubtopico","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"unidad","title":"Unidad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idasignatura","title":"Idasignatura","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico","title":"Subtopico","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Fecha<br>esperada: \" + ${wm.runtimeId}.formatCell(\"fecha\", ${fecha}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Aprendizajes: \" + ${aprendizaje}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_desarrollo.data.output.ParentsSubjectStructureRtnType","height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"11px"}}, {"onSelect":"performance_student_details_learningsSelect","onSelect1":"performance_student_details_learningsSelect1","onSelect2":"performance_student_details_learningsSelect2"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"parents_local_students_learnings","targetProperty":"dataSet"}, {}]
														}]
													}]
												}],
												performance_student_details_right: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"10","styles":{"backgroundColor":"#3652a4"},"verticalAlign":"top","width":"100%"}, {}, {
													performance_student_codigo: ["wm.Text", {"border":"0","caption":"<font color=\"white\">Código","captionSize":"130px","dataValue":undefined,"displayValue":"","readonly":true,"styles":{"color":"#ffffff"},"width":"100%"}, {}],
													performance_student_calif_final: ["wm.Text", {"border":"0","caption":"<font color=\"white\">Calificación acumulada","captionSize":"130px","dataValue":undefined,"displayValue":"","readonly":true,"styles":{"color":"#ffffff"},"width":"100%"}, {}],
													performance_student_unit: ["wm.LargeTextArea", {"border":"0","caption":"<font color=\"white\">Información de Unidad","dataValue":undefined,"displayValue":"","height":"80%","readonly":true,"singleLine":true,"styles":{"color":"#ffffff"},"width":"100%"}, {}],
													performance_student_subtopic: ["wm.LargeTextArea", {"border":"0","caption":"<font color=\"white\">Información de Subtópico","dataValue":undefined,"displayValue":"","height":"80%","readonly":true,"singleLine":true,"styles":{"color":"#ffffff"},"width":"100%"}, {}],
													label1: ["wm.Label", {"caption":"Historial de calificaciones","padding":"4","styles":{"color":"#ffffff","fontSize":"12px"},"width":"100%"}, {}],
													performance_student_history_grid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"id","title":" ","width":"50px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idpersona","title":"Idpersona","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"calificacion","title":"Calificación","width":"70px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idaprendizaje","title":"Idaprendizaje","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fechalogro","title":"Fecha Logro","width":"100px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"comentario","title":"Comentario","width":"150px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"fechaingreso","title":"Fecha ingreso","width":"100px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"puntaje","title":"Puntaje","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Calificación: \" + ${calificacion} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha Logro: \" + ${fechalogro}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Comentario: \" + ${comentario}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha ingreso: \" + ${fechaingreso}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"calificacion2","title":"Calificacion2","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"dsType":"com.aprendoz_desarrollo.data.output.ParentsHistoryCualificationsRtnType","height":"130%","margin":"4","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"11px"}}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"parents_local_students_historical_score","targetProperty":"dataSet"}, {}]
														}]
													}]
												}]
											}]
										}]
									}],
									panel_estado_cuenta: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"padding":"25","showing":false,"styles":{},"verticalAlign":"top","width":"100%"}, {}, {
										estado_cuenta_title: ["wm.Label", {"align":"center","caption":"Seleccione un estudiante y a continuación presione el botón de descarga","height":"32px","padding":"4","styles":{"color":"#090808"},"width":"100%"}, {}],
										estado_cuenta_codigo: ["wm.Label", {"align":"center","caption":"Código","height":"56px","padding":"4","styles":{"color":"#000000"},"width":"200%"}, {}],
										estado_cuenta_panel_button: ["wm.Panel", {"height":"55px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
											estado_cuenta_boton_descarga: ["wm.Button", {"caption":"Descargar extracto","desktopHeight":"55px","height":"55px","iconHeight":"20px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/download.png","iconWidth":"32px","margin":"4","width":"155px"}, {"onclick":"estado_cuenta_boton_descargaClick"}]
										}]
									}],
									panel_transporte: ["wm.Panel", {"height":"100%","horizontalAlign":"center","lock":true,"margin":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
										transportes_rutas: ["wm.Button", {"_classes":{"domNode":["blueButton"]},"caption":"Rutas","desktopHeight":"60px","height":"60px","margin":"4","showing":false,"styles":{},"width":"120px"}, {}],
										panel7: ["wm.Panel", {"height":"90px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
											label6: ["wm.Label", {"caption":"Para realizar permisos y solicitud de salidas para un estudiante","height":"60px","padding":"4","singleLine":false,"styles":{"color":"#000000"}}, {}],
											transportes_solicitudes: ["wm.Button", {"_classes":{"domNode":["blueButton"]},"caption":"Solicitud de <br>Permisos","desktopHeight":"60px","height":"60px","margin":"4","styles":{},"width":"120px"}, {"onclick":"transportes_solicitudesClick","onclick1":"transportes_solicitudesClick1"}]
										}],
										panel8: ["wm.Panel", {"height":"90px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
											label7: ["wm.Label", {"caption":"Para registrar las personas que pueden recoger a un estudiante.","height":"60px","padding":"4","singleLine":false,"styles":{"color":"#050505"}}, {}],
											transportes_autorizaciones: ["wm.Button", {"_classes":{"domNode":["blueButton"]},"caption":"Autorizaciones","desktopHeight":"60px","height":"60px","margin":"4","styles":{},"width":"120px"}, {"onclick":"autorizacionesDialog.show","onclick1":"transportes_autorizacionesClick1"}]
										}]
									}],
									panel_actividades: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"showing":false,"styles":{},"verticalAlign":"top","width":"100%"}, {}, {
										schedule_page_container: ["wm.PageContainer", {"loadParentFirst":false,"pageName":"Schedule","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {"onPageChanged":"schedule_page_containerPageChanged","onStart":"schedule_page_containerStart"}]
									}]
								}]
							}],
							templateRight: ["wm.Panel", {"_classes":{"domNode":["template-right"]},"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"24px"}, {}]
						}],
						panel3: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							templateBottomLeft: ["wm.Panel", {"_classes":{"domNode":["template-bottom-left"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}],
							templateBottom: ["wm.Panel", {"_classes":{"domNode":["template-bottom-center"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}],
							templateBottomRight: ["wm.Panel", {"_classes":{"domNode":["template-bottom-right"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}]
						}],
						panelFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px","wm_FontColor_Graphite","wm_BackgroundColor_White","wm_Border_BottomStyleCurved12px"]},"align":"right","caption":"Aprendoz  Colegio Rochester<br>Todos los derechos reservados 2012 -2013","height":"48px","padding":"10,20","showing":false,"singleLine":false,"width":"100%"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}