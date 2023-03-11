import React, {useRef} from 'react';
import './form.scss'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const submitNotify = () => {
    toast.success('🫱🏾‍🫲🏿 Great! Will Be In Touch Soon', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
};

const resumeNotify = () => {
  toast.success('🫱🏾‍🫲🏿 Great! The Resume Is Downloading', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
};
  
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8gizhqi', 'template_b97bbqi', form.current, 'Mfd4LCYeJOiwD1XzY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <section id='contact' className='section'>
          <h2>CONTACT ME</h2>
        
    <div className='contact_contents'>
    
      <div className='info-wrapper'>
        <div className='contact_info'>
          <div className='phone_info'>
            <p className='info_label'>Phone</p>
            <p className='info_text'>@4787443006</p>
          </div>
          
          <div className='email_info'>
            <p className='info_label'>Email</p>
            <p className='info_text'>@Kentraviousc@gmail.com</p>
          </div>
        </div>

    <form ref={form} className='form' onSubmit={sendEmail}>
      <label>
      Name
      <input className='input' type="text" placeholder="Name" {...register("user_name", {})} />
      </label>

      <label>
       Email
      <input className='input' type="email" placeholder="Email" {...register("user_email", {})} />
      </label>

      <label>
        Describe your project
        <textarea {...register("message", {})} placeholder=" leave a message"/>
      </label>

      {/*notification*/}
      
       
         <input className='submit' type="submit" onClick={submitNotify}/>
      <ToastContainer />
      </form>
        <p className='resumeText'>  or download my <button onClick={resumeNotify}>RESUME </button> </p>
      </div>
        </div>

          </section>
  
  );
}