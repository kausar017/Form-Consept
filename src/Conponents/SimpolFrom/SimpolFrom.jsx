
import PropTypes from 'prop-types';

const SimpolFrom = () => {

    const handalSubmit = e => {
        e.preventDefault();
        // console.log(e);
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        
    }


    return (
        <form onSubmit={handalSubmit} className='flex flex-col items-center justify-center gap-2'>
            <div>
                <input type="text" placeholder="Type here" name='name' className="input input-bordered w-full max-w-xs" /> 
                <input type="email" placeholder="Type here" name='email' className="input input-bordered w-full max-w-xs" />
                <br />
                <input type="numbar" placeholder="Type here" name='phone' className="input input-bordered w-full max-w-xs" />
            </div>
            <button type='submit' className='btn btn-outline btn-success'>submit</button>
        </form>
    );
};

SimpolFrom.propTypes = {

};

export default SimpolFrom;