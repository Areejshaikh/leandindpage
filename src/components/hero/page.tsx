import Buttons from "../button/page"
import '../hero/style/style.css'

export const Hero = () => {

    return (
        <section className="bg-img relative md:top-28">
            <div className="inset-0 bg-black bg-opacity-75 text-white  md:pt-24 justify-center py-44 md:pb text-center">
                <span className="font-normal tracking-widest uppercase  leading-relaxed pt-8" >
                    Introducing Horse Club
                </span>


                {/* create line  */}
                <div className="flex justify-center text-center my-6">
                    <div className=" border h-0 w-28 md:w-80 border-red-600"></div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mx-4 md:mx-12 leading-tight">
                   <p> Inter relation</p>
                    Between Horse & Rider
                    
                </h1>
 
              <Buttons text="Book Consultancy" colorType="secondary"  />

            </div>
          

        </section>
    )
}