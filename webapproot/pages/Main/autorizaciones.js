		var idfamilia= main.parents_global_user_info.getItem(0).data.idFamilia;
        console.log(idfamilia);
        this.tipoTransporteLookup1.setDisplayValue("Circuito");
        this.tipoTransporteLookup1.setReadonly(true);
        //this.tipoTransporteLookup1.hide();
        main.pageContainer1.page.grupoFamiliarLivevariable.filter.setValue("idGrupoFamiliar", idfamilia);
        main.pageContainer1.page.grupoFamiliarLivevariable.update();

        transporterutasLiveVariable1
        grupoFamiliar.idGrupoFamiliar