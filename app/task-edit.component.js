/**
 * Created by Luiz Henrique Soares on 24/07/2016.
 */
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
var task_1 = require('./task');
var task_service_1 = require("./task.service");
var router_deprecated_1 = require("@angular/router-deprecated");
var TaskEditComponent = (function () {
    function TaskEditComponent(route, routeParams, taskService) {
        this.route = route;
        this.routeParams = routeParams;
        this.taskService = taskService;
    }
    TaskEditComponent.prototype.ngOnInit = function () {
        this.getTask();
    };
    TaskEditComponent.prototype.getTask = function () {
        var id = this.routeParams.get('id');
        this.task = this.taskService.getTask(id);
    };
    TaskEditComponent.prototype.goToTaskList = function () {
        this.route.navigate(['Task.List']);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', task_1.Task)
    ], TaskEditComponent.prototype, "task", void 0);
    TaskEditComponent = __decorate([
        core_1.Component({
            selector: 'task-edit',
            template: "\n                <h3>Edita\u00E7\u00E3o de Tarafa</h3>    \n               <div *ngIf=\"task\">\n                    <input type=\"text\" [(ngModel)]=\"task.name\" />\n                    <button type=\"button\" (click)=\"goToTaskList\">Salvar</button>\n                </div>"
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, task_service_1.TaskService])
    ], TaskEditComponent);
    return TaskEditComponent;
}());
exports.TaskEditComponent = TaskEditComponent;
//# sourceMappingURL=task-edit.component.js.map