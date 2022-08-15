import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailTindakanRoutingModule } from './detail-tindakan-routing.module';
import { DetailTindakanComponent } from './detail-tindakan.component';
import { primeNgModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DetailTindakanComponent
  ],
  imports: [
    CommonModule,
    DetailTindakanRoutingModule,
    primeNgModule
  ],

})
export class DetailTindakanModule { }
