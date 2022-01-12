import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrimaryComponent } from './primary.component';

@NgModule({
    imports: [
      BrowserModule,
      CommonModule
    ],
    declarations: [
        PrimaryComponent
    ],
    providers: [],
    bootstrap: [PrimaryComponent]
  })
export class PrimaryModule { }