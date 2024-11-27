import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
  backgroundColor: '#fff',
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const boxWrap = style({
  border: '2px solid #F3F4F5',
  borderRadius: '24px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

const row = style({
  backgroundColor: '#F3F4F5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  padding: '1rem',
});
const rc = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  textAlign: 'center',
});

const detail = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  backgroundColor: '#F3F4F5',
  borderRadius: '1rem',
  width: '100%',
});
const detailRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const stars = style({
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
});

const divider = style({
  borderBottom: '2px solid #F3F4F5',
});

const containerBottom = style({
  backgroundColor: '#F3F4F5',
  borderRadius: '24px',
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

export const appSt = {
  bottomBtn,
  container,
  boxWrap,
  row,
  rc,
  detail,
  detailRow,
  divider,
  stars,
  containerBottom,
};
