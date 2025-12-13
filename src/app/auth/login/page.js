"use client"
import React, { useState } from 'react'
import { Toaster, toast } from 'sonner'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Image from "next/image";


const validationSchema = Yup.object({
  username: Yup.string().required("Le nom d’utilisateur est requis"),
  password: Yup.string().required("Le mot de passe est requis")
})


function page() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()
  

  const handleLogin = async (values) => {
    try {
      await axios.post(
        'https://karimabenihda-hyber-analyzer-fastapi.hf.space/login',
        {
          username: values.username,
          password: values.password
        },
        { headers: { "Content-Type": "application/json" } ,withCredentials: true}
      )

      toast.success("Connexion réussie")

      setTimeout(() => {
        router.push('/analyze')
      }, 600)

    } catch (error) {
      toast.error('Identifiants invalides ou erreur du serveur')
    }
  }

  return (
    <div>
<div className='flex justify-start'>
<a href="/" className='fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32  text-white text-sm' aria-label="Hybrid Analyzer">
                    <Image
                        src="/images/logo_white.png"
                        alt="Logo Hybrid-Analyzer"
                        width="100"
                        height="50"
                    />
                </a>
      </div>
    <div className="flex justify-center items-center h-screen ">
      <Toaster position='top-right' richColors />

      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleLogin(values)}
      >
        {({ setFieldValue }) => (
          <Form
            className="w-full sm:w-[370px] text-center border border-zinc-300/60 dark:border-zinc-700 rounded-2xl px-8 bg-white dark:bg-zinc-900"
          >

            <h1 className="text-zinc-900 dark:text-white text-3xl mt-10 font-medium">
              Connexion
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 pb-6">
              Bon retour !
            </p>

            {/* USERNAME */}
            <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 dark:text-zinc-400" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>

              <Field
                name="username"
                type="text"
                placeholder="nom d’utilisateur"
                className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                  setFieldValue("username", e.target.value)
                }}
                required
              />

            </div>
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm mt-1"
            />

            {/* PASSWORD */}
            <div className="flex items-center mt-4 w-full bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 dark:text-zinc-400" viewBox="0 0 24 24">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>

              <Field
                name="password"
                type="password"
                placeholder="mot de passe"
                className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setFieldValue("password", e.target.value)
                }}
                required
              />

            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
            />

            <button
              type="submit"
              className="mt-2 w-full h-11 rounded-full bg-[#301469] text-white hover:opacity-90 transition-opacity hover:cursor-pointer"
            >Connecter
            </button>

            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 mb-11">
              Vous n’avez pas de compte ?
              <a href="/auth/register" className="text-indigo-500 dark:text-indigo-400">

S'inscrire              </a>
            </p>

          </Form>
        )}
      </Formik>

    </div>
    </div>
  )
}

export default page
