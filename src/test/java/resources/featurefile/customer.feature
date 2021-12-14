@Regression
Feature: Bank Test
  As a customer I want to deposit and withdraw money

  Background:Customer should be able to do transactions successfully
    Given I am on homepage
    When I click on customer login tab
    Then customer should be able to navigate to his login page

  Scenario:Customer should be able to login and logout successfully
    When I search the customer "Harry Potter"
    And click on login tab
    And verify logout tab is displayed
    And click on logout
    Then verify your name text is displayed

 Scenario:Customer should be able to deposit money successfully
   When I search the customer "Harry Potter"
   And click on login tab
   And click on deposit tab
   And enter amount 100
   And click on deposit button
   And verify the message "Deposit Successful"

   Scenario:Customer should be able to withdraw money successfully
     When I search the customer "Harry Potter"
     And click on login tab
     And click on deposit tab
     And enter amount 500
     And click on deposit button
     And click on withdrawal tab
     And enter amount 50
     And click on withdraw button
     Then check the message "Transaction successful"

