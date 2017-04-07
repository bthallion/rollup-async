'use strict';

const path = require('path');
const delivr = require('delivr');
const appName = require('read-pkg-up').sync(__dirname).pkg.name;
const { rollup } = require('rollup');

const build = async () => {
    const bundle = await rollup({
        entry   : 'index.js'
    });

    const dir = await delivr.prepare({
        bucket : appName
    });

    await bundle.write({
        format    : 'iife',
        dest      : path.join(dir.path, 'js', 'demo.js'),
        sourceMap : true
    });

    await dir.finalize();
};

module.exports = build;
