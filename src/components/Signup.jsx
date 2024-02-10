// Signup.js
import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const Signup = () => {
  const handleSubmit = (values) => {
    console.log(values); // Handle form submission
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-2xl mb-4 text-center">Sign Up</h2>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name:
                </label>
                <Field
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.name && touched.name ? "border-red-500" : ""
                  }`}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-xs "
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email:
                </label>
                <Field
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.email && touched.email ? "border-red-500" : ""
                  }`}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs "
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password:
                </label>
                <Field
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.password && touched.password ? "border-red-500" : ""
                  }`}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-xs "
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="text-center text-gray-500 text-xs">
          Already have an account?{" "}
          <Link className="text-blue-500 hover:text-blue-700" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
