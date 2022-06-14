import { makeStyles } from '@material-ui/core/styles';
import { CreateMargin } from '@theme_mixins';
import {
    WHITE,
} from '@theme_color';

const useStyles = makeStyles(() => ({
    container: {
        width: '100%',
        height: '100%',
        maxHeight: 100,
        ...CreateMargin(10, 0, 20, 0),
    },
    label: {
        textTransform: 'capitalize',
    },
    labelWhite: {
        color: WHITE,
        textTransform: 'capitalize',
        '& .MuiFormLabel-root': {
            color: WHITE,
        },
    },
    labelDefault: {},
}));

export default useStyles;
