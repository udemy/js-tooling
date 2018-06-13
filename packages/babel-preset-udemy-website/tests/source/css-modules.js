import '../babel-polyfill';

import React, { Component } from 'react';

import baseStyles from './css-modules.global.less';
import styles from './css-modules.less';

export default class CssModules extends Component {
    render() {
        // styles.greeting can be evaluated at compile time.
        // baseStyles.colorful won't actually work at runtime since the *.global.less file is
        // ignored, but I'm testing that it doesn't try to actually output a lookup table
        // for baseStyles as it will for styles since I'm doing a dynamic styleName.
        return (
            <div className="colorful" styleName="styles.greeting">
                <span styleName={ 'baseStyles.colorful' }>
                    Hello World!
                </span>
            </div>
        );
    }
}
