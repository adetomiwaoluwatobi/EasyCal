import landingImage from '../assets/landingPageAsset1.png'
function welcomePage(){
    return(
        <>
            <div className="p-2">
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
                    <div>
                        <button>Login</button>
                        <button class="px-2 py-1 border rounded bg-secondary mx-2">Get Started</button>
                    </div>
                </header>
                <main className="mt-5">
                    <div className="flex flex-row">
                        <div>
                            <h3>Unlock Smarter Loan Decisions</h3>
                            <p>Get clear insights on your payments, costs, and financial health. Start making smarter loan decisions today.</p>
                            <button className="bg-blue-950 text-white border rounded-full p-2"> Get Started <i className="bi bi-arrow-"></i></button>
                        </div>
                        <div>
                            <img src={landingImage} alt="CalculatorPNG"/>
                            </div>
                    </div>
                </main>
                <footer></footer>
            </div>
        </>
    )
}

export default welcomePage