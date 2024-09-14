function dashboardInitial(){
    function getValues(){

    }
    return (
        <>
        <div className="progress md:flex justify-between gap-2 my-5">
            <div className="w-1/2 md:flex justify-end">
             <button className="w-1/2 bg-slate-900 rounded-full p-0 h-2"></button>
            </div>
            <div className="w-1/2 md:flex justify-start">
             <button className="w-1/2 bg-white rounded-full p-0 h-2"></button>
            </div>
            
        </div>
            <div className="md:flex justify-between gap-3">
                <div className="bg-white p-3 md:w-1/2 mb-4">
                    <h3 className="fsh4 text-center mb-4">Update your Salary</h3>
                    <p className="text-center mb-7">To get accurate analysis from your Loan calculator, you need to make sure your details are correct and up to date</p>
                    <input type="text" ref={getValues} name="" id="" placeholder='Amount' className="w-full border-slate-900 p-2 rounded-full"/>
                    <br />
                    <small className="my-3">Input your salary for current month and select add to include previous months for an accurate DTI score</small>
                    <div className="mt-3 md:flex gap-2">
                        <div className="md:w-1/4 flex justify-center">
                        <button className="btn btn-primary text-slate-950 py-2 px-3 bg-slate-200 rounded-full"><i class="bi bi-plus-circle"></i></button>
                        </div>
                        <div className="md:w-2/4 flex align-center">                  
                            <button className="text-white bg-blue-900 px-2 w-full rounded-full">Next</button>
                        </div>
                    </div>
                    
                </div>
                <div className="bg-white p-3 md:w-1/2 mb-4">
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default dashboardInitial;