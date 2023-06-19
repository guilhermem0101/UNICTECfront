import { UserEditComponent } from './alunos/user-edit/user-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './alunos/user-list/user-list.component';
import { UserCreateComponent } from './alunos/user-create/user-create.component';


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Rota padrão
  { path: 'users', component: UserListComponent }, // Rota para listagem de usuários
  { path: 'users/create', component: UserCreateComponent }, // Rota para cadastro de usuário
  { path: 'users/edit/:id', component: UserEditComponent } // Rota para edição de usuário com parâmetro ID
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
