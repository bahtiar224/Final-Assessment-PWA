import { getProductListMyInfo } from '@core_modules/myinfo/services/graphql';
import ProductList from '@core_modules/myinfo/pages/components/container/product_list';
import ProductListLoading from '@core_modules/myinfo/pages/components/container/loading';

const ProductListView = (props) => {
    const { id } = props;
    const loadProduct = getProductListMyInfo(id);
    return (
        <div width="100%" style={{ padding: 30 }}>
            {
                !loadProduct.loading && id !== ''
                    ? (
                        <ProductList data={loadProduct} />
                    )
                    : (
                        <ProductListLoading />
                    )
            }
        </div>
    );
};

export default ProductListView;
