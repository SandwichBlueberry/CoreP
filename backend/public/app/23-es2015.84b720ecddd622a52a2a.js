(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{ZDsB:function(e,t,a){"use strict";a.r(t),a.d(t,"DaftarSetoranKasirModule",function(){return L});var i=a("ofXK"),r=a("tyNb"),o=a("7zfz"),n=a("wd/R"),l=a("fXoL"),c=a("EJUL"),s=a("U+s4"),b=a("G0w9"),d=a("ujBT"),p=a("Nf9I"),h=a("eO1q"),m=a("3Pt+"),g=a("lVkt"),u=a("arFO"),f=a("7kUa"),P=a("jIHw"),w=a("xlun"),v=a("rEr+"),Q=a("Q4Mo");function C(e,t){if(1&e&&(l.Qb(0,"th",24),l.Jc(1),l.Lb(2,"p-sortIcon",25),l.Pb()),2&e){const e=t.$implicit;l.Fc("width: ",e.width,""),l.jc("pSortableColumn",e.field),l.xb(1),l.Lc(" ",e.header," "),l.xb(1),l.jc("field",e.field)}}function S(e,t){if(1&e&&(l.Qb(0,"tr"),l.Qb(1,"th",22),l.Jc(2,"Aksi"),l.Pb(),l.Lb(3,"th",22),l.Hc(4,C,3,6,"th",23),l.Pb()),2&e){const e=t.$implicit;l.xb(4),l.ic("ngForOf",e)}}function y(e,t){if(1&e&&(l.Qb(0,"span"),l.Jc(1),l.Pb()),2&e){const e=l.bc().$implicit,t=l.bc().$implicit,a=l.bc();l.xb(1),l.Lc(" ",a.formatRupiah(t[e.field],"")," ")}}function k(e,t){if(1&e&&(l.Qb(0,"span"),l.Jc(1),l.Pb()),2&e){const e=l.bc().$implicit,t=l.bc().$implicit;l.xb(1),l.Lc(" ",t[e.field],"")}}function x(e,t){if(1&e&&(l.Qb(0,"td"),l.Hc(1,y,2,1,"span",30),l.Hc(2,k,2,1,"span",30),l.Pb()),2&e){const e=t.$implicit;l.Fc("width: ",e.width,""),l.xb(1),l.ic("ngIf",null!=e.isCurrency),l.xb(1),l.ic("ngIf",null==e.isCurrency)}}function M(e,t){if(1&e){const e=l.Sb();l.Qb(0,"tr",26),l.Qb(1,"td",22),l.Qb(2,"button",27),l.Yb("click",function(){l.yc(e);const a=t.$implicit;return l.bc().batalSetor2(a)}),l.Pb(),l.Pb(),l.Qb(3,"td",22),l.Lb(4,"button",28),l.Pb(),l.Hc(5,x,3,5,"td",29),l.Pb()}if(2&e){const e=t.$implicit,a=t.columns,i=t.rowIndex,r=t.expanded;l.ic("pSelectableRow",e)("pSelectableRowIndex",i),l.xb(4),l.ic("pRowToggler",e)("icon",r?"pi pi-chevron-down":"pi pi-chevron-right"),l.xb(1),l.ic("ngForOf",a)}}function D(e,t){1&e&&(l.Qb(0,"tr"),l.Qb(1,"th"),l.Jc(2,"No Bayar"),l.Pb(),l.Qb(3,"th"),l.Jc(4,"Nama Pasien"),l.Pb(),l.Qb(5,"th"),l.Jc(6,"Desk"),l.Pb(),l.Qb(7,"th"),l.Jc(8,"Keterangan"),l.Pb(),l.Qb(9,"th"),l.Jc(10,"Total Bayar"),l.Pb(),l.Qb(11,"th"),l.Jc(12,"Petugas Kasir"),l.Pb(),l.Pb())}function Y(e,t){if(1&e&&(l.Qb(0,"tr"),l.Qb(1,"td"),l.Jc(2),l.Pb(),l.Qb(3,"td"),l.Jc(4),l.Pb(),l.Qb(5,"td"),l.Jc(6),l.Pb(),l.Qb(7,"td"),l.Jc(8),l.Pb(),l.Qb(9,"td"),l.Jc(10),l.Pb(),l.Qb(11,"td"),l.Jc(12),l.Pb(),l.Pb()),2&e){const e=t.$implicit;l.xb(2),l.Kc(e.nosbm),l.xb(2),l.Kc(e.namapasien),l.xb(2),l.Kc(e.namapasien_klien),l.xb(2),l.Kc(e.keterangan),l.xb(2),l.Kc(e.totalpenerimaan),l.xb(2),l.Kc(e.namalengkap)}}function J(e,t){if(1&e&&(l.Qb(0,"tr"),l.Qb(1,"td",31),l.Qb(2,"div",32),l.Qb(3,"p-table",33),l.Hc(4,D,13,0,"ng-template",19),l.Hc(5,Y,13,6,"ng-template",20),l.Pb(),l.Pb(),l.Pb(),l.Pb()),2&e){const e=t.$implicit;l.xb(3),l.ic("value",e.details)}}const K=function(){return[5,10,25,50]},H=[{path:"",component:(()=>{class e{constructor(e,t,a,i,r,o,n,l,c){this.apiService=e,this.authService=t,this.confirmationService=a,this.messageService=i,this.cacheHelper=r,this.dateHelper=o,this.alertService=n,this.route=l,this.router=c,this.item={},this.listPetugasPenerima=[]}ngOnInit(){this.loginUser=this.authService.getDataLoginUser(),this.dateNow=new Date,this.item.tglAwal=new Date(n(this.dateNow).format("YYYY-MM-DD 00:00")),this.item.tglAkhir=new Date(n(this.dateNow).format("YYYY-MM-DD 23:59")),this.item.jmlRows=50,this.loadColumn(),this.getDataCombo()}loadColumn(){this.column=[{field:"no",header:"No",width:"65px"},{field:"noclosing",header:"Noclosing",width:"180px"},{field:"tglclosing",header:"Tgl Setor",width:"140px"},{field:"carabayar",header:"Cara Bayar",width:"120px"},{field:"carasetor",header:"Cara Setor",width:"140px"},{field:"petugas",header:"Petugas Penerima",width:"200px"},{field:"totalsetor",header:"Total Setor",width:"180px",isCurrency:!0}]}getDataCombo(){this.apiService.get("bendaharapenerimaan/get-combo-bp").subscribe(e=>{this.listCaraBayar=e.carabayar,this.listKelompokTransaksi=e.jenistransaksi,this.listPetugasPenerima=e.petugaskasir,this.listCaraSetor=e.carasetor,this.LoadCache()})}LoadCache(){var e=this.cacheHelper.get("cacheDaftarSetoranKasir");null!=e?(this.item.tglAwal=new Date(e[0]),this.item.tglAkhir=new Date(e[1]),this.LoadData()):this.LoadData()}formatRupiah(e,t){return t+" "+parseFloat(e).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")}LoadData(){var e=n(this.item.tglAwal).format("YYYY-MM-DD HH:mm"),t=n(this.item.tglAkhir).format("YYYY-MM-DD HH:mm");this.cacheHelper.set("cacheDaftarSetoranKasir",{0:e,1:t});var a="";null!=this.item.CaraBayar&&(a=this.item.CaraBayar.id);var i="";null!=this.item.CaraSetor&&(i=this.item.CaraSetor.id);var r="";if(null!=this.item.selectedKasir){for(var o="",l=this.item.selectedKasir.length-1;l>=0;l--)o+=","+this.item.selectedKasir[l].id;r=o.slice(1,o.length)}this.apiService.get("bendaharapenerimaan/get-daftar-setoran-kasir?tglAwal="+e+"&tglAkhir="+t+"&idCaraBayar="+a+"&idCaraSetor="+i+"&KasirArr="+r).subscribe(e=>{var t=e.data;for(let a=0;a<t.length;a++)t[a].no=a+1;this.dataTable=t})}cari(){this.LoadData()}onRowSelect(e){null!=e.data&&(this.selected=e.data)}batalSetor2(e){this.selected=e,this.batalSetor()}batalSetor(){if(null!=this.selected){n(this.item.tglAwal).format("YYYY-MM-DD"),n(this.item.tglAwal).format("YYYY-MM-DD HH:mm"),n(this.item.tglAkhir).format("YYYY-MM-DD HH:mm");var e=0,t=[];if(null!=this.dataTable){for(let a=0;a<this.selected.details.length;a++){const i=this.selected.details[a];null!=i.norec&&(e+=parseFloat(i.totalpenerimaan),t.push({norec_sbm:i.norec,noclosing:this.selected.noclosing}))}if(0!=t.length){e=this.formatRupiah(e,"Rp.");var a={details:t};this.confirmationService.confirm({message:"Apakah Anda Yakin Akan Melakukan Pembatalan Setoran Kasir?",header:"Konfirmasi Pembatalan Setoran Kasir",icon:"pi pi-info-circle",accept:()=>{this.confirmationService.close(),this.apiService.post("bendaharapenerimaan/save-batal-setoran-kasir",a).subscribe(e=>{this.LoadData()})},reject:e=>{this.alertService.warn("Info, Konfirmasi","Pembatalan Setoran Kasir Dibatalkan!"),this.confirmationService.close()}})}else this.alertService.error("Info","'Belum ada data yang di setor!")}else this.alertService.error("Info","Belum ada data yang di setor!")}else this.alertService.error("Info","Data Belum Dipilih!")}}return e.\u0275fac=function(t){return new(t||e)(l.Jb(c.a),l.Jb(c.b),l.Jb(o.a),l.Jb(o.h),l.Jb(s.a),l.Jb(b.a),l.Jb(d.a),l.Jb(r.a),l.Jb(r.f))},e.\u0275cmp=l.Db({type:e,selectors:[["app-daftar-setoran-kasir"]],features:[l.wb([o.a,o.h])],decls:43,vars:31,consts:[["header","Confirmation","icon","fa fa-question-circle"],[1,"p-fluid","p-formgrid"],[1,"card","card-w-title"],[1,"p-col-12","p-md-12"],[1,"p-grid"],[1,"p-col-12","p-md-11"],[1,"p-col-12","p-md-2"],["for","input",1,"label"],["yearRange","1980:2030","dateFormat","yy-mm-dd",3,"ngModel","showIcon","monthNavigator","yearNavigator","showTime","ngModelChange"],[1,"p-col-12","p-md-3"],["optionLabel","namalengkap",3,"options","ngModel","ngModelChange"],["placeholder","Cara Bayar","optionLabel","carabayar",3,"options","ngModel","filter","showClear","ngModelChange"],["placeholder","Cara Setor","optionLabel","carasetor",3,"options","ngModel","filter","showClear","ngModelChange"],[1,"p-col-12","p-md-1"],["type","text","pInputText","","placeholder","Jml Rows",3,"ngModel","ngModelChange","keyup.enter"],[1,"p-col-12","p-md-12",2,"margin-top","16px"],["pButton","","type","submit","icon","pi pi-search","pTooltip","Cari",3,"click"],["styleClass","p-datatable-customers","scrollable","true","sortMode","multiple","selectionMode","single","dataKey","norec",3,"columns","value","selection","rowHover","rows","showCurrentPageReport","rowsPerPageOptions","paginator","pageLinks","selectionChange","onRowSelect"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","rowexpansion"],[2,"width","80px"],[3,"pSortableColumn","style",4,"ngFor","ngForOf"],[3,"pSortableColumn"],[3,"field"],[3,"pSelectableRow","pSelectableRowIndex"],["pButton","","type","button","icon","fa fa-ban","pTooltip","Batal Setor","label","",1,"p-button-rounded","p-button-danger","p-mr-2",3,"click"],["type","button","pButton","","pRipple","",1,"p-button-text","p-button-rounded","p-button-plain","p-mr-2",3,"pRowToggler","icon"],[3,"style",4,"ngFor","ngForOf"],[4,"ngIf"],["colspan","10"],[1,"p-p-3"],["dataKey","noclosingidfk",3,"value"]],template:function(e,t){1&e&&(l.Lb(0,"p-confirmDialog",0),l.Qb(1,"div",1),l.Qb(2,"div",2),l.Qb(3,"h4"),l.Jc(4,"Daftar Setoran Kasir"),l.Pb(),l.Qb(5,"div",3),l.Qb(6,"div",4),l.Qb(7,"div",5),l.Qb(8,"div",4),l.Qb(9,"div",6),l.Qb(10,"label",7),l.Jc(11,"Periode Awal"),l.Pb(),l.Qb(12,"p-calendar",8),l.Yb("ngModelChange",function(e){return t.item.tglAwal=e}),l.Pb(),l.Pb(),l.Qb(13,"div",6),l.Qb(14,"label",7),l.Jc(15,"Periode Akhir"),l.Pb(),l.Qb(16,"p-calendar",8),l.Yb("ngModelChange",function(e){return t.item.tglAkhir=e}),l.Pb(),l.Pb(),l.Qb(17,"div",9),l.Qb(18,"label",7),l.Jc(19,"Petugas Penerima"),l.Pb(),l.Qb(20,"p-multiSelect",10),l.Yb("ngModelChange",function(e){return t.item.selectedKasir=e}),l.Pb(),l.Pb(),l.Qb(21,"div",6),l.Qb(22,"label",7),l.Jc(23,"Cara Bayar"),l.Pb(),l.Qb(24,"p-dropdown",11),l.Yb("ngModelChange",function(e){return t.item.CaraBayar=e}),l.Pb(),l.Pb(),l.Qb(25,"div",6),l.Qb(26,"label",7),l.Jc(27,"Cara Setor"),l.Pb(),l.Qb(28,"p-dropdown",12),l.Yb("ngModelChange",function(e){return t.item.CaraSetor=e}),l.Pb(),l.Pb(),l.Qb(29,"div",13),l.Qb(30,"label",7),l.Jc(31,"jml Rows"),l.Pb(),l.Qb(32,"input",14),l.Yb("ngModelChange",function(e){return t.item.jmlRows=e})("keyup.enter",function(){return t.cari()}),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(33,"div",13),l.Qb(34,"div",4),l.Qb(35,"div",15),l.Qb(36,"button",16),l.Yb("click",function(){return t.cari()}),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(37,"div",3),l.Qb(38,"p-table",17,18),l.Yb("selectionChange",function(e){return t.selected=e})("onRowSelect",function(e){return t.onRowSelect(e)}),l.Hc(40,S,5,1,"ng-template",19),l.Hc(41,M,6,5,"ng-template",20),l.Hc(42,J,6,1,"ng-template",21),l.Pb(),l.Pb(),l.Pb(),l.Pb()),2&e&&(l.xb(12),l.ic("ngModel",t.item.tglAwal)("showIcon",!0)("monthNavigator",!0)("yearNavigator",!0)("showTime",!0),l.xb(4),l.ic("ngModel",t.item.tglAkhir)("showIcon",!0)("monthNavigator",!0)("yearNavigator",!0)("showTime",!0),l.xb(4),l.ic("options",t.listPetugasPenerima)("ngModel",t.item.selectedKasir),l.xb(4),l.ic("options",t.listCaraBayar)("ngModel",t.item.CaraBayar)("filter",!0)("showClear",!0),l.xb(4),l.ic("options",t.listCaraSetor)("ngModel",t.item.CaraSetor)("filter",!0)("showClear",!0),l.xb(4),l.ic("ngModel",t.item.jmlRows),l.xb(6),l.ic("columns",t.column)("value",t.dataTable)("selection",t.selected)("rowHover",!0)("rows",20)("showCurrentPageReport",!0)("rowsPerPageOptions",l.mc(30,K))("paginator",!0)("pageLinks",5))},directives:[p.a,h.a,m.g,m.h,g.a,u.a,m.a,f.a,P.b,w.a,v.h,o.k,i.k,v.g,v.f,v.e,Q.a,v.d,i.l],styles:[""]}),e})()}];let R=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(t){return new(t||e)},imports:[[r.j.forChild(H)],r.j]}),e})();var A=a("PCNd");let L=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(t){return new(t||e)},imports:[[i.b,R,A.a]]}),e})()}}]);