import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTarefasComponent } from './add-edit-tarefas.component';

describe('AddEditTarefasComponent', () => {
  let component: AddEditTarefasComponent;
  let fixture: ComponentFixture<AddEditTarefasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditTarefasComponent]
    });
    fixture = TestBed.createComponent(AddEditTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
