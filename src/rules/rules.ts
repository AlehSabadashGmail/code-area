export const useRequire = () => {
  return {
    required: true,
    message: 'This field is required!',
  }
}

export const useAgeValidation = () => {
  return { pattern: new RegExp(/^[1-9][0-9]?$|^100$/), message: 'Incorrect' }
}
