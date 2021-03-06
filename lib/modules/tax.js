'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModule = require('./baseModule');

var _baseModule2 = _interopRequireDefault(_baseModule);

var _models = require('../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tax = function (_BaseModule) {
  _inherits(Tax, _BaseModule);

  function Tax() {
    _classCallCheck(this, Tax);

    var _this = _possibleConstructorReturn(this, (Tax.__proto__ || Object.getPrototypeOf(Tax)).call(this));

    _this.transformModel = _models.MTax;
    return _this;
  }

  /**
  * @param {string} organizationId
  *
  * @returns {Promise<MTax[]>}
  */


  _createClass(Tax, [{
    key: 'list',
    value: function list(organizationId) {
      return this.call('/organizations/' + organizationId + '/taxes');
    }

    /**
     * @param {string} organizationId
     * @param {object} data
     *
     * @returns {Promise<MTax>}
     */

  }, {
    key: 'create',
    value: function create(organizationId, data) {
      return this.call('/organizations/' + organizationId + '/taxes', data, 'POST');
    }

    /**
     * @param {string} taxId
     * @param {object} data
     *
     * @returns {Promise<object>}
     */

  }, {
    key: 'addRate',
    value: function addRate(taxId, data) {
      return this.call('/taxes/' + taxId + '/taxRates', data, 'POST');
    }

    /**
     * @param {string} taxId
     * @param {object} data
     *
     * @returns {Promise<MTax>}
     */

  }, {
    key: 'update',
    value: function update(taxId, data) {
      return this.call('/taxes/' + taxId, data, 'PUT');
    }

    /**
     * @param {string} taxId
     *
     * @returns {Promise<MTax>}
     */

  }, {
    key: 'delete',
    value: function _delete(taxId) {
      return this.call('/taxes/' + taxId, null, 'DELETE');
    }
  }]);

  return Tax;
}(_baseModule2.default);

exports.default = Tax;