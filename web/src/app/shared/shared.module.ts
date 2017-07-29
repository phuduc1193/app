import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdMenuModule, MdSelectModule, MdRadioModule, MdGridListModule } from '@angular/material';
import { ControlMessage } from './control-message.component';
import { ValidationService } from './validation.service';
import { JwtHelper } from 'angular2-jwt';

@NgModule({
  declarations: [
    ControlMessage
  ],
  imports: [
    CommonModule, FlashMessagesModule,
    FormsModule, ReactiveFormsModule,
    MdMenuModule, MdButtonModule, MdIconModule, MdCardModule, MdInputModule, MdSelectModule, MdRadioModule, MdGridListModule
  ],
  providers: [ ValidationService, JwtHelper ],
  exports: [
    ControlMessage, FlashMessagesModule,
    FormsModule, ReactiveFormsModule,
    MdMenuModule, MdButtonModule, MdIconModule, MdCardModule, MdInputModule, MdSelectModule, MdRadioModule, MdGridListModule
  ]
})
export class SharedModule { }
