!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"Z5Z+":function(n,a,i){"use strict";i.r(a),i.d(a,"KonsultasiDokterModule",function(){return E});var r=i("ofXK"),o=i("tyNb"),l=i("fXoL"),u=i("By0h"),s=i("EJUL"),c=i("7zfz"),b=i("U+s4"),p=i("G0w9"),d=i("ujBT"),g=i("7CaW"),h=i("5EWq"),f=i("rEr+"),m=i("Nf9I"),v=i("/RsI"),k=i("jIHw"),w=i("Q4Mo"),P=i("xlun"),y=i("7kUa"),Q=i("3Pt+"),x=i("arFO"),C=i("V5BG"),K=i("zFJ7");function j(e,t){if(1&e){var n=l.Sb();l.Qb(0,"button",15),l.Yb("click",function(){return l.yc(n),l.bc().openNew()}),l.Pb()}}function S(e,t){if(1&e){var n=l.Sb();l.Qb(0,"div",16),l.Qb(1,"div",17),l.Qb(2,"span",18),l.Lb(3,"i",19),l.Qb(4,"input",20),l.Yb("input",function(e){return l.yc(n),l.bc(),l.wc(12).filterGlobal(e.target.value,"contains")}),l.Pb(),l.Pb(),l.Pb(),l.Pb()}}function T(e,t){if(1&e&&(l.Qb(0,"th",23),l.Jc(1),l.Lb(2,"p-sortIcon",24),l.Pb()),2&e){var n=t.$implicit;l.Fc("width: ",n.width,""),l.jc("pSortableColumn",n.field),l.xb(1),l.Lc(" ",n.header," "),l.xb(1),l.jc("field",n.field)}}function M(e,t){if(1&e&&(l.Qb(0,"tr"),l.Lb(1,"th",21),l.Hc(2,T,3,6,"th",22),l.Pb()),2&e){var n=t.$implicit;l.xb(2),l.ic("ngForOf",n)}}function J(e,t){if(1&e&&(l.Qb(0,"span"),l.Jc(1),l.Pb()),2&e){var n=l.bc().$implicit,a=l.bc().$implicit,i=l.bc();l.xb(1),l.Lc(" ",i.formatRupiah(a[n.field],""),"")}}function D(e,t){if(1&e&&(l.Qb(0,"span"),l.Jc(1),l.Pb()),2&e){var n=l.bc().$implicit,a=l.bc().$implicit;l.xb(1),l.Lc(" ",a[n.field],"")}}function R(e,t){if(1&e&&(l.Qb(0,"td"),l.Hc(1,J,2,1,"span",28),l.Hc(2,D,2,1,"span",28),l.Pb()),2&e){var n=t.$implicit;l.Fc("width: ",n.width,""),l.xb(1),l.ic("ngIf",null!=n.isCurrency),l.xb(1),l.ic("ngIf",null==n.isCurrency)}}function H(e,t){if(1&e){var n=l.Sb();l.Qb(0,"tr"),l.Qb(1,"td",21),l.Qb(2,"button",25),l.Yb("click",function(){l.yc(n);var e=t.$implicit;return l.bc().edit(e)}),l.Pb(),l.Qb(3,"button",26),l.Yb("click",function(){l.yc(n);var e=t.$implicit;return l.bc().hapusD(e)}),l.Pb(),l.Pb(),l.Hc(4,R,3,5,"td",27),l.Pb()}if(2&e){var a=t.columns;l.xb(4),l.ic("ngForOf",a)}}function I(e,t){if(1&e){var n=l.Sb();l.Qb(0,"div",29),l.Qb(1,"label",30),l.Jc(2,"Ruangan Asal"),l.Pb(),l.Qb(3,"input",31),l.Yb("ngModelChange",function(e){return l.yc(n),l.bc().item.ruanganAsal=e}),l.Pb(),l.Pb(),l.Qb(4,"div",29),l.Qb(5,"label",30),l.Jc(6,"Ruangan Tujuan"),l.Pb(),l.Qb(7,"p-dropdown",32),l.Yb("ngModelChange",function(e){return l.yc(n),l.bc().item.ruanganTujuan=e}),l.Pb(),l.Pb(),l.Qb(8,"div",29),l.Qb(9,"label",30),l.Jc(10,"Dokter"),l.Pb(),l.Qb(11,"p-autoComplete",33),l.Yb("ngModelChange",function(e){return l.yc(n),l.bc().item.dokter=e})("completeMethod",function(e){return l.yc(n),l.bc().filterDokter(e)}),l.Pb(),l.Pb(),l.Qb(12,"div",29),l.Qb(13,"label",30),l.Jc(14,"Keterangan"),l.Pb(),l.Qb(15,"textarea",34),l.Yb("ngModelChange",function(e){return l.yc(n),l.bc().item.keterangan=e}),l.Pb(),l.Pb()}if(2&e){var a=l.bc();l.xb(3),l.ic("ngModel",a.item.ruanganAsal),l.xb(4),l.ic("options",a.listRuangan)("ngModel",a.item.ruanganTujuan)("filter",!0)("showClear",!0),l.xb(4),l.ic("ngModel",a.item.dokter)("suggestions",a.listDokter)("dropdown",!0),l.xb(4),l.ic("ngModel",a.item.keterangan)}}function F(e,t){if(1&e){var n=l.Sb();l.Qb(0,"button",35),l.Yb("click",function(){return l.yc(n),l.bc().save()}),l.Pb(),l.Qb(1,"button",36),l.Yb("click",function(){return l.yc(n),l.bc().hideDialog()}),l.Pb()}}var L,O,_,Y=function(){return[5,10,25,50]},B=function(){return["ruanganasal","ruangantujuan","namalengkap","keteranganorder","tglorder"]},G=function(){return{width:"450px"}},N=[{path:"",component:(L=function(){function n(t,a,i,r,o,l,u,s,c){e(this,n),this.rekamMedis=t,this.apiService=a,this.authService=i,this.confirmationService=r,this.cacheHelper=o,this.dateHelper=l,this.alertService=u,this.activeRoute=s,this.router=c,this.columnKonsul=[],this.item={},this.product={},this.listRuangan=[]}var a,i,r;return a=n,(i=[{key:"ngOnInit",value:function(){var e=this.cacheHelper.get("cacheEMR_qwertyuiop");null!=e?(e=JSON.parse(e),this.item=e,this.item.ruanganAsal=this.item.namaruangan,this.loadGrid(),this.loadCombo()):window.history.back(),this.columnKonsul=[{field:"no",header:"No",width:"50px"},{field:"tglorder",header:"Tgl Order",width:"100px"},{field:"ruanganasal",header:"Ruangan Asal",width:"150px"},{field:"ruangantujuan",header:"Ruangan Tujuan",width:"150px"},{field:"namalengkap",header:"Dokter",width:"200px"},{field:"keteranganorder",header:"Keterangan",width:"150px"},{field:"status",header:"Verifikasi",width:"90px"}]}},{key:"loadCombo",value:function(){var e=this;this.apiService.get("emr/get-ruangan-konsul").subscribe(function(t){e.listRuangan=t})}},{key:"openNew",value:function(){this.clear(),this.pop_Konsul=!0}},{key:"hideDialog",value:function(){this.clear(),this.pop_Konsul=!1}},{key:"clear",value:function(){delete this.item.norec,delete this.item.ruanganTujuan,delete this.item.keterangan,delete this.item.dokter,delete this.item.jawaban,delete this.item.norecKonsul}},{key:"save",value:function(){var e=this;null!=this.item.ruanganTujuan?null!=this.item.dokter?this.apiService.post("emr/post-konsultasi",{norec_so:null!=this.item.norecKonsul?this.item.norecKonsul:"",norec_pd:this.item.norec_pd,pegawaifk:this.item.dokter.id,objectruanganasalfk:this.item.objectruanganfk,objectruangantujuanfk:this.item.ruanganTujuan.id,keterangan:null!=this.item.keterangan?this.item.keterangan:"",method:"save"}).subscribe(function(t){e.clear(),e.loadGrid(),e.apiService.postLog("Konsultasi","Norec strukorder_t",t.strukorder.norec,"Order Konsul ke Ruangan "+e.item.namaruangan+" pada noregistrasi "+e.item.noregistrasi).subscribe(function(e){}),e.pop_Konsul=!1}):this.alertService.error("Info","Pilih Dokter terlebih dahulu!"):this.alertService.error("Info","Pilih Ruangan Tujuan terlebih dahulu!")}},{key:"loadGrid",value:function(){var e=this;this.apiService.get("emr/get-order-konsul?noregistrasi="+this.item.noregistrasi).subscribe(function(t){for(var n=0;n<t.data.length;n++){var a=t.data[n];a.no=n+1,a.status=1==a.statusorder?"\u2714":"\u2718"}e.dataSourceKonsul=t.data})}},{key:"filterDokter",value:function(e){var t=this;this.apiService.get("registrasi/get-dokter-part?namalengkap="+e.query).subscribe(function(e){t.listDokter=e})}},{key:"edit",value:function(e){if(1!=e.statusorder){var t=new Date,n=new Date(e.tglorder);Math.round(Math.abs((t.getTime()-n.getTime())/864e5))>=1?this.alertService.warn("Info","data tidak bisa di edit"):(this.item.norecKonsul=e.norec,this.item.ruanganAsal=e.ruanganasal,this.item.ruanganTujuan={id:e.objectruangantujuanfk,namaruangan:e.ruangantujuan},this.item.dokter={id:e.pegawaifk,namalengkap:e.namalengkap},this.item.keterangan=e.keteranganorder,this.pop_Konsul=!0)}else this.alertService.warn("Info","data sudah di verif tidak bisa di edit")}},{key:"hapusD",value:function(e){var t=this;1!=e.statusorder?this.apiService.post("emr/post-konsultasi",{norec_so:e.norec,method:"delete"}).subscribe(function(e){t.loadGrid(),t.apiService.postLog("Konsultasi","Norec strukorder_t",t.item.norec,"Hapus Konsul ke Ruangan "+t.item.namaruangan+" pada noregistrasi "+t.item.noregistrasi).subscribe(function(e){})}):this.alertService.warn("Info","data sudah di verif tidak bisa di edit")}}])&&t(a.prototype,i),r&&t(a,r),n}(),L.\u0275fac=function(e){return new(e||L)(l.Jb(u.a),l.Jb(s.a),l.Jb(s.b),l.Jb(c.a),l.Jb(b.a),l.Jb(p.a),l.Jb(d.a),l.Jb(o.a),l.Jb(o.f))},L.\u0275cmp=l.Db({type:L,selectors:[["app-konsultasi-dokter"]],decls:20,vars:21,consts:[[1,"p-fluid","p-formgrid"],[1,"card","card-w-title"],[1,"p-grid"],[1,"p-col-12"],["header","Detail Konsultasi",3,"toggleable"],["styleClass","p-mb-4"],["pTemplate","left"],["styleClass","p-datatable-customers","scrollable","true","sortMode","multiple","dataKey","norec","selectionMode","single",3,"columns","value","selection","rowHover","rows","showCurrentPageReport","rowsPerPageOptions","paginator","pageLinks","globalFilterFields","selectionChange"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Detail Konsul","styleClass","p-fluid",3,"visible","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],["pButton","","pRipple","","label","Tambah","icon","pi pi-plus","pTooltip","Tambah Konsultasi",1,"p-button-success","p-mr-2",3,"click"],[1,"table-header","p-grid"],[1,"p-col-12","p-md-3"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Filter",3,"input"],[2,"width","80px"],[3,"pSortableColumn","style",4,"ngFor","ngForOf"],[3,"pSortableColumn"],[3,"field"],["pButton","","type","button","icon","pi pi-check-square","pTooltip","Edit Order","label","",1,"p-button-rounded","p-button","p-mr-2",3,"click"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Hapus Order","label","",1,"p-button-rounded","p-button-danger","p-mr-2",3,"click"],[3,"style",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"p-field"],[1,"label"],["type","text","pInputText","","placeholder","Ruangan Asal","disabled","",3,"ngModel","ngModelChange"],["placeholder","Ruangan Asal","optionLabel","namaruangan",3,"options","ngModel","filter","showClear","ngModelChange"],["field","namalengkap","placeholder","Dokter",3,"ngModel","suggestions","dropdown","ngModelChange","completeMethod"],["pInputTextarea","","placeholder","Keterangan","rows","3","cols","20",3,"ngModel","ngModelChange"],["pButton","","pRipple","","label","Simpan","icon","pi pi-save",1,"p-button",3,"click"],["pButton","","pRipple","","label","Batal","icon","pi pi-times",1,"p-button-text",3,"click"]],template:function(e,t){1&e&&(l.Qb(0,"div",0),l.Qb(1,"div",1),l.Qb(2,"h4"),l.Jc(3,"Konsultasi"),l.Pb(),l.Qb(4,"div",2),l.Qb(5,"div",3),l.Qb(6,"p-panel",4),l.Qb(7,"div",2),l.Qb(8,"div",3),l.Qb(9,"p-toolbar",5),l.Hc(10,j,1,0,"ng-template",6),l.Pb(),l.Qb(11,"p-table",7,8),l.Yb("selectionChange",function(e){return t.selectedData=e}),l.Hc(13,S,5,0,"ng-template",9),l.Hc(14,M,3,1,"ng-template",10),l.Hc(15,H,5,1,"ng-template",11),l.Pb(),l.Pb(),l.Lb(16,"p-confirmDialog"),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(17,"p-dialog",12),l.Yb("visibleChange",function(e){return t.pop_Konsul=e}),l.Hc(18,I,16,9,"ng-template",13),l.Hc(19,F,2,0,"ng-template",14),l.Pb()),2&e&&(l.xb(6),l.ic("toggleable",!0),l.xb(5),l.ic("columns",t.columnKonsul)("value",t.dataSourceKonsul)("selection",t.selectedData)("rowHover",!0)("rows",20)("showCurrentPageReport",!0)("rowsPerPageOptions",l.mc(17,Y))("paginator",!0)("pageLinks",5)("globalFilterFields",l.mc(18,B)),l.xb(5),l.Ec(l.mc(19,G)),l.xb(1),l.Ec(l.mc(20,G)),l.ic("visible",t.pop_Konsul)("modal",!0))},directives:[g.a,h.a,c.k,f.h,m.a,v.a,k.b,w.a,P.a,y.a,r.k,f.g,f.f,r.l,Q.a,Q.g,Q.h,x.a,C.a,K.a],styles:[""]}),L)}],$=((O=function t(){e(this,t)}).\u0275mod=l.Hb({type:O}),O.\u0275inj=l.Gb({factory:function(e){return new(e||O)},imports:[[o.j.forChild(N)],o.j]}),O),A=i("PCNd"),E=((_=function t(){e(this,t)}).\u0275mod=l.Hb({type:_}),_.\u0275inj=l.Gb({factory:function(e){return new(e||_)},imports:[[r.b,$,A.a]]}),_)}}])}();