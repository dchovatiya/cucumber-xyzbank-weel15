package com.bank.pages;

import com.bank.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class CustomersPage extends Utility
{
    public CustomersPage()
    {
        PageFactory.initElements(driver,this);

    }

    @FindBy(xpath = "//select[contains(@id,'userSelect')]")
    WebElement searchCustom;
    @FindBy(xpath ="//button[contains(text(),'Delete')]")
    WebElement delBtn;
    @FindBy(xpath ="//button[contains(.,'Login')]")
    WebElement loginBtn;
    @FindBy(xpath ="//button[@class='btn logout']")
    WebElement logout;

    public void searchCustomer(String name)
    {
        selectByVisibleTextFromDropDown(searchCustom,name);
    }
    public void clickOnLoginBtn()
    {
        clickOnElement(loginBtn);

    }
    public void verifyLogout()
    {
        Boolean logoutBtnPresent=logout.isDisplayed();
        System.out.println("The logout button display status is "+logoutBtnPresent);
    }
    public void clickOnLogoutBtn()
    {
        clickOnElement(logout);
    }
    public void verifyYourNm()
    {

    }
}
