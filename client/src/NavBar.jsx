function NavBar(){
    return(
        <div className="h-full float-left font-mono bg-gray-700 w-52 flex-row ">
            <nav>
                <ul className="list-none m-0 p-0">
                    <li className="display-block"><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;