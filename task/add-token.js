const TIPO_DEFAULT = 'auto';
const TIPO_LOGIN = 'login';

const poolFunction = {};
poolFunction[`${TIPO_DEFAULT}`] = require('./generate-token-default');
poolFunction[`${TIPO_LOGIN}`] = require('./generate-token-login');

function addToken(cb, { tipo, filePathMain }) {
  poolFunction[tipo](cb, filePathMain);
}

module.exports = addToken;
