import GridList from '@common_gridlist';
import ProductItem from '@plugin_productitem';
import { Grid, Typography } from '@root/node_modules/@material-ui/core/index';

const ProductList = (props) => {
    const { textWarning, data } = props;
    return (
        <div width="100%" style={{ padding: 30 }}>
            {
                data.data.category.products.items.length > 0 ? (
                    <GridList
                        data={data.data.category.products.items}
                        ItemComponent={ProductItem}
                        gridItemProps={{ xs: 12, sm: 4, lg: 4 }}
                    />
                ) : (
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        lg={4}
                    >
                        <Typography variant="body2" color="textSecondary" component="p">
                            {textWarning}
                        </Typography>
                    </Grid>
                )
            }
        </div>
    );
};

export default ProductList;
