import moment from 'moment'

export const getDateFormat = (date: string) => moment(date).format('DD-MM-YYYY')
