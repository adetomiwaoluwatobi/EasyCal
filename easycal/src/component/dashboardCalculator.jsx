import '../chart.css'
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
                        <button className="px-5 text-slate-950 bg-white py-1 border rounded-full">Fees per month Calculator</button>
                        <button className="px-5 text-slate-950 bg-white py-1 border rounded-full">Outstanding Balance Calculator</button>
                        <button className="px-5 text-slate-950 bg-white py-1 border rounded-full">Early Repayment Calculator</button>
                    </div>
                    <div className="md:flex justify-between gap-4 mt-5">
                        <div className="w-1/4">
                            <div>
                                <input type="number" name="" id="" className="py-2 px-3 border rounded-lg mb-3" placeholder="Principal"/>
                            </div>
                            <div>
                                <input type="number" name="" id="" className="py-2 px-3 border rounded-lg mb-3" placeholder="Annunal Rate"/>
                            </div>
                            <div>
                                <input type="number" name="" id="" className="py-2 px-3 border rounded-lg mb-3" placeholder="Number Of Payment"/>
                            </div>
                            <div className="mb-3">
                                <input type="number" name="" id="" className="py-2 px-3 border rounded-lg" placeholder="Fixed Fees"/>
                                <small>Origination Fee, Application Fee</small>
                            </div>
                            <div>
                                <button className="py-2 px-3 border rounded-lg bg-blue-950 text-white w-full">Calculate</button>                            
                            </div>
                        </div>
                        <div className="w-3/4 bg-white body">
                            {/* Semi-circle donut chart */}
                             <div className="multi-graph margin">
                            Indicator
                            <div className="graph multistyleJs" data-name="jQuery">
                            </div>
                            <div class="graph multistyleAug" data-name="Angular">
                            </div>{/*
                            <div class="graph" data-name="React" 
                                style="--percentage : 30; --fill: #FEDA3E ;">
                            </div>
                            <div class="graph" data-name="Vue" 
                                style="--percentage : 10; --fill: #FEDA5E ;">
                            </div>*/}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default dashboardCalculator;