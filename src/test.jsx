
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";

function Home()
{
    return <h1>Home page</h1>
}

function AboutUs()
{
    return <h1>About us page</h1>
}

function ContactUs()
{
    return <h1>Contact us page</h1>
}

const Headerpage= () =>
{
    return (
        <>
        <BrowserRouter>
        <Link to="/">Home</Link>|
        <Link to="/aboutus">About us</Link>|
        <Link to="contactus">Contact us</Link>

        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/aboutus" element={<AboutUs/>}></Route>
            <Route path="/contactus" element={<ContactUs/>}></Route>
        </Routes>


        
        </BrowserRouter>
        
        
        </>
    );
}

export default Headerpage;