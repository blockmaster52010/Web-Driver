const {Builder, By, Key, util} = require("selenium-webdriver")
require("chromedriver")
async function openpage(){
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get("http://www.roblox.com")
}
openpage()