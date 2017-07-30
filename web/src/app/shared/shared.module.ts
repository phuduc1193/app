import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdMenuModule, MdSelectModule, MdRadioModule, MdGridListModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';

import { ControlMessage } from './control-message.component';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    ControlMessage, PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FlashMessagesModule,
    FormsModule, ReactiveFormsModule, NguiAutoCompleteModule,
    MdMenuModule, MdButtonModule, MdIconModule, MdCardModule, MdInputModule, MdSelectModule, MdRadioModule, MdGridListModule, MdDatepickerModule, MdNativeDateModule
  ],
  exports: [
    ControlMessage, PageNotFoundComponent,
    FlashMessagesModule,
    FormsModule, ReactiveFormsModule, NguiAutoCompleteModule,
    MdMenuModule, MdButtonModule, MdIconModule, MdCardModule, MdInputModule, MdSelectModule, MdRadioModule, MdGridListModule, MdDatepickerModule, MdNativeDateModule
  ]
})
export class SharedModule { }
