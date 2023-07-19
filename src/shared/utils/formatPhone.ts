const formatPhone = (phoneNumber: string) =>
  phoneNumber
    .replace(/\D/g, '')
    .replace(/^(\d{2})\B/, '($1) ')
    .replace(/(\d)?(\d{4})(\d{4})/, '$1$2-$3');

export { formatPhone };
