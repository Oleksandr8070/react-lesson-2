import { useState } from "react";
import PromptLogin from "./PromptLogin";
import { use } from "react";


function Task1({usersData}) {
    const [user, setUser] = useState(() => ({
        login: '',
        password: ''
    }))
    const [buttonState, setButtonState] = useState(false)

    function changeData(e) {
        buttonState ? setButtonState(false)  :  

        setUser(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }

    function clickButton() {
        if (user.login !== '' && user.password !== '') {
            setButtonState(true)
        }
    }

    function handleSuccess() {
        setUser({
            login: '',
            password: '',
        })
        setButtonState(false)
    }

    return (  
        <div className="taskBlock">
            <div className="content">
                <h2 className="title">Задача 1.</h2>
                <p>Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:</p>
                <ul className="mb1"> 
                    <li>1. Якщо логін = Іван – колір повідомлення про помилку синій</li>
                    <li>2. Якщо хтось інший, то колір повідомлення червоний</li>
                </ul>
                <form className="form">
                    <div className="displayFlex contentColumn">
                        <label htmlFor="login" className="displayBlock">
                            Login
                            <input id="login" name="login" className="displayBlock input" type="text" onChange={changeData} required/>
                        </label>
                    </div>
                    <div className="displayFlex contentColumn">
                        <label htmlFor="password">
                            Password
                            <input id="password" name="password" className="displayBlock input" type="password" onChange={changeData} required/>
                        </label>
                    </div>
                    <button className="button mb1" type="button" onClick ={clickButton}>Go</button>
                    {buttonState && <PromptLogin user={user} usersData={usersData} onSuccess= {handleSuccess}/>}
                </form>
            </div>
        </div>
    )
}

export default Task1

