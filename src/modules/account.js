import BaseModule from "./baseModule";
import { MAccount } from "../models";

class Account extends BaseModule {

  constructor() {
    super();
    this.transformModel = MAccount;
  }

  /**
  * 
  * @param {string} accountId 
  * 
  * @returns {Promise<object>}
  */
  get(accountId) {
    return this.call(`/accounts/${accountId}`);
  }

  /**
  * 
  * @param {string} email 
  * @param {string} password 
  * 
  * @returns {Promise<MAccount>}
  */
  authenticate(email, password) {
    return this.call("/accounts/login", "POST", { email, password });
  }

  /**
  * 
  * @param {string} email 
  * @param {string} password 
  * 
  * @returns {Promise<object>}
  */
  create(email, password) {
    return this.call("/accounts", "POST", { email, password });
  }


  /**
  * 
  * @param {string} email 
  
  * @returns {Promise<boolean>}
  */
  isEmailUnique(email) {
    return this.call(`/accounts/is-unique?email=${email}`).then((data) => {
      return data.isUnique;
    });
  }
}

export default new Account();