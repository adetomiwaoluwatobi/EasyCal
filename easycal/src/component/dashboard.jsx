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
                    <div>
                        <button></button>
                        <button><i class="bi bi-gear"></i></button>
                        <button class="px-2 py-1 border rounded bg-secondary mx-2">Get Started</button>
                    </div>
            </header>
        </div>
        </>
    )
}

export default dashboard;