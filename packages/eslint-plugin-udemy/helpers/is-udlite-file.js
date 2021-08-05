'use strict';

const fs = require('fs');
const path = require('path');

let cachedUDHeavyDirs = null;

exports.isUDLiteFile = filename => {
    if (!filename.includes('/static/src/udemy/js/')) {
        return false;
    }

    if (cachedUDHeavyDirs === null) {
        const jsDir = path.join(filename.split('/static/src/udemy/js/')[0], 'static/src/udemy/js');
        cachedUDHeavyDirs = findUDHeavyDirs(jsDir);
    }

    return filename.includes('udlite') || !cachedUDHeavyDirs.some(dir => filename.startsWith(dir));
};

function findUDHeavyDirs(dir) {
    if (!fs.existsSync(dir)) {
        return [];
    }

    const udHeavyDirs = [];
    const children = fs.readdirSync(dir);
    const childrenSet = new Set(children);
    if (childrenSet.has('udheavy.md')) {
        udHeavyDirs.push(dir);
        return udHeavyDirs;
    }

    children.forEach(child => {
        const childPath = path.join(dir, child);
        if (fs.lstatSync(childPath).isDirectory()) {
            udHeavyDirs.push(...findUDHeavyDirs(childPath));
        }
    });

    return udHeavyDirs;
}
