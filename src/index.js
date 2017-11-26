(function () {
  const randomizeColor = row => {
    const rnd = () => Math.random() * 255
    const backgroundColor = `rgba(${rnd()}, ${rnd()}, ${rnd()}, .2)`

    Array.from(row.children).forEach(col => {
      col.firstElementChild.style.backgroundColor = backgroundColor
    })
  }

  const toggleRow = () => {
    const row = document.querySelector('._debug-row')

    if (row) {
      if (row.style.display) {
        row.style.display = ''
        randomizeColor()
      } else {
        row.style.display = 'none'
      }

      return true
    }

    return false
  }

  const createMarker = () => {
    const marker = document.createElement('div')

    Object.assign(marker.style, {
      height: '1px',
      width: '100%',
      backgroundColor: 'rgba(255, 0, 0, .2)',
      transform: 'scale(1, 10000)'
    })

    return marker
  }

  const createCol = () => {
    const col = document.createElement('div')
    const marker = createMarker()

    col.classList.add('wb-col-mq1-1')
    col.append(marker)

    return col
  }

  const bindEvent = () => {
    window.addEventListener('keydown', ({ key }) => {
      if (key === 'Dead') {
        toggleRow()
      }
    })
  }

  const createRow = () => {
    const grid = document.querySelector('.wb-content-grid')
    const row = document.createElement('div')
    const cols = Array.from({ length: 12 }).map(createCol)

    row.classList.add('wb-content-grid__row', '_debug-row')
    row.append(...cols)
    grid.prepend(row)
    bindEvent()
  }

  toggleRow() || createRow()
})()

