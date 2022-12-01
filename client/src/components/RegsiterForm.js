import React from 'react';
import { useForm } from 'react-hook-form';

const RegsiterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre:</label>
      <input 
        type="text" 
        placeholder="nombre" 
        {...register("nombre", {
          required: "Este campo es requerido",
          minLength: {
            value:3,
            message:"no debe de tener menos de 3 caracteres"
            },
          maxLength: {
            value:12,
            message:"no debe de tener mas de 12 caracteres"
            },
          pattern:{
            value:/^[a-zA-Z ]*$/,
            message: "Este campo solo acepta texto"}
          }
        )}
      />
      {errors.nombre && <p role="alert">{errors.nombre?.message}</p>}
      <label>Apellido:</label>
      <input type="text"
        placeholder="apellido" 
        {...register("apellido", {
          required: "Este campo es requerido",
          minLength: {
            value:3,
            message:"no debe de tener menos de 3 caracteres"
            },
          maxLength: {
            value:12,
            message:"no debe de tener mas de 12 caracteres"
            },
          pattern:{
            value:/^[a-zA-Z ]*$/,
            message: "Este campo solo acepta texto"}
          }
        )}
      />
      {errors.apellido && <p role="alert">{errors.apellido?.message}</p>}
      <label>Email:</label>
      <input type="text" 
      placeholder="email" 
      {...register("email", {
        required: {
          value:true,
          message:"Este campo es requerido"}, 
        pattern: {
          value:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i},
          message:"No es un correo valido"
          }
        )} 
      />
      {errors.email && <p role="alert">{errors.email?.message}</p>}
      <label>rut:</label>
      <input type="text" 
        placeholder="rut" 
        {...register("rut", {
          required: true, 
          pattern: /^[0-9]+[-|‐]{1}[0-9kK]{1}$/i
            }
          )}
        />

      <input type="submit" value="Registrase"/>
    </form>
  );
}

export default RegsiterForm;

