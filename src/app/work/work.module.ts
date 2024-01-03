import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './components/work/work.component';

@NgModule({
  declarations: [WorkComponent],
  imports: [
    CommonModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
