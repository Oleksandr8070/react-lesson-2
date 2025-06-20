function PromptLogin({user, usersData}) {
    let result = ''
    let textColor = ''
    
    if(user.login === 'Іван'){
        result = 'Please enter your login and password.'
        textColor = 'textBlue'
    } 
    else if (!user.login || !user.password) {
        result = 'Please enter your login and password.'
        textColor = 'textRed'
    } 
    else {
        const foundUser = usersData.find((u) => u.login === user.login);
        if (foundUser) {
            if (foundUser.password === user.password) {
                result = '😀 ';
            } else {
                result = 'Invalid password.';
            }
        } else {
            result ='User not found.';
            textColor = 'textRed'
        }
    }

    return (
        <div className={textColor}>
            {result}
        </div>
    )
}

export default PromptLogin;