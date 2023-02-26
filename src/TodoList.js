import Project from "./Project"

export default class TodoList {
    constructor() {
        this.projects = []
        this.projects.push(new Project('Inbox'))
    }

    setProjects(projects) {
        this.projects = projects
    }

    contains(projectTitle) {
        if(this.projects.find((project) => project.title === projectTitle)) {
            return true
        }
    }

    getProjects() {
        return this.projects
    }

    AddProject(project) {
        this.projects.push(project)
    }

    deleteProject(projectTitle) {
        this.projects = this.projects.filter((project) => project.title !== projectTitle)
    }
}