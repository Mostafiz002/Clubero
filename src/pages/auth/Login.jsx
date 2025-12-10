import React from "react";
import { useForm } from "react-hook-form";
import shakeImg from "../../assets/three-friends-shaking-hands.webp";
import GoogleBtn from "../../components/shared/GoogleBtn";
import { Link, useLocation, useNavigate } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import ErrorMessage from "../../components/shared/ErrrorMessage";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn , loading} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      await signIn(data.email, data.password);
      toast.success("Logged in successfully");
      navigate(location?.state || "/");
      window.scrollTo(0, 0);
    } catch (err) {
      let message = "";
      switch (err.code) {
        case "auth/user-disabled":
          message = "This account has been disabled. Contact support.";
          break;
        case "auth/user-not-found":
          message = "No account found with this email.";
          break;
        case "auth/invalid-credential":
        case "auth/wrong-password":
          message =
            "Invalid credentials.";
          break;
        case "auth/too-many-requests":
          message =
            "Too many unsuccessful login attempts. Please try again later.";
          break;
        default:
          message = "An unexpected error occurred. Please try again.";
      }
      toast.error(message);
    }
  };

  return (
    <div className="py-20 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl gap-10 overflow-hidden -mt-10">
        {/* Form */}
        <div className="p-8 flex flex-col justify-center bg-linear-to-br from-accent/60 to-accent/20 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            {/* email  */}
            <div>
              <label className="label">
                <span className="text-info font-[Neusans-medium]">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Email Address"
                className="input input-bordered w-full outline-none focus:border-black/40 shadow-none bg-transparent"
              />
            </div>
            {errors.email && <ErrorMessage message={errors.email.message} />}

            {/* password  */}
            <div>
              <label className="label">
                <span className="text-info font-[Neusans-medium]">
                  Password
                </span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="Password"
                className="input input-bordered w-full outline-none focus:border-black/40 shadow-none bg-transparent"
              />
            </div>
            {errors.password && (
              <ErrorMessage message={errors.password.message} />
            )}

            <button className="button_primary w-full! mt-2"> {loading ? "Logging in..." : "Login"}</button>
          </form>
          <div className="divider my-6">or</div>

          {/* Google Sign In */}
          <GoogleBtn />

          <p className="text-info text-sm text-center mt-4">
            Don't have an account?
            <Link
              to="/register"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="text-accent hover:underline ml-1"
            >
              Register
            </Link>
          </p>
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center justify-center ">
          <motion.img
            animate={{ scale: [1, 0.98, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src={shakeImg}
            alt="Register Illustration"
            className="h-120 w-120 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
