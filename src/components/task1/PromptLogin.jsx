function PromptLogin({ user, usersData, onSuccess }) {
    let result = '';
    let textColor = '';

    const foundUser = usersData.find((u) => u.login === user.login);
    const isIvan = user.login === 'Іван';

    if (foundUser) {
        if (foundUser.password === user.password) {
            result = 'Successfully!';
            textColor = isIvan ? 'textBlue' : 'textGreen';
            
            setTimeout(() => {
                onSuccess()
            }, 1000);

        } else {
            result = 'Password is incorrect';
            textColor = isIvan ? 'textBlue' : 'textRed';
        }
    } else {
        result = 'User not found.';
        textColor = isIvan ? 'textBlue' : 'textRed';
    }

    return <div className={textColor}>{result}</div>;
}

export default PromptLogin;
