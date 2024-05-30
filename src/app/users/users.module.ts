import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations:[
    UsersComponent
  ],
  imports: [
    BrowserModule,
    UsersRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
