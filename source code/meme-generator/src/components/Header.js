import icon from "../images/Troll Face.png"
const Header = () => {
    return (
        <div class="flex text-white justify-between  items-center py-4 px-2 md:px-10 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500">
            <div class="flex">
                <img class="w-10" alt="icon" src=
                    {icon}></img>
                <h3 class="text-xl pl-3">Meme Generator</h3>
            </div>
            <div>
                <p>Made with React</p>
            </div>
        </div>
    )
}

export default Header;