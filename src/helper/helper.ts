import moment from 'moment'

export const getDateFormat = (date: string) => moment(date).format('DD-MM-YYYY')
export const getDateNow = () => moment().format('DD-MM-YYYY')

export const getStatusValue = (data: string[]) => {
  return data.length ? data.map((value) => `status=${value}`).join('&') : ''
}
