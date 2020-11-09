    const ssly  = require('./ssly')
    signList = [ssly]

    start(signList)





     async function start(task) {
            console.log('开始签到任务')
            for (let i = 0; i < task.length; i++) {                                      
                await task[i]() 
            }            
            console.log('任务执行完毕')
        }
