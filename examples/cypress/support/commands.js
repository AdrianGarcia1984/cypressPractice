import TodoPage from "./pages/TodosPage";
const todoPages = new TodoPage()

Cypress.Commands.add('AddTodo', (text)=>{
    todoPages.newTodoInput().type(text+'{enter}')
})
Cypress.Commands.add('SelectAll', ()=>{
    todoPages.allLink().click()
})
Cypress.Commands.add('SelectActive', ()=>{
    todoPages.activeLink().click()
})
Cypress.Commands.add('SelectCompleted', ()=>{
    todoPages.completedLink().click()
})

Cypress.Commands.add('ToggleTask', (id)=>{
    todoPages.todoToggle(id).click()
})

Cypress.Commands.add('GetTodoCount', ()=>{
    todoPages.todoCount()
})


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



