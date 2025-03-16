import { useForm } from "react-hook-form";

export default function RegisterFormWithHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmitForm(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="registration-form">
      <h2 className="form-title">С использованием react-hook-form</h2>
      <div className="form-field">
        <label>First name</label>
        <input
          {...register("firstName", {
            required: "First name is required!",
          })}
          className={errors.firstName ? "input-error" : ""}
        />
        {errors.firstName && (
          <p className="error-message">{errors.firstName.message}</p>
        )}
      </div>
      <div className="form-field">
        <label>Last name</label>
        <input
          {...register("lastName", {
            required: "Last name is required",
          })}
          className={errors.lastName ? "input-error" : ""}
        />
        {errors.lastName && (
          <p className="error-message">{errors.lastName.message}</p>
        )}
      </div>
      <div className="form-field">
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
          })}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
      </div>
      <div className="form-field">
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Min. 8 characters!",
            },
          })}
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}
      </div>
      <div className="loader-container">
        <button type="submit" className="submit-button">
          Register
        </button>
      </div>
    </form>
  );
}
