import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefasApiService } from 'src/app/tarefas-api.service';
 
@Component({
  selector: 'app-show-tarefas',
  templateUrl: './show-tarefas.component.html',
  styleUrls: ['./show-tarefas.component.css']
})
export class ShowTarefasComponent implements OnInit {
 
  tarefasList$!:Observable<any[]>;                                    /* implemantar o que o aplicativo vai consumir/acontecer */
  tarefaTiposList$!:Observable<any[]>;                                /* implemantar o que o aplicativo vai consumir/acontecer */
  tarefaTiposList:any=[];                                             /* implemantar o que o aplicativo vai consumir/acontecer */
  
  tarefaTiposMap:Map<number, string> = new Map()                      /* Map para mostrar a associacao entre as tabelas, chave-primeria ou chave-estrangeira (FK, FP) */

  constructor(private service:TarefasApiService) { }                  /* declarar qual servico vai utlizar */

  ngOnInit(): void{
    this.tarefasList$ = this.service.getTarefaList();                 /* ng-Init instanciar as tarefas, lista as tarefas atraves <table>????</table> */
    this.tarefaTiposList$ = this.service.getTarefaTipoList();         /* ng-Init instanciar os tipos de tarefa, ao apertar butao listar tipos de tarefas */
    this.refreshTarefasTiposMap();                                    /* ng-Init instanciar as descricao dos tipos de tarefa, funcao para exibir os tipos de tarefas na <table>????</table> */
  }

  //variavel (prpriedades)
  modalTitle:string = '';
  activateAddEditTarefasComponent:boolean = false;
  tarefasCadastro:any;

  modalAdd() {
    this.tarefasCadastro = {
      id: 0,
      status: null,
      comentario: null,
      tarefaTipoId: null
    }
    this.modalTitle = "Nova Tarefa";
    this.activateAddEditTarefasComponent = true;
  }

  modalEdit(item:any) {
    this.tarefasCadastro = item;
    this.modalTitle = "Editar Tarefa";
    this.activateAddEditTarefasComponent = true;
  }

  modalDelete(item:any) {    
    if (confirm(`Confirma a exclusão da tarefa ${item.id}`)) {
      this.service.deleteTarefa(item.id).subscribe(res => {
        var closeModelBtn = document.getElementById('add-edit-model-close');
        if (closeModelBtn) {
          closeModelBtn.click();
        }

        var showDeleteSuccess = document.getElementById('delete-sucess-alert');
        if (showDeleteSuccess) {
          showDeleteSuccess.style.display = "block";
        }
        setTimeout(function () {
          if (showDeleteSuccess) {
            showDeleteSuccess.style.display = "none";
          }
        }, 8000);
      })      
    }
  }

  modalClose() {
    this.activateAddEditTarefasComponent = false;
    this.tarefasList$ = this.service.getTarefaList();
  }

  refreshTarefasTiposMap() {
    this.service.getTarefaTipoList().subscribe(data => {
      this.tarefaTiposList = data;       
      
      for (let i = 0; i < data.length; i++){
        this.tarefaTiposMap.set(this.tarefaTiposList[i].id, this.tarefaTiposList[i].descricao);
      }
    })
  }


}
