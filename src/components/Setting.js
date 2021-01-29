import React, { useContext } from 'react';
import { SettingContext } from '../state/SettingContext';

const Setting = () => {
    const {fillColor,strokeColor,lineWeight,
        changeFillColor, changeStrokeColor, changeLineWeight} = useContext(SettingContext);
    return (
        <div className = 'setting-wrap'>
            <label>
                Цвет заливки:
                <input type = 'color' defaultValue = {fillColor} onChange = {(e)=> changeFillColor(e.target.value)}/>
            </label>
            <label>
                Цвет обводки:
                <input type = 'color' defaultValue = {strokeColor} onChange = {(e)=> changeStrokeColor(e.target.value)}/>
            </label>
            <label>
                Толщина обводки:
                <input type = 'number' defaultValue = {lineWeight} min = {1} max = {100} onChange = {(e)=> changeLineWeight(e.target.value)}/>
            </label>
        </div>
    );
};

export default Setting;