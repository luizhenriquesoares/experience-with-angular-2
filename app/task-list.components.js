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
var router_deprecated_1 = require('@angular/router-deprecated');
var task_service_1 = require('./task.service');
var task_edit_component_1 = require('./task-edit.component');
var TaskListComponent = (function () {
    /**
     * @param taskService
     */
    function TaskListComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    TaskListComponent.prototype.getTasks = function () {
        this.tasks = this.taskService.getTasks();
    };
    TaskListComponent.prototype.onClick = function (task) {
        this.router.navigate(['Task.edit', { id: task.id }]);
    };
    TaskListComponent = __decorate([
        core_1.Component({
            selector: 'task-list',
            template: "<ul>\n                    <li *ngFor=\"let t of tasks\" (click)=\"onClick(t)\">\n                        {{t.id}} - {{t.name}}\n                    </li>\n               </ul>\n               <task-edit [task]=\"selectedTask\"></task-edit>",
            directives: [task_edit_component_1.TaskEditComponent],
            providers: [task_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService, router_deprecated_1.Router])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.components.js.map