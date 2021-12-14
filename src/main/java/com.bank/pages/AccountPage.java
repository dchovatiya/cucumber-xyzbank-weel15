package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.poi.ss.formula.functions.T;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class AccountPage extends Utility
{
    public AccountPage() {
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath="//button[contains(.,'Deposit')]")
    WebElement deposit;
    @FindBy(xpath="//input[@placeholder='amount']")
    WebElement amtToBeDeposited;
    @FindBy(xpath="//button[contains(.,'Transactions')]")
    WebElement transactions;
    @FindBy(xpath="//button[text()='Deposit']")
    WebElement depositBtn;
    @FindBy(xpath="//span[contains(text(),'Deposit Successful')]")
    //@FindBy(xpath="//span[@class='error ng-binding']")
    //@FindBy(xpath="//div[contains(@class,'ng-scope')]//span")
    WebElement verifyDepSucTxt;
    @FindBy(xpath="//button[contains(text(),'Withdrawl')]")
    WebElement withdrawal;
    @FindBy(xpath="//input[contains(@ng-model,'amount')]")
    WebElement amtToBeWith;
    @FindBy(xpath="//button[contains(text(),'Withdraw')]")
    WebElement withBtn;
    //@FindBy(xpath="//span[contains(text(),'Transaction successful')]")
   // @FindBy(xpath="//div[@class='container-fluid mainBox ng-scope']//span")
    @FindBy(xpath="//div[@class='ng-scope']//span[contains(text(),'Transaction successful')]")
    //@FindBy(xpath="//span[@class='error ng-binding']")
    //@FindBy(xpath="//span[@ng-show='message']")
    WebElement verifyTranSuc;

    public void clickOnDepTab()
    {
        clickOnElement(deposit);
    }
    public void enterAmtToBeDeposited(int amount)
    {
        sendTextToElement(amtToBeDeposited,"500");
    }
    public void clickOnDepBtn()
    {
        clickOnElement(depositBtn);
    }
    public String verifyTheMsgOfAmtDep()
    {
        return verifyDepSucTxt.getText();
    }
    public void clickOnWithWithTab()
    {
        clickOnElement(withdrawal);
        sendTextToElement(amtToBeWith,"50");
    }
    public void clickOnWithBtn()
    {
        clickOnElement(withBtn);

    }
    public String verifyTranSuccess()
    {
        return verifyTranSuc.getText();
    }
}
