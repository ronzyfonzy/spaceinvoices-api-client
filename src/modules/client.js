import BaseModule from './baseModule'
import { MClient } from '../models'

class Client extends BaseModule {
  constructor () {
    super()
    this.TransformModel = MClient
  }

  /**
  *
  * @returns {Promise<MClient[]>}
  */
  list (organizationId) {
    return this.call(`/organizations/${organizationId}/clients`)
  }

  /**
  * @param {string} organizationId
  * @param {string} term
  *
  * @returns {Promise<MClient[]>}
  */
  search (organizationId, term) {
    return this.call(`/organizations/${organizationId}/search-clients?term=${term}`)
  }

  /**
  *
  * @returns {Promise<MClient>}
  */
  get (clientId) {
    return this.call(`/clients/${clientId}`)
  }

  /**
  * @param {object} data
  *
  * @returns {Promise<MClient>}
  */
  create (organizationId, data) {
    return this.call(`/organizations/${organizationId}/clients`, data, 'POST')
  }

  /**
  * @param {string} clientId
  * @param {object} data
  *
  * @returns {Promise<MClient>}
  */
  update (clientId, data) {
    return this.call(`/clients/${clientId}`, data, 'PUT')
  }

  /**
  * @param {string} clientId
  *
  * @returns {Promise<MClient>}
  */
  delete (clientId) {
    return this.call(`/clients/${clientId}`, 'DELETE')
  }
}

export default new Client()
