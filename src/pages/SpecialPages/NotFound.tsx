import styles from './pay.module.css';
import cn from 'classnames';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
  const navigate = useNavigate();

  const redirectToMain = () => {
    navigate('/');
  };

  return (
    <section className={styles.page__wrapper}>
      <div className="page__shadow" />
      <div className={cn(styles.page__container, 'container')}>
        <div className={styles.page__content}>
          <div className={styles.content__top}>
            <div >"Страница не найдена" </div>
            <span className={cn(styles.top__text, styles.not_found__text)}>
              Такой страницы не существует
            </span>
          </div>
          <div className={styles.content__button}>
          <Button type="primary" onClick={redirectToMain}>На главную</Button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
