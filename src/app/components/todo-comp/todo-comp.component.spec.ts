import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCompComponent } from './todo-comp.component';

describe('TodoCompComponent', () => {
  let component: TodoCompComponent;
  let fixture: ComponentFixture<TodoCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoCompComponent]
    });
    fixture = TestBed.createComponent(TodoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
