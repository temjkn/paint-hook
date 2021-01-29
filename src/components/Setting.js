import React from 'react';

const Setting = () => {
    return (
        <div className = 'setting-wrap'>
            <label>
                Цвет заливки:
                <input type = 'color' value = '#ff1111'/>
            </label>
            <label>
                Цвет обводки:
                <input type = 'color' value = '#6dd0af'/>
            </label>
            <label>
                Толщина обводки:
                <input type = 'number' value = {5} min = {1} max = {100}/>
            </label>
        </div>
    );
};

export default Setting;