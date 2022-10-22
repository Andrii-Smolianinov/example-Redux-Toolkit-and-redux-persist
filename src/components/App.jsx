import { useSelector, useDispatch } from 'react-redux';
import { update } from 'redux/clicksSlice';
import { getCklickValue } from 'redux/clicksSlice';

export const App = () => {
  const numberOfClicks = useSelector(getCklickValue); //підписуємся на оновлення Redux стану
  const dispatch = useDispatch(); // передаємо зміни у Redux стан

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Number Of Clicks: {numberOfClicks}</h1>
      <div>
        <button type="button" onClick={() => dispatch(update(5))}>
          add 5 clicks
        </button>
        <button type="button" onClick={() => dispatch(update(10))}>
          add 10 clicks
        </button>
        <button type="button" onClick={() => dispatch(update(50))}>
          add 50 clicks
        </button>
        <button type="button" onClick={() => dispatch(update(-100))}>
          minus 100 clicks
        </button>
      </div>
    </div>
  );
};
