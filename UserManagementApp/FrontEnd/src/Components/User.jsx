import { useLocation } from "react-router";

function User() {
  let { state } = useLocation();

  console.log(state?.user);
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl text-gray-700 mb-8">User Details</h1>
      <p className="text-2xl mb-3"><strong>Name:</strong> {state?.user?.name}</p>
      <p className="text-2xl mb-3"><strong>Email:</strong> {state?.user?.email}</p>
      <p className="text-2xl mb-3"><strong>DOB:</strong> {state?.user?.dateOfBirth}</p>
      <p className="text-2xl mb-3"><strong>Mobile:</strong> {state?.user?.mobileNumber}</p>
    </div>
  );
}

export default User;