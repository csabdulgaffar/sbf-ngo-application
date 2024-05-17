import { useEffect } from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useRef } from "react";

import video2 from "../assets/video.mp4"


const ImageCard = ({ imageUrl, label }) => {
    return (
        <div className="relative">
            <div
                style={{ backgroundImage: `url(${imageUrl})` }}
                className="w-full h-48 sm:h-64 md:h-80 bg-cover bg-center bg-no-repeat transition-all cursor-pointer duration-300 hover:scale-105"
            >
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    {label}
                </div>
            </div>
        </div>
    );
};



function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const testimonialsRef = useRef(null);

    const images = [video2];
    useEffect(() => {

        setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    })

    const scrollToTestimonials = () => {
        testimonialsRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <>
            <div className="flex items-center justify-center h-5/6">
                <div className="relative w-full h-full">
                    <video
                        className="object-cover w-full h-5/6"
                        autoPlay
                        loop
                        muted
                    >
                        <source src={images[currentImageIndex]} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex  flex-col  msm:gap-2 gap-10 items-center justify-center items-center">

                        <div className="text-6xl font-bold text-white animate-textGlowPink transition-all duration-300  msm:text-sm hover:scale-105">Shaheed Bhagat Foundation </div>
                        <div className="text-6xl font-bold text-white animate-textGlowPink transition-all duration-300  msm:text-sm hover:scale-105">Changing Lives. One Mission.</div>
                        <div>
                            <a
                                className="text-6xl msm:text-2xl  font-bold text-white animate-textGlowPink cursor-pointer "
                                onClick={scrollToTestimonials}
                            >
                                <FaChevronDown />
                            </a>

                            {/* Content */}
                            <div ref={testimonialsRef} className="mt-10">
                                {/* Your testimonials content goes here */}
                            </div>
                        </div>


                    </div>


                </div>
            </div>




            {/* <div
                className="bg-cover bg-center bg-no-repeat min-h-80vh "
                style={{ backgroundImage: `url(${images[currentImageIndex]})`, transition: 'background-image 0.5s ease-in-out' }}

            >
                <div className="px-10">
                    <div className="flex flex-col text-8xl font-serif text-pink-500 pt-20">
                        <div className=" animate-textGlowPink " >Quality</div>
                        <div className=" animate-textGlowPink" >Economy</div>
                        <div className="animate-textGlowPink" >Performance</div>
                    </div>
                    <div className="flex flex-col py-5 px-3">
                        <div className="font-serif text-3xl text-white font-sans font-bold py-3 animate-attractText">Get a Callback Now! </div>
                        <div>
                            <input placeholder="Enter Your Phone No." className="bg-gray-100 focus:bg-pink-100 px-3 py-1" type="text" /> <button className="bg-gray-900 px-3 py-1 radius rounded-md text-white">Submit</button>
                        </div>
                    </div>

                </div>
            </div> */}



            <div id="specialities" className="py-6 px-5" >

                <div className="specialities">
                    <div className="font-serif text-3xl p-2 bg-gray-900 inline text-white">Our Mission</div>
                </div>
                {/* <div className="grid grid-cols-3 mt-5">
                    <div>
                        <img className="w-96" src="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Urology.jpg" />
                        <h6>Urology Division</h6>
                    </div>

                    <div>
                        <img className="w-96" src="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Laparoscopy.jpg" />
                        <h6>Laparoscopy Division</h6>


                    </div>


                    <div>
                        <img className="w-96" src="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Gynecology.jpg" />
                        <h6>Gynecology Division</h6>


                    </div>

                    <div>
                        <img className="w-96" src="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Nephrology.jpg" />
                        <h6>Nephrology Division</h6>

                    </div>

                    <div>
                        <img className="w-96" src="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Cardiology.jpg" />
                        <h6>Cardiology Division</h6>


                    </div>
                    <div>
                        <img className="w-96" src="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Gastrology.jpg" />
                        <h6>Gastrology Division</h6>

                    </div>

                </div> */}
                <div className="grid grid-cols-3 mt-5  msm:grid-cols-1 px-20 gap-10">
                    <ImageCard imageUrl="https://cdn.zeebiz.com/sites/default/files/2023/10/06/263851-ngo.jpg" label="Health" />
                    <ImageCard imageUrl="https://cdn.downtoearth.org.in/library/large/2022-02-25/0.25794500_1645773147_istock-870402320.jpg" label="Education   " />
                    <ImageCard imageUrl="https://drop.ndtv.com/albums/BUSINESS/ngo-education/pratham.jpg" label="Awareness" />
                    <ImageCard imageUrl="https://cdn.zeebiz.com/sites/default/files/2023/10/06/263851-ngo.jpg" label="Education" />
                    <ImageCard imageUrl="https://cdn.downtoearth.org.in/library/large/2022-02-25/0.25794500_1645773147_istock-870402320.jpg" label="Health  " />
                    <ImageCard imageUrl="https://drop.ndtv.com/albums/BUSINESS/ngo-education/pratham.jpg" label="Health" />



                </div>

            </div>
            <div className="px-5 pt-2" id="testimonials">
                <div className="grid grid-cols-3 gap-2 py-1 msm:grid-cols-1  text-white ">
                    <div className="flex border-2 border-solid border-white flex-col gap-2 bg-gray-900 p-8 bor">
                        <div className="font-serif text-3xl ">What people say about Us</div>
                        <div >
                            <div>"The professionalism and clear communication made the entire process smooth and efficient" </div>
                            <div> - Manoj Kalra</div>
                            <div>"The professionalism and clear communication made the entire process smooth and efficient" </div>
                            <div> - Manoj Kalra</div>
                        </div>
                        <div >
                            <div>"The professionalism and clear communication made the entire process smooth and efficient" </div>
                            <div> - Manoj Kalra</div>
                            <div>"The professionalism and clear communication made the entire process smooth and efficient" </div>
                            <div> - Manoj Kalra</div>
                        </div>
                        <button className="bg-gray-900 p-2 text-white border border-solid border-white transition-all duration-300 hover:scale-105">Read More...</button>
                    </div>
                    <div className="flex border-2 border-solid border-white flex-col gap-2 bg-gray-900 p-8 bor">
                        <div className="font-serif text-3xl ">Our Work Areas</div>
                        <div >
                            <div className="flex flex-col gap-1">
                                <div>Delhi Cant Slum Area </div>
                                <div>Delhi Cant Slum Area </div>
                                <div>Delhi Cant Slum Area </div>
                                <div>Delhi Cant Slum Area </div>
                                <div>Delhi Cant Slum Area </div>
                                <div>Delhi Cant Slum Area </div>
                                <div>Delhi Cant Slum Area </div>
                                <div>Delhi Cant Slum Area </div>
                                <div>Delhi Cant Slum Area </div>
                                <div>Delhi Cant Slum Area </div>


                            </div>
                        </div>
                        <button className="bg-gray-900 p-2 text-white border border-solid border-white transition-all duration-300 hover:scale-105">Know More...</button>
                    </div>
                    <div className="flex border-2 border-solid border-white flex-col gap-2 bg-gray-900 p-8 bor">
                        <div className="font-serif text-3xl ">Our Missions
                        </div>
                        <div >
                            <div>work toward publicor </div>
                            <div>social welfare goals</div>
                            <div>work toward publicor </div>
                            <div>social welfare goals</div>
                        </div>
                        <div >
                            <div>work toward publicor </div>
                            <div>social welfare goals</div>
                            <div>work toward publicor </div>
                            <div>social welfare goals</div>
                        </div>
                        <div >
                            <div>work toward publicor </div>
                            <div>social welfare goals</div>
                            <div>work toward publicor </div>
                            <div>social welfare goals</div>
                        </div>
                        <button className="bg-gray-900 p-2 text-white border border-solid border-white transition-all duration-300 hover:scale-105">Watch Catalogue...</button>
                    </div>

                </div>
            </div>


            <div className="pt-20 text-center mx-auto grid grid-cols-2  msm:grid-cols-1 gap-8 px-4 ">
                <div className="mb-20">
                    <div>
                        <div className="font-serif text-3xl p-2 bg-gray-900  inline  text-white">Who we are?</div>
                        <div className="text-justify mt-5 leading-9" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe omnis ipsa adipisci, totam eligendi provident quasi alias similique earum expedita accusantium molestiae libero reiciendis itaque consequatur repudiandae voluptate odio fuga ab autem! Molestiae quis possimus aliquid quos amet. Fugiat atque velit non optio sapiente neque similique illum provident minima quam.
                        </div>
                        <div className="text-justify mt-5 leading-9" >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum voluptates est non illum, ullam ipsam provident alias reprehenderit earum vitae nam libero iusto amet eligendi assumenda voluptatum. Inventore ea nihil dolorem. Laboriosam aperiam in quasi accusantium ratione expedita modi incidunt, dolore facilis, laudantium voluptatum corporis praesentium, explicabo itaque! Fuga, voluptatum?                        </div>
                        <div className="text-justify mt-5 leading-9" >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero accusamus doloribus quibusdam voluptatibus placeat nobis consequatur? Suscipit molestias quasi consequatur at veritatis ea enim consectetur eaque voluptates ipsa ratione perspiciatis nostrum sed et possimus ipsum, recusandae, deserunt, sint modi error praesentium. Facere quo consectetur temporibus error asperiores? Ad, voluptatem aliquid.                        </div>
                        <div className="absolute mr-5">
                            <button className="mt-5 border-2 border-solid bordeg-gray-900 inline p-2 transition-all duration-300 hover:scale-105 ">Read More....</button>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="font-serif text-3xl p-2 bg-gray-900  inline  text-white text-center px-4 " >Get Back to Us</div>
                    <div className="p-3">Fill the form and we will get back to you</div>
                    <form className=" mx-auto grid grid-cols-1 gap-3 " onSubmit={e => e.preventDefault()}>
                        <div>
                            <div className="py-3">
                                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="py-3">
                                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Phone No:</label>
                                <input type="number" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="py-3">
                                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                <input type="email" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg" />
                            </div>
                        </div>

                        <div className="mb-5 py-3">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 ">Comments</label>
                            <input type="text" id="large-input" className="block wrap w-full h-24 p-4 text-gray-900 border border-gray-300 rounded-lg" />
                        </div>
                        <button className="span bg-gray-900 py-3 mb-10 text-white transition-all duration-300 hover:bg-gray-900">Submit</button>

                    </form>

                </div>

            </div>
        </>
    )
}

export default Home