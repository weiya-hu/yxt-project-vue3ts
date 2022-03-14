export function addClass(el: HTMLElement, classList: any) {
  function add(className: any) {
    if (!el.classList.contains(className)) {
      el.classList.add(className)
    }
  }

  if (typeof classList === 'string') {
    add(classList)
  } else {
    classList.forEach((item: any) => {
      add(item)
    })
  }
}

export function removeClass(el: HTMLElement, classList: any) {
  function remove(className: any) {
    el.classList.remove(className)
  }

  if (typeof classList === 'string') {
    remove(classList)
  } else {
    classList.forEach((item: any) => {
      remove(item)
    })
  }
}
