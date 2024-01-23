import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTarefasComponent } from './show-tarefas.component';

describe('ShowTarefasComponent', () => {
  let component: ShowTarefasComponent;
  let fixture: ComponentFixture<ShowTarefasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTarefasComponent]
    });
    fixture = TestBed.createComponent(ShowTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
