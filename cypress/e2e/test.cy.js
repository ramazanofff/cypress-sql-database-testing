/// <reference types="Cypress" />

describe("My first test suite", () => {

    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    })

    it("Get an element", () => {
        Cypress.config('defaultCommandTimeout', 6000)
        cy.get(".search-keyword").type("ca")
        cy.get(".product:visible").should("have.length", 4)
    })

    it("Parent-child chaining", () => {
        cy.get(".products").find(".product").eq(0)
        cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();
        cy.get(".products").within(() => {
            cy.get(".product").should("have.length", 30)
        })
    })

    it("Iterate through an array", () => {
        cy.get(".products").find(".product").each(($el, index, $list) => {
            const textValue = $el.find("h4.product-name").text();
            if (textValue.includes("Cashews")) {
                cy.wrap($el).find("button").click();
            }
        })
    })

    it("Resolve promise manually for non-cypress commands using .then method", () => {
        cy.get('.brand').then((logoElement) => {
          cy.log(logoElement.text()) // .text is a jQuery method
          cy.get(logoElement).should("have.text", "GREENKART") // assert text
        })
    })

    it("Alias @ method", () => {
        cy.get(".products").as("productLocator")
        cy.get("@productLocator").find(".product").should("have.length", 30)
    })

    it("Handle Async promise", () => {
        cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click().then(() => {
            console.log("ITEM ADDED TO CART") // gets printed in browser Console
        })
    })

    it("Validate selected item in the cart", () => {
        cy.get(".search-keyword").type("ca")
        cy.get(".products").find(".product").each(($el) => {
            const textValue = $el.find("h4.product-name").text()
            if (textValue.includes("Cashew")) {
                cy.wrap($el).find("button").click()
            }
        })
        cy.get("a.cart-icon").should("be.visible").click()
        cy.get(".cart-preview").should("be.visible").within(() => {
            cy.get("button").contains("PROCEED TO CHECKOUT").click()
        })
        cy.url().should("include", "/seleniumPractise/#/cart") // validate new URL
        cy.get("#productCartTables").within(() => {
            cy.get(".product-name").should("be.visible").contains("Cashews")
        })
        cy.get(".products").within(() => {
            cy.get("button").contains("Place Order").click()
        })
        cy.url().should("include", "/seleniumPractise/#/country") // validate new URL
    })
})
