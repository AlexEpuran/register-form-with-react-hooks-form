import React from "react";
import "./LoginForm.css";
import { useForm } from "react-hook-form";

function LoginForm() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = (values) => console.log(values);

	return (
		<div className='login-container'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label className='login-label'>
					First name
					<input {...register("firstName", { required: true })} />
				</label>
				{errors.firstName && <span>First name is required</span>}
				<label className='login-label'>
					Last name
					<input {...register("lastName", { required: true })} />
				</label>
				{errors.lastName && <span>Last name is required</span>}
				<label className='login-label'>
					Email
					<input
						{...register("email", {
							required: "Email is required.",

							pattern: {
								value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
								message: "Invalid email address",
							},
						})}
					/>
				</label>
				{errors.email && <span>{errors.email.message}</span>}
				<label className='login-label'>
					Password
					<input
						{...register("password", {
							required: "Password is required.",

							minLength: {
								value: 6,
								message: "Password must be at least 6 characters",
							},
						})}
					/>
				</label>
				{errors.password && <span>{errors.password.message}</span>}
				<label className='login-label'>
					Location
					<input {...register("location", { required: true })} />
				</label>
				{errors.location && <span>Location is required</span>}
				<button className='submit' type='submit'>
					Register
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
