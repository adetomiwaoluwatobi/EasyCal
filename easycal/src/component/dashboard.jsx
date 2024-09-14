import { Link, Outlet } from 'react-router-dom'
import profile from '../assets/profile.png'
import DashboardHome from './dashboardHome'
import DashboardProfile from './dashboardProfile'
import DashboardCalculator from './dashboardCalculator'
import DashboardInitial from './dashboardInitial'

function dashboard(){
    return(
        <>
        <div>
            <header className="headerStyle p-3">
                    <div class="px-3">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="6" rx="3" fill="#B4BDD8"/>
                            <rect width="6" height="6" rx="3" fill="#1E3A8A"/>
                            <rect y="9" width="21" height="21" rx="3" fill="#1E3A8A"/>
                            <rect x="24" y="9" width="6" height="21" rx="3" fill="#B4BDD8"/>
                        </svg>
                        <span class="">Easycal</span>
                    </div>
                    <div className='flex gap-2'>
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.25 12V19.5C20.25 19.8978 20.092 20.2794 19.8107 20.5607C19.5294 20.842 19.1478 21 18.75 21H4.5C4.10218 21 3.72064 20.842 3.43934 20.5607C3.15804 20.2794 3 19.8978 3 19.5V5.25C3 4.85218 3.15804 4.47064 3.43934 4.18934C3.72064 3.90804 4.10218 3.75 4.5 3.75H12C12.1989 3.75 12.3897 3.82902 12.5303 3.96967C12.671 4.11032 12.75 4.30109 12.75 4.5C12.75 4.69891 12.671 4.88968 12.5303 5.03033C12.3897 5.17098 12.1989 5.25 12 5.25H4.5V19.5H18.75V12C18.75 11.8011 18.829 11.6103 18.9697 11.4697C19.1103 11.329 19.3011 11.25 19.5 11.25C19.6989 11.25 19.8897 11.329 20.0303 11.4697C20.171 11.6103 20.25 11.8011 20.25 12ZM21.75 5.625C21.75 6.29251 21.5521 6.94503 21.1812 7.50005C20.8104 8.05507 20.2833 8.48765 19.6666 8.74309C19.0499 8.99854 18.3713 9.06538 17.7166 8.93515C17.0619 8.80493 16.4605 8.48349 15.9885 8.01149C15.5165 7.53948 15.1951 6.93812 15.0648 6.28343C14.9346 5.62874 15.0015 4.95014 15.2569 4.33344C15.5124 3.71674 15.9449 3.18964 16.5 2.81879C17.055 2.44794 17.7075 2.25 18.375 2.25C19.2701 2.25 20.1285 2.60558 20.7615 3.23851C21.3944 3.87145 21.75 4.72989 21.75 5.625ZM20.25 5.625C20.25 5.25416 20.14 4.89165 19.934 4.58331C19.728 4.27496 19.4351 4.03464 19.0925 3.89273C18.7499 3.75081 18.3729 3.71368 18.0092 3.78603C17.6455 3.85837 17.3114 4.03695 17.0492 4.29917C16.787 4.5614 16.6084 4.89549 16.536 5.25921C16.4637 5.62292 16.5008 5.99992 16.6427 6.34253C16.7846 6.68514 17.025 6.97798 17.3333 7.18401C17.6416 7.39003 18.0042 7.5 18.375 7.5C18.8723 7.5 19.3492 7.30246 19.7008 6.95083C20.0525 6.59919 20.25 6.12228 20.25 5.625Z" fill="#7F8489"/>
                            </svg>
                        </button>
                        <button><i class="bi bi-gear"></i></button>
                        <img src={profile} alt="profile"width={50} height={30} />
                    </div>
            </header>
            <main className='flex flex-row'>
                <nav className='basis-1/6 bg-easy-blue px-1 py-5 nav flex flex-col gap-5 nav md:h-screen'>
                    <Link to="Home" className='nav-link active'><i className="bi bi-layout-text-sidebar-reverse me-3"></i>  Welcome</Link>
                    <Link to="profile"><i className="bi bi-x-diamond me-3"></i>Profile</Link>
                    {/* <a href="#"><i className="bi bi-plus-slash-minus"></i></a> */}
                    <Link to="Calculator"><i className="bi bi-calculator-fill me-3"></i> Calculator</Link>
                    <Link to="Settings"><i className="bi bi-info-circle me-3"></i> Settings</Link>
                </nav>
                <div className='basis-5/6 p-5 tab-cotent bg-slate-50'>
                    <div>
                        {/* <div className='flex flex-col justify-center items-center'>
                            <h2>Update your Salary</h2>
                            <p>To get accurate analysis from your Loan calculator, you need to make sure your details are correct and up to date</p>
                            <input type="number" min="1000" className='border rounded-full py-1 px-3 mb-3' placeholder='Amount' />
                    
                            <button className='border rounded-full bg-blue-900 text-white px-5 py-2'>Proceed</button>
                        </div> */}
                        {/* <DashboardHome></DashboardHome> */}
                        {/* <DashboardProfile></DashboardProfile> */}
                        {/* <DashboardCalculator></DashboardCalculator> */}
                        {/* <DashboardInitial></DashboardInitial> */}
                        <Outlet default=""></Outlet>
                    </div>
                    
                </div>
            </main>
        </div>
        </>
    )
}

export default dashboard;