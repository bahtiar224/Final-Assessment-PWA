import Layout from '@layout';
import Header from '@core_modules/myinfo/pages/components/header';
import SidebarView from '@core_modules/myinfo/pages/components/side/sidebar';
import SidebarLoading from '@core_modules/myinfo/pages/components/side/loading';
import ProductListView from '@core_modules/myinfo/pages/productlist';
import { getCategories } from '@core_modules/myinfo/services/graphql';
import { Grid } from '@root/node_modules/@material-ui/core/index';
import { useState } from 'react';

const Myinfo = (props) => {
    const {
        t,
    } = props;
    // Set category active
    const [categoryId, setCategoryId] = useState('');
    const [categoryName, setCategoryName] = useState('');

    // get categories from api
    const loadCategories = getCategories();

    if (!loadCategories.loading) {
        if (categoryId === '') {
            if (loadCategories.data.categories.items.length > 0) {
                setCategoryName(loadCategories.data.categories.items[0].name);
                setCategoryId(loadCategories.data.categories.items[0].id);
            }
        }
    }

    return (
        <Layout pageConfig={{}} CustomHeader={<Header />} {...props}>
            <Grid container spacing={4}>
                <Grid xs={12} sm={3} lg={3}>
                    {
                        loadCategories.loading
                            ? (
                                <SidebarLoading />
                            ) : (
                                <SidebarView title={t('myinfo:sidebarTitle')} data={loadCategories} ids={categoryId} setId={setCategoryId} setName={setCategoryName} />
                            )
                    }
                </Grid>
                <Grid xs={12} sm={9} lg={9}>
                    <ProductListView textWarning={t('myinfo:productEmpty')} id={categoryId} name={categoryName} />
                </Grid>
            </Grid>
        </Layout>
    );
};

export default Myinfo;
