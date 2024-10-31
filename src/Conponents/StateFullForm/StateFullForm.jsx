import { useState } from "react";

const StateFullForm = () => {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setpassword] = useState(null)
    const [error, setError] = useState('')


    const handalSubmit = e => {
        e.preventDefault();
        if(password.length < 6) {
           setError('plise set be 6 Carectar password')
        }else{
            setError('')
            console.log(name, email, password);
        }


    }

    const handalNameChang = e => {
        console.log(e.target.value);
        setName(e.target.value)
    }

    const handalEmailChang = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handalPasswordChang = e => {
        console.log(e.target.value);
        setpassword(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handalSubmit} className='flex flex-col items-center justify-center gap-2'>
                <div>
                    <input onChange={handalNameChang} type="text" placeholder="Type here" name='name' className="input input-bordered w-full max-w-xs" />
                    <br />
                    <input onChange={handalEmailChang} type="email" placeholder="Type here" name='email' className="input input-bordered w-full max-w-xs" />
                    <br />
                    <input onChange={handalPasswordChang} type="password" placeholder="Type here" name='password' className="input input-bordered w-full max-w-xs" required/>
                    {
                        error && <p className="text-red-600">{error}</p>
                    }
                </div>
                <button type='submit' className='btn btn-outline btn-success'>submit</button>
            </form>
        </div>
    );
};

export default StateFullForm;