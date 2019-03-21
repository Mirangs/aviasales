import React from 'react';
import ButtonGroup from '../buttonGroup/ButtonGroup';
import Button from '../button/Button';
import Checkbox from '../checkbox/Checkbox';

import './Sidebar.scss';

const Sidebar = ({ filter, onButtonClick, onCheckboxChange }) => {  
  const isActive = currency => {
    return currency === filter.currency;
  }

  return (
    <aside className="sidebar">
      <form className="sidebar__form" action="#" method="GET">
        <h3 className="sidebar__title">Валюта</h3>

        <ButtonGroup className="sidebar__currency-group">
          <Button active={isActive('RUB')} onClick={onButtonClick}>
            RUB
          </Button>
          <Button active={isActive('USD')} onClick={onButtonClick}>
            USD
          </Button>
          <Button active={isActive('EUR')} onClick={onButtonClick}>
            EUR
          </Button>
        </ButtonGroup>

        <h3 className="sidebar__title">Количество пересадок</h3>
        <div className="check-group">
          <Checkbox name="all" checked={filter.stops['all']} onCheckboxChange={onCheckboxChange} label="Все" />
          <Checkbox name="0" checked={filter.stops['0']} onCheckboxChange={onCheckboxChange} label="Без пересадок" />
          <Checkbox name="1" checked={filter.stops['1']} onCheckboxChange={onCheckboxChange} label="1 пересадка" />
          <Checkbox name="2" checked={filter.stops['2']} onCheckboxChange={onCheckboxChange} label="2 пересадки" />
          <Checkbox name="3" checked={filter.stops['3']} onCheckboxChange={onCheckboxChange} label="3 пересадки" />
        </div>
      </form>
    </aside>
  );
}

export default Sidebar;
