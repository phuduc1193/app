import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MdMenuModule, MdButtonModule, MdIconModule, MdInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule
  ],
  declarations: [ MenuComponent ],
  exports: [ MenuComponent ]
})
export class HomeModule { }
