import { useState } from "react";
import InputBox from "../components/InputBox";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-[360px] h-[640px] bg-white flex flex-col p-6">
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-900">
            Signin to your PopX account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Enter your credentials below
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <InputBox
            text="Email Address"
            type="email"
            placeholder="Enter email address"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <InputBox
            text="Password"
            type="password"
            placeholder="Enter password"
            required
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className={`w-full py-3 rounded-md font-medium ${
              formData.email && formData.password
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-gray-300 text-white cursor-not-allowed"
            }`}
            disabled={!formData.email || !formData.password}
            onClick={() => navigate("/dashboard")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
