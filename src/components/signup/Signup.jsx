import './signup.css'

function SignUp() {

    function handleSignUp(e) {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        const user = {
            name,
            email,
            password
        }

        fetch(`http://localhost:3000/signUp`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then((res) => {
                alert('Signup successful');
                e.target.reset()
            })

        // console.log(user);

        e.target.reset()

    }

    return (
        <div className='main'>
            <div className='container'>
                <h1>SignUp</h1>
                <form onSubmit={handleSignUp}>
                    <p>
                        <label className='m-r' htmlFor="name">Name</label>
                        <input required id='user_name' className='inp-field' type="text" name="name" />
                    </p>
                    <p>
                        <label className='m-r' htmlFor="email">E-mail</label>
                        <input required id='user_email' className='inp-field' type="text" name="email" />
                    </p>
                    <p>
                        <label className='m-r' htmlFor="password">Password</label>
                        <input required id='user_password' className='inp-field' type="password" name="password" />
                    </p>
                    <button className="form-btn" type='submit'>Register</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;