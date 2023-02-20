import React from 'react';
import './form.scss'
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <section id='contact' className='section'>
            
    <div className='contact_contents'>
              <h1>Contact</h1>
              
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      
      <input className='input' type="text" placeholder="Name" {...register("Name", {})} />
      <input className='input' type="email" placeholder="Email" {...register("Email", {})} />
      <textarea {...register("Short Message", {})} />

      <input className='submit' type="submit" />
    </form>
            </div>
    </section>
  );
}