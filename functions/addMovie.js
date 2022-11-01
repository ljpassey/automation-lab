const { By } = require('selenium-webdriver')

let movieInput = 'Batman'

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys(`${movieInput}\n`)

    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()

}

const deleteMovie = async (driver) => {    
    await driver.findElement(By.id(`${movieInput}`)).click()

    expect(await driver.findElement(By.xpath(`//aside[text()='${movieInput} deleted!']`))).toBeTruthy()
}

const crossOffMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys(`${movieInput}\n`)

    await driver.findElement(By.xpath(`//span[text()='${movieInput}']`)).click()

    expect(await driver.findElement(By.xpath(`//aside[text()='${movieInput} watched!']`))).toBeTruthy()
}

module.exports = {
    addMovie,
    deleteMovie,
    crossOffMovie
}
