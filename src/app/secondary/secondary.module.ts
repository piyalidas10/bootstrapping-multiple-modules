import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SecondaryComponent } from './secondary.component';

@NgModule({
    imports: [
      BrowserModule,
      CommonModule
    ],
    declarations: [
        SecondaryComponent
    ],
    providers: [],
    bootstrap: [SecondaryComponent]
  })
export class SecondaryModule { }