

const About = () => {
    return (

        <div className='md:mx-20 my-28 grid md:grid-cols-2 bg-gray-200 rounded'>
            <div className='p-2'>
                <img className='img-fluid rounded' src="https://cdn.trendhunterstatic.com/thumbs/341/toy-store.jpeg" alt="" />
            </div>
            <div className="section-title flex flex-col justify-center">
                <div className=' px-8 py-12'>
                    <div className='flex mx-auto space-x-3'>
                        <div className=' w-20 md:w-24 h-1 bg-gray-300 inline-flex mt-auto mb-5 rounded-e-md rounded-s-md'></div>
                        <h2 className='text-4xl font-lato font-bold'>About Us </h2>
                        <div className='w-20 md:w-24 h-1 bg-gray-300 inline-flex mt-auto mb-5 rounded-e-md rounded-s-md'></div>
                    </div>
                    <p className='my-5 font-popins text-slate-800'>
                        We use all the information we collect from you to receive orders, send you emails and provide the most efficient and fastest Internet experience.This allows us to offer you special offers and discounts.We will not only provide your information to third parties unless you have your consent.Information will be disclosed to comply with any laws, regulations, applications of government laws or laws or judicial procedures.</p>
                </div>
            </div>
        </div>

    );
};

export default About;