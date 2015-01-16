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
//alert("Aviso importante: Sesión finalizada \n\n"+ "Su sesión ha sido finalizada. Por favor ingrese nuevamente.");
window.location.reload();
},
/*app code*/
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
var idtipo=  this.tipoSolicitudLookup1.getDataValue().idTipoSolicitud;
if(idtipo == 2 ){
this.transporteRutasLookup1.hide();
}else{
this.transporteRutasLookup1.show();
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
isAuthenticatedSVSuccess: function(inSender, inDeprecated) {
if(this.isAuthenticatedSV.dataValue = true){
}
if(this.isAuthenticatedSV.dataValue = false){
app.pageDialog.showPage("SesionExpirada", true, 900, 660);
}
},
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
$('#main_parents_transportship')
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
$('#main_parents_transportship')
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
$('#main_parents_transportship')
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
$('#main_parents_transportship')
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
$('#main_parents_transportship')
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
$('#main_parents_transportship')
.css('background-color', '#a3a3a3');
},
// mouse click permissions change color
parents_transportshipClick: function(inSender) {
$('#main_parents_transportship')
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
this.panel_transporte.hide();
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
this.panel_transporte.hide();
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
var puntajes= ['2014-2015'];
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
var gradostr= main.performance_family_grid.selectedItem.getData().grado;
console.log(gradostr);
var grado= parseInt(gradostr);
console.log(grado);
//alert("Oferta de cursos extracurriculares finalizada.");
this.parents_local_educom.input.setValue("f1", curdate);
this.parents_local_educom.input.setValue("y", grado);
this.parents_local_educom.update();
this.performance_top_header.setCaption("EDUCACIÓN COMUNITARIA");
this.comunity_payment_type.setDisplayValue("Un solo pago");
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
console.log(formaPago);
if(formaPago=="un_solo_pago"){
dtoActicipado= valorSinDescuento-valorAnticipado;
this.parents_variable_insert_educom_subscription.setValue("persona.idPersona", idpersona);
this.parents_variable_insert_educom_subscription.setValue("educom.idEducom", ideducom);
this.parents_variable_insert_educom_subscription.setValue("descuento", dtoActicipado);
this.parents_variable_insert_educom_subscription.setValue("fechaCreacion", now);
this.parents_variable_insert_educom_subscription.setValue("tomaTransporte", tr);
this.parents_variable_insert_educom_subscription.setValue("tipoPago.idTipoPago", tipoPago);
this.parents_variable_insert_educom_subscription.setValue("plazo", plazo);
this.parents_variable_insert_educom_subscription.setValue("activoRetirado", true);
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
this.parents_variable_insert_educom_subscription.setValue("activoRetirado", true);
this.comunity_action_inscription_educom.setDataSet(this.parents_variable_insert_educom_subscription);
this.comunity_action_inscription_educom.insertData();
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
// genereat download reponse for report
estado_cuenta_boton_descargaClick: function(inSender) {
var _codigo = this.performance_family_grid.selectedItem.data.code;
var id= "1065952";
var clave= "zombie2012+";
var formatType= "PDF";
console.log(_codigo);
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
this.panel_transporte.hide();
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
main.parents_local_comunity_subscribed_curses.filter.setValue("educom.sy.idSy", 5);
main.parents_local_comunity_subscribed_curses.filter.setValue("activoRetirado", true);
this.parents_local_comunity_subscribed_curses.update();
}else{
alert("Por favor seleccione un integrante del grupo familiar para realizar la inscripción de Cursos.")
}
},
// getting involved curses
performance_family_gridSelect1: function(inSender) {
var selectedRow= main.performance_family_grid.isRowSelected;
if(selectedRow== true){
main.parents_local_comunity_subscribed_curses.filter.setValue("educom.sy.idSy", 5);
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
/*getLogEncuestaSuccess: function(inSender, inDeprecated) {
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
},*/
parents_local_educomSuccess: function(inSender, inDeprecated) {
this.comunity_costs_grid.setSortIndex(2);
},
comunity_costs_gridSelect1: function(inSender) {
var ideducom = this.comunity_costs_grid.selectedItem.getData().id;
var json= main.parents_global_currentSy.getItem(0);
var idsy= json.data.idsy;
//triggering MAXSubscriptions validator
main.getMaxEducom.input.setValue("pidsy", idsy);
main.getMaxEducom.input.setValue("pideducom", ideducom);
main.getMaxEducom.update();
},
// selection and validation when the user tries to add a Curse
// it shows a alert message
comunity_button_addClick: function(inSender) {
this.mensajeTransporteDialog.show();
},
getEducomCountSuccess: function(inSender, inDeprecated) {
var cupoMax     = main.comunity_costs_grid.selectedItem.getData().cupoMaximo;
var _countCupoInscritos = main.getMaxEducom.getCount();
var countCupoInscritos = _countCupoInscritos;
var count         = main.getEducomCount.getCount();
var isCostSelected= main.comunity_costs_grid.isRowSelected;
var isPeopleSelected= main.performance_family_grid.isRowSelected;
var isPaymentTypeSelected= main.comunity_payment_type.getDataValue();
var nombre= main.performance_family_grid.selectedItem.getData().nombres;
var tipo= main.comunity_costs_grid.selectedItem.getData().tipoeducom;
var curso= main.comunity_costs_grid.selectedItem.getData().nombre;
var countEAD= main.getEducomEAD.getCount();
var countEFA= main.getEducomEFA.getCount();
var countEPD= main.getEducomEPD.getCount();
var countOLA= main.getEducomOLA.getCount();
var countECR= main.getEducomECR.getCount();
console.log(tipo);
console.log("--->"+countCupoInscritos+" inscritos de "+cupoMax+" permitidos");
if(countCupoInscritos < cupoMax){
// valida el cupo maximo y numero de inscritos, si inscritos es menor permite inscribir
console.log("validando cupo...");
if(count < 2){                          // valida el numero de educom's inscritos por persona, si es menor a (2) permite inscribir
console.log("validando maximo inscritos x persona...");
if(tipo=="EAD"){
console.log("EAD");
if(countEAD<1){
console.log("se puede inscribir el curso EAD");
if(isCostSelected==true && isPeopleSelected==true && isPaymentTypeSelected!=undefined){
this.comunity_dialog_terms.show();
}else{
alert("Antes de inscribir asegurese de haber seleccionado la siguiente información: \n\n*Integrante del grupo familiar \n*Curso a inscribir \n*Forma de pago");
}
}else{
alert("No se puede realizar la inscripción en el curso "+curso+" porque ya tiene inscrito un curso de tipo "+tipo+".\n\nRecomendamos elegir un curso diferente o comunicarse con el Área de Educación comunitaria Ext. 4818");
}
}
if(tipo=="EFA"){
console.log("EFA");
if(countEFA<1){
console.log("se puede inscribir el curso AFR");
if(isCostSelected==true && isPeopleSelected==true && isPaymentTypeSelected!=undefined){
this.comunity_dialog_terms.show();
}else{
alert("Antes de inscribir asegurese de haber seleccionado la siguiente información: \n\n*Integrante del grupo familiar \n*Curso a inscribir \n*Forma de pago");
}
}else{
alert("No se puede realizar la inscripción en el curso "+curso+" porque ya tiene inscrito un curso de tipo "+tipo+".\n\nRecomendamos elegir un curso diferente o comunicarse con el Área de Educación comunitaria Ext. 4818");
}
}
if(tipo=="EPD"){
console.log("EPD");
if(countEPD<1){
console.log("se puede inscribir el curso EPD");
if(isCostSelected==true && isPeopleSelected==true && isPaymentTypeSelected!=undefined){
this.comunity_dialog_terms.show();
}else{
alert("Antes de inscribir asegurese de haber seleccionado la siguiente información: \n\n*Integrante del grupo familiar \n*Curso a inscribir \n*Forma de pago");
}
}else{
alert("No se puede realizar la inscripción en el curso "+curso+" porque ya tiene inscrito un curso de tipo "+tipo+".\n\nRecomendamos elegir un curso diferente o comunicarse con el Área de Educación comunitaria Ext. 4818");
}
}
if(tipo=="OLA"){
console.log("OLA");
if(countOLA<1){
console.log("se puede inscribir el curso OLA");
if(isCostSelected==true && isPeopleSelected==true && isPaymentTypeSelected!=undefined){
this.comunity_dialog_terms.show();
}else{
alert("Antes de inscribir asegurese de haber seleccionado la siguiente información: \n\n*Integrante del grupo familiar \n*Curso a inscribir \n*Forma de pago");
}
}else{
alert("No se puede realizar la inscripción en el curso "+curso+" porque ya tiene inscrito un curso de tipo "+tipo+".\n\nRecomendamos elegir un curso diferente o comunicarse con el Área de Educación comunitaria Ext. 4818");
}
}
if(tipo=="ECR"){
console.log("ECR");
if(countECR<1){
console.log("se puede inscribir el curso ECR");
if(isCostSelected==true && isPeopleSelected==true && isPaymentTypeSelected!=undefined){
this.comunity_dialog_terms.show();
}else{
alert("Antes de inscribir asegurese de haber seleccionado la siguiente información: \n\n*Integrante del grupo familiar \n*Curso a inscribir \n*Forma de pago");
}
}else{
alert("No se puede realizar la inscripción en el curso "+curso+" porque ya tiene inscrito un curso de tipo "+tipo+".\n\nRecomendamos elegir un curso diferente o comunicarse con el Área de Educación comunitaria Ext. 4818");
}
}
}else{
alert("Lo sentimos, "+nombre+" ha alcanzado el máximo de cursos inscritos por persona.");
}
}
else if(countCupoInscritos == cupoMax || countCupoInscritos > cupoMax){
alert("Este curso ha alcanzado el cupo máximo de personas inscritas.\n\nLo invitamos a revisar las otras actividades disponibles.");
}
},
performance_family_gridSelect6: function(inSender) {
var curdate = new Date().getTime();
var gradostr= main.performance_family_grid.selectedItem.getData().grado;
console.log(gradostr);
var grado= parseInt(gradostr);
console.log(grado);
this.comunity_payment_type.setDisplayValue("Un solo pago");
this.comunity_transp_selection.setDataValue("1");
this.parents_local_educom.input.setValue("f1", curdate);
this.parents_local_educom.input.setValue("y", grado);
this.parents_local_educom.update();
},
parents_local_comunity_subscribed_cursesSuccess: function(inSender, inDeprecated) {
this.comunity_costs_grid1.setSortIndex(2);
},
parents_global_user_infoSuccess3: function(inSender, inDeprecated) {
var log_usuario= main.parents_global_user_info.getItem(0).data.usuario;
var log_accion= "ingreso";
var log_tabla=  "log_acciones_padres";
var log_fecha= new Date().getTime();
this.log_acciones_padres.setValue("tablaAfectada", log_tabla);
this.log_acciones_padres.setValue("usuario", log_usuario);
this.log_acciones_padres.setValue("fechaCreacion", log_fecha);
this.log_acciones_padres.setValue("accionRealizada", log_accion);
this.LogIngresoLiveForm.setDataSet(this.log_acciones_padres);
this.LogIngresoLiveForm.insertData();
},
updatePasswordButtonClick: function(inSender) {
var clave1, clave2, idpersona;
clave1= this.passwordEditText.getDataValue();
clave2= this.rePasswordEditText.getDataValue();
idpersona= main.parents_global_user_info.getItem(0).data.idpersona;
if(clave1==clave2){
main.passwordValidator.setBackgroundColor("#56bd14");
main.passwordValidator.setCaption("Comparación correcta.");
this.updatePasswordSetter.input.setValue("pclave", clave2);
this.updatePasswordSetter.input.setValue("piduser", idpersona);
this.updatePasswordSetter.update();
}else{
main.passwordValidator.setBackgroundColor("#c53539");
main.passwordValidator.setCaption("Comparación incorrecta.");
}
},
passwordEditTextChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
var clave1, clave2;
clave1= this.passwordEditText.getDataValue();
clave2= this.rePasswordEditText.getDataValue();
if(clave1==clave2){
main.passwordValidator.setBackgroundColor("#56bd14");
main.passwordValidator.setCaption("Comparación correcta.");
this.updatePasswordButton.enable();
}else{
main.passwordValidator.setBackgroundColor("#EEB422");
main.passwordValidator.setCaption("Comparación incorrecta.");
this.updatePasswordButton.disable();
}
},
rePasswordEditTextChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
var clave1, clave2;
clave1= this.passwordEditText.getDataValue();
clave2= this.rePasswordEditText.getDataValue();
if(clave1==clave2){
main.passwordValidator.setBackgroundColor("#56bd14");
main.passwordValidator.setCaption("Comparación correcta.");
this.updatePasswordButton.enable();
}else{
main.passwordValidator.setBackgroundColor("#EEB422");
main.passwordValidator.setCaption("Comparación erronea.");
this.updatePasswordButton.disable();
}
},
transportes_autorizacionesClick1: function(inSender) {
var idfamilia= main.parents_global_user_info.getItem(0).data.idFamilia;
main.pageContainer1.page.transporterutasLiveVariable1.filter.setValue("grupoFamiliar.idGrupoFamiliar", idfamilia);
main.pageContainer1.page.transporterutasLiveVariable1.update();
main.pageContainer1.page.transporterutasDojoGrid.setSortIndex(0);
},
transportenovedadesLiveForm1BeginInsert: function(inSender) {
var now= new Date().getTime();
this.fechaCreacionEditor1.setDataValue(now);
this.fechaActualizacionEditor1.setDataValue(now);
this.personaLookup1.setReadonly(true);
this.tipoSolicitudLiveVariable.filter.setValue("disponiblePadres", 1);
this.tipoSolicitudLiveVariable.update();
},
transportes_solicitudesClick: function(inSender) {
var seleccion = main.performance_family_grid.isRowSelected;
if(seleccion == true){
var idpersona = main.performance_family_grid.selectedItem.getData().pid;
this.transportenovedadesLiveVariable1.filter.setValue("persona.idPersona", idpersona);
this.transportenovedadesLiveVariable1.update();
}else{
alert("Antes de continuar con la Solicitud de Permiso, seleccione un estudiante.");
}
},
transportes_solicitudesClick1: function(inSender) {
var seleccion = main.performance_family_grid.isRowSelected;
if(seleccion == true){
var idfamilia = main.performance_family_grid.selectedItem.getData().idgrupo;
var idpersona = main.performance_family_grid.selectedItem.getData().pid;
this.permisosDialog.show();
this.autorizadosLiveVariable.filter.setValue("tipoTransporte.idtipoTransporte", 100);
this.autorizadosLiveVariable.filter.setValue("grupoFamiliar.idGrupoFamiliar", idfamilia);
this.solicitudPersonaLiveVariable.filter.setValue("idPersona", idpersona);
this.autorizadosLiveVariable.update();
this.solicitudPersonaLiveVariable.update();
}else{
alert("Antes de continuar con la Solicitud de Permiso, seleccione un estudiante.");
}
},
transportenovedadesLiveForm1BeginInsert1: function(inSender) {
var idpersona = main.solicitudPersonaLiveVariable.getItem(0).data.idPersona;
this.personaLookup1.setDisplayValue(idpersona);
},
permisosTemporalClick: function(inSender) {
this.idNovedadesEditor1.show();
this.personaLookup1.show();
this.tipoSolicitudLookup1.show();
this.personaLookup1.setReadonly(true);
this.transporteRutasLookup1.show();
this.fechaSolicitudInicioEditor1.show();
this.fechaSolicitudFinEditor1.hide();
this.horaProgramadaEditor1.show();
this.observacionesEditor1.show();
this.transportenovedadesLiveForm1EditPanel.show();
},
permisosPermanenteClick: function(inSender) {
this.idNovedadesEditor1.show();
this.personaLookup1.show();
this.personaLookup1.setReadonly(true);
this.tipoSolicitudLookup1.show();
this.transporteRutasLookup1.show();
this.fechaSolicitudInicioEditor1.show();
this.fechaSolicitudFinEditor1.show();
this.horaProgramadaEditor1.show();
this.observacionesEditor1.show();
this.transportenovedadesLiveForm1EditPanel.show();
},
parents_transportshipClick1: function(inSender) {
this.panel_comunity_education.hide();
this.panel_inicio.hide();
this.performance_left_buttons_panel.hide();
this.panel_performance.hide();
this.panel_actividades.hide();
this.panel_estado_cuenta.hide();
this.panel_transporte.show();
},
transportenovedadesLiveForm1BeginUpdate: function(inSender) {
this.personaLookup1.setReadonly(true);
},
SecurityProfileButtonClick1: function(inSender) {
var nombre1 = main.parents_global_user_info.getItem(0).data.n1;
var nombre2 = main.parents_global_user_info.getItem(0).data.n2;
var apellido1 = main.parents_global_user_info.getItem(0).data.a1;
var apellido2 = main.parents_global_user_info.getItem(0).data.a2;
var rol = main.parents_global_user_info.getItem(0).data.tipoPe;
var idrol = main.parents_global_user_info.getItem(0).data.tipoId;
var code = main.parents_global_user_info.getItem(0).data.codigo;
this.profile_name.setCaption(nombre1+" "+nombre2+" "+apellido1+" "+apellido2);
this.profile_rol.setCaption(rol);
if(idrol > 1){
var user = main.parents_global_user_info.getItem(0).data.usuario;
this.getImgNameService.input.setValue("pidpersona", user);
this.getImgNameService.update();
}else{
this.pictureSettings.setSource("http://www.rochester.edu.co/fotosestudiantes/"+code+".Jpeg");
}
},
profile_changePicClick: function(inSender) {
this.profileFileUpload.show();
this.profile_changePic.hide();
},
profileFileUploadSuccess: function(inSender, fileList) {
this.profileFileUpload.hide();
this.profile_changePic.show();
this.getRealNameService.update();
},
getRealNameServiceSuccess: function(inSender, inDeprecated) {
var name = this.getRealNameService.getData().dataValue;
var now = new Date().getTime();
var idpersona = main.parents_global_user_info.getItem(0).data.idpersona;
var count = main.getImgNameService.getCount();
if(count == 0){
this.insertImgUser.setValue("imgName", name);
this.insertImgUser.setValue("fechaCreacion", now);
this.insertImgUser.setValue("fechaActualizacion", now);
this.insertImgUser.setValue("persona.idPersona", idpersona);
this.profileImgForm.setDataSet(this.insertImgUser);
this.profileImgForm.insertData();
}else{
var id = main.getImgNameService.getItem(0).data.id;
this.getImgUpdate.input.setValue("pimageName",name);
this.getImgUpdate.input.setValue("id", id);
this.getImgUpdate.update();
}
},
profileImgFormSuccess: function(inSender, inData) {
var user = main.parents_global_user_info.getItem(0).data.usuario;
this.getImgNameService.input.setValue("pidpersona", user);
this.getImgNameService.update();
},
getImgNameServiceSuccess: function(inSender, inDeprecated) {
var imgurl = "resources/data";
var img = main.getImgNameService.getItem(0).data.imageName;
this.pictureSettings.setSource(imgurl+"/"+img);
},
transportenovedadesDojoGridSelect: function(inSender) {
var idtipo = main.transportenovedadesDojoGrid.selectedItem.getData().tipoSolicitud.idTipoSolicitud;
if(idtipo == 2 ){
this.transporteRutasLookup1.hide();
}else{
this.transporteRutasLookup1.show();
}
this.tipoSolicitudLiveVariable.update();
},
getImgUpdateSuccess: function(inSender, inDeprecated) {
this.getImgNameService.update(); // triggered the image show function
},
tramiteLiveForm2BeginInsert: function(inSender) {
var idpersona = main.parents_global_user_info.getItem(0).data.idpersona;
var idtipo    = main.parents_global_user_info.getItem(0).data.tipoId;
var idfamilia = main.parents_global_user_info.getItem(0).data.idFamilia;
var now = new Date().getTime();
this.tramiteTipoTramiteLookup1.setReadonly(true);
this.tramiteTipoTramiteLookup1.hide();
this.solicitanteLiveVariable.filter.setValue("idPersona", idpersona);
this.referenciadoLiveVariable.filter.setValue("grupoFamiliar.idGrupoFamiliar", idfamilia);
this.referenciadoLiveVariable.filter.setValue("tipoPersona.idTipoPersona", 1);
//this.tipoTramiteLv.filter.setValue("disponibleUi", true);
this.tipoTramiteUsuarioLiveVariable.filter.setValue("tipoPersonaIdTipoPersona", idtipo);
this.tipoTramiteUsuarioLiveVariable.filter.setValue("tramiteAccion.idAccion", 1);
this.solicitanteLiveVariable.update();
this.referenciadoLiveVariable.update();
this.tramiteTipoTramite.update();
this.tipoTramiteLv.update();
this.tipoTramiteUsuarioLiveVariable.update();
this.fecha_creacionEditor1.setDataValue(now);
this.fecha_modificacionEditor1.setDataValue(now);
},
tramiteLiveForm2BeginUpdate: function(inSender) {
var now = new Date().getTime();
var idpersona = main.parents_global_user_info.getItem(0).data.idpersona;
var idfamilia = main.parents_global_user_info.getItem(0).data.idFamilia;
var idtipo    = main.parents_global_user_info.getItem(0).data.tipoId;
this.solicitanteLiveVariable.filter.setValue("idPersona", idpersona);
this.referenciadoLiveVariable.filter.setValue("grupoFamiliar.idGrupoFamiliar", idfamilia);
this.referenciadoLiveVariable.filter.setValue("tipoPersona.idTipoPersona", 1);
this.tipoTramiteUsuarioLiveVariable.filter.setValue("tipoPersonaIdTipoPersona", idtipo);
this.tipoTramiteUsuarioLiveVariable.filter.setValue("tramiteAccion.idAccion", 1);
this.tipoTramiteLv.filter.setValue("disponibleUi", true);
this.referenciadoLiveVariable.update();
this.solicitanteLiveVariable.update();
this.tramiteTipoTramite.update();
this.tipoTramiteUsuarioLiveVariable.update();
this.tipoTramiteLv.update();
this.fecha_modificacionEditor1.setDataValue(now);
},
solicitanteLiveVariableSuccess: function(inSender, inDeprecated) {
var idpersona = main.parents_global_user_info.getItem(0).data.idpersona;
this.solicitanteLookup1.setDisplayValue(idpersona);
},
parents_transportshipClick2: function(inSender) {
var idfamilia= main.parents_global_user_info.getItem(0).data.idFamilia;
this.referenciadoLiveVariable.filter.setValue("grupoFamiliar.idGrupoFamiliar", idfamilia);
this.referenciadoLiveVariable.filter.setValue("tipoPersona.idTipoPersona", 1);
this.referenciadoLiveVariable.update();
},
parents_transportshipClick3: function(inSender) {
var idfamilia= main.parents_global_user_info.getItem(0).data.idFamilia;
this.tramiteLiveVariable3.filter.setValue("referenciado.grupoFamiliar.idGrupoFamiliar", idfamilia);
this.tramiteLiveVariable3.update();
//this.tramiteautorizacionesLiveVariable2.update();
},
tramiteLiveVariable3Success: function(inSender, inDeprecated) {
this.tramiteDojoGrid.setSortIndex(0);
},
tramiteautorizacionesLiveVariable1Success: function(inSender, inDeprecated) {
this.tramiteautorizacionesDojoGrid.setSortIndex(0);
},
tramiteautorizacionesLiveForm1BeginUpdate: function(inSender) {
var idtramite = main.tramiteautorizacionesDojoGrid.selectedItem.getData().tramite.idTramite;
this.TramitesAuxLiveVariable.filter.setValue("idTramite", idtramite);
this.TramitesAuxLiveVariable.update();
var now = new Date().getTime();
this.fechaActualizacionEditor2.setDataValue(now);
},
tramiteautorizacionesDojoGridSelect: function(inSender) {
var idtramite = main.tramiteautorizacionesDojoGrid.selectedItem.getData().tramite.idTramite;
this.TramitesAuxLiveVariable.filter.setValue("idTramite", idtramite);
this.TramitesAuxLiveVariable.update();
},
performance_family_gridSelect7: function(inSender) {
var perfil = main.parents_global_user_info.getItem(0).data.usuario;
this.getUserImg.input.setValue("pidpersona", perfil);
this.getUserImg.update();
},
getUserImgSuccess: function(inSender, inDeprecated) {
var id = main.performance_family_grid.selectedItem.getData().idtipo;
if(id == 1){
}else{
}
},
//comunity_terms_acceptClick: function(inSender) {
//},
AuxTipoTramiteChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
var tramite = main.AuxTipoTramite.getDisplayValue();
this.tramiteTipoTramiteLookup1.setDisplayValue(tramite);
},
tramiteLiveForm1BeginInsert: function(inSender) {
var idpersona = main.parents_global_user_info.getItem(0).data.idpersona;
var idtipo    = main.parents_global_user_info.getItem(0).data.tipoId;
var idfamilia = main.parents_global_user_info.getItem(0).data.idFamilia;
var now       = new Date().getTime();
this.tramiteTipoTramiteLookup1.setReadonly(true);
this.tramiteTipoTramiteLookup1.hide();
this.tramiteSaveButton.hide();
this.solicitanteLiveVariable.filter.setValue("idPersona", idpersona);
this.referenciadoLiveVariable.filter.setValue("grupoFamiliar.idGrupoFamiliar", idfamilia );
this.referenciadoLiveVariable.filter.setValue("tipoPersona.idTipoPersona", 1 );
this.tipo_accion_usuario.filter.setValue("id.idTipoPersona", idtipo);
this.tipo_accion_usuario.filter.setValue("id.idAccion", 1);
this.solicitanteLiveVariable.update();
this.referenciadoLiveVariable.update();
this.tramiteTipoTramite.update();
this.tipoTramiteLv.update();
this.tipo_accion_usuario.update();
this.fecha_creacionEditor1.setDataValue(now);
this.fecha_modificacionEditor1.setDataValue(now);
},
tramiteLiveForm1BeginUpdate: function(inSender) {
var now = new Date().getTime();
var idpersona = main.parents_global_user_info.getItem(0).data.idpersona;
var idfamilia = main.parents_global_user_info.getItem(0).data.idFamilia;
var idtipo    = main.parents_global_user_info.getItem(0).data.tipoId;
this.tramiteSaveButton.show();
this.solicitanteLiveVariable.filter.setValue("idPersona", idpersona);
this.referenciadoLiveVariable.filter.setValue("grupoFamiliar.idGrupoFamiliar", idfamilia);
this.referenciadoLiveVariable.filter.setValue("tipoPersona.idTipoPersona", 1);
this.tipoTramiteUsuarioLiveVariable.filter.setValue("tipoPersonaIdTipoPersona", idtipo);
this.tipoTramiteUsuarioLiveVariable.filter.setValue("tramiteAccion.idAccion", 1);
//this.tipoTramiteLv.filter.setValue("disponibleUi", true);
this.referenciadoLiveVariable.update();
this.solicitanteLiveVariable.update();
this.tramiteTipoTramite.update();
this.tipoTramiteUsuarioLiveVariable.update();
this.tipoTramiteLv.update();
this.fecha_modificacionEditor2.setDataValue(now);
},
tramiteLiveForm1InsertData: function(inSender) {
var jsoncoordinador     = main.tramites_correoCoordinadorLv.getItem(0).data.id.data;
var jsoncorreopadres    = main.tramites_correoPadresLv.getItem(0).data.id.data;
var email               = jsoncoordinador.email;
var nombrecoordinador   = jsoncoordinador.nombre1+" "+jsoncoordinador.nombre2+" "+jsoncoordinador.apellido1+" "+jsoncoordinador.apellido2;
var emailpadre          = jsoncorreopadres.correoMama;
var emailmadre          = jsoncorreopadres.correoPapa;
var tramite             = this.AuxTipoTramite.getDisplayValue();
var std                 = this.referenciadoLookup1.getDisplayValue();
var fecha               = this.fecha_tramiteEditor1.getDisplayValue();
var hora                = this.hora_tramiteEditor1.getDisplayValue();
var fechahora           = fecha+" - "+hora;
var comentario          = this.comentariosEditor1.getDataValue();
var count               = main.tramite_tipo_accion.getCount();
for (var i =0 ; i <= count; i++){
var items    = main.tramite_tipo_accion.getItem(i).data.id.data.idTipoPersona;
var itemname = main.tramite_tipo_accion.getItem(i).data.id.data.tipoPersona;
console.log(items + " - " + itemname);
if(itemname == "Padre"){  this.sendEmailNotificationFather(emailpadre, tramite, std, fechahora, comentario);  }
if(itemname == "Madre"){  this.sendEmailNotificationMother(emailmadre, tramite, std, fechahora, comentario);  }
if(itemname == "Docente"){  this.sendEmailNotification(nombrecoordinador, email, tramite, std, fechahora, comentario);  }
if(itemname == "Directivo Académico"){  this.sendEmailNotificationDirNivel(tramite, std, fechahora, comentario);  }
if(itemname == "Administrativo"){  this.sendEmailNotificationAdmon(tramite, std, fechahora, comentario);  }
}
},
sendEmailNotification: function(nombrecoordinador, correocoordinador, tramite, std, fechahora, comentario){
console.log("->"+correocoordinador+" ->"+tramite+" ->"+std+" ->"+fechahora);
this.tramites_enviarNotificacion.input.setValue("correocoordinador", correocoordinador);
this.tramites_enviarNotificacion.input.setValue("tramite", tramite);
this.tramites_enviarNotificacion.input.setValue("std", std);
this.tramites_enviarNotificacion.input.setValue("fechahora", fechahora);
this.tramites_enviarNotificacion.input.setValue("comentario", comentario);
this.tramites_enviarNotificacion.update();
},
sendEmailNotificationMother: function(correomadre, tramite, std, fechahora, comentario){
console.log("Madre ->"+correomadre+" ->"+tramite+" ->"+std+" ->"+fechahora);
this.tramites_enviarNotificacionMadres.input.setValue("correomadre", correomadre);
this.tramites_enviarNotificacionMadres.input.setValue("tramite", tramite);
this.tramites_enviarNotificacionMadres.input.setValue("std", std);
this.tramites_enviarNotificacionMadres.input.setValue("fechahora", fechahora);
this.tramites_enviarNotificacionMadres.input.setValue("comentario", comentario);
this.tramites_enviarNotificacionMadres.update();
},
sendEmailNotificationFather: function(correopadre, tramite, std, fechahora, comentario){
console.log("Padre ->"+correopadre+" ->"+tramite+" ->"+std+" ->"+fechahora);
this.tramites_enviarNotificacionPadres.input.setValue("correopadre", correopadre);
this.tramites_enviarNotificacionPadres.input.setValue("tramite", tramite);
this.tramites_enviarNotificacionPadres.input.setValue("std", std);
this.tramites_enviarNotificacionPadres.input.setValue("fechahora", fechahora);
this.tramites_enviarNotificacionPadres.input.setValue("comentario", comentario);
this.tramites_enviarNotificacionPadres.update();
},
sendEmailNotificationDirNivel: function(tramite, std, fechahora, comentario){
this.tramites_enviarDirNivelNotificacion.input.setValue("tramite", tramite);
this.tramites_enviarDirNivelNotificacion.input.setValue("std", std);
this.tramites_enviarDirNivelNotificacion.input.setValue("fechahora", fechahora);
this.tramites_enviarDirNivelNotificacion.input.setValue("comentario", comentario);
this.tramites_enviarDirNivelNotificacion.update();
},
sendEmailNotificationAdmon: function(tramite, std, fechahora, comentario){
console.log(" ->"+tramite+" ->"+std+" ->"+fechahora);
this.tramites_enviarAdmonNotificacion.input.setValue("tramite", tramite);
this.tramites_enviarAdmonNotificacion.input.setValue("std", std);
this.tramites_enviarAdmonNotificacion.input.setValue("fechahora", fechahora);
this.tramites_enviarAdmonNotificacion.input.setValue("comentario", comentario);
this.tramites_enviarAdmonNotificacion.update();
},
auxButton1Click: function(inSender) {
var tramite = this.AuxTipoTramite.getDisplayValue();
var para    = this.referenciadoLookup1.getDisplayValue();
var fecha   = this.fecha_tramiteEditor1.getDisplayValue();
var hora    = this.hora_tramiteEditor1.getDisplayValue();
var coment  = this.comentariosEditor1.getDisplayValue();
var r = confirm("Se creará el trámite con la siguiente información: \n-- "+tramite+"\n-- "+para+"\n-- "+fecha+"\n-- "+hora+"\n-- "+coment+"\n\n¿Confirma la creación del tramite?");
if (r == true) {
this.tramiteLiveForm1.saveDataIfValid();
} else {
this.tramiteLiveForm1.cancelEdit();
}
},
referenciadoLookup1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
var id = main.referenciadoLookup1.getDataValue().idPersona;
this.tramites_correoCoordinadorLv.filter.setValue("id.personaIdPersona", id);
this.tramites_correoPadresLv.filter.setValue("id.idPersona", id);
this.tramites_correoCoordinadorLv.update();
this.tramites_correoPadresLv.update();
},
AuxTipoTramiteChange1: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
var idtramite = main.AuxTipoTramite.getDataValue().id.tipoTramiteIdTipoTramite;
this.tramite_tipo_accion.filter.setValue("id.tipoTramiteIdTipoTramite", idtramite);
this.tramite_tipo_accion.update();
},
mensajeTransporteContinueDialogClick: function(inSender){
this.mensajeTransporteDialog.hide();
var idpersona= this.performance_family_grid.selectedItem.data.pid;
var ideducom = this.comunity_costs_grid.selectedItem.getData().id;
var idsy = 5;
var json = main.parents_global_currentSy.getItem(0);
var idsy = json.data.idsy;
//triggering MAXSubscriptions validator
main.getMaxEducom.input.setValue("pidsy", idsy);
main.getMaxEducom.input.setValue("pideducom", ideducom);
main.getMaxEducom.update();
//triggering EFA validator
this.getEducomEFA.input.setValue("pidsy", idsy);
this.getEducomEFA.input.setValue("pidpersona", idpersona);
this.getEducomEFA.update();
//triggering EAD validator
this.getEducomEAD.input.setValue("pidsy", idsy);
this.getEducomEAD.input.setValue("pidpersona", idpersona);
this.getEducomEAD.update();
//triggering EPD validator
this.getEducomEPD.input.setValue("pidsy", idsy);
this.getEducomEPD.input.setValue("pidpersona", idpersona);
this.getEducomEPD.update();
//triggering ECR validator
this.getEducomECR.input.setValue("pidsy", idsy);
this.getEducomECR.input.setValue("pidpersona", idpersona);
this.getEducomECR.update();
//triggering OLA validator
this.getEducomOLA.input.setValue("pidsy", idsy);
this.getEducomOLA.input.setValue("pidpersona", idpersona);
this.getEducomOLA.update();
//triggering counter serviceVariable
this.getEducomCount.input.setValue("pidsy", idsy);
this.getEducomCount.input.setValue("pidpersona", idpersona);
this.getEducomCount.update();
}
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
{"caption":"IdInscPersonaEduCom","sortable":true,"dataIndex":"idInscPersonaEduCom","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":9000,"subType":null,"widthUnits":"px"},
{"caption":"FechaCreacion","sortable":true,"dataIndex":"fechaCreacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9001,"subType":null,"widthUnits":"px"},
{"caption":"FechaActualizacion","sortable":true,"dataIndex":"fechaActualizacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9002,"subType":null,"widthUnits":"px"},
{"caption":"Descuento","sortable":true,"dataIndex":"descuento","type":"java.lang.Double","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":9003,"subType":null,"widthUnits":"px"},
{"caption":"TomaTransporte","sortable":true,"dataIndex":"tomaTransporte","type":"java.lang.Byte","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":9004,"subType":null,"widthUnits":"px"},
{"caption":"Plazo","sortable":true,"dataIndex":"plazo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9005,"subType":null,"widthUnits":"px"},
{"caption":"ActivoRetirado","sortable":true,"dataIndex":"activoRetirado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9006,"subType":null,"widthUnits":"px"},
{"caption":"Beca","sortable":true,"dataIndex":"beca","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9007,"subType":null,"widthUnits":"px"},
{"caption":"TipoEducom","sortable":true,"dataIndex":"educom.tipoEducom","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":10040},
{"caption":"SchoolYear","sortable":true,"dataIndex":"educom.sy.schoolYear","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":11001},
{"caption":"NombreProducto","sortable":true,"dataIndex":"educom.costos.nombreProducto","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":12002}
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
solicitanteLiveVariable: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","maxResults":10,"startUpdate":false,"type":"com.aprendoz_desarrollo.data.Persona"}, {"onSuccess":"solicitanteLiveVariableSuccess"}, {
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
referenciadoLiveVariable: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","maxResults":10,"type":"com.aprendoz_desarrollo.data.Persona"}, {}, {
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
TramitesAuxLiveVariable: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","maxResults":5,"startUpdate":false,"type":"com.aprendoz_desarrollo.data.Tramite"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.Tramite","view":[
{"caption":"Id_tramite","sortable":true,"dataIndex":"id_tramite","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Fecha_tramite","sortable":true,"dataIndex":"fecha_tramite","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Hora_tramite","sortable":true,"dataIndex":"hora_tramite","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Fecha_esperada","sortable":true,"dataIndex":"fecha_esperada","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Fecha_entrega","sortable":true,"dataIndex":"fecha_entrega","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Url_file","sortable":true,"dataIndex":"url_file","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Comentarios","sortable":true,"dataIndex":"comentarios","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Fecha_creacion","sortable":true,"dataIndex":"fecha_creacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"Fecha_modificacion","sortable":true,"dataIndex":"fecha_modificacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null}
]}, {}]
}],
getRealNameService: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getRealFileName","service":"FileUploadDownload"}, {"onSuccess":"getRealNameServiceSuccess"}, {
input: ["wm.ServiceInput", {"type":"getRealFileNameInputs"}, {}]
}],
getUserImg: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"imgNameByUser","service":"aprendoz_desarrollo"}, {"onSuccess":"getUserImgSuccess"}, {
input: ["wm.ServiceInput", {"type":"imgNameByUserInputs"}, {}]
}],
tramiteTipoTramite: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","matchMode":"anywhere","startUpdate":false,"type":"com.aprendoz_desarrollo.data.TramiteTipoTramite"}, {"onSuccess":"tramiteTipoTramiteSuccess"}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.TramiteTipoTramite","view":[
{"caption":"IdTipoTramite","sortable":true,"dataIndex":"idTipoTramite","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Tramite","sortable":true,"dataIndex":"tramite","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"DisponibleUi","sortable":true,"dataIndex":"disponibleUi","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"FechaCreacion","sortable":true,"dataIndex":"fechaCreacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"FechaActualizacion","sortable":true,"dataIndex":"fechaActualizacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null}
]}, {}]
}],
correosCoordinadoresLv: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","maxResults":10,"startUpdate":false,"type":"com.aprendoz_desarrollo.data.PadresCorreoCoordinador"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.PadresCorreoCoordinador","view":[
{"caption":"Id","sortable":true,"dataIndex":"id","type":"com.aprendoz_desarrollo.data.PadresCorreoCoordinadorId","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"IdCurso","sortable":true,"dataIndex":"id.idCurso","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Curso","sortable":true,"dataIndex":"id.curso","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"NombreLdap","sortable":true,"dataIndex":"id.nombreLdap","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Email","sortable":true,"dataIndex":"id.email","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Apellido1","sortable":true,"dataIndex":"id.apellido1","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Apellido2","sortable":true,"dataIndex":"id.apellido2","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Nombre1","sortable":true,"dataIndex":"id.nombre1","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Nombre2","sortable":true,"dataIndex":"id.nombre2","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7,"subType":null}
]}, {}]
}],
tipoTramiteLv: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","maxResults":20,"type":"com.aprendoz_desarrollo.data.TramiteTipoTramite"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.TramiteTipoTramite","view":[
{"caption":"IdTipoTramite","sortable":true,"dataIndex":"idTipoTramite","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Tramite","sortable":true,"dataIndex":"tramite","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"DisponibleUi","sortable":true,"dataIndex":"disponibleUi","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"FechaCreacion","sortable":true,"dataIndex":"fechaCreacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"FechaActualizacion","sortable":true,"dataIndex":"fechaActualizacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null}
]}, {}]
}],
tramites_correoCoordinadorLv: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","maxResults":10,"startUpdate":false,"type":"com.aprendoz_desarrollo.data.PadresCorreoCoordinador"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.PadresCorreoCoordinador","related":["id"],"view":[
{"caption":"IdCurso","sortable":true,"dataIndex":"id.idCurso","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":6000,"subType":null,"widthUnits":"px"},
{"caption":"Curso","sortable":true,"dataIndex":"id.curso","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":6001,"subType":null,"widthUnits":"px"},
{"caption":"NombreLdap","sortable":true,"dataIndex":"id.nombreLdap","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":6002,"subType":null,"widthUnits":"px"},
{"caption":"Email","sortable":true,"dataIndex":"id.email","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":6003,"subType":null,"widthUnits":"px"},
{"caption":"Apellido1","sortable":true,"dataIndex":"id.apellido1","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":6004,"subType":null,"widthUnits":"px"},
{"caption":"Apellido2","sortable":true,"dataIndex":"id.apellido2","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":6005,"subType":null,"widthUnits":"px"},
{"caption":"Nombre1","sortable":true,"dataIndex":"id.nombre1","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":6006,"subType":null,"widthUnits":"px"},
{"caption":"Nombre2","sortable":true,"dataIndex":"id.nombre2","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":6007,"subType":null,"widthUnits":"px"},
{"caption":"PersonaIdPersona","sortable":true,"dataIndex":"id.personaIdPersona","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":6008}
]}, {}]
}],
tramites_correoPadresLv: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_desarrollo.data.PadresCorreosPadres"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.PadresCorreosPadres","view":[
{"caption":"Id","sortable":true,"dataIndex":"id","type":"com.aprendoz_desarrollo.data.PadresCorreosPadresId","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"IdPersona","sortable":true,"dataIndex":"id.idPersona","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Codigo","sortable":true,"dataIndex":"id.codigo","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Matriculado","sortable":true,"dataIndex":"id.matriculado","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"ActivoRetirado","sortable":true,"dataIndex":"id.activoRetirado","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Apellido1","sortable":true,"dataIndex":"id.apellido1","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Apellido2","sortable":true,"dataIndex":"id.apellido2","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Nombre1","sortable":true,"dataIndex":"id.nombre1","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Nombre2","sortable":true,"dataIndex":"id.nombre2","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"CorreoPapa","sortable":true,"dataIndex":"id.correoPapa","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"CorreoMama","sortable":true,"dataIndex":"id.correoMama","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":9,"subType":null},
{"caption":"GrupoFamiliarIdGrupoFamiliar","sortable":true,"dataIndex":"id.grupoFamiliarIdGrupoFamiliar","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":10,"subType":null},
{"caption":"SyIdSy","sortable":true,"dataIndex":"id.syIdSy","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":11,"subType":null}
]}, {}]
}],
tramites_enviarNotificacion: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"sendEmailNotification","service":"NotificacionCoordinador"}, {}, {
input: ["wm.ServiceInput", {"type":"sendEmailNotificationInputs"}, {}]
}],
tipoTramiteUsuarioLiveVariable: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_desarrollo.data.TramiteTipoTramiteRol"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.TramiteTipoTramiteRol","related":["tramiteAccion","tramiteTipoTramite"],"view":[
{"caption":"TramiteTipoRolId","sortable":true,"dataIndex":"tramiteTipoRolId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},
{"caption":"TipoPersonaIdTipoPersona","sortable":true,"dataIndex":"tipoPersonaIdTipoPersona","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},
{"caption":"Requerido","sortable":true,"dataIndex":"requerido","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1002,"subType":null,"widthUnits":"px"},
{"caption":"ValorDefecto","sortable":true,"dataIndex":"valorDefecto","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1003,"subType":null,"widthUnits":"px"},
{"caption":"ApruebaSolicita","sortable":true,"dataIndex":"apruebaSolicita","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1004,"subType":null,"widthUnits":"px"},
{"caption":"FechaCreacion","sortable":true,"dataIndex":"fechaCreacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1005,"subType":null,"widthUnits":"px"},
{"caption":"FechaActualizacion","sortable":true,"dataIndex":"fechaActualizacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1006,"subType":null,"widthUnits":"px"},
{"caption":"Notificacion","sortable":true,"dataIndex":"notificacion","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1007,"subType":null,"widthUnits":"px"}
]}, {}]
}],
tramite_tipo_accion: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","type":"com.aprendoz_desarrollo.data.PadresTramitesTipopersona"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.PadresTramitesTipopersona","related":["id"],"view":[
{"caption":"IdTipoTramite","sortable":true,"dataIndex":"id.idTipoTramite","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7000,"subType":null,"widthUnits":"px"},
{"caption":"Tramite","sortable":true,"dataIndex":"id.tramite","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7001,"subType":null,"widthUnits":"px"},
{"caption":"Disponible","sortable":true,"dataIndex":"id.disponible","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7002,"subType":null,"widthUnits":"px"},
{"caption":"IdTipoPersona","sortable":true,"dataIndex":"id.idTipoPersona","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7003,"subType":null,"widthUnits":"px"},
{"caption":"TipoPersona","sortable":true,"dataIndex":"id.tipoPersona","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7004,"subType":null,"widthUnits":"px"},
{"caption":"IdAccion","sortable":true,"dataIndex":"id.idAccion","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":7005},
{"caption":"Accion","sortable":true,"dataIndex":"id.accion","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":7006},
{"caption":"TramiteTipoRolId","sortable":true,"dataIndex":"id.tramiteTipoRolId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7007,"subType":null,"widthUnits":"px"},
{"caption":"TipoTramiteIdTipoTramite","sortable":true,"dataIndex":"id.tipoTramiteIdTipoTramite","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7008,"subType":null,"widthUnits":"px"},
{"caption":"TipoPersonaIdTipoPersona","sortable":true,"dataIndex":"id.tipoPersonaIdTipoPersona","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7009,"subType":null,"widthUnits":"px"},
{"caption":"Requerido","sortable":true,"dataIndex":"id.requerido","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7010,"subType":null,"widthUnits":"px"},
{"caption":"ValorDefecto","sortable":true,"dataIndex":"id.valorDefecto","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7011,"subType":null,"widthUnits":"px"},
{"caption":"ApruebaSolicita","sortable":true,"dataIndex":"id.apruebaSolicita","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7012,"subType":null,"widthUnits":"px"},
{"caption":"Notificacion","sortable":true,"dataIndex":"id.notificacion","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7013,"subType":null,"widthUnits":"px"}
]}, {}]
}],
tramiteLiveVariable1: ["wm.LiveVariable", {"type":"com.aprendoz_desarrollo.data.Tramite"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.Tramite","related":["tramiteTipoTramite","solicitante","referenciado"],"view":[
{"caption":"Id_tramite","sortable":true,"dataIndex":"id_tramite","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Fecha_tramite","sortable":true,"dataIndex":"fecha_tramite","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Hora_tramite","sortable":true,"dataIndex":"hora_tramite","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Fecha_esperada","sortable":true,"dataIndex":"fecha_esperada","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Fecha_entrega","sortable":true,"dataIndex":"fecha_entrega","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Url_file","sortable":true,"dataIndex":"url_file","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Comentarios","sortable":true,"dataIndex":"comentarios","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Fecha_creacion","sortable":true,"dataIndex":"fecha_creacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"Fecha_modificacion","sortable":true,"dataIndex":"fecha_modificacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"IdTipoTramite","sortable":true,"dataIndex":"tramiteTipoTramite.idTipoTramite","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Tramite","sortable":true,"dataIndex":"tramiteTipoTramite.tramite","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"DisponibleUi","sortable":true,"dataIndex":"tramiteTipoTramite.disponibleUi","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"FechaCreacion","sortable":true,"dataIndex":"tramiteTipoTramite.fechaCreacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"FechaActualizacion","sortable":true,"dataIndex":"tramiteTipoTramite.fechaActualizacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"IdPersona","sortable":true,"dataIndex":"solicitante.idPersona","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"NombreLdap","sortable":true,"dataIndex":"solicitante.nombreLdap","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Clave","sortable":true,"dataIndex":"solicitante.clave","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Codigo","sortable":true,"dataIndex":"solicitante.codigo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Email","sortable":true,"dataIndex":"solicitante.email","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Matriculado","sortable":true,"dataIndex":"solicitante.matriculado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"ActivoRetirado","sortable":true,"dataIndex":"solicitante.activoRetirado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Apellido1","sortable":true,"dataIndex":"solicitante.apellido1","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"Apellido2","sortable":true,"dataIndex":"solicitante.apellido2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"Nombre1","sortable":true,"dataIndex":"solicitante.nombre1","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},
{"caption":"Nombre2","sortable":true,"dataIndex":"solicitante.nombre2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},
{"caption":"NivelAcademico","sortable":true,"dataIndex":"solicitante.nivelAcademico","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},
{"caption":"FechaNacimiento","sortable":true,"dataIndex":"solicitante.fechaNacimiento","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},
{"caption":"DireccionResidencia","sortable":true,"dataIndex":"solicitante.direccionResidencia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null},
{"caption":"Telefono","sortable":true,"dataIndex":"solicitante.telefono","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":14,"subType":null},
{"caption":"Telefono2","sortable":true,"dataIndex":"solicitante.telefono2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":15,"subType":null},
{"caption":"Religion","sortable":true,"dataIndex":"solicitante.religion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":16,"subType":null},
{"caption":"TipoDocumento","sortable":true,"dataIndex":"solicitante.tipoDocumento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":17,"subType":null},
{"caption":"NoDocumento","sortable":true,"dataIndex":"solicitante.noDocumento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":18,"subType":null},
{"caption":"Nacionalidad","sortable":true,"dataIndex":"solicitante.nacionalidad","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":19,"subType":null},
{"caption":"LugarNacimientoDepartamento","sortable":true,"dataIndex":"solicitante.lugarNacimientoDepartamento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":20,"subType":null},
{"caption":"LugarNacimientoMunicipio","sortable":true,"dataIndex":"solicitante.lugarNacimientoMunicipio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":21,"subType":null},
{"caption":"LugarExpedicionMunicipio","sortable":true,"dataIndex":"solicitante.lugarExpedicionMunicipio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":22,"subType":null},
{"caption":"LugarExpedicionDepartamento","sortable":true,"dataIndex":"solicitante.lugarExpedicionDepartamento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":23,"subType":null},
{"caption":"PaisDomicilio","sortable":true,"dataIndex":"solicitante.paisDomicilio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":24,"subType":null},
{"caption":"Barrio","sortable":true,"dataIndex":"solicitante.barrio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":25,"subType":null},
{"caption":"CodigoPostal","sortable":true,"dataIndex":"solicitante.codigoPostal","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":26,"subType":null},
{"caption":"Municipio","sortable":true,"dataIndex":"solicitante.municipio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":27,"subType":null},
{"caption":"Departamento","sortable":true,"dataIndex":"solicitante.departamento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":28,"subType":null},
{"caption":"SaludPrepagada","sortable":true,"dataIndex":"solicitante.saludPrepagada","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":29,"subType":null},
{"caption":"Eps","sortable":true,"dataIndex":"solicitante.eps","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":30,"subType":null},
{"caption":"NumeroContratoSalud","sortable":true,"dataIndex":"solicitante.numeroContratoSalud","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":31,"subType":null},
{"caption":"ClinicaEmergencia","sortable":true,"dataIndex":"solicitante.clinicaEmergencia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":32,"subType":null},
{"caption":"ViveCon","sortable":true,"dataIndex":"solicitante.viveCon","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":33,"subType":null},
{"caption":"TipoSangre","sortable":true,"dataIndex":"solicitante.tipoSangre","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":34,"subType":null},
{"caption":"Sexo","sortable":true,"dataIndex":"solicitante.sexo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":35,"subType":null},
{"caption":"CodigoFamilia","sortable":true,"dataIndex":"solicitante.codigoFamilia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":36,"subType":null},
{"caption":"FechaIngreso","sortable":true,"dataIndex":"solicitante.fechaIngreso","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":37,"subType":null},
{"caption":"GradoIngreso","sortable":true,"dataIndex":"solicitante.gradoIngreso","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":38,"subType":null},
{"caption":"CursoIngreso","sortable":true,"dataIndex":"solicitante.cursoIngreso","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":39,"subType":null},
{"caption":"FechaRetiro","sortable":true,"dataIndex":"solicitante.fechaRetiro","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":40,"subType":null},
{"caption":"ComentarioRetiro","sortable":true,"dataIndex":"solicitante.comentarioRetiro","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":41,"subType":null},
{"caption":"ColegioAnterior","sortable":true,"dataIndex":"solicitante.colegioAnterior","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":42,"subType":null},
{"caption":"HijoDeExalumno","sortable":true,"dataIndex":"solicitante.hijoDeExalumno","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":43,"subType":null},
{"caption":"NombrePadreExalumno","sortable":true,"dataIndex":"solicitante.nombrePadreExalumno","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":44,"subType":null},
{"caption":"Promocion","sortable":true,"dataIndex":"solicitante.promocion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":45,"subType":null},
{"caption":"NumeroTarjetaCredito","sortable":true,"dataIndex":"solicitante.numeroTarjetaCredito","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":46,"subType":null},
{"caption":"Profesion","sortable":true,"dataIndex":"solicitante.profesion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":47,"subType":null},
{"caption":"Empresa","sortable":true,"dataIndex":"solicitante.empresa","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":48,"subType":null},
{"caption":"Cargo","sortable":true,"dataIndex":"solicitante.cargo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":49,"subType":null},
{"caption":"Celular","sortable":true,"dataIndex":"solicitante.celular","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":50,"subType":null},
{"caption":"DireccionOficina","sortable":true,"dataIndex":"solicitante.direccionOficina","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":51,"subType":null},
{"caption":"TelefonoOficina","sortable":true,"dataIndex":"solicitante.telefonoOficina","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":52,"subType":null},
{"caption":"Parentesco","sortable":true,"dataIndex":"solicitante.parentesco","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":53,"subType":null},
{"caption":"RutaM","sortable":true,"dataIndex":"solicitante.rutaM","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":54,"subType":null},
{"caption":"RutaT","sortable":true,"dataIndex":"solicitante.rutaT","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":55,"subType":null},
{"caption":"TomaAlmuerzo","sortable":true,"dataIndex":"solicitante.tomaAlmuerzo","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":56,"subType":null},
{"caption":"TomaMediasNueves","sortable":true,"dataIndex":"solicitante.tomaMediasNueves","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":57,"subType":null},
{"caption":"TomaSeguroAccidentes","sortable":true,"dataIndex":"solicitante.tomaSeguroAccidentes","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":58,"subType":null},
{"caption":"NoPlaqueta","sortable":true,"dataIndex":"solicitante.noPlaqueta","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":59,"subType":null},
{"caption":"InscAlumCursoIdInscAlumCurso","sortable":true,"dataIndex":"solicitante.inscAlumCursoIdInscAlumCurso","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":60,"subType":null},
{"caption":"IdPersona","sortable":true,"dataIndex":"referenciado.idPersona","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"NombreLdap","sortable":true,"dataIndex":"referenciado.nombreLdap","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Clave","sortable":true,"dataIndex":"referenciado.clave","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Codigo","sortable":true,"dataIndex":"referenciado.codigo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Email","sortable":true,"dataIndex":"referenciado.email","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Matriculado","sortable":true,"dataIndex":"referenciado.matriculado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"ActivoRetirado","sortable":true,"dataIndex":"referenciado.activoRetirado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Apellido1","sortable":true,"dataIndex":"referenciado.apellido1","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"Apellido2","sortable":true,"dataIndex":"referenciado.apellido2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"Nombre1","sortable":true,"dataIndex":"referenciado.nombre1","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},
{"caption":"Nombre2","sortable":true,"dataIndex":"referenciado.nombre2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},
{"caption":"NivelAcademico","sortable":true,"dataIndex":"referenciado.nivelAcademico","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},
{"caption":"FechaNacimiento","sortable":true,"dataIndex":"referenciado.fechaNacimiento","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},
{"caption":"DireccionResidencia","sortable":true,"dataIndex":"referenciado.direccionResidencia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null},
{"caption":"Telefono","sortable":true,"dataIndex":"referenciado.telefono","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":14,"subType":null},
{"caption":"Telefono2","sortable":true,"dataIndex":"referenciado.telefono2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":15,"subType":null},
{"caption":"Religion","sortable":true,"dataIndex":"referenciado.religion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":16,"subType":null},
{"caption":"TipoDocumento","sortable":true,"dataIndex":"referenciado.tipoDocumento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":17,"subType":null},
{"caption":"NoDocumento","sortable":true,"dataIndex":"referenciado.noDocumento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":18,"subType":null},
{"caption":"Nacionalidad","sortable":true,"dataIndex":"referenciado.nacionalidad","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":19,"subType":null},
{"caption":"LugarNacimientoDepartamento","sortable":true,"dataIndex":"referenciado.lugarNacimientoDepartamento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":20,"subType":null},
{"caption":"LugarNacimientoMunicipio","sortable":true,"dataIndex":"referenciado.lugarNacimientoMunicipio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":21,"subType":null},
{"caption":"LugarExpedicionMunicipio","sortable":true,"dataIndex":"referenciado.lugarExpedicionMunicipio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":22,"subType":null},
{"caption":"LugarExpedicionDepartamento","sortable":true,"dataIndex":"referenciado.lugarExpedicionDepartamento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":23,"subType":null},
{"caption":"PaisDomicilio","sortable":true,"dataIndex":"referenciado.paisDomicilio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":24,"subType":null},
{"caption":"Barrio","sortable":true,"dataIndex":"referenciado.barrio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":25,"subType":null},
{"caption":"CodigoPostal","sortable":true,"dataIndex":"referenciado.codigoPostal","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":26,"subType":null},
{"caption":"Municipio","sortable":true,"dataIndex":"referenciado.municipio","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":27,"subType":null},
{"caption":"Departamento","sortable":true,"dataIndex":"referenciado.departamento","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":28,"subType":null},
{"caption":"SaludPrepagada","sortable":true,"dataIndex":"referenciado.saludPrepagada","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":29,"subType":null},
{"caption":"Eps","sortable":true,"dataIndex":"referenciado.eps","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":30,"subType":null},
{"caption":"NumeroContratoSalud","sortable":true,"dataIndex":"referenciado.numeroContratoSalud","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":31,"subType":null},
{"caption":"ClinicaEmergencia","sortable":true,"dataIndex":"referenciado.clinicaEmergencia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":32,"subType":null},
{"caption":"ViveCon","sortable":true,"dataIndex":"referenciado.viveCon","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":33,"subType":null},
{"caption":"TipoSangre","sortable":true,"dataIndex":"referenciado.tipoSangre","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":34,"subType":null},
{"caption":"Sexo","sortable":true,"dataIndex":"referenciado.sexo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":35,"subType":null},
{"caption":"CodigoFamilia","sortable":true,"dataIndex":"referenciado.codigoFamilia","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":36,"subType":null},
{"caption":"FechaIngreso","sortable":true,"dataIndex":"referenciado.fechaIngreso","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":37,"subType":null},
{"caption":"GradoIngreso","sortable":true,"dataIndex":"referenciado.gradoIngreso","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":38,"subType":null},
{"caption":"CursoIngreso","sortable":true,"dataIndex":"referenciado.cursoIngreso","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":39,"subType":null},
{"caption":"FechaRetiro","sortable":true,"dataIndex":"referenciado.fechaRetiro","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":40,"subType":null},
{"caption":"ComentarioRetiro","sortable":true,"dataIndex":"referenciado.comentarioRetiro","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":41,"subType":null},
{"caption":"ColegioAnterior","sortable":true,"dataIndex":"referenciado.colegioAnterior","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":42,"subType":null},
{"caption":"HijoDeExalumno","sortable":true,"dataIndex":"referenciado.hijoDeExalumno","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":43,"subType":null},
{"caption":"NombrePadreExalumno","sortable":true,"dataIndex":"referenciado.nombrePadreExalumno","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":44,"subType":null},
{"caption":"Promocion","sortable":true,"dataIndex":"referenciado.promocion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":45,"subType":null},
{"caption":"NumeroTarjetaCredito","sortable":true,"dataIndex":"referenciado.numeroTarjetaCredito","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":46,"subType":null},
{"caption":"Profesion","sortable":true,"dataIndex":"referenciado.profesion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":47,"subType":null},
{"caption":"Empresa","sortable":true,"dataIndex":"referenciado.empresa","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":48,"subType":null},
{"caption":"Cargo","sortable":true,"dataIndex":"referenciado.cargo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":49,"subType":null},
{"caption":"Celular","sortable":true,"dataIndex":"referenciado.celular","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":50,"subType":null},
{"caption":"DireccionOficina","sortable":true,"dataIndex":"referenciado.direccionOficina","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":51,"subType":null},
{"caption":"TelefonoOficina","sortable":true,"dataIndex":"referenciado.telefonoOficina","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":52,"subType":null},
{"caption":"Parentesco","sortable":true,"dataIndex":"referenciado.parentesco","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":53,"subType":null},
{"caption":"RutaM","sortable":true,"dataIndex":"referenciado.rutaM","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":54,"subType":null},
{"caption":"RutaT","sortable":true,"dataIndex":"referenciado.rutaT","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":55,"subType":null},
{"caption":"TomaAlmuerzo","sortable":true,"dataIndex":"referenciado.tomaAlmuerzo","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":56,"subType":null},
{"caption":"TomaMediasNueves","sortable":true,"dataIndex":"referenciado.tomaMediasNueves","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":57,"subType":null},
{"caption":"TomaSeguroAccidentes","sortable":true,"dataIndex":"referenciado.tomaSeguroAccidentes","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":58,"subType":null},
{"caption":"NoPlaqueta","sortable":true,"dataIndex":"referenciado.noPlaqueta","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":59,"subType":null},
{"caption":"InscAlumCursoIdInscAlumCurso","sortable":true,"dataIndex":"referenciado.inscAlumCursoIdInscAlumCurso","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":60,"subType":null}
]}, {}]
}],
tipo_accion_usuario: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_desarrollo.data.PadresTramitesTipopersona"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.PadresTramitesTipopersona","related":["id"],"view":[
{"caption":"IdTipoTramite","sortable":true,"dataIndex":"id.idTipoTramite","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2000,"subType":null,"widthUnits":"px"},
{"caption":"Tramite","sortable":true,"dataIndex":"id.tramite","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2001,"subType":null,"widthUnits":"px"},
{"caption":"Disponible","sortable":true,"dataIndex":"id.disponible","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2002,"subType":null,"widthUnits":"px"},
{"caption":"IdTipoPersona","sortable":true,"dataIndex":"id.idTipoPersona","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2003,"subType":null,"widthUnits":"px"},
{"caption":"TipoPersona","sortable":true,"dataIndex":"id.tipoPersona","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2004,"subType":null,"widthUnits":"px"},
{"caption":"IdAccion","sortable":true,"dataIndex":"id.idAccion","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2005,"subType":null,"widthUnits":"px"},
{"caption":"Accion","sortable":true,"dataIndex":"id.accion","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2006,"subType":null,"widthUnits":"px"},
{"caption":"TramiteTipoRolId","sortable":true,"dataIndex":"id.tramiteTipoRolId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2007,"subType":null,"widthUnits":"px"},
{"caption":"TipoTramiteIdTipoTramite","sortable":true,"dataIndex":"id.tipoTramiteIdTipoTramite","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2008,"subType":null,"widthUnits":"px"},
{"caption":"TipoPersonaIdTipoPersona","sortable":true,"dataIndex":"id.tipoPersonaIdTipoPersona","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2009,"subType":null,"widthUnits":"px"},
{"caption":"Requerido","sortable":true,"dataIndex":"id.requerido","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2010,"subType":null,"widthUnits":"px"},
{"caption":"ValorDefecto","sortable":true,"dataIndex":"id.valorDefecto","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2011,"subType":null,"widthUnits":"px"},
{"caption":"ApruebaSolicita","sortable":true,"dataIndex":"id.apruebaSolicita","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2012,"subType":null,"widthUnits":"px"},
{"caption":"Notificacion","sortable":true,"dataIndex":"id.notificacion","type":"java.lang.Boolean","displayType":"CheckBox","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2013,"subType":null,"widthUnits":"px"}
]}, {}]
}],
tramites_enviarNotificacionPadres: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"sendEmailNotification","service":"NotificacionPadres"}, {}, {
input: ["wm.ServiceInput", {"type":"sendEmailNotificationInputs"}, {}]
}],
tramites_enviarNotificacionMadres: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"sendEmailNotification","service":"NotificacionMadres"}, {}, {
input: ["wm.ServiceInput", {"type":"sendEmailNotificationInputs"}, {}]
}],
tramites_enviarDirNivelNotificacion: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"sendEmailNotification","service":"NotificacionDirNivel"}, {}, {
input: ["wm.ServiceInput", {"type":"sendEmailNotificationInputs"}, {}]
}],
tramites_enviarAdmonNotificacion: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"sendEmailNotification","service":"NotificacionAdmon"}, {}, {
input: ["wm.ServiceInput", {"type":"sendEmailNotificationInputs"}, {}]
}],
tramiteautorizacionesLiveVariable1: ["wm.LiveVariable", {"type":"com.aprendoz_desarrollo.data.TramiteAutorizaciones"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_desarrollo.data.TramiteAutorizaciones","related":["tramite","tramite.tramiteTipoTramite","tramite.referenciado"],"view":[
{"caption":"IdAutorizacion","sortable":true,"dataIndex":"idAutorizacion","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},
{"caption":"PersonaIdPersona","sortable":true,"dataIndex":"personaIdPersona","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},
{"caption":"Aprobacion","sortable":true,"dataIndex":"aprobacion","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1002,"subType":null,"widthUnits":"px"},
{"caption":"Comentario","sortable":true,"dataIndex":"comentario","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1003,"subType":null,"widthUnits":"px"},
{"caption":"FechaCreacion","sortable":true,"dataIndex":"fechaCreacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1004,"subType":null,"widthUnits":"px"},
{"caption":"FechaActualizacion","sortable":true,"dataIndex":"fechaActualizacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1005,"subType":null,"widthUnits":"px"},
{"caption":"Id_tramite","sortable":true,"dataIndex":"tramite.id_tramite","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2000,"subType":null,"widthUnits":"px"},
{"caption":"Fecha_tramite","sortable":true,"dataIndex":"tramite.fecha_tramite","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2001,"subType":null,"widthUnits":"px"},
{"caption":"Hora_tramite","sortable":true,"dataIndex":"tramite.hora_tramite","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2002,"subType":null,"widthUnits":"px"},
{"caption":"Fecha_esperada","sortable":true,"dataIndex":"tramite.fecha_esperada","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2003,"subType":null,"widthUnits":"px"},
{"caption":"Fecha_entrega","sortable":true,"dataIndex":"tramite.fecha_entrega","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2004,"subType":null,"widthUnits":"px"},
{"caption":"Url_file","sortable":true,"dataIndex":"tramite.url_file","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2005,"subType":null,"widthUnits":"px"},
{"caption":"Comentarios","sortable":true,"dataIndex":"tramite.comentarios","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2006,"subType":null,"widthUnits":"px"},
{"caption":"Fecha_creacion","sortable":true,"dataIndex":"tramite.fecha_creacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2007,"subType":null,"widthUnits":"px"},
{"caption":"Fecha_modificacion","sortable":true,"dataIndex":"tramite.fecha_modificacion","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2008,"subType":null,"widthUnits":"px"},
{"caption":"IdTipoTramite","sortable":true,"dataIndex":"tramite.tramiteTipoTramite.idTipoTramite","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3000},
{"caption":"Tramite","sortable":true,"dataIndex":"tramite.tramiteTipoTramite.tramite","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3001},
{"caption":"DisponibleUi","sortable":true,"dataIndex":"tramite.tramiteTipoTramite.disponibleUi","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3002},
{"caption":"FechaCreacion","sortable":true,"dataIndex":"tramite.tramiteTipoTramite.fechaCreacion","type":"java.util.Date","displayType":"Date","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3003},
{"caption":"FechaActualizacion","sortable":true,"dataIndex":"tramite.tramiteTipoTramite.fechaActualizacion","type":"java.util.Date","displayType":"Date","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3004},
{"caption":"IdPersona","sortable":true,"dataIndex":"tramite.referenciado.idPersona","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4000},
{"caption":"NombreLdap","sortable":true,"dataIndex":"tramite.referenciado.nombreLdap","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4001},
{"caption":"Clave","sortable":true,"dataIndex":"tramite.referenciado.clave","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4002},
{"caption":"Codigo","sortable":true,"dataIndex":"tramite.referenciado.codigo","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4003},
{"caption":"Email","sortable":true,"dataIndex":"tramite.referenciado.email","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4004},
{"caption":"Matriculado","sortable":true,"dataIndex":"tramite.referenciado.matriculado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4005},
{"caption":"ActivoRetirado","sortable":true,"dataIndex":"tramite.referenciado.activoRetirado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4006},
{"caption":"Apellido1","sortable":true,"dataIndex":"tramite.referenciado.apellido1","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4007},
{"caption":"Apellido2","sortable":true,"dataIndex":"tramite.referenciado.apellido2","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4008},
{"caption":"Nombre1","sortable":true,"dataIndex":"tramite.referenciado.nombre1","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4009},
{"caption":"Nombre2","sortable":true,"dataIndex":"tramite.referenciado.nombre2","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4010},
{"caption":"NivelAcademico","sortable":true,"dataIndex":"tramite.referenciado.nivelAcademico","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4011},
{"caption":"FechaNacimiento","sortable":true,"dataIndex":"tramite.referenciado.fechaNacimiento","type":"java.util.Date","displayType":"Date","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4012},
{"caption":"DireccionResidencia","sortable":true,"dataIndex":"tramite.referenciado.direccionResidencia","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4013},
{"caption":"Telefono","sortable":true,"dataIndex":"tramite.referenciado.telefono","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4014},
{"caption":"Telefono2","sortable":true,"dataIndex":"tramite.referenciado.telefono2","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4015},
{"caption":"Religion","sortable":true,"dataIndex":"tramite.referenciado.religion","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4016},
{"caption":"TipoDocumento","sortable":true,"dataIndex":"tramite.referenciado.tipoDocumento","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4017},
{"caption":"NoDocumento","sortable":true,"dataIndex":"tramite.referenciado.noDocumento","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4018},
{"caption":"Nacionalidad","sortable":true,"dataIndex":"tramite.referenciado.nacionalidad","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4019},
{"caption":"LugarNacimientoDepartamento","sortable":true,"dataIndex":"tramite.referenciado.lugarNacimientoDepartamento","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4020},
{"caption":"LugarNacimientoMunicipio","sortable":true,"dataIndex":"tramite.referenciado.lugarNacimientoMunicipio","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4021},
{"caption":"LugarExpedicionMunicipio","sortable":true,"dataIndex":"tramite.referenciado.lugarExpedicionMunicipio","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4022},
{"caption":"LugarExpedicionDepartamento","sortable":true,"dataIndex":"tramite.referenciado.lugarExpedicionDepartamento","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4023},
{"caption":"PaisDomicilio","sortable":true,"dataIndex":"tramite.referenciado.paisDomicilio","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4024},
{"caption":"Barrio","sortable":true,"dataIndex":"tramite.referenciado.barrio","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4025},
{"caption":"CodigoPostal","sortable":true,"dataIndex":"tramite.referenciado.codigoPostal","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4026},
{"caption":"Municipio","sortable":true,"dataIndex":"tramite.referenciado.municipio","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4027},
{"caption":"Departamento","sortable":true,"dataIndex":"tramite.referenciado.departamento","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4028},
{"caption":"SaludPrepagada","sortable":true,"dataIndex":"tramite.referenciado.saludPrepagada","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4029},
{"caption":"Eps","sortable":true,"dataIndex":"tramite.referenciado.eps","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4030},
{"caption":"NumeroContratoSalud","sortable":true,"dataIndex":"tramite.referenciado.numeroContratoSalud","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4031},
{"caption":"ClinicaEmergencia","sortable":true,"dataIndex":"tramite.referenciado.clinicaEmergencia","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4032},
{"caption":"ViveCon","sortable":true,"dataIndex":"tramite.referenciado.viveCon","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4033},
{"caption":"TipoSangre","sortable":true,"dataIndex":"tramite.referenciado.tipoSangre","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4034},
{"caption":"Sexo","sortable":true,"dataIndex":"tramite.referenciado.sexo","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4035},
{"caption":"CodigoFamilia","sortable":true,"dataIndex":"tramite.referenciado.codigoFamilia","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4036},
{"caption":"FechaIngreso","sortable":true,"dataIndex":"tramite.referenciado.fechaIngreso","type":"java.util.Date","displayType":"Date","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4037},
{"caption":"GradoIngreso","sortable":true,"dataIndex":"tramite.referenciado.gradoIngreso","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4038},
{"caption":"CursoIngreso","sortable":true,"dataIndex":"tramite.referenciado.cursoIngreso","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4039},
{"caption":"FechaRetiro","sortable":true,"dataIndex":"tramite.referenciado.fechaRetiro","type":"java.util.Date","displayType":"Date","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4040},
{"caption":"ComentarioRetiro","sortable":true,"dataIndex":"tramite.referenciado.comentarioRetiro","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4041},
{"caption":"ColegioAnterior","sortable":true,"dataIndex":"tramite.referenciado.colegioAnterior","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4042},
{"caption":"HijoDeExalumno","sortable":true,"dataIndex":"tramite.referenciado.hijoDeExalumno","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4043},
{"caption":"NombrePadreExalumno","sortable":true,"dataIndex":"tramite.referenciado.nombrePadreExalumno","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4044},
{"caption":"Promocion","sortable":true,"dataIndex":"tramite.referenciado.promocion","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4045},
{"caption":"NumeroTarjetaCredito","sortable":true,"dataIndex":"tramite.referenciado.numeroTarjetaCredito","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4046},
{"caption":"Profesion","sortable":true,"dataIndex":"tramite.referenciado.profesion","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4047},
{"caption":"Empresa","sortable":true,"dataIndex":"tramite.referenciado.empresa","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4048},
{"caption":"Cargo","sortable":true,"dataIndex":"tramite.referenciado.cargo","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4049},
{"caption":"Celular","sortable":true,"dataIndex":"tramite.referenciado.celular","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4050},
{"caption":"DireccionOficina","sortable":true,"dataIndex":"tramite.referenciado.direccionOficina","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4051},
{"caption":"TelefonoOficina","sortable":true,"dataIndex":"tramite.referenciado.telefonoOficina","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4052},
{"caption":"Parentesco","sortable":true,"dataIndex":"tramite.referenciado.parentesco","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4053},
{"caption":"RutaM","sortable":true,"dataIndex":"tramite.referenciado.rutaM","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4054},
{"caption":"RutaT","sortable":true,"dataIndex":"tramite.referenciado.rutaT","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4055},
{"caption":"TomaAlmuerzo","sortable":true,"dataIndex":"tramite.referenciado.tomaAlmuerzo","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4056},
{"caption":"TomaMediasNueves","sortable":true,"dataIndex":"tramite.referenciado.tomaMediasNueves","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4057},
{"caption":"TomaSeguroAccidentes","sortable":true,"dataIndex":"tramite.referenciado.tomaSeguroAccidentes","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4058},
{"caption":"NoPlaqueta","sortable":true,"dataIndex":"tramite.referenciado.noPlaqueta","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4059},
{"caption":"InscAlumCursoIdInscAlumCurso","sortable":true,"dataIndex":"tramite.referenciado.inscAlumCursoIdInscAlumCurso","type":"java.lang.Integer","displayType":"Number","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4060}
]}, {}]
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
profileFileUpload: ["wm.DojoFileUpload", {"buttonCaption":"Subir image...","showing":false,"styles":{},"width":"95%"}, {"onSuccess":"profileFileUploadSuccess"}, {
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
permisosDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar5","containerWidgetId":"containerWidget5","desktopHeight":"680px","height":"680px","styles":{},"title":"Solicitud de Permisos","width":"720px"}, {}, {
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
loadingDialog3: ["wm.LoadingDialog", {"caption":"Cargando tramites y autorizaciones...","serviceVariableToTrack":["tramiteautorizacionesLiveVariable1","tramiteLiveVariable1"]}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"panel_transporte","targetProperty":"widgetToCover"}, {}]
}]
}],
tramiteDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar4","containerWidgetId":"containerWidget4","desktopHeight":"350px","height":"350px","styles":{},"title":"tramite","width":"500px"}, {}, {
containerWidget4: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
tramiteLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"250px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onBeforeServiceCall":"tramiteLiveForm1BeforeServiceCall","onBeginInsert":"tramiteLiveForm1BeginInsert","onBeginUpdate":"tramiteLiveForm1BeginUpdate","onInsertData":"tramiteLiveForm1InsertData","onSuccess":"tramiteLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"tramiteDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
id_tramiteEditor1: ["wm.Number", {"border":"0","caption":"No. Tramite","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"zero","formField":"id_tramite","height":"32px","width":"100%"}, {}],
AuxTipoTramite: ["wm.SelectMenu", {"caption":"Tramite","captionSize":"140px","dataType":"com.aprendoz_desarrollo.data.PadresTramitesTipopersona","dataValue":undefined,"desktopHeight":"32px","displayField":"id.tramite","displayValue":"","height":"32px","required":true,"styles":{},"width":"100%"}, {"onchange":"AuxTipoTramiteChange","onchange1":"AuxTipoTramiteChange1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"tipo_accion_usuario","targetProperty":"dataSet"}, {}]
}]
}],
tramiteTipoTramiteLookup1: ["wm.Lookup", {"caption":"Tramite","captionSize":"140px","dataType":"com.aprendoz_desarrollo.data.TramiteTipoTramite","desktopHeight":"32px","displayField":"tramite","formField":"tramiteTipoTramite","height":"32px","required":true,"showing":false,"width":"100%"}, {}],
referenciadoLookup1: ["wm.Lookup", {"autoDataSet":false,"caption":"Referenciado","captionSize":"140px","dataType":"com.aprendoz_desarrollo.data.Persona","desktopHeight":"32px","displayExpression":"${nombre1}+\" \"+${nombre2}+${apellido1}+\" \"+${apellido2}","displayField":"nombreLdap","formField":"referenciado","height":"32px","required":true,"width":"100%"}, {"onchange":"referenciadoLookup1Change"}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"referenciadoLookup1.liveVariable","targetProperty":"dataSet"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"referenciadoLiveVariable","targetProperty":"dataSet"}, {}]
}]
}],
solicitanteLookup1: ["wm.Lookup", {"autoDataSet":false,"caption":"Solicitante","captionSize":"140px","dataType":"com.aprendoz_desarrollo.data.Persona","desktopHeight":"32px","displayField":"idPersona","formField":"solicitante","height":"32px","required":true,"showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"solicitanteLookup1.liveVariable","targetProperty":"dataSet"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"solicitanteLiveVariable","targetProperty":"dataSet"}, {}]
}]
}],
fecha_tramiteEditor1: ["wm.DateTime", {"border":"0","caption":"Fecha","captionSize":"140px","dateMode":"Date","desktopHeight":"32px","emptyValue":"zero","formField":"fecha_tramite","height":"32px","width":"100%"}, {}],
hora_tramiteEditor1: ["wm.Time", {"border":"0","caption":"Hora","captionSize":"140px","desktopHeight":"32px","emptyValue":"zero","formField":"hora_tramite","height":"32px","width":"100%"}, {}],
fecha_esperadaEditor1: ["wm.DateTime", {"border":"0","caption":"Fecha_esperada","captionSize":"140px","dateMode":"Date","desktopHeight":"32px","emptyValue":"zero","formField":"fecha_esperada","height":"32px","showing":false,"width":"100%"}, {}],
fecha_entregaEditor1: ["wm.DateTime", {"border":"0","caption":"Fecha_entrega","captionSize":"140px","dateMode":"Date","desktopHeight":"32px","emptyValue":"zero","formField":"fecha_entrega","height":"32px","showing":false,"width":"100%"}, {}],
url_fileEditor1: ["wm.LargeTextArea", {"border":"0","caption":"Url_file","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"url_file","height":"80px","maxChars":200,"showing":false,"width":"100%"}, {}],
comentariosEditor1: ["wm.LargeTextArea", {"border":"0","caption":"Comentarios","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"comentarios","height":"80px","maxChars":65535,"width":"100%"}, {}],
fecha_creacionEditor1: ["wm.DateTime", {"border":"0","caption":"Fecha_creacion","captionSize":"140px","dateMode":"Date","desktopHeight":"32px","emptyValue":"zero","formField":"fecha_creacion","height":"32px","showing":false,"styles":{},"width":"100%"}, {}],
fecha_modificacionEditor1: ["wm.DateTime", {"border":"0","caption":"Fecha_modificacion","captionSize":"140px","dateMode":"Date","desktopHeight":"32px","emptyValue":"zero","formField":"fecha_modificacion","height":"32px","showing":false,"width":"100%"}, {}]
}]
}],
buttonBar4: ["wm.ButtonBarPanel", {"border":"1","desktopHeight":"34px","height":"34px","styles":{}}, {}, {
auxButton1: ["wm.Button", {"_classes":{"domNode":["Green"]},"caption":"Guardar","margin":"4","styles":{}}, {"onclick":"auxButton1Click"}],
tramiteSaveButton: ["wm.Button", {"_classes":{"domNode":["Green"]},"caption":"Guardar","margin":"4","styles":{}}, {"onclick":"tramiteLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"tramiteLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
tramiteCancelButton: ["wm.Button", {"_classes":{"domNode":["red"]},"caption":"Cancelar","margin":"4","styles":{}}, {"onclick":"tramiteDialog.hide","onclick1":"tramiteLiveForm1.cancelEdit"}]
}]
}],
tramiteautorizacionesDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar6","containerWidgetId":"containerWidget6","desktopHeight":"310px","height":"310px","title":"tramiteautorizaciones","width":"500px"}, {}, {
containerWidget6: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
tramiteautorizacionesLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"276px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"tramiteautorizacionesLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"tramiteautorizacionesDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idAutorizacionEditor1: ["wm.Number", {"border":"0","caption":"No. Autorización","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"zero","formField":"idAutorizacion","height":"32px","required":true,"width":"100%"}, {}],
personaIdPersonaEditor1: ["wm.Number", {"border":"0","caption":"PersonaIdPersona","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"zero","formField":"personaIdPersona","height":"32px","required":true,"width":"100%"}, {}],
aprobacionEditor1: ["wm.Checkbox", {"caption":"Aprobacion","captionSize":"140px","desktopHeight":"26px","displayValue":false,"formField":"aprobacion","height":"26px","width":"100%"}, {}],
comentarioEditor1: ["wm.LargeTextArea", {"border":"0","caption":"Comentario","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"comentario","height":"80px","maxChars":65535,"width":"100%"}, {}],
fechaCreacionEditor2: ["wm.DateTime", {"border":"0","caption":"FechaCreacion","captionSize":"140px","dateMode":"Date","desktopHeight":"32px","emptyValue":"zero","formField":"fechaCreacion","height":"32px","width":"100%"}, {}],
fechaActualizacionEditor2: ["wm.DateTime", {"border":"0","caption":"FechaActualizacion","captionSize":"140px","dateMode":"Date","desktopHeight":"32px","emptyValue":"zero","formField":"fechaActualizacion","height":"32px","width":"100%"}, {}],
tramiteLookup1: ["wm.Lookup", {"caption":"Tramite","captionSize":"140px","dataType":"com.aprendoz_desarrollo.data.Tramite","desktopHeight":"32px","displayField":"comentarios","formField":"tramite","height":"32px","required":true,"width":"100%"}, {}]
}]
}],
buttonBar6: ["wm.ButtonBarPanel", {"border":"1","desktopHeight":"34px","height":"34px"}, {}, {
tramiteautorizacionesSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"tramiteautorizacionesLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"tramiteautorizacionesLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
tramiteautorizacionesCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"tramiteautorizacionesDialog.hide","onclick1":"tramiteautorizacionesLiveForm1.cancelEdit"}]
}]
}],
mensajeTransporteDialog: ["wm.DesignableDialog", {"styles":{},"title":"Aviso sobre transporte","containerWidgetId":"containerWidget7","buttonBarId":"buttonBar"}, {}, {
containerWidget7: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"center","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label6: ["wm.Label", {"align":"justify","caption":"EN ESTA OPCIÓN  USTED PODRA DEFINIR SI CONTRATARA EL SEVICIO  DE TRANSPORTE  EXTRACURRICULAR PARA EL SEMESTRE ; DE LO CONTRARIO SE ENTENDERA  QUE EL ALUMNO  SERA BUSCADO  POR SUS PADRES AL FINALIZAR LA ACTIVIDAD, Y QUE NO SE LE PRESTARA EL SERVICIO TRANSPORTE","height":"201px","padding":"4","singleLine":false,"styles":{"color":"#020202","fontSize":"17px"},"width":"438px"}, {}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1","height":"34px","styles":{"backgroundColor":"#ebebeb"}}, {}, {
mensajeTransporteCloseDialog: ["wm.Button", {"_classes":{"domNode":["red"]},"caption":"Volver","margin":"4","styles":{}}, {"onclick":"mensajeTransporteDialog.hide"}],
mensajeTransporteContinueDialog: ["wm.Button", {"_classes":{"domNode":["blueButton"]},"caption":"Continuar","margin":"4","styles":{}}, {"onclick":"mensajeTransporteContinueDialogClick"}]
}]
}],
layoutBox1: ["wm.Layout", {"autoScroll":false,"height":"1134px","horizontalAlign":"center","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"740px"}, {}, {
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
parents_menu_panel: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,20","styles":{"backgroundColor":"#a3a3a3"},"verticalAlign":"top","width":"100%"}, {}, {
parents_estudents_performance: ["wm.Button", {"border":"0","borderColor":"","caption":"Calificaciones","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/students.png","iconWidth":"24px","margin":"0,6,0,0","padding":"4,12,4,12","styles":{"borderRadius":"0px","backgroundColor":"#3652a4"},"width":"145.5px"}, {"onclick":"parents_estudents_performanceClick","onclick3":"parents_estudents_performanceClick3","onclick4":"parents_estudents_performanceClick4"}],
parents_homework: ["wm.Button", {"border":"0","borderColor":"","caption":"Tareas y trabajos","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/homework.png","iconWidth":"24px","margin":"0,6,0,0","padding":"4,12,4,12","showing":false,"styles":{"borderRadius":"0px"},"width":"120undefined"}, {"onclick":"parents_homeworkClick"}],
parents_update_data: ["wm.Button", {"border":"0","borderColor":"","caption":"Actualizar datos","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/update.png","iconWidth":"24px","margin":"0,6,0,0","padding":"4,12,4,12","showing":false,"styles":{"borderRadius":"0px"},"width":"120undefined"}, {"onclick":"parents_update_dataClick"}],
schoolar_schedule: ["wm.Button", {"border":"0","borderColor":"","caption":"Trabajos y activiades","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/schedule.png","iconWidth":"24px","margin":"0,6,0,0","padding":"4,12,4,12","showing":false,"styles":{"borderRadius":"0px"},"width":"137.5px"}, {"onclick":"schoolar_scheduleClick","onclick1":"schoolar_scheduleClick1","onclick2":"schoolar_scheduleClick2"}],
parents_comunity_comunication: ["wm.Button", {"border":"0","borderColor":"","caption":"Educación comunitaria","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/extracurricular.png","iconWidth":"24px","margin":"0,4,0,0","padding":"4,12,4,12","roles":["2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"],"styles":{"borderRadius":"0px"},"width":"140px"}, {"onclick":"parents_comunity_comunicationClick","onclick1":"parents_comunity_comunicationClick1","onclick2":"parents_comunity_comunicationClick2","onclick3":"parents_comunity_comunicationClick3"}],
parents_account_state: ["wm.Button", {"border":"0","borderColor":"","caption":"Estado de cuenta","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/money.png","iconWidth":"24px","margin":"0,6,0,0","padding":"4,12,4,12","styles":{"borderRadius":"0px"},"width":"110undefined"}, {"onclick":"parents_account_stateClick","onclick1":"parents_account_stateClick1","onclick2":"parents_account_stateClick2"}],
parents_transportship: ["wm.Button", {"border":"0","borderColor":"","caption":"Tramites y Autorizaciones","height":"100%","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/iconsmaster_v2/bus.png","iconWidth":"24px","margin":"0,4,0,0","padding":"4,12,4,12","roles":["2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"],"showing":false,"styles":{"borderRadius":"0px"},"width":"140px"}, {"onclick":"parents_transportshipClick","onclick1":"parents_transportshipClick1","onclick2":"parents_transportshipClick2","onclick3":"parents_transportshipClick3"}]
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
profile_pict: ["wm.Picture", {"_classes":{"domNode":["image_round"]},"aspect":"v","height":"110px","showing":false,"source":"https://diasporabrazil.org/assets/user/default.png","styles":{},"width":"110px"}, {}],
performance_family_grid: ["wm.DojoGrid", {"_classes":{"domNode":["Striped"]},"border":"1","borderColor":"#bbb","columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Grupo Familiar: \" + ${wm.runtimeId}.formatCell(\"user\", ${user}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"user","title":"Grupo Familiar","width":"100%","align":"left","formatFunc":"","expression":"${nombres}+\"<br>\"+${apellidos}+\"<br>\"+${tipo}+\"<br>\"","mobileColumn":false},
{"show":false,"field":"nombres","title":"Nombres","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"curso","title":"Curso","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"apellidos","title":"Apellidos","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tipo","title":"Tipo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"familia","title":"Familia","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idtipo","title":"Idtipo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"pid","title":"Pid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"code","title":"Code","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"grado","title":"Grado","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idgrupo","title":"Idgrupo","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"dsType":"com.aprendoz_desarrollo.data.output.GetGrupoFamiliarbyUserRtnType","height":"110%","localizationStructure":{},"margin":"0","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"12px"}}, {"onSelect":"performance_family_gridSelect","onSelect1":"performance_family_gridSelect1","onSelect2":"performance_family_gridSelect2","onSelect3":"performance_family_gridSelect3","onSelect4":"performance_family_gridSelect4","onSelect5":"performance_family_gridSelect5","onSelect6":"performance_family_gridSelect6","onSelect7":"performance_family_gridSelect7"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"parents_local_performance_familyGroup","targetProperty":"dataSet"}, {}]
}]
}],
performance_spacer2: ["wm.Spacer", {"height":"15px","styles":{},"width":"100%"}, {}],
performance_call_us: ["wm.Picture", {"aspect":"h","height":"30px","source":"resources/images/icons%20v2/Aprendoz_19.jpg","styles":{},"width":"178px"}, {}]
}],
panel_comunity_education: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"0,6,0,15","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
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
comunity_button_add: ["wm.Button", {"caption":"[+] Inscribir","desktopHeight":"40px","disabled":true,"height":"40px","margin":"0,10,0,0","mobileHeight":"100%","padding":"0,0,0,0","styles":{},"width":"90px"}, {"onclick":"comunity_button_addClick","onclick1":"mensajeTransporteDialog.show"}]
}],
comunity_costs_label2: ["wm.Label", {"caption":"CURSOS INSCRITOS","height":"30px","padding":"4","styles":{"color":"#3752a3","fontSize":"15px","fontWeight":"bolder"},"width":"100%"}, {}],
comunity_action_inscription_educom: ["wm.LiveForm", {"horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {"onError":"errorInsertion","onSuccess":"parents_local_comunity_subscribed_curses","onSuccess1":"recordInserted","onSuccess2":"comunity_dialog_terms.hide"}],
comunity_costs_grid1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idInscPersonaEduCom} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Tipo: \" + ${educom.tipoEducom}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Transporte: \" + ${tomaTransporte}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Curso: \" + ${educom.costos.nombreProducto}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Periodo: \" + ${educom.sy.schoolYear}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"idInscPersonaEduCom","title":" ","width":"60px","align":"center","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"fechaCreacion","title":"FechaCreacion","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"fechaActualizacion","title":"FechaActualizacion","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"descuento","title":"Descuento","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"plazo","title":"Plazo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"activoRetirado","title":"ActivoRetirado","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"beca","title":"Beca","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"educom.tipoEducom","title":"Tipo","width":"50px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"tomaTransporte","title":"Transporte","width":"80px","align":"center","formatFunc":"","fieldType":"dojox.grid.cells.Bool","editorProps":null,"mobileColumn":false},
{"show":true,"field":"educom.costos.nombreProducto","title":"Curso","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"educom.sy.schoolYear","title":"Periodo","width":"100px","align":"left","formatFunc":"","mobileColumn":false}
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
panel_transporte: ["wm.Panel", {"height":"100%","horizontalAlign":"center","lock":true,"margin":"5","showing":false,"styles":{},"verticalAlign":"top","width":"100%"}, {}, {
transportes_rutas: ["wm.Button", {"_classes":{"domNode":["blueButton"]},"caption":"Rutas","desktopHeight":"60px","height":"60px","margin":"4","showing":false,"styles":{},"width":"120px"}, {}],
panel7: ["wm.Panel", {"_classes":{"domNode":["blueButton"]},"height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5","styles":{"backgroundColor":"#ededed"},"verticalAlign":"top","width":"100%"}, {}, {
transportes_solicitudes: ["wm.Button", {"_classes":{"domNode":["blueButton"]},"caption":"Solicitud de <br>Permisos","desktopHeight":"60px","height":"60px","margin":"4","showing":false,"styles":{},"width":"120px"}, {"onclick":"transportes_solicitudesClick","onclick1":"transportes_solicitudesClick1"}],
Solicitud_de_Tramite: ["wm.Label", {"caption":"Solicitud de Tramite","height":"100%","padding":"4","styles":{"fontSize":"15px"},"width":"359px"}, {}]
}],
tramite: ["wm.Panel", {"height":"50%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
tramiteLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"tramiteDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"tramiteLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"tramiteDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"tramiteSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
tramiteDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"id_tramite","title":"No. Tramite","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fecha_tramite","title":"Fecha","width":"100px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"hora_tramite","title":"Hora","width":"100px","align":"left","formatFunc":"wm_date_formatter","formatProps":{"dateType":"time"},"mobileColumn":false},
{"show":false,"field":"fecha_esperada","title":"Fecha_esperada","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"fecha_entrega","title":"Fecha_entrega","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"url_file","title":"Url_file","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"comentarios","title":"Comentarios","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"fecha_creacion","title":"Fecha_creacion","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"fecha_modificacion","title":"Fecha_modificacion","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"tramiteTipoTramite.idTipoTramite","title":"IdTipoTramite","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"tramiteTipoTramite.tramite","title":"Tramite","width":"150px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tramiteTipoTramite.disponibleUi","title":"DisponibleUi","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tramiteTipoTramite.fechaCreacion","title":"FechaCreacion","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"tramiteTipoTramite.fechaActualizacion","title":"FechaActualizacion","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"solicitante.idPersona","title":"IdPersona","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.nombreLdap","title":"NombreLdap","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.clave","title":"Clave","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.codigo","title":"Codigo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.email","title":"Email","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.matriculado","title":"Matriculado","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.activoRetirado","title":"ActivoRetirado","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"solicitante.apellido1","title":"Solicitante","width":"100%","align":"left","formatFunc":"","expression":"${solicitante.nombre1}+\" \"+\n${solicitante.nombre2}+\" \"+\n${solicitante.apellido1}+\" \"+\n${solicitante.apellido2}","mobileColumn":false},
{"show":false,"field":"solicitante.apellido2","title":"Apellido2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.nombre1","title":"Nombre1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.nombre2","title":"Nombre2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.nivelAcademico","title":"NivelAcademico","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.fechaNacimiento","title":"FechaNacimiento","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"solicitante.direccionResidencia","title":"DireccionResidencia","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.telefono","title":"Telefono","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.telefono2","title":"Telefono2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.religion","title":"Religion","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.tipoDocumento","title":"TipoDocumento","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.noDocumento","title":"NoDocumento","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.nacionalidad","title":"Nacionalidad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.lugarNacimientoDepartamento","title":"LugarNacimientoDepartamento","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.lugarNacimientoMunicipio","title":"LugarNacimientoMunicipio","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.lugarExpedicionMunicipio","title":"LugarExpedicionMunicipio","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.lugarExpedicionDepartamento","title":"LugarExpedicionDepartamento","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.paisDomicilio","title":"PaisDomicilio","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.barrio","title":"Barrio","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.codigoPostal","title":"CodigoPostal","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.municipio","title":"Municipio","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.departamento","title":"Departamento","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.saludPrepagada","title":"SaludPrepagada","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.eps","title":"Eps","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.numeroContratoSalud","title":"NumeroContratoSalud","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.clinicaEmergencia","title":"ClinicaEmergencia","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.viveCon","title":"ViveCon","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.tipoSangre","title":"TipoSangre","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.sexo","title":"Sexo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.codigoFamilia","title":"CodigoFamilia","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.fechaIngreso","title":"FechaIngreso","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"solicitante.gradoIngreso","title":"GradoIngreso","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.cursoIngreso","title":"CursoIngreso","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.fechaRetiro","title":"FechaRetiro","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"solicitante.comentarioRetiro","title":"ComentarioRetiro","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.colegioAnterior","title":"ColegioAnterior","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.hijoDeExalumno","title":"HijoDeExalumno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.nombrePadreExalumno","title":"NombrePadreExalumno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.promocion","title":"Promocion","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.numeroTarjetaCredito","title":"NumeroTarjetaCredito","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.profesion","title":"Profesion","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.empresa","title":"Empresa","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.cargo","title":"Cargo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.celular","title":"Celular","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.direccionOficina","title":"DireccionOficina","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.telefonoOficina","title":"TelefonoOficina","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.parentesco","title":"Parentesco","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.rutaM","title":"RutaM","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.rutaT","title":"RutaT","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.tomaAlmuerzo","title":"TomaAlmuerzo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.tomaMediasNueves","title":"TomaMediasNueves","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.tomaSeguroAccidentes","title":"TomaSeguroAccidentes","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.noPlaqueta","title":"NoPlaqueta","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"solicitante.inscAlumCursoIdInscAlumCurso","title":"InscAlumCursoIdInscAlumCurso","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.idPersona","title":"IdPersona","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.nombreLdap","title":"NombreLdap","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.clave","title":"Clave","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.codigo","title":"Codigo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.email","title":"Email","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.matriculado","title":"Matriculado","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.activoRetirado","title":"ActivoRetirado","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"referenciado.apellido1","title":"Tramite para","width":"100%","align":"left","formatFunc":"","expression":"${referenciado.nombre1}+\" \"+\n${referenciado.nombre2}+\" \"+\n${referenciado.apellido1}+\" \"+\n${referenciado.apellido2}","mobileColumn":false},
{"show":false,"field":"referenciado.apellido2","title":"Apellido2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.nombre1","title":"Nombre1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.nombre2","title":"Nombre2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.nivelAcademico","title":"NivelAcademico","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.fechaNacimiento","title":"FechaNacimiento","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"referenciado.direccionResidencia","title":"DireccionResidencia","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.telefono","title":"Telefono","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.telefono2","title":"Telefono2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.religion","title":"Religion","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.tipoDocumento","title":"TipoDocumento","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.noDocumento","title":"NoDocumento","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.nacionalidad","title":"Nacionalidad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.lugarNacimientoDepartamento","title":"LugarNacimientoDepartamento","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.lugarNacimientoMunicipio","title":"LugarNacimientoMunicipio","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.lugarExpedicionMunicipio","title":"LugarExpedicionMunicipio","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.lugarExpedicionDepartamento","title":"LugarExpedicionDepartamento","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.paisDomicilio","title":"PaisDomicilio","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.barrio","title":"Barrio","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.codigoPostal","title":"CodigoPostal","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.municipio","title":"Municipio","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.departamento","title":"Departamento","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.saludPrepagada","title":"SaludPrepagada","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.eps","title":"Eps","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.numeroContratoSalud","title":"NumeroContratoSalud","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.clinicaEmergencia","title":"ClinicaEmergencia","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.viveCon","title":"ViveCon","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.tipoSangre","title":"TipoSangre","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.sexo","title":"Sexo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.codigoFamilia","title":"CodigoFamilia","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.fechaIngreso","title":"FechaIngreso","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"referenciado.gradoIngreso","title":"GradoIngreso","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.cursoIngreso","title":"CursoIngreso","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.fechaRetiro","title":"FechaRetiro","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"referenciado.comentarioRetiro","title":"ComentarioRetiro","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.colegioAnterior","title":"ColegioAnterior","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.hijoDeExalumno","title":"HijoDeExalumno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.nombrePadreExalumno","title":"NombrePadreExalumno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.promocion","title":"Promocion","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.numeroTarjetaCredito","title":"NumeroTarjetaCredito","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.profesion","title":"Profesion","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.empresa","title":"Empresa","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.cargo","title":"Cargo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.celular","title":"Celular","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.direccionOficina","title":"DireccionOficina","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.telefonoOficina","title":"TelefonoOficina","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.parentesco","title":"Parentesco","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.rutaM","title":"RutaM","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.rutaT","title":"RutaT","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.tomaAlmuerzo","title":"TomaAlmuerzo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.tomaMediasNueves","title":"TomaMediasNueves","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.tomaSeguroAccidentes","title":"TomaSeguroAccidentes","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.noPlaqueta","title":"NoPlaqueta","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"referenciado.inscAlumCursoIdInscAlumCurso","title":"InscAlumCursoIdInscAlumCurso","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"No. Tramite: \" + ${id_tramite} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha: \" + ${wm.runtimeId}.formatCell(\"fecha_tramite\", ${fecha_tramite}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Hora: \" + ${wm.runtimeId}.formatCell(\"hora_tramite\", ${hora_tramite}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Tramite: \" + ${tramiteTipoTramite.tramite}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Solicitante: \" + ${wm.runtimeId}.formatCell(\"solicitante.apellido1\", ${solicitante.apellido1}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Tramite para: \" + ${wm.runtimeId}.formatCell(\"referenciado.apellido1\", ${referenciado.apellido1}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_desarrollo.data.Tramite","height":"100%","margin":"4","minDesktopHeight":60,"styles":{"fontSize":"12px"}}, {"onCellDblClick":"tramiteLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"tramiteLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
tramiteGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
tramiteNewButton: ["wm.Button", {"_classes":{"domNode":["Green"]},"caption":"Nuevo","margin":"4","styles":{}}, {"onclick":"tramiteLivePanel1.popupLivePanelInsert"}],
tramiteUpdateButton: ["wm.Button", {"_classes":{"domNode":["Green"]},"caption":"Actualizar","margin":"4","styles":{}}, {"onclick":"tramiteLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"tramiteDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
tramiteDeleteButton: ["wm.Button", {"_classes":{"domNode":["red"]},"caption":"Borrar","margin":"4","styles":{}}, {"onclick":"tramiteLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"tramiteDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}],
pendientes_autorizacion: ["wm.Panel", {"height":"50%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel8: ["wm.Panel", {"_classes":{"domNode":["red"]},"height":"40px","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#ededed"},"verticalAlign":"top","width":"100%"}, {}, {
Solicitud_de_Tramite1: ["wm.Label", {"caption":"Autorizaciones","height":"100%","padding":"4","styles":{"fontSize":"15px"},"width":"359px"}, {}]
}],
autorizacion: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
tramiteautorizacionesLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"tramiteautorizacionesDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"tramiteautorizacionesLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"tramiteautorizacionesDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"tramiteautorizacionesSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
tramiteautorizacionesDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idAutorizacion","title":"IdAutorizacion","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"personaIdPersona","title":"PersonaIdPersona","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"aprobacion","title":"Aprobado","width":"80px","align":"center","formatFunc":"","mobileColumn":false},
{"show":false,"field":"comentario","title":"Comentario","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fechaCreacion","title":"Fecha Creación","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"fechaActualizacion","title":"FechaActualizacion","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"tramite.id_tramite","title":"Id_tramite","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tramite.fecha_tramite","title":"Fecha_tramite","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"tramite.hora_tramite","title":"Hora_tramite","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"tramite.fecha_esperada","title":"Fecha_esperada","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"tramite.fecha_entrega","title":"Fecha_entrega","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"tramite.url_file","title":"Url_file","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tramite.comentarios","title":"Comentarios","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tramite.fecha_creacion","title":"Fecha_creacion","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"tramite.fecha_modificacion","title":"Fecha_modificacion","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"IdAutorizacion: \" + ${idAutorizacion} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Aprobado: \" + ${aprobacion}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha Creación: \" + ${wm.runtimeId}.formatCell(\"fechaCreacion\", ${fechaCreacion}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"tramite.tramiteTipoTramite.idTipoTramite","title":"Tramite.tramiteTipoTramite.idTipoTramite","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":false,"field":"tramite.tramiteTipoTramite.tramite","title":"Tramite.tramiteTipoTramite.tramite","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.tramiteTipoTramite.disponibleUi","title":"Tramite.tramiteTipoTramite.disponibleUi","width":"100%","displayType":"CheckBox","align":"left","formatFunc":""},
{"show":false,"field":"tramite.tramiteTipoTramite.fechaCreacion","title":"Tramite.tramiteTipoTramite.fechaCreacion","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},
{"show":false,"field":"tramite.tramiteTipoTramite.fechaActualizacion","title":"Tramite.tramiteTipoTramite.fechaActualizacion","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},
{"show":false,"field":"tramite.referenciado.idPersona","title":"Tramite.referenciado.idPersona","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":false,"field":"tramite.referenciado.nombreLdap","title":"Tramite.referenciado.nombreLdap","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.clave","title":"Tramite.referenciado.clave","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.codigo","title":"Tramite.referenciado.codigo","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.email","title":"Tramite.referenciado.email","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.matriculado","title":"Tramite.referenciado.matriculado","width":"100%","displayType":"CheckBox","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.activoRetirado","title":"Tramite.referenciado.activoRetirado","width":"100%","displayType":"CheckBox","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.apellido1","title":"Tramite.referenciado.apellido1","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.apellido2","title":"Tramite.referenciado.apellido2","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.nombre1","title":"Tramite.referenciado.nombre1","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.nombre2","title":"Tramite.referenciado.nombre2","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.nivelAcademico","title":"Tramite.referenciado.nivelAcademico","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.fechaNacimiento","title":"Tramite.referenciado.fechaNacimiento","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},
{"show":false,"field":"tramite.referenciado.direccionResidencia","title":"Tramite.referenciado.direccionResidencia","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.telefono","title":"Tramite.referenciado.telefono","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.telefono2","title":"Tramite.referenciado.telefono2","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.religion","title":"Tramite.referenciado.religion","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.tipoDocumento","title":"Tramite.referenciado.tipoDocumento","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.noDocumento","title":"Tramite.referenciado.noDocumento","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.nacionalidad","title":"Tramite.referenciado.nacionalidad","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.lugarNacimientoDepartamento","title":"Tramite.referenciado.lugarNacimientoDepartamento","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.lugarNacimientoMunicipio","title":"Tramite.referenciado.lugarNacimientoMunicipio","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.lugarExpedicionMunicipio","title":"Tramite.referenciado.lugarExpedicionMunicipio","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.lugarExpedicionDepartamento","title":"Tramite.referenciado.lugarExpedicionDepartamento","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.paisDomicilio","title":"Tramite.referenciado.paisDomicilio","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.barrio","title":"Tramite.referenciado.barrio","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.codigoPostal","title":"Tramite.referenciado.codigoPostal","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.municipio","title":"Tramite.referenciado.municipio","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.departamento","title":"Tramite.referenciado.departamento","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.saludPrepagada","title":"Tramite.referenciado.saludPrepagada","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.eps","title":"Tramite.referenciado.eps","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.numeroContratoSalud","title":"Tramite.referenciado.numeroContratoSalud","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.clinicaEmergencia","title":"Tramite.referenciado.clinicaEmergencia","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.viveCon","title":"Tramite.referenciado.viveCon","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.tipoSangre","title":"Tramite.referenciado.tipoSangre","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.sexo","title":"Tramite.referenciado.sexo","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.codigoFamilia","title":"Tramite.referenciado.codigoFamilia","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.fechaIngreso","title":"Tramite.referenciado.fechaIngreso","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},
{"show":false,"field":"tramite.referenciado.gradoIngreso","title":"Tramite.referenciado.gradoIngreso","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.cursoIngreso","title":"Tramite.referenciado.cursoIngreso","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.fechaRetiro","title":"Tramite.referenciado.fechaRetiro","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},
{"show":false,"field":"tramite.referenciado.comentarioRetiro","title":"Tramite.referenciado.comentarioRetiro","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.colegioAnterior","title":"Tramite.referenciado.colegioAnterior","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.hijoDeExalumno","title":"Tramite.referenciado.hijoDeExalumno","width":"100%","displayType":"CheckBox","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.nombrePadreExalumno","title":"Tramite.referenciado.nombrePadreExalumno","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.promocion","title":"Tramite.referenciado.promocion","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.numeroTarjetaCredito","title":"Tramite.referenciado.numeroTarjetaCredito","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.profesion","title":"Tramite.referenciado.profesion","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.empresa","title":"Tramite.referenciado.empresa","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.cargo","title":"Tramite.referenciado.cargo","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.celular","title":"Tramite.referenciado.celular","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.direccionOficina","title":"Tramite.referenciado.direccionOficina","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.telefonoOficina","title":"Tramite.referenciado.telefonoOficina","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.parentesco","title":"Tramite.referenciado.parentesco","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.rutaM","title":"Tramite.referenciado.rutaM","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.rutaT","title":"Tramite.referenciado.rutaT","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.tomaAlmuerzo","title":"Tramite.referenciado.tomaAlmuerzo","width":"100%","displayType":"CheckBox","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.tomaMediasNueves","title":"Tramite.referenciado.tomaMediasNueves","width":"100%","displayType":"CheckBox","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.tomaSeguroAccidentes","title":"Tramite.referenciado.tomaSeguroAccidentes","width":"100%","displayType":"CheckBox","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.noPlaqueta","title":"Tramite.referenciado.noPlaqueta","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"tramite.referenciado.inscAlumCursoIdInscAlumCurso","title":"Tramite.referenciado.inscAlumCursoIdInscAlumCurso","width":"80px","displayType":"Number","align":"right","formatFunc":""}
],"dsType":"com.aprendoz_desarrollo.data.TramiteAutorizaciones","height":"100%","margin":"4","minDesktopHeight":60}, {"onCellDblClick":"tramiteautorizacionesLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"tramiteautorizacionesLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
tramiteautorizacionesGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
tramiteautorizacionesNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"tramiteautorizacionesLivePanel1.popupLivePanelInsert"}],
tramiteautorizacionesUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"tramiteautorizacionesLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"tramiteautorizacionesDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
tramiteautorizacionesDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"tramiteautorizacionesLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"tramiteautorizacionesDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
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
.Main .Main-pictureSettings{\
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