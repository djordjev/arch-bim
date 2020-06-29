const isRS = () => {
  if (!window || !window.location) return false

  const pathname = window.location.pathname

  return pathname.startsWith("/rs")
}

const buildLink = link => {
  if (isRS()) {
    return `/rs${link}`
  }

  return link
}

export { buildLink, isRS }
