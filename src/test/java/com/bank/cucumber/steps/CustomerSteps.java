package com.bank.cucumber.steps;

import com.bank.pages.AccountPage;
import com.bank.pages.CustomersPage;
import com.bank.pages.HomePage;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


/**
 * By Dimple Patel
 **/
public class CustomerSteps {
    @When("^I click on customer login tab$")
    public void iClickOnCustomerLoginTab()
    {
        new HomePage().clickOnCustomLogin();
    }

    @Then("^customer should be able to navigate to his login page$")
    public void customerShouldBeAbleToNavigateToHisLoginPage()
    {
        System.out.println("Customer is on his login page");
    }

    @When("^I search the customer \"([^\"]*)\"$")
    public void iSearchTheCustomer(String name)
    {
        new CustomersPage().searchCustomer(name);
    }
    @And("^click on login tab$")
    public void clickOnLoginTab()
    {
        new CustomersPage().clickOnLoginBtn();
    }
    @And("^verify logout tab is displayed$")
    public void verifyLogoutTabIsDisplayed()
    {
        new CustomersPage().verifyLogout();
    }
    @And("^click on logout$")
    public void clickOnLogout()
    {
        new CustomersPage().clickOnLogoutBtn();
    }
    @Then("^verify your name text is displayed$")
    public void verifyYourNameTextIsDisplayed()
    {
        System.out.println("Customer name is displayed");
    }

    @And("^click on deposit tab$")
    public void clickOnDepositTab()
    {
        new AccountPage().clickOnDepTab();
    }

    @And("^enter amount (\\d+)$")
    public void enterAmount(int amount)
    {
        new AccountPage().enterAmtToBeDeposited(amount);
    }
    @And("^click on deposit button$")
    public void clickOnDepositButton()
    {
        new AccountPage().clickOnDepBtn();
    }

    @And("^verify the message \"([^\"]*)\"$")
    public void verifyTheMessage(String message)
    {
        Assert.assertEquals(message,new AccountPage().verifyTheMsgOfAmtDep());
    }

    @And("^click on withdrawal tab$")
    public void clickOnWithdrawalTab()
    {
        new AccountPage().clickOnWithWithTab();
    }
    @And("^click on withdraw button$")
    public void clickOnWithdrawButton()
    {
        new AccountPage().clickOnWithBtn();
    }

    @Then("^check the message \"([^\"]*)\"$")
    public void checkTheMessage(String message)
    {
        Assert.assertEquals(message,new AccountPage().verifyTranSuccess());
    }

}
