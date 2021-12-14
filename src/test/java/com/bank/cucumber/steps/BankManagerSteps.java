package com.bank.cucumber.steps;

import com.bank.pages.AddCustomerPage;
import com.bank.pages.BankManagerLoginPage;
import com.bank.pages.HomePage;
import com.bank.pages.OpenAccountPage;
import com.bank.utility.Utility;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * By Dimple Patel
 **/
public class BankManagerSteps
{
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
        System.out.println("I am on Home page");
    }
    @When("^I click on bank manager login tab$")
    public void iClickOnBankManagerLoginTab() {
        new HomePage().clickOnBankLoNBtn();
    }
    @Then("^Bank manager should be able to navigate to the add customer page$")
    public void bankManagerShouldBeAbleToNavigateToTheAddCustomerPage()
    {
       new BankManagerLoginPage().verifyAddCustomerBtn();
    }
    /*@When("^I click on add customer tab $")
    public void iClickOnAddCustomerTab()
    {
        new BankManagerLoginPage().clickOnAddCustomer();
    }*/
    @When("^I click on add customer tab$")
    public void i_click_on_add_customer_tab() {
        new BankManagerLoginPage().clickOnAddCustomer();
    }
    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstNm) {

            new AddCustomerPage().enterFirstNm(firstNm);
    }
    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String lastNm)
    {
        new AddCustomerPage().enterLastNm(lastNm);
    }
    @And("^I enter postcode \"([^\"]*)\"$")
    public void iEnterPostcode(String postCd)
    {
        new AddCustomerPage().enterPostCode(postCd);
    }
    @When("^I click on add customer button$")
    public void i_click_on_add_customer_button()
    {
        new AddCustomerPage().clickOnAddCustomerBtn();
    }

    @When("^pop up display$")
    public void pop_up_display()
    {
        new AddCustomerPage().getTxtFromAlert();
    }
    @When("^click on ok button of pop up$")
    public void click_on_ok_button_of_pop_up()
    {
        System.out.println("Accepted the text from pop up button");
    }
    @Then("^verify the message customer added successfully$")
   public void verify_the_message_customer_added_successfully()
   {
       System.out.println("Customer is added successfully");
   }

    @When("^I click on open account tab$")
    public void i_click_on_open_account_tab()  {
        //new HomePage().clickOnBankLoNBtn();
        new BankManagerLoginPage().clickOnOpenAccount();
    }

    @When("^I search customer that is created$")
    public void i_search_customer_that_is_created()
    {
        new OpenAccountPage().enterCustomerName();
    }

    @When("^I select currency pound$")
    public void i_select_currency_pound() {
        new OpenAccountPage().enterCurrency();
    }
    @When("^click on process button$")
    public void click_on_process_button()
    {
        new OpenAccountPage().setTheProcess();
    }
    @Then("^verify the message account created successfully$")
    public void verify_the_message_account_created_successfully()
    {
        new OpenAccountPage().getText();
    }
}
