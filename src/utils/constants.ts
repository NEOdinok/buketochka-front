export class CONSTANTS {
  static PHONE_MASK = '+7(999)999-99-99';
  static LOCALHOST_MASK: string = `localhost`; //маска localhost
  static LOCAL_URL: string = `http://${CONSTANTS.LOCALHOST_MASK}`; //Адрес локалХост
  static API_V1: string = '/api/v1';
  static EMAIL_REGEX: RegExp = /^$|^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}