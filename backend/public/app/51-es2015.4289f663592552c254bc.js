(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"2rKu":function(a,e,t){"use strict";t.r(e),t.d(e,"ReturResepNonlayananModule",function(){return I});var i=t("ofXK"),n=t("tyNb"),s=t("7zfz"),r=t("wd/R"),l=t("fXoL"),o=t("EJUL"),h=t("U+s4"),d=t("G0w9"),u=t("ujBT"),m=t("7CaW"),p=t("eO1q"),b=t("3Pt+"),g=t("arFO"),c=t("7kUa"),k=t("Ji6n"),f=t("V5BG"),P=t("Ks7X"),v=t("jIHw"),Q=t("xlun"),M=t("rEr+"),R=t("zFJ7");function j(a,e){if(1&a&&(l.Qb(0,"th"),l.Jc(1),l.Pb()),2&a){const a=e.$implicit;l.Fc("width: ",a.width,""),l.xb(1),l.Lc(" ",a.header," ")}}function S(a,e){if(1&a&&(l.Qb(0,"tr"),l.Lb(1,"th",49),l.Hc(2,j,2,4,"th",50),l.Pb()),2&a){const a=e.$implicit;l.xb(2),l.ic("ngForOf",a)}}function w(a,e){if(1&a&&(l.Qb(0,"span"),l.Jc(1),l.Pb()),2&a){const a=l.bc().$implicit,e=l.bc().$implicit,t=l.bc();l.xb(1),l.Lc(" ",t.formatRupiah(e[a.field],""),"")}}function x(a,e){if(1&a&&(l.Qb(0,"span"),l.Jc(1),l.Pb()),2&a){const a=l.bc().$implicit,e=l.bc().$implicit;l.xb(1),l.Lc(" ",e[a.field],"")}}function C(a,e){if(1&a&&(l.Qb(0,"td"),l.Hc(1,w,2,1,"span",52),l.Hc(2,x,2,1,"span",52),l.Pb()),2&a){const a=e.$implicit;l.Fc("width: ",a.width,""),l.xb(1),l.ic("ngIf",null!=a.isCurrency),l.xb(1),l.ic("ngIf",null==a.isCurrency)}}function D(a,e){if(1&a){const a=l.Sb();l.Qb(0,"tr"),l.Qb(1,"td",49),l.Qb(2,"button",51),l.Yb("click",function(){l.yc(a);const t=e.$implicit;return l.bc().editD(t)}),l.Pb(),l.Pb(),l.Hc(3,C,3,5,"td",50),l.Pb()}if(2&a){const a=e.columns;l.xb(3),l.ic("ngForOf",a)}}function y(a,e){if(1&a&&(l.Qb(0,"tr"),l.Qb(1,"td",53),l.Jc(2,"Grand Total : "),l.Pb(),l.Qb(3,"td"),l.Jc(4),l.Pb(),l.Pb()),2&a){const a=l.bc();l.xb(4),l.Lc(" \xa0",a.item.totalSubTotal,"")}}const K=function(){return[5,10,25,50]},T=[{path:"",component:(()=>{class a{constructor(a,e,t,i,n,s,r,l,o){this.apiService=a,this.authService=e,this.confirmationService=t,this.messageService=i,this.cacheHelper=n,this.dateHelper=s,this.alertService=r,this.route=l,this.router=o,this.params={},this.item={pasien:{}},this.columnGrid=[],this.dataSource=[],this.data2=[],this.dataProdukDetail=[],this.listSatuan=[],this.statusTambah=!0,this.hrg1=0,this.noOrder="",this.strStatus=0,this.isPemakaianObatAlkes=!1,this.hargaDiskon=0,this.tambah=function(){if(0!=this.statusTambah)if(null!=this.item.ruangan)if(null!=this.item.penulisResep)if(null!=this.item.tglresep)if(0!=this.item.jumlah)if(0!=this.item.jumlahRetur)if(null!=this.item.jenisKemasan)if(null!=this.item.produk)if(null!=this.item.satuan){var a="";this.item.KeteranganPakai&&(a=this.item.KeteranganPakai);var e=1;"Racikan"==this.item.jenisKemasan.jeniskemasan&&(e=this.item.dosis);var t=null;null!=this.item.jenisRacikan&&(t=this.item.jenisRacikan.id);var i={};if(this.disabledRuangan=!0,null!=this.item.no){for(var n=this.data2.length-1;n>=0;n--)this.data2[n].no==this.item.no&&(i.no=this.item.no,i.generik=null,i.hargajual=this.item.hargaSatuan,i.jenisobatfk=t,i.stock=this.item.stok,i.harganetto=this.item.hargaSatuan,i.nostrukterimafk=this.noTerima,i.rke=this.item.rke,i.jeniskemasanfk=this.item.jenisKemasan.id,i.jeniskemasan=this.item.jenisKemasan.jeniskemasan,i.aturanpakaifk=0,i.aturanpakai=this.item.aturanpakaitxt,i.ispagi=this.item.chkp,i.issiang=this.item.chks,i.issore=this.item.chksr,i.ismalam=this.item.chkm,i.asalprodukfk=0,i.asalproduk="",i.produkfk=this.item.produk.id,i.namaproduk=this.item.produk.namaproduk,i.nilaikonversi=this.item.nilaiKonversi,i.satuanstandarfk=this.item.satuan.ssid,i.satuanstandar=this.item.satuan.satuanstandar,i.satuanviewfk=this.item.satuan.ssid,i.satuanview=this.item.satuan.satuanstandar,i.jmlstok=this.item.stok,i.jumlah=this.item.jumlah,i.hargasatuan=this.item.hargaSatuan,i.hargadiscount=null!=this.hargaDiskon?this.hargaDiskon:0,i.persendiscount=null!=this.item.hargaDiskon?this.item.hargaDiskon:0,i.total=this.item.hargaTotal,i.dosis=e,i.jumlahxmakan=this.item.jumlahxmakan,i.jmldosis=String(this.item.jumlah/e)+"/"+String(e),i.keterangan=a,i.satuanresepfk=null!=this.item.satuanresep?this.item.satuanresep.id:null,i.satuanresep=null!=this.item.satuanresep?this.item.satuanresep.satuanresep:null,i.tglkadaluarsa=null!=this.tglkadaluarsa?this.tglkadaluarsa:null,i.isoutofstok=!1,i.iskronis=0,i.belumlengkap=!1,i.jmlretur=parseFloat(this.item.jumlahRetur),this.data2[n]=i,this.dataSource=this.data2);this.kosongkan()}else this.alertService.error("Info","Data Yang Dapat Diretur Hanya Bisa Produk Didalam Resep!")}else this.alertService.error("Info","Data Yang Dapat Diretur Hanya Bisa Produk Didalam Resep!");else this.alertService.error("Info","Data Yang Dapat Diretur Hanya Bisa Produk Didalam Resep!");else this.alertService.error("Info","Pilih Jenis Kemasan terlebih dahulu!!");else this.alertService.error("Info","Jumlah retur harus di isi!");else this.alertService.error("Info","Jumlah harus di isi!");else this.alertService.error("Info","Data Tanggal Resep Masih Kosong!");else this.alertService.error("Info","Data Penulis Resep Masih Kosong!");else this.alertService.error("Info","Data Ruangan Masih Kosong!")}}ngOnInit(){this.disabledRuangan=!1,this.isSimpan=!1,this.dateNow=new Date,this.dataLogin=this.authService.getDataLoginUser(),this.kelUser=this.dataLogin.kelompokUser.kelompokUser,this.loadColumn(),this.loadCombo(),this.firstLoad()}formatRupiah(a,e){return e+" "+parseFloat(a).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")}loadColumn(){this.columnGrid=[{field:"no",header:"No",width:"80px"},{field:"rke",header:"R/Ke",width:"100px"},{field:"jeniskemasan",header:"Kemasan",width:"120px"},{field:"jmldosis",header:"Jml/Dosis",width:"120px"},{field:"aturanpakai",header:"Aturan Pakai",width:"120px"},{field:"satuanresep",header:"Satuan Resep",width:"120px"},{field:"namaproduk",header:"Produk",width:"120px"},{field:"satuanstandar",header:"Satuan",width:"100px"},{field:"jumlah",header:"Jumlah",width:"150px"},{field:"hargasatuan",header:"Harga",width:"150px",isCurrency:!0},{field:"total",header:"Total",width:"150px",isCurrency:!0},{field:"keterangan",header:"Keterangan",width:"150px"},{field:"jmlretur",header:"Jumlah Retur",width:"150px"}]}loadCombo(){this.apiService.get("farmasi/get-combo-farmasi").subscribe(a=>{var e=a;this.listRuangan=null!=this.dataLogin.mapLoginUserToRuangan?this.dataLogin.mapLoginUserToRuangan:e.ruangfarmasi,this.listPenulisResep=e.dokter}),this.apiService.get("farmasi/get-combo-resep").subscribe(a=>{this.listJenisKemasan=a.jeniskemasan,this.listAsalProduk=a.asalproduk,this.listsatuanresep=a.satuanresep,this.listJenisRacikan=a.jenisracikan,this.item.jenisKemasan=a.jeniskemasan[1]})}firstLoad(){this.route.params.subscribe(a=>{this.params.norec_resep=a.norec_resep,this.norec_resep=a.norec_resep}),this.loadData()}loadData(){"-"!=this.norec_resep&&this.apiService.get("farmasi/get-detail-obat-bebas?norecResep="+this.norec_resep).subscribe(a=>{var e=a.detailresep,t=a.pelayananPasien,i=0;this.item.pasien=e,this.item.pasien.tgllahir=r(new Date(e.tgllahir)).format("YYYY-MM-DD HH:mm"),this.item.pasien.jeniskelamin={id:e.jkid,jeniskelamin:e.jeniskelamin},this.item.nomorResep=e.nostruk,this.item.ruangan={id:e.id,namaruangan:e.namaruangan},this.disabledRuangan=!0,this.item.penulisResep={id:e.pgid,namalengkap:e.namalengkap},this.item.tglresep=r(e.tglresep).format("YYYY-MM-DD HH:mm");for(let n=0;n<t.length;n++){const a=t[n];a.no=n+1,a.jmlretur=0,i+=parseFloat(a.total)}this.data2=t,this.item.totalSubTotal=this.formatRupiah(i,"Rp."),this.dataSource=this.data2})}clickRadio(a){"Racikan"==a.jeniskemasan?(this.showRacikanDose=!0,delete this.item.jumlahxmakan,delete this.item.dosis,delete this.item.jenisRacikan,delete this.item.sediaan,delete this.item.kekuatan):this.showRacikanDose=!1}cariPasien(){if(""==this.item.pasien.norm||"-"==this.item.pasien.norm)return this.item.pasien.namapasien=void 0,this.item.pasien.jeniskelamin=void 0,this.item.pasien.tgllahir=void 0,this.item.pasien.notelepon=void 0,void(this.item.pasien.alamatlengkap=void 0);this.apiService.get("general/get-detail-pasien?nocm="+this.item.pasien.norm).subscribe(a=>{null!=a&&(this.item.pasien=a,this.item.pasien.tgllahir=new Date(r(a.tgllahir).format("YYYY-MM-DD HH:mm")),this.item.pasien.jeniskelamin={id:a.jkid,jeniskelamin:a.jeniskelamin})})}ObatKronis(a){this.item.SelectedObatKronis=1==a.checked}filterProduk(a){this.apiService.get("farmasi/get-produk-resep?namaproduk="+a.query).subscribe(a=>{this.listProduk=a})}getSatuan(){null!=this.item.produk.id&&this.GETKONVERSI()}GETKONVERSI(){this.listSatuan=this.item.produk.konversisatuan,0==this.listSatuan.length&&(this.listSatuan=[{ssid:this.item.produk.ssid,satuanstandar:this.item.produk.satuanstandar}]),this.item.satuan={ssid:this.item.produk.ssid,satuanstandar:this.item.produk.satuanstandar},this.item.nilaiKonversi=1,null!=this.item.ruangan&&(this.statusTambah=!1,this.apiService.get("general/get-produkdetail-general?produkfk="+this.item.produk.id+"&ruanganfk="+this.item.ruangan.id).subscribe(a=>{this.dataProdukDetail=a.detail,this.item.stok=a.jmlstok/this.item.nilaiKonversi,this.onChangeKonversi(),0==a.kekuatan&&(a.kekuatan=1),this.item.kekuatan=a.kekuatan,this.item.sediaan=a.sediaan,this.tglkadaluarsa=r(this.dataProdukDetail[0].tglkadaluarsa).format("YYYY-MM-DD HH:mm"),this.dataProdukDetail.length>0&&(null!=this.dataSelected?(this.item.nilaiKonversi=this.dataSelected.nilaikonversi,this.item.stok=this.dataSelected.jmlstok,this.item.jumlah=this.dataSelected.jumlah,this.item.hargaSatuan=this.dataSelected.hargasatuan,0!=this.dataSelected.hargadiscount?(this.hargaDiskon=parseFloat(this.item.hargaSatuan)-parseFloat(this.dataSelected.hargadiscount),this.item.hargaDiskon=parseFloat(this.item.hargaSatuan)/parseFloat(this.dataSelected.hargadiscount)):(this.hargaDiskon=0,this.item.hargaDiskon=0),this.item.hargaTotal=this.dataSelected.total,null!=this.item.kekuatan&&0!=this.item.kekuatan&&(this.item.jumlahxmakan=parseFloat(this.item.jumlah)/parseFloat(this.item.dosis)*parseFloat(this.item.kekuatan))):(this.hargaDiskon=0,this.item.hargaDiskon=0)),this.statusTambah=!0,this.gettotal()}))}onChangeQty(a){this.item.jumlah=a.value,this.gettotal()}onChangeJmlXMakan(a){null!=this.item.kekuatan&&0!=this.item.kekuatan||(this.item.kekuatan=1),this.item.jumlah=parseFloat(this.item.jumlahxmakan)*parseFloat(this.item.dosis)/parseFloat(this.item.kekuatan)}onChangeKonversi(){this.item.stok>0&&(this.item.stok=parseFloat(this.item.stok)*parseFloat(this.item.nilaiKonversi),this.item.jumlah=1,this.item.hargaSatuan=0,this.item.hargaDiskon=0,this.item.hargaTotal=0)}onChangeDiskon(a){this.item.hargaDiskon=parseFloat(a.value),this.hargaDiskon=0;var e=this.item.hargaSatuan-this.item.hargaSatuan*this.item.hargaDiskon/100;this.hargaDiskon=e,this.item.hargaTotal=this.item.jumlah*e}getNilaiKonversi(){this.item.nilaiKonversi=this.item.satuan.nilaikonversi}gettotal(){for(var a=!1,e=0;e<this.dataProdukDetail.length;e++)if(a=!1,this.item.jumlah*parseFloat(this.item.nilaiKonversi)>0){this.hrg1=Math.round(parseFloat(this.dataProdukDetail[e].hargajual)*parseFloat(this.item.nilaiKonversi)),this.item.hargaSatuan=parseFloat(this.hrg1),this.item.hargaTotal=this.item.jumlah*this.hrg1,this.noTerima=this.dataProdukDetail[e].norec,a=!0;break}0==a&&(this.item.hargaSatuan=0,this.item.total=0,this.noTerima=""),0==this.item.jumlah&&(this.item.hargaSatuan=0)}kosongkan(){this.dataSelected=void 0,delete this.item.produk,delete this.item.satuan,delete this.item.nilaiKonversi,delete this.item.sediaan,delete this.item.kekuatan,this.item.stok=0,this.item.jumlah=1,this.item.no=void 0,this.item.hargaSatuan=0,delete this.item.satuanresep,delete this.item.KeteranganPakai,this.item.hargaDiskon=0,this.item.hargaTotal=0,this.hargaDiskon=0,this.tglkadaluarsa=void 0,this.item.jumlahRetur=0}clear(){"Racikan"!=this.item.jenisKemasan.jeniskemasan&&delete this.item.jenisRacikan}batal(){this.kosongkan()}editD(a){if(0!=this.statusTambah){var e=[];this.dataSelected=a,this.item.no=a.no,this.item.rke=a.rke,null!=a.jenisobatfk&&this.apiService.get("farmasi/get-jenis-obat?jrid="+a.jenisobatfk).subscribe(a=>{0!=a.data.length&&(this.item.jenisRacikan={id:a.data[0].id,jenisracikan:a.data[0].jenisracikan})}),null!=this.item.jenisKemasan&&this.item.jenisKemasan.id==a.jeniskemasanfk||(this.item.jenisKemasan={id:a.jeniskemasanfk,jeniskemasan:a.jeniskemasan}),this.item.satuanresep={id:a.satuanresepfk,satuanresep:a.satuanresep},this.item.jumlahxmakan=a.jumlahxmakan,this.item.dosis=a.dosis,this.item.aturanPakai={id:a.aturanpakaifk,name:a.aturanpakai},this.item.aturanpakaitxt=a.aturanpakai,this.item.KeteranganPakai=a.keterangan,this.item.aturanCheck=[],null!=a.ispagi&&"0"!=a.ispagi&&(this.item.aturanCheck[1]=!0),null!=a.issiang&&"0"!=a.issiang&&(this.item.aturanCheck[2]=!0),null!=a.issore&&"0"!=a.issore&&(this.item.aturanCheck[3]=!0),null!=a.ismalam&&"0"!=a.ismalam&&(this.item.aturanCheck[4]=!0),this.item.asal={id:a.asalprodukfk,asalproduk:a.asalproduk},this.apiService.get("emr/get-produk-resep?idproduk="+a.produkfk).subscribe(t=>{this.listProduk=t;for(var i=this.listProduk.length-1;i>=0;i--)if(this.listProduk[i].id==a.produkfk){e=this.listProduk[i];break}this.item.produk=e,this.GETKONVERSI()})}}Kembali(){window.history.back()}batalGrid(){this.kosongkan(),this.data2=[],this.dataSource=void 0}save(){if(null!=this.item.tglresep)if(null!=this.item.ruangan)if(null!=this.item.penulisResep)if(null!=this.item.alasan)if(0!=this.data2.length){for(var a=this.data2.length-1;a>=0;a--)if(parseFloat(this.data2[a].jmlstok)<parseFloat(this.data2[a].jumlah))return void this.alertService.error("Info","Terdapat obat dengan jumlah melebihi STOK!"+this.data2[a].namaproduk);var e=0;for(a=this.data2.length-1;a>=0;a--)e+=parseFloat(this.data2[a].total);this.isSimpan=!0;var t={noresep:this.norec_resep,tglresep:r(this.item.tglresep).format("YYYY-MM-DD HH:mm"),nocm:this.item.pasien.norm,namapasien:this.item.pasien.namapasien,penulisresepfk:this.item.penulisResep.id,ruanganfk:this.item.ruangan.id,keteranganlainnya:"Resep Non Layanan",totalharusdibayar:e,tglLahir:this.item.pasien.tgllahir,noTelepon:this.item.pasien.notelepon,alamat:this.item.pasien.alamatlengkap,jkid:this.item.pasien.jeniskelamin.id,karyawan:null,retur:"RETUR",alasan:this.item.alasan,pegawairetur:this.dataLogin.pegawai.id};this.apiService.post("farmasi/save-retur-obat-non-layanan",{strukresep:t,details:this.data2}).subscribe(a=>{this.isSimpan=!1,this.apiService.postLog("Simpan Retur Pelayanan Resep Non Layanan","Norec strukpelayanan",this.norec_resep,"Simpan Retur Pelayanan Resep Non Layanan Dengan Noresep - "+this.item.nomorResep+", Atas Nama - "+this.item.pasien.namapasien).subscribe(a=>{}),this.kosongkan(),this.data2=[],this.dataSource=void 0,window.history.back()})}else this.alertService.error("Info","Pilih Produk terlebih dahulu!");else this.alertService.error("Info","Alasan Retur Masih Kosong!");else this.alertService.error("Info","Penulis Resep Masih Kosong!");else this.alertService.error("Info","Ruangan Masih Kosong!");else this.alertService.error("Info","Tgl Resep Masih Kosong!")}}return a.\u0275fac=function(e){return new(e||a)(l.Jb(o.a),l.Jb(o.b),l.Jb(s.a),l.Jb(s.h),l.Jb(h.a),l.Jb(d.a),l.Jb(u.a),l.Jb(n.a),l.Jb(n.f))},a.\u0275cmp=l.Db({type:a,selectors:[["app-retur-resep-nonlayanan"]],features:[l.wb([s.a])],decls:122,vars:69,consts:[[1,"p-fluid","p-formgrid"],[1,"card","card-w-title"],[1,"p-col-12","p-md-12"],[1,"p-grid"],[1,"p-col-12","p-md-5"],["header","Data Resep",3,"toggleable"],[1,"p-col-12","p-md-6"],["for","input",1,"label"],["yearRange","1980:2030","dateFormat","yy-mm-dd","placeholder","Tgl Resep","hourFormat","24",3,"ngModel","showIcon","monthNavigator","yearNavigator","showTime","maxDate","disabled","ngModelChange"],["placeholder","Ruangan ","optionLabel","namaruangan","dataKey","id",3,"options","ngModel","filter","showClear","disabled","ngModelChange"],[1,"p-col-12","p-md-4"],["type","text","pInputText","","placeholder","Nomor Resep","disabled","",3,"ngModel","ngModelChange"],[1,"p-col-12","p-md-8"],["placeholder","Penulis","optionLabel","namalengkap",3,"options","ngModel","filter","showClear","disabled","ngModelChange"],[1,"p-col-12","p-md-7"],["header","Data Pasien",3,"toggleable"],[1,"p-col-12","p-md-3"],["type","text","pInputText","","placeholder","Nomor RM",3,"ngModel","disabled","ngModelChange","keyup.enter"],["type","text","pInputText","","placeholder","Nama Pasien",3,"ngModel","disabled","ngModelChange"],["placeholder","Jenis Kelamin","optionLabel","jeniskelamin","dataKey","id",3,"options","ngModel","filter","showClear","disabled","ngModelChange"],["yearRange","1980:2030","dateFormat","yy-mm-dd","placeholder","Tgl Lahir","hourFormat","24",3,"ngModel","showIcon","monthNavigator","yearNavigator","showTime","disabled","ngModelChange"],["type","text","pInputText","","placeholder","Telepon",3,"ngModel","disabled","ngModelChange"],[1,"p-col-12","p-md-9"],["type","text","pInputText","","placeholder","Alamat",3,"ngModel","disabled","ngModelChange"],["header","Resep",3,"toggleable"],[1,"p-col-12","p-md-1"],["label","Obat Kronis","binary","true","inputId","item.SelectedObatKronis",3,"ngModel","ngModelChange","onChange"],["type","text","pInputText","","placeholder","R/Ke ",3,"ngModel","ngModelChange"],["field","namaproduk","placeholder","Pilih Produk",3,"ngModel","suggestions","dropdown","ngModelChange","completeMethod","onSelect"],["placeholder","Qty","inputId","stacked","disabled","",3,"ngModel","showButtons","ngModelChange","onInput"],["placeholder","Qty Retur","inputId","stacked",3,"ngModel","showButtons","ngModelChange"],[1,"p-col-12","p-md-2"],["placeholder","Satuan ","optionLabel","satuanstandar","dataKey","id",3,"options","ngModel","filter","showClear","ngModelChange","onChange"],["type","text","pInputText","","placeholder","Harga","disabled","",3,"ngModel","ngModelChange"],["placeholder","Disc %","inputId","stacked","disabled","",3,"ngModel","showButtons","ngModelChange","onInput"],["type","text","pInputText","","placeholder","Total","disabled","",3,"ngModel","ngModelChange"],[1,"p-col-12","p-md-2","p-md-offset-8"],["pButton","","type","button","icon","pi pi-plus","pTooltip","Tambah","label","Tambah",1,"p-button","p-button-success","p-mr-2",3,"disabled","click"],["pButton","","type","button","icon","pi pi-refresh","pTooltip","Batal","label","Batal",1,"p-button","p-button-warning","p-mr-2",3,"click"],["styleClass","p-datatable-customers","scrollable","true","dataKey","no",3,"value","columns","rows","showCurrentPageReport","rowsPerPageOptions","paginator","pageLinks"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["for","input"],["pInputTextarea","","placeholder","Alasan Retur",3,"ngModel","ngModelChange"],[1,"p-col-12","p-md-3","p-md-offset-3"],["pButton","","type","button","icon","pi pi-save","pTooltip","Simpan Data","label","Simpan",1,"p-button","p-mr-2",3,"disabled","click"],["pButton","","type","button","icon","pi pi-refresh","pTooltip","Batal","label","Reset",1,"p-button","p-button-danger","p-mr-2",3,"click"],["pButton","","type","button","icon","fa fa-arrow-left","pTooltip","Kembali","label","Kembali",1,"p-button","p-button-danger","p-mr-2",3,"click"],[2,"width","80px"],[3,"style",4,"ngFor","ngForOf"],["pButton","","type","button","icon","pi pi-user-edit","pTooltip","Edit Data","label","",1,"p-button-rounded","p-mr-2",3,"click"],[4,"ngIf"],["rowspan","6"]],template:function(a,e){1&a&&(l.Qb(0,"div",0),l.Qb(1,"div",1),l.Qb(2,"h4"),l.Jc(3,"Retur Resep Non Layanan"),l.Pb(),l.Qb(4,"div",2),l.Qb(5,"div",3),l.Qb(6,"div",4),l.Qb(7,"p-panel",5),l.Qb(8,"div",2),l.Qb(9,"div",3),l.Qb(10,"div",6),l.Qb(11,"label",7),l.Jc(12,"Tgl Resep"),l.Pb(),l.Qb(13,"p-calendar",8),l.Yb("ngModelChange",function(a){return e.item.tglresep=a}),l.Pb(),l.Pb(),l.Qb(14,"div",6),l.Qb(15,"label",7),l.Jc(16,"Ruangan "),l.Pb(),l.Qb(17,"p-dropdown",9),l.Yb("ngModelChange",function(a){return e.item.ruangan=a}),l.Pb(),l.Pb(),l.Qb(18,"div",10),l.Qb(19,"label",7),l.Jc(20,"Nomor Resep"),l.Pb(),l.Qb(21,"input",11),l.Yb("ngModelChange",function(a){return e.item.nomorResep=a}),l.Pb(),l.Pb(),l.Qb(22,"div",12),l.Qb(23,"label",7),l.Jc(24,"Penulis Resep "),l.Pb(),l.Qb(25,"p-dropdown",13),l.Yb("ngModelChange",function(a){return e.item.penulisResep=a}),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(26,"div",14),l.Qb(27,"p-panel",15),l.Qb(28,"div",2),l.Qb(29,"div",3),l.Qb(30,"div",16),l.Qb(31,"label",7),l.Jc(32,"Nomor RM"),l.Pb(),l.Qb(33,"input",17),l.Yb("ngModelChange",function(a){return e.item.pasien.norm=a})("keyup.enter",function(){return e.cariPasien()}),l.Pb(),l.Pb(),l.Qb(34,"div",16),l.Qb(35,"label",7),l.Jc(36,"Nama"),l.Pb(),l.Qb(37,"input",18),l.Yb("ngModelChange",function(a){return e.item.pasien.namapasien=a}),l.Pb(),l.Pb(),l.Qb(38,"div",16),l.Qb(39,"label",7),l.Jc(40,"Jenis Kelamin"),l.Pb(),l.Qb(41,"p-dropdown",19),l.Yb("ngModelChange",function(a){return e.item.pasien.jeniskelamin=a}),l.Pb(),l.Pb(),l.Qb(42,"div",16),l.Qb(43,"label",7),l.Jc(44,"Tgl Lahir"),l.Pb(),l.Qb(45,"p-calendar",20),l.Yb("ngModelChange",function(a){return e.item.pasien.tgllahir=a}),l.Pb(),l.Pb(),l.Qb(46,"div",16),l.Qb(47,"label",7),l.Jc(48,"Nomor Telepon"),l.Pb(),l.Qb(49,"input",21),l.Yb("ngModelChange",function(a){return e.item.pasien.notelepon=a}),l.Pb(),l.Pb(),l.Qb(50,"div",22),l.Qb(51,"label",7),l.Jc(52,"Alamat"),l.Pb(),l.Qb(53,"input",23),l.Yb("ngModelChange",function(a){return e.item.pasien.alamatlengkap=a}),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(54,"div",2),l.Qb(55,"div",3),l.Qb(56,"div",2),l.Qb(57,"p-panel",24),l.Qb(58,"div",3),l.Qb(59,"div",25),l.Qb(60,"p-checkbox",26),l.Yb("ngModelChange",function(a){return e.item.SelectedObatKronis=a})("onChange",function(a){return e.ObatKronis(a)}),l.Pb(),l.Pb(),l.Pb(),l.Qb(61,"div",3),l.Qb(62,"div",25),l.Qb(63,"label",7),l.Jc(64,"R/Ke "),l.Pb(),l.Qb(65,"input",27),l.Yb("ngModelChange",function(a){return e.item.rke=a}),l.Pb(),l.Pb(),l.Pb(),l.Qb(66,"div",3),l.Qb(67,"div",10),l.Qb(68,"label",7),l.Jc(69,"Produk "),l.Pb(),l.Qb(70,"p-autoComplete",28),l.Yb("ngModelChange",function(a){return e.item.produk=a})("completeMethod",function(a){return e.filterProduk(a)})("onSelect",function(){return e.getSatuan()}),l.Pb(),l.Pb(),l.Qb(71,"div",25),l.Qb(72,"label",7),l.Jc(73,"Qty Obat "),l.Pb(),l.Qb(74,"p-inputNumber",29),l.Yb("ngModelChange",function(a){return e.item.jumlah=a})("onInput",function(a){return e.onChangeQty(a)}),l.Pb(),l.Pb(),l.Qb(75,"div",25),l.Qb(76,"label",7),l.Jc(77,"Qty Retur "),l.Pb(),l.Qb(78,"p-inputNumber",30),l.Yb("ngModelChange",function(a){return e.item.jumlahRetur=a}),l.Pb(),l.Pb(),l.Qb(79,"div",31),l.Qb(80,"label",7),l.Jc(81,"Satuan "),l.Pb(),l.Qb(82,"p-dropdown",32),l.Yb("ngModelChange",function(a){return e.item.satuan=a})("onChange",function(){return e.getNilaiKonversi()}),l.Pb(),l.Pb(),l.Qb(83,"div",31),l.Qb(84,"label",7),l.Jc(85,"Harga "),l.Pb(),l.Qb(86,"input",33),l.Yb("ngModelChange",function(a){return e.item.hargaSatuan=a}),l.Pb(),l.Pb(),l.Qb(87,"div",25),l.Qb(88,"label",7),l.Jc(89,"Diskon (%)"),l.Pb(),l.Qb(90,"p-inputNumber",34),l.Yb("ngModelChange",function(a){return e.item.hargaDiskon=a})("onInput",function(a){return e.onChangeDiskon(a)}),l.Pb(),l.Pb(),l.Qb(91,"div",31),l.Qb(92,"label",7),l.Jc(93,"Total "),l.Pb(),l.Qb(94,"input",35),l.Yb("ngModelChange",function(a){return e.item.hargaTotal=a}),l.Pb(),l.Pb(),l.Pb(),l.Qb(95,"div",3),l.Qb(96,"div",36),l.Qb(97,"button",37),l.Yb("click",function(){return e.tambah()}),l.Pb(),l.Pb(),l.Qb(98,"div",31),l.Qb(99,"button",38),l.Yb("click",function(){return e.batal()}),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(100,"div",2),l.Qb(101,"p-panel",5),l.Qb(102,"p-table",39),l.Hc(103,S,3,1,"ng-template",40),l.Hc(104,D,4,1,"ng-template",41),l.Hc(105,y,5,1,"ng-template",42),l.Pb(),l.Pb(),l.Pb(),l.Qb(106,"div",2),l.Qb(107,"div",3),l.Qb(108,"div",6),l.Qb(109,"div",3),l.Qb(110,"div",2),l.Qb(111,"label",43),l.Jc(112,"Alasan Retur"),l.Pb(),l.Qb(113,"textarea",44),l.Yb("ngModelChange",function(a){return e.item.alasan=a}),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(114,"div",6),l.Qb(115,"div",3),l.Qb(116,"div",45),l.Qb(117,"button",46),l.Yb("click",function(){return e.save()}),l.Pb(),l.Pb(),l.Qb(118,"div",16),l.Qb(119,"button",47),l.Yb("click",function(){return e.batalGrid()}),l.Pb(),l.Pb(),l.Qb(120,"div",16),l.Qb(121,"button",48),l.Yb("click",function(){return e.Kembali()}),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb()),2&a&&(l.xb(7),l.ic("toggleable",!1),l.xb(6),l.ic("ngModel",e.item.tglresep)("showIcon",!0)("monthNavigator",!0)("yearNavigator",!0)("showTime",!0)("maxDate",e.maxDateValue)("disabled",e.disabledRuangan),l.xb(4),l.ic("options",e.listRuangan)("ngModel",e.item.ruangan)("filter",!0)("showClear",!0)("disabled",e.disabledRuangan),l.xb(4),l.ic("ngModel",e.item.nomorResep),l.xb(4),l.ic("options",e.listPenulisResep)("ngModel",e.item.penulisResep)("filter",!0)("showClear",!0)("disabled",e.disabledRuangan),l.xb(2),l.ic("toggleable",!1),l.xb(6),l.ic("ngModel",e.item.pasien.norm)("disabled",e.disabledRuangan),l.xb(4),l.ic("ngModel",e.item.pasien.namapasien)("disabled",e.disabledRuangan),l.xb(4),l.ic("options",e.listJenisKelamin)("ngModel",e.item.pasien.jeniskelamin)("filter",!0)("showClear",!0)("disabled",e.disabledRuangan),l.xb(4),l.ic("ngModel",e.item.pasien.tgllahir)("showIcon",!0)("monthNavigator",!0)("yearNavigator",!0)("showTime",!0)("disabled",e.disabledRuangan),l.xb(4),l.ic("ngModel",e.item.pasien.notelepon)("disabled",e.disabledRuangan),l.xb(4),l.ic("ngModel",e.item.pasien.alamatlengkap)("disabled",e.disabledRuangan),l.xb(4),l.ic("toggleable",!1),l.xb(3),l.ic("ngModel",e.item.SelectedObatKronis),l.xb(5),l.ic("ngModel",e.item.rke),l.xb(5),l.ic("ngModel",e.item.produk)("suggestions",e.listProduk)("dropdown",!0),l.xb(4),l.ic("ngModel",e.item.jumlah)("showButtons",!0),l.xb(4),l.ic("ngModel",e.item.jumlahRetur)("showButtons",!0),l.xb(4),l.ic("options",e.listSatuan)("ngModel",e.item.satuan)("filter",!0)("showClear",!0),l.xb(4),l.ic("ngModel",e.item.hargaSatuan),l.xb(4),l.ic("ngModel",e.item.hargaDiskon)("showButtons",!0),l.xb(4),l.ic("ngModel",e.item.hargaTotal),l.xb(3),l.ic("disabled",!e.statusTambah),l.xb(4),l.ic("toggleable",!1),l.xb(1),l.ic("value",e.dataSource)("columns",e.columnGrid)("rows",20)("showCurrentPageReport",!0)("rowsPerPageOptions",l.mc(68,K))("paginator",!0)("pageLinks",5),l.xb(11),l.ic("ngModel",e.item.alasan),l.xb(4),l.ic("disabled",e.isSimpan))},directives:[m.a,p.a,b.g,b.h,g.a,b.a,c.a,k.a,f.a,P.a,v.b,Q.a,M.h,s.k,R.a,i.k,i.l],styles:[""]}),a})()}];let J=(()=>{class a{}return a.\u0275mod=l.Hb({type:a}),a.\u0275inj=l.Gb({factory:function(e){return new(e||a)},imports:[[n.j.forChild(T)],n.j]}),a})();var Y=t("PCNd");let I=(()=>{class a{}return a.\u0275mod=l.Hb({type:a}),a.\u0275inj=l.Gb({factory:function(e){return new(e||a)},imports:[[i.b,J,Y.a]]}),a})()}}]);