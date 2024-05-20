describe('Admin Login', () => {
  it('Logs in an admin successfully', () => {
    cy.visit('http://localhost:3000');  

    cy.get('.login-form input[type="text"]').type('admin@example.com');
    cy.get('.login-form input[type="password"]').type('password');
    cy.get('.login-form button[type="submit"]').click();

    cy.url().should('include', '/admin/dashboard');
    cy.contains('h1', 'Welcome to Admin Dashboard').should('be.visible');
  });

  it('Registers a new admin successfully', () => {
    cy.visit('http://localhost:3000');  

    cy.get('.signup-form input[type="text"]').type('newadmin@example.com');
    cy.get('.signup-form input[type="password"]').type('newpassword');
    cy.get('.signup-form button[type="submit"]').click();

    cy.url().should('include', '/admin/dashboard');
    cy.contains('h1', 'Welcome to Admin Dashboard').should('be.visible');
  });
});
