import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting},
  } = useForm();
 async function onSubmit(data) {
   await new Promise((resolve) => setTimeout(resolve,5000));
    console.log("submitting the form", data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName", {
            required: true,
            minLength: { value: 3, message: "Min length atleast 3" },
            maxLength: { value: 6, message: "Max length atmost 6" },
          })}
        />
        {errors.firstName && (
          <p className="error-msg">{errors.firstName.message}</p>
        )}
      </div>
      <div>
        <label>Middle Name: </label>
        <input {...register("middleName")}></input>
      </div>
      <div>
        <label>Last Name: </label>
        <input
          className={errors.lastName ? "input-error" : ""}
          {...register("lastName", {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "last name is not as per the rules",
            },
          })}
        />
        {errors.lastName && (
          <p className="error-msg">{errors.lastName.message}</p>
        )}
      </div>
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" :"submit"}></input>
    </form>
  );
}

export default App;
