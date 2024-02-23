import React, { useState } from 'react';
import style from './LoginForm.module.css';
import mail2 from '../../assets/mail2.svg'
import password2 from '../../assets/password2.svg'
import user2 from '../../assets/user2.svg'
import loginValidator from './validation';



const LoginForm = () => {

  const [errors, setErrors]=useState ({});
  
  //capturo los datos del form en un estado local
  const [userData, setUserData]=useState ({
    email: "",
    user: "",
    password: "",
  });

  const handleChange =(e)=>{
    setErrors (loginValidator({...userData, [e.target.name]: e.target.value}))
    setUserData({...userData, [e.target.name]: e.target.value})
  }

  //Submit

  const handleSubmit = (e) => {
    e.preventDefault()

    //validar formulario antes de hacer Submit
    const formErrors = loginValidator(userData);
    if (Object.keys(formErrors).length === 0) {

      // Si no hay errores, enviar el formulario
      console.log(userData);

      //Acá se envían los datos del user
      // dispatch(postUser(userData));
      alert("User success created!");

      //luego de hacer submit limpio los inputs del form
      setUserData({
        user: "",
        email: "",
        password: "",

      })
  
  } else {
    console.log("Formulario no enviado debido a errores:", formErrors);
    alert("Corrige los errores antes de enviar el formulario.");

  }}

  return (
    <div className={style.containerLoginForm}>

      <h1 className={style.title}>Sign Up</h1>
      <hr className={style.hr}/>
      

      <form className= {style.form}
      onSubmit= {(e)=> handleSubmit(e)}>
    
        <div className={style.group}>
          <div className={style.option}>
      <img src={user2} alt="" className={style.svg}/>
        
        <input className={style.input}
        type="text" 
        value= {userData.user}
        name= "user"
        onChange={(e)=>handleChange(e)}
        placeholder='User'
        /></div>
       {errors.u1 && <p className={style.error}>{errors.u1}</p>}
  {errors.u2 && <p className={style.error}>{errors.u2}</p>}
    
        </div> 
    <div className={style.group}>
    <div className={style.option}>
        <img src={mail2} alt="" className={style.svg}/>

        <input 
        className={style.input}
        type="text" 
        placeholder='E-Mail'
        name= "email"
        onChange={(e)=>handleChange(e)}/>
        </div>
        {errors.e1 && <p className={style.error}>{errors.e1}</p>}
  {errors.e2 && <p className={style.error}>{errors.e2}</p>}
  {errors.e3 && <p className={style.error}>{errors.e3}</p>}

</div>

<div className={style.group}>
<div className={style.option}>
        <img src={password2} alt="" className={style.svg}/>

        <input 
        className={style.input}
        type="text" 
        placeholder='Password'
        name= "password"
        onChange={(e)=>handleChange(e)}/>
        </div>
        {errors.p1 && <p className={style.error}>{errors.p1}</p>}
  {errors.p2 && <p className={style.error}>{errors.p2}</p>}
        </div>
       

      </form>

<div className={style.containerButton}>
  <button className={style.button}>Login</button>
  <button className={style.button}>Sign Up</button>

</div>
        
        </div>
  )
}

export default LoginForm