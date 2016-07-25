/**
 * Created by Luiz Henrique Soares on 24/07/2016.
 */

import {Component, Input, OnInit} from '@angular/core';
import {Task} from './task';
import {TaskService} from "./task.service";
import {Router, RouteParams} from "@angular/router-deprecated";

@Component({
    selector: 'task-edit',
    template: `
                <h3>Editação de Tarafa</h3>    
               <div *ngIf="task">
                    <input type="text" [(ngModel)]="task.name" />
                    <button type="button" (click)="goToTaskList">Salvar</button>
                </div>`
})

export class TaskEditComponent implements OnInit {
    @Input()
    task:Task;

    constructor(private route: Router, private routeParams:RouteParams, private taskService: TaskService){}

    ngOnInit():any{
       this.getTask();
   }
   getTask(){
       let id = this.routeParams.get('id');
       this.task = <Task>this.taskService.getTask(id);
   }

   goToTaskList(){
     this.route.navigate(['Task.List'])
   }
}
