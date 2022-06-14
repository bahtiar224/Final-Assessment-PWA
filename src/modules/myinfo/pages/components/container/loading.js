import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

const ProductListLoading = () => (
    <div width="100%" style={{ padding: 30 }}>
        <Grid container spacing={4}>
            {
                Array.from(new Array(9)).map((index) => (
                    <Grid item xs={12} sm={4} lg={4} key={index}>
                        <div width="100%">
                            <Skeleton variant="rect" width="100%" height={300} />
                            <Skeleton variant="text" height={40} />
                            <Skeleton variant="text" height={40} width="40%" />
                        </div>
                    </Grid>
                ))
            }
        </Grid>
    </div>
);

export default ProductListLoading;
