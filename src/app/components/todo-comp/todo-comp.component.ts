import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-comp',
  templateUrl: './todo-comp.component.html',
  styleUrls: ['./todo-comp.component.css']
})
export class TodoCompComponent {
  allList:Todo[] = [
    {
      task: "Fold clothes",
      completed: false
    },
    {
      task: "Put clothes in dresser",
      completed: false
    },
    {
      task: "Relax",
      completed: false
    },
    {
      task: "Pet dog",
      completed: false
    },
    {
      task: "Go to grocery store",
      completed: false
    }
  ];

  completedTask(targetTodo:Todo):void{
    let index = this.allList.findIndex((t:Todo) => t == targetTodo)
    this.allList[index].completed = !targetTodo.completed
  }

  newTask:Todo = {} as Todo;
  addTask():void{
    let result:Todo = {
      task: this.newTask.task,
      completed: false
    };

    this.allList.push(result);

    this.newTask = {} as Todo;
  }

  removeTask(targetTask:Todo):void{
    let index = this.allList.findIndex((t:Todo) => t == targetTask)
    this.allList.splice(index, 1);
  }

  displayMessage():boolean{
    let result:boolean = false;
    this.allList.forEach((t:Todo) => {
      if(t.completed == false){
        
        result = true;
      }

      
    });
    return result;
  }
}
