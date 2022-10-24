import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useNavigate } from "react-router-dom";


const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  mail: yup.string().nullable().email(),
  phone: yup.number().min(10, 'Debe tener al menos 10 caracteres').required(),
  birthDate: yup.date(),
}).required();

export default function PromoForm() {
    let navigate = useNavigate();
  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

  const onSubmit = async data => {
    
    console.log(data);
   
    try {
        const docRef = await addDoc(collection(db, "promos"), {
            firstName: data.firstName,
            lastName: data.lastName,
            mail: data.mail,
            phone: data.phone,
            birthDate: data.birthDate,
            edad: calcularEdad(data.birthDate)
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      reset( );
      navigate("/thankyou");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombres</label>
      <input {...register("firstName")} />
      <label>Apellidos</label>
        
      <input {...register("lastName")} />
      <label>Correo Electronico</label>
      
      <input {...register("mail")} />
      {errors?.mail && <p>Debes ingresar un correo electronico válido</p>}
      <label>Telefono</label>
      <input {...register("phone")} />
      {errors?.phone && <p>Debes ingresar un teléfono correcto</p>}
      <label>Fecha de Nacimiento</label>
      <input type='date' {...register("birthDate")} />
      {errors?.birthDate && <p>Debes ingresar una fecha válida</p>}

      
      <input type="submit" />
    </form>
  );
}
