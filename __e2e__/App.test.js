let page
const { delay } = global // ms

jest.setTimeout(30000)

beforeAll(async () => {
  page = await global.browser.newPage()
  // page = await global.page
  await page.goto(global.siteURL)
})

describe('App tests', () => {
  it('should page work well', async () => {
    await page.waitForXPath('//*[@id="root"]/ul')
    const mainMenuText = await page.evaluate(
      element => element.textContent,
      (await page.$x('//*[@id="root"]/ul/li[2]/a'))[0]
    )
    expect(mainMenuText).toEqual('Main')
    const vendorMenuText = await page.evaluate(
      element => element.textContent,
      (await page.$x('//*[@id="root"]/ul/li[4]/a'))[0]
    )
    expect(vendorMenuText).toEqual('FruitVendor')
    const hooksMenuText = await page.evaluate(
      element => element.textContent,
      (await page.$x('//*[@id="root"]/ul/li[6]/a'))[0]
    )
    expect(hooksMenuText).toEqual('Hooks')
    const guideMenuText = await page.evaluate(
      element => element.textContent,
      (await page.$x('//*[@id="root"]/ul/li[8]/a'))[0]
    )
    expect(guideMenuText).toEqual('Guide')
    const loginMenuText = await page.evaluate(
      element => element.textContent,
      (await page.$x('//*[@id="root"]/ul/li[10]/a'))[0]
    )
    expect(loginMenuText).toEqual('Login')
  })
})
