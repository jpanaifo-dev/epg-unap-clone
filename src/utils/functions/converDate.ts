export function convertDate(date: string): string {
  const dateObj = new Date(date)
  const month = dateObj.getMonth() + 1
  const day = dateObj.getDate()
  const year = dateObj.getFullYear()

  const hour = dateObj.getHours()
  const minute = dateObj.getMinutes()
  const second = dateObj.getSeconds()

  const monthStr = month < 10 ? `0${month}` : `${month}`
  const dayStr = day < 10 ? `0${day}` : `${day}`
  return `${year}-${monthStr}-${dayStr} ${hour}:${minute}:${second}`
}

export function convertYYMMDDtoDDMMYY(date: string, isSlash?: boolean): string {
  const dateObj = new Date(date)
  const month = dateObj.getMonth() + 1
  const day = dateObj.getDate()
  const year = dateObj.getFullYear()

  const monthStr = month < 10 ? `0${month}` : `${month}`
  const dayStr = day < 10 ? `0${day}` : `${day}`

  if (isSlash) {
    return `${dayStr}/${monthStr}/${year}`
  } else {
    return `${dayStr}-${monthStr}-${year}`
  }
}

export function convertDateToLarge(inputDate: string): string {
  const date = new Date(inputDate)
  const formattedDate = date.toISOString()
  return formattedDate
}
