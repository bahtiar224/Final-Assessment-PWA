import Skeleton from '@material-ui/lab/Skeleton';

const SidebarLoading = () => (
    <div>
        {
            Array.from(new Array(16)).map((index) => (
                <div key={index} style={{ paddingBottom: 10 }}>
                    <Skeleton variant="rect" width="100%" height={40} />
                </div>
            ))
        }
    </div>
);

export default SidebarLoading;
