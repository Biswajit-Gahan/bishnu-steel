const regex = {
  mobile: /^(?:[6 - 9])(?:\d{9})$/,
  name: /^(?:[a-zA-Z]{3,})\s(?:[a-zA-Z]{3,})(?:\s[a-zA-Z]{3,})?$/,
  company: /^(?:[a-zA-Z\.\ \d]{3,})$/,
  email:/^(?:[a-zA-Z]{3,}[a-zA-Z\d\.\_]*)@(?:[a-zA-Z]{5,10})\.(?:[a-zA-Z]{2,5})(?:\.[a-zA-Z]{2,5})?$/,
};

export default regex;