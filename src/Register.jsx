 

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        const conformPassword= e.target.conformPassword.value
        console.log(name,photo,email,password,conformPassword);
    }
    return (
        <div className="">
            <form onSubmit={handleRegister}>
                <div  className="  w-[40%] mx-auto min-[500px] border-2 border-green-500 p-2 rounded-lg">
                    <div className="">
                    <p>Name </p>
                    <input name="name" type="text" placeholder="Type here" className="input input-bordered  w-full " />
                   
                    </div>
                    <div className="">
                    <p>Email </p>
                    <input name="email" type="text" placeholder="Type here" className="input input-bordered  w-full " />
                   
                    </div>
                   <div className="">
                   <p>Photo </p>
                    <input name="photo" type="text" placeholder="Type here" className="input input-bordered  w-full " />
                   
                   </div>
                   <div className="">
                   <p>Password </p>
                    <input name="password" type="text" placeholder="Type here" className="input input-bordered  w-full " />
                    
                   </div>
                  <div className="">
                  <p>Confrom Password</p>
                    <input name="conformPassword" type="text" placeholder="Type here" className="input input-bordered  w-full " />
                    
                  </div>
                  <button type="submit" className="btn bg-green-500 mt-1 w-full text-white" >submit</button>
                    </div>
            </form>
        </div>
    );
};

export default Register;