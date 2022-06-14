import { useQuery } from '@apollo/client';
import * as schema from '@core_modules/myinfo/services/graphql/schema';

export const getCategories = () => useQuery(schema.getCategories);

export const getProductListMyInfo = (id) => useQuery(schema.getProductListById, {
    variables: {
        categoryId: id,
    },
});

export default {};
