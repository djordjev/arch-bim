const isRS = () => {
  if (!window || !window.location) return false

  const pathname = window.location.pathname

  return pathname.startsWith("/rs")
}

export { isRS }
