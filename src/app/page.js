"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

 
export default function Accueil() {
    const [connecte, setConnecte] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const verifierConnexion = async () => {
            try {
                const res = await axios.get("https://karimabenihda-hyber-analyzer-fastapi.hf.space/auth/me", { 
                    withCredentials: true 
                });
                setConnecte(res.data.logged_in);
            } catch (err) {
                setConnecte(false);
            }
        };

        verifierConnexion();
    }, []);

    return (
        <>
            <nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-white text-sm">
                <a href="/" aria-label="Hybrid Analyzer">
                    <Image
                        src="/images/logo_white.png"
                        alt="Logo Hybrid-Analyzer"
                        width="100"
                        height="50"
                    />
                </a>

                <div className="flex items-center gap-3">
                    {!connecte ? (
                        <div className="flex gap-2">
                            <a href="/auth/login">
                                <button className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all rounded-full text-sm hover:cursor-pointer">
                                    Connexion
                                </button>
                            </a>
                            <a href="/auth/register">
                                <button className="hover:cursor-pointer px-6 py-2.5 bg-white text-purple-600 hover:bg-gray-100 active:scale-95 transition-all rounded-full text-sm">
                                    Inscription
                                </button>
                            </a>
                        </div>
                    ) : (
                        <button 
                            onClick={() => router.push("/analyze")} 
                            className="hover:cursor-pointer px-6 py-2.5 bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all rounded-full text-sm"
                        >
                            Analyser
                        </button>
                    )}
                </div>
            </nav>

            <div id="tout" className="space-y-20">

                {/* Section Héros */}
                <main className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-32 text-white">
                    {/* Arrière-plan flou */}
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
                                <path d="M7.06923 1.47645C7.21819 1.0143 7.87205 1.0143 8.02101 1.47645L9.12739 4.90897C9.19109 5.08426 9.35644 5.20536 9.54391 5.22033L13.2696 5.53677C13.761 5.57334 13.9573 6.18765 13.5941 6.51101L10.7746 8.98669C10.631 9.11247 10.5677 9.30596 10.6087 9.49138L11.4598 13.1396C11.5651 13.6196 11.0433 13.9961 10.6222 13.7448L7.41794 11.8304C7.25398 11.7344 7.05139 11.7344 6.88743 11.8304L3.68314 13.7448C3.26204 13.9961 2.74024 13.6196 2.84551 13.1396L3.69663 9.49138C3.73758 9.30596 3.67426 9.11247 3.53069 8.98669L0.711184 6.51101C0.347979 6.18765 0.544262 5.57334 1.03568 5.53677L4.76144 5.22033C4.94891 5.20536 5.11426 5.08426 5.17796 4.90897L6.28434 1.47645C6.4333 1.0143 7.08027 1.0143 7.06923 1.47645Z" fill="#9810FA" />
                            </svg>
                            <p className="text-sm text-gray-300">
                                Utilisé par <span className="font-medium text-white">100 000+</span> utilisateurs
                            </p>
                        </div>
                    </div>

                    <h1 className="text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-3xl text-center mt-8">
                        Hybrid Analyzer
                    </h1>
                    <p className="text-base text-center text-slate-200 max-w-lg mt-4">
                        Automatisez l'analyse de vos articles de veille grâce à l'intelligence artificielle hybride.
                    </p>

                    <div className="flex items-center gap-4 mt-8">
                        <a href="/auth/login">
                            <button className="hover:cursor-pointer bg-purple-600 hover:bg-purple-700 text-white rounded-full px-7 h-11">
                                Commencer
                            </button>
                        </a>
                    </div>
                </main>

                <section>
                    <h1 className="text-3xl font-semibold text-center mx-auto">À propos de notre application</h1>
                    <p className="text-sm text-slate-300 text-center mt-2 max-w-lg mx-auto">
                        Hybrid Analyzer est une application intelligente complète qui combine la puissance de la classification sans apprentissage de Hugging Face et l'analyse sémantique avancée de Gemini pour transformer vos articles en informations exploitables — automatiquement, rapidement et à grande échelle.
                    </p>
                    <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-0 pt-16">
                        <div>
                            <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                            </div>
                            <div className="mt-5 space-y-2">
                                <h3 className="text-base font-medium">Analyse Automatisée</h3>
                                <p className="text-sm text-slate-300">L'Hybrid Analyzer transforme instantanément vos articles bruts en informations structurées, sans intervention humaine.</p>
                            </div>
                        </div>
                        <div>
                            <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                            </div>
                            <div className="mt-5 space-y-2">
                                <h3 className="text-base font-medium">Classification IA Précise</h3>
                                <p className="text-sm text-slate-300">Grâce à la classification sans apprentissage de Hugging Face, chaque texte est catégorisé avec fiabilité, même sans entraînement préalable.</p>
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
                                <p className="text-sm text-slate-300">L'application identifie automatiquement la tonalité du contenu : positive, neutre ou négative, pour une interprétation plus fine.</p>
                            </div>
                        </div>
                        <div>
                            <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/boxEmoji.png" alt="" />
                            </div>
                            <div className="mt-5 space-y-2">
                                <h3 className="text-base font-medium">Conçu pour la Performance</h3>
                                <p className="text-sm text-slate-300">Orchestration optimisée, temps de réponse rapides et une architecture sûre pour traiter des centaines d'articles par jour.</p>
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
                            <h1 className="text-3xl font-semibold">Hybrid Analyzer : la plateforme interne qui orchestre deux IA complémentaires</h1>
                            <p className="text-sm text-slate-300 mt-2">
                                Notre solution automatise l'analyse complète d'un texte, depuis la catégorisation jusqu'au résumé contextuel et à la détection du ton, grâce à :
                            </p>

                            <div className="flex flex-col gap-10 mt-6">
                                <div className="flex items-center gap-4">
                                    <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium text-slate-100">Hugging Face – Classification sans Apprentissage</h3>
                                        <p className="text-sm text-slate-300">Modèle : facebook/bart-large-mnli
                                            → Identifie automatiquement la catégorie la plus probable (Informatique, Finance, Ressources Humaines…).</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium text-slate-100">API Gemini – Synthèse et Analyse de Tonalité</h3>
                                        <p className="text-sm text-slate-300">→ Produit un résumé clair, structuré et adapté au contexte.</p>
                                        <p className="text-sm text-slate-300">→ Détermine la tonalité : positive, négative ou neutre.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="max-w-5xl py-16 md:w-full mx-2 md:mx-auto flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#301469] to-black rounded-2xl p-10 text-white">
                        <p className="px-6 py-2 rounded-full text-sm border border-[#54487B] bg-gradient-to-r from-[#A992F2] to-[#DFAB9B] bg-clip-text text-transparent">
                            Communauté et Assistance
                        </p>
                        <h1 className="text-4xl md:text-5xl md:leading-[60px] font-medium max-w-2xl mt-5">
                            Rejoignez 10 000 utilisateurs
                            <span className="bg-gradient-to-r from-[#A992F2] to-[#DFAB9B] bg-clip-text text-transparent"> dans la Communauté Hybrid Analyzer</span>
                        </h1>
                        <p className="text-white text-sm mt-2">Débloquez instantanément toutes nos ressources gratuites.</p>
                        <a href="/auth/login">
                            <button className="hover:cursor-pointer px-12 py-2.5 mt-6 rounded-full text-sm border border-[#54487B] active:scale-95 transition-all bg-gradient-to-r from-[#A992F2] to-[#DFAB9B] bg-clip-text text-transparent">
                                Commencer
                            </button>
                        </a>
                    </div>
                </section>

                <footer className="w-full bg-gradient-to-b from-[#000] to-[#1B004D] text-white">
                    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                        <div className="flex items-center space-x-3 mb-6">
                            <Image
                                src="/images/logo_white.png"
                                alt="Logo Hybrid Analyzer"
                                width="130"
                                height="50"
                            />
                        </div>
                        <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                            Donnons du pouvoir aux créateurs du monde entier avec les outils de création de contenu IA les plus avancés. Transformez vos idées en réalité.
                        </p>
                    </div>
                    <div className="border-t border-[#3B1A7A]">
                        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                            <a href="">Hybrid Analyzer</a> ©2025. Tous droits réservés.
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}