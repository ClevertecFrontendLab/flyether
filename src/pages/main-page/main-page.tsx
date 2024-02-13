import { useEffect, useState } from 'react';
import cnBind from 'classnames/bind';
import styles from './main-page.module.css';
import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import { Footer } from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';

const cx = cnBind.bind(styles);

export const MainPage = () => {
  const [isEbuchka, setEbuchka] = useState(false);
  const { collapsedSider, screenWidth } = useAppSelector((state) => state.generalConditions);
 
  useEffect(() => {
    if (!collapsedSider && screenWidth > 650 && screenWidth < 980) { setEbuchka(true) } else setEbuchka(false)
  }, [collapsedSider, screenWidth]);

  return (
    <div className={cx(styles.main, { main_ebuchka: isEbuchka })}>
      <div className={styles.gap}>
        <div className={cx(styles.block, styles.text_blue, { block_ebuchka: isEbuchka })}> С CleverFit ты сможешь:<br />
          — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;<br />
          — отслеживать свои достижения в разделе статистики, сравнивая свои результаты
          с нормами и рекордами;<br />
          — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы  о тренировках;<br />
          — выполнять расписанные тренировки для разных частей тела, следуя подробным
          инструкциям и советам профессиональных тренеров. </div>
        <div className={cx(styles.block, styles.text_big, { block_ebuchka: isEbuchka })}> CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня! </div>
        <div className={cx(styles.row, { row_s: !isEbuchka })}>
          <div className={cx(styles.block_row, styles.margin_left_24, { block_row_ebuchka: isEbuchka, block_row_ne_ebuchka: !isEbuchka })}> <div className={cx(styles.ico_p, { ico_p_ebuchka: isEbuchka })}>Расписать тренировки </div> <div className={styles.ico_div}><HeartFilled className={styles.ico} />Тренировки</div></div>
          <div className={cx(styles.block_row, styles.margin_left_16, { block_row_ebuchka: isEbuchka, block_row_ne_ebuchka: !isEbuchka })}> <div className={cx(styles.ico_p, { ico_p_ebuchka: isEbuchka })}>Назначить календарь </div><div className={styles.ico_div}><CalendarTwoTone className={styles.ico} twoToneColor='#2f54eb
              '/> Календарь</div></div>
          <div className={cx(styles.block_row, styles.margin_left_16, { block_row_ebuchka: isEbuchka, block_row_ne_ebuchka: !isEbuchka })}><div className={cx(styles.ico_p, { ico_p_ebuchka: isEbuchka })}> Заполнить профиль</div> <div className={styles.ico_div}><IdcardOutlined className={styles.ico} />Профиль</div>
          </div>
        </div>
      </div >
      <div className={cx(styles.row_footer, { row_footer_ebuchka: isEbuchka, row_footer_ne_ebuchka: !isEbuchka })}>
        <div className={cx(styles.reviews)}> Смотреть отзывы</div>
        <Footer />
      </div>
    </div>
  )
};
