import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-[375px] h-[812px] bg-white flex flex-col justify-end p-6">
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-900">
            Welcome to PopX
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-purple-700 transition"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>
          <button
            className="w-full py-3 bg-secondary-btn text-black font-medium rounded-md"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
