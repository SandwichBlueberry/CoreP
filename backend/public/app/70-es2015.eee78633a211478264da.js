(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"mE+e":function(a,t,e){"use strict";e.r(t),e.d(t,"LaporanPenerimaanKasirModule",function(){return D});var i=e("ofXK"),r=e("tyNb"),n=e("7zfz"),o=e("wd/R"),s=e("fXoL"),b=e("EJUL"),l=e("U+s4"),d=e("G0w9"),c=e("ujBT"),h=e("Nf9I"),p=e("eO1q"),m=e("3Pt+"),g=e("arFO"),u=e("lVkt"),f=e("jIHw"),P=e("xlun"),w=e("rEr+"),x=e("Q4Mo");function Q(a,t){if(1&a){const a=s.Sb();s.Qb(0,"div",22),s.Qb(1,"button",23),s.Yb("click",function(){return s.yc(a),s.bc().cetakLaporan()}),s.Pb(),s.Pb()}}function k(a,t){1&a&&(s.Qb(0,"tr"),s.Qb(1,"th",24),s.Jc(2,"No"),s.Pb(),s.Qb(3,"th",25),s.Jc(4,"Deskripsi"),s.Pb(),s.Qb(5,"th",26),s.Jc(6,"Total"),s.Pb(),s.Pb(),s.Qb(7,"tr"),s.Qb(8,"th",27),s.Jc(9,"Banyak"),s.Pb(),s.Qb(10,"th",27),s.Jc(11,"Hutang Penjamin"),s.Pb(),s.Qb(12,"th",27),s.Jc(13,"Tanggungan RS"),s.Pb(),s.Qb(14,"th",27),s.Jc(15,"Harus Dibayar"),s.Pb(),s.Qb(16,"th",28),s.Jc(17,"Pembebasan"),s.Pb(),s.Qb(18,"th",28),s.Jc(19,"Administrasi"),s.Pb(),s.Qb(20,"th",28),s.Jc(21,"Jml Bayar"),s.Pb(),s.Qb(22,"th",28),s.Jc(23,"Sisa Tagihan"),s.Pb(),s.Pb())}function y(a,t){if(1&a&&(s.Qb(0,"td",33),s.Qb(1,"span",34),s.Jc(2),s.Pb(),s.Pb()),2&a){const a=s.bc().$implicit;s.xb(2),s.Kc(a.ruangan)}}function J(a,t){if(1&a&&(s.Qb(0,"tr",29),s.Hc(1,y,3,1,"td",30),s.Pb(),s.Qb(2,"tr"),s.Qb(3,"td",31),s.Jc(4),s.Pb(),s.Qb(5,"td",32),s.Jc(6),s.Pb(),s.Qb(7,"td",27),s.Jc(8),s.Pb(),s.Qb(9,"td",27),s.Jc(10),s.Pb(),s.Qb(11,"td",27),s.Jc(12),s.Pb(),s.Qb(13,"td",27),s.Jc(14),s.Pb(),s.Qb(15,"td",27),s.Jc(16),s.Pb(),s.Qb(17,"td",27),s.Jc(18),s.Pb(),s.Qb(19,"td",27),s.Jc(20),s.Pb(),s.Qb(21,"td",27),s.Jc(22),s.Pb(),s.Pb()),2&a){const a=t.$implicit,e=t.rowIndex,i=s.bc();s.xb(1),s.ic("ngIf",i.rowGroupMetadata[a.ruangan].index===e),s.xb(3),s.Kc(a.no),s.xb(2),s.Kc(a.tipepasien),s.xb(2),s.Kc(i.formatRupiah(a.banyak,"")),s.xb(2),s.Lc("",i.formatRupiah(a.totalprekanan,"")," "),s.xb(2),s.Lc("",i.formatRupiah(a.tanggunganrs,"")," "),s.xb(2),s.Lc(" ",i.formatRupiah(a.totalharusdibayar,""),""),s.xb(2),s.Kc(i.formatRupiah(a.pembebasan,"")),s.xb(2),s.Lc("",i.formatRupiah(a.administrasi,"")," "),s.xb(2),s.Lc("",i.formatRupiah(a.totaldibayar,"")," "),s.xb(2),s.Kc(i.formatRupiah(a.sisa,""))}}function v(a,t){if(1&a&&(s.Qb(0,"tr"),s.Qb(1,"td",35),s.Jc(2,"Grand Total"),s.Pb(),s.Qb(3,"td",36),s.Jc(4),s.Pb(),s.Qb(5,"td",37),s.Jc(6),s.Pb(),s.Qb(7,"td",38),s.Jc(8),s.Pb(),s.Qb(9,"td",36),s.Jc(10),s.Pb(),s.Qb(11,"td",39),s.Jc(12),s.Pb(),s.Qb(13,"td",40),s.Jc(14),s.Pb(),s.Qb(15,"td",41),s.Jc(16),s.Pb(),s.Qb(17,"td",42),s.Jc(18),s.Pb(),s.Pb()),2&a){const a=s.bc();s.xb(4),s.Lc(" ",a.formatRupiah(a.item.banyak,""),""),s.xb(2),s.Lc(" ",a.formatRupiah(a.item.totalprekanan,""),""),s.xb(2),s.Lc(" ",a.formatRupiah(a.item.tanggunganrs,""),""),s.xb(2),s.Lc(" ",a.formatRupiah(a.item.totalharusdibayar,""),""),s.xb(2),s.Lc(" ",a.formatRupiah(a.item.pembebasan,""),""),s.xb(2),s.Lc(" ",a.formatRupiah(a.item.administrasi,""),""),s.xb(2),s.Lc(" ",a.formatRupiah(a.item.totaldibayar,""),""),s.xb(2),s.Lc(" ",a.formatRupiah(a.item.sisa,""),"")}}const M=[{path:"",component:(()=>{class a{constructor(a,t,e,i,r,n,o,s,b){this.apiService=a,this.authService=t,this.confirmationService=e,this.messageService=i,this.cacheHelper=r,this.dateHelper=n,this.alertService=o,this.route=s,this.router=b,this.item={},this.listPetugasPenerima=[]}ngOnInit(){this.item.tglAwal=new Date(o(this.dateNow).format("YYYY-MM-DD 00:00")),this.item.tglAkhir=new Date(o(this.dateNow).format("YYYY-MM-DD 23:59")),this.item.banyak=0,this.item.totalprekanan=0,this.item.tanggunganrs=0,this.item.totalharusdibayar=0,this.item.pembebasan=0,this.item.administrasi=0,this.item.totaldibayar=0,this.item.sisa=0,this.column=[{field:"no",header:"No",width:"65px"},{field:"tglsbm",header:"Tgl Bayar",width:"140px"},{field:"nosbm",header:"No Bayar",width:"140px"},{field:"nocm",header:"No RM",width:"125px"},{field:"noregistrasi",header:"Noregistrasi",width:"125px"},{field:"namapasien",header:"Nama Pasien",width:"250px"},{field:"namapasien_klien",header:"Deskripsi",width:"250px"},{field:"namaruangan",header:"Ruangan",width:"180px"},{field:"keterangan",header:"Jenis Pembayaran",width:"180px"},{field:"carabayar",header:"Cara Bayar",width:"140px"},{field:"totalpenerimaan",header:"Total Penerimaan",width:"160px",isCurrency:!0},{field:"namalengkap",header:"Petugas",width:"180px"},{field:"status",header:"Stat Setor",width:"140px"}],this.getDataCombo()}getDataCombo(){this.apiService.get("kasir/get-data-combo-lapkasir").subscribe(a=>{this.listCaraBayar=a.carabayar,this.listKelompokTransaksi=a.jenistransaksi,this.listPetugasPenerima=a.petugaskasir,this.LoadCache()})}LoadCache(){var a=this.cacheHelper.get("cacheDaftarPenerimaanPembayaran");null!=a?(this.item.tglAwal=new Date(a[0]),this.item.tglAkhir=new Date(a[1]),this.LoadData()):this.LoadData()}formatRupiah(a,t){return t+" "+parseFloat(a).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")}LoadData(){var a=o(this.item.tglAwal).format("YYYY-MM-DD HH:mm"),t=o(this.item.tglAkhir).format("YYYY-MM-DD HH:mm");this.cacheHelper.set("cacheDaftarPenerimaanPembayaran",{0:a,1:t});var e="";null!=this.item.dataCaraBayar&&(e=this.item.dataCaraBayar.id);var i="";null!=this.item.dataKelTransaksi&&(i=this.item.dataKelTransaksi.id);var r="";if(null!=this.item.selectedKasir){for(var n="",s=this.item.selectedKasir.length-1;s>=0;s--)n+=","+this.item.selectedKasir[s].id;r=n.slice(1,n.length)}this.apiService.get("kasir/get-data-laporan-penerimaan-kasir?dateStartTglSbm="+a+"&dateEndTglSbm="+t+"&idCaraBayar="+e+"&idKelTransaksi="+i+"&KasirArr="+r).subscribe(a=>{var t=a,e=0,i=0,r=0,n=0,o=0,s=0,b=0,l=0;for(let d=0;d<t.length;d++){const a=t[d];a.no=d+1,e+=parseFloat(a.banyak),i+=parseFloat(a.totalprekanan),r+=parseFloat(a.tanggunganrs),n+=parseFloat(a.totalharusdibayar),o+=parseFloat(a.pembebasan),s+=parseFloat(a.administrasi),b+=parseFloat(a.totaldibayar),l+=parseFloat(a.sisa)}this.dataTable=t,this.item.banyak=e,this.item.totalprekanan=i,this.item.tanggunganrs=r,this.item.totalharusdibayar=n,this.item.pembebasan=o,this.item.administrasi=s,this.item.totaldibayar=b,this.item.sisa=l,this.updateRowGroupMetaData()})}onSort(){this.updateRowGroupMetaData()}updateRowGroupMetaData(){if(this.rowGroupMetadata={},this.dataTable)for(let a=0;a<this.dataTable.length;a++){let t=this.dataTable[a].ruangan;0==a?this.rowGroupMetadata[t]={index:0,size:1}:t===this.dataTable[a-1].brand?this.rowGroupMetadata[t].size++:this.rowGroupMetadata[t]={index:a,size:1}}}cari(){this.LoadData()}cetakLaporan(){var a=o(this.item.tglAwal).format("YYYY-MM-DD HH:mm"),t=o(this.item.tglAkhir).format("YYYY-MM-DD HH:mm"),e="",i="";null!=this.item.dataCaraBayar&&(e=this.item.dataCaraBayar.id,i=this.item.dataCaraBayar.carabayar);var r="";if(null!=this.item.selectedKasir){for(var n="",s=this.item.selectedKasir.length-1;s>=0;s--)n+=","+this.item.selectedKasir[s].id;r=n.slice(1,n.length)}this.apiService.getUrlCetak("http://127.0.0.1:3885/desk/routes?cetak-laporan-penerimaan-kasir=1&idkasir="+r+"&tglawal="+a+"&tglakhir="+t+"&idcarabayar="+e+"&idruangan=&carabayar="+i+"&ruangan=&view=true",function(a){})}}return a.\u0275fac=function(t){return new(t||a)(s.Jb(b.a),s.Jb(b.b),s.Jb(n.a),s.Jb(n.h),s.Jb(l.a),s.Jb(d.a),s.Jb(c.a),s.Jb(r.a),s.Jb(r.f))},a.\u0275cmp=s.Db({type:a,selectors:[["app-laporan-penerimaan-kasir"]],features:[s.wb([n.a,n.h])],decls:40,vars:23,consts:[["header","Confirmation","icon","fa fa-question-circle"],[1,"p-fluid","p-formgrid"],[1,"card","card-w-title"],[1,"p-col-12","p-md-12"],[1,"p-grid"],[1,"p-col-12","p-md-11"],[1,"p-col-12","p-md-2"],["for","input",1,"label"],["yearRange","1980:2030","dateFormat","yy-mm-dd",3,"ngModel","showIcon","monthNavigator","yearNavigator","showTime","ngModelChange"],["placeholder","Cara Bayar","optionLabel","carabayar",3,"options","ngModel","filter","showClear","ngModelChange"],[1,"p-col-12","p-md-3"],["placeholder","Jenis Transaksi (Non Layanan)","optionLabel","kelompoktransaksi",3,"options","ngModel","filter","showClear","ngModelChange"],["optionLabel","namalengkap",3,"options","ngModel","ngModelChange"],[1,"p-col-12","p-md-1"],[1,"p-col-12","p-md-12",2,"margin-top","16px"],["pButton","","type","submit","icon","pi pi-search","pTooltip","Cari",3,"click"],["styleClass","p-datatable-customers","scrollable","true","sortMode","multiple","selectionMode","single",3,"columns","value","rowHover","onSort"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","footer"],[1,"p-d-flex"],["type","button","pButton","","pRipple","","icon","pi pi-print","pTooltip","Cetak Laporan ","tooltipPosition","bottom",1,"p-button-info","p-mr-2",3,"click"],["rowspan","2",2,"text-align","left","width","60px"],["rowspan","2",2,"text-align","left","width","157px"],["colspan","8",2,"text-align","center","width","800px"],[2,"text-align","right","width","180px"],[2,"text-align","right","width","200px"],[1,"ui-widget-header"],["colspan","10",4,"ngIf"],[2,"text-align","left","width","55px"],[2,"text-align","left","width","135px"],["colspan","10"],[2,"text-align","left","font-weight","bold"],[2,"text-align","left","width","300px"],[2,"text-align","center","width","130px"],[2,"text-align","center","width","184px"],[2,"text-align","center","width","90px"],[2,"text-align","center","width","187px"],[2,"text-align","center","width","80px"],[2,"text-align","center","width","145px"],[2,"text-align","center","width","170px"]],template:function(a,t){1&a&&(s.Lb(0,"p-confirmDialog",0),s.Qb(1,"div",1),s.Qb(2,"div",2),s.Qb(3,"h4"),s.Jc(4,"Laporan Penerimaan Kasir"),s.Pb(),s.Qb(5,"div",3),s.Qb(6,"div",4),s.Qb(7,"div",5),s.Qb(8,"div",4),s.Qb(9,"div",6),s.Qb(10,"label",7),s.Jc(11,"Periode Awal"),s.Pb(),s.Qb(12,"p-calendar",8),s.Yb("ngModelChange",function(a){return t.item.tglAwal=a}),s.Pb(),s.Pb(),s.Qb(13,"div",6),s.Qb(14,"label",7),s.Jc(15,"Periode Akhir"),s.Pb(),s.Qb(16,"p-calendar",8),s.Yb("ngModelChange",function(a){return t.item.tglAkhir=a}),s.Pb(),s.Pb(),s.Qb(17,"div",6),s.Qb(18,"label",7),s.Jc(19,"Cara Bayar"),s.Pb(),s.Qb(20,"p-dropdown",9),s.Yb("ngModelChange",function(a){return t.item.dataCaraBayar=a}),s.Pb(),s.Pb(),s.Qb(21,"div",10),s.Qb(22,"label",7),s.Jc(23,"Jenis Transaksi"),s.Pb(),s.Qb(24,"p-dropdown",11),s.Yb("ngModelChange",function(a){return t.item.dataKelTransaksi=a}),s.Pb(),s.Pb(),s.Qb(25,"div",10),s.Qb(26,"label",7),s.Jc(27,"Petugas Penerima"),s.Pb(),s.Qb(28,"p-multiSelect",12),s.Yb("ngModelChange",function(a){return t.item.selectedKasir=a}),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(29,"div",13),s.Qb(30,"div",4),s.Qb(31,"div",14),s.Qb(32,"button",15),s.Yb("click",function(){return t.cari()}),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(33,"div",3),s.Qb(34,"p-table",16,17),s.Yb("onSort",function(){return t.onSort()}),s.Hc(36,Q,2,0,"ng-template",18),s.Hc(37,k,24,0,"ng-template",19),s.Hc(38,J,23,11,"ng-template",20),s.Hc(39,v,19,8,"ng-template",21),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb()),2&a&&(s.xb(12),s.ic("ngModel",t.item.tglAwal)("showIcon",!0)("monthNavigator",!0)("yearNavigator",!0)("showTime",!0),s.xb(4),s.ic("ngModel",t.item.tglAkhir)("showIcon",!0)("monthNavigator",!0)("yearNavigator",!0)("showTime",!0),s.xb(4),s.ic("options",t.listCaraBayar)("ngModel",t.item.dataCaraBayar)("filter",!0)("showClear",!0),s.xb(4),s.ic("options",t.listKelompokTransaksi)("ngModel",t.item.dataKelTransaksi)("filter",!0)("showClear",!0),s.xb(4),s.ic("options",t.listPetugasPenerima)("ngModel",t.item.selectedKasir),s.xb(6),s.ic("columns",t.column)("value",t.dataTable)("rowHover",!0))},directives:[h.a,p.a,m.g,m.h,g.a,u.a,f.b,P.a,w.h,n.k,x.a,i.l],styles:[""]}),a})()}];let C=(()=>{class a{}return a.\u0275mod=s.Hb({type:a}),a.\u0275inj=s.Gb({factory:function(t){return new(t||a)},imports:[[r.j.forChild(M)],r.j]}),a})();var T=e("PCNd");let D=(()=>{class a{}return a.\u0275mod=s.Hb({type:a}),a.\u0275inj=s.Gb({factory:function(t){return new(t||a)},imports:[[i.b,C,T.a]]}),a})()}}]);