import { useState } from "react";
import Service2 from "./Service2";
import Service1 from "./Service1";

function Task2() {
    const [valueTicket, setValueTicket] = useState(0)
    let classBackground
    
    if (valueTicket === 1) {
        classBackground = "background1Task2"
    } else if (valueTicket === 2) {
        classBackground = "background2Task2"
    } else {
        classBackground = ""
    }
        
    function handleChange(e) {
        setValueTicket(parseInt(e.target.value))
    }

    function selectService () {
        if (valueTicket === 1) return <Service1 />
        else if( valueTicket === 2) return <Service2 />
    }
    
    return (
        <div className="taskBlock">
            <div className='task'>
                <h2 className="title">Задача 2.</h2>
                <p>З випадаючого списку вибираємо клас квитка у літаку. Якщо </p>
                <ul className="mb1">
                    <li>1. Бізнес -  виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк, то запропонувати закуску 
                        (так/ні)), на фоні зображення бізнес кают
                    </li>
                    <li>
                        2.Економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.
                    </li>
                </ul>
                <form className= {`form ${classBackground}`}>
                    <div>
                        <select id="tickets" className="select" onChange={handleChange}>
                            <option value={0}>Оберіть клас квитка</option>
                            <option value={1}>бізнес</option>
                            <option value={2}>економ</option>
                        </select>
                    </div>
                    {selectService()}
                </form>
            </div>
        </div>
    );
}

export default Task2;