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
