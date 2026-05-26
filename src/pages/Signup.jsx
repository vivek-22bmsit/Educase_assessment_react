import { useState } from "react";
import InputBox from "../components/InputBox";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    agency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    navigate("/dashboard", {
      state: { fullname: formData.fullname, email: formData.email },
    });
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="w-[360px] h-[640px] bg-white flex flex-col p-6 overflow-y-auto">
          <h1 className="text-xl font-semibold text-gray-900 mb-6">
            Create your PopX account
          </h1>

          <form
            className="flex flex-col gap-4 flex-grow"
            onSubmit={handleSubmit}
          >
            <InputBox
              text="Full Name"
              type="text"
              name="fullname"
              placeholder="Marry Deo"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
            <InputBox
              text="Phone Number"
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <InputBox
              text="Email Address"
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <InputBox
              text="Password"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <InputBox
              text="Company Name"
              type="text"
              name="companyName"
              placeholder="Company name"
              value={formData.companyName}
              onChange={handleChange}
            />

            <div className="flex flex-col">
              <label className="text-sm font-medium text-black mb-2">
                Are you an Agency?<span className="text-red">*</span>
              </label>
              <div className="flex items-center gap-6">
                <label>
                  <input
                    type="radio"
                    name="agency"
                    value="Yes"
                    checked={formData.agency === "Yes"}
                    onChange={handleChange}
                    className="accent-primary"
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="agency"
                    value="No"
                    checked={formData.agency === "No"}
                    onChange={handleChange}
                    className="accent-primary"
                  />{" "}
                  No
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-medium rounded-md mt-6 hover:bg-purple-700 transition"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
