import React from 'react'
import { GoogleLogin } from 'react-google-login';
import {useHistory} from 'react-router-dom';
const Login = () => {
let history = useHistory();
    const clientId = "264105171517-iakmhjb6l3o1lft7snv00ooc64ju6q80.apps.googleusercontent.com"
    const responseGoogle = (response) => {
        if(response)
        {
         history.push('/home');
        }
    }

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login
