// Type definitions for react-screen-keyboard 0.3.2
// Project: https://github.com/WiaczeslawP/react-screen-keyboard
// Definitions by: tinoue <https://github.com/tinoue>
// TypeScript Version: 2.3
declare module 'react-screen-keyboard' {
    import * as React from 'react';

    interface KeyboardProps {
        leftButtons?: KeyboardButton[],
        rightButtons?: KeyboardButton[],
        inputNode: JSX.Element,
        onClick?: () => void,
        isFirstLetterUppercase?: boolean,
        isNumeric?: boolean,
        layouts?: Layout[],
    }

    interface Layout {
        symbolsKeyValue: string,
        layout: string[][],
    }

    interface KeyboardButtonProps {
        value: string | JSX.Element,
        classes?: string,
        onClick: () => void,
        autofocus: boolean,
        isDisabled: boolean,
    }

    export default class Keyboard extends React.PureComponent<KeyboardProps> {}
    export class KeyboardButton extends React.PureComponent<KeyboardButtonProps> {}
    export const LatinLayout : Layout
    export const CyrillicLayout : Layout
    export const SymbolsLayout : Layout
    export const NumericLayout : Layout
}