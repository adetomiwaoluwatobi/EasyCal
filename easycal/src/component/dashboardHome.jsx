
function dashboardHome(){
    return(
        <>
            <div className='flex flex-col justify-center items-center'>
                <h2>Update your Salary</h2>
                <p className="">To get accurate analysis from your Loan calculator, you need to make sure your details are correct and up to date</p>
                <input type="number" min="1000" className='border rounded-full py-1 px-3 mb-3' placeholder='Amount' />
                
                <button className='border rounded-full bg-blue-900 text-white px-5 py-2'>Proceed</button>
            </div>
        </>
    )
}

//  Suggested code may be subject to a license. Learn more: ~LicenseLog:292704832.
export default dashboardHome;