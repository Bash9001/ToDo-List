import { toDate, isToday, isThisWeek, subDays } from 'date-fns'

export default class Project {
    constructor(title) {
        this.title = title
        this.tasks = []
    }

    setTitle(title) {
        this.title = title
    }

    getTitle() {
        return this.title
    }

    setTasks(tasks) {
        this.tasks = tasks
    }

    getTasks() {
        return this.tasks
    }

    addTask(task) {
        this.tasks.push(task)
    }

    getTask(taskTitle) {
        return this.tasks.find((task) => task.name === taskTitle)
    }

    deleteTask(taskTitle) {
        this.tasks = this.tasks.filter((task) => task.title !== taskTitle)
    }

    getTasksToday() {
        
    }
}