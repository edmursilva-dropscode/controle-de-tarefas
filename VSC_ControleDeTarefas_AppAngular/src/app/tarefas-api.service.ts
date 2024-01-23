import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefasApiService {

  readonly tarefasAPIUrl = "https://localhost:7036/api";

  constructor(private http:HttpClient) { }

  //Configurando e mapeando as rotas dos serviços API/Tarefas
  //////////////////////////////////////////////////
  //GET - ExibirTodos
  getTarefaList():Observable<any[]>{
    return this.http.get<any>(this.tarefasAPIUrl + '/Tarefas/ExibirTodos');
  }

  //POST - Incluir
  addTarefa(data:any) {
    return this.http.post(this.tarefasAPIUrl + '/Tarefas/Incluir', data);
  }

  //PUT - Atualizar
  updateTarefa(id:number|string, data:any) {
    return this.http.put(this.tarefasAPIUrl + `/Tarefas/Atualizar${id}`, data);
  }

  //DELETE - Deletar
  deleteTarefa(id:number|string) {
    return this.http.delete(this.tarefasAPIUrl + `/Tarefas/Deletar${id}`);
  }

  //Configurando e mapeando as rotas dos serviços API/TarefaTipos
  //////////////////////////////////////////////////////
  //GET - ExibirTodos
  getTarefaTipoList():Observable<any[]>{
    return this.http.get<any>(this.tarefasAPIUrl + '/TarefaTipos/ExibirTodos');
  }

  //POST - Incluir
  addTarefaTipo(data:any) {
    return this.http.post(this.tarefasAPIUrl + '/TarefaTipos/Incluir', data);
  }

  //PUT - Atualizar
  updateTarefaTipo(id:number|string, data:any) {
    return this.http.put(this.tarefasAPIUrl + `/TarefaTipos/Atualizar${id}`, data);
  }

  //DELETE - Deletar
  deleteTarefaTipo(id:number|string) {
    return this.http.delete(this.tarefasAPIUrl + `/TarefaTipos/Deletar${id}`);
  }

  //Configurando e mapeando as rotas dos serviços API/Status
  /////////////////////////////////////////////////
  //GET - ExibirTodos
  getStatusList():Observable<any[]>{
    return this.http.get<any>(this.tarefasAPIUrl + '/Status/ExibirTodos');
  }

  //POST - Incluir
  addStatus(data:any) {
    return this.http.post(this.tarefasAPIUrl + '/Status/Incluir', data);
  }

  //PUT - Atualizar
  updateStatus(id:number|string, data:any) {
    return this.http.put(this.tarefasAPIUrl + `/Status/Atualizar${id}`, data);
  }

  //DELETE - Deletar
  deleteStatus(id:number|string) {
    return this.http.delete(this.tarefasAPIUrl + `/Status/Deletar${id}`);
  }

}
