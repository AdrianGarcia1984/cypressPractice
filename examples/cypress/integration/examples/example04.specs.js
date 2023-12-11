describe('example swapi apitest', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      //cy.visit('https://example.cypress.io/todo')
    })

    context('Api Test',()=>{
            it('test 01', ()=>{
                cy.request({
                    method:'GET',
                    url:'https://swapi.dev/api/films',
                }).then((response)=>{
                    console.log(response)
                    expect(response.status).to.eq(200)
                    expect(response.body.results).to.have.length(6)
                    expect(response.body.results[0]).to.have.property('title', 'A New Hope')
                    return response.body.results[0].title
                })
            })


            it('test 02', ()=>{
                cy.request({
                    method:'GET',
                    url:'https://swapi.dev/api/films',
                }).then((response)=>{
                    console.log(response)
                    expect(response.status).to.eq(200)
                    expect(response.body.results).to.have.length(6)
                    expect(response.body.results[0]).to.have.property('title', 'A New Hope')
                    return response.body.results[0].characters[0]
                }).then(firstCharacter=>{
                    cy.request({
                        method:'GET',
                        url: firstCharacter
                    }).then(response=>{
                        expect(response.status).to.eq(200)

                       expect(response.body.films).to.have.length.of.at.least(1)
                       expect(response.body).to.have.property('hair_color')
                    })
                })
            })
        })


})  