!function(){function a(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function t(a,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{EViX:function(i,e,n){"use strict";n.r(e),n.d(e,"InputKirimBarangModule",function(){return L});var r=n("ofXK"),o=n("tyNb"),s=n("7zfz"),l=n("wd/R"),u=n("fXoL"),d=n("EJUL"),h=n("U+s4"),m=n("G0w9"),b=n("ujBT"),g=n("7CaW"),c=n("3Pt+"),p=n("7kUa"),k=n("eO1q"),f=n("arFO"),v=n("V5BG"),P=n("Ks7X"),S=n("jIHw"),Q=n("xlun"),y=n("rEr+");function K(a,t){if(1&a&&(u.Qb(0,"th"),u.Jc(1),u.Pb()),2&a){var i=t.$implicit;u.Fc("width: ",i.width,""),u.xb(1),u.Lc(" ",i.header," ")}}function j(a,t){if(1&a&&(u.Qb(0,"tr"),u.Lb(1,"th",34),u.Hc(2,K,2,4,"th",35),u.Pb()),2&a){var i=t.$implicit;u.xb(2),u.ic("ngForOf",i)}}function w(a,t){if(1&a&&(u.Qb(0,"span"),u.Jc(1),u.Pb()),2&a){var i=u.bc().$implicit,e=u.bc().$implicit,n=u.bc();u.xb(1),u.Lc(" ",n.formatRupiah(e[i.field],""),"")}}function M(a,t){if(1&a&&(u.Qb(0,"span"),u.Jc(1),u.Pb()),2&a){var i=u.bc().$implicit,e=u.bc().$implicit;u.xb(1),u.Lc(" ",e[i.field],"")}}function T(a,t){if(1&a&&(u.Qb(0,"td"),u.Hc(1,w,2,1,"span",38),u.Hc(2,M,2,1,"span",38),u.Pb()),2&a){var i=t.$implicit;u.Fc("width: ",i.width,""),u.xb(1),u.ic("ngIf",null!=i.isCurrency),u.xb(1),u.ic("ngIf",null==i.isCurrency)}}function R(a,t){if(1&a){var i=u.Sb();u.Qb(0,"tr"),u.Qb(1,"td",34),u.Qb(2,"button",36),u.Yb("click",function(){u.yc(i);var a=t.$implicit;return u.bc().editD(a)}),u.Pb(),u.Qb(3,"button",37),u.Yb("click",function(){u.yc(i);var a=t.$implicit;return u.bc().hapusD(a)}),u.Pb(),u.Pb(),u.Hc(4,T,3,5,"td",35),u.Pb()}if(2&a){var e=t.columns;u.xb(4),u.ic("ngForOf",e)}}function C(a,t){if(1&a&&(u.Qb(0,"tr"),u.Qb(1,"td",39),u.Jc(2,"Grand Total : "),u.Pb(),u.Qb(3,"td"),u.Jc(4),u.Pb(),u.Pb()),2&a){var i=u.bc();u.xb(4),u.Lc(" \xa0",i.item.totalSubTotal,"")}}var x,J,D,Y=function(){return[5,10,25,50]},I=[{path:"",component:(x=function(){function i(t,e,n,r,o,s,l,u,d){a(this,i),this.apiService=t,this.authService=e,this.confirmationService=n,this.messageService=r,this.cacheHelper=o,this.dateHelper=s,this.alertService=l,this.route=u,this.router=d,this.params={},this.item={},this.listSatuan=[],this.listProduk=[],this.dataProdukDetail=[],this.columnGrid=[],this.dataSource=[],this.data2=[],this.hrg1=0,this.statusTambah=!0}var e,n,r;return e=i,(n=[{key:"ngOnInit",value:function(){this.disabledRuangan=!1,this.isSimpan=!1,this.dateNow=new Date,this.dataLogin=this.authService.getDataLoginUser(),this.kelUser=this.dataLogin.kelompokUser.kelompokUser,this.item.tglKirim=this.dateNow,this.loadColumn(),this.loadCombo(),this.firstLoad()}},{key:"formatRupiah",value:function(a,t){return t+" "+parseFloat(a).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")}},{key:"loadColumn",value:function(){this.columnGrid=[{field:"no",header:"No",width:"80px"},{field:"produkfk",header:"Kode Produk",width:"100px"},{field:"namaproduk",header:"Nama Produk",width:"180px"},{field:"asalproduk",header:"Asal Produk",width:"120px"},{field:"satuanstandar",header:"Satuan",width:"120px"},{field:"jmlstok",header:"Stok",width:"120px"},{field:"qtyorder",header:"Qty Order",width:"140px"},{field:"jumlah",header:"Qty Kirim",width:"140px"}]}},{key:"loadCombo",value:function(){var a=this;this.apiService.get("logistik/get-combo-logistik").subscribe(function(t){var i=t;a.listRuangan=null!=a.dataLogin.mapLoginUserToRuangan?a.dataLogin.mapLoginUserToRuangan:i.ruangfarmasi,a.listJenisKirim=i.jeniskirim}),this.apiService.get("logistik/get-combo-distribusi").subscribe(function(t){a.listAsalProduk=t.asalproduk})}},{key:"firstLoad",value:function(){var a=this;this.route.params.subscribe(function(t){a.params.norec_data=t.norec,a.params.jenisdata=t.jenisdata,a.jenisData=t.jenisdata,"editkirim"==a.jenisData?(a.norec_kirim=t.norec,a.norec_data=""):(a.norec_data=t.norec,a.norec_kirim=""),a.loadData()})}},{key:"loadData",value:function(){var a=this;"-"!=this.params.norec_data&&("kirimbarang"==this.jenisData?this.apiService.get("logistik/get-detail-order-barang-ruangan?norecOrder="+this.params.norec_data).subscribe(function(t){var i=t.head,e=t.detail;a.item.tglKirim=l(a.dateNow).format("YYYY-MM-DD HH:mm"),a.item.dataJenisKirim={id:i.jeniskirimfk,jeniskirim:i.jeniskirim},a.item.ruangan={id:i.objectruangantujuanfk,namaruangan:i.namaruangantujuan},a.listRuanganAll=[{id:i.objectruanganasalfk,namaruangan:i.namaruanganasal}],a.item.dataRuanganAll={id:i.objectruanganasalfk,namaruangan:i.namaruanganasal},a.item.keteranganKirim=i.keteranganorder,a.data2=e;for(var n=0,r=0;r<a.data2.length;r++){var o=a.data2[r];o.no=r+1,null==o.nilaikonversi&&(o.nilaikonversi=1),n+=parseFloat(o.total)}a.dataSource=a.data2,a.item.totalSubTotal=a.formatRupiah(n,"Rp."),a.disabledRuangan=!0}):"editkirim"==this.jenisData&&this.apiService.get("logistik/get-detail-kirim-barang-ruangan?norec="+this.params.norec_data).subscribe(function(t){var i=t.head,e=t.detail;a.item.nomorKirim=i.nokirim,a.item.tglKirim=l(a.dateNow).format("YYYY-MM-DD HH:mm"),a.item.dataJenisKirim={id:i.jeniskirimfk,jeniskirim:i.jeniskirim},a.item.ruangan={id:i.ruanganidfk,namaruangan:i.namaruanganasal},a.listRuanganAll=[{id:i.ruangantujuanidfk,namaruangan:i.namaruangantujuan}],a.item.dataRuanganAll={id:i.ruangantujuanidfk,namaruangan:i.namaruangantujuan},a.item.keteranganKirim=i.keterangan,a.data2=e;for(var n=0,r=0;r<a.data2.length;r++){var o=a.data2[r];o.no=r+1,null==o.nilaikonversi&&(o.nilaikonversi=1),n+=parseFloat(o.total)}a.dataSource=a.data2,a.item.totalSubTotal=a.formatRupiah(n,"Rp."),a.disabledRuangan=!0}))}},{key:"filterRuangan",value:function(a){var t=this;this.apiService.get("general/get-data-combo-ruangan-part?namaruangan="+a.query).subscribe(function(a){t.listRuanganAll=a})}},{key:"filterProduk",value:function(a){var t=this;this.apiService.get("logistik/get-produk-distribusi?namaproduk="+a.query).subscribe(function(a){t.listProduk=a})}},{key:"getSatuan",value:function(){null!=this.item.produk.id&&this.GETKONVERSI()}},{key:"GETKONVERSI",value:function(){var a=this;this.listSatuan=this.item.produk.konversisatuan,0==this.listSatuan.length&&(this.listSatuan=[{ssid:this.item.produk.ssid,satuanstandar:this.item.produk.satuanstandar}]),this.item.satuan={ssid:this.item.produk.ssid,satuanstandar:this.item.produk.satuanstandar},this.item.nilaiKonversi=1,null!=this.item.ruangan&&(this.statusTambah=!1,this.apiService.get("general/get-produkdetail-general?produkfk="+this.item.produk.id+"&ruanganfk="+this.item.ruangan.id).subscribe(function(t){a.dataProdukDetail=t.detail,a.item.stok=t.jmlstok/a.item.nilaiKonversi,a.onChangeKonversi(),a.dataProdukDetail.length>0&&(a.tglkadaluarsa=l(a.dataProdukDetail[0].tglkadaluarsa).format("YYYY-MM-DD HH:mm"),a.listAsalProduk=[{id:a.dataProdukDetail[0].objectasalprodukfk,asalproduk:a.dataProdukDetail[0].asalproduk}],a.item.asal=a.listAsalProduk[0],null!=a.dataSelected&&(a.item.nilaiKonversi=a.dataSelected.nilaikonversi,a.item.jumlah=a.dataSelected.jumlah,a.item.jumlahOrder=a.dataSelected.qtyorder,a.item.hargaSatuan=a.dataSelected.hargasatuan,a.item.harganetto=a.dataSelected.harganetto,a.item.hargaTotal=a.dataSelected.total,a.item.hargadiskon=0)),a.statusTambah=!0,a.gettotal()}))}},{key:"onChangeKonversi",value:function(){this.item.stok>0&&(this.item.stok=parseFloat(this.item.stok)*parseFloat(this.item.nilaiKonversi),this.item.jumlah=1,this.item.jumlahOrder=0,this.item.hargaSatuan=0,this.item.harganetto=0,this.item.hargaTotal=0,this.item.hargadiskon=0)}},{key:"getNilaiKonversi",value:function(){this.item.nilaiKonversi=this.item.satuan.nilaikonversi}},{key:"onChangeQty",value:function(a){this.item.jumlah=a.value,this.gettotal()}},{key:"gettotal",value:function(){for(var a=!1,t=0;t<this.dataProdukDetail.length;t++)if(a=!1,this.item.jumlah*parseFloat(this.item.nilaiKonversi)>0){this.hrg1=Math.round(parseFloat(this.dataProdukDetail[t].hargajual)*parseFloat(this.item.nilaiKonversi)),this.item.hargaSatuan=parseFloat(this.hrg1),this.item.harganetto=this.dataProdukDetail[t].harganetto,this.item.hargaTotal=this.item.jumlah*this.hrg1,this.item.hargadiskon=0,this.noTerima=this.dataProdukDetail[t].norec,a=!0;break}0==a&&(this.item.hargaSatuan=0,this.item.total=0,this.noTerima=""),0==this.item.jumlah&&(this.item.hargaSatuan=0,this.item.harganetto=0)}},{key:"Kosongkan",value:function(){this.dataSelected=void 0,delete this.item.produk,delete this.item.satuan,delete this.item.nilaiKonversi,this.item.no=void 0,this.item.stok=0,this.hrg1=0,this.item.jumlah=0,this.item.jumlahOrder=0,this.item.hargaSatuan=0,this.item.harganetto=0,this.item.hargadiskon=0,this.item.total=0,this.item.hargaTotal=0,this.noTerima=void 0,this.tglkadaluarsa=void 0,this.listAsalProduk=void 0,this.item.asal=void 0}},{key:"batal",value:function(){this.Kosongkan()}},{key:"editD",value:function(a){var t=this;if(0!=this.statusTambah){var i=[];this.dataSelected=a,this.item.no=a.no,this.item.asal={id:a.asalprodukfk,asalproduk:a.asalproduk},this.apiService.get("logistik/get-produk-distribusi?idproduk="+a.produkfk).subscribe(function(e){t.listProduk=e;for(var n=t.listProduk.length-1;n>=0;n--)if(t.listProduk[n].id==a.produkfk){i=t.listProduk[n];break}t.item.produk=i,t.GETKONVERSI()})}}},{key:"hapusD",value:function(a){for(var t=this.data2.length-1;t>=0;t--)if(this.data2[t].no==a.no){this.data2.splice(t,1);var i=0,e=0;for(t=this.data2.length-1;t>=0;t--)i+=parseFloat(this.data2[t].total),e+=t,this.data2[t].no=t+1;this.dataSource=this.data2,this.item.totalSubTotal=this.formatRupiah(i,"Rp."),this.item.TotalItem=parseFloat(e)}this.Kosongkan()}},{key:"batalGrid",value:function(){this.Kosongkan(),this.data2=[],this.dataSource=void 0,this.isSimpan=!1}},{key:"Kembali",value:function(){window.history.back()}},{key:"tambah",value:function(){if(0!=this.statusTambah)if(null!=this.item.dataRuanganAll)if(null!=this.item.produk)if(null!=this.item.satuan)if(0!=this.item.jumlah)if(0!=parseFloat(this.item.stok))if(this.item.jumlah>parseFloat(this.item.stok))this.alertService.error("Info","Jumlah Order Melebihi Stok!");else{if(""==this.noTerima)return this.item.jumlah=0,void this.alertService.error("Info","Jumlah harus di isi!");var a;a=null==this.dataSource?1:this.data2.length+1;var t={};if(this.disabledRuangan=!0,null!=this.item.no){for(var i=this.data2.length-1;i>=0;i--)if(this.data2[i].no==this.item.no){t.no=this.item.no,t.hargajual=String(this.item.hargaSatuan),t.jenisobatfk=null,t.stock=String(this.item.stok),t.harganetto=String(this.item.harganetto),t.nostrukterimafk=this.noTerima,t.ruanganfk=this.item.ruangan.id,t.asalprodukfk=this.item.asal.id,t.asalproduk=this.item.asal.asalproduk,t.produkfk=this.item.produk.id,t.kdproduk=this.item.produk.id,t.namaproduk=this.item.produk.namaproduk,t.nilaikonversi=this.item.nilaiKonversi,t.satuanstandarfk=this.item.satuan.ssid,t.satuanstandar=this.item.satuan.satuanstandar,t.satuanviewfk=this.item.satuan.ssid,t.satuanview=this.item.satuan.satuanstandar,t.jmlstok=String(this.item.stok),t.jumlah=this.item.jumlah,t.qtyorder=null!=this.item.jumlahOrder?this.item.jumlahOrder:0,t.hargasatuan=String(this.item.hargaSatuan),t.hargadiscount=String(this.item.hargadiskon),t.total=this.item.hargaTotal,this.data2[i]=t,this.dataSource=this.data2;var e=0,n=0;for(i=this.data2.length-1;i>=0;i--)e+=parseFloat(this.data2[i].total),n+=i;this.item.totalSubTotal=this.formatRupiah(e,"Rp."),this.item.TotalItem=parseFloat(n)}}else{t={no:a,hargajual:String(this.item.hargaSatuan),jenisobatfk:null,stock:String(this.item.stok),harganetto:String(this.item.harganetto),nostrukterimafk:this.noTerima,ruanganfk:this.item.ruangan.id,asalprodukfk:this.item.asal.id,asalproduk:this.item.asal.asalproduk,produkfk:this.item.produk.id,kdproduk:this.item.produk.id,namaproduk:this.item.produk.namaproduk,nilaikonversi:this.item.nilaiKonversi,satuanstandarfk:this.item.satuan.ssid,satuanstandar:this.item.satuan.satuanstandar,satuanviewfk:this.item.satuan.ssid,satuanview:this.item.satuan.satuanstandar,jmlstok:String(this.item.stok),jumlah:this.item.jumlah,qtyorder:null!=this.item.jumlahOrder?this.item.jumlahOrder:0,hargasatuan:String(this.item.hargaSatuan),hargadiscount:String(this.item.hargadiskon),total:this.item.hargaTotal},this.data2.push(t),this.dataSource=this.data2;var r=0;for(n=0,i=this.data2.length-1;i>=0;i--)r+=parseFloat(this.data2[i].total),n+=i;this.item.totalSubTotal=this.formatRupiah(r,"Rp."),this.item.TotalItem=parseFloat(n)}this.Kosongkan()}else this.alertService.error("Info","Stok tidak ada!");else this.alertService.error("Info","Jumlah harus di isi!");else this.alertService.error("Info","Pilih Satuan terlebih dahulu!!");else this.alertService.error("Info","Pilih Produk terlebih dahulu!!");else this.alertService.error("Info","Data Ruangan Tujuan Masih Kosong!")}},{key:"save",value:function(){var a=this;if(null!=this.item.ruangan)if(null!=this.item.dataRuanganAll)if(null!=this.item.dataJenisKirim)if(null!=this.item.keteranganKirim)if(0!=this.data2.length){this.isSimpan=!0;var t="Kirim Barang";null==this.item.keteranganKirim&&""==this.item.keteranganKirim||(t=this.item.keteranganKirim);var i={objectpegawaipengirimfk:this.dataLogin.pegawai.id,objectruanganfk:this.item.ruangan.id,objectruangantujuanfk:this.item.dataRuanganAll.id,jenispermintaanfk:this.item.dataJenisKirim.id,keteranganlainnyakirim:t,qtydetailjenisproduk:0,qtyproduk:this.data2.length,tglkirim:l(this.item.tglKirim).format("YYYY-MM-DD HH:mm:ss"),totalhargasatuan:0,norecOrder:this.norec_data,noreckirim:this.norec_kirim,norec_apd:0};this.apiService.post("logistik/save-kirim-barang-ruangan",{strukkirim:i,details:this.data2}).subscribe(function(t){a.apiService.postLog("Simpan Kirim Barang Ruangan","Norec transaksikirim",t.data.norec,"Simpan Kirim Barang Ruangan Dengan Noorder - "+t.data.nokirim).subscribe(function(a){}),a.Kosongkan(),a.data2=[],a.dataSource=void 0,window.history.back()})}else alert("Pilih Produk terlebih dahulu!!");else alert("Keterangan Tidak Boleh Kosong!!");else alert("Pilih Jenis Kiriman!!");else this.alertService.error("Info","Pilih Ruanganan Pengorder!");else this.alertService.error("Info","Pilih Ruanganan Pengirim!")}}])&&t(e.prototype,n),r&&t(e,r),i}(),x.\u0275fac=function(a){return new(a||x)(u.Jb(d.a),u.Jb(d.b),u.Jb(s.a),u.Jb(s.h),u.Jb(h.a),u.Jb(m.a),u.Jb(b.a),u.Jb(o.a),u.Jb(o.f))},x.\u0275cmp=u.Db({type:x,selectors:[["app-input-kirim-barang"]],features:[u.wb([s.a])],decls:78,vars:45,consts:[[1,"p-fluid","p-formgrid"],[1,"card","card-w-title"],[1,"p-grid"],[1,"p-col-12","p-md-3"],["header","Data Order",3,"toggleable"],[1,"p-col-12","p-md-12"],["for","input",1,"label"],["type","text","pInputText","","placeholder","Nomor Kirim","disabled","",3,"ngModel","ngModelChange"],["yearRange","1980:2030","dateFormat","yy-mm-dd","placeholder","Tgl Kirim","hourFormat","24",3,"ngModel","showIcon","monthNavigator","yearNavigator","showTime","maxDate","ngModelChange"],["placeholder","Jenis Kirim","optionLabel","jeniskirim","dataKey","id",3,"options","ngModel","filter","showClear","ngModelChange"],["placeholder","Ruangan ","optionLabel","namaruangan","dataKey","id",3,"options","ngModel","filter","showClear","disabled","ngModelChange"],["field","namaruangan","placeholder","Pilih Ruangan",3,"ngModel","suggestions","dropdown","disabled","ngModelChange","completeMethod"],["type","text","pInputText","","placeholder","Keterangan Kirm",3,"ngModel","ngModelChange"],[1,"p-col-12","p-md-9"],["header","Detail Order",3,"toggleable"],[1,"p-col-12","p-md-6"],["field","namaproduk","placeholder","Pilih Produk",3,"ngModel","suggestions","dropdown","ngModelChange","completeMethod","onSelect"],[1,"p-col-12","p-md-2"],["placeholder","Satuan ","optionLabel","satuanstandar","dataKey","id",3,"options","ngModel","filter","showClear","ngModelChange","onChange"],["type","text","pInputText","","placeholder","Stok",3,"ngModel","ngModelChange"],[1,"p-col-12","p-md-1"],["placeholder","Qty","inputId","stacked","disabled","",3,"ngModel","showButtons","ngModelChange"],["placeholder","Qty","inputId","stacked",3,"ngModel","showButtons","ngModelChange","onInput"],[1,"p-col-12","p-md-2","p-md-offset-8"],["pButton","","type","button","icon","pi pi-plus","pTooltip","Tambah","label","Tambah",1,"p-button","p-button-success","p-mr-2",3,"disabled","click"],["pButton","","type","button","icon","pi pi-refresh","pTooltip","Batal","label","Batal",1,"p-button","p-button-warning","p-mr-2",3,"click"],["styleClass","p-datatable-customers","scrollable","true","dataKey","no",3,"value","columns","rows","showCurrentPageReport","rowsPerPageOptions","paginator","pageLinks"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],[1,"p-col-12","p-md-2","p-md-offset-6"],["pButton","","type","button","icon","pi pi-save","pTooltip","Simpan Data","label","Simpan",1,"p-button","p-mr-2",3,"disabled","click"],["pButton","","type","button","icon","pi pi-refresh","pTooltip","Batal","label","Reset",1,"p-button","p-button-danger","p-mr-2",3,"click"],["pButton","","type","button","icon","fa fa-arrow-left","pTooltip","Kembali","label","Kembali",1,"p-button","p-button-danger","p-mr-2",3,"click"],[2,"width","80px"],[3,"style",4,"ngFor","ngForOf"],["pButton","","type","button","icon","pi pi-user-edit","pTooltip","Edit Data","label","",1,"p-button-rounded","p-mr-2",3,"click"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Hapus Data","label","",1,"p-button-rounded","p-button-danger","p-mr-2",3,"click"],[4,"ngIf"],["rowspan","6"]],template:function(a,t){1&a&&(u.Qb(0,"div",0),u.Qb(1,"div",1),u.Qb(2,"h4"),u.Jc(3,"Kirim Barang Ruangan"),u.Pb(),u.Qb(4,"div",2),u.Qb(5,"div",3),u.Qb(6,"p-panel",4),u.Qb(7,"div",5),u.Qb(8,"div",2),u.Qb(9,"div",5),u.Qb(10,"label",6),u.Jc(11,"Nomor Kirim"),u.Pb(),u.Qb(12,"input",7),u.Yb("ngModelChange",function(a){return t.item.nomorKirim=a}),u.Pb(),u.Pb(),u.Qb(13,"div",5),u.Qb(14,"label",6),u.Jc(15,"Tgl Kirim"),u.Pb(),u.Qb(16,"p-calendar",8),u.Yb("ngModelChange",function(a){return t.item.tglKirim=a}),u.Pb(),u.Pb(),u.Qb(17,"div",5),u.Qb(18,"label",6),u.Jc(19,"Jenis Kirim"),u.Pb(),u.Qb(20,"p-dropdown",9),u.Yb("ngModelChange",function(a){return t.item.dataJenisKirim=a}),u.Pb(),u.Pb(),u.Qb(21,"div",5),u.Qb(22,"label",6),u.Jc(23,"Ruangan Pengirim"),u.Pb(),u.Qb(24,"p-dropdown",10),u.Yb("ngModelChange",function(a){return t.item.ruangan=a}),u.Pb(),u.Pb(),u.Qb(25,"div",5),u.Qb(26,"label",6),u.Jc(27,"Ruangan Order"),u.Pb(),u.Qb(28,"p-autoComplete",11),u.Yb("ngModelChange",function(a){return t.item.dataRuanganAll=a})("completeMethod",function(a){return t.filterRuangan(a)}),u.Pb(),u.Pb(),u.Qb(29,"div",5),u.Qb(30,"label",6),u.Jc(31,"Keterangan Pengirim"),u.Pb(),u.Qb(32,"input",12),u.Yb("ngModelChange",function(a){return t.item.keteranganKirim=a}),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(33,"div",13),u.Qb(34,"div",2),u.Qb(35,"div",5),u.Qb(36,"p-panel",14),u.Qb(37,"div",5),u.Qb(38,"div",2),u.Qb(39,"div",15),u.Qb(40,"label",6),u.Jc(41,"Produk "),u.Pb(),u.Qb(42,"p-autoComplete",16),u.Yb("ngModelChange",function(a){return t.item.produk=a})("completeMethod",function(a){return t.filterProduk(a)})("onSelect",function(){return t.getSatuan()}),u.Pb(),u.Pb(),u.Qb(43,"div",17),u.Qb(44,"label",6),u.Jc(45,"Satuan "),u.Pb(),u.Qb(46,"p-dropdown",18),u.Yb("ngModelChange",function(a){return t.item.satuan=a})("onChange",function(){return t.getNilaiKonversi()}),u.Pb(),u.Pb(),u.Qb(47,"div",17),u.Qb(48,"label",6),u.Jc(49,"Stok"),u.Pb(),u.Qb(50,"input",19),u.Yb("ngModelChange",function(a){return t.item.stok=a}),u.Pb(),u.Pb(),u.Qb(51,"div",20),u.Qb(52,"label",6),u.Jc(53,"Qty Order "),u.Pb(),u.Qb(54,"p-inputNumber",21),u.Yb("ngModelChange",function(a){return t.item.jumlahOrder=a}),u.Pb(),u.Pb(),u.Qb(55,"div",20),u.Qb(56,"label",6),u.Jc(57,"Qty Kirim "),u.Pb(),u.Qb(58,"p-inputNumber",22),u.Yb("ngModelChange",function(a){return t.item.jumlah=a})("onInput",function(a){return t.onChangeQty(a)}),u.Pb(),u.Pb(),u.Pb(),u.Qb(59,"div",2),u.Qb(60,"div",23),u.Qb(61,"button",24),u.Yb("click",function(){return t.tambah()}),u.Pb(),u.Pb(),u.Qb(62,"div",17),u.Qb(63,"button",25),u.Yb("click",function(){return t.batal()}),u.Pb(),u.Pb(),u.Pb(),u.Qb(64,"div",2),u.Qb(65,"div",5),u.Qb(66,"p-table",26),u.Hc(67,j,3,1,"ng-template",27),u.Hc(68,R,5,1,"ng-template",28),u.Hc(69,C,5,1,"ng-template",29),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(70,"div",5),u.Qb(71,"div",2),u.Qb(72,"div",30),u.Qb(73,"button",31),u.Yb("click",function(){return t.save()}),u.Pb(),u.Pb(),u.Qb(74,"div",17),u.Qb(75,"button",32),u.Yb("click",function(){return t.batalGrid()}),u.Pb(),u.Pb(),u.Qb(76,"div",17),u.Qb(77,"button",33),u.Yb("click",function(){return t.Kembali()}),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb()),2&a&&(u.xb(6),u.ic("toggleable",!1),u.xb(6),u.ic("ngModel",t.item.nomorKirim),u.xb(4),u.ic("ngModel",t.item.tglKirim)("showIcon",!0)("monthNavigator",!0)("yearNavigator",!0)("showTime",!0)("maxDate",t.maxDateValue),u.xb(4),u.ic("options",t.listJenisKirim)("ngModel",t.item.dataJenisKirim)("filter",!0)("showClear",!0),u.xb(4),u.ic("options",t.listRuangan)("ngModel",t.item.ruangan)("filter",!0)("showClear",!0)("disabled",t.disabledRuangan),u.xb(4),u.ic("ngModel",t.item.dataRuanganAll)("suggestions",t.listRuanganAll)("dropdown",!0)("disabled",t.disabledRuangan),u.xb(4),u.ic("ngModel",t.item.keteranganKirim),u.xb(4),u.ic("toggleable",!1),u.xb(6),u.ic("ngModel",t.item.produk)("suggestions",t.listProduk)("dropdown",!0),u.xb(4),u.ic("options",t.listSatuan)("ngModel",t.item.satuan)("filter",!0)("showClear",!0),u.xb(4),u.ic("ngModel",t.item.stok),u.xb(4),u.ic("ngModel",t.item.jumlahOrder)("showButtons",!0),u.xb(4),u.ic("ngModel",t.item.jumlah)("showButtons",!0),u.xb(3),u.ic("disabled",!t.statusTambah),u.xb(5),u.ic("value",t.dataSource)("columns",t.columnGrid)("rows",20)("showCurrentPageReport",!0)("rowsPerPageOptions",u.mc(44,Y))("paginator",!0)("pageLinks",5),u.xb(7),u.ic("disabled",t.isSimpan))},directives:[g.a,c.a,p.a,c.g,c.h,k.a,f.a,v.a,P.a,S.b,Q.a,y.h,s.k,r.k,r.l],styles:[""]}),x)}],O=((J=function t(){a(this,t)}).\u0275mod=u.Hb({type:J}),J.\u0275inj=u.Gb({factory:function(a){return new(a||J)},imports:[[o.j.forChild(I)],o.j]}),J),F=n("PCNd"),L=((D=function t(){a(this,t)}).\u0275mod=u.Hb({type:D}),D.\u0275inj=u.Gb({factory:function(a){return new(a||D)},imports:[[r.b,O,F.a]]}),D)}}])}();