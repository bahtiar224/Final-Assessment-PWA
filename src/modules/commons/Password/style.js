import makeStyles from '@material-ui/core/styles/makeStyles';

import {
    CenterAbsolute,
    FlexRow,
} from '@theme_mixins';
import {
    GRAY_PRIMARY, RED, GREEN, ORANGE, WHITE, OVALET,
} from '@theme_color';

export default makeStyles(() => ({
    passwordStrength: {
        background: GRAY_PRIMARY,
        width: '100%',
        height: 30,
        ...FlexRow,
    },
    passwdStrPrgsCtr: {
        background: 'transparent',
        height: 30,
    },
    passwdStrPrgsCtrCustom: {
        background: OVALET,
        height: 30,
        color: WHITE,
    },
    zero: {
        width: 0,
    },
    per3: {
        width: '30%',
    },
    half: {
        width: '50%',
    },
    per7: {
        width: '75%',
    },
    full: {
        width: '100%',
    },
    passwdStrPrgsBar: {
        height: 30,
        background: GREEN,
        opacity: 0.4,
    },
    per3Bar: {
        width: '30%',
        background: RED,
        opacity: 0.3,
    },
    halfBar: {
        background: ORANGE,
        width: '50%',
        opacity: 0.5,
    },
    txtPasswdStr: {
        position: 'absolute',
        width: '100%',
        ...CenterAbsolute,
    },
    textWhite: {
        color: WHITE,
    },
    labelWhite: {
        color: WHITE,
        '& .MuiFormLabel-root': {
            color: WHITE,
        },
        '& .MuiOutlinedInput-root': {
            borderColor: WHITE,
        },

    },
    labelDefault: {},
}));
