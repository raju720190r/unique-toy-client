import CountUp from 'react-countup';

const Counter = () => {
    return (

        <div className='lg:md:mx-20 mt-20'>
            <h2 className='text-center font-bold text-3xl my-6'>Happy Customer</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-5">
                <div className="bg-pink-100 hover:bg-sky-100 text-center py-12  shadow-xl"
                >                       <h2 className=" text-3xl"><CountUp
                    start={0}
                    end={2605}
                    duration={2.75}

                /></h2>
                    <p>Happy Clients</p>
                </div>
                <div className="bg-pink-100 hover:bg-sky-100 text-center py-12  shadow-xl">
                    <div>
                        <h2 className=" text-3xl"><CountUp
                            start={0}
                            end={100}
                            duration={2.75}

                        />%</h2>
                    </div>
                    <p>Customer Review</p>
                </div>
                <div className="bg-pink-100 hover:bg-sky-100 text-center py-12  shadow-xl"
                >                       <h2 className=" text-3xl"><CountUp
                    start={0}
                    end={850}
                    duration={2.75}

                />+</h2>
                    <p>Award</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;