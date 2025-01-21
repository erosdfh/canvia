const gulp = require('gulp');
const GulpSSH = require('gulp-ssh');
const pathDist = 'dist/saldos-igv/';
const sshConfig = { host: '192.168.46.55', port: 22, username: 'root', password: 'dgit2015' };
const pathRemote = '/htdocs/intranet/app/recaudacion/tributaria/cuentaunica/gestionsaldos/gestion-ia-consulta-saldoacumulado/igv-saldos/';

gulp.task('eliminar-antiguo-igv', () => {
  const gulpSSH = new GulpSSH({ sshConfig });
  return gulpSSH.shell([`cd ${pathRemote}`, 'rm -rf *']);
});

gulp.task('subir-archivo-igv', () => {
  const gulpSSH = new GulpSSH({ sshConfig });
  return gulp
    .src([`${pathDist}/**`])
    .pipe(gulpSSH.dest(pathRemote));
});

gulp.task('deploy-igv', gulp.series('eliminar-antiguo-igv', 'subir-archivo-igv'));




