import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefasApiService } from 'src/app/tarefas-api.service';

@Component({
  selector: 'app-add-edit-tarefas',
  templateUrl: './add-edit-tarefas.component.html',
  styleUrls: ['./add-edit-tarefas.component.css']
})
export class AddEditTarefasComponent implements OnInit {

  tarefaList$!: Observable<any[]>;                              /* implemantar o que o aplicativo vai consumir/acontecer */
  statusList$!: Observable<any[]>;                              /* implemantar o que o aplicativo vai consumir/acontecer */
  tarefaTiposList$!: Observable<any[]>;                         /* implemantar o que o aplicativo vai consumir/acontecer */

  constructor(private service: TarefasApiService) { }           /* declarar qual servico vai utlizar */
  
  @Input() tarefa:any;                                          /* preparar entrada de dados das tarefas */
  id: number = 0;
  status: string = "";
  comentario: string = "";
  tarefaTipoId: number = 0;

  ngOnInit(): void {
    this.id = this.tarefa.id;                                     /* ng-Init instanciar  */
    this.status = this.tarefa.status;                             /* ng-Init instanciar  */
    this.comentario = this.tarefa.comentario;                     /* ng-Init instanciar  */
    this.tarefaTipoId = this.tarefa.tarefaTipoId;                 /* ng-Init instanciar  */    
    this.statusList$ = this.service.getStatusList();              /* ng-Init instanciar  */    
    this.tarefaList$ = this.service.getTarefaList();              /* ng-Init instanciar  */
    this.tarefaTiposList$ = this.service.getTarefaTipoList();     /* ng-Init instanciar  */
  }

  /* *************************** */
  /* preparar metodos dos botoes */
  /* *************************** */
  /* metodo Adicionar Tarefa */
  addTarefa() {
    var tarefa = {
      status: this.status,
      comentario: this.comentario,
      tarefaTipoId: this.tarefaTipoId
    }
    this.service.addTarefa(tarefa).subscribe(res => {
      var closeModelBtn = document.getElementById('add-edit-model-close');
      if (closeModelBtn) {
        closeModelBtn.click();
      }

      var showAddSuccess = document.getElementById('add-sucess-alert');
      if (showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function () {
        if (showAddSuccess) {
          showAddSuccess.style.display = "none";
        }
      }, 8000);
    })
  }
  
  /* metodo Atualizar Tarefa */
  updateTarefa() {
    var tarefa = {
      id: this.id,
      status: this.status,
      comentario: this.comentario,
      tarefaTipoId:this.tarefaTipoId
    }
    var id:number = this.id;
    this.service.updateTarefa(id,tarefa).subscribe(res => {
      var closeModelBtn = document.getElementById('add-edit-model-close');
      if (closeModelBtn) {
        closeModelBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-sucess-alert');
      if (showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function(){
        if (showUpdateSuccess) {
          showUpdateSuccess.style.display = "none";
        }
      },8000);
    })
  }

}
