const formatDate = (date) => {
  const formatDate = new Date(date).toLocaleDateString('tr-TR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  })

  return formatDate
}

export { formatDate }
