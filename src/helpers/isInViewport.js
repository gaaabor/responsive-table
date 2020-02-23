const isInViewport = element => {
  const { bottom, top } = element.getBoundingClientRect()
  const vHeight = window.innerHeight || document.documentElement.clientHeight

  return (top > 0 || bottom > 0) && top < vHeight
}

export default isInViewport
