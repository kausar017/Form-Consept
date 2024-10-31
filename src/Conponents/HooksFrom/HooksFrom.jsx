import useInputState from "../../hooks/useInputState";


const HooksFrom = () => {

    const [name, handalNameChang]= useInputState('kausar')


    const handalSubmit = e => {
        e.preventDefault();

        console.log('from data:', name);
        
    }


    return (
        <div>
            <form onSubmit={handalSubmit} className='flex flex-col items-center justify-center gap-2'>
                <div>
                    <input value={name} onChange={handalNameChang} type="text" placeholder="Type here" name='name' className="input input-bordered w-full max-w-xs" />
                    <input type="email" placeholder="Type here" name='email' className="input input-bordered w-full max-w-xs" />
                    <br />
                    <input type="password" placeholder="Type here" name='phone' className="input input-bordered w-full max-w-xs" />
                </div>
                <button type='submit' className='btn btn-outline btn-success'>submit</button>
            </form>
        </div>
    );
};

export default HooksFrom;