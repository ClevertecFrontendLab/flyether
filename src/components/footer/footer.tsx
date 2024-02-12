
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import styles from './styles.module.css';

export const Footer: React.FC = () => {
  return <footer className={styles.wrapper}>
    <div className={styles.block_row}>  <button type="button" className={styles.button}>Скачать на телефон</button>
      Доступоно в PRO-тарифе
    </div>
    <div className={styles.row}>
      <div className={styles.ico}><AndroidFilled /> Android OS</div>
      <div className={styles.ico}><AppleFilled /> Apple iOS</div>
    </div>
  </footer>
};
