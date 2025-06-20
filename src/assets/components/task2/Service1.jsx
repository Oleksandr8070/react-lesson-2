import { useState } from "react";

function Service1 () {
    const [chooseValue, setChooseValue] = useState(false)

    function extraMeal() {
        return (
            <div>
                <p className="mb1">Бажаєте закуску?</p>
                <label className="radio-wrapper">
                    <input type="radio" name="product" value="1"/>
                    <span className="custom-radio"></span>
                    Так
                </label>
                <label className="radio-wrapper">
                    <input type="radio" name="product" value="2"/>
                    <span className="custom-radio"></span>
                    Ні
                </label>
            </div>
        )
    }
    return (
        <div className="form">
            <div className="flexBlock mb1">
                <label className="checkbox-wrapper">
                    <input type="checkBox" name="product" />
                    <span className="custom-checkbox"></span>
                    Газета
                </label>
                <label className="checkbox-wrapper">
                    <input type="checkBox" name="product" onChange={() => setChooseValue((v) => !v)} />
                    <span className="custom-checkbox"></span>
                    Коньяк
                </label>
            </div>
            {chooseValue && extraMeal()}
        </div>
    );
}

export default Service1