export const useRequire = () => {
  return {
    required: true,
    message: 'This field is required!',
  }
}

export const useRequireWithoutMessage = () => {
  return {
    required: true,
    message: '',
  }
}

export const useRequirePositiveNumber = () => {
  return {
    required: true,
    message: '',
    pattern: new RegExp(/^[0-9]+$/),
  }
}
