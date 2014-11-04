dojo.declare("Schedule", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
getIdActivity: function(pidactividad){
var idactividad= pidactividad;
console.log("p-->"+pidactividad+" -->var"+idactividad);
return idactividad;
},
fireClick: function(inSender) {
var selectedRow= wm.Page.getPage("Main").performance_family_grid.isRowSelected;
if(selectedRow== true){
var curdate = new Date().getTime();
this.parents_global_currentSy2.input.setValue("f1", curdate);
this.parents_global_currentSy2.update();
}else{alert("Por favor seleccione un estudiante para visualizar el Calendario de Actividades.")}
},
today: function(){
var date = new Date();
var yyyy = date.getFullYear().toString();
var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based
var dd  = date.getDate().toString();
return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]);
},
parents_global_currentSy2Success: function(inSender, inDeprecated) {
var idp = wm.Page.getPage("Main").performance_family_grid.selectedItem.data.pid;
var idsy= this.parents_global_currentSy2.getItem(0).data.idsy;
var selectedRow= wm.Page.getPage("Main").performance_family_grid.isRowSelected;
if(selectedRow== true){
this.activitiesServiceVar.input.setValue("idp", idp);
this.activitiesServiceVar.input.setValue("idsy", idsy);
this.activitiesServiceVar.update();
}else{
alert("Por favor seleccione un estudiante para visualizar el Calendario de Actividades.");
}
},
activitiesServiceVarSuccess: function(inSender, inDeprecated) {
var now= this.today();
var json= this.activitiesServiceVar.getData();
var cont= this.activitiesServiceVar.getCount();
//if(cont==0){alert("Lo sentimos, no tenemos actividades/tareas relacionadas con la persona seleccionada.");}else{}
var self= this;
$('#main_schedule_page_container_schedule_schedule_builder_container').fullCalendar( 'removeEventSource', json);
$('#main_schedule_page_container_schedule_schedule_builder_container').fullCalendar({
eventClick: self.detallesClick,
height: 700,
header: {
left: 'prev,next today',
center: 'title',
right: 'month,agendaWeek,agendaDay'
},
slotEventOverlap: true,
defaultDate: now,
editable: true,
events: json,
eventColor: '#378006'
});
$('#main_schedule_page_container_schedule_schedule_builder_container').fullCalendar( 'refetchEvents');
},
detallesClick: function(calEvent, jsEvent, view) {
var id= calEvent.id;
console.log("idactividad -->"+id);
$(this).css('border-color', '#c53539');
$(this).css('background-color', '#c53539');
var idp = wm.Page.getPage("Main").performance_family_grid.selectedItem.data.pid;
var idsy= wm.Page.getPage("Schedule").parents_global_currentSy2.getItem(0).data.idsy;
console.log(idsy);
var count= wm.Page.getPage("Schedule").details_activities_estudent.getCount();
wm.Page.getPage("Schedule").details_activities_estudent.input.setValue("idp", idp);
wm.Page.getPage("Schedule").details_activities_estudent.input.setValue("idsy", idsy);
wm.Page.getPage("Schedule").details_activities_estudent.input.setValue("idact", id);
wm.Page.getPage("Schedule").details_activities_estudent.update();
wm.Page.getPage("Schedule").logActivities.show();
},
details_activities_estudentSuccess: function(inSender, inDeprecated) {
var title = this.details_activities_estudent.getItem(0).data.title;
var fecha = this.details_activities_estudent.getItem(0).data.fecha;
var id = this.details_activities_estudent.getItem(0).data.id;
var actividad = this.details_activities_estudent.getItem(0).data.actividad;
var idpersona = wm.Page.getPage("Main").performance_family_grid.selectedItem.data.pid;
this.asignatura_editor.setDataValue(title);
this.fecha_editor.setDataValue(fecha);
this.no_actividad_editor.setDataValue(id);
this.descripcion_actividad.setDataValue(actividad);
this.scoreServiceVariable.input.setValue("pidpersona", idpersona);
this.scoreServiceVariable.input.setValue("pidactividad", id);
this.scoreServiceVariable.update();
},
scoreServiceVariableSuccess: function(inSender, inDeprecated) {
var count = this.scoreServiceVariable.getCount();
var comentario = main.schedule_page_container.page.scoreServiceVariable.getItem(0).data.comentario;
if( count == 0 ){
this.result.setCaption("Actividad por completar");
this.comentario.setCaption("Comentario del docente: ");
}else{
this.result.setCaption("Actividad completada");
this.comentario.setCaption("Comentario del docente: " + comentario);
}
},
_end: 0
});

