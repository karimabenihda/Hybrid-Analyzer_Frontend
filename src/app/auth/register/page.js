"use client"
import React from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
firstname: Yup.string()
  .min(2, 'Le prénom doit contenir au moins 2 caractères')
  .required('Le prénom est requis'),

lastname: Yup.string()
  .min(2, 'Le nom doit contenir au moins 2 caractères')
  .required('Le nom est requis'),

username: Yup.string()
  .email('Adresse e-mail invalide')
  .required('L’adresse e-mail est requise'),

password: Yup.string()
  .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
  .required('Le mot de passe est requis'),

})

function page() {
  const router = useRouter()

  const handleRegister = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(
        "https://karimabenihda-hyber-analyzer-fastapi.hf.space/register",
        {
          firstname: values.firstname,
          lastname: values.lastname,
          username: values.username,
          password: values.password,
          created_at: new Date().toISOString(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      toast.success('Compte créé avec succès !')
      setTimeout(() => {
        router.push('/analyze')
      }, 600)

    } catch (error) {
      console.error("Error:", error)

      if (error.response) {
        if (error.response.status === 403) {
          toast.error('L’utilisateur existe déjà !')
          setErrors({ username: 'Cet email est déjà enregistré' })
        } else {
          toast.error(error.response.data.detail || 'L’inscription a échoué !')
        }
      } else {
        toast.error('Erreur réseau. Veuillez réessayer.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen ">
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          username: '',
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({ isSubmitting }) => (
          <Form className="w-full sm:w-[380px] text-center border border-zinc-300/60 dark:border-zinc-700 rounded-2xl px-8 bg-white dark:bg-zinc-900">

            <h1 className="text-zinc-900 dark:text-white text-3xl mt-10 font-medium">
              S’inscrire
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 pb-6">
              Bienvenue !
            </p>

            {/* NAME */}
            <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 dark:text-zinc-400" viewBox="0 0 24 24" >
                <path d="M20 21a8 8 0 0 0-16 0" />
                <circle cx="12" cy="7" r="4" />
              </svg>

              <Field
                type="text"
                placeholder="Prénom"
                name="firstname"
                className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
                required
              />
            </div>
            <ErrorMessage name="firstname" component="div" className="text-red-500 text-xs mt-1 pl-4" />
{/* NAME */}
            <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 dark:text-zinc-400" viewBox="0 0 24 24" >
                <path d="M20 21a8 8 0 0 0-16 0" />
                <circle cx="12" cy="7" r="4" />
              </svg>

              <Field
                type="text"
                placeholder="Nom"
                name="lastname"
                className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
                required
              />
            </div>
            <ErrorMessage name="lastname" component="div" className="text-red-500 text-xs mt-1 pl-4" />

            {/* EMAIL */}
            <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 dark:text-zinc-400" viewBox="0 0 24 24" >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>

              <Field
                type="email"
                placeholder="Nom d’utilisateur"
                name="username"
                className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
                required
              />
            </div>
            <ErrorMessage name="username" component="div" className="text-red-500 text-xs mt-1 pl-4" />

            {/* PASSWORD */}
            <div className="flex items-center mt-4 w-full bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 dark:text-zinc-400" viewBox="0 0 24 24" >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>

              <Field
                type="password"
                placeholder="Mot de passe"
                name="password"
                className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
                required
              />
            </div>
            <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1 pl-4" />

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full h-11 rounded-full bg-[#301469] text-white hover:opacity-90 transition-opacity"
            >
              {isSubmitting ? 'Creation de compte...' : 'S’inscrire'}
            </button>

            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 mb-11">
            Vous avez déjà un compte?{' '}
              <a href="/auth/login" className="text-indigo-500 dark:text-indigo-400">
                Connectez-vous
              </a>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default page
