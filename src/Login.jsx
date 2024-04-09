 

const Login = () => {
    const handleLogin = e =>{
        e.preventDefault()
        
        const email = e.target.email.value
        const password = e.target.password.value
        console.log( email,password);
    }
    return (
        <div className="">
        <form onSubmit={handleLogin}>
            <div  className="  w-[40%] mx-auto min-[500px] border-2 border-green-500 p-2 rounded-lg">
                
                <div className="">
                <p>Email </p>
                <input name="email" type="text" placeholder="Type here" className="input input-bordered  w-full " />
               
                </div>
               
               <div className="">
               <p>Password </p>
                <input name="password" type="text" placeholder="Type here" className="input input-bordered  w-full " />
                
               </div>
              
              <button type="submit" className="btn bg-green-500 mt-1 w-full text-white" >submit</button>
                </div>
        </form>
    </div>
    );
};

export default Login;