(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"VFX+":function(e,n,i){"use strict";i.r(n),i.d(n,"BpjsToolsModule",function(){return h});var t=i("ofXK"),l=i("tyNb"),o=i("fXoL"),r=i("1SLH");const a=[{path:"",component:(()=>{class e{constructor(e,n){this.activeRoute=e,this.router=n}ngOnInit(){this.items=[{label:"Vclaim",icon:"pi pi-fw pi-file",items:[{label:"Referensi",icon:"pi pi-fw pi-chevron-circle-right",command:()=>{this.selectMenu("v-referensi")}},{label:"Peserta",icon:"pi pi-fw pi-chevron-circle-right",command:()=>{this.selectMenu("v-peserta")}},{label:"SEP",icon:"pi pi-fw pi-chevron-circle-right",command:()=>{this.selectMenu("v-sep")}},{label:"Rujukan",icon:"pi pi-fw pi-chevron-circle-right",command:()=>{this.selectMenu("v-rujukan")}},{label:"Rencana Kontrol",icon:"pi pi-fw pi-chevron-circle-right",command:()=>{this.selectMenu("v-rencana-kontrol")}},{label:"Monitoring",icon:"pi pi-fw pi-chevron-circle-right",command:()=>{this.selectMenu("v-monitoring")}},{label:"LPK",icon:"pi pi-fw pi-chevron-circle-right",command:()=>{this.selectMenu("v-lpk")}},{label:"PRB",icon:"pi pi-fw pi-chevron-circle-right",command:()=>{this.selectMenu("v-prb")}}]},{label:"Aplicares",icon:"pi pi-fw pi-file",items:[{label:"Ketersediaan Kamar",icon:"pi pi-fw pi-chevron-circle-right",command:()=>{this.selectMenu("v-bed")}}]},{label:"Antrean",icon:"pi pi-fw pi-pencil",items:[{label:"Jadwal Dokter",icon:"pi pi-fw pi-chevron-circle-right",command:()=>{this.selectMenu("antrol-jadwal-dokter")}},{label:"Antrean",icon:"pi pi-fw pi-chevron-circle-right",command:()=>{this.selectMenu("antrol-antrean")}},{label:"Dashboard",icon:"pi pi-fw pi-chevron-circle-right",command:()=>{this.selectMenu("antrol-dashboard")}}]}]}selectMenu(e){this.router.navigate([e],{relativeTo:this.activeRoute})}}return e.\u0275fac=function(n){return new(n||e)(o.Jb(l.a),o.Jb(l.f))},e.\u0275cmp=o.Db({type:e,selectors:[["app-bpjs-tools"]],decls:9,vars:1,consts:[[1,"p-fluid","p-formgrid"],[1,"card","card-w-title"],[1,"p-grid"],[1,"p-col-12","p-md-2"],[3,"model"],[1,"p-col-12","p-md-10"]],template:function(e,n){1&e&&(o.Qb(0,"div",0),o.Qb(1,"div",1),o.Qb(2,"h4"),o.Jc(3,"BPJS Kesehatan"),o.Pb(),o.Qb(4,"div",2),o.Qb(5,"div",3),o.Lb(6,"p-menu",4),o.Pb(),o.Qb(7,"div",5),o.Lb(8,"router-outlet"),o.Pb(),o.Pb(),o.Pb(),o.Pb()),2&e&&(o.xb(6),o.ic("model",n.items))},directives:[r.a,l.k],styles:["pre[class*=language-][_ngcontent-%COMP%] > code[_ngcontent-%COMP%]{border-radius:10px}"]}),e})(),children:[{path:"v-peserta",loadChildren:()=>i.e(93).then(i.bind(null,"v4DC")).then(e=>e.VPesertaModule)},{path:"v-referensi",loadChildren:()=>i.e(95).then(i.bind(null,"Z80T")).then(e=>e.VReferensiModule)},{path:"v-sep",loadChildren:()=>i.e(98).then(i.bind(null,"dAts")).then(e=>e.VSepModule)},{path:"v-rujukan",loadChildren:()=>i.e(97).then(i.bind(null,"bbcQ")).then(e=>e.VRujukanModule)},{path:"v-rencana-kontrol",loadChildren:()=>i.e(96).then(i.bind(null,"5wXf")).then(e=>e.VRencanaKontrolModule)},{path:"v-monitoring",loadChildren:()=>i.e(92).then(i.bind(null,"8FbF")).then(e=>e.VMonitoringModule)},{path:"v-lpk",loadChildren:()=>i.e(91).then(i.bind(null,"kYuZ")).then(e=>e.VLpkModule)},{path:"v-prb",loadChildren:()=>i.e(94).then(i.bind(null,"+sI7")).then(e=>e.VPrbModule)},{path:"v-bed",loadChildren:()=>i.e(90).then(i.bind(null,"2PvT")).then(e=>e.VBedModule)},{path:"antrol-jadwal-dokter",loadChildren:()=>i.e(89).then(i.bind(null,"dDog")).then(e=>e.AntrolJadwalDokterModule)},{path:"antrol-antrean",loadChildren:()=>i.e(87).then(i.bind(null,"0g28")).then(e=>e.AntrolAntreanModule)},{path:"antrol-dashboard",loadChildren:()=>i.e(88).then(i.bind(null,"qNTz")).then(e=>e.AntrolDashboardModule)}]}];let c=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(n){return new(n||e)},imports:[[l.j.forChild(a)],l.j]}),e})();var d=i("PCNd");let h=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(n){return new(n||e)},imports:[[t.b,c,d.a]]}),e})()}}]);