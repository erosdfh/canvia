const replaceInfileMain = require('./replace-in-file-main');
const generarToken = require('./generar-token');

async function generateTokenDefault(cb, filePathMain) {
  try {
    //const parserToken = JSON.parse(atob(TOKEN.split('.')[1]));
    /*const data = {
      currentData: parserToken.aud,
      userData:  JSON.stringify(parserToken.userdata),
      token: TOKEN
    };*/
    const data = await generarToken( '20195923753', 'moddatos');
    return replaceInfileMain(filePathMain, data);
  } catch (e) {
    console.error('ocurrio un error', error);
  } finally {
    cb();
  }
}

module.exports = generateTokenDefault;
