import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("Name", {})} />
      <input type="email" placeholder="Email" {...register("Email", {})} />
      <textarea {...register("Short Message", {})} />

      <input type="submit" />
    </form>
  );
}