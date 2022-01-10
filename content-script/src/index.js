import { getStorage } from './storage'
import get from 'lodash/get'

const DEFAULT_PREFIX = 'https://put.io/default/magnet?url='

getStorage().then(({ data }) => {
  document.querySelectorAll('a[href^=magnet\\:]').forEach(el => {
    if (data.mode.shouldCopy) {
      el.addEventListener('click', e => {
        e.preventDefault()
        navigator.clipboard.writeText(el.href)
        window.alert('Copied to clipboard')
      })
    } else {
      el.href = `${get(data, 'mode.prefix', DEFAULT_PREFIX)}${el.href}`
    }
  })
})
