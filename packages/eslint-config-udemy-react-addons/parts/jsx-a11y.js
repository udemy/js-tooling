'use strict';

module.exports = {
    plugins: ['jsx-a11y'],
    rules: {
        // enforce elements with aria-activedescendant are tabbable
        'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
        // require ARIA roles to be valid and non-abstract
        'jsx-a11y/aria-role': 'error',
        // enforce all aria-* props are valid
        'jsx-a11y/aria-props': 'error',
        // enforce ARIA state and property values are valid
        'jsx-a11y/aria-proptypes': 'error',
        // enforce that elements that do not support ARIA roles, states, and properties do not have those attributes
        'jsx-a11y/aria-unsupported-elements': 'error',
        // enforce onClick is accompanied by at least one of the following: onKeyUp, onKeyDown, onKeyPress
        'jsx-a11y/click-events-have-key-events': 'error',
        // ensure <hX> tags have content and are not aria-hidden
        'jsx-a11y/heading-has-content': 'error',
        // disallow href "#"
        'jsx-a11y/anchor-is-valid': [
            'error',
            {aspects: ['invalidHref'], components: ['Link'], specialLink: ['to']},
        ],
        // require HTML elements to have a "lang" prop
        'jsx-a11y/html-has-lang': 'error',
        // enforce iframe elements have a title attribute
        'jsx-a11y/iframe-has-title': 'error',
        // require <img> to have a non-empty `alt` prop, or role="presentation"
        'jsx-a11y/alt-text': 'error',
        // prevent img alt text from containing redundant words like "image", "picture", or "photo"
        'jsx-a11y/img-redundant-alt': 'error',
        // require that JSX labels use "htmlFor"
        'jsx-a11y/label-has-for': 'off',
        // require HTML element's lang prop to be valid
        'jsx-a11y/lang': 'error',
        // require that mouseover/out come with focus/blur, for keyboard-only users
        'jsx-a11y/mouse-events-have-key-events': 'error',
        // prevent use of `accessKey`
        'jsx-a11y/no-access-key': 'error',
        // prevent marquee and blink elements
        'jsx-a11y/no-distracting-elements': 'error',
        // enforce explicit role property is not the same as implicit/default role property on element
        'jsx-a11y/no-redundant-roles': 'error',
        // enforce that visible elements with onClick handlers must be focusable. Visible means that it is not hidden from a screen reader
        'jsx-a11y/interactive-supports-focus': 'error',
        // enforce visible, non-interactive elements with click handlers use role attribute
        'jsx-a11y/no-static-element-interactions': ['error', {handlers: ['onClick']}],
        // enforce that elements with ARIA roles must have all required attributes for that role
        'jsx-a11y/role-has-required-aria-props': 'error',
        // enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role
        'jsx-a11y/role-supports-aria-props': 'error',
        // only allow <th> to have the "scope" attr
        'jsx-a11y/scope': 'error',
        // enforce use tab-index 0 or -1
        'jsx-a11y/tabindex-no-positive': 'error',
    },
};
