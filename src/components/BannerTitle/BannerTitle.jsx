
const BannerTitle = ({ bannerImg, title }) => {
    return (
        <div
            className="grid h-44 md:h-48 lg:h-60 place-items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${bannerImg})`,
            }}>

            <div className="font-title space-y-6 lg:space-y-8  lg:py-20">
                <div className=" text-center pt-4 lg:pt-8">
                    <h1 className="text-white text-2xl md:text-4xl  font-bold pb-2 md:pb-4">
                        {title}
                    </h1>
                </div>
            </div>

        </div>
    );
};

export default BannerTitle;