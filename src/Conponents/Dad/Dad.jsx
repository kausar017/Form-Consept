import Brather from "../Brather/Brather";
import Myself from "../Myself/Myself";
import Sister from "../Sitster/Sister";

const Dad = () => {
    return (
        <div>
                <h1>dad</h1>
            <section className="flex">
                <Myself></Myself>
                <Brather></Brather>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;