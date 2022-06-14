export const orderFormRules = () => {
  return {
    productNameRules: {
      required: true,
      message: 'The field product name should not be empty',
    },
    priceRules: {
      required: true,
      message: 'The field price should not be empty',
    },
    addressRules: {
      required: true,
      message: 'The field addres should not be empty',
    },
    latitudeRules: {
      required: true,
      message: 'The field latitude should not be empty',
    },
    longitudeRules: {
      required: true,
      message: 'The field longitude should not be empty',
    },
  }
}
