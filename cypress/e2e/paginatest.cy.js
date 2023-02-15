import prodata from "../fixtures/pages/prodata";

describe('Vlidar os testes', () => {
  beforeEach(() => {
     cy.visit('http://167.250.26.147:8080/sigAutomacao/index.html?next=folha.pessoa')
  });
  

   
 
  it ('preencher o cadastro', () =>{

    prodata.fillusua()
    prodata.fillsenha()
    prodata.fillbotao()
cy.intercept('GET', '**/sigAutomacao/rest/menu/getMenu?modulo=menu')
.as('login') 
cy.wait('@login')
prodata.fillapelido()
prodata.fillpis()
prodata.fillsexo()
prodata.fillnasci()
prodata.fillestado()
prodata.fillgrau()
prodata.filllupa()
prodata.fillcarregar()
prodata.fillnatural()
prodata.fillmae()
prodata.fillcpf()
prodata.btnSalvar()
prodata.fillmsgsucesso()



  })

  it ('limpar e editar', () => {

    prodata.fillusua()
    prodata.fillsenha()
    prodata.fillbotao()
    cy.intercept('GET', '**/sigAutomacao/rest/menu/getMenu?modulo=menu')
    .as('login') 
    cy.wait('@login')
prodata.voltar()
prodata.Elimpanome()
prodata.limpaNomeSocial()
prodata.editanome()
prodata.nomeSocialEdit()
prodata.btnSalvar()
prodata.fillmsgsucesso()




  })
  
  it('Deleta', () => {  
    prodata.fillusua()
    prodata.fillsenha()
    prodata.fillbotao()
    
     cy.intercept('GET', '**/sigAutomacao/rest/menu/getMenu?modulo=menu')
     .as('login')
     cy.wait('@login')

     prodata.voltar()
     prodata.deletaCadastro()
     prodata.confirmaDelete()
     prodata.validaDelete()

    
   })


})