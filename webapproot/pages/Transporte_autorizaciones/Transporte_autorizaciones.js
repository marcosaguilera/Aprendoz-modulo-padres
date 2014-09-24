dojo.declare("Transporte_autorizaciones", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	transporterutasLiveForm1BeginInsert: function(inSender) {
		var idfamilia= main.parents_global_user_info.getItem(0).data.idFamilia;
        console.log(idfamilia);
        this.tipoTransporteLookup1.setDisplayValue("Circuito");
        this.tipoTransporteLookup1.setReadonly(true);
        main.pageContainer1.page.grupoFamiliarLivevariable.filter.setValue("idGrupoFamiliar", idfamilia);
        main.pageContainer1.page.grupoFamiliarLivevariable.update();
	},
	transporterutasLiveForm1BeginUpdate: function(inSender) {
		var idfamilia= main.parents_global_user_info.getItem(0).data.idFamilia;
        console.log(idfamilia);
        this.tipoTransporteLookup1.setDisplayValue("Circuito");
        this.tipoTransporteLookup1.setReadonly(true);
        main.pageContainer1.page.grupoFamiliarLivevariable.filter.setValue("idGrupoFamiliar", idfamilia);
        main.pageContainer1.page.grupoFamiliarLivevariable.update();
	},
	_end: 0
});