import makeStyles from '@material-ui/core/styles/makeStyles';
import {
    OVALET,
} from '@theme_color';

export default makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        fontFamily: 'Lato',
        color: OVALET,
    },
    listCategory: {
        fontFamily: 'Lato',
        fontSize: 13,
        display: 'flex',
    },
}));
