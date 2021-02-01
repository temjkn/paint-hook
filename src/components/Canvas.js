import React, { useContext, useEffect, useRef, useState } from 'react';
import { SettingContext } from '../state/SettingContext';

const Canvas = () => {
    const {fillColor,strokeColor,lineWeight} = useContext(SettingContext);
    const canvasRef = useRef();

    const [canvas,setCanvas] = useState(canvasRef.current);
    useEffect(()=>{
        setCanvas(canvasRef.current)
    },[canvas]);

    const draw = (e) => {
        const context = canvas.getContext('2d');
        context.lineWidth = lineWeight;
        context.strokeStyle = strokeColor;
        context.fillStyle = fillColor;
        context.beginPath()
        let startX = e.pageX - e.target.offsetLeft
        let startY = e.pageY - e.target.offsetTop
        context.moveTo(startX,startY)
        context.lineTo(e.pageX - e.target.offsetLeft,e.pageY - e.target.offsetTop)
        context.stroke()
        console.log('startX : '+ startX, 'startY : ' + startY)
        console.log('moveX : '+ e.pageX - e.target.offsetLeft, 'moveY : ' + e.pageY - e.target.offsetTop)
    }

    return (
        <div className = 'canvas-wrap'>
            <canvas onClick = {(e)=>{draw(e)}} ref = {canvasRef} width = '500' height = '500'></canvas>
        </div>
    );
};

export default Canvas;