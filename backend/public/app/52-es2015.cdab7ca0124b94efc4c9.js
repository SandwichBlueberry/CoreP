(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{DtF2:function(e,a,i){"use strict";i.r(a),i.d(a,"TransaksiPelayananApotikModule",function(){return K});var t=i("ofXK"),n=i("tyNb"),s=i("7zfz"),r=i("wd/R"),l=i("fXoL"),p=i("EJUL"),o=i("U+s4"),c=i("G0w9"),b=i("ujBT"),d=i("Nf9I"),h=i("7CaW"),u=i("3Pt+"),g=i("7kUa"),m=i("rEr+"),f=i("jIHw"),P=i("xlun"),k=i("Wq6t"),w=i("/RsI"),v=i("arFO"),R=i("jeV5");function x(e,a){if(1&e){const e=l.Sb();l.Qb(0,"div",3),l.Qb(1,"div",5),l.Qb(2,"label",10),l.Jc(3,"Ruang Rawat"),l.Pb(),l.Qb(4,"input",39),l.Yb("ngModelChange",function(a){return l.yc(e),l.bc().item.pasien.namaruangan=a}),l.Pb(),l.Pb(),l.Qb(5,"div",5),l.Qb(6,"label",10),l.Jc(7,"Nomor RM"),l.Pb(),l.Qb(8,"input",30),l.Yb("ngModelChange",function(a){return l.yc(e),l.bc().item.pasien.nocm=a}),l.Pb(),l.Pb(),l.Qb(9,"div",5),l.Qb(10,"label",10),l.Jc(11,"Noregistrasi"),l.Pb(),l.Qb(12,"input",31),l.Yb("ngModelChange",function(a){return l.yc(e),l.bc().item.pasien.noregistrasi=a}),l.Pb(),l.Pb(),l.Qb(13,"div",5),l.Qb(14,"label",10),l.Jc(15,"Tipe Pasien"),l.Pb(),l.Qb(16,"input",40),l.Yb("ngModelChange",function(a){return l.yc(e),l.bc().item.pasien.kelompokpasien=a}),l.Pb(),l.Pb(),l.Qb(17,"div",5),l.Qb(18,"label",10),l.Jc(19,"Nama Pasien"),l.Pb(),l.Qb(20,"input",32),l.Yb("ngModelChange",function(a){return l.yc(e),l.bc().item.pasien.namapasien=a}),l.Pb(),l.Pb(),l.Qb(21,"div",5),l.Qb(22,"label",10),l.Jc(23,"Jenis Kelamin"),l.Pb(),l.Qb(24,"input",41),l.Yb("ngModelChange",function(a){return l.yc(e),l.bc().item.pasien.jeniskelamin=a}),l.Pb(),l.Pb(),l.Qb(25,"div",5),l.Qb(26,"label",10),l.Jc(27,"Umur"),l.Pb(),l.Qb(28,"input",42),l.Yb("ngModelChange",function(a){return l.yc(e),l.bc().item.pasien.umur=a}),l.Pb(),l.Pb(),l.Qb(29,"div",5),l.Qb(30,"label",10),l.Jc(31,"Alamat"),l.Pb(),l.Qb(32,"input",43),l.Yb("ngModelChange",function(a){return l.yc(e),l.bc().item.pasien.alamatlengkap=a}),l.Pb(),l.Pb(),l.Pb()}if(2&e){const e=l.bc();l.xb(4),l.ic("ngModel",e.item.pasien.namaruangan),l.xb(4),l.ic("ngModel",e.item.pasien.nocm),l.xb(4),l.ic("ngModel",e.item.pasien.noregistrasi),l.xb(4),l.ic("ngModel",e.item.pasien.kelompokpasien),l.xb(4),l.ic("ngModel",e.item.pasien.namapasien),l.xb(4),l.ic("ngModel",e.item.pasien.jeniskelamin),l.xb(4),l.ic("ngModel",e.item.pasien.umur),l.xb(4),l.ic("ngModel",e.item.pasien.alamatlengkap)}}function Q(e,a){1&e&&(l.Qb(0,"div",5),l.Lb(1,"p-skeleton",45),l.Pb())}function y(e,a){if(1&e&&(l.Qb(0,"div",3),l.Hc(1,Q,2,0,"div",44),l.Pb()),2&e){const e=l.bc();l.xb(1),l.ic("ngForOf",e.numberss)}}function C(e,a){if(1&e&&(l.Qb(0,"th"),l.Jc(1),l.Pb()),2&e){const e=a.$implicit;l.Fc("width: ",e.width,""),l.xb(1),l.Lc(" ",e.header," ")}}function S(e,a){if(1&e&&(l.Qb(0,"tr"),l.Hc(1,C,2,4,"th",46),l.Pb()),2&e){const e=a.$implicit;l.xb(1),l.ic("ngForOf",e)}}function M(e,a){if(1&e&&(l.Qb(0,"span"),l.Jc(1),l.Pb()),2&e){const e=l.bc().$implicit,a=l.bc().$implicit,i=l.bc();l.xb(1),l.Lc(" ",i.formatRupiah(a[e.field],""),"")}}function I(e,a){if(1&e&&(l.Qb(0,"span"),l.Jc(1),l.Pb()),2&e){const e=l.bc().$implicit,a=l.bc().$implicit;l.xb(1),l.Lc(" ",a[e.field],"")}}function D(e,a){if(1&e&&(l.Qb(0,"td"),l.Hc(1,M,2,1,"span",48),l.Hc(2,I,2,1,"span",48),l.Pb()),2&e){const e=a.$implicit;l.Fc("width: ",e.width,""),l.xb(1),l.ic("ngIf",null!=e.isCurrency),l.xb(1),l.ic("ngIf",null==e.isCurrency)}}function F(e,a){if(1&e&&(l.Qb(0,"tr",47),l.Hc(1,D,3,5,"td",46),l.Pb()),2&e){const e=a.columns,i=a.rowIndex;l.ic("pSelectableRow",a.$implicit)("pSelectableRowIndex",i),l.xb(1),l.ic("ngForOf",e)}}function T(e,a){if(1&e&&(l.Qb(0,"tr"),l.Qb(1,"td",49),l.Jc(2,"Grand Total : "),l.Pb(),l.Qb(3,"td"),l.Jc(4),l.Pb(),l.Pb()),2&e){const e=l.bc();l.xb(4),l.Lc(" \xa0",e.item.totalSubTotal,"")}}function J(e,a){if(1&e&&(l.Qb(0,"th"),l.Jc(1),l.Pb()),2&e){const e=a.$implicit;l.Fc("width: ",e.width,""),l.xb(1),l.Lc(" ",e.header," ")}}function j(e,a){if(1&e&&(l.Qb(0,"tr"),l.Hc(1,J,2,4,"th",46),l.Pb()),2&e){const e=a.$implicit;l.xb(1),l.ic("ngForOf",e)}}function L(e,a){if(1&e&&(l.Qb(0,"span"),l.Jc(1),l.Pb()),2&e){const e=l.bc().$implicit,a=l.bc().$implicit,i=l.bc();l.xb(1),l.Lc(" ",i.formatRupiah(a[e.field],""),"")}}function H(e,a){if(1&e&&(l.Qb(0,"span"),l.Jc(1),l.Pb()),2&e){const e=l.bc().$implicit,a=l.bc().$implicit;l.xb(1),l.Lc(" ",a[e.field],"")}}function _(e,a){if(1&e&&(l.Qb(0,"td"),l.Hc(1,L,2,1,"span",48),l.Hc(2,H,2,1,"span",48),l.Pb()),2&e){const e=a.$implicit;l.Fc("width: ",e.width,""),l.xb(1),l.ic("ngIf",null!=e.isCurrency),l.xb(1),l.ic("ngIf",null==e.isCurrency)}}function Y(e,a){if(1&e&&(l.Qb(0,"tr"),l.Hc(1,_,3,5,"td",46),l.Pb()),2&e){const e=a.columns;l.xb(1),l.ic("ngForOf",e)}}const A=function(){return{width:"50vw"}},B=function(){return[5,10,25,50]},N=function(){return{width:"1000px",minWidth:"1000px"}},O=function(){return{minHeight:"280px"}},U=function(){return{width:"450px",minWidth:"450px"}},$=[{path:"",component:(()=>{class e{constructor(e,a,i,t,n,s,r,l,p){this.apiService=e,this.authService=a,this.confirmationService=i,this.messageService=t,this.cacheHelper=n,this.dateHelper=s,this.alertService=r,this.route=l,this.router=p,this.params={},this.item={pasien:{}},this.numberss=Array(13).map((e,a)=>a)}ngOnInit(){this.israwatInap=!1,this.loadColumnButton(),this.firstLoad()}loadColumnButton(){this.listBtnCetak=[{label:"Cetak SEP",icon:"fa fa-print",command:()=>{this.ctkSep()}},{label:"Cetak Label Resep",icon:"fa fa-print",command:()=>{this.ctkLabelResep()}},{label:"Cetak Resep Obat",icon:"fa fa-print",command:()=>{this.ctkResepObat()}},{label:"Cetak Rincian Obat",icon:"fa fa-print",command:()=>{this.ctkRincianObat()}}],this.columnGrid=[{field:"no",header:"No",width:"65px"},{field:"tglpelayanan",header:"Tgl Pelayanan",width:"145px"},{field:"noresep",header:"No Resep",width:"140px"},{field:"namaruangan",header:"Ruang Rawat",width:"200px"},{field:"namaruangandepo",header:"Depo",width:"140px"},{field:"rke",header:"R/ke",width:"100px"},{field:"jeniskemasan",header:"Kemasan",width:"130px"},{field:"namaproduk",header:"Nama Obat",width:"200px"},{field:"satuanstandar",header:"Satuan",width:"120px"},{field:"jumlah",header:"Qty",width:"100px"},{field:"hargasatuan",header:"Harga",width:"120px",isCurrency:!0},{field:"hargadiscount",header:"Diskon",width:"120px",isCurrency:!0},{field:"jasa",header:"Jasa",width:"120px",isCurrency:!0},{field:"total",header:"Total",width:"120px",isCurrency:!0},{field:"kronis",header:"Kronis",width:"100px"},{field:"nostruk",header:"No Struk",width:"140px"},{field:"tglkadaluarsa",header:"Tgl Exp",width:"140px"},{field:"cekreseppulang",header:"Resep Pulang",width:"140px"}],this.columnGridRr=[{field:"no",header:"No",width:"65px"},{field:"tglpelayanan",header:"Tgl Pelayanan",width:"145px"},{field:"noresep",header:"No Resep",width:"140px"},{field:"namaruangan",header:"Ruang Rawat",width:"200px"},{field:"namaruangandepo",header:"Depo",width:"140px"},{field:"rke",header:"R/ke",width:"100px"},{field:"jeniskemasan",header:"Kemasan",width:"130px"},{field:"namaproduk",header:"Nama Obat",width:"200px"},{field:"satuanstandar",header:"Satuan",width:"120px"},{field:"jumlah",header:"Qty",width:"100px"},{field:"hargasatuan",header:"Harga",width:"120px",isCurrency:!0},{field:"hargadiscount",header:"Diskon",width:"120px",isCurrency:!0},{field:"jasa",header:"Jasa",width:"120px",isCurrency:!0},{field:"total",header:"Total",width:"120px",isCurrency:!0},{field:"kronis",header:"Kronis",width:"100px"},{field:"cekreseppulang",header:"Resep Pulang",width:"140px"}]}formatRupiah(e,a){return a+" "+parseFloat(e).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")}firstLoad(){this.route.params.subscribe(e=>{this.params.norec_pd=e.norec_pd,this.norec_pd=e.norec_pd,this.jenisData=e.jenisdata});var e=this.cacheHelper.get("rincianPelayananFarmasiCache");null!=e&&(""!=e[0]&&(this.norecResep=e[0]),""!=e[1]&&(this.norec_apd=e[1])),null!=this.params.norec_pd?this.apiService.get("general/get-pasien-byregistrasiruangan-general?norec_pd="+this.params.norec_pd).subscribe(e=>{e.tgllahir=r(new Date(e.tgllahir)).format("YYYY-MM-DD"),e.umur=this.dateHelper.getUmur(new Date(e.tgllahir),new Date(e.tglregistrasi)),2==e.instalasiidfk&&(this.israwatInap=!0),this.item.pasien=e,this.loadDataResep()}):this.alertService.warn("Info","Data Tidak Ditemukan !")}loadDataResep(){"pasien"==this.jenisData?this.apiService.get("farmasi/get-transaksi-pelayanan?norec_pd="+this.norec_pd).subscribe(e=>{var a=e,i=0;for(let t=0;t<a.length;t++){const e=a[t];e.no=t+1,e.kronis=1==e.iskronis||"t"==e.iskronis?"\u2714":"-",e.cekreseppulang="1"==e.reseppulang?"\u2714":"-",e.total=parseFloat(e.jumlah)*(parseFloat(e.hargasatuan)-parseFloat(e.hargadiscount)),e.total=parseFloat(e.total)+parseFloat(e.jasa),i+=e.total}this.item.totalSubTotal=this.formatRupiah(i,"Rp."),this.dataSource=a}):"resep"==this.jenisData?this.apiService.get("farmasi/get-transaksi-pelayanan?norec_resep="+this.norecResep).subscribe(e=>{var a=e;for(let i=0;i<a.length;i++){const e=a[i];e.no=i+1,e.kronis=1==e.iskronis||"t"==e.iskronis?"\u2714":"-",e.cekreseppulang="1"==e.reseppulang?"\u2714":"-",e.total=parseFloat(e.jumlah)*(parseFloat(e.hargasatuan)-parseFloat(e.hargadiscount)),e.total=parseFloat(e.total)+parseFloat(e.jasa)}this.dataSource=a}):"antrian"==this.jenisData&&this.apiService.get("farmasi/get-transaksi-pelayanan?norec_resep="+this.norecData).subscribe(e=>{var a=e;for(let i=0;i<a.length;i++){const e=a[i];e.no=i+1,e.kronis=1==e.iskronis||"t"==e.iskronis?"\u2714":"",e.cekreseppulang="1"==e.reseppulang?"\u2714":"-",e.total=parseFloat(e.jumlah)*(parseFloat(e.hargasatuan)-parseFloat(e.hargadiscount)),e.total=parseFloat(e.total)+parseFloat(e.jasa)}this.dataSource=a})}onRowSelect(e){null!=e.data&&this.apiService.get("general/get-data-closing-pasien/"+this.selected.noregistrasi).subscribe(a=>{a.length>0?this.alertService.error("Peringatan!","Registrasi Ini Telah Diclosing"):this.selected=e.data})}tambahResep(){null!=this.item.pasien?(this.item.norec_dpr="",this.apiService.get("general/get-data-closing-pasien/"+this.item.pasien.noregistrasi).subscribe(e=>{e.length>0?this.alertService.error("Peringatan!","Registrasi Ini Telah Diclosing"):this.apiService.get("registrasi/get-data-antrian-pasien?noregistrasi="+this.item.pasien.noregistrasi).subscribe(e=>{var a=e;this.listRuanganApd=a.ruangan,null!=a.ruangan&&(this.item.dataRuanganApd=a.ruangan[0],this.item.norec_dpr=a.ruangan[0].norec_apd,this.pop_inputResep=!0)})})):this.alertService.warn("Info","Data Pasien Tidak Ditemukan!")}inputObat(){null!=this.item.dataRuanganApd?(this.cacheHelper.set("InputResepPasienCtrl",{0:this.item.pasien.nocm,1:this.item.pasien.namapasien,2:this.item.pasien.jeniskelamin,3:this.item.pasien.noregistrasi,4:this.item.pasien.umur,5:this.item.pasien.objectkelasfk,6:this.item.pasien.namakelas,7:this.item.pasien.tglregistrasi,8:this.item.dataRuanganApd.norec_apd,9:"",10:this.item.pasien.kelompokpasien,11:this.item.dataRuanganApd.ruangan,12:this.item.pasien.alamatlengkap,13:"",14:"",15:"",16:""}),this.router.navigate(["input-resep-apotik",this.item.pasien.norec_pd,this.item.dataRuanganApd.norec_apd])):this.alertService.warn("Info","Ruang Antrian Belum Dipilih!")}ubahResep(){null!=this.selected?null!=this.item.pasien?(this.cacheHelper.set("InputResepPasienCtrl",{0:this.selected.nocm,1:this.selected.namapasien,2:this.selected.jeniskelamin,3:this.selected.noregistrasi,4:this.item.pasien.umur,5:this.item.pasien.objectkelasfk,6:this.item.pasien.namakelas,7:this.item.pasien.tglregistrasi,8:this.selected.norec_apd,9:this.selected.norec_resep,10:this.item.pasien.kelompokpasien,11:this.selected.namaruangan,12:this.item.pasien.alamatlengkap,13:"",14:"",15:"",16:"EditResep"}),this.router.navigate(["input-resep-apotik",this.selected.norec_pd,this.selected.norec_apd])):this.alertService.warn("Info","Data Pasien Tidak Ditemukan!"):this.alertService.warn("Info","Data Belum Dipilih!")}hapusResep(){if(null!=this.selected){var e={norec:this.selected.norec_resep};this.confirmationService.confirm({message:"Apakah Anda Yakin Akan Menghapus Resep Ini?",header:"Konfirmasi Hapus Resep",icon:"pi pi-info-circle",accept:()=>{this.confirmationService.close(),this.apiService.post("farmasi/save-hapus-pelayananobat",e).subscribe(e=>{this.apiService.postLog("Hapus Resep","Norec Transaksi Resep",this.selected.norec_resep,"Hapus Resep No resep: "+this.selected.noresep+"/ Noregistrasi : "+this.item.pasien.noregistrasi).subscribe(e=>{}),this.loadDataResep()})},reject:e=>{this.alertService.warn("Info, Konfirmasi","Hapus Resep Dibatalkan!"),this.confirmationService.close()}})}else this.alertService.warn("Info","Data Belum Dipilih!")}riwayatResep(){null!=this.item.pasien?this.apiService.get("farmasi/get-transaksi-pelayanan?&noReg="+this.item.pasien.noregistrasi+"&nocm="+this.item.pasien.nocm).subscribe(e=>{var a=e;if(null!=a)for(let i=0;i<a.length;i++){const e=a[i];e.no=i+1,e.total=parseFloat(e.jumlah)*(parseFloat(e.hargasatuan)-parseFloat(e.hargadiscount)),e.total=parseFloat(e.total)+parseFloat(e.jasa),e.cekreseppulang="1"==e.reseppulang?"\u2714":"-"}this.dataSourceRr=a,this.pop_riwayatResep=!0}):this.alertService.warn("Info","Data Tidak Ditemukan!")}returResep(){null!=this.selected?(this.cacheHelper.set("ReturResepPasienCache",{0:this.selected.nocm,1:this.selected.namapasien,2:this.selected.jeniskelamin,3:this.selected.noregistrasi,4:this.item.pasien.umur,5:this.item.pasien.objectkelasfk,6:this.item.pasien.namakelas,7:this.item.pasien.tglregistrasi,8:this.selected.norec_apd,9:this.selected.norec_resep,10:this.item.pasien.kelompokpasien,11:this.selected.namaruangan,12:this.item.pasien.alamatlengkap,13:"ReturResep"}),this.router.navigate(["input-retur-resep",this.selected.norec_resep])):this.alertService.warn("Info","Data Belum Dipilih!")}ctkSep(){if(null!=this.item.pasien)if("Umum/Tunai"!==this.item.pasien.kelompokpasien){var e;e=confirm("View SEP? ")?"true":"false",this.apiService.getUrlCetak("http://127.0.0.1:3885/desk/routes?cetak-sep=1&noregistrasi="+this.item.pasien.noregistrasi+"&qty=1&idpegawai="+this.authService.getDataLoginUser().pegawai.namaLengkap+"&ket=&view="+e,function(e){})}else this.alertService.error("Info","Hanya Untuk Pasien BPJS");else this.alertService.error("Info","Pilih data dulu")}ctkLabelIdentitas(){throw new Error("Method not implemented.")}ctkRekapLabel(){throw new Error("Method not implemented.")}ctkLabelResep(){if(null!=this.selected){var e,a=this.authService.getDataLoginUser().pegawai.namaLengkap,i=this.selected.norec_resep;e=confirm("View Label Farmasi ? ")?"true":"false",this.apiService.getUrlCetak("http://127.0.0.1:3885/desk/routes?cetak-LabelFarmasi=1&norecresep="+i+"&user="+a+"&jenisdata=LAYANAN&view="+e,function(e){})}else this.alertService.warn("Info,","Data Belum Dipilih!")}ctkResepObat(){if(null!=this.selected){var e,a=this.authService.getDataLoginUser().pegawai.namaLengkap,i=this.selected.norec_resep;e=confirm("View Resep Farmasi ? ")?"true":"false",this.apiService.getUrlCetak("http://127.0.0.1:3885/desk/routes?cetak-resep=1&norecresep="+i+"&user="+a+"&jenisdata=LAYANAN&view="+e,function(e){})}else this.alertService.warn("Info,","Data Belum Dipilih!")}ctkLabelBiru(){throw new Error("Method not implemented.")}ctkRincianObat(){if(null!=this.selected){var e,a=this.authService.getDataLoginUser().pegawai.namaLengkap,i=this.selected.norec_resep;e=confirm("View Rincian Obat ? ")?"true":"false",this.apiService.getUrlCetak(0==this.israwatInap?"http://127.0.0.1:3885/desk/routes?cetak-rincian-resep-rajal=1&norecresep="+i+"&user="+a+"&view="+e:"http://127.0.0.1:3885/desk/routes?cetak-rincian-resep-ranap=1&norecresep="+i+"&user="+a+"&view="+e,function(e){})}else this.alertService.warn("Info,","Data Belum Dipilih!")}}return e.\u0275fac=function(a){return new(a||e)(l.Jb(p.a),l.Jb(p.b),l.Jb(s.a),l.Jb(s.h),l.Jb(o.a),l.Jb(c.a),l.Jb(b.a),l.Jb(n.a),l.Jb(n.f))},e.\u0275cmp=l.Db({type:e,selectors:[["app-transaksi-pelayanan-apotik"]],features:[l.wb([s.a])],decls:84,vars:55,consts:[["rejectButtonStyleClass","p-button-text",3,"baseZIndex"],[1,"p-fluid","p-formgrid"],[1,"card","card-w-title"],[1,"p-grid"],[1,"p-col-12","p-md-3"],[1,"p-col-12","p-md-12"],["header","Info Pasien",3,"toggleable"],["class","p-grid",4,"ngIf"],["header","Pengkajian",3,"toggleable"],[1,"p-col-12","p-md-10"],["for","input",1,"label"],["type","text","pInputText","","placeholder","Berat Badan","disabled","",3,"ngModel","ngModelChange"],[1,"p-col-12","p-md-2",2,"margin-top","20px"],["type","text","pInputText","","placeholder","Alergi","disabled","",3,"ngModel","ngModelChange"],[1,"p-col-12","p-md-9"],["header","Daftar Resep",3,"toggleable"],["styleClass","p-datatable-customers","scrollable","true","sortMode","multiple","selectionMode","single",3,"value","columns","selection","rows","showCurrentPageReport","rowsPerPageOptions","paginator","pageLinks","selectionChange","onRowSelect"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],[1,"p-col-12","p-md-2"],["pButton","","type","button","icon","fa fa-plus-square","pTooltip","Tambah Resep","label","Tambah Resep",1,"p-button","p-mr-2",3,"click"],["pButton","","type","button","icon","fa fa-pencil-square-o","pTooltip","Ubah Resep","label","Ubah Resep",1,"p-button","p-mr-2",3,"click"],["pButton","","type","button","icon","fa fa-trash","pTooltip","Hapus Resep","label","Hapus Resep",1,"p-button","p-button-danger","p-mr-2",3,"click"],["pButton","","type","button","icon","fa fa-retweet","pTooltip","Retur Resep","label","Retur Resep",1,"p-button","p-mr-2",3,"click"],["pButton","","type","button","icon","fa fa-history","pTooltip","Riwayat Resep","label","Riwayat Resep",1,"p-button","p-mr-2",3,"click"],["label","Cetak","styleClass","p-button-help","icon","pi pi-ellipsis-v",3,"model"],["header","Riwayat Resep Pasien",3,"visible","modal","maximizable","draggable","resizable","contentStyle","visibleChange"],["header","Data Pasien",3,"toggleable"],[1,"p-col-12","p-md-4"],["type","text","pInputText","","placeholder","Nomor RM","disabled","",3,"ngModel","ngModelChange"],["type","text","pInputText","","placeholder","Noregistrasi","disabled","",3,"ngModel","ngModelChange"],["type","text","pInputText","","placeholder","Nama Pasien","disabled","",3,"ngModel","ngModelChange"],["styleClass","p-datatable-customers","scrollable","true",3,"value","columns","rows","showCurrentPageReport","rowsPerPageOptions","paginator","pageLinks"],["header","Pilih Ruang Antrian",3,"visible","modal","maximizable","draggable","resizable","visibleChange"],[1,"p-col-12","p-md-6"],["placeholder","Ruangan","optionLabel","ruangan","appendTo","body",3,"options","ngModel","filter","showClear","ngModelChange"],[1,"p-col-12","p-md-6",2,"margin-top","15px"],["pButton","","type","submit","icon","fa fa-medkit","pTooltip","Input Obat/Alkes","label","Input Obat/Alkes",3,"click"],["type","text","pInputText","","placeholder","Ruang Rawat","disabled","",3,"ngModel","ngModelChange"],["type","text","pInputText","","placeholder","Tipe Pasien","disabled","",3,"ngModel","ngModelChange"],["type","text","pInputText","","placeholder","Jenis Kelamin","disabled","",3,"ngModel","ngModelChange"],["type","text","pInputText","","placeholder","Umur","disabled","",3,"ngModel","ngModelChange"],["type","text","pInputText","","placeholder","Alamat","disabled","",3,"ngModel","ngModelChange"],["class","p-col-12 p-md-12",4,"ngFor","ngForOf"],["height","2.4rem"],[3,"style",4,"ngFor","ngForOf"],[3,"pSelectableRow","pSelectableRowIndex"],[4,"ngIf"],["rowspan","6"]],template:function(e,a){1&e&&(l.Lb(0,"p-confirmDialog",0),l.Qb(1,"div",1),l.Qb(2,"div",2),l.Qb(3,"h4"),l.Jc(4,"Rincian Pelayanan Farmasi"),l.Pb(),l.Qb(5,"div",3),l.Qb(6,"div",4),l.Qb(7,"div",3),l.Qb(8,"div",5),l.Qb(9,"p-panel",6),l.Qb(10,"div",5),l.Hc(11,x,33,8,"div",7),l.Hc(12,y,2,1,"div",7),l.Pb(),l.Pb(),l.Pb(),l.Qb(13,"div",5),l.Qb(14,"p-panel",8),l.Qb(15,"div",5),l.Qb(16,"div",3),l.Qb(17,"div",9),l.Qb(18,"label",10),l.Jc(19,"Berat Badan"),l.Pb(),l.Qb(20,"input",11),l.Yb("ngModelChange",function(e){return a.item.pasien.beratbadan=e}),l.Pb(),l.Pb(),l.Qb(21,"div",12),l.Qb(22,"label",10),l.Jc(23,"KG"),l.Pb(),l.Pb(),l.Qb(24,"div",5),l.Qb(25,"label",10),l.Jc(26,"Alergi"),l.Pb(),l.Qb(27,"input",13),l.Yb("ngModelChange",function(e){return a.item.pasien.alergi=e}),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(28,"div",14),l.Qb(29,"div",3),l.Qb(30,"div",5),l.Qb(31,"p-panel",15),l.Qb(32,"div",5),l.Qb(33,"p-table",16),l.Yb("selectionChange",function(e){return a.selected=e})("onRowSelect",function(e){return a.onRowSelect(e)}),l.Hc(34,S,2,1,"ng-template",17),l.Hc(35,F,2,3,"ng-template",18),l.Hc(36,T,5,1,"ng-template",19),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(37,"div",5),l.Qb(38,"div",3),l.Qb(39,"div",20),l.Qb(40,"button",21),l.Yb("click",function(){return a.tambahResep()}),l.Pb(),l.Pb(),l.Qb(41,"div",20),l.Qb(42,"button",22),l.Yb("click",function(){return a.ubahResep()}),l.Pb(),l.Pb(),l.Qb(43,"div",20),l.Qb(44,"button",23),l.Yb("click",function(){return a.hapusResep()}),l.Pb(),l.Pb(),l.Qb(45,"div",20),l.Qb(46,"button",24),l.Yb("click",function(){return a.returResep()}),l.Pb(),l.Pb(),l.Qb(47,"div",20),l.Qb(48,"button",25),l.Yb("click",function(){return a.riwayatResep()}),l.Pb(),l.Pb(),l.Qb(49,"div",20),l.Lb(50,"p-splitButton",26),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(51,"p-dialog",27),l.Yb("visibleChange",function(e){return a.pop_riwayatResep=e}),l.Qb(52,"div",1),l.Qb(53,"div",5),l.Qb(54,"div",3),l.Qb(55,"div",5),l.Qb(56,"p-panel",28),l.Qb(57,"div",5),l.Qb(58,"div",3),l.Qb(59,"div",29),l.Qb(60,"label",10),l.Jc(61,"Nomor RM"),l.Pb(),l.Qb(62,"input",30),l.Yb("ngModelChange",function(e){return a.item.pasien.nocm=e}),l.Pb(),l.Pb(),l.Qb(63,"div",29),l.Qb(64,"label",10),l.Jc(65,"Noregistrasi"),l.Pb(),l.Qb(66,"input",31),l.Yb("ngModelChange",function(e){return a.item.pasien.noregistrasi=e}),l.Pb(),l.Pb(),l.Qb(67,"div",29),l.Qb(68,"label",10),l.Jc(69,"Nama Pasien"),l.Pb(),l.Qb(70,"input",32),l.Yb("ngModelChange",function(e){return a.item.pasien.namapasien=e}),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(71,"div",5),l.Qb(72,"p-table",33),l.Hc(73,j,2,1,"ng-template",17),l.Hc(74,Y,2,1,"ng-template",18),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(75,"p-dialog",34),l.Yb("visibleChange",function(e){return a.pop_inputResep=e}),l.Qb(76,"div",1),l.Qb(77,"div",3),l.Qb(78,"div",35),l.Qb(79,"label",10),l.Jc(80,"Ruangan"),l.Pb(),l.Qb(81,"p-dropdown",36),l.Yb("ngModelChange",function(e){return a.item.dataRuanganApd=e}),l.Pb(),l.Pb(),l.Qb(82,"div",37),l.Qb(83,"button",38),l.Yb("click",function(){return a.inputObat()}),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb()),2&e&&(l.Ec(l.mc(49,A)),l.ic("baseZIndex",1e4),l.xb(9),l.ic("toggleable",!1),l.xb(2),l.ic("ngIf",null!=a.item.pasien.noregistrasi),l.xb(1),l.ic("ngIf",null==a.item.pasien.noregistrasi),l.xb(2),l.ic("toggleable",!1),l.xb(6),l.ic("ngModel",a.item.pasien.beratbadan),l.xb(7),l.ic("ngModel",a.item.pasien.alergi),l.xb(4),l.ic("toggleable",!1),l.xb(2),l.ic("value",a.dataSource)("columns",a.columnGrid)("selection",a.selected)("rows",20)("showCurrentPageReport",!0)("rowsPerPageOptions",l.mc(50,B))("paginator",!0)("pageLinks",5),l.xb(17),l.ic("model",a.listBtnCetak),l.xb(1),l.Ec(l.mc(51,N)),l.ic("visible",a.pop_riwayatResep)("modal",!0)("maximizable",!0)("draggable",!0)("resizable",!0)("contentStyle",l.mc(52,O)),l.xb(5),l.ic("toggleable",!1),l.xb(6),l.ic("ngModel",a.item.pasien.nocm),l.xb(4),l.ic("ngModel",a.item.pasien.noregistrasi),l.xb(4),l.ic("ngModel",a.item.pasien.namapasien),l.xb(2),l.ic("value",a.dataSourceRr)("columns",a.columnGridRr)("rows",20)("showCurrentPageReport",!0)("rowsPerPageOptions",l.mc(53,B))("paginator",!0)("pageLinks",5),l.xb(3),l.Ec(l.mc(54,U)),l.ic("visible",a.pop_inputResep)("modal",!0)("maximizable",!0)("draggable",!0)("resizable",!0),l.xb(6),l.ic("options",a.listRuanganApd)("ngModel",a.item.dataRuanganApd)("filter",!0)("showClear",!0))},directives:[d.a,h.a,t.l,u.a,g.a,u.g,u.h,m.h,s.k,f.b,P.a,k.a,w.a,v.a,t.k,R.a,m.e],styles:[""]}),e})()}];let E=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(a){return new(a||e)},imports:[[n.j.forChild($)],n.j]}),e})();var z=i("PCNd");let K=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(a){return new(a||e)},imports:[[t.b,E,z.a]]}),e})()}}]);