/// <reference types="cypress" />

describe("User-Onboarding App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })



  //sanity test
  it('sanity check', () => {
    expect(1 + 2).to.equal(3)
  })
  //test 1
  describe('Getting the name input and typing a name in the field', () => {

    it('can type a name in the input field', () => {
      const username = cy.get(`[data-test-id="usernameInput"]`)
      username.type('Kristian Rosales').should('have.value', 'Kristian Rosales')
    })
  })
  // test 1 end...

  //test 2 
  describe('Getting the Email input and typing an email in the field.', () => {
    it('Can type an email in the input', () => {
      const email = cy.get(`[data-test-id="emailInput"]`)
      email.type('KARosales@helloworld.com')
    })
  })
  //test 2 end...

  //test 3

  describe("Getting the password inpyt and typing a password in the field.", () => {
    it('Can type a password in the input.', () => {
      const password = cy.get(`[data-test-id="passwordInput"]`)
      password.type("ClassifiedPassword").should('have.value', 'ClassifiedPassword')
    })
  })
  //test 3 end...

  //test 4

  describe("Set up a test that will check to see if a user can check the terms of service box", () => {
    it("Can check the TOS?", () => {
      const termsofservice = cy.get(`[type='checkbox']`).check()
    })
  })
  //test 4 end...

  //test 5
  describe("Submit test.", () => {

    it('Can check to see if a user can submit the form data.', () => {
      const submit = cy.get(`[type='submit']`).click()
    })
  })
  //test 5 end...

  //test 6

  describe("Checking with form schema if an input is left empty.", () => {
    it("Can check if an input is left empty.", () => {
      const schema = cy.get(`[formSchema.js]`)
    })
  })







})



