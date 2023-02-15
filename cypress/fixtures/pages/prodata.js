class prodata {

    elements = {

        usuario: () => cy.get ('#usuario'),
        senha: () => cy.get ('#iPassword'),
        botao: () => cy.get ('input.ng-scope'),
        apelido: () => cy.get ('input[nat="cadastroPessoaFolhaNome"]'),
        pis: () => cy.get ('input[nat="cadastroPessoaFolhaNumeroPis"]'),
        sexo: () => cy.get ('[nat="cadastroPessoaFolhaDadosPessoaisSexoSelect"]'),
        nasci: () => cy.get ('input[nat="cadastroPessoaFolhaDadosPessoaisDataNascimento"]'),
        estadoc: () => cy.get ('[nat="cadastroPessoaFolhaDadosPessoaisEstadoCivilSelect"]'),
        grauist: () => cy.get ('[nat="cadastroPessoaFolhaDadosPessoaisGrauInstrucaoSelect"]'),
        alupa: () => cy.get ('[nat="cadastroPessoaFolhaDadosPessoaisCursoPesquisa"]'),
        carregar: () => cy.get ('[nat="botaoCarregar"]'),
        naturalidade: () => cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisNaturalidade"]'),
        nomemae: () => cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisNomeMae"]'),
        umcpf: () => cy.get('input[nat="cadastroPessoaFolhaCpf"]'),
        btnSalvar: () => cy.get('[nat="cadastroPessoaFolhaCrudSalvar"]'),
        voltar: () => cy.get('[nat="cadastroPessoaFolhaCodigoAnterior"]' ),
        limpanome: () => cy.get('input[nat="cadastroPessoaFolhaNome"]' ),
        editanome: () => cy.get('input[nat="cadastroPessoaFolhaNome"]' ),
        successMsg : () => cy.get('.md-toast-text'),
        limpaNomeSocial: () => cy.get('input[nat="cadastroPessoaFolhaNomeSocial"]'),
        nomeSocialEdit: () => cy.get('input[nat="cadastroPessoaFolhaNomeSocial"]'),
        deletaCadastro: () => cy.get('[nat="cadastroPessoaFolhaCrudExcluir"]'),
        confirmaDelete: () => cy.get('[nat="pdBtnAlertOKSim"]'),
        validaDelete: () => cy.get('.md-toast-text')
       
        
        

    }

    fillusua() {
        this.elements.usuario().type("automacao")
    }
    fillsenha() {
        this.elements.senha().type("1010")
    }
    fillbotao() {
        this.elements.botao().click()
    }
    fillapelido() {
        this.elements.apelido().click().type('Quagmire',{delay: 0}).should('be.visible')
    }
    fillpis() {
        this.elements.pis().click().type('72199171138',{delay: 0}).should('be.visible')
    }
    
    fillsexo() {
        this.elements.sexo().click().type('Masculino',{delay: 0}).type('{enter}').should('be.visible')
    }
    fillnasci() {
        this.elements.nasci().click().type('15/09/1999',{delay: 0}).type('{enter}').should('be.visible')
    }
    fillestado() {
        this.elements.estadoc().click().type('solteiro',{delay: 0}).type('{enter}').should('be.visible')
    }
    fillgrau() {
        this.elements.grauist().click().type('Superior Completo',{delay: 0}).type('{enter}').should('be.visible')
    }
    filllupa() {
        this.elements.alupa().click().type('14',{delay: 0}).type('{enter}').should('be.visible')
         }
         fillcarregar() {
            this.elements.carregar().eq('4').click()
        }
        fillnatural(){
        this.elements.naturalidade().click().type('5301183' , { delay: 0}).type('{enter}').should('be.visible')
        }


        fillmae(){
            this.elements.nomemae().click().type('Olga' , { delay: 0}).type('{enter}').should('be.visible')
            }
            fillcpf(){
                this.elements.umcpf().click().type('00674351061' , { delay: 0}).type('{enter}').should('be.visible')
                }
                btnSalvar(){
                    this.elements.btnSalvar().click().should('be.visible')
                    }
                    voltar(){
                    this.elements.voltar().click().should('be.visible')
                     }
                     Elimpanome() {
                            this.elements.limpanome().clear().should('be.visible')
                        }
                        limpaNomeSocial() {
                            this.elements.limpaNomeSocial().clear().should('be.visible')
                        }
                        editanome() {
                            this.elements.editanome().click().type('brian oconner', {delay: 0}).should('be.visible')
                        }
                        nomeSocialEdit() {
                            this.elements.nomeSocialEdit().click().type('brian social', {delay: 0}).should('be.visible')
                        }
                        fillmsgsucesso() {
                            this.elements.successMsg().should('have.text','      Registro salvo com sucesso!    ')
                        }
                        deletaCadastro(){      
                            this.elements.deletaCadastro().click().should('have.text', ' Excluir ')
                        }
                        
                        confirmaDelete(){      
                            this.elements.confirmaDelete().click().should('have.text', 'Sim')
                        }
                        
                        validaDelete(){      
                            this.elements.validaDelete().should('have.text', '      Registro excluído com sucesso!    ')
                        }
    
}

export default new prodata()