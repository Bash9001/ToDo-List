export default class Task {
    constructor(title, priority='medium', dueDate='No Date', status) {
        this.title = title
        this.priority = priority
        this.dueDate = dueDate
        this.status = status
    }

    setTitle(title) {
        this.title = title
    }

    getTitle() {
        return this.title
    }

    setPriority(priority) {
        this.priority = priority
    }

    getPriority() {
        return this.priority
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate
    }

    getDueDate() {
        return this.dueDate
    }

    setStatus(status) {
        this.status = status
    }

    getStatus() {
        return this.status
    }
}