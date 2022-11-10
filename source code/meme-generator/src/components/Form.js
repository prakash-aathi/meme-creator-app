import { useState } from "react";
import MemeData from "../MemeData";


const Form = () => {
    const [data, Setdata] = useState({ top: "Use this super web app", bottom: "create more memes" });
    const [url, SetUrl] = useState("https://i.imgflip.com/1h7in3.jpg")
    const [color,SetColor] = useState(false)

    const handleInput = (event) => {
        Setdata(prev => {
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }

    const handleSubmit = (event) => {
        const memes = MemeData.data.memes
        const randomNumber = Math.floor(Math.random() * memes.length)
        const link = memes[randomNumber].url
        SetUrl(link)
    }

    const handleColor = () => {
        SetColor(!color)
    }

    return (
        
        <div class="px-4">
            <div class="flex pt-8 justify-center ">
                <input onChange={handleInput} type="text" name="top" class="w-3/4 text-center rounded border-2 mr-4 p-2" placeholder="Top text" ></input>
                <input onChange={handleInput} type="text" name="bottom" class="w-3/4 text-center rounded border-2 p-2" placeholder="Bottom text" ></input>
            </div>
            <h3 class="text-center py-2 text-gray-500 font-semibold">Change Text color</h3>
            <div class="flex pb-4 justify-center  ">
                <button onClick={handleColor} class="w-full hover:bg-gray-700 text-center hover: rounded bg-gray-500 text-white mr-4 p-3"> { color ? "White" : "Black" }</button>
            </div>
            <button type="button" onClick={handleSubmit} class="w-full py-3 text-white rounded bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500 hover:bg-gradient-to-r hover:from-purple-900 hover:via-purple-700 hover:to-purple-600">Change New meme Image 😎</button>
            <div class="relative ">
                <img src={url} alt="meme" class="  relative my-5 mx-auto"></img>
                {!color && <div>
                    <h2 class="text-center left-[5%] right-[5%] text-white  break-all font-serif font-extrabold text-xl lg:text-4xl absolute top-[5%] ">{data.top}</h2>
                    <h2 class="text-center left-[5%] right-[5%] text-white  break-all font-serif font-extrabold text-xl lg:text-4xl absolute bottom-[5%] ">{data.bottom}</h2>
                </div>}
                {color && <div>
                    <h2 class="text-center left-[5%] right-[5%] text-black  break-all font-serif font-extrabold text-xl lg:text-4xl absolute top-[5%] ">{data.top}</h2>
                    <h2 class="text-center left-[5%] right-[5%] text-black  break-all font-serif font-extrabold text-xl lg:text-4xl absolute bottom-[5%] ">{data.bottom}</h2>
                </div>
                }
            </div>
        </div>
    )
}

export default Form;