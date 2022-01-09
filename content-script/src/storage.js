/* global browser, chrome */

const hasBrowser = typeof browser !== 'undefined'
const hasChrome = typeof chrome !== 'undefined'

export const getStorage = async () => {
  if (!hasBrowser) {
    if (hasChrome) {
      return new Promise((resolve, reject) => {
        chrome.storage.local.get('data', data => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError)
          } else {
            resolve(data)
          }
        })
      })
    } else {
      return Promise.resolve({})
    }
  }
  return browser.storage.local.get('data').then(data => {
    return data
  })
}

export default {
  getStorage
}
