import { useForm } from "react-hook-form";
import './App.css';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <>
      <h1>Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} id="form">
        <div>
          <input 
            {...register("userName", { required: "Username is required" })} 
            id="userName" 
            placeholder="Username" 
          />
          {errors.userName && <p className="error">{errors.userName.message}</p>}
        </div>

        <div>
          <input 
            {...register("email", { 
              required: "Email is required", 
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address"
              }
            })} 
            id="email" 
            placeholder="Email" 
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div>
  <input type="password"
    {...register("password", {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters long",
      },
      pattern: {
        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
        message: "Password must contain at least one uppercase letter, one number, and one special character",
      },
    })}
    id="password"
    placeholder="Password"
  />
  {errors.password && <p className="error">{errors.password.message}</p>}
</div>


        <input type="submit" id="submit" />
      </form>
    </>
  );
}