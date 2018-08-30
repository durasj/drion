describe('Navigation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9876/')
    });

    it('Opens "Start" by default', () => {
        cy.get('#app button').should('contain', 'Start');
    });

    it('Can open Sessions', () => {
        cy.get('a[href="#/sessions"]').click();

        cy.get('h1').should('contain', 'Previous Sessions');
    })

    it('Can open Settings', () => {
        cy.get('a[href="#/settings"]').click();

        cy.get('h1').should('contain', 'Settings');
    })
});
