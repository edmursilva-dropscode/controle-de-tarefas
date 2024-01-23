import { HttpClientModule } from '@angular/common/http';                                /* biblioteca do HTTP */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';                      /* biblioteca do FORMS MODULE REACTIVE */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { ShowTarefasComponent } from './tarefas/show-tarefas/show-tarefas.component';
import { AddEditTarefasComponent } from './tarefas/add-edit-tarefas/add-edit-tarefas.component';
import { TarefasApiService } from './tarefas-api.service';                              /* biblioteca do SERVIVE criado para a aplicacao */
 
@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    ShowTarefasComponent,
    AddEditTarefasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,                                                                  /* colocar os imports HTTPCLIENTMODULE */                                                            
    FormsModule,                                                                       /* colocar os imports FORMSMODULE */
    ReactiveFormsModule                                                                /* colocar os imports FORMSREACTIVE */
  ],
  providers: [TarefasApiService],                                                      /* colocar os providers criado para a aplicacao */
  bootstrap: [AppComponent]
})
export class AppModule { }
