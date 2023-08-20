import { useForm } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
export const Form = () => {

    //Schema Definition (Yup Validation Schema):
    const schema = yup.object().shape({
      fullName: yup.string().min(2).required("Please enter a valid name"),
      email: yup.string().email().required("Please enter a valid email"),
      age: yup.number().positive().integer().min(18).required("Please enter a valid age"),
      password: yup.string().min(4).max(10).required("Please enter a valid password"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords dont match")
        .required(),
    });

    //Form Setup using react-hook-form
    const {register, handleSubmit, formState: {errors}} =useForm({
        resolver: yupResolver(schema)
    });

    //Form Submission Handler
    const onSubmit = (data) => {
        console.log('FORM SUBMITTED')
        console.log(data)
    }

    return(
        <div class="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name" {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email.." {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="number" placeholder="Age.." {...register("age")}/>
            <p>{errors.age?.message}</p>
            <input type="password" placeholder="Password..." {...register("password")}/>
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
            <p>{errors.confirmPassword?.message}</p>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}
