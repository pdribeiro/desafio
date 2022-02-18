class SingupPage{

    go() {
        cy.visit('/')


    }


    fillForm(dados){

        cy.get('[data-testid="cadastrar"]').click()        
        cy.get('[data-testid="nome"]').type(dados.nome)
        cy.get('[data-testid="email"]').type(dados.email)
        cy.get('[data-testid="password"]').type('1234')
        cy.get('[data-testid="checkbox"]').click()
        cy.get('[data-testid="cadastrar"]').click()

    }

    deletar(){

        cy.get('[data-testid="email"]').type('User4@teste.com.br')
        cy.get('[data-testid="senha"]').type('1234')
        cy.get('[data-testid="entrar"]').click()
        cy.get('[data-testid="listar-usuarios"]').click()
        cy.get(':nth-child(1) > :nth-child(5) > .row > .btn-danger').click()
    

    }


    logar(){


        cy.get('[data-testid="email"]').type('User4@teste.com.br')
        cy.get('[data-testid="senha"]').type('1234')
        cy.get('[data-testid="entrar"]').click()
    

    }

    listar(){


        cy.get('[data-testid="email"]').type('User4@teste.com.br')
        cy.get('[data-testid="senha"]').type('1234')
        cy.get('[data-testid="entrar"]').click()
        cy.get('[data-testid="listar-usuarios"]').click() 
        cy.get('tbody ').should('have.value','')
    

    }

    checar(){


        cy.get('[data-testid="email"]').type('User4@teste.com.br')
        cy.get('[data-testid="senha"]').type('1234')
        cy.get('[data-testid="entrar"]').click()
        cy.get('[data-testid="listar-usuarios"]').click() 
        cy.contains('User4')

    }

    userfixo(){

        cy.get('[data-testid="cadastrar"]').click()        
        cy.get('[data-testid="nome"]').type('User4')
        cy.get('[data-testid="email"]').type('User4@teste.com.br')
        cy.get('[data-testid="password"]').type('1234')
        cy.get('[data-testid="checkbox"]').click()
        cy.get('[data-testid="cadastrar"]').click()

    }


}

export default new SingupPage;