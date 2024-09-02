import profile from '../assets/profile.png'
function dashboardProfile(){
    return(
        <>
            <div className="flex justify-center items-center flex-col">
                {/* <div className='w-full flex flex-col'> */}
                    <div className="card bg-white p-3 w-1/2 mb-4">
                        <h3 className='py-1'>Profile details</h3>
                        <hr />
                        <br />
                        <div className='flex jusify-start gap-2'>
                            <img src={profile} alt=""  width={60} height={40}/>
                            <div>
                                <small>Welcome</small>
                                <p><strong>Bamidele B.</strong></p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='md:flex justify-between px-2'>
                                <input type="text" name="" id="" className='border rounded py-1 px-3 mb-3' placeholder='First Name'/>
                                <input type="text" name="" id="" className='border rounded py-1 px-3 mb-3' placeholder='Last Name'/>
                            </div>
                            <div className='md:flex justify-between px-2'>
                                <input type="email" name="" id="" className='border rounded py-1 px-3 mb-3' placeholder='Email'/>
                                <input type="text" name="" id="" className='border rounded py-1 px-3 mb-3' placeholder='Phone Number'/>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2'> 
                        <button className='border rounded-full bg-blue-900 text-white px-3 py-2 w-1/2'>Save Changes</button>
                    </div>
                {/* </div> */}
                
            </div>
        </>
    )
}

export default dashboardProfile;