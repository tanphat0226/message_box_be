export const getCookieValue = (cookies, name) => {
  if (!cookies) return null
  const match = cookies.match(new RegExp(`(^| )${name}=([^;]+)`))
  return match ? match[2] : null
}
