import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { Cell2Component } from './cell2/cell2.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    Cell2Component,
    EditorComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
