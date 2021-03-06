"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var task_list_components_1 = require('./task-list.components');
var task_edit_component_1 = require('./task-edit.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Lista de Tarefas';
    }
    AppComponent = __decorate([
        router_deprecated_1.RouteConfig([
            { path: '/task/list', name: 'Task.list', component: task_list_components_1.TaskListComponent },
            { path: '/task/:id/edit', name: 'Task.edit', component: task_edit_component_1.TaskEditComponent }
        ]),
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{ title }}</h1>\n    <a [routerLink]=\"['Task.list']\">Listar</a>\n    <router-outlet></router-outlet>\n    ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map