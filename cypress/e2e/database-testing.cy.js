/// <reference types="Cypress" />

describe("Test databases using SQL", () => {

    it('Create new tables in DB', () => {
        cy.sqlServer('CREATE TABLE Agents (AGENT_CODE char(5), AGENT_NAME varchar(40), WORKING_AREA varchar(35), BENEFIT_PERCENT int, PHONE_NO varchar(50), COUNTRY varchar (50))')
        cy.sqlServer('CREATE TABLE Customers (CUST_CODE varchar(6), CUST_NAME varchar(40), CUST_CITY char(35), WORKING_AREA varchar(35), CUST_COUNTRY varchar(20), GRADE int, OPENING_AMT int, RECEIVE_AMT int, PAYMENT_AMT int, OUTSTANDING_AMT int, SPECIAL_CODE varchar(17), AGENT_CODE char(5))')
    })

    it('Insert data into DB', () => {
        cy.log('**Agents table**')
        cy.sqlServer("INSERT INTO Agents VALUES ('A001', 'Ramasundar', 'Bangalore', 15, '07725814763', 'India')")
        cy.sqlServer("INSERT INTO Agents VALUES ('A003', 'Alex', 'London', 13, '07512458969', 'UK')")
        cy.sqlServer("INSERT INTO Agents VALUES ('A008', 'Alford', 'New York', 12, '04425874365', '')")
        cy.sqlServer("INSERT INTO Agents VALUES ('A011', 'Ravi Kumar', 'Bangalore', 15, '07745625874', '')")
        cy.sqlServer("INSERT INTO Agents VALUES ('A010', 'Santakumar', 'Chennai', 14, '00722388644', '')")
        cy.sqlServer("INSERT INTO Agents VALUES ('A012', 'Lucida', 'San Jose', 12, '04452981425', '')")
        cy.sqlServer("INSERT INTO Agents VALUES ('A005', 'Anderson', 'Brisban', 13, '04521447739', '')")
        cy.sqlServer("INSERT INTO Agents VALUES ('A007', 'Subbarao', 'Bangalore', 14, '07712346674', '')")
        cy.sqlServer("INSERT INTO Agents VALUES ('A002', 'Mukesh', 'Mumbai', 11, '02912358964', '')")
        cy.sqlServer("INSERT INTO Agents VALUES ('A006', 'McDen', 'London', 15, '07822255588', '')")
        cy.sqlServer("INSERT INTO Agents VALUES ('A004', 'Ivan', 'Torento', 15, '00822544166', '')")
        cy.sqlServer("INSERT INTO Agents VALUES ('A009', 'Benjamin', 'Hampshair', 11, '00822536178', '')")

        cy.log('**Customers table**')
        cy.sqlServer("INSERT INTO Customers VALUES ('C04512', 'Assel', 'Astana', 'Astana', 'Kazakhstan', 3, 7000.00, 11000.00, 7000.00, 11000.00, 'PPHGRTS', 'A001')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C00013', 'Holmes', 'London', 'London', 'UK', 2, 6000.00, 5000.00, 7000.00, 4000.00, 'BBBBBBB', 'A003')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C00401', 'Micheal', 'New York', 'New York', 'USA', 2, 3000.00, 5000.00, 2000.00, 6000.00, 'CCCCCCC', 'A008')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C07020', 'Albert', 'New York', 'New York', 'USA', 3, 5000.00, 7000.00, 6000.00, 6000.00, 'BBBBSBB', 'A008')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C00825', 'Ravindran', 'Bangalore', 'Bangalore', 'India', 2, 5000.00, 7000.00, 4000.00, 8000.00, 'AVAVAVA', 'A011')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C78024', 'Cook', 'London', 'London', 'UK', 2, 4000.00, 9000.00, 7000.00, 6000.00, 'FSDDSDF', 'A006')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C75815', 'Stuart', 'London', 'London', 'UK', 1, 6000.00, 8000.00, 3000.00, 11000.00, 'GFSGERS', 'A003')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C01252', 'Bolt', 'New York', 'New York', 'USA', 3, 5000.00, 7000.00, 9000.00, 3000.00, 'DDNRDRH', 'A008')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C45618', 'Fleming', 'Brisban', 'Brisban', 'Australia', 2, 7000.00, 7000.00, 9000.00, 5000.00, 'NHBGVFC', 'A005')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C07821', 'Jacks', 'Brisban', 'Brisban', 'Australia', 1, 7000.00, 7000.00, 7000.00, 7000.00, 'WERTGDF', 'A005')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C66619', 'Yearannaidu', 'Chennai', 'Chennai', 'India', 1, 8000.00, 7000.00, 7000.00, 8000.00, 'ZZZZBFV', 'A010')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C07905', 'Sasikant', 'Mumbai', 'Mumbai', 'India', 1, 7000.00, 11000.00, 7000.00, 11000.00, 'ZZZZBFP', 'A002')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C03660', 'Ramanathan', 'Chennai', 'Chennai', 'India', 1, 7000.00, 11000.00, 9000.00, 9000.00, 'GHRDWSD', 'A010')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C00222', 'Avinash', 'Mumbai', 'Mumbai', 'India', 2, 7000.00, 11000.00, 9000.00, 9000.00, '113-12345678','A002')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C07774', 'Winston', 'Brisban', 'Brisban', 'Australia', 1, 5000.00, 8000.00, 7000.00, 6000.00, 'AAAAAAA', 'A005')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C99923', 'Karl', 'London', 'London', 'UK', 0, 4000.00, 6000.00, 7000.00, 3000.00, 'AAAABAA', 'A006')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C01116', 'Shilton', 'Torento', 'Torento', 'Canada', 1, 10000.00, 7000.00, 6000.00, 11000.00, 'DDDDDDD', 'A004')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C22210', 'Charles', 'Hampshair', 'Hampshair', 'UK', 3, 6000.00, 4000.00, 5000.00, 5000.00, 'MMMMMMM', 'A009')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C33317', 'Srinivas', 'Bangalore', 'Bangalore', 'India', 2, 8000.00, 4000.00, 3000.00, 9000.00, 'AAAAAAB', 'A007')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C33012', 'Steven', 'San Jose', 'San Jose', 'USA', 1, 5000.00, 7000.00, 9000.00, 3000.00, 'KRFYGJK', 'A012')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C04408', 'Karolina', 'Torento', 'Torento', 'Canada', 1, 7000.00, 7000.00, 9000.00, 5000.00, 'HJKORED', 'A004')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C99003', 'Martin', 'Torento', 'Torento', 'Canada', 2, 8000.00, 7000.00, 7000.00, 8000.00, 'MJYURFD', 'A004')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C63009', 'Ramesh', 'Mumbai', 'Mumbai', 'India', 3, 8000.00, 7000.00, 3000.00, 12000.00, 'AAASTGF', 'A002')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C00914', 'Rangarappa', 'Bangalore', 'Bangalore', 'India', 2, 8000.00, 11000.00, 7000.00, 12000.00, 'AAAATGF', 'A001')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C03216', 'Venkatpati', 'Bangalore', 'Bangalore', 'India', 2, 8000.00, 11000.00, 7000.00, 12000.00, 'JRTVFDD', 'A007')")
        cy.sqlServer("INSERT INTO Customers VALUES ('C98011', 'Sundariya', 'Chennai', 'Chennai', 'India', 3, 7000.00, 11000.00, 7000.00, 11000.00, 'PPHGRTS', 'A010')")
    })

    it('Retrieve/Update data in DB', () => {
        cy.sqlServer('SELECT * FROM Agents').then((resultAgents) => {
            expect(resultAgents).to.have.length(12)
        })

        cy.sqlServer("SELECT * FROM Agents WHERE AGENT_CODE='A003'").then((resultAgents) => {
            expect(resultAgents[1]).to.equal('Alex')
            expect(resultAgents[2]).to.equal('London')
        })

        cy.sqlServer("UPDATE Agents SET AGENT_NAME='Alikhan' WHERE AGENT_CODE='A003'")
        cy.sqlServer("SELECT * FROM Agents WHERE AGENT_CODE='A003'").then((resultAgents) => {
            expect(resultAgents[1]).to.equal('Alikhan')
        })

        cy.sqlServer('SELECT * FROM Customers').then((resultCustomers) => {
            console.log(resultCustomers)
            expect(resultCustomers).to.have.length(26)
        })
        
        cy.sqlServer("UPDATE Customers SET AGENT_CODE='A001' WHERE CUST_CODE='C00013'")
        cy.sqlServer("SELECT * FROM Customers WHERE CUST_CODE='C00013'").then((resultCustomers) => {
            expect(resultCustomers[11]).to.equal('A001 ')
        })
    })

    it('Use data from DB to fill out webforms', () => {
        cy.visit('https://letcode.in/edit')
        cy.get('button.fc-cta-consent').click()

        cy.sqlServer('SELECT * FROM Customers').then((resultCustomers) => {
            cy.get('#fullName').type(resultCustomers[0][1])
            cy.get('#join').clear().type(resultCustomers[0][2])
            cy.get('#clearMe').clear().type(resultCustomers[0][0])
        })
    })

    it('Join two tables', () => {
        cy.sqlServer('SELECT AGENT_NAME, CUST_NAME, BENEFIT_PERCENT, SPECIAL_CODE, CUST_CODE FROM Agents INNER JOIN Customers ON Agents.AGENT_CODE=Customers.AGENT_CODE').then((joinedTable) => {
            console.log(joinedTable)
            expect(joinedTable).to.have.length(26)
            expect(joinedTable[0][0]).to.equal('Ramasundar')
            expect(joinedTable[0][1]).to.equal('Assel')
        })
    })

    it('Delete data/tabels from DB', () => {
        cy.sqlServer("DELETE FROM Agents WHERE AGENT_CODE='A003'")
        cy.sqlServer("SELECT * FROM Agents WHERE AGENT_CODE='A003'").then((resultAgents) => {
            expect(resultAgents).to.have.length(0)
        })

        cy.sqlServer("DELETE FROM Agents")
        cy.sqlServer("SELECT * FROM Agents").then((resultAgents) => {
            expect(resultAgents).to.have.length(0)
        })

        cy.sqlServer("DELETE FROM Customers")
        cy.sqlServer("SELECT * FROM Customers").then((resultCustomers) => {
            expect(resultCustomers).to.have.length(0)
        })

        cy.sqlServer('DROP TABLE Agents')
        cy.sqlServer('DROP TABLE Customers')
    }) 
})