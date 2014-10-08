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
        
        this.asignatura_editor.setDataValue(title);
        this.fecha_editor.setDataValue(fecha);
        this.no_actividad_editor.setDataValue(id);
        this.descripcion_actividad.setDataValue(actividad);
	},
	_end: 0
});