require('shelljs/global');
env.NODE_ENV = 'production'

const ora = require('ora');
const webpack = require('webpack');
const conf = require('./webpack.prod.conf');

const spinner = ora('building for production...');
spinner.start();

rm('-rf', 'dist');
mkdir('dist');
cp('-R', 'static', conf.output.path);

webpack(conf, function (err, stats) {
  spinner.stop();
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  }) + '\n');
});
