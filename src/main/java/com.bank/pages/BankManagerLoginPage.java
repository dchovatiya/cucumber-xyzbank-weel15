package com.bank.pages;

import com.bank.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class BankManagerLoginPage extends Utility
{
    public BankManagerLoginPage()
    {
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath="//button[contains(@class,'btn home')]")
    WebElement home;
    //@FindBy(xpath="//button[contains(.,'Add Customer')]")
    //@FindBy(xpath="//button[@ng-click='addCust()']")
    @FindBy(xpath="//div[@class='center']//button[@ng-class='btnClass1']")
    WebElement addCustomer;
   // @FindBy(xpath="//button[contains(.,'Open Account')]")
    @FindBy(xpath="//button[@ng-click='openAccount()']")
    WebElement openAct;
    @FindBy(xpath="//button[contains(.,'Customers')]")
    WebElement customers;

    public void clickOnAddCustomer()
    {
        clickOnElement(addCustomer);
    }
    public void verifyAddCustomerBtn()
    {
        verifyThatElementIsDisplayed(addCustomer);
    }
    public void clickOnOpenAccount()
    {
        clickOnElement(openAct);
    }
}
