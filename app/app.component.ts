import {Component} from '@angular/core';
import {TaskListComponent} from './task-list.components';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><task-list></task-list>',
    directives:[TaskListComponent]
})

export class AppComponent {
    title = 'Lista de Tarefas';
}