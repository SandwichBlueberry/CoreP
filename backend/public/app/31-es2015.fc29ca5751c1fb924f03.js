(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{C60u:function(e,t,i){"use strict";i.r(t),i.d(t,"DaftarKonsultasiModule",function(){return U});var a=i("ofXK"),n=i("tyNb"),r=i("wd/R"),o=i("fXoL"),l=i("EJUL"),s=i("U+s4"),c=i("G0w9"),d=i("ujBT"),p=i("eO1q"),b=i("3Pt+"),u=i("7kUa"),h=i("lVkt"),g=i("jIHw"),m=i("xlun"),f=i("rEr+"),k=i("7zfz"),w=i("/RsI"),P=i("V5BG");function v(e,t){if(1&e&&(o.Qb(0,"th",28),o.Jc(1),o.Lb(2,"p-sortIcon",29),o.Pb()),2&e){const e=t.$implicit;o.Fc("width: ",e.width,""),o.jc("pSortableColumn",e.field),o.xb(1),o.Lc(" ",e.header," "),o.xb(1),o.jc("field",e.field)}}function x(e,t){if(1&e&&(o.Qb(0,"tr"),o.Lb(1,"th",26),o.Hc(2,v,3,6,"th",27),o.Pb()),2&e){const e=t.$implicit;o.xb(2),o.ic("ngForOf",e)}}function D(e,t){if(1&e&&(o.Qb(0,"td"),o.Jc(1),o.Pb()),2&e){const e=t.$implicit,i=o.bc().$implicit;o.Fc("width: ",e.width,""),o.xb(1),o.Lc(" ",i[e.field]," ")}}function Q(e,t){if(1&e){const e=o.Sb();o.Qb(0,"tr",30),o.Qb(1,"td",26),o.Qb(2,"button",31),o.Yb("click",function(){o.yc(e);const i=t.$implicit;return o.bc().pengkajianMedis2(i)}),o.Pb(),o.Qb(3,"button",32),o.Yb("click",function(){o.yc(e);const i=t.$implicit;return o.bc().popUpUbahDokter2(i)}),o.Pb(),o.Qb(4,"button",33),o.Yb("click",function(){return o.yc(e),o.bc().konsultasi()}),o.Pb(),o.Pb(),o.Hc(5,D,2,4,"td",34),o.Pb()}if(2&e){const e=t.$implicit,i=t.columns,a=t.rowIndex,n=o.bc();o.ic("pSelectableRow",e)("pSelectableRowIndex",a),o.xb(4),o.kc("pTooltip","",n.lengthKonsul," Konsultasi belum Verif"),o.xb(1),o.ic("ngForOf",i)}}function M(e,t){1&e&&(o.Qb(0,"td"),o.Lb(1,"div",37),o.Pb())}function y(e,t){if(1&e&&(o.Qb(0,"tr",35),o.Hc(1,M,2,0,"td",36),o.Pb()),2&e){const e=t.columns;o.xb(1),o.ic("ngForOf",e)}}function S(e,t){if(1&e){const e=o.Sb();o.Qb(0,"p-button",38),o.Yb("click",function(){return o.yc(e),o.bc().simpanDokter()}),o.Pb(),o.Qb(1,"p-button",39),o.Yb("click",function(){return o.yc(e),o.bc().batalDokter()}),o.Pb()}}function C(e,t){if(1&e){const e=o.Sb();o.Qb(0,"div",40),o.Qb(1,"div",41),o.Qb(2,"span",42),o.Lb(3,"i",43),o.Qb(4,"input",44),o.Yb("input",function(t){return o.yc(e),o.bc(),o.wc(34).filterGlobal(t.target.value,"contains")}),o.Pb(),o.Pb(),o.Pb(),o.Pb()}}function J(e,t){if(1&e&&(o.Qb(0,"th",28),o.Jc(1),o.Lb(2,"p-sortIcon",29),o.Pb()),2&e){const e=t.$implicit;o.Fc("width: ",e.width,""),o.jc("pSortableColumn",e.field),o.xb(1),o.Lc(" ",e.header," "),o.xb(1),o.jc("field",e.field)}}function R(e,t){if(1&e&&(o.Qb(0,"tr"),o.Lb(1,"th",45),o.Hc(2,J,3,6,"th",27),o.Pb()),2&e){const e=t.$implicit;o.xb(2),o.ic("ngForOf",e)}}function Y(e,t){if(1&e&&(o.Qb(0,"span"),o.Jc(1),o.Pb()),2&e){const e=o.bc().$implicit,t=o.bc().$implicit,i=o.bc();o.xb(1),o.Lc(" ",i.formatRupiah(t[e.field],""),"")}}function H(e,t){if(1&e&&(o.Qb(0,"span"),o.Jc(1),o.Pb()),2&e){const e=o.bc().$implicit,t=o.bc().$implicit;o.xb(1),o.Lc(" ",t[e.field],"")}}function T(e,t){if(1&e&&(o.Qb(0,"td"),o.Hc(1,Y,2,1,"span",47),o.Hc(2,H,2,1,"span",47),o.Pb()),2&e){const e=t.$implicit;o.Fc("width: ",e.width,""),o.xb(1),o.ic("ngIf",null!=e.isCurrency),o.xb(1),o.ic("ngIf",null==e.isCurrency)}}function I(e,t){if(1&e){const e=o.Sb();o.Qb(0,"tr"),o.Qb(1,"td",45),o.Qb(2,"button",46),o.Yb("click",function(){o.yc(e);const i=t.$implicit;return o.bc().verif(i)}),o.Pb(),o.Pb(),o.Hc(3,T,3,5,"td",34),o.Pb()}if(2&e){const e=t.columns;o.xb(3),o.ic("ngForOf",e)}}const K=function(){return[5,10,25,50]},j=function(){return{width:"450px",minWidth:"450px"}},N=function(){return{width:"1024px",minWidth:"1024px"}},O=function(){return["ruanganasal","ruangantujuan","namalengkap","keteranganorder","tglorder"]},F=[{path:"",component:(()=>{class e{constructor(e,t,i,a,n,r,o){this.apiService=e,this.authService=t,this.cacheHelper=i,this.dateHelper=a,this.alertService=n,this.route=r,this.router=o,this.item={},this.listRuangan=[],this.lengthKonsul=0,this.dataSourceKonsul=[]}ngOnInit(){this.kelompokUser=this.authService.getKelompokUser(),this.loadCombo(),this.apiService.get("emr/get-ruangan-konsul").subscribe(e=>{this.listRuangan=e}),this.column=[{field:"statlayanan",header:"\u2714",width:"60px"},{field:"no",header:"No",width:"60px"},{field:"tglregistrasi",header:"Tgl Konsul",width:"150px"},{field:"noregistrasi",header:"No Registrasi",width:"150px"},{field:"nocm",header:"No RM",width:"100px"},{field:"namapasien",header:"Nama Pasien",width:"250px"},{field:"umurzz",header:"Umur",width:"100px"},{field:"jeniskelamin",header:"JK",width:"80px"},{field:"statuspasien",header:"Status",width:"100px"},{field:"namadokter",header:"Dokter",width:"180px"},{field:"kelompokpasien",header:"Tipe Pasien",width:"120px"},{field:"namakelas",header:"Kelas",width:"120px"},{field:"alamatlengkap",header:"Alamat",width:"200px"},{field:"stts",header:"Panggil",width:"100px"},{field:"isonline",header:"Online",width:"100px"}],this.columnKonsul=[{field:"no",header:"No",width:"60px"},{field:"noregistrasi",header:"No Registrasi",width:"100px"},{field:"nocm",header:"No RM",width:"100px"},{field:"namapasien",header:"Nama Pasien",width:"200px"},{field:"tglorder",header:"Tgl Order",width:"100px"},{field:"ruanganasal",header:"Ruang Asal",width:"150px"},{field:"ruangantujuan",header:"Ruang Tujuan",width:"150px"},{field:"namalengkap",header:"Dokter",width:"150px"},{field:"pengonsul",header:"Pengonsul",width:"150px"},{field:"keteranganorder",header:"Ket",width:"180px"},{field:"status",header:"Status",width:"100px"}]}loadCombo(){var e=this.cacheHelper.get("cache_DaftarKONSUL");null!=e?(this.item.periodeAwal=new Date(e[0]),this.item.periodeAkhir=new Date(e[1]),null!=e[4]&&e[4].length>0&&(this.item.ruanganMulti=e[4])):(this.item.periodeAwal=r(new Date).format("YYYY-MM-DD 00:00"),this.item.periodeAkhir=r(new Date).format("YYYY-MM-DD 23:59")),this.loadData(),this.countKonsul()}countKonsul(){let e="";"dokter"==this.kelompokUser&&(e=this.authService.getPegawaiId()),this.apiService.get("emr/count-order-konsul?dokterid="+e).subscribe(e=>{this.lengthKonsul=parseFloat(e.data)})}verif(e){"Selesai"!=e.status?this.apiService.post("emr/save-konsul-from-order",{kelasfk:6,noantrian:this.dataSourceKonsul.length+1,norec_so:e.norec,norec_pd:e.norec_pd,dokterfk:e.pegawaifk,objectruangantujuanfk:e.objectruangantujuanfk,objectruanganasalfk:e.objectruanganfk}).subscribe(e=>{this.loadData(),this.countKonsul(),this.pop_daftarOrder=!1}):this.alertService.error("Info","Sudah di verifkasi")}konsultasi(){this.pop_daftarOrder=!0;let e="";"dokter"==this.kelompokUser&&(e=this.authService.getPegawaiId()),this.apiService.get("emr/get-order-konsul?dokterid="+e).subscribe(e=>{var t=e.data;if(t.length>0)for(var i=0;i<t.length;i++)t[i].no=i+1,t[i].status=null!=t[i].norec_apd?"Selesai":"-";this.dataSourceKonsul=t})}cari(){this.loadData()}loadData(){var e=r(this.item.periodeAwal).format("YYYY-MM-DD HH:mm:ss"),t=r(this.item.periodeAkhir).format("YYYY-MM-DD HH:mm:ss"),i="";null!=this.item.noCm&&(i="&norm="+this.item.noCm);var a="";null!=this.item.namaPasien&&(a="&nama="+this.item.namaPasien);var n="";null!=this.item.noRegistrasi&&(n="&noreg="+this.item.noRegistrasi);var o="";null!=this.item.ruangan&&(o="&ruangId="+this.item.ruangan.id);var l="";if(null!=this.item.ruanganMulti&&0!=this.item.ruanganMulti.length){for(var s="",c=this.item.ruanganMulti.length-1;c>=0;c--)s+=","+this.item.ruanganMulti[c].id;l=s.slice(1,s.length)}var d="";null!=this.item.rows&&(d="&jmlRow="+this.item.rows),this.apiService.get("emr/get-daftar-konsul-from-order?&tglAwal="+e+"&tglAkhir="+t+"&norm="+i+"&noreg="+n+"&nama="+a+"&ruanganArr="+l+o+d).subscribe(i=>{for(var a=0;a<i.length;a++){i[a].no=a+1;var n=new Date,r=new Date(i[a].tgllahir);i[a].umurzz=this.dateHelper.getUmur(r,n),i[a].stts="-",i[a].isonline="-",null!=i[a].noreservasi&&(i[a].isonline="Online",i[a].tglregistrasi=i[a].tanggalreservasi),null!=i[a].tgldipanggilsuster&&(i[a].stts="Di Panggil Perawat"),null!=i[a].tgldipanggildokter&&(i[a].stts="Di Panggil Dokter"),i[a].statlayanan="true"==i[a].statuslayanan||1==i[a].statuslayanan?"\u2714":""}this.dataSource=i,this.cacheHelper.set("cache_DaftarKONSUL",{0:e,1:t,2:null!=this.item.ruangan?this.item.ruangan.id:null,3:null!=this.item.ruangan?this.item.ruangan.namaruangan:null,4:this.item.ruanganMulti})})}filterDokter(e){this.apiService.get("general/get-data-combo-dokter-part?namalengkap="+e.query).subscribe(e=>{this.listDokter=e})}popUpUbahDokter(){null!=this.selected?this.apiService.get("general/get-data-closing-pasien/"+this.selected.noregistrasi).subscribe(e=>{e.length>0?this.alertService.error("Peringatan!","Registrasi Ini Telah Diclosing"):this.pop_DokterPJawab=!0}):this.alertService.warn("Info,","Data Belum Dipilih!")}popUpUbahDokter2(e){this.apiService.get("general/get-data-closing-pasien/"+e.noregistrasi).subscribe(e=>{e.length>0?this.alertService.error("Peringatan!","Registrasi Ini Telah Diclosing"):this.pop_DokterPJawab=!0})}batalDokter(){this.item.dokterPJawab=void 0,this.pop_DokterPJawab=!1}simpanDokter(){null!=this.selected?null!=this.item.dokterPJawab?this.apiService.post("emr/ubah-dokter",{norec_apd:this.selected.norec_apd,pegawaiidfk:this.item.dokterPJawab.id}).subscribe(e=>{""!=this.selected.norec&&this.apiService.postLog("Simpan Ubah Dokter","norec Registrasi Pasien",this.selected.norec,"Ubah Ke Dokter  "+this.item.dokterPJawab.namalengkap+" pada No Registrasi "+this.selected.noregistrasi).subscribe(e=>{}),this.item.dokterPJawab=void 0,this.pop_DokterPJawab=!1,this.loadData()}):this.alertService.warn("Info,","Data Dokter Belum Dipilih!"):this.alertService.warn("Info,","Data Belum Dipilih!")}detailTagihan(){this.router.navigate(["detail-tagihan",this.selected.noregistrasi])}pengkajianMedis2(e){this.router.navigate(["rekam-medis",e.norec_pd,e.norec_apd])}pengkajianMedis(){null!=this.selected?this.router.navigate(["rekam-medis",this.selected.norec_pd,this.selected.norec_apd]):this.alertService.warn("Info,","Pilih data dulu!")}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(l.a),o.Jb(l.b),o.Jb(s.a),o.Jb(c.a),o.Jb(d.a),o.Jb(n.a),o.Jb(n.f))},e.\u0275cmp=o.Db({type:e,selectors:[["app-daftar-konsultasi"]],decls:54,vars:58,consts:[[1,"p-fluid","p-formgrid"],[1,"card","card-w-title"],[1,"p-col-12","p-md-12"],[1,"p-grid"],[1,"p-col-12","p-md-2"],["for","input",1,"label"],["yearRange","1980:2030","dateFormat","yy-mm-dd",3,"ngModel","showIcon","monthNavigator","yearNavigator","showTime","disabled","ngModelChange"],[1,"p-col-12","p-md-1"],["type","text","pInputText","","placeholder","No RM",3,"ngModel","ngModelChange","keyup.enter"],["type","text","pInputText","","placeholder","Nama Pasien",3,"ngModel","ngModelChange","keyup.enter"],["type","text","pInputText","","placeholder","Noregistrasi",3,"ngModel","ngModelChange","keyup.enter"],["defaultLabel","Ruangan","optionLabel","namaruangan","display","chip",3,"options","ngModel","ngModelChange"],[1,"p-col-12","p-md-1",2,"margin-top","16px"],["pButton","","type","submit","icon","pi pi-search","pTooltip","Cari",3,"click"],[1,"p-col-12"],["styleClass","p-datatable-customers","scrollable","true","sortMode","multiple","selectionMode","single",3,"columns","value","selection","rowHover","rows","showCurrentPageReport","rowsPerPageOptions","paginator","pageLinks","selectionChange"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","loadingbody"],["header","Dokter ",3,"visible","modal","maximizable","draggable","resizable","visibleChange"],["field","namalengkap","placeholder","DPJP","appendTo","body",3,"ngModel","suggestions","dropdown","ngModelChange","completeMethod"],["pTemplate","footer"],["header","Daftar Order Konsul",3,"visible","modal","maximizable","draggable","resizable","visibleChange"],["styleClass","p-datatable-customers","scrollable","true","sortMode","multiple","dataKey","norec","selectionMode","single",3,"columns","value","selection","rowHover","rows","showCurrentPageReport","rowsPerPageOptions","paginator","pageLinks","globalFilterFields","selectionChange"],["pTemplate","caption"],[2,"width","180px"],[3,"pSortableColumn","style",4,"ngFor","ngForOf"],[3,"pSortableColumn"],[3,"field"],[3,"pSelectableRow","pSelectableRowIndex"],["pButton","","type","button","icon","fa fa-stethoscope","pTooltip","Pengkajian Medis/EMR","label","",1,"p-button-rounded","p-button-success","p-mr-2",3,"click"],["pButton","","type","button","icon","mdi mdi-account-edit-outline","pTooltip","Ubah Dokter","label","",1,"p-button-rounded","p-mr-2","p-mt-1",3,"click"],["pButton","","type","button","icon","pi pi-clock","label","",1,"p-button-rounded","p-button-warning","p-mr-2","p-mt-1",3,"pTooltip","click"],[3,"style",4,"ngFor","ngForOf"],[2,"height","34px"],[4,"ngFor","ngForOf"],[1,"loading-text"],["icon","pi pi-save","label","Simpan","styleClass","p-button-success p-mr-2",3,"click"],["icon","pi pi-close","label","Tutup","styleClass","p-button-text",3,"click"],[1,"table-header","p-grid"],[1,"p-col-12","p-md-3"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Filter",3,"input"],[2,"width","80px"],["pButton","","type","button","icon","pi pi-check","pTooltip","Verikasi Order","label","",1,"p-button-rounded","p-button","p-mr-2",3,"click"],[4,"ngIf"]],template:function(e,t){1&e&&(o.Qb(0,"div",0),o.Qb(1,"div",1),o.Qb(2,"h4"),o.Jc(3,"Konsultasi Ruangan"),o.Pb(),o.Qb(4,"div",2),o.Qb(5,"div",3),o.Qb(6,"div",4),o.Qb(7,"label",5),o.Jc(8,"Periode Awal"),o.Pb(),o.Qb(9,"p-calendar",6),o.Yb("ngModelChange",function(e){return t.item.periodeAwal=e}),o.Pb(),o.Pb(),o.Qb(10,"div",4),o.Qb(11,"label",5),o.Jc(12,"Periode Akhir"),o.Pb(),o.Qb(13,"p-calendar",6),o.Yb("ngModelChange",function(e){return t.item.periodeAkhir=e}),o.Pb(),o.Pb(),o.Qb(14,"div",7),o.Qb(15,"label",5),o.Jc(16,"No RM "),o.Pb(),o.Qb(17,"input",8),o.Yb("ngModelChange",function(e){return t.item.noCm=e})("keyup.enter",function(){return t.cari()}),o.Pb(),o.Pb(),o.Qb(18,"div",4),o.Qb(19,"label",5),o.Jc(20,"Nama Pasien "),o.Pb(),o.Qb(21,"input",9),o.Yb("ngModelChange",function(e){return t.item.namaPasien=e})("keyup.enter",function(){return t.cari()}),o.Pb(),o.Pb(),o.Qb(22,"div",4),o.Qb(23,"label",5),o.Jc(24,"Noregistrasi"),o.Pb(),o.Qb(25,"input",10),o.Yb("ngModelChange",function(e){return t.item.noRegistrasi=e})("keyup.enter",function(){return t.cari()}),o.Pb(),o.Pb(),o.Qb(26,"div",4),o.Qb(27,"label",5),o.Jc(28,"Ruangan"),o.Pb(),o.Qb(29,"p-multiSelect",11),o.Yb("ngModelChange",function(e){return t.item.ruanganMulti=e}),o.Pb(),o.Pb(),o.Qb(30,"div",12),o.Qb(31,"button",13),o.Yb("click",function(){return t.cari()}),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Qb(32,"div",14),o.Qb(33,"p-table",15,16),o.Yb("selectionChange",function(e){return t.selected=e}),o.Hc(35,x,3,1,"ng-template",17),o.Hc(36,Q,6,4,"ng-template",18),o.Hc(37,y,2,1,"ng-template",19),o.Pb(),o.Pb(),o.Pb(),o.Qb(38,"p-dialog",20),o.Yb("visibleChange",function(e){return t.pop_DokterPJawab=e}),o.Qb(39,"div",0),o.Qb(40,"div",3),o.Qb(41,"div",2),o.Qb(42,"label",5),o.Jc(43,"Dokter "),o.Pb(),o.Qb(44,"p-autoComplete",21),o.Yb("ngModelChange",function(e){return t.item.dokterPJawab=e})("completeMethod",function(e){return t.filterDokter(e)}),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Hc(45,S,2,0,"ng-template",22),o.Pb(),o.Qb(46,"p-dialog",23),o.Yb("visibleChange",function(e){return t.pop_daftarOrder=e}),o.Qb(47,"div",0),o.Qb(48,"div",3),o.Qb(49,"p-table",24,16),o.Yb("selectionChange",function(e){return t.selectedData=e}),o.Hc(51,C,5,0,"ng-template",25),o.Hc(52,R,3,1,"ng-template",17),o.Hc(53,I,4,1,"ng-template",18),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb()),2&e&&(o.xb(9),o.ic("ngModel",t.item.periodeAwal)("showIcon",!0)("monthNavigator",!0)("yearNavigator",!0)("showTime",!0)("disabled",t.disableTgl),o.xb(4),o.ic("ngModel",t.item.periodeAkhir)("showIcon",!0)("monthNavigator",!0)("yearNavigator",!0)("showTime",!0)("disabled",t.disableTgl),o.xb(4),o.ic("ngModel",t.item.noCm),o.xb(4),o.ic("ngModel",t.item.namaPasien),o.xb(4),o.ic("ngModel",t.item.noRegistrasi),o.xb(4),o.ic("options",t.listRuangan)("ngModel",t.item.ruanganMulti),o.xb(4),o.ic("columns",t.column)("value",t.dataSource)("selection",t.selected)("rowHover",!0)("rows",20)("showCurrentPageReport",!0)("rowsPerPageOptions",o.mc(53,K))("paginator",!0)("pageLinks",5),o.xb(5),o.Ec(o.mc(54,j)),o.ic("visible",t.pop_DokterPJawab)("modal",!0)("maximizable",!0)("draggable",!0)("resizable",!0),o.xb(6),o.ic("ngModel",t.item.dokterPJawab)("suggestions",t.listDokter)("dropdown",!0),o.xb(2),o.Ec(o.mc(55,N)),o.ic("visible",t.pop_daftarOrder)("modal",!0)("maximizable",!0)("draggable",!0)("resizable",!0),o.xb(3),o.ic("columns",t.columnKonsul)("value",t.dataSourceKonsul)("selection",t.selectedData)("rowHover",!0)("rows",20)("showCurrentPageReport",!0)("rowsPerPageOptions",o.mc(56,K))("paginator",!0)("pageLinks",5)("globalFilterFields",o.mc(57,O)))},directives:[p.a,b.g,b.h,b.a,u.a,h.a,g.b,m.a,f.h,k.k,w.a,P.a,a.k,f.g,f.f,f.e,g.a,a.l],styles:[""]}),e})()}];let L=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(t){return new(t||e)},imports:[[n.j.forChild(F)],n.j]}),e})();var _=i("PCNd");let U=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(t){return new(t||e)},imports:[[a.b,L,_.a]]}),e})()}}]);