package com.bank.pages;

import com.bank.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class AddCustomerPage extends Utility
{
    public AddCustomerPage()
    {
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//button[contains(@class,'btn home')]")
    WebElement home;
    @FindBy(xpath ="//button[contains(.,'Add Customer')]")
    WebElement addCustomer;
    @FindBy(xpath ="//button[contains(.,'Open Account')]")
    WebElement openAct;
    @FindBy(xpath = "//button[contains(.,'Customers')]")
    WebElement customers;
    @FindBy(xpath = "//input[@placeholder='First Name']")
    WebElement firstNm;
    @FindBy(xpath = "//input[contains(@placeholder,'Last Name')]")
    WebElement lastNm;
    @FindBy(xpath = "//input[contains(@placeholder,'Post Code')]")
    WebElement postCode;
    //@FindBy(xpath = "//button[text()='Add Customer']")
    //@FindBy(xpath = "//button[@type='submit']")
    //@FindBy(xpath = "//button[contains(@class,'btn btn-default')]")
    @FindBy(xpath = "//button[.='Add Customer']")
    WebElement addCustomer1;

    public void enterFirstNm(String firstName)
    {
        sendTextToElement(firstNm,firstName);

    }
    public void enterLastNm(String lastName)
    {
        sendTextToElement(lastNm,lastName);
    }
    public void enterPostCode(String postCode1)
    {
        sendTextToElement(postCode,postCode1);
    }

    public void clickOnAddCustomerBtn()
    {
        //clickOnElement(addCustomer1);
        addCustomer1.submit();
    }
    public void getTxtFromAlert()
    {
        System.out.println(getTextFromAlert());
        acceptAlert();
    }
}
