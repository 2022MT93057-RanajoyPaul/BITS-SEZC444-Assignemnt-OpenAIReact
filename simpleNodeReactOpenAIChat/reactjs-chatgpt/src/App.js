import axios from "axios";
import { useState } from "react";
import './App.css';

function App() {

    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8080/chat", { prompt })
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };


    return (
        <>
        <div className="w-[720px] mx-auto py-24">
            <div className="w-full justify-center items-center px-8">
                <form id="userForm" className="w-full text-center" onSubmit={handleSubmit}>
                    <div className="md-6">
                            <label
                                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                                htmlFor="inline-full-name">
                            Hello BITS MTect Student ID : 2022MT93057-RanajoyPaul Please ask your query to Open AI Chat GPT :
                        </label>
                    </div>
                    <div className="py-4">
                        <input className="bg=gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  "
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)} />
                    </div>
                    <div className="">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:shadow-outline-none text-white font-bold py-2 px-4 rounded"
                                type="submit">
                                Submit
                        </button>
                    </div>
                </form>
                <div className="w-full items-center mt-4">
                        <p>{JSON.stringify(response)}</p>
                </div>
            </div>
        </div>

    </>
  )
}

export default App;
