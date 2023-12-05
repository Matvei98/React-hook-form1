import { useForm,SubmitHandler} from "react-hook-form";
import Button from './Button';
import { useNavigate } from "react-router-dom";



type FormValues ={
errors:string
email:string
}

const InputForm = () => {
  const navigate = useNavigate();
	const {
		register,
		formState: { errors },
		handleSubmit,
    reset
	} = useForm<FormValues>({
		mode: "onBlur",
	});
	

	const onSubmit: SubmitHandler<FormValues> = (data) => {
    navigate(`/subscribe?email=${data.email}`);
    reset();
  }; 
	return (
	<div>
	<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-6'>
    <div className='flex flex-col justify-center gap-y-2'>
      <div  className='flex flex-row justify-between'>
        <label className='block text-xs font-bold tracking-wide text-darkSlateGrey'>
          Email address:
          <input
            type="email"
            placeholder="email@company.com"
            {...register("email", {
              required: "Valid email required",
            })}
            className={errors.email ? "error" : ""}
          />
          
        </label>
        <div className='text-right text-xs font-bold text-tomato'>
          {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
        </div> 
        </div>
        </div> 
        <Button label="Subscribe to monthly newsletter"/>
      </form>  
	</div>
	);
  };
  
  export default InputForm;