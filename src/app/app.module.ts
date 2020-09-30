import { ListserService } from './listser.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task2Component } from './task2/task2.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [AppComponent, Task2Component, ListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ListserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
