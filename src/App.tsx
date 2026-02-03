import './App.css'
import BackgroundLogin from "./img/BackgroundLogin.png"
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
function App() {

  return (
    <>
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
              <input type="text" placeholder='Email' id='email-login-input' />
            </section>
            <section id='password-login'>
              <LockOutlinedIcon className='text-6l ml-3 mr-3' fontSize='large' sx={{ color: '#81a9f2' }}></LockOutlinedIcon>
              <input type="password" placeholder='Password' id='password-login-input' />
              <span style={{
                  background: 'linear-gradient(135deg, #4561b3, #4e77b6, #5B8CFF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'normal',
                  marginRight: '15px'
                }}>Forgot password?
              </span>
            </section>
            <button id='button-login'>Login</button> <br />
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
    </>
  )
}

export default App
