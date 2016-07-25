/**
 * Created by Luiz Herique Soares on 24/07/2016.
 */
"use strict";
var task_data_1 = require('./task-data');
var TaskService = (function () {
    function TaskService() {
    }
    TaskService.prototype.getTasks = function () {
        return task_data_1.TASKS;
    };
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map