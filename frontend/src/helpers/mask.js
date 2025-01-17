export const cpfMask = (value) => value.replace(/\D/g, '')
  .replace(/^(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1-$2');

export const phoneMask = (value) => value.replace(/\D/g, '')
  .replace(/^(\d{2})(\d)/, '($1) $2')
  .replace(/(\d{5})(\d)/, '$1-$2')
  .replace(/(\d{4})(\d)/, '$1$2');
