!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{BRkQ:function(a,i,n){"use strict";n.r(i),n.d(i,"StokOpnameModule",function(){return N});var o=n("ofXK"),l=n("tyNb"),r=n("7zfz"),d=n("wd/R"),c=n("EUZL"),s=n("fXoL"),u=n("EJUL"),b=n("U+s4"),p=n("G0w9"),h=n("ujBT"),m=n("Nf9I"),g=n("arFO"),f=n("3Pt+"),k=n("7kUa"),P=n("jIHw"),v=n("xlun"),Q=n("rEr+"),S=n("Q4Mo"),y=n("NCSE"),x=["fileUpload"];function w(t,e){if(1&t){var a=s.Sb();s.Qb(0,"button",30),s.Yb("click",function(){return s.yc(a),s.bc(2).reset()}),s.Pb()}}function J(t,e){if(1&t){var a=s.Sb();s.Qb(0,"div",24),s.Qb(1,"button",25),s.Yb("click",function(){return s.yc(a),s.bc().exportExcel()}),s.Pb(),s.Qb(2,"p-fileUpload",26,27),s.Yb("onUpload",function(t){return s.yc(a),s.bc().onBasicUpload(t)})("onSelect",function(t){return s.yc(a),s.bc().onSelect(t)}),s.Pb(),s.Hc(4,w,1,0,"button",28),s.Qb(5,"button",29),s.Yb("click",function(){return s.yc(a),s.bc().daftarSo()}),s.Pb(),s.Pb()}if(2&t){var i=s.bc();s.xb(4),s.ic("ngIf",null!=i.item.namaFile)}}function R(t,e){1&t&&(s.Qb(0,"tr"),s.Qb(1,"th",31),s.Jc(2,"Kode Produk"),s.Pb(),s.Qb(3,"th",31),s.Jc(4,"Nama Produk"),s.Pb(),s.Qb(5,"th",32),s.Jc(6,"Saldo"),s.Pb(),s.Qb(7,"th",31),s.Jc(8,"Satuan"),s.Pb(),s.Pb(),s.Qb(9,"tr"),s.Qb(10,"th"),s.Jc(11,"Sistem"),s.Pb(),s.Qb(12,"th"),s.Jc(13,"Real"),s.Pb(),s.Qb(14,"th"),s.Jc(15,"Selisih"),s.Pb(),s.Pb())}function C(t,e){if(1&t){var a=s.Sb();s.Qb(0,"input",36),s.Yb("ngModelChange",function(t){return s.yc(a),s.bc().$implicit.stokReal=t})("input",function(){s.yc(a);var t=s.bc().$implicit;return s.bc().onChange(t,t.stokReal)}),s.Pb()}if(2&t){var i=s.bc().$implicit;s.ic("ngModel",i.stokReal)}}function T(t,e){if(1&t&&s.Jc(0),2&t){var a=s.bc().$implicit;s.Lc(" ",a.stokReal," ")}}function B(t,e){if(1&t&&(s.Qb(0,"tr"),s.Qb(1,"td"),s.Jc(2),s.Pb(),s.Qb(3,"td"),s.Jc(4),s.Pb(),s.Qb(5,"td"),s.Jc(6),s.Pb(),s.Qb(7,"td",33),s.Qb(8,"p-cellEditor"),s.Hc(9,C,1,1,"ng-template",34),s.Hc(10,T,1,1,"ng-template",35),s.Pb(),s.Pb(),s.Qb(11,"td"),s.Jc(12),s.Pb(),s.Qb(13,"td"),s.Jc(14),s.Pb(),s.Pb()),2&t){var a=e.$implicit;s.xb(2),s.Kc(a.kodeProduk),s.xb(2),s.Kc(a.namaProduk),s.xb(2),s.Kc(a.qtyProduk),s.xb(1),s.ic("ngClass","row-header"),s.xb(5),s.Kc(a.selisih),s.xb(2),s.Kc(a.satuanStandar)}}function M(t,e){if(1&t){var a=s.Sb();s.Qb(0,"div",24),s.Qb(1,"button",38),s.Yb("click",function(){return s.yc(a),s.bc(2).exportExcel2()}),s.Pb(),s.Pb()}}function K(t,e){1&t&&(s.Qb(0,"tr"),s.Qb(1,"th",31),s.Jc(2,"Kode Produk"),s.Pb(),s.Qb(3,"th",31),s.Jc(4,"Nama Produk"),s.Pb(),s.Qb(5,"th",32),s.Jc(6,"Saldo"),s.Pb(),s.Qb(7,"th",31),s.Jc(8,"Satuan"),s.Pb(),s.Pb(),s.Qb(9,"tr"),s.Qb(10,"th"),s.Jc(11,"Sistem"),s.Pb(),s.Qb(12,"th"),s.Jc(13,"Real"),s.Pb(),s.Qb(14,"th"),s.Jc(15,"Selisih"),s.Pb(),s.Pb())}function j(t,e){if(1&t&&(s.Qb(0,"tr"),s.Qb(1,"td"),s.Jc(2),s.Pb(),s.Qb(3,"td"),s.Jc(4),s.Pb(),s.Qb(5,"td"),s.Jc(6),s.Pb(),s.Qb(7,"td"),s.Jc(8),s.Pb(),s.Qb(9,"td"),s.Jc(10),s.Pb(),s.Qb(11,"td"),s.Jc(12),s.Pb(),s.Pb()),2&t){var a=e.$implicit;s.xb(2),s.Kc(a.kodeProduk),s.xb(2),s.Kc(a.namaProduk),s.xb(2),s.Kc(a.qtyProduk),s.xb(2),s.Kc(a.stokReal),s.xb(2),s.Kc(a.selisih),s.xb(2),s.Kc(a.satuanStandar)}}function D(t,e){if(1&t&&(s.Qb(0,"div",4),s.Qb(1,"div",3),s.Qb(2,"p-table",37),s.Hc(3,M,2,0,"ng-template",17),s.Hc(4,K,16,0,"ng-template",18),s.Hc(5,j,13,6,"ng-template",19),s.Pb(),s.Pb(),s.Pb()),2&t){var a=s.bc();s.xb(2),s.ic("value",a.dataSourceTeuAya)}}var U,L,O,E=function(t){return[t]},H=[{path:"",component:(U=function(){function a(e,i,n,o,l,r,d,c,s){t(this,a),this.apiService=e,this.authService=i,this.confirmationService=n,this.messageService=o,this.cacheHelper=l,this.helper=r,this.alertService=d,this.route=c,this.state=s,this.item={},this.isSimpan=!0,this.totalRecords=0}var i,n,o;return i=a,(n=[{key:"ngOnInit",value:function(){this.dataLogin=this.authService.getDataLoginUser(),this.kelUser=this.dataLogin.kelompokUser.kelompokUser,this.dateNow=new Date,this.item.jmlRows=10,this.column=[{field:"no",header:"No",width:"65px"},{field:"noTerima",header:"No Terima",width:"140px"},{field:"kodeProduk",header:"Kode Produk",width:"140px"},{field:"namaProduk",header:"Nama Produk",width:"300px"},{field:"asalProduk",header:"Asal Produk",width:"180px"},{field:"qtyProduk",header:"Stok",width:"120px"},{field:"qtyOnHand",header:"Stok Onhand",width:"140px"},{field:"qtyorder",header:"Stok Order",width:"140px"},{field:"satuanStandar",header:"Satuan",width:"120px"},{field:"tglKadaluarsa",header:"Tgl Exp",width:"140px"},{field:"harga",header:"Harga",width:"140px",isCurrency:!0},{field:"noBatch",header:"No Batch",width:"140px"}],this.loadDataCombo()}},{key:"loadDataCombo",value:function(){var t=this;this.apiService.get("logistik/get-combo-logistik").subscribe(function(e){t.listRuangan=null!=t.dataLogin.mapLoginUserToRuangan?t.dataLogin.mapLoginUserToRuangan:e.ruangfarmasi,t.item.dataRuangan=t.listRuangan[0]}),this.apiService.get("logistik/get-combo-detailjenisproduk").subscribe(function(e){t.listDetailJenisProduk=e.detailjenisproduk})}},{key:"isiJenisProduk",value:function(){null!=this.item.dataDjenisProduk&&(this.listJenisBarang=this.item.dataDjenisProduk.jenisproduk)}},{key:"isiKelompokProduk",value:function(){null!=this.item.dataJenisBarang&&(this.listKelompokBarang=this.item.dataJenisBarang.kelompokproduk)}},{key:"formatRupiah",value:function(t,e){return e+" "+parseFloat(t).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")}},{key:"loadData",value:function(){var t,e,a,i,n,o=this;i="",null!=this.item.dataRuangan&&(i=this.item.dataRuangan.id),t="",null!=this.item.dataDjenisProduk&&(t=this.item.dataDjenisProduk.id),e="",null!=this.item.dataKelompokBarang&&(e=this.item.dataKelompokBarang.id),a="",null!=this.item.dataJenisBarang&&(a=this.item.dataJenisBarang.id),n="",null!=this.item.namaProduk&&(n=this.item.namaProduk);var l="";null!=this.item.jmlRows&&(l=this.item.jmlRows),this.dataTable=[],this.apiService.get("logistik/get-stok-ruangan-so?kelompokprodukid="+e+"&detailJenisProdukId="+t+"&jeniskprodukid="+a+"&namaproduk="+n+"&ruanganfk="+i+"&jmlRows="+l).subscribe(function(t){for(var e=t.detail,a=0;a<e.length;a++){var i=e[a];i.stokReal=i.qtyProduk}o.totalRecords=e.length,o.dataTable=e})}},{key:"cari",value:function(){this.loadData()}},{key:"onChange",value:function(t,e){t.selisih=e-t.qtyProduk}},{key:"save",value:function(){var t=this;if(null!=this.item.dataRuangan){for(var e=[],a=this.dataTable.length-1;a>=0;a--)null!=this.dataTable[a].selisih&&e.push({produkfk:this.dataTable[a].kodeProduk,stokSistem:this.dataTable[a].qtyProduk,stokReal:this.dataTable[a].stokReal,selisih:this.dataTable[a].selisih});if(0!==e.length){var i={ruanganId:this.item.dataRuangan.id,namaRuangan:this.item.dataRuangan.namaruangan,tglClosing:d(new Date).format("YYYY-MM-DD HH:mm:ss"),stokProduk:e};this.isSimpan=!1,this.apiService.post("logistik/save-data-stock-opname",i).subscribe(function(e){t.isSimpan=!0;var a=e.noSO;null!=a&&t.apiService.postLog("Stok Opname","norec Struk Closing",a.norec,"Stok Opname dengan No Closing "+a.noclosing+" di ruangan "+t.item.dataRuangan.namaruangan).subscribe(function(t){});for(var i=e.databarangtaktersave,n=i.length-1;n>=0;n--)i[n].no=n+1;t.isTeuAya=i.length>0,t.dataSourceTeuAya=i,t.cancel(),t.cari()},function(e){t.isSimpan=!0})}else this.alertService.error("Info","Saldo Real barang belum di isi")}else this.alertService.warn("Info","Pilih ruangan dulu")}},{key:"exportExcel",value:function(){this.helper.exportExcel(this.dataTable,"StokOpname")}},{key:"exportExcel2",value:function(){this.helper.exportExcel(this.dataTable,"StokOpnameGagal")}},{key:"onSelect",value:function(t,e){var a=this,i=null,n=null,o=new FileReader,l=t.files[0];this.item.namaFile=l,o.onload=function(t){i=c.read(o.result,{type:"binary"}),n=i.SheetNames.reduce(function(t,e){return t[e]=c.utils.sheet_to_json(i.Sheets[e]),t},{}),JSON.stringify(n),a.dataImport=n;var e={data:n.data,ruanganfk:a.item.dataRuangan.id};a.dataTable=[],a.apiService.post("logistik/get-stok-ruangan-so-from-fileexcel",e).subscribe(function(t){a.isSimpan=t.save_cmd,a.dataTable=t.detail,a.totalRecords=a.dataTable.length})},o.readAsBinaryString(l)}},{key:"reset",value:function(){this.totalRecords=0,this.fileUpload.clear()}},{key:"cancel",value:function(){this.totalRecords=0,this.fileUpload.clear(),this.item.namaFile=void 0}},{key:"daftarSo",value:function(){this.state.navigate(["daftar-so"])}}])&&e(i.prototype,n),o&&e(i,o),a}(),U.\u0275fac=function(t){return new(t||U)(s.Jb(u.a),s.Jb(u.b),s.Jb(r.a),s.Jb(r.h),s.Jb(b.a),s.Jb(p.a),s.Jb(h.a),s.Jb(l.a),s.Jb(l.f))},U.\u0275cmp=s.Db({type:U,selectors:[["app-stok-opname"]],viewQuery:function(t,e){var a;1&t&&s.Nc(x,!0),2&t&&s.vc(a=s.Zb())&&(e.fileUpload=a.first)},features:[s.wb([r.a])],decls:42,vars:26,consts:[["header","Confirmation","icon","fa fa-question-circle"],[1,"p-fluid","p-formgrid"],[1,"card","card-w-title"],[1,"p-col-12","p-md-12"],[1,"p-grid"],[1,"p-col-12","p-md-2"],["for","input",1,"label"],["placeholder","Ruangan","optionLabel","namaruangan",3,"options","ngModel","filter","showClear","ngModelChange"],["placeholder","Detail Jenis Produk","optionLabel","detailjenisproduk",3,"options","ngModel","filter","showClear","ngModelChange","onChange"],["placeholder","Jenis Produk","optionLabel","jenisproduk",3,"options","ngModel","filter","showClear","ngModelChange","onChange"],["placeholder","Kelompok Produk","optionLabel","kelompokproduk",3,"options","ngModel","filter","showClear","ngModelChange"],[1,"p-col-12","p-md-3"],["type","text","pInputText","","placeholder","Nama Barang",3,"ngModel","ngModelChange","keyup.enter"],[1,"p-col-12","p-md-1"],[1,"p-col-12","p-md-12",2,"margin-top","10px"],["pButton","","type","submit","icon","pi pi-search","pTooltip","Cari",3,"click"],["dataKey","kodeProduk","totalRecords","totalRecords","currentPageReportTemplate","Showing 1 to {totalRecords} of {totalRecords} entries",3,"value","paginator","showCurrentPageReport","rows","rowsPerPageOptions"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"p-col-12","p-md-1","p-md-offset-10"],["pButton","","type","submit","icon","pi pi-save","label","Simpan","pTooltip","Simpan Stok Opname",1,"p-button-success",3,"disabled","click"],["pButton","","type","submit","icon","fa fa-refresh","label","Batal","pTooltip","Reset Data",1,"p-button-danger",3,"click"],["class","p-grid",4,"ngIf"],[1,"p-d-flex"],["type","button","pButton","","pRipple","","icon","pi pi-file-excel","pTooltip","Export Excel","tooltipPosition","bottom",1,"p-button-success","p-mr-2",3,"click"],["mode","basic","name","demo[]","chooseLabel","Import","maxFileSize","1000000","pTooltip","Import File sesuai data Excel yang di Export dari Table Ini",1,"p-mr-2",3,"onUpload","onSelect"],["fileUpload",""],["pButton","","pRipple","","icon","pi pi-undo","class","p-button-danger p-button-success","pTooltip","Reset File Upload","label","",3,"click",4,"ngIf"],["type","button","pButton","","pRipple","","icon","pi pi-sliders-h","pTooltip","Daftar Stok Opname","tooltipPosition","bottom",1,"p-button-warning","p-mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-undo","pTooltip","Reset File Upload","label","",1,"p-button-danger","p-button-success",3,"click"],["rowspan","2"],["colspan","3",2,"text-align","center"],["pEditableColumn","",3,"ngClass"],["pTemplate","input"],["pTemplate","output"],["pInputText","","type","number","required","",3,"ngModel","ngModelChange","input"],["dataKey","isTeuAya",3,"value"],["type","button","pButton","","pRipple","","icon","pi pi-file-excel","pTooltip","XLS","tooltipPosition","bottom",1,"p-button-success","p-mr-2",3,"click"]],template:function(t,e){1&t&&(s.Lb(0,"p-confirmDialog",0),s.Qb(1,"div",1),s.Qb(2,"div",2),s.Qb(3,"h4"),s.Jc(4,"Stok Opname"),s.Pb(),s.Qb(5,"div",3),s.Qb(6,"div",4),s.Qb(7,"div",5),s.Qb(8,"label",6),s.Jc(9,"Ruangan"),s.Pb(),s.Qb(10,"p-dropdown",7),s.Yb("ngModelChange",function(t){return e.item.dataRuangan=t}),s.Pb(),s.Pb(),s.Qb(11,"div",5),s.Qb(12,"label",6),s.Jc(13,"Detail Jenis Produk"),s.Pb(),s.Qb(14,"p-dropdown",8),s.Yb("ngModelChange",function(t){return e.item.dataDjenisProduk=t})("onChange",function(){return e.isiJenisProduk()}),s.Pb(),s.Pb(),s.Qb(15,"div",5),s.Qb(16,"label",6),s.Jc(17,"Jenis Produk"),s.Pb(),s.Qb(18,"p-dropdown",9),s.Yb("ngModelChange",function(t){return e.item.dataJenisBarang=t})("onChange",function(){return e.isiKelompokProduk()}),s.Pb(),s.Pb(),s.Qb(19,"div",5),s.Qb(20,"label",6),s.Jc(21,"Kelompok Produk"),s.Pb(),s.Qb(22,"p-dropdown",10),s.Yb("ngModelChange",function(t){return e.item.dataKelompokBarang=t}),s.Pb(),s.Pb(),s.Qb(23,"div",11),s.Qb(24,"label",6),s.Jc(25,"Nama Produk"),s.Pb(),s.Qb(26,"input",12),s.Yb("ngModelChange",function(t){return e.item.namaProduk=t})("keyup.enter",function(){return e.cari()}),s.Pb(),s.Pb(),s.Qb(27,"div",13),s.Qb(28,"div",14),s.Qb(29,"button",15),s.Yb("click",function(){return e.cari()}),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(30,"div",3),s.Qb(31,"p-table",16),s.Hc(32,J,6,1,"ng-template",17),s.Hc(33,R,16,0,"ng-template",18),s.Hc(34,B,15,6,"ng-template",19),s.Pb(),s.Pb(),s.Qb(35,"div",3),s.Qb(36,"div",4),s.Qb(37,"div",20),s.Qb(38,"button",21),s.Yb("click",function(){return e.save()}),s.Pb(),s.Pb(),s.Qb(39,"div",13),s.Qb(40,"button",22),s.Yb("click",function(){return e.cancel()}),s.Pb(),s.Pb(),s.Pb(),s.Hc(41,D,6,1,"div",23),s.Pb(),s.Pb(),s.Pb()),2&t&&(s.xb(10),s.ic("options",e.listRuangan)("ngModel",e.item.dataRuangan)("filter",!0)("showClear",!0),s.xb(4),s.ic("options",e.listDetailJenisProduk)("ngModel",e.item.dataDjenisProduk)("filter",!0)("showClear",!0),s.xb(4),s.ic("options",e.listJenisBarang)("ngModel",e.item.dataJenisBarang)("filter",!0)("showClear",!0),s.xb(4),s.ic("options",e.listKelompokBarang)("ngModel",e.item.dataKelompokBarang)("filter",!0)("showClear",!0),s.xb(4),s.ic("ngModel",e.item.namaProduk),s.xb(5),s.ic("value",e.dataTable)("paginator",!0)("showCurrentPageReport",!1)("rows",e.totalRecords)("rowsPerPageOptions",s.nc(24,E,e.totalRecords)),s.xb(7),s.ic("disabled",!e.isSimpan),s.xb(3),s.ic("ngIf",e.isTeuAya))},directives:[m.a,g.a,f.g,f.h,f.a,k.a,P.b,v.a,Q.h,r.k,o.l,S.a,y.a,Q.c,o.j,Q.a,f.i,f.k],styles:["[_nghost-%COMP%]     .row-header{background-color:rgba(0,0,0,.15)!important}"]}),U)}],Y=((L=function e(){t(this,e)}).\u0275mod=s.Hb({type:L}),L.\u0275inj=s.Gb({factory:function(t){return new(t||L)},imports:[[l.j.forChild(H)],l.j]}),L),I=n("PCNd"),N=((O=function e(){t(this,e)}).\u0275mod=s.Hb({type:O}),O.\u0275inj=s.Gb({factory:function(t){return new(t||O)},imports:[[o.b,Y,I.a]]}),O)}}])}();