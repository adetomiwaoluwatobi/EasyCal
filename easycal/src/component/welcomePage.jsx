import landingImage from '../assets/landingPageAsset1.png'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Outlet, Link } from "react-router-dom";


function welcomePage(){
    return(
        <>
            <div className="">
                <header className="headerStyle p-3">
                    <div class="">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="6" rx="3" fill="#B4BDD8"/>
                            <rect width="6" height="6" rx="3" fill="#1E3A8A"/>
                            <rect y="9" width="21" height="21" rx="3" fill="#1E3A8A"/>
                            <rect x="24" y="9" width="6" height="21" rx="3" fill="#B4BDD8"/>
                        </svg>
                        <span class="">Easycal</span>
                    </div>
                    <div className="">
                        <div className="dns">
                            {/* <Link to={"/dashboard"}>Dashboard</Link> */}
                            <Link className='text-blue-900' to={"/login"}>Login</Link>
                            <Link to={"/Signup"} class="px-2 py-1 border rounded bg-secondary mx-2">Get Started</Link>
                        </div>
                        <div className="sh">
                            <Menu>
                                <MenuButton className='text-blue-900'><i class="bi bi-list"></i></MenuButton>
                                <MenuItems anchor="bottom" className="pe-2 bg-primary-400">
                                    <MenuItem>
                                    <a className="block data-[focus]:bg-blue-100" href="/settings">
                                        Login
                                    </a>
                                    </MenuItem>
                                    <MenuItem>
                                    <a className="block data-[focus]:bg-blue-100" href="/support">
                                        Signup
                                    </a>
                                    </MenuItem>
                                    <MenuItem>
                                    <a className="block data-[focus]:bg-blue-100" href="/license">
                                        About us
                                    </a>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </header>
                <main className="main-bg">
                    <div className='pt-5 p-2'>
                        <div className="md:flex justify-content-between">
                            <div>
                                <h1 className="">Unlock Smarter Loan <span className='text-blue-900'>Decisions</span></h1>
                                <p>Get clear insights on your payments, costs, and financial health. Start making smarter loan decisions today.</p>
                                <button className="bg-blue-950 text-white border rounded-full p-2 mt-5"> Get Started <i class="bi bi-arrow-right pl-1"></i></button>
                            </div>
                            <div className='img-container'>
                                <img src={landingImage} alt="CalculatorPNG"/>
                                </div>
                        </div>
                        <div className='my-4'>
                            <div className='text-center '>
                                <h3 className='text-blue-400 mb-1 fsh3'>Money Matters: <span className='text-blue-900'>Making Informed Loan Choices</span></h3>
                                <p>Explore the key factors that influence your loan journey. From interest rates to repayment terms<br/>
                                    so you can make informed decisions and take control of your financial future.</p>
                            </div>
                        </div>
                        
                    </div>
                   
                </main>
                <footer></footer>
            </div>
        </>
    )
}

export default welcomePage