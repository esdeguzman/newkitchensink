context("regression", () => {
  beforeEach(function () {
    cy.visit("/");

    cy.fixture("example").then(function (example) {
      this.example = example;
    });
  });

  it("has h1 in home page", () => {
    cy.get("h1").should("contain.text", "Kitchen Sink");
  });

  it("can type email address", function () {
    cy.get(".dropdown-toggle").click();
    cy.get(".dropdown-menu").find("li").eq(2).click();
    cy.get('input[type="email"]').type(this.example.email);
  });

  it.only("can use custom command", () => {
    cy.setLocalStorage("name", "esme");
  });
});
