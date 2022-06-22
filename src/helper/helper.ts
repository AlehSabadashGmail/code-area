import moment from 'moment'

export const getDateFormat = (date: string) => moment(date).format('DD-MM-YYYY')
export const getDateNow = () => moment().format('DD-MM-YYYY')
