import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './alunos/user-list/user-list.component';
import { UserCreateComponent } from './alunos/user-create/user-create.component';
import { UserEditComponent } from './alunos/user-edit/user-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { GradeCurricularComponent } from './funcionalidades/grade-curricular/grade-curricular.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NotasComponent } from './funcionalidades/notas/notas.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    SidebarComponent,
    GradeCurricularComponent,
    NotasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, 
    MatInputModule, 
    ReactiveFormsModule, 
    NgIf,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule, 
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
