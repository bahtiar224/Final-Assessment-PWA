import { withTranslation } from '@i18n';
import { withApollo } from '@lib_apollo';

import Core from '@core_modules/myinfo/pages/core';

const Page = (props) => (
    <Core
        {...props}
    />
);

export default withApollo({ ssr: true })(withTranslation()(Page));
