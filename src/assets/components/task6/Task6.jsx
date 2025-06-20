import { useState } from "react";

function Task6() {
    const [dishTitle, setDishTitle] = useState('')
    const [awaitingDishes, setAwaitingDishes] = useState(() => [])
    const [inProgressDishes, setInProgressDishes] = useState(() => [])
    const [inReadyDishes, setInReadyDishes] = useState(() => [])

    function changeHandler (e) {
        setDishTitle(e.target.value)
    }

    function addInAwaiting() {
        setAwaitingDishes((prevList) => [
            ...prevList,
            {
                id: new Date().getTime(),
                title: dishTitle,
            }
        ])
        setDishTitle('')
    }

    function addInProgress(id) {
        const dish = awaitingDishes.find((dish) => dish.id === id)
        
        setAwaitingDishes((prevDishes) => prevDishes.filter((dish) => dish.id !== id))
        setInProgressDishes((prevDishes) => [
            ...prevDishes,
            dish,
        ])
    }

    function addInReady(id) {
        const dish = inProgressDishes.find((dish) => dish.id == id)

        setInProgressDishes((prevDishes) => prevDishes.filter((dish) => dish.id !== id))
        setInReadyDishes((prevDishes) => [
            ...prevDishes,
            dish,
        ])
    } 

    function removeDish(id) {
        const dish = inReadyDishes.find((dish) => dish.id === id)

        setInReadyDishes((prevDishes) => prevDishes.filter((dish) => dish.id !== id))
    }
    return (
        <div className= 'taskBlock'>
            <div className='task'>
                <h2 className="title">Задача 6.</h2>
                <p className="mb1"> 
                    Задача. На кухню поступають замовлення. Спочатку ми додаємо їх у список 
                    “Очікують на виконання”, якщо повар береться робити — замовлення переходить у список “Виконуються”,   
                    якщо замовлення виконано — переходить у список “Готові до виносу”. Якщо натиснути на 
                    “Подано” - страва зникає з таблиці
                </p>
                <div className="form mb2">
                    <label>
                        Нова замовлена страва:
                        <input className="input" value={dishTitle} type="text" onChange={changeHandler} />
                        <button className="button" onClick={addInAwaiting}>Додати</button>
                    </label>
                </div>
                <div className="displayFlex">
                    <div className="form">
                        <h2 className="textMedium textCenter mb1">Очікують на виконання</h2>
                        <ul>
                            {awaitingDishes.map((dish) => (
                                <li className="displayFlex contentCenter contentBetween" key={dish.id}>
                                    <span className="displayBlock ellipsis">{dish.title}</span>
                                    <button className="button ml1" onClick={()=> addInProgress(dish.id)}>Готувати</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="form ml1 textMedium">
                        <h2 className="textMedium textCenter mb1">Виконуються</h2>
                        <ul>
                            {inProgressDishes.map((dish) => (
                                <li className="displayFlex contentCenter contentBetween" key={dish.id}>
                                    <span className="displayBlock ellipsis">{dish.title}</span>
                                    <button className="button ml1" onClick={() => addInReady(dish.id)}>Приготовано</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="form ml1 textMedium">
                        <h2 className="textMedium textCenter mb1">Готові до виносу</h2>
                        <ul>
                            {inReadyDishes.map((dish) => (
                                <li className="displayFlex contentCenter contentBetween" key={dish.id}>
                                    <span className="displayBlock ellipsis">{dish.title}</span>
                                    <button className="button ml1" onClick={() => removeDish(dish.id)}>Подано</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task6;