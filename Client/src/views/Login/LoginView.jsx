
import style from "./LoginView.module.css";
import LoginForm from '../../components/LoginForm/LoginForm'



const LoginView = () => {
  return (
    <div className={style.containerView}>

        <LoginForm type="signin"/>
        
        <LoginForm type="signup"/>
        
        </div>
  )
}

export default LoginView