Schedule.widgets = {
activitiesServiceVar: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"studentSujectActivities","service":"aprendoz_desarrollo"}, {"onSuccess":"activitiesServiceVarSuccess"}, {
input: ["wm.ServiceInput", {"type":"studentSujectActivitiesInputs"}, {}]
}],
parents_global_currentSy2: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getSyByCurDate","service":"aprendoz_desarrollo"}, {"onSuccess":"parents_global_currentSy2Success"}, {
input: ["wm.ServiceInput", {"type":"getSyByCurDateInputs"}, {}]
}],
details_activities_estudent: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"detailsActivitiesStudent","service":"aprendoz_desarrollo"}, {"onSuccess":"details_activities_estudentSuccess"}, {
input: ["wm.ServiceInput", {"type":"detailsActivitiesStudentInputs"}, {}]
}],
liveVariable1: ["wm.LiveVariable", {"inFlightBehavior":"executeLast"}, {}, {
liveView: ["wm.LiveView", {}, {}]
}],
scoreServiceVariable: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getActivityScoreByIdUser","service":"aprendoz_desarrollo"}, {"onSuccess":"scoreServiceVariableSuccess"}, {
input: ["wm.ServiceInput", {"type":"getActivityScoreByIdUserInputs"}, {}]
}],
logActivities: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"450px","height":"450px","styles":{},"title":"Detalles de Actividades y tareas","titlebarBorderColor":"#fbfbfb","titlebarHeight":"26"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"1","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
detalles_actividad: ["wm.Panel", {"height":"365px","horizontalAlign":"center","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
asignatura_editor: ["wm.Text", {"border":"0","caption":"Asignatura","captionSize":"110px","dataValue":undefined,"desktopHeight":"32px","displayValue":"","height":"32px","readonly":true,"styles":{"fontSize":"12px"},"width":"360px"}, {}],
fecha_editor: ["wm.Date", {"border":"0","caption":"Fecha","captionSize":"110px","dataValue":undefined,"desktopHeight":"32px","displayValue":"","height":"32px","readonly":true,"styles":{"fontSize":"12px"},"width":"360px"}, {}],
no_actividad_editor: ["wm.Text", {"border":"0","caption":"Código Actividad","captionSize":"110px","dataValue":undefined,"desktopHeight":"32px","displayValue":"","height":"32px","readonly":true,"styles":{"fontSize":"12px"},"width":"360px"}, {}],
descripcion_actividad: ["wm.LargeTextArea", {"border":"0","caption":"Descripción Actividad","dataValue":undefined,"desktopHeight":"163px","displayValue":"","height":"163px","mobileHeight":"100%","readonly":true,"styles":{"fontSize":"12px"},"width":"360px"}, {}],
result: ["wm.Label", {"align":"center","caption":"","height":"35px","padding":"4","styles":{"backgroundColor":"#d3d3d3"},"width":"404px"}, {}],
comentario: ["wm.Label", {"caption":"Comentario del docente:","height":"65px","padding":"4","singleLine":false,"styles":{"color":"#000000"},"width":"404px"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1","desktopHeight":"34px","height":"34px","styles":{}}, {}, {
cerrar_dialog_box: ["wm.Button", {"_classes":{"domNode":["detalles"]},"caption":"Cerrar","margin":"4","styles":{}}, {"onclick":"logActivities.hide"}]
}]
}],
loadingDialog1: ["wm.LoadingDialog", {"caption":"Generando calendario...","serviceVariableToTrack":["activitiesServiceVar","details_activities_estudent","parents_global_currentSy2"]}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"schedule_main_panel","targetProperty":"widgetToCover"}, {}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","padding":"10","styles":{"backgroundColor":"#bdc3c7"},"verticalAlign":"top"}, {}, {
schedule_main_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{"backgroundColor":"#d2c9c9"},"verticalAlign":"top","width":"100%"}, {}, {
schedule_builder: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel1: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#ecf0f1"},"verticalAlign":"middle","width":"100%"}, {}, {
detalles: ["wm.Button", {"_classes":{"domNode":["blue_bootstrap"]},"caption":"Ver detalles","desktopHeight":"43px","height":"43px","iconHeight":"24px","iconUrl":"resources/images/iconsmaster_v2/schedule.png","iconWidth":"24px","margin":"4","styles":{},"width":"155px"}, {"onclick":"detallesClick"}],
fire: ["wm.Button", {"caption":"fire_button","margin":"4","showing":false}, {"onclick":"fireClick"}]
}],
schedule_builder_container: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}]
}]
}]
}]
};

Schedule.prototype._cssText = '#main_schedule_page_container_schedule_schedule_builder_container {\
overflow-y: scroll !important;\
background- color: #fff;\
margin-top: 6px !important;\
}\
';
Schedule.prototype._htmlText = '';