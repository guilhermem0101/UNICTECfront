import { Component } from '@angular/core';
import { FuncionalidadesService } from 'src/app/service/funcionalidades.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {

  constructor(private service: FuncionalidadesService) { }


  ngOnInit() {
    // Chame o método para obter a média do aluno
    this.getMediaPorAluno('Thiago Miura');
  }

  getMediaPorAluno(nomeAluno: string) {
    this.service.getMediaByAluno(nomeAluno).subscribe(
      (mediaAluno: any[]) => {
        // Faça o que você precisa com a média do aluno retornado
        console.log('Média do aluno:', mediaAluno);
      },
      (error) => {
        console.error('Erro ao obter média do aluno:', error);
      }
    );
  }

}
