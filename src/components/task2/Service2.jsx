function Service2() {
    const beerList = ['світле', 'темне', 'нефільтроване']
    const snackList = ['чіпси', 'горішки', 'грінки']
    return (  
        <div className="flexBlock form">
            <div>
                <label>
                    Оберіть пиво
                    <select className="select">
                        {beerList.map((beer, index) => (
                            <option key={index}>{beer}</option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Оберіть снеки
                    <select className="select">
                        {snackList.map((snack, index) => (
                            <option key={index} >{snack}</option>
                        ))}
                    </select>
                </label>
            </div>
        </div>
    );
}

export default Service2;