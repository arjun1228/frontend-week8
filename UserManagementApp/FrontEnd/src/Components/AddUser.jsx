import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function AddUser() {
  const {register,handleSubmit,formState: { errors },reset} = useForm();

  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  let navigate = useNavigate();

  //form submit
  const onUserCreate = async (newUser) => {
    //console.log(newUser);
    setLoading(true);
    // Convert mobileNumber to Number type
    const userData = {
      ...newUser,
      mobileNumber: Number(newUser.mobileNumber)
    };
    // make HTTP POST req to create new user
    try {
      let res = await fetch("http://localhost:4000/user-api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (res.status === 201) {
        //user created – navigate to users list using absolute path
        navigate("/users");
      } else {
        // log server body text for diagnostics
        const text = await res.text();
        console.error("failed create response", res, text);
        throw new Error(text || "error occurred");
      }
    } catch (err) {
      console.log(err)
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-orange-400 text-3xl"> Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-400 text-3xl"> {error.message}</p>;
  }

  return (
    <div className="text-center">
      <h1 className="text-5xl text-gray-600">Add New User</h1>
      {/* Create user form */}
      <form onSubmit={handleSubmit(onUserCreate)} className="max-w-96 mx-auto mt-10">
        <div className="mb-5">
          <input 
            type="text" 
            {...register("name", { required: "Name is required" })} 
            className="border w-full text-2xl" 
            placeholder="Name" 
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-5">
          <input 
            type="email" 
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })} 
            className="border w-full text-2xl" 
            placeholder="Email" 
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-5">
          <input
            type="date"
            {...register("dateOfBirth", { required: "Date of birth is required" })}
            className="border w-full text-2xl"
            placeholder="Date of birth"
          />
          {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>}
        </div>

        <div className="mb-5">
          <input
            type="number"
            {...register("mobileNumber", { 
              required: "Mobile number is required",
              minLength: {
                value: 10,
                message: "Mobile number must be at least 10 digits"
              }
            })}
            className="border w-full text-2xl"
            placeholder="Mobile number"
          />
          {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>}
        </div>

        <button type="submit" className="text-2xl bg-lime-400 text-lime-50 px-8 py-4">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;