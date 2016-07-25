import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {TaskListComponent} from './task-list.components';

@RouteConfig([
    {path: '/task/list' , name: 'Task.list', component: TaskListComponent}
])
@Component({
    selector: 'my-app',
    template: `
    <h1>{{ title }}</h1>
    <a [routerLink]="['Task.list']">Listar</a>
    <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES]
})

export class AppComponent {
    title = 'Lista de Tarefas';
}