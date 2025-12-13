"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axios.get("https://karimabenihda-hyber-analyzer-fastapi.hf.space/auth/me", { withCredentials: true });
        setLoggedIn(res.data.logged_in);
      } catch (err) {
        setLoggedIn(false);
      }
    };

    checkLogin();
  }, []);
  // const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   const onResize = () => {
  //     if (window.innerWidth >= 768) setMenuOpen(false);
  //   };
  //   window.addEventListener("resize", onResize);
  //   return () => window.removeEventListener("resize", onResize);
  // }, []);

  return (
    <>
      <nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-white text-sm">
        <a href="/" aria-label="Prebuilt UI">
           <Image
        src="/images/logo_white.png"
        alt="Hybrid-Analyzer logo"
        width="100"
        height="50"
      />
        </a>

     

        <div className="flex items-center gap-3">
          {!loggedIn ? (
            <div>
          <a href="/auth/login">
          <button className="  px-6 py-2.5 bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all rounded-full text-sm">
            Login         
          </button>
          </a>
         <a href="/auth/register">
          <button className="px-6 py-2.5 bg-white text-purple-600 hover:bg-gray-100  active:scale-95 transition-all rounded-full text-sm">
            Register
          </button></a>
        </div>
) : (
       <button onClick={() => router.push("/analyze")} className="  px-6 py-2.5 bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all rounded-full text-sm">

      Analyze</button>
      )}
        </div>
      </nav>

  <div id="all" className="space-y-20">

      {/* Hero Section */}
<main className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-32 text-white">
  {/* Blurred background */}
  <div className="absolute top-28 left-1/4 w-72 h-72 bg-purple-600 rounded-full blur-[300px] -z-10" />

  <div className="flex items-center mt-44">
    <div className="flex -space-x-2 pr-3">
      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="avatar 1" className="w-7 h-7 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-1" />
      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="avatar 2" className="w-7 h-7 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[2]" />
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop" alt="avatar 3" className="w-7 h-7 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[3]" />
      <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="avatar 4" className="w-7 h-7 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[4]" />
    </div>
    <div>
      <svg width="79" height="16" viewBox="0 0 79 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M7.06923 1.47645C7.21819 1.0143 7.87205 1.0143 8.02101 1.47645L9.12739 4.90897..." fill="#9810FA" />
      </svg>
      <p className="text-sm text-gray-300">
        Used by <span className="font-medium text-white">100,000+</span> users
      </p>
    </div>
  </div>

  <h1 className="text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-3xl text-center mt-8">
    Hybrid-Analyzer
  </h1>
  <p className="text-base text-center text-slate-200 max-w-lg mt-4">
    Automatisez l’analyse de vos articles de veille grâce à l’IA hybride.
  </p>

  <div className="flex items-center gap-4 mt-8">
    <a href="auth/login">
      <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-7 h-11">
        Get started
      </button>
    </a>
  </div>
</main>





<section>
  <h1 className="text-3xl font-semibold text-center mx-auto">About our apps</h1>
            <p className="text-sm text-slate-300 text-center mt-2 max-w-lg mx-auto">
Hybrid-Analyzer est une application fullstack intelligente qui combine la puissance du Zero-Shot Classification de Hugging Face et l’analyse sémantique avancée de Gemini pour transformer vos articles en insights exploitables — automatiquement, rapidement et à grande échelle.            </p>
            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-0 pt-16">
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium">Analyse Automatisée</h3>
                        <p className="text-sm text-slate-300">Hybrid-Analyzer transforme instantanément vos articles bruts en informations structurées, sans intervention humaine.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium">Classification IA Précise</h3>
                        <p className="text-sm text-slate-300">Grâce au Zero-Shot Classification de Hugging Face, chaque texte est catégorisé avec fiabilité, même sans entraînement préalable.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium">Résumés Contextuels Intelligents</h3>
                        <p className="text-sm text-slate-300">Gemini génère des synthèses ciblées, concises et adaptées à la catégorie détectée pour un maximum de clarté.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/bookEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium">Détection de Tonalité</h3>
                        <p className="text-sm text-slate-300">L’application identifie automatiquement la tonalité du contenu, positive, neutre ou négative, pour une interprétation plus fine.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/boxEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium">Conçu pour la Performance</h3>
                        <p className="text-sm text-slate-300">Orchestration optimisée, temps de réponse rapides et une architecture sûre pour traiter des centaines d’articles par jour.</p>
                    </div>
                </div>
                
            </div>
</section>

<section>

            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
                <img className="max-w-sm w-full rounded-xl h-auto"
                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
                    alt="" />
                <div>
                    <h1 className="text-3xl font-semibold">Hybrid-Analyzer : la plateforme interne qui orchestre deux IA complémentaires</h1>
                    <p className="text-sm text-slate-300 mt-2">
                      Notre solution automatise l’analyse complète d’un texte, depuis la catégorisation jusqu’au résumé contextuel et à la détection du ton, grâce à :
                    </p>
            
                    <div className="flex flex-col gap-10 mt-6">
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-100">Hugging Face – Zero-Shot Classification</h3>
                                <p className="text-sm text-slate-300">Modèle : facebook/bart-large-mnli
→ Identifie automatiquement la catégorie la plus probable (IT, Finance, RH…).</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-100">API Gemini – Synthèse & Analyse de Tonalité</h3>
                                <p className="text-sm text-slate-300">→ Produit un résumé clair, structuré et adapté au contexte.</p>
                                <p className="text-sm text-slate-300">→ Détermine la tonalité : positive, négative ou neutre.</p>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div></section>

<section>
    <div className="max-w-5xl py-16 md:w-full mx-2 md:mx-auto flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#301469] to-black rounded-2xl p-10 text-white">
                <p className="px-6 py-2 rounded-full text-sm border border-[#54487B] bg-gradient-to-r from-[#A992F2] to-[#DFAB9B] bg-clip-text text-transparent">
                    Commnunity & Support
                </p>
                <h1 className="text-4xl md:text-5xl md:leading-[60px] font-medium max-w-2xl mt-5">
                    Join 10,000 users 
                    <span className="bg-gradient-to-r from-[#A992F2] to-[#DFAB9B] bg-clip-text text-transparent"> in the Hybrid-Analyze Community</span>
                </h1>
                <p className="text-white text-sm mt-2">Unlock all our free resources instantly.</p>
                <a href="/auth/login">
                <button className="px-12 py-2.5 mt-6 rounded-full text-sm border border-[#54487B] active:scale-95 transition-all bg-gradient-to-r from-[#A992F2] to-[#DFAB9B] bg-clip-text text-transparent">
                    Get Started
                </button></a>
            </div>
</section>

   <footer className="w-full bg-gradient-to-b from-[#000] to-[#1B004D] text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                         <Image
        src="/images/logo_white.png"
        alt="Hybrid-Analyzer logo"
        width="130"
        height="50"
      />
                      </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    Empowering creators worldwide with the most advanced AI content creation tools. Transform your ideas
                    into reality.
                </p>
            </div>
            <div className="border-t border-[#3B1A7A]">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="">Hybrid-Analyzer</a> ©2025. All rights reserved.
                </div>
            </div>
        </footer>
     </div> 
    </>
  );
}
