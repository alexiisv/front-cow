export function diffDateString (date1, date2) {
  const diff = date1 - date2
  const diffSeconds = diff / 1000
  const diffMinutes = diffSeconds / 60
  const diffHours = diffMinutes / 60
  const diffDays = diffHours / 24

  if (diffSeconds < 60) {
    return 'Just now'
  }

  if (diffMinutes < 60) {
    return `${Math.floor(diffMinutes)} minutes ago`
  }

  if (diffHours < 24) {
    return `${Math.floor(diffHours)} hours ago`
  }

  if (diffDays < 7) {
    return `${Math.floor(diffDays)} days ago`
  }

  return `${Math.floor(diffDays / 7)} weeks ago`
}
