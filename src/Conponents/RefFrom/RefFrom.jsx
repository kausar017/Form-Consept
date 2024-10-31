import { useEffect, useRef } from "react";


const RefFrom = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    

    const handalSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        
    }

    useEffect(()=> {
        nameRef.current.focus()
    },[])


    return (
        <div>
            <form onSubmit={handalSubmit} className='flex flex-col items-center justify-center'>
                <div className="space-y-3">
                    <input ref={nameRef} type="text" placeholder="Type here" name='name' className="input input-bordered w-full max-w-xs" />
                    <input ref={emailRef} type="email" defaultValue={'mdkousarmia71@gmail.com'} placeholder="Type here" name='email' className="input input-bordered w-full max-w-xs" />
                    <br />
                    <input ref={passwordRef} type="password" placeholder="Type here" name='phone' className="input input-bordered w-full max-w-xs" />
                </div>
                <button type='submit' className='btn btn-outline btn-success'>submit</button>
            </form>
        </div>
    );
};

export default RefFrom;