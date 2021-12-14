$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bank.feature");
formatter.feature({
  "line": 2,
  "name": "Bank Test",
  "description": "As a customer I want to open a bank account",
  "id": "bank-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 13026242400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Bank manager should be able to create customer account successfully",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Bank manager should be able to navigate to the add customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 200467700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 386101100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.bankManagerShouldBeAbleToNavigateToTheAddCustomerPage()"
});
formatter.result({
  "duration": 603590700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Bank manager should be able to add customer name successfully",
  "description": "",
  "id": "bank-test;bank-manager-should-be-able-to-add-customer-name-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I click on add customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter first name \"Nikita\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter last name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter postcode \"CF26 5UR\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on add customer button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "pop up display",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click on ok button of pop up",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "verify the message customer added successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerSteps.i_click_on_add_customer_tab()"
});
formatter.result({
  "duration": 106673800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikita",
      "offset": 20
    }
  ],
  "location": "BankManagerSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 518932200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "BankManagerSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 292490900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CF26 5UR",
      "offset": 18
    }
  ],
  "location": "BankManagerSteps.iEnterPostcode(String)"
});
formatter.result({
  "duration": 371606600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.i_click_on_add_customer_button()"
});
formatter.result({
  "duration": 177871900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.pop_up_display()"
});
formatter.result({
  "duration": 215206900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.click_on_ok_button_of_pop_up()"
});
formatter.result({
  "duration": 110100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.verify_the_message_customer_added_successfully()"
});
formatter.result({
  "duration": 93300,
  "status": "passed"
});
formatter.after({
  "duration": 1549972300,
  "status": "passed"
});
formatter.before({
  "duration": 4371942500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Bank manager should be able to create customer account successfully",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Bank manager should be able to navigate to the add customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 79100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 1134119800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.bankManagerShouldBeAbleToNavigateToTheAddCustomerPage()"
});
formatter.result({
  "duration": 370656800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Bank manager should be able to open customer account successfully",
  "description": "",
  "id": "bank-test;bank-manager-should-be-able-to-open-customer-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I click on open account tab",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I search customer that is created",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select currency pound",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on process button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "pop up display",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "verify the message account created successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on ok button of pop up",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerSteps.i_click_on_open_account_tab()"
});
formatter.result({
  "duration": 112853000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.i_search_customer_that_is_created()"
});
formatter.result({
  "duration": 957071900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.i_select_currency_pound()"
});
formatter.result({
  "duration": 235828500,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.click_on_process_button()"
});
formatter.result({
  "duration": 106440400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.pop_up_display()"
});
formatter.result({
  "duration": 16259700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.verify_the_message_account_created_successfully()"
});
formatter.result({
  "duration": 25631200,
  "error_message": "org.openqa.selenium.NoAlertPresentException: no such alert\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027PARAM397HP\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d5bd9f510c00b05fd042b87ed7aab7d4, getAlertText {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\jpate\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50077}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50077/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d5bd9f510c00b05fd042b87ed7aab7d4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:1054)\r\n\tat com.bank.utility.Utility.getTextFromAlert(Utility.java:126)\r\n\tat com.bank.pages.OpenAccountPage.getText(OpenAccountPage.java:35)\r\n\tat com.bank.cucumber.steps.BankManagerSteps.verify_the_message_account_created_successfully(BankManagerSteps.java:102)\r\n\tat ✽.Then verify the message account created successfully(bank.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BankManagerSteps.click_on_ok_button_of_pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3221540700,
  "status": "passed"
});
formatter.uri("customer.feature");
formatter.feature({
  "line": 2,
  "name": "Bank Test",
  "description": "As a customer I want to deposit and withdraw money",
  "id": "bank-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 5477773000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Customer should be able to do transactions successfully",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "customer should be able to navigate to his login page",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 149200,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 725189100,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.customerShouldBeAbleToNavigateToHisLoginPage()"
});
formatter.result({
  "duration": 105800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Customer should be able to login and logout successfully",
  "description": "",
  "id": "bank-test;customer-should-be-able-to-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I search the customer \"Harry Potter\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "click on login tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify logout tab is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on logout",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify your name text is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 23
    }
  ],
  "location": "CustomerSteps.iSearchTheCustomer(String)"
});
formatter.result({
  "duration": 671736700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.clickOnLoginTab()"
});
formatter.result({
  "duration": 168480200,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.verifyLogoutTabIsDisplayed()"
});
formatter.result({
  "duration": 481705100,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.clickOnLogout()"
});
formatter.result({
  "duration": 128550900,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.verifyYourNameTextIsDisplayed()"
});
formatter.result({
  "duration": 57300,
  "status": "passed"
});
formatter.after({
  "duration": 1215564900,
  "status": "passed"
});
formatter.before({
  "duration": 4881866900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Customer should be able to do transactions successfully",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "customer should be able to navigate to his login page",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 77800,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 1232153700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.customerShouldBeAbleToNavigateToHisLoginPage()"
});
formatter.result({
  "duration": 100300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Customer should be able to deposit money successfully",
  "description": "",
  "id": "bank-test;customer-should-be-able-to-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I search the customer \"Harry Potter\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "click on login tab",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "enter amount 100",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click on deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verify the message \"Deposit Successful\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 23
    }
  ],
  "location": "CustomerSteps.iSearchTheCustomer(String)"
});
formatter.result({
  "duration": 716701300,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.clickOnLoginTab()"
});
formatter.result({
  "duration": 472466200,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.clickOnDepositTab()"
});
formatter.result({
  "duration": 428251200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 13
    }
  ],
  "location": "CustomerSteps.enterAmount(int)"
});
formatter.result({
  "duration": 426217000,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.clickOnDepositButton()"
});
formatter.result({
  "duration": 102280700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 20
    }
  ],
  "location": "CustomerSteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 52159200,
  "status": "passed"
});
formatter.after({
  "duration": 1490203400,
  "status": "passed"
});
formatter.before({
  "duration": 6206133900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Customer should be able to do transactions successfully",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "customer should be able to navigate to his login page",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 391600,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 895691800,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.customerShouldBeAbleToNavigateToHisLoginPage()"
});
formatter.result({
  "duration": 41700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Customer should be able to withdraw money successfully",
  "description": "",
  "id": "bank-test;customer-should-be-able-to-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I search the customer \"Harry Potter\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "click on login tab",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click on deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "enter amount 500",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "click on withdrawal tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "enter amount 50",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "click on withdraw button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "check the message \"Transaction successful\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 23
    }
  ],
  "location": "CustomerSteps.iSearchTheCustomer(String)"
});
formatter.result({
  "duration": 851292700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.clickOnLoginTab()"
});
formatter.result({
  "duration": 302198500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.clickOnDepositTab()"
});
formatter.result({
  "duration": 620855300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 13
    }
  ],
  "location": "CustomerSteps.enterAmount(int)"
});
formatter.result({
  "duration": 1154093400,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.clickOnDepositButton()"
});
formatter.result({
  "duration": 280592500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.clickOnWithdrawalTab()"
});
formatter.result({
  "duration": 192744500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 13
    }
  ],
  "location": "CustomerSteps.enterAmount(int)"
});
formatter.result({
  "duration": 117197600,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.clickOnWithdrawButton()"
});
formatter.result({
  "duration": 148364300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction successful",
      "offset": 19
    }
  ],
  "location": "CustomerSteps.checkTheMessage(String)"
});
formatter.result({
  "duration": 20065981100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027ng-scope\u0027]//span[contains(text(),\u0027Transaction successful\u0027)]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027PARAM397HP\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [0cb08bb52445bd17938c65a22ed1ea81, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027ng-scope\u0027]//span[contains(text(),\u0027Transaction successful\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\jpate\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50177}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50177/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0cb08bb52445bd17938c65a22ed1ea81\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat com.bank.pages.AccountPage.verifyTranSuccess(AccountPage.java:69)\r\n\tat com.bank.cucumber.steps.CustomerSteps.checkTheMessage(CustomerSteps.java:93)\r\n\tat ✽.Then check the message \"Transaction successful\"(customer.feature:34)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1498155500,
  "status": "passed"
});
});