document.querySelectorAll('a[href^=magnet\\:]').forEach(el => {
    el.href = `https://put.io/default/magnet?url=${el.href}`
})
