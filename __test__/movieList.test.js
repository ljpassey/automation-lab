const { Builder, Capabilities } = require("selenium-webdriver")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { addMovie, deleteMovie, crossOffMovie } = require('../functions/addMovie')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5502/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

describe('movie tests', () => {
    test('add a movie', async () => {
        await addMovie(driver)
        await driver.sleep(5000)
    });

    test('delete a movie', async () => {
        await deleteMovie(driver)
        await driver.sleep(5000)
    });

    test('cross off a movie', async () => {
        await crossOffMovie(driver)
        await driver.sleep(5000)
    });
})

