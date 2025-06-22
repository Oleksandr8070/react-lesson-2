function Task5({services}) {
    return (
        <div className= 'taskBlock'>
            <div className='task'>
                <h2 className="title">Задача 5.</h2>
                <p className="mb1"> 
                    Самостійно сформуйте масив даних та виведіть фрагмент на зразок поданого (дані не обов’язково повинні співпадати)
                </p>
                <div className="formBig">
                    {services.map((service) => (
                        <div key={service.id} className="dispayFlex contentColumn mb2">
                            <div className="displayFlex contentCenter mb1">
                                <img className="imgIcon" src={service.imgSrc} alt="img" />
                                <div className="dispayFlex contentColumn ml1">
                                    <div className="textMedium">
                                        {service.title}
                                    </div>
                                    <div className="displayFlex">
                                        <a href={service.url}>
                                            {service.url}
                                        </a>
                                        <p className="ml1 textBlue">Перекласти сторінку</p>
                                    </div>
                                </div>
                            </div>
                            <div className="displayFlex contentColumn">
                                <a className="textLarge textBlue mb1" href={service.url}>
                                    {service.short}
                                </a>
                                <p>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Task5;