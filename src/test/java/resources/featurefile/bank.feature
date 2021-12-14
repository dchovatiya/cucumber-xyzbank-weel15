@Regression
Feature: Bank Test
  As a customer I want to open a bank account

  Background:Bank manager should be able to create customer account successfully
    Given I am on homepage
    When I click on bank manager login tab
    Then Bank manager should be able to navigate to the add customer page

  Scenario:Bank manager should be able to add customer name successfully
    When I click on add customer tab
    And I enter first name "Nikita"
    And I enter last name "Patel"
    And I enter postcode "CF26 5UR"
    When I click on add customer button
    When pop up display
    When click on ok button of pop up
    Then verify the message customer added successfully


  Scenario:Bank manager should be able to open customer account successfully
    When I click on open account tab
    When I search customer that is created
    And I select currency pound
    When click on process button
    When pop up display
    Then verify the message account created successfully
    And click on ok button of pop up



