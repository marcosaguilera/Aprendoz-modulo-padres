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
        var idpersona= this.performance_family_grid.selectedItem.data.pid;
        var ideducom = this.comunity_costs_grid.selectedItem.getData().id;
        var idsy=5;
        var json= main.parents_global_currentSy.getItem(0);
        var idsy= json.data.idsy;
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
    
});