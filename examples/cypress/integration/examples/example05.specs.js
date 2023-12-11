import TodoPage from "../../support/pages/TodosPage";
const todoPages = new TodoPage();

const task1 = 'Present Pom'
const task2 = 'tech Cypress'



    context('example 01', ()=>{
        beforeEach(()=>{
            cy.visit('https://example.cypress.io/todo')
        })

        it('test 01',()=>{
            todoPages.addTodo(task1)
            todoPages.addTodo(task2)

            todoPages.todoCount().should('eq', 4)
            todoPages.clickTodoToggle(2)

            todoPages.todoCount().should('eq', 3)
            todoPages.clickCompletedLink()
        })   
        

    })

    context('example 02 with commands', ()=>{
        beforeEach(()=>{
            cy.visit('https://example.cypress.io/todo')
        })

        it('test 01',()=>{
            cy.AddTodo(task1)
            cy.AddTodo(task2)

            cy.GetTodoCount().should('eq', 4)
            cy.ToggleTask(2)

            cy.GetTodoCount().should('eq', 3)
            cy.SelectCompleted()
        })
    })

