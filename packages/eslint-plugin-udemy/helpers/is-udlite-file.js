'use strict';

const fs = require('fs');
const path = require('path');

let cachedUDLiteDirs = null;

exports.isUDLiteFile = filename => {
    if (!filename.includes('/static/src/udemy/js/')) {
        return false;
    }

    if (cachedUDLiteDirs === null) {
        const jsDir = path.join(filename.split('/static/src/udemy/js/')[0], 'static/src/udemy/js');
        cachedUDLiteDirs = findUDLiteDirs(jsDir);
    }

    return filename.includes('udlite') || cachedUDLiteDirs.some(dir => filename.startsWith(dir));
};

function findUDLiteDirs(dir) {
    if (!fs.existsSync(dir)) {
        return [];
    }

    const udliteDirs = [];
    const children = fs.readdirSync(dir);
    const childrenSet = new Set(children);
    if (childrenSet.has('udlite-app.js') && !childrenSet.has('app.js')) {
        udliteDirs.push(dir);
    } else if (childrenSet.has('udlite.md')) {
        udliteDirs.push(dir);
    }

    children.forEach(child => {
        const childPath = path.join(dir, child);
        if (fs.lstatSync(childPath).isDirectory()) {
            udliteDirs.push(...findUDLiteDirs(childPath));
        }
    });

    return udliteDirs;
}
