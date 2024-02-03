const Task = require('../models/task');
const aqp = require('api-query-params') ;


module.exports = {
    createTask: async (data) => {
        if(data.type === 'EMPTY-TASK'){
            let result = await Task.create(data);
            return result;
        }
        // if(data.type === "ADD-TASKS"){
        //     // console.log(">>>Check data: ", data)
        //     let myTask = await Task.findById(data.projectId).exec();
        //     for(let i = 0 ; i < data.taskArr.length; i++)
        //     {
        //         myTask.projectInfo.push(data.taskArr[i]);
        //     }
        //     let newResult = await myTask.save();
        //     // console.log(">>>Check my project", myProject)
        //     // find project by id
        //     return newResult;
        // }
        // if(data.type === "REMOVE-USERS"){
        //     let myTask = await Task.findById(data.TaskId).exec();
        //     for(let i = 0 ; i < data.usersArr.length; i++)
        //     {
        //         myTask.tasks.pull(data.usersArr[i]);
        //     }
        //     let newResult = await myTask.save();
        //     return newResult;
        // }
        return null;
    },
    getTask: async (queryString) => {
        const page = queryString.page;
        const { filter, limit } = aqp(queryString);
        delete filter.page;
        let offset = (page -1) * limit;
        result = await Task.find({filter}).skip(offset).limit(limit).exec();

        return result;
    },
    uTask: async (data) => {
        let result = await Task.updateOne({ _id: data.id }, { ...data })
        return result;
    },
    dTask: async (id) => {
        let result = await Task.deleteById(id)
        return result;
    }

}