import React from 'react';
const CloseIcon = ({ className,onClickFunc }) => (

<svg xml="true" encoding="UTF-8" className={className} fill='#199999' xmlns="http://www.w3.org/2000/svg" width="100mm" height="100mm" version="1.0" viewBox="0 0 100 100">
    <path onClick={onClickFunc}  d="M96 77l-27 -27 27 -27c5,-5 5,-14 0,-19l-1 -1c-5,-5 -14,-5 -19,0l-27 27 -27 -27c-5,-5 -14,-5 -19,0l-1 1c-5,5 -5,14 0,19l27 27 -27 27c-5,5 -5,14 0,19l1 1c5,5 14,5 19,0l27 -27 27 27c5,5 14,5 19,0l1 -1c5,-5 5,-14 0,-19z"/>

    </svg>
);

export default CloseIcon;