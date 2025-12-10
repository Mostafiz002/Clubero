import React, { useState } from "react";
import shakeImg from "../../assets/three-friends-shaking-hands.webp";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/shared/ErrrorMessage";
import { SlCloudUpload } from "react-icons/sl";
import GoogleBtn from "../../components/shared/GoogleBtn";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [fileName, setFileName] = useState("");
  const { setUser, createUser, updateUser,loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    const profileImg = data.image[0];

    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;

        //store img
        const formData = new FormData();
        formData.append("image", profileImg);
        axios
          .post(
            `https://api.imgbb.com/1/upload?key=${
              import.meta.env.VITE_image_host_key
            }`,
            formData
          )
          .then((resp) => {
            const photoURL = resp.data.data.url;

            //create user in db
            const userInfo = {
              email: data.email,
              displayName: data.name,
              photoURL: photoURL,
            };
            axiosSecure.post("/users", userInfo).catch((error) => {
              console.error("Failed to create user in DB:", error);
            });

            //update profile
            const updateProfile = {
              displayName: data.name,
              photoURL: photoURL,
            };
            updateUser(updateProfile)
              .then(() => {
                setUser({ ...user, updateProfile });
                navigate(location?.state || "/");
                toast.success("Account create successfully");
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch(() => {
            toast.error("Something went wrong");
          });
      })
      .catch((err) => {
        let message = "";
        switch (err.code) {
          case "auth/email-already-in-use":
            message = "This email is already registered.";
            break;
          case "auth/invalid-email":
            message = "Please enter a valid email address.";
            break;
          default:
            message = "An error occurred. Please try again.";
        }
        toast.error(message);
      });
  };

  return (
    <div className="py-20 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl gap-10 overflow-hidden -mt-10">
        {/* Form */}
        <div className="p-8 flex flex-col justify-center bg-linear-to-br from-accent/60 to-accent/20 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
          <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
            {/* name  */}
            <div>
              <label className="label">
                <span className="text-info font-[Neusans-medium]">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Your Name"
                className="input input-bordered w-full outline-none focus:border-black/40 shadow-none bg-transparent"
              />
            </div>
            {errors.name && <ErrorMessage message={errors.email.message} />}

            {/* photo  */}
            <div>
              <label className="label">
                <span className="text-info font-[Neusans-medium]">Image</span>
              </label>

              <label className="mt-2 flex items-center gap-3 w-full p-4 py-5 border-2 border-dashed border-black/20  rounded-lg cursor-pointer hover:border-black/50 duration-200">
                <SlCloudUpload size={35} />

                <span className="text-gray-400 text-sm">
                  {fileName ? fileName : "Upload your image (JPG, PNG)"}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  {...register("image", {
                    required: "Image is required",
                  })}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setFileName(file.name);
                      // Update React Hook Form manually
                      register("image").onChange({
                        target: { name: "image", value: e.target.files },
                      });
                    }
                  }}
                />
              </label>
            </div>
            {errors.image && <ErrorMessage message={errors.image.message} />}

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
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                    message:
                      "Password must include at least one uppercase and one lowercase letter",
                  },
                })}
                placeholder="Password"
                className="input input-bordered w-full outline-none focus:border-black/40 shadow-none bg-transparent"
              />
            </div>
            {errors.password && (
              <ErrorMessage message={errors.password.message} />
            )}

            <button className="button_primary w-full! mt-2"> {loading ? "Creating Account..." : "Register"}</button>
          </form>
          <div className="divider my-6">or</div>

          {/* Google Sign In */}
          <GoogleBtn />

          <p className="text-info text-sm text-center mt-4">
            Already have an account?
            <Link
              to="/login"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="text-accent hover:underline ml-1"
            >
              Login
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
            className="h-120 w-120 object-cover -mt-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
