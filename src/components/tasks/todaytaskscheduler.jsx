
export var scheduleAtWork = function(oldOpenTasks, todaysOpenTasks, futureOpenTasks) {
    var reorderedTasks = []

    var timeLeft = timeLeftAtWork()
    
    var oldWork = getTasksByCategory(oldOpenTasks, "Work")
    var todayWork = getTasksByCategory(todaysOpenTasks, "Work")
    var futureWork = getTasksByCategory(futureOpenTasks, "Work")

    Array.prototype.push.apply(reorderedTasks, oldWork);
    Array.prototype.push.apply(reorderedTasks, todayWork);

    reorderedTasks = reorderByPriority(reorderedTasks)

    var i = 0
    var totalEffort = getTotalEffort(reorderedTasks)
    futureWork = reorderByPriority(futureWork)

    console.log("Total Effort: "+totalEffort+" hours, Time left: "+timeLeft+" hours")
    console.log("Current number of tasks: "+reorderedTasks.length)

    while (totalEffort < timeLeft && i < futureWork.length) {
        var futureTask = futureWork[i]
        reorderedTasks.push(futureTask)
        totalEffort = getTotalEffort(reorderedTasks)
        console.log("Added one task from future")
        i++
    }
    console.log("Returning tasks: "+reorderedTasks.length)

    var nonWorkTasks = reorderNonWorkTasks(oldOpenTasks, todaysOpenTasks, futureOpenTasks)
    Array.prototype.push.apply(reorderedTasks, nonWorkTasks)

    return reorderedTasks
}

export var scheduleAtHome = function(oldOpenTasks, todaysOpenTasks, futureOpenTasks) {
    var reorderedTasks = reorderNonWorkTasks(oldOpenTasks, todaysOpenTasks, futureOpenTasks)

    var workTasks = []
    var oldWorkTasks = getTasksByCategory(oldOpenTasks, "Work")
    var todayWorkTasks = getTasksByCategory(todaysOpenTasks, "Work")
    Array.prototype.push.apply(workTasks, oldWorkTasks)
    Array.prototype.push.apply(workTasks, todayWorkTasks)
    workTasks = reorderByPriority(workTasks)

    Array.prototype.push.apply(reorderedTasks, workTasks)

    return reorderedTasks
}

function reorderNonWorkTasks(oldOpenTasks, todaysOpenTasks, futureOpenTasks) {
    var reorderedTasks = []

    var openTasks = []

    Array.prototype.push.apply(openTasks, oldOpenTasks)
    Array.prototype.push.apply(openTasks, todaysOpenTasks)
    Array.prototype.push.apply(openTasks, futureOpenTasks)

    var homeTasks = getTasksByCategory(openTasks, "Home")
    var personalTasks = getTasksByCategory(openTasks, "Personal")
    
    Array.prototype.push.apply(reorderedTasks, personalTasks)
    Array.prototype.push.apply(reorderedTasks, homeTasks)

    reorderedTasks = reorderByPriority(reorderedTasks)

    return reorderedTasks
}

function getTotalEffort(tasks) {
    var totalEffort = 0
    for(var i=0; i<tasks.length; i++) {
        var effort = Number(JSON.parse(tasks[i].payload).effort)
        totalEffort += effort
    }
    return totalEffort
}

function reorderByPriority(tasks) {
    var reorderedTasks = []

    var high = getTasksByPriority(tasks, "High")
    var medium = getTasksByPriority(tasks, "Medium")
    var low = getTasksByPriority(tasks, "Low")

    Array.prototype.push.apply(reorderedTasks, high);
    Array.prototype.push.apply(reorderedTasks, medium);
    Array.prototype.push.apply(reorderedTasks, low);

    return reorderedTasks
}

function getTasksByCategory(tasks, category) {
    var filteredTasks = tasks.filter(function(t) {
        return JSON.parse(t.payload).category == category;
    });

    return filteredTasks;
}

function getTasksByPriority(tasks, priority) {
    var filteredTasks = tasks.filter(function(t) {
        return JSON.parse(t.payload).priority == priority;
    });

    return filteredTasks;
}

const timeLeftAtWork = () => {
    var now = new Date();
    var eveningTime = new Date();
    eveningTime.setHours(19); eveningTime.setMinutes(0);
    return eveningTime.getHours() - now.getHours()
}