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
events: json
});
$('#main_schedule_page_container_schedule_schedule_builder_container').fullCalendar( 'refetchEvents');
},
detallesClick: function(calEvent, jsEvent, view) {
var id= calEvent.id;
console.log("idactividad -->"+id);
$(this).css('border-color', '#c0392b');
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
_end: 0
});

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
loadingDialog1: ["wm.LoadingDialog", {"caption":"Generando calendario...","serviceVariableToTrack":["activitiesServiceVar","details_activities_estudent","parents_global_currentSy2"]}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"schedule_main_panel","targetProperty":"widgetToCover"}, {}]
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
};

Schedule.prototype._cssText = '#main_schedule_page_container_schedule_schedule_builder_container {\
overflow-y: scroll !important;\
background- color: #fff;\
margin-top: 6px !important;\
}\
';
Schedule.prototype._htmlText = '';