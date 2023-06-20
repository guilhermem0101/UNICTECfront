import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlunosServiceService } from 'src/app/service/alunos-service.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  formulario: FormGroup;

  constructor(private userService: AlunosServiceService) {
    this.formulario = new FormGroup({
      nome: new FormControl(''),
      cpf: new FormControl(''),
      dataNascimento: new FormControl(''),
      genero: new FormControl(''),
      email: new FormControl(''),
      cep: new FormControl(''),
      curso: new FormControl(''),
      
    });
  }

  create() {
    const formData = this.formulario.value;
    formData.dataNascimento = this.formatarData(formData.dataNascimento); // Converte para formato de data
    formData.cpf = formData.cpf.toString(); // Converte para string

    this.userService.createUser(formData).subscribe(
      response => {
        console.log('Usuário criado com sucesso:', response);
        // Aqui você pode fazer qualquer ação adicional após a criação do usuário
      },
      error => {
        console.error('Erro ao criar usuário:', error);
        // Aqui você pode tratar o erro de acordo com sua necessidade
      }
    );

    console.log(formData);
  }
  formatarData(data: any): string {
    // Converte a data para o formato adequado (exemplo: "AAAA-MM-DD")
    const dataObj = new Date(data);
    const ano = dataObj.getFullYear();
    const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0'); // Mês começa em 0
    const dia = dataObj.getDate().toString().padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
  }

}
