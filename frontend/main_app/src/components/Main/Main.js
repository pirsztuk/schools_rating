import { Link } from 'react-router-dom';


function Main() {

    const ratings = [
        { name: 'Средняя школа №10', points: 100 },
        { name: 'Гимназия №7', points: 95 },
        { name: 'Средняя школа №4', points: 90 },
    ];

    const sortedRatings = ratings.sort((a, b) => b.points - a.points);

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