import React from "react";
import { Formik,Form,Field } from "formik";

import * as Yup from "yup"


const Signup = () => {
  return <div className="w-full h-screen">
        <img 
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/0ff5157d-6c35-4546-a844-5254b42bff8f/TR-en-20231016-popsignuptwoweeks-perspective_alpha_website_small.jpg"></img>
        <div className="absolute bg-black/60 top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[720px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <Formik
              initialValues={
               {
                email:"",
                password:""
               }
              }
              validationSchema={
                Yup.object().shape({
                  email: Yup.string()
                    .email("Lütfen geçerli bir e-posta girin")
                    .required("Lütfen bir e-posta adresi girin"),
                  password: Yup.string()
                    .when("email", {
                      is: (email) => email  ,
                      then: Yup.string()
                        .required('No password provided.') 
                        .min(8, 'Şifre çok kısa - en az 8 karakter olmalı.')
                        .matches(/[a-zA-Z]/, 'Şifre sadece Latin harf içerebilir.')
                    })
                })
              }
              onSubmit={(values,{resetForm,setSubmitting})=>{
                console.log("values", values)
              }}>
               {({ values, errors, handleChange, handleSubmit }) => (
  <Form className="relative flex flex-col gap-y-3">
    <label className="absolute translate-y-[13px] translate-x-5 font-[300] text-zinc-400" htmlFor="email">Email</label>
    <Field className="w-[314px] h-[50px] bg-zinc-700 outline-none rounded-[4px] px-5" name="email" id="email" value={values.email} onChange={handleChange} />
    {errors.email && <div className="text-red-500">{errors.email}</div>} 
    <label className="absolute translate-y-[75px] translate-x-5 font-[300] text-zinc-400" htmlFor="password">Şifre</label>
    <Field type="password" className="w-[314px] h-[50px] bg-zinc-700 outline-none rounded-[4px] px-5" name="password" id="password" value={values.password} onChange={handleChange} />
    {errors.password && <div className="text-red-500">{errors.password}</div>} 
    <button type="submit" className="w-[314px] h-[48px] text-white px-10 py-3 bg-red-600 rounded-[4px]">Kaydol</button>
  </Form>
)}

              </Formik>
            </div>
          </div>
        </div>
          
  </div>;
}

export default Signup;
