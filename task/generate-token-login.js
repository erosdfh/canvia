const gulp = require('gulp');
const prompt = require('gulp-prompt');
const generarToken = require('./generar-token');
const replaceInfileMain = require('./replace-in-file-main');

async function generarTokenLogin(cb, filePathMain) {
  gulp.src('./').pipe(
    prompt.prompt(
      [
        { type: 'input', name: 'ruc', message: 'ingrese RUC' },
        { type: 'input', name: 'pas', message: 'ingrese PAS' }
      ],
      async ({ ruc, pas }) => {
        try {
          const data = await generarToken( ruc, pas);
          return replaceInfileMain(filePathMain, data);
        } catch (e) {
          console.error('ocurrio un error', error);
        } finally {
          cb();
        }
      }
    )
  );
}

module.exports = generarTokenLogin;
