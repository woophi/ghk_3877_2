import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Collapse } from '@alfalab/core-components/collapse';
import { Divider } from '@alfalab/core-components/divider';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import akIcon from './assets/ak_icon.png';
import { StarEmpty, StarFilled } from './Star';
import { appSt } from './style.css';

export const App = () => {
  const [diffOpen, setDiffOpen] = useState(false);
  const [diffOpen2, setDiffOpen2] = useState(false);

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive style={{ textAlign: 'center' }} tag="h1" view="medium" font="system" weight="bold">
          Выберите,
          <br />
          как инвестировать
        </Typography.TitleResponsive>

        <div className={appSt.boxWrap}>
          <div className={appSt.row}>
            <Typography.Text view="primary-small" weight="bold">
              Брокерский счёт
            </Typography.Text>
            <Typography.Text view="primary-medium">vs</Typography.Text>
            <Typography.Text view="primary-small" weight="bold">
              Инвесткопилка
            </Typography.Text>
          </div>
          <div className={appSt.rc}>
            <Typography.Text view="primary-medium">Доходность</Typography.Text>
          </div>
          <div className={appSt.rc} style={{ justifyContent: 'space-around', paddingTop: '0' }}>
            <Typography.Text view="primary-medium" weight="bold">
              13,57%
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="bold">
              13,57%
            </Typography.Text>
          </div>
          <div className={appSt.rc} style={{ paddingTop: '0' }}>
            <div className={appSt.detail} onClick={() => setDiffOpen(!diffOpen)}>
              <div className={appSt.detailRow}>
                <Typography.Text view="primary-medium">В чём отличие?</Typography.Text>
                <CDNIcon color="#C5C5C7" name="glyph_chevron-down_m" />
              </div>
              <Collapse expanded={diffOpen}>
                <Typography.Text style={{ marginTop: '1rem' }} view="primary-medium" color="secondary">
                  Брокерский счёт позволяет иметь более высокую доходность, но без гарантий. Инвесткопилка менее доходна, но
                  более безопасна.
                </Typography.Text>
              </Collapse>
            </div>
          </div>
          <Divider className={appSt.divider} />
          <div className={appSt.rc}>
            <Typography.Text view="primary-medium">Варианты инвестиций</Typography.Text>
          </div>
          <div className={appSt.rc} style={{ justifyContent: 'space-around', paddingTop: '0' }}>
            <div className={appSt.stars}>
              <StarFilled color="#FF352F" />
              <StarFilled color="#FF352F" />
              <StarFilled color="#FF352F" />
            </div>
            <div className={appSt.stars}>
              <StarFilled color="#000000" />
              <StarEmpty />
              <StarEmpty />
            </div>
          </div>
          <div className={appSt.rc} style={{ paddingTop: '0' }}>
            <div className={appSt.detail} onClick={() => setDiffOpen2(!diffOpen2)}>
              <div className={appSt.detailRow}>
                <Typography.Text view="primary-medium">В чём отличие?</Typography.Text>
                <CDNIcon color="#C5C5C7" name="glyph_chevron-down_m" />
              </div>
              <Collapse expanded={diffOpen2}>
                <Typography.Text style={{ marginTop: '1rem' }} view="primary-medium" color="secondary">
                  На брокерском счёте можно выбирать разные инструменты и менять стратегию. Возможности Инвесткопилки более
                  ограничены.
                </Typography.Text>
              </Collapse>
            </div>
          </div>
          <Divider className={appSt.divider} />
          <div className={appSt.rc}>
            <Typography.Text view="primary-medium">Кто управляет</Typography.Text>
          </div>
          <div className={appSt.rc} style={{ justifyContent: 'space-around', paddingTop: '0' }}>
            <Typography.Text view="primary-medium" weight="bold">
              Вы
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="bold">
              Банк
            </Typography.Text>
          </div>
          <Divider className={appSt.divider} />
          <div className={appSt.rc}>
            <Typography.Text view="primary-medium">Обслуживание</Typography.Text>
          </div>
          <div className={appSt.rc} style={{ paddingTop: '0' }}>
            <Typography.Text view="primary-medium" weight="bold">
              Бесплатно
            </Typography.Text>
          </div>
          <Divider className={appSt.divider} />
          <div className={appSt.rc}>
            <Typography.Text view="primary-medium">Пополнение и вывод</Typography.Text>
          </div>
          <div className={appSt.rc} style={{ paddingTop: '0' }}>
            <Typography.Text view="primary-medium" weight="bold">
              В любое время работы биржи
            </Typography.Text>
          </div>
          <Divider className={appSt.divider} />
          <div className={appSt.rc}>
            <Typography.Text view="primary-medium">Налог при выводе</Typography.Text>
          </div>
          <div className={appSt.rc} style={{ paddingTop: '0' }}>
            <Typography.Text view="primary-medium" weight="bold">
              13% (или 15%)
            </Typography.Text>
          </div>
          <Divider className={appSt.divider} />
          <div className={appSt.rc}>
            <Typography.Text view="primary-medium">Комиссия</Typography.Text>
          </div>
          <div className={appSt.rc} style={{ paddingTop: '0' }}>
            <Typography.Text view="primary-medium" weight="bold">
              Размер зависит от паевого инвестиционного фонда
            </Typography.Text>
          </div>
        </div>
      </div>
      <div className={appSt.containerBottom}>
        <div style={{ textAlign: 'center' }}>
          <Typography.Text view="primary-medium" color="secondary">
            Рекомендуем для брокерского счёта
          </Typography.Text>
          <Typography.TitleResponsive tag="h2" view="small" font="system" weight="bold">
            Стартовые активы
          </Typography.TitleResponsive>
        </div>

        <div className={appSt.stars} style={{ gap: '1rem' }}>
          <img src={akIcon} width={48} height={48} />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
              Альфа-Капитал Антиинфляционный
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              AKAI
            </Typography.Text>
          </div>
        </div>
        <div className={appSt.stars} style={{ gap: '1rem' }}>
          <img src={akIcon} width={48} height={48} />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
              Альфа-Капитал Денежный рынок
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              AKMM
            </Typography.Text>
          </div>
        </div>
        <div className={appSt.stars} style={{ gap: '1rem' }}>
          <img src={akIcon} width={48} height={48} />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
              Альфа-Капитал Золото
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              AKGD
            </Typography.Text>
          </div>
        </div>
        <div className={appSt.stars} style={{ gap: '1rem' }}>
          <img src={akIcon} width={48} height={48} />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
              Альфа-Капитал Умный портфель
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              AKUP
            </Typography.Text>
          </div>
        </div>
        <ButtonMobile block view="primary">
          Открыть брокерский счёт
        </ButtonMobile>
        <ButtonMobile block view="secondary">
          Открыть Инвесткопилку
        </ButtonMobile>
      </div>
    </>
  );
};
