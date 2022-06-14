import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import useStyles from '@core_modules/myinfo/pages/components/style';

const SidebarView = (props) => {
    const classes = useStyles();
    const {
        title, data, ids, setId,
    } = props;
    return (
        <div width="100%" style={{ padding: 30 }}>
            <h1 className={classes.title}>
                {title}
            </h1>
            <List component="nav" className={classes.root} aria-label="contacts">
                {
                    data.data.categories.items.map((item, index) => (
                        <div key={index}>
                            <ListItem
                                button
                                divider
                                selected={item.id === ids}
                                onClick={() => setId(item.id)}
                            >
                                <ListItemText>
                                    <div className={classes.listCategory}>
                                        <ArrowRightAltIcon />
                                        {' '}
                                        {item.name}
                                    </div>
                                </ListItemText>
                            </ListItem>
                            <Divider />
                        </div>
                    ))
                }
            </List>
        </div>
    );
};

export default SidebarView;
