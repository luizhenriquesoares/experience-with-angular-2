/**
 * Created by Luiz Herique Soares on 24/07/2016.
 */

import {TASKS} from './task-data';
import {Task} from  './task';


export class TaskService {
    getTasks():Task[]{
        return TASKS;
    }

    getTask(id:string | number){
        return TASKS.filter(function (task) {
            return task.id == id;
        })[0];
    }
}

