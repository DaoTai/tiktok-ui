import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    ActiveHomeIcon,
    UserGroupIcon,
    ActiveUserGroupIcon,
    LiveIcon,
    ActiveLiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For Your"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<ActiveHomeIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<ActiveUserGroupIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<ActiveLiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
