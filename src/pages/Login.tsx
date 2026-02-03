import '../App.css'
import BackgroundLogin from "../img/BackgroundLogin.png"
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { LoginAuth } from '../store/LoginStore';
import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client/react';
import { VALIDATE_PASSWORD } from '../querys/querys';
import Swal from 'sweetalert2'

type ValidatePasswordResponse = {
  Users: {
    username: string;
  }[];
};

export default function Login() {

    const [validatePassword] = useLazyQuery<ValidatePasswordResponse>(VALIDATE_PASSWORD);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const login = LoginAuth((state: any) => state.login);
    const logout = LoginAuth((state: any) => state.logout);

    async function loginClick() {
        console.log("Hola");
        const {data} = await validatePassword({
            variables: { 
                email: email,
                password: password
            }
        });
        if(data?.Users[0]?.username){
            login(data.Users[0].username);
            navigate("/habits");
        } else {
            Swal.fire("Email or password is incorrect");
        }
        // Llamar query 
        //login("Juan");
        //navigate("/habits");
    }

    useEffect(() => {
        logout();
    }, []);

    return (
        <div id='container'>
            <img id='background' src={BackgroundLogin} alt="" />
            <main>
                <section id='modal-login'>
                    <section className='flex flex-col items-center justify-center gap-4'>
                        {/* <span className="flex items-center justify-center h-20 w-20 ec ec-dart text-6xl pt-12"></span> */}
                        {/* <span className="flex items-center justify-center h-20 w-20 ec ec-blue-book text-6xl pt-12"></span> */}
                        <span className="flex items-center justify-center h-20 w-20 ec ec-1234 text-6xl pt-12"></span>
                        <span id='title-login'>LifeOps</span>
                    </section>
                    <section id='email-login'>
                        <MailOutlineRoundedIcon className='text-6l ml-3 mr-3' fontSize='large' sx={{ color: '#8aa2d2' }}></MailOutlineRoundedIcon>
                        <input value={email} type="text" placeholder='Email' id='email-login-input' onChange={(e) => setEmail(e.target.value)}/>
                    </section>
                    <section id='password-login'>
                        <LockOutlinedIcon className='text-6l ml-3 mr-3' fontSize='large' sx={{ color: '#81a9f2' }}></LockOutlinedIcon>
                        <input value={password} type="password" placeholder='Password' id='password-login-input' onChange={(e) => setPassword(e.target.value)}/>
                        <span style={{
                            background: 'linear-gradient(135deg, #4561b3, #4e77b6, #5B8CFF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 'normal',
                            marginRight: '15px'
                        }}>Forgot password?
                        </span>
                    </section>
                    <button id='button-login' onClick={loginClick}>Login</button> <br />
                    <section id='sign-up'>
                        <span style={{ color: '#8aa2d2' }}>Don't have an account? </span>
                        <span style={{
                            background: 'linear-gradient(135deg, #4F7CFF, #6FA8FF, #5B8CFF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 'bold'
                        }}>
                            Sign Up
                        </span>
                    </section>
                </section>
            </main>
        </div>
    );
}

