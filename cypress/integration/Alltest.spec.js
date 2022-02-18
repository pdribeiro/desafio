/// <reference types="cypress"/>
import signup from '../pages/SignupPage'
import sigupFactory from '../factories/SignupFactory'






describe ('Desafio Framework...',()=>{
    before(() => {
    })

    beforeEach(() => {
        signup.go()

    })

    it('Deve cadastrar novo usuario fixo', ()=>{

       
        signup.userfixo()


    } )


    it('Deve cadastrar novo usuario randomico', ()=>{

        var dados = sigupFactory.dados()
        signup.fillForm(dados)


    } )

    it('Deve deletar um usuario', ()=>{
   

        signup.deletar()


    } )
    
    it('Deve logar na aplicação', ()=>{

        signup.logar()

        
    } )


    it('Deve checar a lista', ()=>{

        signup.listar()

  
    } )

    it('Deve checar um usuario', ()=>{

        signup.checar()


    } )      



})