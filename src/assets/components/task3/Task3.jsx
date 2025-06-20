import { useState } from "react";

function Task3({words}) {
    const [word, setWord] = useState(words[0])
    const [userAnswer, setUserAnswer] = useState('')
    const [borderColor, setBorderColor] = useState('')
    const [textMessage, setTextMessage] = useState('')
    let countWords = (words.length)-1

    function updateData(){
        const indexWord = words.indexOf(word)
        setUserAnswer('')
        setTextMessage('')
        setBorderColor('')

        if (indexWord !== countWords) {
            setWord(words[indexWord+1])
        } else {
            setWord(words[0])
        }
    
    }

    function checkAnswer() {
        if (userAnswer !== word.ua) {
            setBorderColor('borderRed')
            setTextMessage('Невірно, спробуйте ще раз')
        } else {
            setBorderColor('borderGreen')
            setTextMessage('Добре. Молодець!')
            setTimeout(updateData, 1000)
        }   
    }

    function changeHandler(e) {
        setUserAnswer((e.target.value).toLowerCase())
    }

    return (
        <div className= 'taskBlock'>
            <div className='task'>
                <h2 className="title">Задача 3.</h2>
                <p className="mb1"> 
                    Елемент тренажера англійської. Виводимо зображення елемента і слово. 
                    Користувач вводить відповідь. Якщо вірно – відтворюємо фразу «Добре. Молодець!» 
                    (і додаємо зелену рамку до елемента), якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» 
                    (і додаємо червону рамку).
                </p>
                <div className={`form displayFlex contentColumn contentCenter ${borderColor}`}>
                    <img className="mb1 img-150 borderRadius" src={word.imgSrc} />
                    <h3 className="mb1">{word.eng}</h3>
                    <div>
                        <label>
                            Ваш переклад:
                            <input type="text" className="input" value={userAnswer} onChange={changeHandler} />
                        </label>
                        <button className="mb1" onClick={checkAnswer}>Перевірити</button>
                        <div className="textCenter">{textMessage}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task3;