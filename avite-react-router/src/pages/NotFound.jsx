import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Ничего не найдено. Перейдите на <Link to="/">главную</Link></h1>
        </div>
    );
};

export default NotFound;