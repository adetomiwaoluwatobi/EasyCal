import landingImage from '../assets/landingPageAsset1.png'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Outlet, Link } from "react-router-dom";
import landingAsset from '../assets/landingPagecard1.png'


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
                        <div className="px-2 md:flex justify-content-between">
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
                        <div className='p-2 md:flex'>
                            <div className="card-design md:w-1/3 p-2 bg-white m-3">
                                <img src={landingAsset} alt="LandingAsset 1" />
                                <h4 className='fsh4 mt-2'>Principal</h4>
                                <p>The principal is the original amount of money you borrow with a loan. For example, if you take out a loan for $10,000, that $10,000 is your principal. As you repay the loan, part of your payments will go toward reducing this amount.</p>
                            </div>
                            <div className="card-design md:w-1/3 p-2 bg-white m-3">
                                <img src={landingAsset} alt="LandingAsset 1" />
                                <h4 className='fsh4 mt-2'>Principal</h4>
                                <p>The principal is the original amount of money you borrow with a loan. For example, if you take out a loan for $10,000, that $10,000 is your principal. As you repay the loan, part of your payments will go toward reducing this amount.</p>
                            </div>
                            <div className="card-design md:w-1/3 p-2 bg-white m-3">
                                <img src={landingAsset} alt="LandingAsset 1" />
                                <h4 className='fsh4 mt-2'>Principal</h4>
                                <p>The principal is the original amount of money you borrow with a loan. For example, if you take out a loan for $10,000, that $10,000 is your principal. As you repay the loan, part of your payments will go toward reducing this amount.</p>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className='bg-slate-950 text-white py-5'>
                    <div>
                        <h2 className='text-center pt-5'>Take Control of Your Financial Future</h2>
                        <p className='text-center'>Empower yourself with the insights you need to make informed loan decisions.</p>
                        <div className='text-center mt-4'>
                            <button className='bg-white text-black py-1 px-2 rounded-full'>Get Started -\</button>
                        </div>
                    </div>
                    <div className='mt-6 px-3'>
                        <hr />
                        <div className='py-5 md:flex justify-around'>
                            {/* Logo */}
                            <div class="flex flex-col items-center mb-2 md:w-1/3">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="6" rx="3" fill="#B4BDD8"/>
                                    <rect width="6" height="6" rx="3" fill="#1E3A8A"/>
                                    <rect y="9" width="21" height="21" rx="3" fill="#1E3A8A"/>
                                    <rect x="24" y="9" width="6" height="21" rx="3" fill="#B4BDD8"/>
                                </svg>
                            <span class="">Easycal</span>
                            </div>
                            {/* Other Side of Logo */}
                            <div className='flex justify-center gap-2 md:w-2/3 flex justify-between'>
                                <div>
                                    <strong><a href="#">Shop</a></strong>
                                    <p><a href="#">Discover Personal</a></p>
                                    <p><a href="#">Transfer & Spend</a></p>
                                    <p><a href="#">Investment</a></p>
                                    <p><a href="#">Save</a></p>
                                </div>
                                <div>
                                    <strong><a href="#">Company</a></strong>
                                    <p><a href="#">Discover Business</a></p>
                                    <p><a href="#">Business Registration</a></p>
                                    <p><a href="#">Invoicing</a></p>
                                </div>
                                <div>
                                    <strong><a href="#">About Us</a></strong>
                                    <p><a href="#">Contact Us</a></p>
                                    <p><a href="#">Self Help</a></p>
                                    <p><a href="#">FAQs</a></p>
                                </div>
                                
                            </div>
                        </div>
                        <hr />
                    </div>
                </footer>
            </div>
        </>
    )
}

export default welcomePage