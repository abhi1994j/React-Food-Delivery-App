import React from "react";
import building from "../assets/building.png";
import Cardgirl from "../assets/Card-image.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
       <Navbar/>
      <div className="home min-h-[100vh] w-[100%]">
        <div className="bg-[url('https://images.unsplash.com/photo-1595526051245-4506e0005bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-center w-full px-4 md:px-8 py-8 md:py-20">
          <div className="hero-container max-w-xl text-center  ">
            <h1 className="text-black text-3xl md:text-5xl font-extrabold mb-8">
              Let us find your
              <strong className="text-rose-700 block font-extrabold">
                Forever Food.
              </strong>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl mb-8 text-gray-100">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              deserunt labore magni quis consequuntur cum sequi fuga obcaecati!
            </p>
            <div className="btn-container text-center flex flex-wrap gap-4">
              <button className="bg-rose-600 hover:bg-rose-700 px-8 py-3 block w-full text-white sm:w-auto rounded-sm">
                Search Now
              </button>
              <button className="bg-white text-rose-600 px-8 py-3 block w-full sm:w-auto rounded-sm">
                Know more
              </button>
            </div>
          </div>
        </div>
        <div className="w-[100%] px-4 md:px-8 py-18 md:py-20 grid grid-col-1 lg:grid-cols-2 h-auto">
          <div className="relative w-full z-10 lg:py-16">
            <div className="w-full h-64 sm:h-70 md:h-80 lg:h-100 relative">
              <img
                src={building}
                alt=""
                className="w-full absolute inset-0 object-cover h-full "
              />
            </div>
          </div>
          <div className="relative flex items-center bg-gray-100">
            <span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>
            <div className="w-full bg-gray-100 p-8 sm:p-16 lg:p-24">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                ipsum, error quae at fugit dolorem rem fugiat illo inventore
                iusto exercitationem voluptas quisquam doloremque beatae, esse
                voluptatem placeat obcaecati et?
              </p>
              <button className="text-white font-medium text-sm inline-block bg-indigo-600 border border-indigo-600 hover:text-indigo-700 hover:bg-transparent px-12 py-3 text-center active:text-indigo-500 focus:ring">
                Get in touch
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mx-auto">
            <div className="sm:columns-2 lg:columns-3 lg:gap-8 sm:gap-6">
              <div className="card mb-4">
                <div className="card-body bg-gray-100 px-6 py-4 rounded-xl mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore officiis sequi voluptate? Velit reiciendis facilis
                  blanditiis illum dolorem saepe fugiat quibusdam ipsum
                  asperiores eaque dolore, nihil quo? Excepturi, qui
                  tempora.Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Eum sed laboriosam reiciendis praesentium illum atque
                  laborum qui harum quisquam iste.
                </div>
                <div className="card-footer px-2 flex gap-4">
                  <div className="writer w-12 h-12">
                    <img
                      src={Cardgirl}
                      alt="writer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="employee">
                    <p className="emp-name text-sm font-semibold text-gray-950 mb-1">
                      Gladdis Lennon
                    </p>
                    <p className="emp-position text-gray-600 text-sm">
                      Head of SEO
                    </p>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body bg-gray-100 px-6 py-4 rounded-xl mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore officiis sequi voluptate? Velit
                </div>
                <div className="card-footer px-2 flex gap-4">
                  <div className="writer w-12 h-12">
                    <img
                      src={Cardgirl}
                      alt="writer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="employee">
                    <p className="emp-name text-sm font-semibold text-gray-950 mb-1">
                      Gladdis Lennon
                    </p>
                    <p className="emp-position text-gray-600 text-sm">
                      Head of SEO
                    </p>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body bg-gray-100 px-6 py-4 rounded-xl mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore officiis sequi voluptate? Velit reiciendis facilis
                  blanditiis illum dolorem saepe fugiat quibusdam ipsum
                  asperiores eaque dolore, nihil quo? Excepturi
                </div>
                <div className="card-footer px-2 flex gap-4">
                  <div className="writer w-12 h-12">
                    <img
                      src={Cardgirl}
                      alt="writer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="employee">
                    <p className="emp-name text-sm font-semibold text-gray-950 mb-1">
                      Gladdis Lennon
                    </p>
                    <p className="emp-position text-gray-600 text-sm">
                      Head of SEO
                    </p>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body bg-gray-100 px-6 py-4 rounded-xl mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore officiis sequi voluptate? Velit reiciendis facilis
                  blanditiis illum dolorem saepe fugiat quibusdam ipsum
                  asperiores eaque dolore, nihil quo? Excepturi,
                </div>
                <div className="card-footer px-2 flex gap-4">
                  <div className="writer w-12 h-12">
                    <img
                      src={Cardgirl}
                      alt="writer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="employee">
                    <p className="emp-name text-sm font-semibold text-gray-950 mb-1">
                      Gladdis Lennon
                    </p>
                    <p className="emp-position text-gray-600 text-sm">
                      Head of SEO
                    </p>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body bg-gray-100 px-6 py-4 rounded-xl mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore officiis sequi voluptate? Velit reiciendis facilis
                  blanditiis illum dolorem saepe fugiat quibusdam ipsum
                  asperiores eaque dolore, nihil quo? Excepturi, qui tempora.
                </div>
                <div className="card-footer px-2 flex gap-4">
                  <div className="writer w-12 h-12">
                    <img
                      src={Cardgirl}
                      alt="writer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="employee">
                    <p className="emp-name text-sm font-semibold text-gray-950 mb-1">
                      Gladdis Lennon
                    </p>
                    <p className="emp-position text-gray-600 text-sm">
                      Head of SEO
                    </p>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body bg-gray-100 px-6 py-4 rounded-xl mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore officiis sequi voluptate? Velit reiciendis facilis
                  blanditiis illum dolorem saepe fugiat quibusdam ipsum
                  asperiores eaque dolore, nihil quo? Excepturi, qui tempora.
                </div>
                <div className="card-footer px-2 flex gap-4">
                  <div className="writer w-12 h-12">
                    <img
                      src={Cardgirl}
                      alt="writer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="employee">
                    <p className="emp-name text-sm font-semibold text-gray-950 mb-1">
                      Gladdis Lennon
                    </p>
                    <p className="emp-position text-gray-600 text-sm">
                      Head of SEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
