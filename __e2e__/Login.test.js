let page
const { delay } = global // ms

jest.setTimeout(30000)

beforeAll(async () => {
  page = await global.browser.newPage()
  // page = await global.page
  await page.goto(global.siteURL)
}, 30000)

describe('Login tests', () => {
  it('should login functionality work well', async () => {
    const url = await page.url()
    expect(url).toMatch('/login')
    await page.waitFor('#email')
    await page.type('#email', 'roll@gmail.com', { delay })
    // use jest-puppeteer's extension match method toFill instead of the two
    // await page.waitFor('#password')
    // await page.type('#password', '12345678')
    await expect(page).toFill('#password', '12345678', { delay })
    const [button] = await page.$x(
      '//*[@id="root"]/div/form/div[3]/div/div/span/button'
    )
    await button.click({ delay })
    await page.waitForNavigation()
    const nextUrl = await page.url()
    expect(nextUrl).not.toMatch('/login')
    // with selector
    const h1Text = await page.$eval(
      '#root > h1',
      element => element.textContent
    )
    expect(h1Text).toMatch('Welcome roll@gmail.com')
    // with xpath selector
    const [h2Element] = await page.$x('//*[@id="root"]/h2')
    const h2Text = await page.evaluate(
      element => element.textContent,
      h2Element
    )
    expect(h2Text).toMatch(/^We have [\d]+ user[s]?!$/)
    // check menu
    await page.waitForXPath('//*[@id="root"]/ul/li[10]')
    const float = await page.evaluate(
      element => window.getComputedStyle(element).float,
      (await page.$x('//*[@id="root"]/ul/li[10]'))[0]
    )
    expect(float).toEqual('right')
  })
  it('should cookie work well after login', async () => {
    const [userID] = await page.cookies()
    expect(typeof userID.value).toEqual('string')
  })
  it('should logout work well afterwards', async () => {
    await expect(page).toClick('#logoutBtn')
    await page.waitForNavigation()
    const nextUrl = await page.url()
    expect(nextUrl).toMatch('/login')
  })
  it('should cookie work well after logout', async () => {
    const [userID] = await page.cookies('userID')
    expect(userID).toBeUndefined()
  })
})
