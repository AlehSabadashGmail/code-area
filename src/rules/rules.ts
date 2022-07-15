export const useRequire = () => {
  return {
    required: true,
    message: 'This field is required!',
  }
}

export const useCardNumber = () => {
  return {
    required: true,
    pattern: new RegExp(/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/),
    message: 'Incorrect',
  }
}

export const useCVCNumber = () => {
  return {
    required: true,
    pattern: new RegExp(/^[0-9]{3}$/),
    message: 'Incorrect',
  }
}

export const usePhoneNumber = () => {
  return {
    required: true,
    pattern: new RegExp(/\(\d{2}\)\s*\d{3}-\d{4}/),
    message: 'Incorrect',
  }
}
