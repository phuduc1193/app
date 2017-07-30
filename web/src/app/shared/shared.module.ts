import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdMenuModule, MdSelectModule, MdRadioModule, MdGridListModule } from '@angular/material';

import { ControlMessage } from './control-message.component';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    ControlMessage, PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FlashMessagesModule,
    FormsModule, ReactiveFormsModule,
    MdMenuModule, MdButtonModule, MdIconModule, MdCardModule, MdInputModule, MdSelectModule, MdRadioModule, MdGridListModule
  ],
  exports: [
    ControlMessage, PageNotFoundComponent,
    FlashMessagesModule,
    FormsModule, ReactiveFormsModule,
    MdMenuModule, MdButtonModule, MdIconModule, MdCardModule, MdInputModule, MdSelectModule, MdRadioModule, MdGridListModule
  ]
})
export class SharedModule { }
