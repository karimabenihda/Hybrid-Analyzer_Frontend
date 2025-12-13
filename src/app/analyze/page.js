"use client";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from "next/navigation";
function Page() {
    const [text, setText] = useState('')
    const[name,setName]=useState('')
    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [summary, setSummary] = useState(null);
    const [summaryLoading, setSummaryLoading] = useState(false);
    const [summaryError, setSummaryError] = useState(null);

    const router = useRouter();

//     useEffect(() => {
//     const checkAuth = async () => {
//         try {
//             await axios.get("http://127.0.0.1:8000/auth/me", { withCredentials: true });
//         } catch (err) {
//             router.push("/auth/login")
//         }
//     };

//     checkAuth();
// }, []);
    


    const add_category=async(values)=>{
      try{
        const response = await axios.post('https://karimabenihda-hyber-analyzer-fastapi.hf.space/categories',
            {name:values.name},
             {
          headers: {
            "Content-Type": "application/json",
          },
        }
        )
    fetch_categories();        
    setName("");        
 }catch(error){
       console.log(error)

      }
    }


    const fetch_categories = async () => {
        try {
            const response = await axios.get('https://karimabenihda-hyber-analyzer-fastapi.hf.space/categories')
            setCategories(response.data.categories)
        } catch (error) {
            console.log(error)
        }
    }

    const handle_analyze = async () => {
        if (selectedCategories.length === 0 || text.trim() === "") {
            return alert("Please fill the text and select at least one category");
        }

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await axios.post("https://karimabenihda-hyber-analyzer-fastapi.hf.space/analyze", {
                text: text,
                categories: selectedCategories,
            }, 
              { withCredentials: true },

            {
                headers: { "Content-Type": "application/json" }
            });

            console.log("Result:", response.data);
            setResult(response.data);
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.detail || "An error occurred during analysis");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetch_categories();
    }, []);

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            if (!selectedCategories.includes(value)) {
                setSelectedCategories([...selectedCategories, value]);
            }
        } else {
            setSelectedCategories(
                selectedCategories.filter((name) => name !== value)
            );
        }
    };


    const handle_classify = async (textData) => {
    try {
        setSummaryLoading(true);
        setSummaryError(null);
        
        const response = await axios.post(
            'https://karimabenihda-hyber-analyzer-fastapi.hf.space/classify',
            {
                text: textData.text,
                score: textData.result.score,
                best_category: textData.result.best_category
            },
            {
                headers: { "Content-Type": "application/json" }
            }
        );
        
        setSummary(response.data);
        console.log("Summary generated:", response.data);
        
    } catch (error) {
        console.error("Error generating summary:", error);
        setSummaryError(error.response?.data?.detail || "Failed to generate summary");
    } finally {
        setSummaryLoading(false);
    }
};

    return (
        <div className='space-y-10 p-3'>
            <div className='flex justify-center'>
                <h2 className="text-3xl md:text-[30px]/12 font-medium text-gray-100 py-4 text-center">
                    Paste your text or your article and choose categories
                </h2>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-6">
                {/* LEFT COLUMN: Textarea */}
                <div className="part1 w-full md:w-1/2">
                    <div className="w-full">
                        <div className="relative w-full min-w-[200px]">
                            <textarea
                                className=" peer h-full min-h-[200px] w-full resize-none rounded-[7px] border border-gray-700 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-100 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 placeholder-shown:border-t-gray-500 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                                onChange={(e) => setText(e.target.value)}
                                value={text}
                            ></textarea>
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-100 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-100 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-100 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Put your article here
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            onClick={handle_analyze}
                            disabled={loading}
                            className="mt-2 px-7 h-11 rounded-full bg-[#301469] text-white 
                                     hover:opacity-90 hover:scale-105 
                                     transition duration-300 ease-in-out 
                                     active:scale-100 hover:cursor-pointer
                                     disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Analyzing..." : "Analyze"}
                        </button>
                    </div>

                    {/* Results Section */}
                    {result && (
                        <div>
                        <div className="mt-6 p-4 bg-gradient-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-100 mb-3">Analysis Results</h3>
                            
                            <div className="mb-4">
                                <p className="text-gray-300 mb-2">
                                    <span className="font-semibold">Best Match:</span>{' '}
                                    <span className="text-green-400">{result.best_category}</span>
                                </p>
                                <p className="text-gray-300">
                                    <span className="font-semibold">Confidence:</span>{' '}
                                    <span className="text-blue-400">{(result.score * 100).toFixed(2)}%</span>
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-300 font-semibold mb-2">All Categories:</p>
                                <div className="space-y-2">
                                    {result.all_results.labels.map((label, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="w-32 text-gray-300 text-sm">{label}</div>
                                            <div className="flex-1 bg-gray-700 rounded-full h-2">
                                                <div
                                                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                                                    style={{ width: `${result.all_results.scores[index] * 100}%` }}
                                                ></div>
                                            </div>
                                            <div className="w-16 text-gray-400 text-sm text-right">
                                                {(result.all_results.scores[index] * 100).toFixed(1)}%
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            </div>
                            <div className="flex justify-end">
    <button
        type="button"
        onClick={() => handle_classify({ text: text,  
         result: {
            best_category: result?.best_category,
            score: result?.score
        }
                                    })}
        disabled={summaryLoading}
        className="mt-2 px-7 h-11 rounded-full bg-[#301469] text-white 
                 hover:opacity-90 hover:scale-105 
                 transition duration-300 ease-in-out 
                 active:scale-100 hover:cursor-pointer
                 disabled:opacity-50 disabled:cursor-not-allowed"
    >
        {summaryLoading ? "Generating..." : "Generate Summary"}
    </button>
</div>
                        </div>
                        
                    )}


{/* Display the summary */}
{summaryError && (
    <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        {summaryError}
    </div>
)}

{summary && (
    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h3 className="font-semibold text-[#191130] text-lg mb-2">Summary</h3>
        <p className="text-gray-700 mb-3">{summary.summary}</p>
        <div className="flex gap-4 text-sm">
            <span className="font-medium text-gray-500">Category: 
                <span className="ml-1 text-[#301469]">{summary.category}</span>
            </span>
            <span className="font-medium text-gray-500">Tone: 
                <span className="ml-1 text-[#301469]">{summary.tone}</span>
            </span>
            <span className="font-medium text-gray-500">Score: 
                <span className="ml-1 text-[#301469]">{summary.score.toFixed(2)}%</span>
            </span>
        </div>
    </div>
)}

                    {/* Error Section */}
                    {error && (
                        <div className="mt-6 p-4 bg-red-900/20 border border-red-700 rounded-lg">
                            <p className="text-red-400">{error}</p>
                        </div>
                    )}
                </div>

                {/* RIGHT COLUMN: Categories */}
                <div className="part2 w-full md:w-1/2">
                    <h1 className="text-xl font-semibold mb-4 text-gray-100">Categories</h1>

            <div className="">
                <label className="block mb-2.5 text-sm font-medium text-heading">Add category name </label>
                    <input type="text" name="name" value={name} 
                    className="bg-neutral-secondary-medium border border-default-medium border-gray-200 rounded-md text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                    onChange={(e) => setName(e.target.value)}/>
            </div> 
        <div className='flex justify-end'>
            <button  onClick={() => add_category({ name })}
                className="mt-2 px-7 h-11 rounded-full bg-[#301469] text-white 
                hover:opacity-90 hover:scale-105 
                transition duration-300 ease-in-out 
                active:scale-100 hover:cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed" >Add</button>
        </div>
                    <div className="flex flex-wrap gap-4">

                        {categories && categories?.map((category) => (
                            <label
                                key={category?.id}
                                className="flex gap-3 items-center cursor-pointer bg-gradient-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-lg p-3 hover:scale-105 transition-transform duration-300"
                            >
                                <input
                                    type="checkbox"
                                    value={category.name}
                                    checked={selectedCategories.includes(category.name)}
                                    onChange={handleCategoryChange}
                                    className="peer w-5 h-5 rounded border-gray-400 checked:border-blue-600 checked:bg-blue-600"
                                />
                                <span className="text-gray-200">{category?.name}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page