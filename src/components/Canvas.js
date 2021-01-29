import React, { useContext } from 'react';
import { SettingContext } from '../state/SettingContext';

const Canvas = () => {
    const {fillColor,strokeColor,lineWeight} = useContext(SettingContext);
    return (
        <div className = 'canvas-wrap'>
            <canvas width = '500' height = '500'></canvas>
        </div>
    );
};

export default Canvas;