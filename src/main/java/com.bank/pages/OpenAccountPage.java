package com.bank.pages;

import com.bank.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class OpenAccountPage extends Utility
{
    public OpenAccountPage()
    {
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath="//select[@id='userSelect']")
    WebElement customNm;
    @FindBy(xpath="//select[@id='currency']")
    WebElement currency;
    @FindBy(xpath="//button[contains(.,'Process')]")
    WebElement process;
    public void enterCustomerName()
    {
        selectByVisibleTextFromDropDown(customNm,"Harry Potter");
    }
    public void enterCurrency()
    {
        selectByVisibleTextFromDropDown(currency,"Pound");
    }
    public void setTheProcess()
    {
        clickOnElement(process);
    }
    public void getText()
    {
        System.out.println(getTextFromAlert());
        acceptAlert();
    }
}
