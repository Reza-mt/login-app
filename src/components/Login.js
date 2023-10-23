import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

import { validate } from './validate'
import { notify } from './toast'
import styles from './Signup.module.css';

const Login = () => {

    const [data,setData] = useState({
        email:"",
        password:""
    })

    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

    useEffect(() => {
        setErrors(validate(data, "login"))
    },[data, touched])

    const changeHandler = event => {
        if (event.target.name ==="IsAccepted"){
            setData({...data,[event.target.name]:event.target.checked })
        }else {
            setData({...data,[event.target.name]:event.target.value })
        }
    }

    const focusHandler = event => {
        setTouched({...touched,[event.target.name]: true})
    }

    const onSubmit= event => {
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("You Login successfully", "success")
        }else {
            notify("invalid data!", "error")
            setTouched({
                email:true,
                password:true
            })
        }
    }


    return (
        <div className={styles.container}>
            <form onSubmit={onSubmit} className={styles.formContainer}> 
                <h2 className={styles.header} >Login</h2>
                    <div className={styles.formField} >
                        <label>Email</label>
                        <input className={(errors.email && touched.email) ? styles.unCompleted : styles.formInput}
                            type="text"
                            name="email" 
                            value={data.email} 
                            onChange={changeHandler} 
                            onFocus={focusHandler} 
                            /> 
                        {errors.email && touched.email && <span>{errors.email}</span>}
                    </div>
                    <div className={styles.formField} >
                        <label>Password</label>
                        <input className={(errors.password && touched.password) ? styles.unCompleted : styles.formInput}
                            type="password" 
                            name="password" 
                            value={data.password} 
                            onChange={changeHandler} 
                            onFocus={focusHandler} 
                            />
                        {errors.password && touched.password && <span>{errors.password}</span>}
                    </div>
                    <div className={styles.formButtons} >
                        <Link to='/Signup'>Sign up</Link>
                        <button type="submit">Login</button>
                    </div>
            </form>      
            <ToastContainer/> 
        </div>
        
    );
};

export default Login;
