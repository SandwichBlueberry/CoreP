import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailTindakanComponent } from './detail-tindakan.component';

const routes: Routes = [{ path: '', component: DetailTindakanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailTindakanRoutingModule { }
