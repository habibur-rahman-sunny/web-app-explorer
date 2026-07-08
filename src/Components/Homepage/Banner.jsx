import mobileImg from "/images/hero.png"
const Banner = () => {
    return (
        <div>
            <section className="bg-gray-100 pt-10 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        We Build <span className="text-purple-600">Productive</span> Apps
                    </h1>

                    {/* Description */}
                    <p className="text-gray-500 text-lg md:text-xl mb-8 leading-relaxed">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                        Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>

                    {/* Buttons */}
                    <div className="flex  justify-center gap-4 mb-12">
                        <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-6 py-2 hover:bg-gray-50 transition shadow-sm">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
                        </button>
                        <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-6 py-2 hover:bg-gray-50 transition shadow-sm">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
                        </button>
                    </div>

                    {/* Mockup Image Placeholder */}
                    <div className="mt-8">
                        <img
                            src={mobileImg}
                            alt="App Mockup"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
