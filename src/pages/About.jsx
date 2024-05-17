import map from "../assets/map.png"

function AboutUs() {
    return (
        <div className="px-4 sm:px-8 max-w-screen-xl mx-auto">
            <div className="text-2xl sm:text-3xl font-medium py-2 border-b-4 border-gray-900 border-solid mb-3 inline-block">
                About Us
            </div>
            <div className="pb-5">
                <div className="text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non cum ullam minima possimus voluptatibus magnam harum, quaerat dolor illum enim aspernatur quasi totam rerum eum quae et, dicta error!
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, officiis explicabo laudantium quae deleniti ut earum, perspiciatis voluptates incidunt rerum obcaecati ipsam quasi tempora fugit ea fugiat illum qui amet! Suscipit porro magni adipisci nesciunt maiores aliquam iste sint provident, atque soluta distinctio voluptatibus ea ipsum, eaque illo accusantium inventore!
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, accusantium debitis architecto dolores, nam cumque quibusdam nostrum dignissimos, placeat eligendi dicta aspernatur blanditiis minus ex numquam vitae inventore incidunt ullam?
                </div>
            </div>


            <div>
                <div className="text-2xl sm:text-3xl font-medium py-1 border-b-4 border-gray-900 border-solid mb-3 inline">Reach Us Out:</div>
            </div>
            <div className="px-0 sm:px-5">
                <div className="py-3 text-sm sm:text-base text-justify">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta mollitia architecto aperiam odit enim dolores dicta provident, magni reiciendis, ipsa repellat nam suscipit fugit beatae fugiat, dolorem vero. Nulla sunt ducimus error est pariatur blanditiis impedit optio qui maiores magnam.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-3 pt-3">
                        <div>
                            <div className="text-xl sm:text-2xl font-medium">Address</div>
                            <div className="text-sm sm:text-base">
                                <div>123 Laxmi Nagar</div>
                                <div>Near XYZ Market</div>
                                <div>New Delhi -11050</div>
                            </div>
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-medium">Contact No.</div>
                            <div className="text-sm sm:text-base">
                                8089809890
                            </div>
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-medium">Email Id:</div>
                            <div className="text-sm sm:text-base">
                                xyz@gmail.com
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <div className="font-serif text-xl sm:text-2xl py-3 border-b-4 border-gray-900 border-solid inline-block mb-3">Connect with Us</div>
                                <div className="flex flex-col gap-2 text-sm sm:text-base"> <div>Linkedin</div>
                                    <div>Facebook</div>
                                    <div>Twitter</div>
                                </div>
                            </div>
                            <div>
                                <div className="font-serif text-xl sm:text-2xl py-3 border-b-4 border-gray-900 border-solid inline-block mb-3">Reach Us</div>
                                <div className="text-sm sm:text-base">Click to Navigate: <img className="w-24 p-2" src={map} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-center font-medium text-sm sm:text-base">Have any query? Write us now!!</div>
                        <form className="mx-auto grid grid-cols-1 gap-3" onSubmit={e => e.preventDefault()}>
                            <div>
                                <div className="py-3">
                                    <label htmlFor="small-input" className="mb-2 text-sm font-medium text-gray-900">Name</label>
                                    <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg" />
                                </div>
                                <div className="py-3">
                                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Phone No:</label>
                                    <input type="number" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg" />
                                </div>
                                <div className="py-3">
                                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                    <input type="email" id="small-input" className="block w-full p-2 text-gray-900 border" />
                                </div>
                            </div>

                            <div className="mb-5 py-3">
                                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900">Comments</label>
                                <input type="text" id="large-input" className="block wrap w-full h-24 p-4 text-gray-900 border" />
                            </div>
                            <button className="bg-gray-900 py-3 mb-10 text-white text-sm sm:text-base">submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs