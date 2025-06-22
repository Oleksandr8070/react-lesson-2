function Task4({employees}) {
    return (  
        <div className= 'taskBlock'>
            <div className='task'>
                <h2 className="title">Задача 4.</h2>
                <p className="mb1"> 
                    Вивести список як маркований список з елементами у форматі (name: salary)
                </p>
                <div className="form">
                    <ul>
                        {employees.map((emloyee) => (
                            <li className="mb1" key={emloyee.id}>{`${emloyee.name} : ${emloyee.salary}`}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Task4;