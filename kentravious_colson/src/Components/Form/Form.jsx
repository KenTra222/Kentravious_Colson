import './form.scss'
import React from 'react'
import { useForm } from 'react-hook-form';

const Form = () => {

     
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
      
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Fullname
      </label>
      <input type="text" placeholder="Full Name" {...register} />

      <label>
        Email
      </label>
      <input type="email" placeholder="Email" {...register("Email", {})} />

      <label>
        Message
      </label>
      <textarea placeholder='Message' {...register("Message", {})} />

      <input className='submit_btn' type="submit" />
    </form>
 
    
  )
}

export default Form