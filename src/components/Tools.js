import React, { useContext } from 'react';
import { SettingContext } from '../state/SettingContext';

const Tools = () => {
    const {changeTool} = useContext(SettingContext)
    return (
        <div className = 'tools'>
            <button onClick = {()=> changeTool('brush')}>Кисть</button>
            <button>Прямоугольник</button>
            <button>Круг</button>
            <button>Стерка</button>
            <button>Отменить действие</button>
            <button>Отменить действие действия</button>
        </div>
    );
};

export default Tools;