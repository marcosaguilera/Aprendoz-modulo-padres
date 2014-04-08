dojo.declare("Schedule", wm.Page, {
	start: function() {
          
	},
	"preferredDevice": "desktop",
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
        }else{alert("Por favor seleccione un estudiante para visualizar el Calendario de Actividades.")}	
	},
	activitiesServiceVarSuccess: function(inSender, inDeprecated) {
		var now= this.today();
        var json= this.activitiesServiceVar.getData();
        var cont= this.activitiesServiceVar.getCount();
        $('#main_schedule_page_container_schedule_schedule_builder_container').fullCalendar({
            eventClick: function(calEvent, jsEvent, view) {
               /* alert('Event: ' + calEvent.title);
                alert('Event: ' + calEvent.id);
                alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
                alert('View: ' + view.name);*/
                $(this).css('border-color', '#c0392b');   
                wm.Page.getPage("Schedule").detallesClick();
            },
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
	},
	detallesClick: function(inSender) {
		var idp = wm.Page.getPage("Main").performance_family_grid.selectedItem.data.pid;
        var idsy= this.parents_global_currentSy2.getItem(0).data.idsy;
        var count= this.details_activities_estudent.getCount();
        if(count==0){
            this.details_activities_estudent.input.setValue("idp", idp);
            this.details_activities_estudent.input.setValue("idsy", idsy);
            this.details_activities_estudent.update(); 
        }else{
            //nothing happens here!
            }
        this.logActivities.show();
	},
	_end: 0
});