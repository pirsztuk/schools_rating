import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sendRequest } from '../../utils/api';


function Main() {

    const ratings = [
        { name: 'Средняя школа №10', points: 100 },
        { name: 'Гимназия №7', points: 95 },
        { name: 'Средняя школа №4', points: 90 },
    ];

    const sortedRatings = ratings.sort((a, b) => b.points - a.points);

    useEffect(() => {
        // URL для отправки запроса
        const url = 'http://127.0.0.1:8000/main/is_logged';
        sendRequest(url);
    }, []); 

    return (
        
        <div>
            <h1>Рейтинг ГУО:</h1>
            <ul>
                {sortedRatings.map((item, index) => (
                    <li key={index}>{item.name} - {item.points} очков</li>
                ))}
            </ul>

            <div>
                <Link to="/sign_in"><button>Войти</button></Link>
                <Link to="/sign_up"><button>Регистрация</button></Link>
            </div>

        </div>
        
    );
  }
  
export default Main;