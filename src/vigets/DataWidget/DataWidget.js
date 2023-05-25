//import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import React from 'react';
import style from './DataWidget.module.css'

// : DatePickerProps['onChange']
// : React.FC
const onChange = (date, dateString) => {
    console.log(date, dateString);
};

const DataWidget = () => (
    <Space direction="vertical" className={style.test}>
        <DatePicker onChange={onChange} />
    </Space>
);

export default DataWidget;