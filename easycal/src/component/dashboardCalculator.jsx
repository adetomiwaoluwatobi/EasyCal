function dashboardCalculator(){
    return(
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="w-9/12 md:flex justify-between">
                    <div>
                        <small>Welcome</small>
                        <h2 style={{fontSize: '20px', fontWeight: 'bold'}}>Bamidele B</h2>
                    </div>
                    <div>Provide your monthly income: <input type="text" name="" id="" /></div>
                </div>
                <div className="w-9/12 mt-5">
                    <p className="text-slate-500">Calculators</p>
                    <div className="md:flex justify-between">
                        <button className="px-5 bg-slate-950 text-white py-1 border rounded-full">Fees per month Calculator</button>
                        <button className="px-5 bg-slate-950 text-white py-1 border rounded-full">Outstanding Balance Calculator</button>
                        <button className="px-5 bg-slate-950 text-white py-1 border rounded-full">Early Repayment Calculator</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default dashboardCalculator;