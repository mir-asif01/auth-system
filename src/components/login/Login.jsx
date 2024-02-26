import './login.css'
import '../signup/signup.css'
function Login() {
    function handleLogin(e) {
        e.preventDefault()


        const email = e.target.email.value
        const password = e.target.password.value

        const loginUser = {
            email,
            password
        }

        fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loginUser)
        }).then(res => res.json())
            .then((res) => {
                if (res.message === 'Login Failed') {
                    alert("Incorrect password");
                }
                else {
                    alert(res.message)
                }
                e.target.reset()
            })
    }
    return (
        <div className='main'>
            <div className='container'>
                <form onSubmit={handleLogin}>
                    <h1 className='ta-c'>Login</h1>
                    <p>
                        <label className='m-r' htmlFor="email">E-mail</label>
                        <input id='user_email' className='inp-field' type="text" name="email" />
                    </p>
                    <p>
                        <label className='m-r' htmlFor="password">Password</label>
                        <input id='user_password' className='inp-field' type="password" name="password" />
                    </p>
                    <button className="form-btn" type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;