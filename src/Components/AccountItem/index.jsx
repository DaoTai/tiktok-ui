import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5725138afc9f055f84d8ea010cd64871~c5_300x300.webp?x-expires=1656126000&x-signature=dm3nlUAmBLmwKxfI8gqPd4pbROY%3D"
                alt="tommy"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    DreTaiz
                    <span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </span>
                </p>
                <span className={cx('username')}>Đào Tài</span>
            </div>
        </div>
    );
}

export default AccountItem;
