

const ReUsableFrom = () => {

    const handalSubmit = e => {
        e.preventDefault()
    }

    // preventDefault
    return (
        <div className="text-center">
            <h1>Sing up</h1>
            <form onSubmit={handalSubmit} className='flex flex-col items-center justify-center'>
                <div className="space-y-5">
                    <input type="text" placeholder="Type here" name='name' className="input input-bordered w-full max-w-xs" />
                    <input type="email" placeholder="Type here" name='email' className="input input-bordered w-full max-w-xs" />
                    <br />
                    <input type="numbar" placeholder="Type here" name='phone' className="input input-bordered w-full max-w-xs" />
                </div>
                <button type='submit' className='btn btn-outline btn-success mt-2 w-full max-w-xs'>submit</button>
            </form>
        </div>
    );
};

export default ReUsableFrom;