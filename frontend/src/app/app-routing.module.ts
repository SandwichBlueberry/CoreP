import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { AuthGuard, LoginGuard } from './guard';
import { AccessDeniedComponent, DashboardComponent, LoginComponent, NotFoundComponent } from './page';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { canActivate: [LoginGuard], path: 'login', component: LoginComponent },
            { path: 'bed-online', loadChildren: () => import('./page/module/bed/bed-online/bed-online.module').then(m => m.BedOnlineModule) },

            {
                path: '', component: AppMainComponent,
                children: [
                    { canActivate: [AuthGuard], path: '', component: DashboardComponent },
                    { canActivate: [AuthGuard], path: 'dashboard-pelayanan', loadChildren: () => import('./page/module/eis/dashboard-pelayanan/dashboard-pelayanan.module').then(m => m.DashboardPelayananModule) },
                    { canActivate: [AuthGuard], path: 'dashboard-keuangan', loadChildren: () => import('./page/module/eis/dashboard-keuangan/dashboard-keuangan.module').then(m => m.DashboardKeuanganModule) },
                    { canActivate: [AuthGuard], path: 'dashboard-sdm', loadChildren: () => import('./page/module/eis/dashboard-sdm/dashboard-sdm.module').then(m => m.DashboardSdmModule) },
                    { canActivate: [AuthGuard], path: 'dashboard-persediaan', loadChildren: () => import('./page/module/eis/dashboard-persediaan/dashboard-persediaan.module').then(m => m.DashboardPersediaanModule) },
                    { canActivate: [AuthGuard], path: 'dashboard-manajemen', loadChildren: () => import('./page/module/eis/dashboard-manajemen/dashboard-manajemen.module').then(m => m.DashboardManajemenModule) },

                    { canActivate: [AuthGuard], path: 'pasien-lama', loadChildren: () => import('./page/module/registrasi/pasien-lama/pasien-lama.module').then(m => m.PasienLamaModule) },
                    { canActivate: [AuthGuard], path: 'pasien-baru/:noRec/:idPasien/:departemen', loadChildren: () => import('./page/module/registrasi/pasien-baru/pasien-baru.module').then(m => m.PasienBaruModule) },
                    { canActivate: [AuthGuard], path: 'daftar-registrasi-pasien', loadChildren: () => import('./page/module/registrasi/daftar-registrasi-pasien/daftar-registrasi-pasien.module').then(m => m.DaftarRegistrasiPasienModule) },
                    { canActivate: [AuthGuard], path: 'registrasi-ruangan/:id', loadChildren: () => import('./page/module/registrasi/registrasi-ruangan/registrasi-ruangan.module').then(m => m.RegistrasiRuanganModule) },
                    { canActivate: [AuthGuard], path: 'detail-registrasi-pasien/:noregistrasi', loadChildren: () => import('./page/module/kasir/detail-registrasi-pasien/detail-registrasi-pasien.module').then(m => m.DetailRegistrasiPasienModule) },
                    { canActivate: [AuthGuard], path: 'daftar-pasien-pulang', loadChildren: () => import('./page/module/kasir/daftar-pasien-pulang/daftar-pasien-pulang.module').then(m => m.DaftarPasienPulangModule) },
                    { canActivate: [AuthGuard], path: 'daftar-piutang-pasien', loadChildren: () => import('./page/module/kasir/daftar-piutang-pasien/daftar-piutang-pasien.module').then(m => m.DaftarPiutangPasienModule) },
                    { canActivate: [AuthGuard], path: 'daftar-pasien-dirawat', loadChildren: () => import('./page/module/kasir/daftar-pasien-dirawat/daftar-pasien-dirawat.module').then(m => m.DaftarPasienDirawatModule) },
                    { canActivate: [AuthGuard], path: 'pemakaian-asuransi/:norec_rp/:norec_dpr', loadChildren: () => import('./page/module/registrasi/pemakaian-asuransi/pemakaian-asuransi.module').then(m => m.PemakaianAsuransiModule) },
                    { canActivate: [AuthGuard], path: 'input-tindakan/:norec_rp/:norec_dpr', loadChildren: () => import('./page/module/emr/input-tindakan/input-tindakan.module').then(m => m.InputTindakanModule) },
                    { canActivate: [AuthGuard], path: 'input-diagnosa/:norec_rp/:norec_dpr', loadChildren: () => import('./page/module/emr/input-diagnosa/input-diagnosa.module').then(m => m.InputDiagnosaModule) },
                    { canActivate: [AuthGuard], path: 'daftar-perjanjian', loadChildren: () => import('./page/module/registrasi/daftar-perjanjian/daftar-perjanjian.module').then(m => m.DaftarPerjanjianModule) },
                    { canActivate: [AuthGuard], path: 'pindah-pulang/:norec_rp/:norec_dpr', loadChildren: () => import('./page/module/rawatinap/pindah-pulang/pindah-pulang.module').then(m => m.PindahPulangModule) },
                    { canActivate: [AuthGuard], path: 'daftar-mutasi', loadChildren: () => import('./page/module/registrasi/daftar-mutasi/daftar-mutasi.module').then(m => m.DaftarMutasiModule) },
                    { canActivate: [AuthGuard], path: 'daftar-pasien-batal', loadChildren: () => import('./page/module/registrasi/daftar-pasien-batal/daftar-pasien-batal.module').then(m => m.DaftarPasienBatalModule) },
                    { canActivate: [AuthGuard], path: 'verifikasi-tagihan/:norec_rp', loadChildren: () => import('./page/module/kasir/verifikasi-tagihan/verifikasi-tagihan.module').then(m => m.VerifikasiTagihanModule) },
                    { canActivate: [AuthGuard], path: 'pembayaran-tagihan-layanan/:norec_sp/:jenislayanan', loadChildren: () => import('./page/module/kasir/pembayaran-tagihan-layanan/pembayaran-tagihan-layanan.module').then(m => m.PembayaranTagihanLayananModule) },
                    { canActivate: [AuthGuard], path: 'bayar-tagihan-pasien/:norec_sp/:jenispembayaran/:nominalbayar', loadChildren: () => import('./page/module/kasir/bayar-tagihan-pasien/bayar-tagihan-pasien.module').then(m => m.BayarTagihanPasienModule) },
                    { canActivate: [AuthGuard], path: 'daftar-penerimaan-pembayaran', loadChildren: () => import('./page/module/kasir/daftar-penerimaan-pembayaran/daftar-penerimaan-pembayaran.module').then(m => m.DaftarPenerimaanPembayaranModule) },
                    { canActivate: [AuthGuard], path: 'detail-tagihan/:noregistrasi', loadChildren: () => import('./page/module/kasir/detail-tagihan/detail-tagihan.module').then(m => m.DetailTagihanModule) },
                    { canActivate: [AuthGuard], path: 'penyetoran-deposit/:norec_rp', loadChildren: () => import('./page/module/kasir/penyetoran-deposit/penyetoran-deposit.module').then(m => m.PenyetoranDepositModule) },
                    { canActivate: [AuthGuard], path: 'daftar-tagihan-piutang-pasien', loadChildren: () => import('./page/module/kasir/daftar-tagihan-piutang-pasien/daftar-tagihan-piutang-pasien.module').then(m => m.DaftarTagihanPiutangPasienModule) },
                    { canActivate: [AuthGuard], path: 'rekam-medis/:norec_rp/:norec_dpr', loadChildren: () => import('./page/module/emr/rekam-medis/rekam-medis.module').then(m => m.RekamMedisModule) },
                    { canActivate: [AuthGuard], path: 'daftar-order', loadChildren: () => import('./page/module/penunjang/daftar-order/daftar-order.module').then(m => m.DaftarOrderModule) },
                    { canActivate: [AuthGuard], path: 'hasil-laboratorium/:norec_rp/:norec_dpr', loadChildren: () => import('./page/module/penunjang/hasil-laboratorium/hasil-laboratorium.module').then(m => m.HasilLaboratoriumModule) },
                    { canActivate: [AuthGuard], path: 'hasil-laboratorium-rev/:norec_rp/:norec_dpr', loadChildren: () => import('./page/module/penunjang/hasil-laboratorium-rev/hasil-laboratorium-rev.module').then(m => m.HasilLaboratoriumRevModule) },
                    { canActivate: [AuthGuard], path: 'daftar-pasien-penunjang', loadChildren: () => import('./page/module/penunjang/daftar-pasien-penunjang/daftar-pasien-penunjang.module').then(m => m.DaftarPasienPenunjangModule) },
                    { canActivate: [AuthGuard], path: 'rincian-penunjang/:norec_rp/:norec_dpr', loadChildren: () => import('./page/module/penunjang/rincian-penunjang/rincian-penunjang.module').then(m => m.RincianPenunjangModule) },

                    { canActivate: [AuthGuard], path: 'daftar-konsultasi', loadChildren: () => import('./page/module/emr/daftar-konsultasi/daftar-konsultasi.module').then(m => m.DaftarKonsultasiModule) },
                    { canActivate: [AuthGuard], path: 'daftar-pasien-terdaftar', loadChildren: () => import('./page/module/registrasi/daftar-pasien-terdaftar/daftar-pasien-terdaftar.module').then(m => m.DaftarPasienTerdaftarModule) },
                    { canActivate: [AuthGuard], path: 'daftar-triase-pasien', loadChildren: () => import('./page/module/registrasi/daftar-triase-pasien/daftar-triase-pasien.module').then(m => m.DaftarTriasePasienModule) },
                    { canActivate: [AuthGuard], path: 'rekam-medis-igd/:norm/:ket', loadChildren: () => import('./page/module/emr/rekam-medis-igd/rekam-medis-igd.module').then(m => m.RekamMedisIgdModule) },
                    { canActivate: [AuthGuard], path: 'daftar-order-resep', loadChildren: () => import('./page/module/farmasi/daftar-order-resep/daftar-order-resep.module').then(m => m.DaftarOrderResepModule) },
                    { canActivate: [AuthGuard], path: 'daftar-pasien-farmasi', loadChildren: () => import('./page/module/farmasi/daftar-pasien-farmasi/daftar-pasien-farmasi.module').then(m => m.DaftarPasienFarmasiModule) },
                    { canActivate: [AuthGuard], path: 'daftar-resep-pasien', loadChildren: () => import('./page/module/farmasi/daftar-resep-pasien/daftar-resep-pasien.module').then(m => m.DaftarResepPasienModule) },
                    { canActivate: [AuthGuard], path: 'transaksi-pelayanan-apotik/:norec_pd/:jenisdata', loadChildren: () => import('./page/module/farmasi/transaksi-pelayanan-apotik/transaksi-pelayanan-apotik.module').then(m => m.TransaksiPelayananApotikModule) },
                    { canActivate: [AuthGuard], path: 'input-resep-apotik/:norec_rp/:norec_dpr', loadChildren: () => import('./page/module/farmasi/input-resep-apotik/input-resep-apotik.module').then(m => m.InputResepApotikModule) },
                    { canActivate: [AuthGuard], path: 'daftar-stok-ruangan', loadChildren: () => import('./page/module/logistik/daftar-stok-ruangan/daftar-stok-ruangan.module').then(m => m.DaftarStokRuanganModule) },
                    { canActivate: [AuthGuard], path: 'input-retur-resep/:norec_resep', loadChildren: () => import('./page/module/farmasi/input-retur-resep/input-retur-resep.module').then(m => m.InputReturResepModule) },
                    { canActivate: [AuthGuard], path: 'daftar-retur-resep', loadChildren: () => import('./page/module/farmasi/daftar-retur-resep/daftar-retur-resep.module').then(m => m.DaftarReturResepModule) },
                    { canActivate: [AuthGuard], path: 'daftar-kartu-stok', loadChildren: () => import('./page/module/logistik/daftar-kartu-stok/daftar-kartu-stok.module').then(m => m.DaftarKartuStokModule) },
                    { canActivate: [AuthGuard], path: 'daftar-resep-nonlayanan', loadChildren: () => import('./page/module/farmasi/daftar-resep-nonlayanan/daftar-resep-nonlayanan.module').then(m => m.DaftarResepNonlayananModule) },
                    { canActivate: [AuthGuard], path: 'input-resep-nonlayanan/:norec_resep', loadChildren: () => import('./page/module/farmasi/input-resep-nonlayanan/input-resep-nonlayanan.module').then(m => m.InputResepNonlayananModule) },
                    { canActivate: [AuthGuard], path: 'retur-resep-nonlayanan/:norec_resep', loadChildren: () => import('./page/module/farmasi/retur-resep-nonlayanan/retur-resep-nonlayanan.module').then(m => m.ReturResepNonlayananModule) },
                    { canActivate: [AuthGuard], path: 'daftar-tagihan-nonlayanan', loadChildren: () => import('./page/module/kasir/daftar-tagihan-nonlayanan/daftar-tagihan-nonlayanan.module').then(m => m.DaftarTagihanNonlayananModule) },
                    { canActivate: [AuthGuard], path: 'input-tindakan-nonlayanan/:norec_sp', loadChildren: () => import('./page/module/kasir/input-tindakan-nonlayanan/input-tindakan-nonlayanan.module').then(m => m.InputTindakanNonlayananModule) },
                    { canActivate: [AuthGuard], path: 'klaim-inacbg', loadChildren: () => import('./page/module/registrasi/klaim-inacbg/klaim-inacbg.module').then(m => m.KlaimInacbgModule) },
                    { canActivate: [AuthGuard], path: 'daftar-pasien-rj', loadChildren: () => import('./page/module/rawatjalan/daftar-pasien-rj/daftar-pasien-rj.module').then(m => m.DaftarPasienRjModule) },
                    { canActivate: [AuthGuard], path: 'daftar-pasien-ri', loadChildren: () => import('./page/module/rawatinap/daftar-pasien-ri/daftar-pasien-ri.module').then(m => m.DaftarPasienRiModule) },
                    { canActivate: [AuthGuard], path: 'daftar-order-barang', loadChildren: () => import('./page/module/logistik/daftar-order-barang/daftar-order-barang.module').then(m => m.DaftarOrderBarangModule) },
                    { canActivate: [AuthGuard], path: 'daftar-kirim-barang', loadChildren: () => import('./page/module/logistik/daftar-kirim-barang/daftar-kirim-barang.module').then(m => m.DaftarKirimBarangModule) },
                    { canActivate: [AuthGuard], path: 'input-order-barang/:norec', loadChildren: () => import('./page/module/logistik/input-order-barang/input-order-barang.module').then(m => m.InputOrderBarangModule) },
                    { canActivate: [AuthGuard], path: 'input-kirim-barang/:norec/:jenisdata', loadChildren: () => import('./page/module/logistik/input-kirim-barang/input-kirim-barang.module').then(m => m.InputKirimBarangModule) },
                    { canActivate: [AuthGuard], path: 'daftar-order-gizi', loadChildren: () => import('./page/module/gizi/daftar-order-gizi/daftar-order-gizi.module').then(m => m.DaftarOrderGiziModule) },
                    { canActivate: [AuthGuard], path: 'stok-opname', loadChildren: () => import('./page/module/logistik/stok-opname/stok-opname.module').then(m => m.StokOpnameModule) },
                    { canActivate: [AuthGuard], path: 'daftar-so', loadChildren: () => import('./page/module/logistik/daftar-so/daftar-so.module').then(m => m.DaftarSoModule) },
                    { canActivate: [AuthGuard], path: 'penerimaan-barang-supplier/:norec/:jenisdata', loadChildren: () => import('./page/module/logistik/penerimaan-barang-supplier/penerimaan-barang-supplier.module').then(m => m.PenerimaanBarangSupplierModule) },
                    { canActivate: [AuthGuard], path: 'daftar-penerimaan-barang-supplier', loadChildren: () => import('./page/module/logistik/daftar-penerimaan-barang-supplier/daftar-penerimaan-barang-supplier.module').then(m => m.DaftarPenerimaanBarangSupplierModule) },
                    { canActivate: [AuthGuard], path: 'mapping-modul', loadChildren: () => import('./page/module/sysadmin/mapping-modul/mapping-modul.module').then(m => m.MappingModulModule) },
                    { canActivate: [AuthGuard], path: 'daftar-kirim-gizi', loadChildren: () => import('./page/module/gizi/daftar-kirim-menu/daftar-kirim-menu.module').then(m => m.DaftarKirimMenuModule) },
                    { canActivate: [AuthGuard], path: 'siklus-menu', loadChildren: () => import('./page/module/gizi/siklus-menu/siklus-menu.module').then(m => m.SiklusMenuModule) },
                    { canActivate: [AuthGuard], path: 'setting-login-user', loadChildren: () => import('./page/module/sysadmin/setting-login-user/setting-login-user.module').then(m => m.SettingLoginUserModule) },
                    { canActivate: [AuthGuard], path: 'map-ruangan-to-produk', loadChildren: () => import('./page/module/sysadmin/map-ruangan-to-produk/map-ruangan-to-produk.module').then(m => m.MapRuanganToProdukModule) },
                    { canActivate: [AuthGuard], path: 'master-produk', loadChildren: () => import('./page/module/sysadmin/master-produk/master-produk.module').then(m => m.MasterProdukModule) },
                    { canActivate: [AuthGuard], path: 'daftar-penerimaan-kasir', loadChildren: () => import('./page/module/bendaharapenerimaan/daftar-penerimaan-kasir/daftar-penerimaan-kasir.module').then(m => m.DaftarPenerimaanKasirModule) },
                    { canActivate: [AuthGuard], path: 'setoran-kasir-harian', loadChildren: () => import('./page/module/bendaharapenerimaan/setoran-kasir-harian/setoran-kasir-harian.module').then(m => m.SetoranKasirHarianModule) },
                    { canActivate: [AuthGuard], path: 'daftar-setoran-kasir', loadChildren: () => import('./page/module/bendaharapenerimaan/daftar-setoran-kasir/daftar-setoran-kasir.module').then(m => m.DaftarSetoranKasirModule) },
                    { canActivate: [AuthGuard], path: 'input-master-produk/:idproduk', loadChildren: () => import('./page/module/sysadmin/input-master-produk/input-master-produk.module').then(m => m.InputMasterProdukModule) },

                    { canActivate: [AuthGuard], path: 'jadwal-dokter', loadChildren: () => import('./page/module/humas/jadwal-dokter/jadwal-dokter.module').then(m => m.JadwalDokterModule) },
                    { canActivate: [AuthGuard], path: 'informasi-tarif-layanan', loadChildren: () => import('./page/module/humas/informasi-tarif-layanan/informasi-tarif-layanan.module').then(m => m.InformasiTarifLayananModule) },
                    { canActivate: [AuthGuard], path: 'setting-data', loadChildren: () => import('./page/module/sysadmin/setting-data/setting-data.module').then(m => m.SettingDataModule) },
                    { canActivate: [AuthGuard], path: 'rs-online', loadChildren: () => import('./page/module/registrasi/rs-online/rs-online.module').then(m => m.RsOnlineModule) },
                    { canActivate: [AuthGuard], path: 'form_rl_1', loadChildren: () => import('./page/module/registrasi/form-rl-satu/form-rl-satu.module').then(m => m.FormRlSatuModule) },
                    { canActivate: [AuthGuard], path: 'form_rl_2', loadChildren: () => import('./page/module/registrasi/form-rl-dua/form-rl-dua.module').then(m => m.FormRlDuaModule) },
                    { canActivate: [AuthGuard], path: 'form_rl_3', loadChildren: () => import('./page/module/registrasi/form-rl-tiga/form-rl-tiga.module').then(m => m.FormRlTigaModule) },
                    { canActivate: [AuthGuard], path: 'form_rl_4', loadChildren: () => import('./page/module/registrasi/form-rl-empat/form-rl-empat.module').then(m => m.FormRlEmpatModule) },
                    { canActivate: [AuthGuard], path: 'form_rl_5', loadChildren: () => import('./page/module/registrasi/form-rl-lima/form-rl-lima.module').then(m => m.FormRlLimaModule) },
                    { canActivate: [AuthGuard], path: 'sismadak', loadChildren: () => import('./page/module/registrasi/sismadak/sismadak.module').then(m => m.SismadakModule) },
                    { canActivate: [AuthGuard], path: 'sisrute', loadChildren: () => import('./page/module/registrasi/sisrute/sisrute.module').then(m => m.SisruteModule) },
                    { canActivate: [AuthGuard], path: 'bpjs-tools', loadChildren: () => import('./page/module/registrasi/bpjs-tools/bpjs-tools.module').then(m => m.BpjsToolsModule) },
                    { canActivate: [AuthGuard], path: 'laporan-kunjungan', loadChildren: () => import('./page/module/registrasi/laporan/laporan-kunjungan/laporan-kunjungan.module').then(m => m.LaporanKunjunganModule) },
                    { canActivate: [AuthGuard], path: 'daftar-survey', loadChildren: () => import('./page/module/humas/daftar-survey/daftar-survey.module').then(m => m.DaftarSurveyModule) },
                    { canActivate: [AuthGuard], path: 'master-ruangan', loadChildren: () => import('./page/module/sysadmin/master-ruangan/master-ruangan.module').then(m => m.MasterRuanganModule) },
                    { canActivate: [AuthGuard], path: 'map-administrasi-otomatis', loadChildren: () => import('./page/module/sysadmin/map-administrasi-otomatis/map-administrasi-otomatis.module').then(m => m.MapAdministrasiOtomatisModule) },
                    { canActivate: [AuthGuard], path: 'harga-pelayanan', loadChildren: () => import('./page/module/sysadmin/harga-pelayanan/harga-pelayanan.module').then(m => m.HargaPelayananModule) },
                    { canActivate: [AuthGuard], path: 'data-profil-rs', loadChildren: () => import('./page/module/sysadmin/data-profil-rs/data-profil-rs.module').then(m => m.DataProfilRsModule) },
                    { canActivate: [AuthGuard], path: 'data-pegawai', loadChildren: () => import('./page/module/sysadmin/data-pegawai/data-pegawai.module').then(m => m.DataPegawaiModule) },
                    { canActivate: [AuthGuard], path: 'rujukan-bpjs', loadChildren: () => import('./page/module/registrasi/rujukan-bpjs/rujukan-bpjs.module').then(m => m.RujukanBpjsModule) },

                    { canActivate: [AuthGuard], path: 'detail-tindakan/:noregistrasi', loadChildren: () => import('./page/module/emr/detail-tindakan/detail-tindakan.module').then(m => m.DetailTindakanModule) },
                    

                    //{ canActivate: [AuthGuard], path: 'kontrol-bpjs', loadChildren: () => import('./page/module/registrasi/kontrol-bpjs/rujukan-bpjs.module').then(m => m.RujukanBpjsModule) },
                    //{ canActivate: [AuthGuard], path: 'backdate-bpjs', loadChildren: () => import('./page/module/registrasi/backdate-bpjs/rujukan-bpjs.module').then(m => m.RujukanBpjsModule) },
                   
                   
                   


                    { canActivate: [AuthGuard], path: 'daftar-pasien-deposit-lebih', loadChildren: () => import('./page/module/kasir/daftar-pasien-deposit-lebih/daftar-pasien-deposit-lebih.module').then(m => m.DaftarPasienDepositLebihModule) },
                    { canActivate: [AuthGuard], path: 'laporan-penerimaan-kasir', loadChildren: () => import('./page/module/kasir/laporan-penerimaan-kasir/laporan-penerimaan-kasir.module').then(m => m.LaporanPenerimaanKasirModule) },
                    { canActivate: [AuthGuard], path: 'laporan-sensus-pasien', loadChildren: () => import('./page/module/registrasi/laporan-sensus-pasien/laporan-sensus-pasien.module').then(m => m.LaporanSensusPasienModule) },
                    { canActivate: [AuthGuard], path: 'laporan-sensus-igd', loadChildren: () => import('./page/module/registrasi/laporan-sensus-igd/laporan-sensus-igd.module').then(m => m.LaporanSensusIgdModule) },
                    { canActivate: [AuthGuard], path: 'laporan-sensus-bulanan-igd', loadChildren: () => import('./page/module/registrasi/laporan-sensus-bulanan-igd/laporan-sensus-bulanan-igd.module').then(m => m.LaporanSensusBulananIgdModule) },
                    { canActivate: [AuthGuard], path: 'master-rekanan', loadChildren: () => import('./page/module/sysadmin/master-rekanan/master-rekanan.module').then(m => m.MasterRekananModule) },
                    { canActivate: [AuthGuard], path: 'konversi-satuan', loadChildren: () => import('./page/module/sysadmin/konversi-satuan/konversi-satuan.module').then(m => m.KonversiSatuanModule) },
                    { canActivate: [AuthGuard], path: 'map-paket', loadChildren: () => import('./page/module/sysadmin/map-paket/map-paket.module').then(m => m.MapPaketModule) },
                    { canActivate: [AuthGuard], path: 'master-diagnosa', loadChildren: () => import('./page/module/sysadmin/master-diagnosa/master-diagnosa.module').then(m => m.MasterDiagnosaModule) },
                    { canActivate: [AuthGuard], path: 'map-akomodasi-otomatis', loadChildren: () => import('./page/module/sysadmin/map-akomodasi-otomatis/map-akomodasi-otomatis.module').then(m => m.MapAkomodasiOtomatisModule) },
                    


                    { canActivate: [AuthGuard], path: 'not-found', component: NotFoundComponent },
                    { canActivate: [AuthGuard], path: 'access-denied', component: AccessDeniedComponent },
                    // kalo gak ada page not found rincian-penunjang
                    { path: '**', redirectTo: 'not-found' }
                ]
            },
        ], { scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
