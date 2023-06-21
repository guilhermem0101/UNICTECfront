import { UserEditComponent } from './alunos/user-edit/user-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './alunos/user-list/user-list.component';
import { UserCreateComponent } from './alunos/user-create/user-create.component';
import { NotasComponent } from './funcionalidades/notas/notas.component';
import { GradeCurricularComponent } from './funcionalidades/grade-curricular/grade-curricular.component';


const routes: Routes = [
  { path: '', redirectTo: '/alunos', pathMatch: 'full' }, // Rota padrão
  { path: 'alunos', component: UserListComponent }, // Rota para listagem de usuários
  { path: 'alunos/cadastro', component: UserCreateComponent }, // Rota para cadastro de usuário
  { path: 'alunos/edit/:id', component: UserEditComponent }, // Rota para edição de usuário com parâmetro ID
  { path: 'notas', component: NotasComponent },
  { path: 'grade', component: GradeCurricularComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
