before(() => {   //se ejecuta una vez al inicio
    cy.setCookie('', '')
});

beforeEach(() => { //se ejecuta antes de cada it
    cy.visit('');
    cy.get('')
});

describe('', () => {
    it('', () => {
        
    });

    xit('', () => { //se salta este it
        
    });

    it.skip('', () => { //se salta este it
        
    });

    it.only('', () => {  //solo se ejecuta este it
        
    });
});

