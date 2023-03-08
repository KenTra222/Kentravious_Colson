import React from 'react';
import './form.scss'
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log('hi');
  //console.log(errors);
  
  return (
    
            
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

    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <label>
      Name
      <input className='input' type="text" placeholder="Name" {...register("Name", {})} />
      </label>
      <label>
      Email
      <input className='input' type="email" placeholder="Email" {...register("Email", {})} />
      </label>
      <label>
      Describe your project
      <textarea {...register("Short Message", {})} placeholder=" leave a message"/>
      </label>

      <input className='submit' type="submit" />
      </form>
        <p className='resumeText'> - or download my <button >RESUME </button> </p>
      </div>
        </div>

  
  );
}