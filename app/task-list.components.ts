/**
 * Created by Luiz Henrique Soares on 24/07/2016.
 */

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Task} from './task';
import {TaskService} from './task.service';
import {TaskEditComponent} from './task-edit.component';


@Component({
    selector: 'task-list',
    template:`<ul>
                    <li *ngFor="let t of tasks" (click)="onClick(t)">
                        {{t.id}} - {{t.name}}
                    </li>
               </ul>
               <task-edit [task]="selectedTask"></task-edit>`,
    directives:[TaskEditComponent],
    providers: [TaskService]
})

export class TaskListComponent implements OnInit{
    tasks:Task[];
    selectedTask:Task;

    /**
     * @param taskService
     */
    constructor(private taskService: TaskService, private router: Router){}

    ngOnInit():any{
        this.getTasks();
    }
    getTasks():Task[]{
        this.tasks = this.taskService.getTasks();
    }
    onClick(task){
        this.router.navigate(['Task.edit',{id: task.id}])
    }
}
