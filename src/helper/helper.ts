import moment from 'moment'

export const getDateFormat = (date: string) => moment(date).format('DD-MM-YYYY')
export const getDateNow = () => moment().format('DD-MM-YYYY')

export const mapState = {
  center: [59.865027, 30.373711],
  zoom: 17,
}
