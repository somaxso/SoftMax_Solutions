import React from "react";

const CoreValues = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-12 lg:space-x-24">
        {/* Left Side - Title */}
        <div className="md:w-1/3 text-center md:text-left flex flex-col justify-center mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
            Our team shares
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
            core values
          </h2>
        </div>

        {/* Right Side - Core Values */}
        <div className="flex flex-col md:flex-row md:w-2/3 space-y-8 md:space-y-0 md:space-x-8 lg:space-x-12">
          <div className="flex flex-col space-y-8 md:space-y-8 w-full md:w-1/2">
            <div className="p-6 border-2 border-blue-200 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 ease-in-out">
              <h3 className="text-xl md:text-2xl font-bold text-center text-blue-600 mb-4">
                Innovation
              </h3>
              <p className="text-black text-center text-base md:text-lg">
                We foster a culture of creativity and innovation, constantly
                striving to set new standards of excellence. We invite everyone
                to share their groundbreaking ideas in technology, business, and
                efficiency, and we seek the passion and drive to turn those
                ideas into reality.
              </p>
            </div>

            <div className="p-6 border-2 border-blue-200 rounded-lg shadow-lg hover:bg-blue-50 ">
              <h3 className="text-xl md:text-2xl  text-center font-bold text-blue-600 mb-4">
                Efficiency
              </h3>
              <p className="text-black text-center text-base md:text-lg">
                Efficiency is a top priority at SoftMax Solutions. We are
                committed to maximizing efficiency in all our operations, which
                not only enhances our commercial outcomes but also ensures the
                satisfaction of both our customers and shareholders.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center w-full md:w-1/2">
            <div className="p-6 border-2 border-blue-200 rounded-lg shadow-lg hover:bg-blue-50 ">
              <h3 className="text-xl md:text-2xl font-bold text-center text-blue-600 mb-4">
                Knowledgeable
              </h3>
              <p className="text-black text-center text-base md:text-lg">
                We blend two powerful concepts: 'Knowledge is power' and
                'Teamwork makes the dream work.' Our team of skilled engineers
                continuously enhances their expertise while collaborating to
                achieve common goals. Everyone is encouraged to share their
                knowledge and work together to drive success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
