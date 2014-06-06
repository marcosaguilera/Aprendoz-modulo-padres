Date.prototype.getWeek = function() {
var onejan = new Date(this.getFullYear(),0,1);
return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
},
dojo.declare("Main", wm.Page, {
start: function() {
//  this.designableDialog1.show();
var curdate = new Date().getTime();
this.parents_global_currentSy.input.setValue("f1", curdate);
this.parents_global_currentSy.update();
/**Funcion de Dojo**/
dojo.subscribe("session-expiration", this, "mySessionExpiredMethod");
},
"preferredDevice": "desktop",
mySessionExpiredMethod: function(){
alert("Aviso importante: Sesión expirada \n\n"+ "Su sesión ha excedido el tiempo de inactividad permitido. Por favor ingrese nuevamente.");
window.location.reload();
},
/********************************
* Implemenatacion de loaders   *
* y listas de nacionalidades   *
********************************/
nacionalidadBeforeUpdate: function(inSender, ioInput) {
try {
app.pageDialog.showPage("Loading", true, 400,120);
} catch(e) {
console.error('ERROR IN nacionalidadBeforeUpdate: ' + e);
}},
nacionalidadSuccess: function(inSender, inDeprecated) {
try {
app.pageDialog.dismiss("Loading");
this.estados.update();
} catch(e) {
console.error('ERROR IN nacionalidadSuccess: ' + e);
}},
estadosBeforeUpdate: function(inSender, ioInput) {
try {
app.pageDialog.showPage("Loading", true, 400,120);
} catch(e) {
console.error('ERROR IN estadosBeforeUpdate: ' + e);
}},
estadosSuccess: function(inSender, inDeprecated) {
try {
app.pageDialog.dismiss("Loading");
this.listaGrado.update();
} catch(e) {
console.error('ERROR IN estadosSuccess: ' + e);
}},
listaGradoBeforeUpdate: function(inSender, ioInput) {
try {
app.pageDialog.showPage("Loading", true, 400,120);
} catch(e) {
console.error('ERROR IN listaGradoBeforeUpdate: ' + e);
}},
listaGradoSuccess: function(inSender, inDeprecated) {
try {
app.pageDialog.dismiss("Loading");
this.list_nacionalidades.update();
} catch(e) {
console.error('ERROR IN listaGradoSuccess: ' + e);
}},
list_nacionalidadesBeforeUpdate: function(inSender, ioInput) {
try {
app.pageDialog.showPage("Loading", true, 400,120);
} catch(e) {
console.error('ERROR IN list_nacionalidadesBeforeUpdate: ' + e);
}},
layer14Show: function(inSender) {
try {
this.listaGrado.update();
} catch(e) {
console.error('ERROR IN layer14Show: ' + e);
}},
/************************************
*                                  *
* FIN Implemenatacion de loaders   *
* y listas de nacionalidades       *
*                                  *
************************************/
paisLookup1Change: function(inSender, inDisplayValue, inDataValue) {
try {
var idp= this.paisLookup1.getDataValue().idPais;
this.idpCodigo.setDataValue(idp);
} catch(e) {
console.error('ERROR IN paisLookup1Change: ' + e);
}
},
idpCodigoChange: function(inSender, inDisplayValue, inDataValue) {
try {
this.estados.update();
this.estados.filter.clearData();
} catch(e) {
console.error('ERROR IN idpCodigoChange: ' + e);
}
},
gradoIngresoEditor1Change: function(inSender, inDisplayValue, inDataValue) {
try {
var gradoChar= this.gradoIngresoEditor1.getDisplayValue();
this.idg.setDataValue(gradoChar);
this.listaCurso.update();
} catch(e) {
console.error('ERROR IN gradoIngresoEditor1Change: ' + e);
}
},
cursoIngresoEditor1Change: function(inSender, inDisplayValue, inDataValue) {
try {
var cursoChar= this.cursoIngresoEditor1.getDisplayValue();
this.idi.setDataValue(cursoChar);
} catch(e) {
console.error('ERROR IN cursoIngresoEditor1Change: ' + e);
}
},
personaLiveForm1BeginUpdate: function(inSender) {
try {
this.idg.hide();
this.idi.hide();
this.gradoIngresoEditor1.show();
this.cursoIngresoEditor1.show();
} catch(e) {
console.error('ERROR IN personaLiveForm1BeginUpdate: ' + e);
}
},
personaLiveForm1UpdateData: function(inSender) {
try {
this.gradoIngresoEditor1.hide();
this.cursoIngresoEditor1.hide();
this.idg.show();
this.idi.show();
} catch(e) {
console.error('ERROR IN personaLiveForm1UpdateData: ' + e);
}
},
personaLiveForm1CancelEdit: function(inSender) {
try {
this.gradoIngresoEditor1.hide();
this.cursoIngresoEditor1.hide();
this.idg.show();
this.idi.show();
} catch(e) {
console.error('ERROR IN personaLiveForm1CancelEdit: ' + e);
}
},
personaLiveForm1DeleteData: function(inSender) {
try {
this.gradoIngresoEditor1.hide();
this.cursoIngresoEditor1.hide();
this.idg.show();
this.idi.show();
} catch(e) {
console.error('ERROR IN personaLiveForm1DeleteData: ' + e);
}
},
documentos_datag_estudiantesSelected: function(inSender, inIndex) {
try {
if(this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoAcademico== true &&       this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoFinanciera== true ) {
this.documentos_butt_modelo_contrato.enable();
this.documentos_butt_matricula.enable();
this.documentos_butt_mensualidades.enable();
this.documentos_mensaje_informativo_error.hide();
this.documentos_mensaje_informativo_aprovado.show();
}
if(this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoAcademico== false && this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoFinanciera== true ){
this.documentos_butt_modelo_contrato.disable();
this.documentos_butt_matricula.disable();
this.documentos_butt_mensualidades.disable();
this.documentos_mensaje_informativo_aprovado.hide();
this.documentos_mensaje_informativo_error.show();
this.documentos_mensaje_informativo_error.setCaption("Por favor comuníquese con el Director de Nivel respectivo.");
}
if(this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoAcademico== true && this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoFinanciera== false ){
this.documentos_butt_modelo_contrato.disable();
this.documentos_butt_matricula.disable();
this.documentos_butt_mensualidades.disable();
this.documentos_mensaje_informativo_aprovado.hide();
this.documentos_mensaje_informativo_error.show();
this.documentos_mensaje_informativo_error.setCaption("Por favor comuníquese con Facturación y Cartera al teléfono 749 6000 Ext.: 4103");
}
if(this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoAcademico== false && this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoFinanciera== false ){
// alert("ambos");
this.documentos_butt_modelo_contrato.disable();
this.documentos_butt_matricula.disable();
this.documentos_butt_mensualidades.disable();
this.documentos_mensaje_informativo_aprovado.hide();
this.documentos_mensaje_informativo_error.show();
this.documentos_mensaje_informativo_error.setCaption("El estudiante no cumple con los requisitos para empezar el proceso de matrícula.</br> Por favor comuníquese con el Director de Nivel respectivo y/o Facturación y Cartera al teléfono 749 6000 Ext.: 4103");
}
} catch(e) {
console.error('ERROR IN documentos_datag_estudiantesSelected: ' + e);
}
},
documentos_butt_modelo_contratoClick: function(inSender, inEvent) {
try {
url= "services/reciboMatricula.download?method=getReport&idp="+this.documentos_datag_estudiantes.selectedItem.getData().id.idPersona;
window.open(url,"_BLANK");
} catch(e) {
console.error('ERROR IN documentos_butt_modelo_contratoClick: ' + e);
}
},
documentos_butt_matriculaClick: function(inSender, inEvent) {
try {
url= "services/reciboPagoBancos.download?method=getReport&idp="+this.documentos_datag_estudiantes.selectedItem.getData().id.idPersona;
window.open(url,"_BLANK");
} catch(e) {
console.error('ERROR IN documentos_butt_matriculaClick: ' + e);
}
},
documentos_butt_mensualidadesClick: function(inSender, inEvent) {
try {
url= "services/reciboMensualidades.download?method=getReport&idp="+this.documentos_datag_estudiantes.selectedItem.getData().id.idPersona;
window.open(url,"_BLANK");
} catch(e) {
console.error('ERROR IN documentos_butt_mensualidadesClick: ' + e);
}
},
Informacion_documentosShow: function(inSender) {
try {
this.l_documentos_Vista_Personas_promocion.update();
this.documentos_butt_modelo_contrato.disable();
this.documentos_butt_matricula.disable();
this.documentos_butt_mensualidades.disable();
} catch(e) {
console.error('ERROR IN Informacion_documentosShow: ' + e);
}
},
ver_ejemploClick: function(inSender, inEvent) {
try {
this.imagen.show();
} catch(e) {
console.error('ERROR IN ver_ejemploClick: ' + e);
}
},
cerrarClick: function(inSender, inEvent) {
try {
this.imagen.hide();
} catch(e) {
console.error('ERROR IN cerrarClick: ' + e);
}
},
a_sv_sendMail_requestSuccess: function(inSender, inDeprecated) {
try {
app.pageDialog.dismiss("Message1");
app.pageDialog.showPage("Message2", false, 260,130);
} catch(e) {
console.error('ERROR IN sendMail_requestSuccess: ' + e);
}
},
a_sv_sendMailPermanentSuccess: function(inSender, inDeprecated) {
try {
app.pageDialog.dismiss("Message1");
app.pageDialog.showPage("Message2", false, 260,130);
} catch(e) {
console.error('ERROR IN a_sv_sendMailCordinators_requestSuccess: ' + e);
}
},
a_sv_sendMail_requestError: function(inSender, inError) {
try {
alert("Nope. Algo esta mal!");
} catch(e) {
console.error('ERROR IN sendMail_requestError: ' + e);
}
},
transporte_menu_rutasClick: function(inSender) {
try {
this.transporte_enviar_solicitudes.hide();
this.transporte_enviar_none.hide();
this.transporte_enviar_programacion.hide();
this.transporte_enviar_rutas.show();
/*paneles*/
this.transporte_panel_novedades.hide();
this.transporte_panel_solicitudes.hide();
this.transporte_panel_rutas.show();
//this.spacer1.setWidth("100%");
} catch(e) {
console.error('ERROR IN transporte_menu_rutasClick: ' + e);
}
},
transporte_menu_programacionClick: function(inSender) {
try {
this.transporte_enviar_solicitudes.hide();
this.transporte_enviar_none.hide();
this.transporte_enviar_rutas.hide();
this.transporte_enviar_programacion.show();
/*acciones en paneles*/
this.transporte_panel_rutas.hide();
this.transporte_panel_solicitudes.hide();
this.transporte_panel_novedades.show();
} catch(e) {
console.error('ERROR IN transporte_menu_novedadesClick: ' + e);
}
},
novedadesLiveForm1BeginInsert: function(inSender) {
try {
this.personaLookup2.setValue("dataValue", this.transporte_alumnos.selectedItem.getData().id.idPersona);
this.aprobacionDirNivelEditor1.setDataValue(0);
this.aprobacionCoordinadorEditor1.setDataValue(0);
this.aprobacionTransporteEditor1.setDataValue(0);
this.fechaProgramadaEditor2.setDataValue(new Date());
} catch(e) {
console.error('ERROR IN novedadesLiveForm1BeginInsert: ' + e);
}
},
horaProgramadaEditor1Change: function(inSender, inDisplayValue, inDataValue) {
try {
var getHora = this.horaProgramadaEditor1.getDataValue();
this.horaActualSalidaEditor1.setDataValue(getHora);
} catch(e) {
console.error('ERROR IN horaProgramadaEditor1Change: ' + e);
}
},
recargosClick: function(inSender, inEvent) {
try {
var idp = 11088;
url= "services/reciboExtractos.download?method=getReport&idp="+idp;
window.open(url,"_BLANK");
} catch(e) {
console.error('ERROR IN recargosClick: ' + e);
}
},
transporte_menu_solicitudesClick: function(inSender) {
try {
this.transporte_enviar_rutas.hide();
this.transporte_enviar_none.hide();
this.transporte_enviar_programacion.hide();
this.transporte_enviar_solicitudes.show();
/*acciones en paneles*/
this.transporte_panel_novedades.hide();
this.transporte_panel_rutas.hide();
this.transporte_panel_solicitudes.show();
} catch(e) {
console.error('ERROR IN transporte_menu_solicitudesClick: ' + e);
}
},
pestana_rutasClick: function(inSender, inEvent) {
try {
this.transporte_menu_rutasClick(inSender, inEvent);
this.transporte_panel_novedades.hide();
this.transporte_panel_solicitudes.hide();
this.transporte_panel_rutas.show();
} catch(e) {
console.error('ERROR IN pestana_rutasClick: ' + e);
}
},
pestana_programacionClick: function(inSender, inEvent) {
try {
this.transporte_menu_programacionClick(inSender);
this.transporte_panel_solicitudes.hide();
this.transporte_panel_rutas.hide();
this.transporte_panel_novedades.show();
} catch(e) {
console.error('ERROR IN pestana_programacionClick: ' + e);
}
},
pestana_solicitudesClick: function(inSender, inEvent) {
try {
this.transporte_menu_solicitudesClick(inSender);
this.transporte_panel_rutas.hide();
this.transporte_panel_novedades.hide();
this.transporte_panel_solicitudes.show();
} catch(e) {
console.error('ERROR IN pestana_solicitudesClick: ' + e);
}
},
solicitudesShow: function(inSender) {
try {
this.transporte_lista_personas.update();
this.a_lista_grupoFamiliar.update();
} catch(e) {
console.error('ERROR IN solicitudesShow: ' + e);
}
},
rutasLiveForm1BeginInsert: function(inSender) {
try {
this.numeroRutaEditor1.setDataValue(0);
this.nombreConductorEditor1.setDataValue("no aplica...");
this.nombreMonitoraEditor1.setDataValue("no aplica...");
} catch(e) {
console.error('ERROR IN rutasLiveForm1BeginInsert: ' + e);
}
},
transporte_alumnosSelected: function(inSender, inIndex) {
try {
//acciones para HQL de padres, madres, acudientes
this.l_sv_solicitudes_informacionPadre.input.setValue("grupo",     this.transporte_alumnos.selectedItem.getData().id.grupoFamiliarIdGrupoFamiliar);
this.l_sv_solicitudes_informacionPadre.update();
this.l_sv_solicitudes_informacionMadre.input.setValue("grupo", this.transporte_alumnos.selectedItem.getData().id.grupoFamiliarIdGrupoFamiliar);
this.l_sv_solicitudes_informacionMadre.update();
this.l_sv_solicitudes_informacionAcudiente.input.setValue("grupo", this.transporte_alumnos.selectedItem.getData().id.grupoFamiliarIdGrupoFamiliar);
this.l_sv_solicitudes_informacionAcudiente.update();
//Acciones coordinador de curso
var idPersona= this.transporte_alumnos.selectedItem.getData().id.idPersona;
this.a_getCordinators_byId.input.setValue("id", idPersona);
this.a_getCordinators_byId.update();
//acciones de la seleccion
this.rutasLiveVariable1.update();
this.a_lista_grupoFamiliar.update();
this.inscalumtransporteLiveVariable1.update();
this.transporte_lista_rutas_dias.update();
this.novedadesLiveVariable1.update();
this.newButton5.enable();
this.newButton4.enable();
} catch(e) {
console.error('ERROR IN transporte_alumnosSelected: ' + e);
}
},
inscalumtransporteLiveForm1BeginInsert: function(inSender) {
try {
this.personaLookup3.setDataValue(this.transporte_alumnos.selectedItem.getData().id.idPersona);
} catch(e) {
console.error('ERROR IN inscalumtransporteLiveForm1BeginInsert: ' + e);
}
},
inscalumtransporteDataGrid1Selected: function(inSender, inIndex) {
try {
if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByLunesRuta.numeroRuta > 0){
this.rutasByLunesRutaLookup1.disable();
}else{this.rutasByLunesRutaLookup1.enable();}
if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByMartesRuta.numeroRuta > 0){
this.rutasByMartesRutaLookup1.disable();
}else{this.rutasByMartesRutaLookup1.enable();}
if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByMiercolesRuta.numeroRuta > 0){
this.rutasByMiercolesRutaLookup1.disable();
}else{this.rutasByMiercolesRutaLookup1.enable();}
if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByJuevesRuta.numeroRuta > 0){
this.rutasByJuevesRutaLookup1.disable();
}else{this.rutasByJuevesRutaLookup1.enable();}
if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByViernesRuta.numeroRuta > 0){
this.rutasByViernesRutaLookup1.disable();
}else{this.rutasByViernesRutaLookup1.enable();}
if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasBySabadoRuta.numeroRuta > 0){
this.rutasBySabadoRutaLookup1.disable();
}else{this.rutasBySabadoRutaLookup1.enable();}
if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByDomingoRuta.numeroRuta > 0){
this.rutasByDomingoRutaLookup1.disable();
}else{this.rutasByDomingoRutaLookup1.enable();}
} catch(e) {
console.error('ERROR IN inscalumtransporteDataGrid1Selected: ' + e);
}
},
a_getUserNameChange: function(inSender, inDisplayValue, inDataValue) {
try {
this.a_getInforUser.input.setValue("username", this.a_getUserName.getDataValue());
this.a_getInforUser.update();
this.a_getTipoPersona.input.setValue("user", this.a_getUserName.getDataValue());
this.a_getTipoPersona.update();
this.a_informacionUsuario.input.setValue("user", this.a_getUserName.getDataValue());
this.a_informacionUsuario.update();
} catch(e) {
console.error('ERROR IN a_getUserNameChange: ' + e);
}
},
a_getInforUserSuccess: function(inSender, inDeprecated) {
try {
var nombre= main.a_getInforUser.getItem(0);
var n1 = nombre.data.n1;
var nombre2 = main.a_getInforUser.getItem(0);
var n2 = nombre2.data.n2;
var apellido = main.a_getInforUser.getItem(0);
var a1 = apellido.data.a1;
var apellido2 = main.a_getInforUser.getItem(0);
var a2 = apellido2.data.a2;
var nombreCompleto = n1+" "+n2+" "+a1+" "+a2;
var tipo = main.a_getInforUser.getItem(0);
var rol = tipo.data.tipoPe;
var codigoFamilia = main.a_getInforUser.getItem(0);
var codigo= codigoFamilia.data.idFamilia;
var grupoFamiliar = main.a_getInforUser.getItem(0);
var familia = grupoFamiliar.data.grupoFamilia;
this.inicio_nombreCompleto_label.setCaption("BIENVENIDO, "+nombreCompleto);
this.inicio_grupo_familiar_laber.setCaption("Grupo familiar "+familia +" • "+" "+rol);
this.a_getGroupCode.setDataValue(codigo);
this.isUpdatedGrupoFamiliar.input.setValue("idg",codigo);
this.estudiante_grupoFamiliar.input.setValue("idg", codigo);
this.isUpdatedGrupoFamiliar.update();
this.estudiante_grupoFamiliar.update();
} catch(e) {
console.error('ERROR IN a_getInforUserSuccess: ' + e);
}
},
novedadesLiveForm1InsertData: function(inSender) {
try {
var cont= this.a_getCordinators_byId.getCount();
var tipo= this.tipo_solcitud_editor1.getDataValue();
/**EL TIPO DE SOLICITUD**/
var tipo_solicitud = this.tipoSolicitudLookup1.getDataValue().idTipoSolicitud;
var tipo_solicitud_string = this.tipoSolicitudLookup1.getDisplayValue();
if(tipo== "Temporal"){
//HQL captures
//Servicio ya cargado, capturo los datos del usuario logueado en el sistema
//con esto busco que se envie el correo electronico a quien se ha logueado
var nombre= main.a_getInforUser.getItem(0);
var n1 = nombre.data.n1;
var nombre2 = main.a_getInforUser.getItem(0);
var n2 = nombre2.data.n2;
var apellido = main.a_getInforUser.getItem(0);
var a1 = apellido.data.a1;
var apellido2 = main.a_getInforUser.getItem(0);
var a2 = apellido2.data.a2;
var nombreCompleto = n1+" "+n2+" "+a1+" "+a2;
var correoElectronico = main.a_getInforUser.getItem(0);
var mail = correoElectronico.data.correo;
var grupoFamiliar = main.a_getInforUser.getItem(0);
var familia = grupoFamiliar.data.grupoFamilia;
/*getter emails*/
var correoPadre = main.l_sv_solicitudes_informacionPadre.getItem(0);
var correop = correoPadre.data.correo;
var correoMadre = main.l_sv_solicitudes_informacionMadre.getItem(0);
var correom = correoMadre.data.correo;
/*getter datos sobre la solicitud*/
var horaForm = this.horaProgramadaEditor1.getDataValue();
var fechaForm = this.fechaInicioProgramadaEditor1.getDataValue();
var fechaForm2 = this.fechaFinProgramadaEditor2.getDataValue();
var fechaSistema = this.fechaProgramadaEditor2.getDataValue();
var rutaForm = this.rutasLookup1.getDisplayValue();
var codigo = this.transporte_alumnos.selectedItem.getData().id.codigo;
var comentario = this.observacionesEditor1.getDataValue();
var solicitudTipo = this.tipo_solcitud_editor1.getDataValue();
var nombreAlumno = this.transporte_alumnos.selectedItem.getData().id.nombre1+"   "+this.transporte_alumnos.selectedItem.getData().id.nombre2+" "+this.transporte_alumnos.selectedItem.getData().id.apellido1+" "+this.transporte_alumnos.selectedItem.getData().id.apellido2;
/*getter emails cordinadores*/
var correo1= main.a_getCordinators_byId.getItem(0)
var c= correo1.data.correo;
var nombre1= main.a_getCordinators_byId.getItem(0);
var nomb1 = nombre1.data.n1;
var nombre2 = main.a_getCordinators_byId.getItem(0);
var nomb2 = nombre2.data.n2;
var apellido1 = main.a_getCordinators_byId.getItem(0);
var ape1= apellido1.data.a1;
var apellido2 = main.a_getCordinators_byId.getItem(0);
var ape2= apellido2.data.a2;
var nc1= nomb1+" "+nomb2+" "+ape1+" "+ape2;
/*setter datos en el ServiceVariable directo a JavaService*/
this.a_sv_sendMail_request.input.setValue("hora", horaForm);
this.a_sv_sendMail_request.input.setValue("tipo_sol", tipo_solicitud);
this.a_sv_sendMail_request.input.setValue("tipo_solicitud", tipo_solicitud_string);
this.a_sv_sendMail_request.input.setValue("correomadre", correom);
this.a_sv_sendMail_request.input.setValue("correopadre", correop);
this.a_sv_sendMail_request.input.setValue("fecha", fechaForm);
this.a_sv_sendMail_request.input.setValue("fecha2", fechaForm2);
this.a_sv_sendMail_request.input.setValue("grupo", familia);
this.a_sv_sendMail_request.input.setValue("nombreCompletoAlumno", nombreAlumno);
this.a_sv_sendMail_request.input.setValue("nombreAcceso", nombreCompleto);
this.a_sv_sendMail_request.input.setValue("ruta", rutaForm);
this.a_sv_sendMail_request.input.setValue("fechaActual", fechaSistema);
this.a_sv_sendMail_request.input.setValue("codigoAlumno", codigo);
this.a_sv_sendMail_request.input.setValue("observacion", comentario);
this.a_sv_sendMail_request.input.setValue("loggedMail", mail);
this.a_sv_sendMail_request.input.setValue("solicitud", solicitudTipo);
this.a_sv_sendMail_request.input.setValue("nombredocente", nc1);
this.a_sv_sendMail_request.input.setValue("maildocente", c);
this.a_sv_sendMail_request.update();
}
if(tipo== "Permanente"){
//HQL captures
//Servicio ya cargado, capturo los datos del usuario logueado en el sistema
//con esto busco que se envie el correo electronico a quien se ha logueado
var nombre= main.a_getInforUser.getItem(0);
var n1 = nombre.data.n1;
var nombre2 = main.a_getInforUser.getItem(0);
var n2 = nombre2.data.n2;
var apellido = main.a_getInforUser.getItem(0);
var a1 = apellido.data.a1;
var apellido2 = main.a_getInforUser.getItem(0);
var a2 = apellido2.data.a2;
var nombreCompleto = n1+" "+n2+" "+a1+" "+a2;
var correoElectronico = main.a_getInforUser.getItem(0);
var mail = correoElectronico.data.correo;
var grupoFamiliar = main.a_getInforUser.getItem(0);
var familia = grupoFamiliar.data.grupoFamilia;
/*getter emails*/
var correoPadre = main.l_sv_solicitudes_informacionPadre.getItem(0);
var correop = correoPadre.data.correo;
var correoMadre = main.l_sv_solicitudes_informacionMadre.getItem(0);
var correom = correoMadre.data.correo;
/*getter datos sobre la solicitud*/
var horaForm = this.horaProgramadaEditor1.getDataValue();
var fechaForm = this.fechaInicioProgramadaEditor1.getDataValue();
var fechaForm2 = this.fechaFinProgramadaEditor2.getDataValue();
var fechaSistema = this.fechaProgramadaEditor2.getDataValue();
var rutaForm = this.rutasLookup1.getDisplayValue();
var codigo = this.transporte_alumnos.selectedItem.getData().id.codigo;
var comentario = this.observacionesEditor1.getDataValue();
var solicitudTipo = this.tipo_solcitud_editor1.getDataValue();
var nombreAlumno = this.transporte_alumnos.selectedItem.getData().id.nombre1+"   "+this.transporte_alumnos.selectedItem.getData().id.nombre2+" "+this.transporte_alumnos.selectedItem.getData().id.apellido1+" "+this.transporte_alumnos.selectedItem.getData().id.apellido2;
/*getter emails cordinadores*/
var correo1= main.a_getCordinators_byId.getItem(0)
var c= correo1.data.correo;
var nombre1= main.a_getCordinators_byId.getItem(0);
var nomb1 = nombre1.data.n1;
var nombre2 = main.a_getCordinators_byId.getItem(0);
var nomb2 = nombre2.data.n2;
var apellido1 = main.a_getCordinators_byId.getItem(0);
var ape1= apellido1.data.a1;
var apellido2 = main.a_getCordinators_byId.getItem(0);
var ape2= apellido2.data.a2;
var nc1= nomb1+" "+nomb2+" "+ape1+" "+ape2;
/*setter datos en el ServiceVariable directo a JavaService*/
this.a_sv_sendMailPermanent.input.setValue("hora", horaForm);
this.a_sv_sendMailPermanent.input.setValue("tipo_sol", tipo_solicitud);
this.a_sv_sendMailPermanent.input.setValue("tipo_solicitud", tipo_solicitud_string);
this.a_sv_sendMailPermanent.input.setValue("correomadre", correom);
this.a_sv_sendMailPermanent.input.setValue("correopadre", correop);
this.a_sv_sendMailPermanent.input.setValue("fecha", fechaForm);
this.a_sv_sendMailPermanent.input.setValue("fecha2", fechaForm2);
this.a_sv_sendMailPermanent.input.setValue("grupo", familia);
this.a_sv_sendMailPermanent.input.setValue("nombreCompletoAlumno", nombreAlumno);
this.a_sv_sendMailPermanent.input.setValue("nombreAcceso", nombreCompleto);
this.a_sv_sendMailPermanent.input.setValue("ruta", rutaForm);
this.a_sv_sendMailPermanent.input.setValue("fechaActual", fechaSistema);
this.a_sv_sendMailPermanent.input.setValue("codigoAlumno", codigo);
this.a_sv_sendMailPermanent.input.setValue("observacion", comentario);
this.a_sv_sendMailPermanent.input.setValue("loggedMail", mail);
this.a_sv_sendMailPermanent.input.setValue("solicitud", solicitudTipo);
this.a_sv_sendMailPermanent.input.setValue("nombredocente", nc1);
this.a_sv_sendMailPermanent.input.setValue("maildocente", c);
this.a_sv_sendMailPermanent.update();
}
} catch(e) {
console.error('ERROR IN novedadesLiveForm1InsertData: ' + e);
}
},
a_sv_sendMail_requestBeforeUpdate: function(inSender, ioInput) {
try {
app.pageDialog.showPage("Message1", true, 280,120);
} catch(e) {
console.error('ERROR IN a_sv_sendMail_requestBeforeUpdate: ' + e);
}
},
picture1Click: function(inSender) {
try {
if(dojo.isIE >= 6){ // only IE6 and below
url= "http://www.iegallery.com/Addons/Details/14299";
window.open(url,"_BLANK");
}
if(dojo.isSafari >= 4){ // only IE6 and below
url= "http://s3.amazonaws.com/diigo/as/update/as-1.2.safariextz";
window.open(url,"_BLANK");
}
if(dojo.isFF >= 10){ // only Firefox 10 and lower
url= "http://addons.mozilla.org/firefox/downloads/latest/287841/addon-287841-latest.xpi?src=dp-btn-primary";
window.open(url,"_BLANK");
}
if(dojo.isOpera >= 8){ // only Opera
alert("This Extension is not available for Opera Web Browser. We recomend use Google Chrome or Mozilla Firefox.");
}
if(dojo.isChrome >= 12){
url= "http://chrome.google.com/webstore/detail/alelhddbbhepgpmgidjdcjakblofbmce?utm_source=gmail";
window.open(url,"_BLANK");
}
} catch(e) {
console.error('ERROR IN screenshotClick: ' + e);
}
},
a_getCordinators_byIdSuccess: function(inSender, inDeprecated) {
try {
/*getter emails cordinadores*/
var correo1= main.a_getCordinators_byId.getItem(0)
var c= correo1.data.correo;
var nombre1= main.a_getCordinators_byId.getItem(0);
var nomb1 = nombre1.data.n1;
var nombre2 = main.a_getCordinators_byId.getItem(0);
var nomb2 = nombre2.data.n2;
var apellido1 = main.a_getCordinators_byId.getItem(0);
var ape1= apellido1.data.a1;
var apellido2 = main.a_getCordinators_byId.getItem(0);
var ape2= apellido2.data.a2;
} catch(e) {
console.error('ERROR IN a_getCordinators_byIdSuccess: ' + e);
}
},
a_sv_sendMailPermanentError: function(inSender, inError) {
try {
alert("Nope. Algo esta mal!");
} catch(e) {
console.error('ERROR IN a_sv_sendMailCordinators_requestError: ' + e);
}
},
a_sv_sendMailPermanentBeforeUpdate: function(inSender, ioInput) {
try {
app.pageDialog.showPage("Message1", true, 280,120);
} catch(e) {
console.error('ERROR IN a_sv_sendMailCordinators_requestBeforeUpdate: ' + e);
}
},
tipoSolicitudLookup1Change: function(inSender, inDisplayValue, inDataValue) {
try {
var idtipo=  this.tipoSolicitudLookup1.getDataValue().idTipoSolicitud;
if(idtipo == 1 ){
this.transporte_lista_rutas_dias.filter.clearData();
this.transporte_lista_rutas_dias.update();
this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
this.horaProgramadaEditor1.show();
this.relatedEditor3.hide();
this.panel_dias.hide();
this.observacionesEditor1.show();
this.horaActualSalidaEditor1.hide();
this.horaActualSalidaEditor1.setDataValue(new Date());
this.rutasLookup1.setDisplayValue("[...] - ...");
}
if(idtipo == 2 ){
var valueToFilter = this.transporte_alumnos.selectedItem.getData().id.grupoFamiliarIdGrupoFamiliar;
this.transporte_lista_rutas_dias.filter.setValue("grupoFamiliar.idGrupoFamiliar", valueToFilter);
this.transporte_lista_rutas_dias.update();
this.horaProgramadaEditor1.hide();
this.panel_dias.show();
this.relatedEditor3.show();
this.observacionesEditor1.show();
this.horaActualSalidaEditor1.setDataValue(new Date());
this.horaProgramadaEditor1.setDataValue(new Date());
}
if(idtipo == 3 ){
this.horaProgramadaEditor1.hide();
this.relatedEditor3.hide();
this.panel_dias.hide();
this.horaActualSalidaEditor1.hide();
this.transporte_lista_rutas_dias.filter.clearData();
this.horaActualSalidaEditor1.setDataValue(new Date());
this.horaProgramadaEditor1.setDataValue(new Date());
this.observacionesEditor1.show();
this.transporte_lista_rutas_dias.update();
this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
this.rutasLookup1.setDisplayValue("[...] - ...");
}
if(idtipo == 4 ){
this.transporte_lista_rutas_dias.filter.clearData();
this.transporte_lista_rutas_dias.update();
this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
this.horaProgramadaEditor1.hide();
this.relatedEditor3.hide();
this.panel_dias.hide();
this.observacionesEditor1.show();
this.horaActualSalidaEditor1.hide();
this.horaProgramadaEditor1.setDataValue(new Date());
this.horaActualSalidaEditor1.setDataValue(new Date());
this.rutasLookup1.setDisplayValue("[...] - ...");
}
if(idtipo == 5 ){
this.transporte_lista_rutas_dias.filter.clearData();
this.transporte_lista_rutas_dias.update();
this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
this.horaProgramadaEditor1.hide();
this.relatedEditor3.hide();
this.panel_dias.hide();
this.observacionesEditor1.show();
this.horaActualSalidaEditor1.hide();
this.horaProgramadaEditor1.setDataValue(new Date());
this.horaActualSalidaEditor1.setDataValue(new Date());
this.rutasLookup1.setDisplayValue("[...] - ...");
}
if(idtipo == 6 ){
this.transporte_lista_rutas_dias.filter.clearData();
this.transporte_lista_rutas_dias.update();
this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
this.horaProgramadaEditor1.hide();
this.relatedEditor3.hide();
this.panel_dias.hide();
this.observacionesEditor1.show();
this.horaActualSalidaEditor1.hide();
this.horaProgramadaEditor1.setDataValue(new Date());
this.horaActualSalidaEditor1.setDataValue(new Date());
this.rutasLookup1.setDisplayValue("[...] - ...");
}
if(idtipo == 7 ){
this.transporte_lista_rutas_dias.filter.clearData();
this.transporte_lista_rutas_dias.update();
this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
this.horaProgramadaEditor1.hide();
this.relatedEditor3.hide();
this.panel_dias.hide();
this.observacionesEditor1.show();
this.horaActualSalidaEditor1.hide();
this.horaProgramadaEditor1.setDataValue(new Date());
this.horaActualSalidaEditor1.setDataValue(new Date());
this.rutasLookup1.setDisplayValue("[...] - ...");
}
} catch(e) {
console.error('ERROR IN tipoSolicitudLookup1Change: ' + e);
}
},
fechaFinProgramadaEditor2Change: function(inSender, inDisplayValue, inDataValue) {
try {
var _fecha1 = this.fechaInicioProgramadaEditor1.getDataValue();
var _fecha2 = this.fechaFinProgramadaEditor2.getDataValue();
var _f1_format = Date(_fecha1);
var _f2_format = Date(_fecha2);
} catch(e) {
console.error('ERROR IN fechaFinProgramadaEditor2Change: ' + e);
}
},
novedadesDataGrid1Selected: function(inSender, inIndex) {
try {
var idtipo =  this.novedadesDataGrid1.selectedItem.getData().tipoSolicitud.idTipoSolicitud;
if(idtipo == 1 ){
this.horaProgramadaEditor1.show();
this.relatedEditor3.hide();
this.panel_dias.hide();
this.observacionesEditor1.show();
this.horaActualSalidaEditor1.hide();
}
if(idtipo == 2 ){
this.panel_dias.show();
this.relatedEditor3.show();
this.observacionesEditor1.show();
}
if(idtipo == 3 ){
this.horaProgramadaEditor1.hide();
this.relatedEditor3.hide();
this.panel_dias.hide();
this.observacionesEditor1.show();
this.horaActualSalidaEditor1.hide();
}
if(idtipo == 4 ){
this.horaProgramadaEditor1.hide();
this.relatedEditor3.hide();
this.panel_dias.hide();
this.observacionesEditor1.show();
this.horaActualSalidaEditor1.hide();
}
if(idtipo == 5 ){
this.horaProgramadaEditor1.hide();
this.relatedEditor3.hide();
this.panel_dias.hide();
this.observacionesEditor1.show();
this.horaActualSalidaEditor1.hide();
}
if(idtipo == 6 ){
this.transporte_lista_rutas_dias.filter.clearData();
this.transporte_lista_rutas_dias.update();
this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
this.horaProgramadaEditor1.hide();
this.relatedEditor3.hide();
this.panel_dias.hide();
this.observacionesEditor1.show();
this.horaActualSalidaEditor1.hide();
}
if(idtipo == 7 ){
this.horaProgramadaEditor1.hide();
this.relatedEditor3.hide();
this.panel_dias.hide();
this.observacionesEditor1.show();
this.horaActualSalidaEditor1.hide();
}
} catch(e) {
console.error('ERROR IN novedadesDataGrid1Selected: ' + e);
}
},
inicio_ir_a_facturacionClick: function(inSender, inEvent) {
try {
url= "http://aprendoz.rochester.edu.co:8080/Aprendoz_Facturacion";
window.open(url,"_BLANK");
} catch(e) {
console.error('ERROR IN inicio_ir_a_facturacionClick: ' + e);
}
},
tipo_solcitud_editor1Change: function(inSender, inDisplayValue, inDataValue) {
try {
} catch(e) {
console.error('ERROR IN tipo_solcitud_editor1Change: ' + e);
}
},
isAuthenticatedSVSuccess: function(inSender, inDeprecated) {
try {
if(this.isAuthenticatedSV.dataValue = true){
}
if(this.isAuthenticatedSV.dataValue = false){
app.pageDialog.showPage("SesionExpirada", true, 900, 660);
}
} catch(e) {
console.error('ERROR IN isAuthenticatedSVSuccess: ' + e);
}
},
alimento_buttClick: function(inSender, inEvent) {
try {
var idpersona= this.matricula_select_estudiante.getDataValue();
this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
this.estudiante_gradoGrupoFamiliar.update();
this.transporte.hide();
this.adicionales.hide();
this.seguro.hide();
this.impresion.hide();
this.mensaje.hide();
this.ficha_medica.hide();
this.alimentacion.show();
} catch(e) {
console.error('ERROR IN alimento_buttClick: ' + e);
}},
transporte_buttClick: function(inSender, inEvent) {
try {
var idpersona= this.matricula_select_estudiante.getDataValue();
this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
this.estudiante_gradoGrupoFamiliar.update();
this.alimentacion.hide();
this.adicionales.hide();
this.seguro.hide();
this.impresion.hide();
this.mensaje.hide();
this.ficha_medica.hide();
this.transporte.show();
} catch(e) {
console.error('ERROR IN transporte_buttClick: ' + e);
}},
adicional_buttClick: function(inSender, inEvent) {
try {
var idpersona= this.matricula_select_estudiante.getDataValue();
this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
this.estudiante_gradoGrupoFamiliar.update();
this.alimentacion.hide();
this.transporte.hide();
this.seguro.hide();
this.impresion.hide();
this.mensaje.hide();
this.ficha_medica.hide();
this.adicionales.show();
} catch(e) {
console.error('ERROR IN adicional_buttClick: ' + e);
}},
seguro_buttClick: function(inSender, inEvent) {
try {
var idpersona= this.matricula_select_estudiante.getDataValue();
this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
this.estudiante_gradoGrupoFamiliar.update();
this.alimentacion.hide();
this.transporte.hide();
this.adicionales.hide();
this.impresion.hide();
this.mensaje.hide();
this.ficha_medica.hide();
this.seguro.show();
} catch(e) {
console.error('ERROR IN seguro_buttClick: ' + e);
}},
enfermeria_buttClick: function(inSender, inEvent) {
try {
var value= main.matricula_select_estudiante.getDataValue();
main._fichaMedicasv.input.setValue("idp", value);
main._fichaMedicasv.update();
main._hqlAlergias.input.setValue("idp", value);
main._hqlAlergias.update();
this.alimentacion.hide();
this.transporte.hide();
this.adicionales.hide();
this.seguro.hide();
this.mensaje.hide();
this.impresion.hide();
this.ficha_medica.show();
} catch(e) {
console.error('ERROR IN enfermeria_buttClick: ' + e);
}},
impresion_buttClick: function(inSender, inEvent) {
try {
var _grupofamiliar=  this.a_getGroupCode.getDataValue();
this.impresion_grupoFamiliar.input.setValue("gf", _grupofamiliar);
this.impresion_grupoFamiliar.update();
this._verificarResponsablePagoShowPanel.input.setValue("idgf", _grupofamiliar);
this._verificarResponsablePagoShowPanel.update();
this.alimentacion.hide();
this.transporte.hide();
this.adicionales.hide();
this.seguro.hide();
this.mensaje.hide();
this.ficha_medica.hide();
this.impresion.show();
} catch(e) {
console.error('ERROR IN impresion_buttClick: ' + e);
}},
home_buttClick: function(inSender) {
try {
this.alimentacion.hide();
this.transporte.hide();
this.adicionales.hide();
this.seguro.hide();
this.ficha_medica.hide();
this.impresion.hide();
this.mensaje.show();
} catch(e) {
console.error('ERROR IN home_buttClick: ' + e);
}},
agregar_alimClick: function(inSender, inEvent) {
try {
var _iac= this.alimentosDataGrid.selectedItem.getData().idiac;
this.a_actualizaServicio.input.setValue("idiac", _iac );
this.a_actualizaServicio.input.setValue("inscribir", "true" );
this.a_actualizaServicio.update();
} catch(e) {
console.error('ERROR IN agregar_alimClick: ' + e);
}},
a_actualizaServicioSuccess: function(inSender, inDeprecated) {
try {
this.a_listadoServiciosAlimentos.update();
} catch(e) {
console.error('ERROR IN a_actualizaServicioSuccess: ' + e);
}
},
a_actualizaServicioTransSuccess: function(inSender, inDeprecated) {
try {
this.a_listadoServicios.update();
} catch(e) {
console.error('ERROR IN a_actualizaServicioTransSuccess: ' + e);
}},
isUpdatedGrupoFamiliarSuccess: function(inSender, inDeprecated) {
try {
// var _count= main.isUpdatedGrupoFamiliar.getCount();
//   if(_count == 1){
//     var idgrupo= this.a_getGroupCode.getDataValue();
//     this.isUpdatedGrupoFamiliarBool.input.setValue("idg", idgrupo);
//     this.isUpdatedGrupoFamiliarBool.update();
//   }
//   if(_count == 0){
//     //app.pageDialog.showPage("ActualizaDatos", true, 900, 600);
//   }
} catch(e) {
console.error('ERROR IN isUpdatedGrupoFamiliarSuccess: ' + e);
}
},
isUpdatedGrupoFamiliarBoolSuccess: function(inSender, inDeprecated) {
try {
// var _json= main.isUpdatedGrupoFamiliarBool.getItem(0);
// var _bool= _json.data.actualizado;
// var _count= main.isUpdatedGrupoFamiliar.getCount();
// if(_bool==1 && _count==1){
// }
// if(_bool==0 && _count==1){
//   //app.pageDialog.showPage("ActualizaDatos", true, 900, 600);
// }
} catch(e) {
console.error('ERROR IN isUpdatedGrupoFamiliarBoolSuccess: ' + e);
}
},
a_actualizaServicioSegSuccess: function(inSender, inDeprecated) {
try {
this.a_listadoServiciosSeguros.update();
} catch(e) {
console.error('ERROR IN a_actualizaServicioSegSuccess: ' + e);
}},
updateResponsableSuccess: function(inSender, inDeprecated) {
try {
this.impresion_grupoFamiliar.update();
} catch(e) {
console.error('ERROR IN updateResponsableSuccess: ' + e);
}},
contrato_trans_buttClick: function(inSender, inEvent) {
try {
main.a_informacionUsuario.update();
var getter = main.a_informacionUsuario.getItem(0);
var id= getter.data.idpersona;
var clave= getter.data.clave;
var _persona=   this.matricula_select_estudiante.getDataValue();
var formatType= "PDF";
$.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
httpMethod: "POST",
data:{ idp: id,
pass: clave,
uri: "/aprendozreports/MAT002",
format: formatType,
params: {idpersona: _persona}
}
});
inEvent.preventDefault();
} catch(e) {
console.error('ERROR IN contrato_trans_buttClick: ' + e);
}},
a_getGroupCodeChange: function(inSender, inDisplayValue, inDataValue) {
try {
var _grupo= this.a_getGroupCode.getDataValue();
this.getNuevo.input.setValue("grupo", _grupo);
this.getNuevo.update();
} catch(e) {
console.error('ERROR IN a_getGroupCodeChange: ' + e);
}},
/*a_getUserNameSvSuccess: function(inSender, inDeprecated) {
try {
var _username= main.a_getUserNameSv.getData().dataValue;
main._svHideLayer.input.setValue("user", _username);
main.getIdP.input.setValue("user", _username);
main._svHideLayer.update();
main.getIdP.update();
this.a_getInforUser.input.setValue("username", this.a_getUserName.getDataValue());
this.a_getInforUser.update();
this.a_getTipoPersona.input.setValue("user", this.a_getUserName.getDataValue());
this.a_getTipoPersona.update();
this.a_informacionUsuario.input.setValue("user", this.a_getUserName.getDataValue());
this.a_informacionUsuario.update();
} catch(e) {
console.error('ERROR IN a_getUserNameSvSuccess: ' + e);
}},
getIdPSuccess: function(inSender, inDeprecated) {
try {
var _json=  main.getIdP.getItem(0);
var _idp= _json.data.id;
this.dash_asignaturas_estudiante.input.setValue("idpersona", _idp);
this.dash_asignaturas_estudiante.input.setValue("idsy", 3);
this.dash_asignaturas_estudiante.update();
} catch(e) {
console.error('ERROR IN getIdPSuccess: ' + e);
}}, */
_svHideLayerSuccess: function(inSender, inDeprecated) {
try {
var json= main._svHideLayer.getItem(0);
var _tipo= json.data.idtipo;
} catch(e) {
console.error('ERROR IN _svHideLayerSuccess: ' + e);
}},
_fichaMedicasvSuccess: function(inSender, inDeprecated) {
try {
var _json = main._fichaMedicasv.getItem(0);
var _nombre = _json.data.nombrecompleto;
var _emergencia = _json.data.emergencia;
var _eps = _json.data.eps;
var _fecha = _json.data.fecha;
var _grado = _json.data.grado;
var _prepagada = _json.data.prepagada;
var _rh = _json.data.rh;
var _telefono= _json.data.telefono;
var now= new Date();
var yearNow= now.getFullYear();
var monthNow= now.getMonth();
var dayNow= now.getDay();
var pureDate= _fecha;
var bornDate = new Date(pureDate);
var yearBorn= bornDate.getFullYear();
var monthBorn= bornDate.getMonth();
var dayBorn= bornDate.getDay();
var age= yearNow-yearBorn;
if(monthBorn <= monthNow){
if(dayBorn >= dayNow){
this.edad.setDataValue(age+" Años");
}else{
this.edad.setDataValue(age+" Años");
}
}
if(monthBorn > monthNow){
this.edad.setDataValue(age+" Años");
}
this.nombrecompleto.setDataValue(_nombre);
this.gradoIngreso.setDataValue(_grado);
this.rh.setDataValue(_rh);
this.eps.setDataValue(_eps);
this.prepagada.setDataValue(_prepagada);
this.telefono.setDataValue(_telefono);
this.clinica_emergencia.setDataValue(_emergencia);
} catch(e) {
console.error('ERROR IN _fichaMedicasvSuccess: ' + e);
}
},
pagar_pseClick: function(inSender, inEvent) {
try {
var _grupo= this.a_getGroupCode.getDataValue();
var _json= main.a_getInforUser.getItem(0);
var n1 = _json.data.n1;
var n2 = _json.data.n2;
var a1 = _json.data.a1;
var a2 = _json.data.a2;
var nombreCompleto = n1+" "+n2+" "+a1+" "+a2;
var role = _json.data.tipoPe;
var _documento= _json.data.documento;
this._whoIsPayResponsible.input.setValue("idgf", _grupo);
this._whoIsPayResponsible.update();
this.concepto.setDataValue("PAGO_MATRICULA_2013-2014_FUND._COLEGIO_ROCHESTER");
this.pagar_pse_butt.enable();
var _id=  this.matricula_select_estudiante.getDataValue();
this.getNombreAlumno.input.setValue("id", _id);
this.getNombreAlumno.update();
this._totalPagarSV.input.setValue("idp", _id);
this._totalPagarSV.update();
} catch(e) {
console.error('ERROR IN pagar_pseClick: ' + e);
}
},
getNombreAlumnoSuccess: function(inSender, inDeprecated) {
try {
var _json =  main.getNombreAlumno.getItem(0);
var _nombre= _json.data.nombrecompleto;
this.estudiante.setDataValue(_nombre);
} catch(e) {
console.error('ERROR IN getNombreAlumnoSuccess: ' + e);
}
},
_totalPagarSVSuccess: function(inSender, inDeprecated) {
try {
var _json= main._totalPagarSV.getItem(0);
var _valor= _json.data.totalPagar;
this.valor.setDataValue(_valor);
} catch(e) {
console.error('ERROR IN _totalPagarSVSuccess: ' + e);
}
},
pse_logoClick: function(inSender) {
try {
var psedata = {
id : this.noDocumento.getDataValue(),
value : this.valor.getDataValue(),
subject : this.concepto.getDataValue(),
idpersona : this.matricula_select_estudiante.getDataValue()
};
// var url;
// if (url) {
//   console.log("Ajax ok");
//   url = "http://foo.bar"
// } else {
//   console.log("Jodase");
// }
$.ajax({
url: 'http://aprendoz.rochester.edu.co/enr/send/data.json',
data: psedata,
dataType: 'jsonp'
}).done(function( msg ) {
});
} catch(e) {
console.error('ERROR IN pse_logoClick: ' + e);
}
},
pagar_pse_buttClick: function(inSender, inEvent) {
try {
var psedata = {
id : this.noDocumento.getDataValue(),
value : this.valor.getDataValue(),
subject : this.concepto.getDataValue(),
idpersona : this.matricula_select_estudiante.getDataValue()
};
this.pagar_pse_butt.disable();
$.ajax({
url: 'http://aprendoz.rochester.edu.co/enr/send/data.json',
data: psedata,
dataType: 'jsonp',
success : function(data) {
window.open(data.url);
},
fail : function(data) {
this.pagar_pse_butt.enable();
alert("Error: " + data);
}
});
} catch(e) {
console.error('ERROR IN button9Click: ' + e);
}
},
_verificarResponsablePagoSuccess: function(inSender, inDeprecated) {
try {
var _json= main._verificarResponsablePago.getItem(0);
var _cont= main._verificarResponsablePago.getCount();
if(_cont == 1){
alert("ACCIÓN NO VALIDA:\n\nSolo debe existir un responsable por Grupo Familiar.\n\nRetire el responsable existenge (- Retirar) y a continuación elija un nuevo responsable (+ Elegir)");
}
if(_cont == 0){
var _id= this.responsableDataGrid.selectedItem.getData().idunico;
this.updateResponsable.input.setValue("idipgf", _id);
this.updateResponsable.input.setValue("responsable", "true");
this.updateResponsable.update();
this.mensaje_final.setCaption("Has click sobre cada boton, descarga e imprime cada documento, estos los necesitará en el proceso de Matrícula");
this.picture10.show();
this.panel_documentos.show();
}
} catch(e) {
console.error('ERROR IN _verificarResponsablePagoSuccess: ' + e);
}
},
_verificarResponsablePagoShowPanelSuccess: function(inSender, inDeprecated) {
try {
var _cont= main._verificarResponsablePagoShowPanel.getCount();
if(_cont == 1){
this.mensaje_final.setCaption("Has click sobre cada boton, descarga e imprime cada documento. <u><b>Los documentos deben ser impresos en tamaño carta por ambas caras y ser presentados el dia de la oficialización de la matrícula.</u></b>");
this.picture10.show();
this.panel_documentos.show();
}
if(_cont == 0){
this.mensaje_final.setCaption("");
this.picture10.hide();
this.panel_documentos.hide();
this.pagar_pse.disable();
this.pagar_banco.disable();
this.resument_de_pago.hide();
}
} catch(e) {
console.error('ERROR IN _verificarResponsablePagoShowPanelSuccess: ' + e);
}},
responsableDataGridSelected: function(inSender, inIndex) {
try {
this.pagar_pse.enable();
this.pagar_banco.enable();
} catch(e) {
console.error('ERROR IN responsableDataGridSelected: ' + e);
}
},
responsableDataGridDeselected: function(inSender, inIndex) {
try {
this.pagar_pse.disable();
this.pagar_banco.disable();
} catch(e) {
console.error('ERROR IN responsableDataGridDeselected: ' + e);
}
},
detalleAlimentoSuccess: function(inSender, inData) {
try {
alert("Detalles guardados exitosamente!");
} catch(e) {
console.error('ERROR IN detalleAlimentoSuccess: ' + e);
}
},
_hqlAlergiasSuccess: function(inSender, inDeprecated) {
try {
var _json=  main._hqlAlergias.getItem(0);
var _alergias= _json.data.alergias;
var _recomendaciones= _json.data.recomendaciones;
var _idficha= _json.data.idficha;
this.alergias.setDataValue(_alergias);
this.recomendaciones.setDataValue(_recomendaciones);
this.idFicha.setDataValue(_idficha);
} catch(e) {
console.error('ERROR IN _hqlAlergiasSuccess: ' + e);
}
},
guardar_fichaClick: function(inSender, inEvent) {
try {
var idpersona= this.matricula_select_estudiante.getDataValue();
this._verificaExistenciaFichaMedica.input.setValue("idp", idpersona);
this._verificaExistenciaFichaMedica.update();
} catch(e) {
console.error('ERROR IN guardar_fichaClick: ' + e);
}
},
_verificaExistenciaFichaMedicaSuccess: function(inSender, inDeprecated) {
try {
var idpersona= this.matricula_select_estudiante.getDataValue();
var _json= main._verificaExistenciaFichaMedica.getItem(0);
var _cont= main._verificaExistenciaFichaMedica.getCount();
var _idficha= this.idFicha.getDataValue();
var _medico = this.medico_tratante.getDataValue();
var _alergias= this.alergias.getDataValue();
var _enfermedades= this.enfermedades.getDataValue();
var _antecedentes= this.antecedentes.getDataValue();
var _medicamentos= this.medicamentos.getDataValue();
var _medicamentosAlerta= this.medicamentos_no_permitidos.getDataValue();
var _recomendaciones= this.recomendaciones.getDataValue();
if(_cont == 1){
this._fichaMedicaVar.setValue("idfichaMedica", _idficha);
this._fichaMedicaVar.setValue("persona.idPersona", idpersona);
this._fichaMedicaVar.setValue("medicoTratante", _medico);
this._fichaMedicaVar.setValue("alergias", _alergias);
this._fichaMedicaVar.setValue("enfermedadesRecientes", _enfermedades);
this._fichaMedicaVar.setValue("antecedentesQuirurgicos", _antecedentes);
this._fichaMedicaVar.setValue("medicamentosActualidad", _medicamentos);
this._fichaMedicaVar.setValue("medicamentosAlerta", _medicamentosAlerta);
this._fichaMedicaVar.setValue("recomendacionesEspeciales", _recomendaciones);
this.formularioFichaMedica.setDataSet(this._fichaMedicaVar);
this.formularioFichaMedica.updateData();
}
if(_cont == 0){
this._fichaMedicaVar.setValue("persona.idPersona", idpersona);
this._fichaMedicaVar.setValue("medicoTratante", _medico);
this._fichaMedicaVar.setValue("alergias", _alergias);
this._fichaMedicaVar.setValue("enfermedadesRecientes", _enfermedades);
this._fichaMedicaVar.setValue("antecedentesQuirurgicos", _antecedentes);
this._fichaMedicaVar.setValue("medicamentosActualidad", _medicamentos);
this._fichaMedicaVar.setValue("medicamentosAlerta", _medicamentosAlerta);
this._fichaMedicaVar.setValue("recomendacionesEspeciales", _recomendaciones);
this.formularioFichaMedica.setDataSet(this._fichaMedicaVar);
this.formularioFichaMedica.insertData();
}
} catch(e) {
console.error('ERROR IN _verificaExistenciaFichaMedicaSuccess: ' + e);
}},
formularioFichaMedicaSuccess: function(inSender, inData) {
try {
var value= main.matricula_select_estudiante.getDataValue();
main._hqlAlergias.input.setValue("idp", value);
main._hqlAlergias.update();
alert("Detalles medicos agregados satisfactoriamente!.");
} catch(e) {
console.error('ERROR IN formularioFichaMedicaSuccess: ' + e);
}},
iraTransporteClick: function(inSender, inEvent) {
try {
this.transporte_buttClick(inSender, inEvent);
} catch(e) {
console.error('ERROR IN iraTransporteClick: ' + e);
}},
iraSeguroClick: function(inSender, inEvent) {
try {
this.seguro_buttClick(inSender, inEvent);
} catch(e) {
console.error('ERROR IN iraSeguroClick: ' + e);
}},
iraFichaClick: function(inSender, inEvent) {
try {
this.enfermeria_buttClick(inSender, inEvent);
} catch(e) {
console.error('ERROR IN button10Click: ' + e);
}},
iraFinalizarClick: function(inSender, inEvent) {
try {
this.impresion_buttClick(inSender, inEvent);
} catch(e) {
console.error('ERROR IN iraFinalizarClick: ' + e);
}},
/** Coding new version of Aprendoz Padres **/
// generate report for tracking students
performance_student_download1Click: function(inSender) {
var idp = this.performance_family_grid.selectedItem.data.pid;
var ida = this.performance_student_subjects.selectedItem.data.idasignatura;
var id= "1065952";
var clave= "zombie2012+";
var formatType= "PDF";
$.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
httpMethod: "POST",
data:{ idp: id,
pass: clave,
uri: "/aprendozreports/PAD001",
format: formatType,
params: { idpersona: idp, asignatura: ida }
}
});
},
// mouse click parents_estudents_performance change color
parents_estudents_performanceClick3: function(inSender) {
$('#main_parents_estudents_performance')
.css('background-color', '#3652a4');
$('#main_parents_update_data')
.css('background-color', '#a3a3a3');
$('#main_parents_account_state')
.css('background-color', '#a3a3a3');
$('#main_parents_comunity_comunication')
.css('background-color', '#a3a3a3');
$('#main_parents_homework')
.css('background-color', '#a3a3a3');
$('#main_schoolar_schedule')
.css('background-color', '#a3a3a3');
},
// mouse click parents_homework change color
parents_homeworkClick: function(inSender) {
$('#main_parents_homework')
.css('background-color', '#3652a4');
$('#main_parents_estudents_performance')
.css('background-color', '#a3a3a3');
$('#main_parents_update_data')
.css('background-color', '#a3a3a3');
$('#main_parents_account_state')
.css('background-color', '#a3a3a3');
$('#main_parents_comunity_comunication')
.css('background-color', '#a3a3a3');
$('#main_schoolar_schedule')
.css('background-color', '#a3a3a3');
},
// mouse click parents_update_data change color
parents_update_dataClick: function(inSender) {
$('#main_parents_update_data')
.css('background-color', '#3652a4');
$('#main_parents_estudents_performance')
.css('background-color', '#a3a3a3');
$('#main_parents_homework')
.css('background-color', '#a3a3a3');
$('#main_parents_account_state')
.css('background-color', '#a3a3a3');
$('#main_parents_comunity_comunication')
.css('background-color', '#a3a3a3');
$('#main_schoolar_schedule')
.css('background-color', '#a3a3a3');
},
// mouse click parents_account_state change color
parents_account_stateClick: function(inSender) {
$('#main_parents_account_state')
.css('background-color', '#3652a4');
$('#main_parents_update_data')
.css('background-color', '#a3a3a3');
$('#main_parents_estudents_performance')
.css('background-color', '#a3a3a3');
$('#main_parents_homework')
.css('background-color', '#a3a3a3');
$('#main_parents_comunity_comunication')
.css('background-color', '#a3a3a3');
$('#main_schoolar_schedule')
.css('background-color', '#a3a3a3');
},
// mouse click parents_comunity_comunication change color
parents_comunity_comunicationClick2: function(inSender) {
$('#main_parents_comunity_comunication')
.css('background-color', '#3652a4');
$('#main_parents_account_state')
.css('background-color', '#a3a3a3');
$('#main_parents_update_data')
.css('background-color', '#a3a3a3');
$('#main_parents_estudents_performance')
.css('background-color', '#a3a3a3');
$('#main_parents_homework')
.css('background-color', '#a3a3a3');
$('#main_schoolar_schedule')
.css('background-color', '#a3a3a3');
},
// mouse click schoolar_schedule change color
schoolar_scheduleClick: function(inSender) {
$('#main_schoolar_schedule')
.css('background-color', '#3652a4');
$('#main_parents_estudents_performance')
.css('background-color', '#a3a3a3');
$('#main_parents_update_data')
.css('background-color', '#a3a3a3');
$('#main_parents_account_state')
.css('background-color', '#a3a3a3');
$('#main_parents_comunity_comunication')
.css('background-color', '#a3a3a3');
$('#main_parents_homework')
.css('background-color', '#a3a3a3');
},
// mouse click performance_general_tracking change color
performance_general_trackingClick2: function(inSender) {
$('#main_performance_general_tracking')
.css('background-color', '#63bb00');
$('#main_performance_general_button')
.css('background-color', '#a3a3a3');
},
// mouse click performance_general_button change color
performance_general_buttonClick1: function(inSender) {
$('#main_performance_general_button')
.css('background-color', '#63bb00');
$('#main_performance_general_tracking')
.css('background-color', '#a3a3a3');
},
//calling home info
parents_global_usernameSuccess: function(inSender, inDeprecated) {
var userGlobalName= main.parents_global_username.getData().dataValue;
main.parents_global_user_info.input.setValue("username", userGlobalName);
main.parents_global_user_info.update();
},
//calling user info. eg. names, lastnames, family group and codes
parents_global_user_infoSuccess: function(inSender, inDeprecated) {
var json= main.parents_global_user_info.getItem(0);
var completeName= json.data.n1+" "+json.data.n2+" "+json.data.a1+" "+json.data.a2;
var familiarGroup= json.data.grupoFamilia;
this.parents_hi_name.setCaption("BIENVENIDO, "+completeName);
this.parents_hi_family.setCaption("GRUPO FAMILIAR, "+familiarGroup);
},
//load family group info into performance_family_grid
parents_global_user_infoSuccess1: function(inSender, inDeprecated) {
var json= main.parents_global_user_info.getItem(0);
var idgrupofamiliar= json.data.idFamilia;
this.parents_local_performance_familyGroup.input.setValue("idgrupo", idgrupofamiliar);
this.parents_local_performance_familyGroup.update();
},
//navigate to performace
parents_estudents_performanceClick: function(inSender) {
this.performance_top_header.setCaption("CALIFICACIONES DEL ESTUDIANTE");
this.panel_comunity_education.hide();
this.panel_estado_cuenta.hide();
this.panel_actividades.hide();
this.panel_inicio.show();
this.performance_left_buttons_panel.show();
this.performance_general_buttonClick1();
},
//navigate to extracurricular
parents_comunity_comunicationClick1: function(inSender) {
this.panel_inicio.hide();
this.panel_performance.hide();
this.panel_estado_cuenta.hide();
this.panel_actividades.hide();
this.panel_comunity_education.show();
},
//getData from selection in dojoGrid
performance_family_gridSelect: function(inSender) {
var idp = this.performance_family_grid.selectedItem.data.pid;
var json= main.parents_global_currentSy.getItem(0);
var idsy= json.data.idsy;
this.parents_local_student_chart.input.setValue("idpersona", idp);
this.parents_local_student_chart.input.setValue("idsy", idsy);
this.parents_local_student_chart.update();
},
/*******************************************
*      Google Api Chart Tools             *
*******************************************/
parents_local_student_chartSuccess: function(inSender, inDeprecated) {
var idtipo = this.performance_family_grid.selectedItem.data.idtipo;
if(idtipo==1){
this.renderChart_dash1();
}else{
this.renderChart_dash1();
}
},
renderChart_dash1: function() {
var asignaturas= ["Año"];
var puntajes= ['2013-2014'];
var _count= main.parents_local_student_chart.getCount();
for (var i = 0; i < _count; i++) {
var _item= main.parents_local_student_chart.getItem(i).data;
var _asignatura= _item.asignatura;
var _puntaje= _item.puntaje;
var _array= [_asignatura];
var _array2= [_puntaje];
asignaturas.push(_asignatura);
puntajes.push(_puntaje);
}
var data = google.visualization.arrayToDataTable([
asignaturas,
puntajes
]);
var options = {
title : 'Gráfica de Puntajes por Asignatura',
vAxis: {title: "Puntaje",
gridlines: {count: 10}, minorGridlines: {count: 5}
},
hAxis: {
title: "Asignaturas"
},
seriesType: "bars",
series: {
5: {type: "line"
}
},
legend: {
position: "right",
textStyle: {
fontSize: 12,
}
}
};
var chart = this._chart = new google.visualization.ComboChart(this.dashboard_d1.domNode);
chart.draw(data, options);
},
/*******************************************
*      End Google Api Chart Tools         *
*******************************************/
// trigger for students charts
performance_general_trackingClick: function(inSender) {
var idp = this.performance_family_grid.selectedItem.data.pid;
var json= main.parents_global_currentSy.getItem(0);
var idsy= json.data.idsy;
var sy= json.data.sy;
this.performance_student_sy.setCaption(sy);
this.parents_local_student_subjects.input.setValue("idpersona", idp);
this.parents_local_student_subjects.input.setValue("idsy", idsy);
this.parents_local_student_subjects.update();
},
// changing panels depends clicks buttons
performance_general_buttonClick: function(inSender) {
this.panel_performance.hide();
this.panel_inicio.show();
},
// navigation to
performance_general_trackingClick1: function(inSender) {
this.panel_inicio.hide();
this.panel_performance.show();
},
// render the datagrid subjects for a specific user
performance_student_subjectsSelect: function(inSender) {
var idsubject = this.performance_student_subjects.selectedItem.data.idasignatura;
this.parents_local_students_learnings.input.setValue("ida", idsubject);
this.parents_local_students_learnings.update();
},
// show the 'Cursos' related by Comunity Education
parents_comunity_comunicationClick: function(inSender) {
var curdate = new Date().getTime();
this.parents_local_educom.input.setValue("f1", curdate);
this.parents_local_educom.update();
this.performance_top_header.setCaption("EDUCACIÓN COMUNITARIA");
this.comunity_payment_type.setDisplayValue("Anticipado");
this.comunity_transp_selection.setDataValue("1");
this.performance_left_buttons_panel.hide();
},
// selection and validation when the payment_type selectEditor had been selected
comunity_payment_typeChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
var isSelectedGrid= main.comunity_costs_grid.isRowSelected;
var isPeopleSelected= main.performance_family_grid.isRowSelected;
var paymentType= this.comunity_payment_type.getDataValue();
if(isSelectedGrid==true && isPeopleSelected==true && paymentType != undefined){
this.comunity_button_add.enable();
}else{
this.comunity_button_add.disable();
}
},
// terms and conditions actios on radio buttons
comunity_iagree_radioChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
var state= this.comunity_iagree_radio.getDataValue();
if(state=="true"){
this.comunity_terms_accept.enable();
this.comunity_terms_non_accept.enable();
}else{
this.comunity_terms_accept.disable();
this.comunity_terms_non_accept.enable();
}
},
// when the user accept the terms and contidions aprendoz trigger and
// insert a record into InscAlumCurso
/*comunity_terms_acceptClick: function(inSender) {
var json= main.parents_global_currentSy.getItem(0);
var idsy= json.data.idsy;
var idcosto= this.comunity_costs_grid.selectedItem.data.idcosto;
var idpersona= this.performance_family_grid.selectedItem.data.pid;
var valorExtra= main.comunity_costs_grid.selectedItem.data.valor;
var tipoPago= this.comunity_payment_type.getDataValue();
var descuento= 0;
var fechainicio= this.comunity_costs_grid.selectedItem.data.fechainicio;
var fechafin= this.comunity_costs_grid.selectedItem.data.fechafin;
this.parents_viarbale_action_form.setValue("costos.idCosto", idcosto);
this.parents_viarbale_action_form.setValue("persona.idPersona", idpersona);
this.parents_viarbale_action_form.setValue("sy.idSy", idsy);
this.parents_viarbale_action_form.setValue("inscrito", "true");
this.parents_viarbale_action_form.setValue("observacion", tipoPago);
this.parents_viarbale_action_form.setValue("descuentoPorcentaje", descuento);
this.parents_viarbale_action_form.setValue("descuentoValor", descuento);
this.parents_viarbale_action_form.setValue("valorFinalDescuento", valorExtra);
this.parents_viarbale_action_form.setValue("fechaInicio", fechainicio);
this.parents_viarbale_action_form.setValue("fechaFin", fechafin);
this.comunity_action_liveForm.setDataSet(this.parents_viarbale_action_form);
this.comunity_action_liveForm.insertData();
},*/
// insert record in insc_persona_educom
comunity_terms_acceptClick1: function(inSender) {
var json= main.parents_global_currentSy.getItem(0);
var idsy= json.data.idsy;
var now= new Date().getTime();
var ideducom= this.comunity_costs_grid.selectedItem.data.id;
var idpersona= this.performance_family_grid.selectedItem.data.pid;
var tr= this.comunity_transp_selection.getDataValue();
var formaPago= this.comunity_payment_type.getDataValue();
var tipoPago= 5;
var valorSinDescuento= this.comunity_costs_grid.selectedItem.data.valor;
var valorAnticipado= this.comunity_costs_grid.selectedItem.data.pagoAnticipado;
var plazo= this.comunity_payment_type.getDataValue();
if(formaPago=="anticipado"){
dtoActicipado= valorSinDescuento-valorAnticipado;
this.parents_variable_insert_educom_subscription.setValue("persona.idPersona", idpersona);
this.parents_variable_insert_educom_subscription.setValue("educom.idEducom", ideducom);
this.parents_variable_insert_educom_subscription.setValue("descuento", dtoActicipado);
this.parents_variable_insert_educom_subscription.setValue("fechaCreacion", now);
this.parents_variable_insert_educom_subscription.setValue("tomaTransporte", tr);
this.parents_variable_insert_educom_subscription.setValue("tipoPago.idTipoPago", tipoPago);
this.parents_variable_insert_educom_subscription.setValue("plazo", plazo);
this.comunity_action_inscription_educom.setDataSet(this.parents_variable_insert_educom_subscription);
this.comunity_action_inscription_educom.insertData();
}
if(formaPago=="mensual"){
dtoMensual= 0;
this.parents_variable_insert_educom_subscription.setValue("persona.idPersona", idpersona);
this.parents_variable_insert_educom_subscription.setValue("educom.idEducom", ideducom);
this.parents_variable_insert_educom_subscription.setValue("descuento", dtoMensual);
this.parents_variable_insert_educom_subscription.setValue("fechaCreacion", now);
this.parents_variable_insert_educom_subscription.setValue("tomaTransporte", tr);
this.parents_variable_insert_educom_subscription.setValue("tipoPago.idTipoPago", tipoPago);
this.parents_variable_insert_educom_subscription.setValue("plazo", plazo);
this.comunity_action_inscription_educom.setDataSet(this.parents_variable_insert_educom_subscription);
this.comunity_action_inscription_educom.insertData();
}
},
// selection and validation when the user tries to add a Curse
// it shows a alert message
comunity_button_addClick: function(inSender) {
var isCostSelected= main.comunity_costs_grid.isRowSelected;
var isPeopleSelected= main.performance_family_grid.isRowSelected;
var isPaymentTypeSelected= main.comunity_payment_type.getDataValue();
if(isCostSelected==true && isPeopleSelected==true && isPaymentTypeSelected!=undefined){
this.comunity_dialog_terms.show();
}else{
alert("Antes de inscribir asegurese de haber seleccionado la siguiente información: \n\n*Integrante del grupo familiar \n*Curso a inscribir \n*Forma de pago");
}
},
// 1. show details when selection in learnings is ready
performance_student_details_learningsSelect: function(inSender) {
var idasig = this.performance_student_subjects.selectedItem.data.idasignatura;
var idaprendizaje= this.performance_student_details_learnings.selectedItem.data.idaprendizaje;
//learning details
main.parents_local_students_learningDetails.input.setValue("ida2", idasig);
main.parents_local_students_learningDetails.input.setValue("idapr2", idaprendizaje);
main.parents_local_students_learningDetails.update();
},
// 2. trigger final score
performance_student_details_learningsSelect1: function(inSender) {
var idaprendizaje= this.performance_student_details_learnings.selectedItem.data.idaprendizaje;
var idpersona= this.performance_family_grid.selectedItem.data.pid;
main.parents_local_students_final_score.input.setValue("idApr", idaprendizaje);
main.parents_local_students_final_score.input.setValue("idPer", idpersona);
main.parents_local_students_final_score.update();
},
// 3. trigger historical score
// Note** Aparently the bindin' via js (code) doesn't works like the trigger final score above.
// I used the binding via data using the ServiceVariable propierties
// and then trigger the update() action via js like below
performance_student_details_learningsSelect2: function(inSender) {
var idaprendizaje= this.performance_student_details_learnings.selectedItem.data.idaprendizaje;
var idpersona= this.performance_family_grid.selectedItem.data.pid;
console.log(idaprendizaje);
console.log(idpersona);
this.parents_local_students_historical_score.update();
},
// onDetails are ready!
parents_local_students_learningDetailsSuccess: function(inSender, inDeprecated) {
var json= main.parents_local_students_learningDetails.getItem(0);
var codigo= json.data.idaprendizaje;
var numunidad= json.data.numunidad;
var unidad= json.data.unidad;
var unit= json.data.unit;
var numsubtopico= json.data.numsubtopico;
var subtopico= json.data.subtopico;
var subtopic= json.data.subtopic;
this.performance_student_codigo.setDataValue(codigo);
this.performance_student_unit.setDataValue("No. Unidad: "+numunidad+"<br>Unidad: "+unidad+"<br>Unit: "+unit);
this.performance_student_subtopic.setDataValue("No. Subtópico: "+numsubtopico+"<br>Subtópico: "+subtopic+"<br>Subtopic: "+subtopic);
},
// on Final score is ready!
parents_local_students_final_scoreSuccess: function(inSender, inDeprecated) {
var cont= main.parents_local_students_final_score.getCount();
var json= main.parents_local_students_final_score.getItem(0);
if(cont >= 1){
var calificacion= json.data.calificacion;
this.performance_student_calif_final.setDataValue(calificacion);
}else{
this.performance_student_calif_final.setDataValue("");
}
},
// clear fields when the subject changes
performance_student_subjectsSelect1: function(inSender) {
this.performance_student_codigo.clear();
this.performance_student_calif_final.clear();
this.performance_student_unit.clear();
this.performance_student_subtopic.clear();
this.parents_local_students_historical_score.clearData();
},
// on select the curses subscribed
comunity_costs_grid1Select: function(inSender) {
this.comunity_button_delete.enable();
},
comunity_button_deleteClick: function(inSender) {
var _idredord= this.comunity_costs_grid1.selectedItem.data.idInscPersonaEduCom;
this.parents_local_educom_delete_record.input.setValue("idrecord", _idredord);
this.parents_local_educom_delete_record.update();
},
// on change iput for age it filter by...
comunity_educom_age_filterChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
var edad= this.comunity_educom_age_filter.getDataValue();
if(edad != undefined){
this.parents_local_educom.input.setValue("f1", undefined);
this.parents_local_educom.input.setValue("y", edad);
this.parents_local_educom.update();
}else{
var curdate = new Date().getTime();
this.parents_local_educom.input.setValue("f1", curdate);
this.parents_local_educom.input.setValue("y", undefined);
this.parents_local_educom.update();
}
},
// enabling button when grid selected
comunity_costs_gridSelect: function(inSender) {
this.comunity_button_add.enable();
},
// passing idgrupofamiliar to Transporte page, it's soo cool!
parents_transportshipClick: function(inSender) {
var json= main.parents_local_performance_familyGroup.getItem(0);
var idgrupo= json.data.idgrupo;
console.log(idgrupo);
wm.Page.getPage("Transporte").idGrupoFamiliar.setDataValue(idgrupo);
},
// genereat download reponse for report
estado_cuenta_boton_descargaClick: function(inSender) {
var _codigo = this.performance_family_grid.selectedItem.data.code;
var id= "1065952";
var clave= "zombie2012+";
var formatType= "PDF";
$.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
httpMethod: "POST",
data:{ idp: id,
pass: clave,
uri: "/aprendozreports/FAC001",
format: formatType,
params: {codigo: _codigo }
}
});
//inEvent.preventDefault();
},
//get código persona for account_state
performance_family_gridSelect2: function(inSender) {
var codigo = this.performance_family_grid.selectedItem.data.code;
this.performance_top_header.setCaption("ESTADO DE CUENTA");
this.estado_cuenta_codigo.setCaption("Código: "+codigo);
},
//same action Event like performance_family_gridSelect2
parents_account_stateClick1: function(inSender) {
this.performance_family_gridSelect2();
},
//movin' panels & and actions
parents_account_stateClick2: function(inSender) {
this.panel_comunity_education.hide();
this.panel_inicio.hide();
this.performance_left_buttons_panel.hide();
this.panel_performance.hide();
this.panel_actividades.hide();
this.panel_estado_cuenta.show();
},
//re-renderin' google charts
parents_estudents_performanceClick4: function(inSender) {
this.renderChart_dash1();
},
//re-renderin' google charts
performance_general_buttonClick2: function(inSender) {
this.renderChart_dash1();
},
//download report button enable
performance_student_subjectsSelect2: function(inSender) {
this.performance_student_download1.enable();
},
//download report button disable
performance_student_subjectsDeselect: function(inSender) {
this.performance_student_download1.disable();
},
//parents_local_student_subjects
performance_family_gridSelect3: function(inSender) {
var idp = this.performance_family_grid.selectedItem.data.pid;
var json= main.parents_global_currentSy.getItem(0);
var idsy= json.data.idsy;
this.parents_local_student_subjects.input.setValue("idpersona", idp);
this.parents_local_student_subjects.input.setValue("idsy", idsy);
this.parents_local_student_subjects.update();
},
//enabling and disabling panels
schoolar_scheduleClick1: function(inSender) {
var selectedRow= main.performance_family_grid.isRowSelected;
if(selectedRow== true){
this.timeListener.update();
//wm.Page.getPage("Schedule").fireClick();
}else{
wm.Page.getPage("Schedule").fireClick();
}
this.panel_performance.hide();
this.panel_inicio.hide();
this.panel_comunity_education.hide();
this.performance_left_buttons_panel.hide();
this.panel_actividades.show();
this.performance_top_header.setCaption("ACTIVIDADES");
},
//
parents_comunity_comunicationClick3: function(inSender) {
var selectedRow= main.performance_family_grid.isRowSelected;
if(selectedRow == true){
this.parents_local_comunity_subscribed_curses.update();
}else{
alert("Por favor seleccione un integrante del grupo familiar para realizar la inscripción de Cursos.")
}
},
// getting involved curses
performance_family_gridSelect1: function(inSender) {
var selectedRow= main.performance_family_grid.isRowSelected;
if(selectedRow== true){
this.parents_local_comunity_subscribed_curses.update();
}else{}
},
// it fires the start() function in 'Schedule Page'
performance_family_gridSelect4: function(inSender) {
var selectedRow= main.performance_family_grid.isRowSelected;
if(selectedRow== true){
main.schedule_page_container.forceReloadPage();
console.log("time launcher-->");
this.timeListener.update();
}else{}
},
schoolar_scheduleClick2: function(inSender) {
main.schedule_page_container.forceReloadPage();
},
timeListenerTimerFire: function(inSender) {
wm.Page.getPage("Schedule").fireClick();
},
//saving the poll
Guardar_y_TerminarClick: function(inSender) {
var idpersona= main.parents_global_user_info.getItem(0).data.idpersona;
var fechaIngreso= new Date().getTime();
var fechaActualizacion= new Date().getTime();
var grado= "Versión 2014-06";
var tipo= main.parents_global_user_info.getItem(0).data.tipoPe;
var p1= this.p1.getDataValue();
var p2= this.p2.getDataValue();
var p3= this.p3.getDataValue();
var p4= this.p4.getDataValue();
var p5= this.p5.getDataValue();
var p6= this.p6.getDataValue();
var p7= this.p7.getDataValue();
var p8= this.p8.getDataValue();
var p9= this.p9.getDataValue();
var p10= this.p10.getDataValue();
var p11= this.p11.getDataValue();
var p12= this.p12.getDataValue();
var p13= this.p13.getDataValue();
var p14= this.p14.getDataValue();
var p15= this.p15.getDataValue();
var p16= this.p16.getDataValue();
var p17= this.p17.getDataValue();
var p18= this.p18.getDataValue();
var p19= this.p19.getDataValue();
var p20= this.p20.getDataValue();
var sugerencia= this.sugerencias.getDataValue();
console.log(p1);
this.encuestaActions.setValue("persona.idPersona",idpersona);
this.encuestaActions.setValue("fechaIngreso",fechaIngreso);
this.encuestaActions.setValue("fechaActualizacion",fechaActualizacion);
this.encuestaActions.setValue("grado",grado);
this.encuestaActions.setValue("tipo",tipo);
this.encuestaActions.setValue("p1",p1);
this.encuestaActions.setValue("p2",p2);
this.encuestaActions.setValue("p3",p3);
this.encuestaActions.setValue("p4",p4);
this.encuestaActions.setValue("p5",p5);
this.encuestaActions.setValue("p6",p6);
this.encuestaActions.setValue("p7",p7);
this.encuestaActions.setValue("p8",p8);
this.encuestaActions.setValue("p9",p9);
this.encuestaActions.setValue("p10",p10);
this.encuestaActions.setValue("p11",p11);
this.encuestaActions.setValue("p12",p12);
this.encuestaActions.setValue("p13",p13);
this.encuestaActions.setValue("p14",p14);
this.encuestaActions.setValue("p15",p15);
this.encuestaActions.setValue("p16",p16);
this.encuestaActions.setValue("p17",p17);
this.encuestaActions.setValue("p18",p18);
this.encuestaActions.setValue("p19",p19);
this.encuestaActions.setValue("p20",p20);
this.encuestaActions.setValue("sugerencias",sugerencia);
this.encuestaLiveForm.setDataSet(this.encuestaActions);
this.encuestaLiveForm.insertData();
},
//hiding dialog window
encuestaLiveFormSuccess: function(inSender, inData) {
this.designableDialog1.hide();
},
//shooting log grupo_familiar
Guardar_y_TerminarClick1: function(inSender) {
var idgrupofamiliar= main.parents_global_user_info.getItem(0).data.idFamilia;
var fechaCreacion=  new Date().getTime();
var fechaActualizacion=  new Date().getTime();
this.encuestaRegistroFamilia.setValue("fechaCreacion",fechaCreacion);
this.encuestaRegistroFamilia.setValue("fechaActualizacion",fechaActualizacion);
this.encuestaRegistroFamilia.setValue("encuestaTerminada", true);
this.encuestaRegistroFamilia.setValue("grupoFamiliar.idGrupoFamiliar", idgrupofamiliar);
this.logEncuestaForm.setDataSet(this.encuestaRegistroFamilia);
this.logEncuestaForm.insertData();
},
wizardLayers1DoneClick: function(inSender) {
this.Guardar_y_TerminarClick();
},
parents_global_user_infoSuccess2: function(inSender, inDeprecated) {
var idgrupofamiliar= main.parents_global_user_info.getItem(0).data.idFamilia;
this.getLogEncuesta.input.setValue("idgp",idgrupofamiliar);
this.getLogEncuesta.update();
},
getLogEncuestaSuccess: function(inSender, inDeprecated) {
var count= this.getLogEncuesta.getCount();
var tipo= main.parents_global_user_info.getItem(0).data.tipoId;
console.log(count);
if(count>0){
console.log("ya completó la encuesta");
}else{
console.log("-----> tiene que completar la encuesta!");
this.designableDialog1.show();
if(tipo==1){
this.wizardLayers1.hide();
this.estudiante.show();
}else{
this.estudiante.hide();
this.wizardLayers1.show();
}
}
},
_end: 0
});

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
parents_global_user_info: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"personaGetInfo","service":"aprendoz_desarrollo"}, {"onSuccess":"parents_global_user_infoSuccess","onSuccess1":"parents_global_user_infoSuccess1","onSuccess2":"parents_global_user_infoSuccess2"}, {
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
parents_local_educom: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"parentsCostosEduCom","service":"aprendoz_desarrollo"}, {}, {
input: ["wm.ServiceInput", {"type":"parentsCostosEduComInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"comunity_educom_age_filter.dataValue","targetProperty":"y"}, {}]
}]
}]
}],
parents_variable_payment_type: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Mensual\",\"dataValue\":\"mensual\"},{\"name\":\"Anticipado\",\"dataValue\":\"anticipado\"}]","type":"EntryData"}, {}],
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
parents_local_comunity_subscribed_curses: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","maxResults":20,"startUpdate":false,"type":"com.aprendoz_desarrollo.data.InscPersonaEduCom"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"performance_family_grid.selectedItem.pid","targetProperty":"filter.persona.idPersona"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.InscPersonaEduCom","related":["educom","educom.costos","persona"],"view":[
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
gestionencuestasLiveVariable1: ["wm.LiveVariable", {"type":"com.aprendoz_desarrollo.data.GestionEncuestas"}, {}, {
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
gestionencuestasLiveVariable2: ["wm.LiveVariable", {"type":"com.aprendoz_desarrollo.data.GestionEncuestas"}, {}, {
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
syDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"197px","height":"197px","styles":{},"title":"sy","width":"500px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
syLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"112px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"syLivePanel1.popupLiveFormSuccess"}, {
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
comunity_terms_conditions: ["wm.LargeTextArea", {"border":"0","caption":undefined,"dataValue":"En el caso de estudiantes y padres del colegio, el costo de estas actividades se pagará con el mismo sistema de pago de las   mensualidades que tiene el padre de familia con el colegio. Si se paga por anticipado (bimestre o semestre), se otorgará un   descuento del 4%, de lo contrario el cargo será mensual. No se devolverá dinero por retiros antes de culminar la actividad   (bimestre o semestre).","displayValue":"En el caso de estudiantes y padres del colegio, el costo de estas actividades se pagará con el mismo sistema de pago de las   mensualidades que tiene el padre de familia con el colegio. Si se paga por anticipado (bimestre o semestre), se otorgará un   descuento del 4%, de lo contrario el cargo será mensual. No se devolverá dinero por retiros antes de culminar la actividad   (bimestre o semestre).","height":"100%","readonly":true,"styles":{"color":"#060606","fontSize":"14px"},"width":"100%"}, {}]
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
sugerencias: ["wm.LargeTextArea", {"border":"0","caption":"Espacio para sugerencias (opcional)","captionPosition":"left","captionSize":"100px","dataValue":undefined,"displayValue":"","styles":{},"width":"100%"}, {}]
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
parents_header_panel_sec: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"verticalAlign":"top","width":"96px"}, {}, {
SecurityLogoutButton: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"border":"0","borderColor":"#666666","caption":"Salir","margin":"0","styles":{"color":"#ffffff"},"width":"100%"}, {"onclick":"templateLogoutVar"}]
}]
}],
parents_line_long: ["wm.Panel", {"height":"6px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#3752a3"},"verticalAlign":"top","width":"100%"}, {}],
parents_menu_panel: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,20","styles":{"backgroundColor":"#a3a3a3"},"verticalAlign":"top","width":"100%"}, {}, {
parents_estudents_performance: ["wm.Button", {"border":"0","borderColor":"","caption":"Calificaciones","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/students.png","iconWidth":"24px","margin":"0,6,0,0","padding":"4,12,4,12","styles":{"borderRadius":"0px","backgroundColor":"#3652a4"},"width":"145.5px"}, {"onclick":"parents_estudents_performanceClick","onclick3":"parents_estudents_performanceClick3","onclick4":"parents_estudents_performanceClick4"}],
parents_homework: ["wm.Button", {"border":"0","borderColor":"","caption":"Tareas y trabajos","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/homework.png","iconWidth":"24px","margin":"0,6,0,0","padding":"4,12,4,12","showing":false,"styles":{"borderRadius":"0px"},"width":"120undefined"}, {"onclick":"parents_homeworkClick"}],
parents_update_data: ["wm.Button", {"border":"0","borderColor":"","caption":"Actualizar datos","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/update.png","iconWidth":"24px","margin":"0,6,0,0","padding":"4,12,4,12","showing":false,"styles":{"borderRadius":"0px"},"width":"120undefined"}, {"onclick":"parents_update_dataClick"}],
schoolar_schedule: ["wm.Button", {"border":"0","borderColor":"","caption":"Trabajos y activiades","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/schedule.png","iconWidth":"24px","margin":"0,6,0,0","padding":"4,12,4,12","showing":false,"styles":{"borderRadius":"0px"},"width":"137.5px"}, {"onclick":"schoolar_scheduleClick","onclick1":"schoolar_scheduleClick1","onclick2":"schoolar_scheduleClick2"}],
parents_comunity_comunication: ["wm.Button", {"border":"0","borderColor":"","caption":"Educación comunitaria","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/extracurricular.png","iconWidth":"24px","margin":"0,4,0,0","padding":"4,12,4,12","roles":["2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"],"styles":{"borderRadius":"0px"},"width":"140px"}, {"onclick":"parents_comunity_comunicationClick","onclick1":"parents_comunity_comunicationClick1","onclick2":"parents_comunity_comunicationClick2","onclick3":"parents_comunity_comunicationClick3"}],
parents_account_state: ["wm.Button", {"border":"0","borderColor":"","caption":"Estado de cuenta","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/money.png","iconWidth":"24px","margin":"0,6,0,0","padding":"4,12,4,12","styles":{"borderRadius":"0px"},"width":"110undefined"}, {"onclick":"parents_account_stateClick","onclick1":"parents_account_stateClick1","onclick2":"parents_account_stateClick2"}],
parents_transportship: ["wm.Button", {"border":"0","borderColor":"","caption":"Transporte","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/bus.png","iconWidth":"24px","margin":"0,4,0,0","padding":"4,12,4,12","roles":["2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"],"showing":false,"styles":{"borderRadius":"0px"},"width":"140px"}, {"onclick":"parents_transportshipClick","onclick1":"parents_transportshipClick1","onclick2":"parents_transportshipClick2"}]
}],
parents_spacer2: ["wm.Spacer", {"height":"15px","styles":{},"width":"100%"}, {}],
panel_main_contents: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"styles":{},"verticalAlign":"top","width":"100%"}, {}, {
performance_left_details: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"center","lock":true,"styles":{},"verticalAlign":"top","width":"240px"}, {}, {
performance_top_header: ["wm.Label", {"caption":"CALIFICACIONES DEL ESTUDIANTE","height":"69px","padding":"4","singleLine":false,"styles":{"backgroundColor":"#63bb00"},"width":"100%"}, {}],
performance_left_buttons_panel: ["wm.Panel", {"height":"29px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
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
{"show":false,"field":"idgrupo","title":"Idgrupo","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"dsType":"com.aprendoz_desarrollo.data.output.GetGrupoFamiliarbyUserRtnType","height":"110%","localizationStructure":{},"margin":"0","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"12px"}}, {"onSelect":"performance_family_gridSelect","onSelect1":"performance_family_gridSelect1","onSelect2":"performance_family_gridSelect2","onSelect3":"performance_family_gridSelect3","onSelect4":"performance_family_gridSelect4","onSelect5":"performance_family_gridSelect5"}, {
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
comunity_educom_age_filter: ["wm.Number", {"border":"0","caption":"Para filtrar los cursos ingrese edad","captionSize":"200px","changeOnKey":true,"dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","helpText":"Ingrese una edad para filtrar los cursos correspondientes.","placeHolder":"#","styles":{},"width":"260px"}, {"onchange":"comunity_educom_age_filterChange"}]
}],
comunity_costs_grid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"idcosto","title":"Idcosto","width":"80px","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":false,"field":"codigo","title":"Código","width":"60px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"tipoeducom","title":"Tipo","width":"50px","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":false,"field":"id","title":"Id","width":"50px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"edad1","title":"Edad","width":"90px","align":"left","formatFunc":"","editorProps":null,"expression":"${edad2}+\"-\"+${edad1}+\" año(s)\"","mobileColumn":false},
{"show":true,"field":"nombre","title":"Curso","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fechainicio","title":"Inicia","width":"90px","align":"left","formatFunc":"wm_date_formatter","editorProps":null,"mobileColumn":false},
{"show":true,"field":"fechafin","title":"Finaliza","width":"90px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"pagoAnticipado","title":"Valor pago anticipado","width":"82px","align":"left","formatFunc":"wm_number_formatter","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":true,"field":"valor","title":"Tarifa bim. sin descuento","width":"95px","align":"left","formatFunc":"wm_number_formatter","formatProps":{"currency":"COP","dijits":0},"expression":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Tipo: \" + ${tipoeducom} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Edad: \" + ${wm.runtimeId}.formatCell(\"edad1\", ${edad1}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Curso: \" + ${nombre}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Inicia: \" + ${wm.runtimeId}.formatCell(\"fechainicio\", ${fechainicio}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Finaliza: \" + ${wm.runtimeId}.formatCell(\"fechafin\", ${fechafin}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Valor pago anticipado: \" + ${wm.runtimeId}.formatCell(\"pagoAnticipado\", ${pagoAnticipado}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Tarifa bim. sin descuento: \" + ${wm.runtimeId}.formatCell(\"valor\", ${valor}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"edad2","title":"Edad2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"fecha2","title":"Fecha2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"fecha1","title":"Fecha1","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"300px","margin":"0","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"12px"}}, {"onSelect":"comunity_costs_gridSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"parents_local_educom","targetProperty":"dataSet"}, {}]
}]
}],
comunity_space1: ["wm.Spacer", {"height":"10px","width":"100%"}, {}],
comunity_payment_type: ["wm.SelectMenu", {"caption":"Seleccione una forma de pago","captionSize":"180px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","helpText":"¿Qué es esto? <br><br>Anticipado: A usted se le cargará la facturación de forma bimestral.<br><br>Mensual: Usted realizará los pagos  de manera mensual.","styles":{},"width":"350px"}, {"onchange":"comunity_payment_typeChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"parents_variable_payment_type","targetProperty":"dataSet"}, {}]
}]
}],
comunity_action_liveForm: ["wm.LiveForm", {"height":"37px","horizontalAlign":"left","showing":false,"styles":{},"verticalAlign":"top"}, {"onError":"errorInsertion","onSuccess":"parents_local_comunity_subscribed_curses","onSuccess1":"recordInserted","onSuccess2":"comunity_dialog_terms.hide"}],
comunity_top_panel: ["wm.Panel", {"height":"60px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
comunity_transp_selection: ["wm.RadioSet", {"border":"1","borderColor":"#ffffff","caption":"¿Toma servicio de transporte?","captionSize":"180px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"60px","displayField":"name","displayValue":"","height":"60px","helpText":"¿Que es esto?<br><br>Los cursos extracurriculares generalmente se extienden en horarios diferentes a los habituales, lo que en algunos casos dificulte el transporte de los estudiantes. En esta selección usted podrá definir si su hijo tomará el servicio de transporte ofrecido por el Colegio. En caso contrario se entenderá que el estudiante será recogido por un responsable.","styles":{},"width":"350px"}, {}, {
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
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idInscPersonaEduCom} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Transporte: \" + ${tomaTransporte}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"idInscPersonaEduCom","title":" ","width":"60px","align":"center","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"tomaTransporte","title":"Transporte","width":"80px","align":"center","formatFunc":"","fieldType":"dojox.grid.cells.Bool","editorProps":null,"mobileColumn":false},
{"show":false,"field":"fechaCreacion","title":"FechaCreacion","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"fechaActualizacion","title":"FechaActualizacion","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"descuento","title":"Descuento","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"plazo","title":"Plazo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"activoRetirado","title":"ActivoRetirado","width":"100%","displayType":"CheckBox","align":"left","formatFunc":""},
{"show":false,"field":"beca","title":"Beca","width":"100%","displayType":"CheckBox","align":"left","formatFunc":""}
],"height":"150px","margin":"0","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"13px","color":"#020202"}}, {"onSelect":"comunity_costs_grid1Select"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"parents_local_comunity_subscribed_curses","targetProperty":"dataSet"}, {}]
}]
}],
comunity_top_panel2: ["wm.Panel", {"height":"40px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
comunity_button_delete: ["wm.Button", {"caption":"[-] Retirar","disabled":true,"height":"100%","margin":"0","styles":{},"width":"90px"}, {"onclick":"comunity_button_deleteClick"}]
}]
}],
panel_inicio: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"center","lock":true,"padding":"5,15,5,15","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
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
panel_transporte: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
transporte_page_container: ["wm.PageContainer", {"deferLoad":true,"pageName":"Transporte","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
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
};

Main.prototype._cssText = '.wmCheckboxSet {\
border: none !important;\
}\
#main_parents_hi_name{\
color: #B22418 !important;\
text-shadow: 0 1px rgba(0, 0, 0, 0.3);\
font-size: 16px !important;\
}\
#main_parents_hi_family{\
color: #281d73 !important;\
text-shadow: 0 1px rgba(0, 0, 0, 0.3);\
font-size: 14px !important;\
}\
#main_parents_home {\
border: none;\
color: #fff;\
background: none;\
}\
#main_parents_homework {\
border: none;\
color: #fff;\
background: none;\
}\
#main_parents_estudents_performance{\
border: none;\
color: #fff;\
background: none;\
}\
#main_parents_update_data{\
border: none;\
color: #fff;\
background: none;\
}\
#main_parents_account_state{\
border: none;\
color: #fff;\
background: none;\
}\
#main_schoolar_schedule{\
border: none;\
color: #fff;\
background: none;\
}\
#main_parents_comunity_comunication{\
border: none;\
color: #fff;\
background: none;\
}\
#main_parents_news_title{\
color: white;\
font-size: 17px;\
}\
#main_performance_general_button{\
border: none;\
color: #fff;\
background: none;\
}\
#main_performance_general_tracking{\
border: none;\
color: #fff;\
background: none;\
}\
#main_performance_student_sy{\
font-family: Helvetica, Arial, sans-serif;\
}\
#main_performance_student_asignaturas{\
font-family: Helvetica, Arial, sans-serif;\
}\
#main_performance_student_download1{\
border: none !important;\
color: #ffffff;\
background: none;\
}\
#main_performance_student_learnings{\
font-family: Helvetica, Arial, sans-serif;\
}\
#main_comunity_button_add{\
background-color: rgb(85, 189, 19) !important;\
border: none !important;\
color: #ffffff;\
background: none;\
}\
#main_comunity_button_delete{\
background-color: rgb(197, 53, 57) !important;\
border: none !important;\
color: #ffffff;\
background: none;\
}\
#main_performance_top_header{\
color: #fff;\
font-size: large;\
font-family: sans-serif;\
font-weight: 300;\
text-rendering: optimizeLegibility;\
}\
#main_performance_family_grid{\
cursor: pointer;\
}\
#main_performance_student_subjects{\
cursor: pointer;\
}\
#main_performance_student_details_learnings{\
cursor: pointer;\
}\
#main_comunity_terms_accept{\
background-color: rgb(85, 189, 19) !important;\
border: none !important;\
color: #ffffff;\
background: none;\
}\
#main_comunity_terms_non_accept{\
background-color: rgb(197, 53, 57) !important;\
border: none !important;\
color: #ffffff;\
background: none;\
}\
#main_SecurityLogoutButton{\
background-color: rgb(197, 53, 57) !important;\
border: none !important;\
color: #ffffff;\
background: none;\
}\
#main_comunity_costs_grid1{\
cursor: pointer;\
}\
#main_comunity_costs_grid{\
cursor: pointer;\
}\
#main_panelFooter{\
height: 15px !important;\
}\
#main_parents_transportship{\
border: none;\
color: #fff;\
background: none;\
}\
/** fin css **/\
.Main .Main-aviso2{\
background: #FFCC00;\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -webkit-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -o-linear-gradient(center top , #FFCC00, #FFCC00);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-button7{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-parents_comunity_comunication{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-button8{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-inscalumasigDataGrid1{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-aprendizajes{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-UltimaCalifdataGrid1{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-HistorialdataGrid5{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-dataGrid3{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-personaDataGrid2{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-boton_generar_informe{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-aviso_info_familiar{\
font-weight: normal;\
color: #000000;\
/* text-shadow: 0 1px rgba(0, 0, 0, 0.1); */\
/* text-transform: uppercase; */\
/* cursor: pointer; */\
border-radius: 2px 2px 2px 2px;\
vertical\
}\
.Main .Main-picture3{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-personaDataGridX{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-inscalumasigDataGridX{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-aprendizajes{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}.Main .Main-tabla_familia_principal{\
/* text-transform: uppercase;*/\
cursor: pointer;\
}\
.Main .Main-max {\
cursor: pointer\
}\
.Main .Main-min {\
cursor: pointer\
}\
.Main .Main-Logrados {\
visibility: hidden\
}\
.Main .Main-Esperados {\
visibility: hidden\
}\
.Main .Main-documentos_mensaje_informativo_error {\
background: none repeat scroll 0 0 #FCD116;\
background-image: -moz-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -webkit-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -moz-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -o-linear-gradient(center top , #FCD116, #FCD116);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-documentos_mensaje_informativo_aprovado {\
background: none repeat scroll 0 0 #9CCB19;\
background-image: -moz-linear-gradient(center top , #9CCB19, #9CCB19);\
background-image: -webkit-linear-gradient(center top , #9CCB19, #9CCB19);\
background-image: -moz-linear-gradient(center top , #9CCB19, #9CCB19);\
background-image: -o-linear-gradient(center top , #9CCB19, #9CCB19);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-documentos_mensaje_informativo_error_financiera {\
background: none repeat scroll 0 0 #FCD116;\
background-image: -moz-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -webkit-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -moz-linear-gradient(center top , #FCD116, #FCD116);\
background-image: -o-linear-gradient(center top , #FCD116, #FCD116);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-documentos_butt_modelo_contrato {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
}\
.Main .Main-documentos_butt_matricula {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
}\
.Main .Main-documentos_butt_mensualidades {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-bottom-right-radius: 10px;\
}\
.Main .Main-documentos_datag_estudiantes {\
cursor: pointer;\
}\
.Main .Main-personaDetailsPanel1 {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
}\
.Main .Main-aviso_info_familiar {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
}\
.Main .Main-personaGridPanel {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
}\
.Main .Main-inscalumasigGridPanel {\
background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169df));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169df);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169df);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169df);\
background-image: -o-linear-gradient(top,#4D90FE,#2169df);\
background-image: linear-gradient(top,#4D90FE,#2169df);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
}\
.Main .Main-aviso_rendimiento {\
background: #4D90FE;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
}\
.Main .Main-personaDataGridX {\
color: #000000;\
}\
.Main .Main-inscalumasigDataGridX {\
color: #000000;\
}\
.Main .Main-ver_ejemplo {\
background: #4D90FE;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-top-right-radius: 10px;\
}\
.Main .Main-cerrar {\
background: #B0B0B0;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-top-right-radius: 10px;\
}\
.Main .Main-panel_imag {\
background: #B0B0B0;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-bottom-right-radius: 10px;\
}\
.Main .Main-imagen {\
border-top-left-radius: 5px;\
border-top-right-radius: 5px;\
border-bottom-left-radius: 5px;\
border-bottom-right-radius: 5px;\
}\
.Main .Main-transporte_alumnos {\
cursor: pointer;\
}\
.Main .Main-transporte_datagrid_rutas {\
cursor: pointer;\
}\
.Main .Main-transporte_menu_rutas {\
border-bottom-left-radius: 4px;\
border-top-left-radius: 4px;\
cursor: pointer;\
}\
.Main .Main-transporte_menu_programacion {\
border-bottom-left-radius: 4px;\
border-top-left-radius: 4px;\
cursor: pointer;\
}\
.Main .Main-picture6 {\
border-bottom-left-radius: 4px;\
border-top-left-radius: 4px;\
}\
.Main .Main-pestana_rutas {\
background: #FFB90F;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-top-right-radius: 10px;\
}\
.Main .Main-pestana_programacion {\
background: #0276FD;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-top-right-radius: 10px;\
}\
.Main .Main-transporte_panel_novedades {\
background: #0276FD;\
}\
.Main .Main-transporte_panel_rutas {\
background: #FFB90F;\
}\
.Main .Main-pestana_solicitudes {\
background: #CD3333;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
border-top-left-radius: 10px;\
border-top-right-radius: 10px;\
}\
.Main .Main-transporte_panel_solicitudes {\
background: #CD3333;\
}\
.Main .Main-transporte_menu_solicitudes {\
border-bottom-left-radius: 4px;\
border-top-left-radius: 4px;\
cursor: pointer;\
}\
.Main .Main-novedadesDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-inscalumtransporteDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-rutasDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-inicio {\
background-color: #f2f2f2;\
}\
.Main .Main-inicio_head_logo_panel {\
background: white;\
border-top-left-radius: 50px;\
border-bottom-right-radius: 50px;\
}\
.Main .Main-inicio_rol_label {\
color: #281d73;\
text-shadow: 0 1px rgba(0, 0, 0, 0.3);\
}\
.Main .Main-inicio_grupo_familiar_laber {\
}\
.Main .Main-parents_news_title {\
cursor: pointer;\
}\
.Main .Main-inicio_ir_a_facturacion {\
background: #4D90FE;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
text-decoration: blink;\
-webkit-animation-name: blink;\
-webkit-animation-iteration-count: infinite;\
-webkit-animation-timing-function: cubic-bezier(1.0,0,0,1.0);\
-webkit-animation-duration: 1s;\
border-radius: 3px;\
}\
.Main .Main-matricula {\
background-color: #f2f2f2;\
}\
.Main .Main-transporte_boton {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-alimento_boton {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
}\
.Main .Main-big_panel {\
padding: 15px;\
background: #f1f1f1;\
border-radius: 3px;\
}\
.Main .Main-transporte_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-alimento_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-alimentosDataGrid {\
cursor: pointer;\
}\
.Main .Main-agregar_alim {\
color: #e8f0de;\
border: solid 1px #538312;\
background: #64991e;\
background: -webkit-gradient(linear, left top, left bottom, from(#7db72f), to(#4e7d0e));\
background: -moz-linear-gradient(top, #7db72f, #4e7d0e);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7db72f", endColorstr="#4e7d0e");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-quitar_alim {\
color: #faddde;\
border: solid 1px #980c10;\
background: #d81b21;\
background: -webkit-gradient(linear, left top, left bottom, from(#ed1c24), to(#aa1317));\
background: -moz-linear-gradient(top, #ed1c24, #aa1317);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ed1c24", endColorstr="#aa1317");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-agregar_trans {\
color: #e8f0de;\
border: solid 1px #538312;\
background: #64991e;\
background: -webkit-gradient(linear, left top, left bottom, from(#7db72f), to(#4e7d0e));\
background: -moz-linear-gradient(top, #7db72f, #4e7d0e);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7db72f", endColorstr="#4e7d0e");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-quitar_trans {\
color: #faddde;\
border: solid 1px #980c10;\
background: #d81b21;\
background: -webkit-gradient(linear, left top, left bottom, from(#ed1c24), to(#aa1317));\
background: -moz-linear-gradient(top, #ed1c24, #aa1317);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ed1c24", endColorstr="#aa1317");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-adicional_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-seguro_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-agregar_seg {\
color: #e8f0de;\
border: solid 1px #538312;\
background: #64991e;\
background: -webkit-gradient(linear, left top, left bottom, from(#7db72f), to(#4e7d0e));\
background: -moz-linear-gradient(top, #7db72f, #4e7d0e);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7db72f", endColorstr="#4e7d0e");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-quitar_seg {\
color: #faddde;\
border: solid 1px #980c10;\
background: #d81b21;\
background: -webkit-gradient(linear, left top, left bottom, from(#ed1c24), to(#aa1317));\
background: -moz-linear-gradient(top, #ed1c24, #aa1317);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ed1c24", endColorstr="#aa1317");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-impresion_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(0, 0, 0, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
border: 1px solid #3079ED !important;\
background: #4B8DF8;\
background: -webkit-linear-gradient(top, #4C8FFD, #4787ED);\
background: -moz-linear-gradient(top, #4C8FFD, #4787ED);\
background: -ms-linear-gradient(top, #4C8FFD, #4787ED);\
background: -o-linear-gradient(top, #4C8FFD, #4787ED);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: rgb(255, 255, 255);\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
cursor: pointer;\
}\
.Main .Main-impresion_butt .wmbutton .wmbutton-img{\
background: url(resources/images/buttons/google+-ui-sprite-gray.png) no-repeat;\
background-color: transparent;\
background-position: -216px -126px;\
}.Main .Main-impresion_main_panel {\
background: #666666 url(resources/images/gradients/brillant.png) repeat;\
margin: 0px;\
padding: 0px;\
}\
.Main .Main-parents_top_image_parents {\
background: url(resources/images/buttons/google+-ui-sprite-colour.png);\
background-position: -0px -90px;\
}\
.Main .Main-responsableDataGrid {\
cursor: pointer;\
}\
.Main .Main-agregar_imp {\
color: #e8f0de;\
border: solid 1px #538312;\
background: #64991e;\
background: -webkit-gradient(linear, left top, left bottom, from(#7db72f), to(#4e7d0e));\
background: -moz-linear-gradient(top, #7db72f, #4e7d0e);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7db72f", endColorstr="#4e7d0e");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-quitar_impr {\
color: #faddde;\
border: solid 1px #980c10;\
background: #d81b21;\
background: -webkit-gradient(linear, left top, left bottom, from(#ed1c24), to(#aa1317));\
background: -moz-linear-gradient(top, #ed1c24, #aa1317);\
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ed1c24", endColorstr="#aa1317");\
display: inline-block;\
zoom: 1;\
vertical-align: baseline;\
margin: 0 2px;\
outline: none;\
cursor: pointer;\
text-align: center;\
text-decoration: none;\
font: 11px/100% Arial, Helvetica, sans-serif;\
padding: .5em 2em .55em;\
text-shadow: 0 1px 1px rgba(0,0,0,.3);\
-webkit-border-radius: .5em;\
-moz-border-radius: .5em;\
border-radius: .5em;\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);\
box-shadow: 0 1px 2px rgba(0,0,0,.2);\
}\
.Main .Main-picture10 {\
background: url(resources/images/buttons/google+-ui-sprite-colour.png);\
background-position: -36px -36px;\
}\
.Main .Main-pagare_butt {\
background: #FFB515;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#FFB515),to(#e29b03));\
background-image: -webkit-linear-gradient(top,#FFB515, #e29b03);\
background-image: -moz-linear-gradient(top,#FFB515, #e29b03);\
background-image: -ms-linear-gradient(top,#FFB515, #e29b03);\
background-image: -o-linear-gradient(top,#FFB515, #e29b03);\
background-image: linear-gradient(top,#FFB515, #e29b03);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border: solid 1px #EE9A00 !important;\
border-radius: .3em;\
}\
.Main .Main-contrato_butt {\
background: #FFB515;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#FFB515),to(#e29b03));\
background-image: -webkit-linear-gradient(top,#FFB515, #e29b03);\
background-image: -moz-linear-gradient(top,#FFB515, #e29b03);\
background-image: -ms-linear-gradient(top,#FFB515, #e29b03);\
background-image: -o-linear-gradient(top,#FFB515, #e29b03);\
background-image: linear-gradient(top,#FFB515, #e29b03);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
border: solid 1px #EE9A00 !important;\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border-radius: .3em;\
}\
.Main .Main-mensualidades_butt {\
background: #FFB515;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#FFB515),to(#e29b03));\
background-image: -webkit-linear-gradient(top,#FFB515, #e29b03);\
background-image: -moz-linear-gradient(top,#FFB515, #e29b03);\
background-image: -ms-linear-gradient(top,#FFB515, #e29b03);\
background-image: -o-linear-gradient(top,#FFB515, #e29b03);\
background-image: linear-gradient(top,#FFB515, #e29b03);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
border: solid 1px #EE9A00 !important;\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border-radius: .3em;\
}\
.Main .Main-bancos_butt {\
background: #FFB515;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#FFB515),to(#e29b03));\
background-image: -webkit-linear-gradient(top,#FFB515, #e29b03);\
background-image: -moz-linear-gradient(top,#FFB515, #e29b03);\
background-image: -ms-linear-gradient(top,#FFB515, #e29b03);\
background-image: -o-linear-gradient(top,#FFB515, #e29b03);\
background-image: linear-gradient(top,#FFB515, #e29b03);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border: solid 1px #EE9A00 !important;\
border-radius: .3em;\
}\
.Main .Main-contrato_trans_butt {\
background: #FFB515;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#FFB515),to(#e29b03));\
background-image: -webkit-linear-gradient(top,#FFB515, #e29b03);\
background-image: -moz-linear-gradient(top,#FFB515, #e29b03);\
background-image: -ms-linear-gradient(top,#FFB515, #e29b03);\
background-image: -o-linear-gradient(top,#FFB515, #e29b03);\
background-image: linear-gradient(top,#FFB515, #e29b03);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border: solid 1px #EE9A00 !important;\
border-radius: .3em;\
}\
.Main .Main-contrato_alim_butt {\
background: #FFB515;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#FFB515),to(#e29b03));\
background-image: -webkit-linear-gradient(top,#FFB515, #e29b03);\
background-image: -moz-linear-gradient(top,#FFB515, #e29b03);\
background-image: -ms-linear-gradient(top,#FFB515, #e29b03);\
background-image: -o-linear-gradient(top,#FFB515, #e29b03);\
background-image: linear-gradient(top,#FFB515, #e29b03);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border: solid 1px #EE9A00 !important;\
border-radius: .3em;\
}\
.Main .Main-contrato_seg_butt {\
background: #FFB515;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#FFB515),to(#e29b03));\
background-image: -webkit-linear-gradient(top,#FFB515, #e29b03);\
background-image: -moz-linear-gradient(top,#FFB515, #e29b03);\
background-image: -ms-linear-gradient(top,#FFB515, #e29b03);\
background-image: -o-linear-gradient(top,#FFB515, #e29b03);\
background-image: linear-gradient(top,#FFB515, #e29b03);\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
border: solid 1px #EE9A00 !important;\
border-radius: .3em;\
}\
.Main .Main-enfermeria_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-label19 {\
background-color: #B22418;\
color: white;\
}\
.Main .Main-label20 {\
background-color: #B22418;\
color: white;\
}\
.Main .Main-pagar_pse {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(0, 0, 0, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
border: 1px solid #3079ED !important;\
background: #4B8DF8;\
background: -webkit-linear-gradient(top, #4C8FFD, #4787ED);\
background: -moz-linear-gradient(top, #4C8FFD, #4787ED);\
background: -ms-linear-gradient(top, #4C8FFD, #4787ED);\
background: -o-linear-gradient(top, #4C8FFD, #4787ED);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: rgb(255, 255, 255);\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
cursor: pointer;\
}\
.Main .Main-transporteDataGrid {\
cursor: pointer;\
}\
.Main .Main-pagar_pse_butt {\
background-image: url(//www.cafeexpress.co/img/cms/PSE-logo.PNG);\
background-size: 100%;\
background-repeat: no-repeat;\
cursor: pointer;\
}\
.Main .Main-pagar_banco {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(0, 0, 0, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
border: 1px solid #3079ED !important;\
background: #4B8DF8;\
background: -webkit-linear-gradient(top, #4C8FFD, #4787ED);\
background: -moz-linear-gradient(top, #4C8FFD, #4787ED);\
background: -ms-linear-gradient(top, #4C8FFD, #4787ED);\
background: -o-linear-gradient(top, #4C8FFD, #4787ED);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: rgb(255, 255, 255);\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
cursor: pointer;\
}\
.Main .Main-guardar_restricciones_alimenticias {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-guardar_ficha {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-actualizar_ficha {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-home_butt {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 3px;\
-moz-border-radius: 3px;\
border-radius: 3px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 12px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-picture13 {\
background: url(resources/images/buttons/google+-ui-sprite-colour.png);\
background-position: -18px -36px;\
}\
.Main .Main-iraTransporte {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 2px;\
-moz-border-radius: 2px;\
border-radius: 2px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 16px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-iraFicha {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 2px;\
-moz-border-radius: 2px;\
border-radius: 2px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 16px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-iraSeguro {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 2px;\
-moz-border-radius: 2px;\
border-radius: 2px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 16px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-iraFinalizar {\
display: inline-block;\
height: 24px;\
padding: 0 7px 0 7px;\
margin: 0 7px 0 0;\
font-size: 11px;\
font-weight: bold;\
line-height: 24px;\
color: #333;\
text-align: center;\
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\
border: solid 1px #aaa;\
float: left;\
cursor: pointer;\
text-decoration: none;\
-webkit-user-select: none;\
-khtml-user-select: none;\
-moz-user-select: none;\
-ms-user-select: none;\
user-select: none;\
-webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 0px 0px #ffffff;\
-webkit-border-radius: 2px;\
-moz-border-radius: 2px;\
border-radius: 2px;\
background-color: #f5f5f5;\
background-image: -moz-linear-gradient(top, #fafafa, #ededed);\
background-image: -ms-linear-gradient(top, #fafafa, #ededed);\
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fafafa), to(#ededed));\
background-image: -webkit-linear-gradient(top, #fafafa, #ededed);\
background-image: -o-linear-gradient(top, #fafafa, #ededed);\
background-image: linear-gradient(top, #fafafa, #ededed);\
background-repeat: repeat-x;\
filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#fafafa", endColorstr="#ededed", GradientType=0);\
-webkit-transition: all 0.05s linear;\
-moz-transition: all 0.05s linear;\
-ms-transition: all 0.05s linear;\
-o-transition: all 0.05s linear;\
transition: all 0.05s linear;\
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\
font-size: 16px;\
line-height: 20px;\
color: #333333;\
width: 55px;\
height: 30px;\
line-height: 30px;\
text-align: center;\
}\
.Main .Main-grafico {\
border-radius: 3px ;\
border: 1px solid #C6C6C6 !important;\
background: #F3F3F3;\
background: -webkit-linear-gradient(top, #F8F8F8, #F1F1F1);\
background: -moz-linear-gradient(top, #F8F8F8, #F1F1F1);\
background: -ms-linear-gradient(top, #F8F8F8, #F1F1F1);\
background: -o-linear-gradient(top, #F8F8F8, #F1F1F1);\
color: #333;\
}\
.Main .Main-panel20 {\
border-radius: 3px 3px;\
}\
.Main .Main-dashboard_d1 {\
border-radius: 0px 0px 3px 3px;\
}\
.Main .Main-main_dash {\
border-radius: 0px 0px 3px 3px;\
}\
.Main .Main-dash_message {\
border-radius: 3px ;\
border: 1px solid #C6C6C6 !important;\
background: #F3F3F3;\
background: -webkit-linear-gradient(top, #F8F8F8, #F1F1F1);\
background: -moz-linear-gradient(top, #F8F8F8, #F1F1F1);\
background: -ms-linear-gradient(top, #F8F8F8, #F1F1F1);\
background: -o-linear-gradient(top, #F8F8F8, #F1F1F1);\
color: #333;\
}\
.Main .Main-boton_generar_informe {\
background: #4D90FE;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
}\
.Main .Main-button7 {\
background: #4D90FE;\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
rgba(0,0,0,0.2);\
}\
';
Main.prototype._htmlText = '';