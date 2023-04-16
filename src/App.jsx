import { useEffect, useState } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import FlipNumbers from "react-flip-numbers";
import { Growth, Data } from "./components/growthRawMaterial";
import OnScreen from "./utils/onScreen";
import { Nav, GoTop } from "./components/navbar";

function App() {
    const [showGoTop, setShowGoTop] = useState("goTopHidden");
    const [evs, setEvs] = useState({ evs: 6809322 });
    const [growth, setGrowth] = useState({ Data: "" });

    useEffect(() => {
        // initialize aos
        Aos.init({ duration: 2000 });
        // interval to update the counter every 5 seconds random
        const interval = setInterval(() => {
            setEvs((prevState) => ({
                evs: prevState.evs + Math.floor(Math.random() * 11),
            }));
        }, 5000);
        // clear interval on re-render to avoid memory leaks
        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <GoTop showGoTop={showGoTop} scrollUp={handleScrollUp} />
            <div className="header" id="page1">
                <Nav />
                <div className="intro" id="home">
                    <p
                        className="intro-title"
                        data-aos="slide-down"
                        data-aos-duration="2000"
                    >
                        Electric Vehicles
                    </p>
                    <FlipNumbers
                        play
                        color="#fff"
                        background="#5DA7DB"
                        width={90}
                        height={90}
                        perspective={1000}
                        numbers={`${Math.floor(
                            evs.evs / 1000000
                        )}__${Math.floor(
                            Math.floor(evs.evs % 1000000) / 1000
                        )}__${Math.floor(evs.evs % 1000)}`}
                    />
                    <p className="counter-text">
                        TOTAL WORLDWIDE ELECTRIC VEHICLES
                    </p>
                </div>
            </div>
            <div className="comparison" id="compare">
                <OnScreen
                    isInView={(inView) =>
                        inView
                            ? setShowGoTop("goTop")
                            : setShowGoTop("goTopHidden")
                    }
                />
                <p
                    className="title"
                    data-aos="slide-up"
                    data-aos-duration="2000"
                >
                    Electric Vehicles vs. Gasoline Vehicles
                </p>
                <p
                    className="text-info-subtitle"
                    data-aos="slide-up"
                    data-aos-duration="2000"
                >
                    1 EV / 250 Gasoline Vehicles
                </p>
                <div className="parent">
                    <div className="EV" data-aos="fade-up-right" />
                    {Array.from(Array(250).keys()).map((i) => (
                        <div
                            className="grid-item"
                            data-aos={"fade-up"}
                            data-aos-delay={`${
                                Math.floor(Math.random() * 5) * 1000
                            }`}
                            key={i}
                        />
                    ))}
                </div>
            </div>
            <div className="text-info" id="page2">
                <p className="title" data-aos="slide-up">
                    Electric Vehicles vs Gasoline Cars
                </p>
                <p className="text-info-subtitle" data-aos="slide-up">
                    Understanding the Differences and Benefits The automobile
                    industry is rapidly shifting towards more sustainable modes
                    of transportation, with the adoption of electric vehicles
                    (EVs) on the rise. However, despite their many benefits, EVs
                    still only make up a small fraction of the total number of
                    cars on the road. Let's take a closer look at the
                    differences between electric vehicles and gasoline cars and
                    explore the benefits and challenges of EV adoption.
                </p>
            </div>
            <OnScreen
                isInView={(inView) =>
                    inView ? setGrowth({ Data: Data }) : setGrowth({ Data: "" })
                }
            />
            <div className="growth" id="growth">
                <p className="title" data-aos="slide-up">
                    Growth of Electric Vehicles vs Use of raw materials
                </p>
                <p className="title" data-aos="slide-up">
                    (USD Billion)
                </p>
                <Growth data={growth.Data} />
            </div>

            <div className="text-info" id="page3">
                <p className="title" data-aos="slide-up">
                    Market Share of Electric Vehicles vs Gasoline Cars
                </p>
                <p className="text-info-subtitle" data-aos="slide-up">
                    The market share of electric vehicles is growing rapidly,
                    with the number of EVs on the road increasing by 60% in 2019
                    alone. However, despite this growth, EVs still only make up
                    a small fraction of the total number of cars on the road.
                    Let's take a closer look at why this is the case and explore
                    effects of EV adoption.
                </p>
            </div>

            <div className="pumps" id="pumps">
                <p className="title" data-aos="slide-up">
                    Electric Vehicle Charging Stations vs Gas Pumps
                </p>
                <p className="pumps-subtitle" data-aos="slide-up">
                    1 EV Charging Station / 25 Gas Pumps
                </p>
                <div className="parent">
                    <div className="EV-charger" data-aos="fade-up-right" />
                    {Array.from(Array(25).keys()).map((i) => (
                        <div
                            className="pumps-grid-item"
                            data-aos={"fade-up"}
                            data-aos-delay={`${
                                Math.floor(Math.random() * 5) * 1000
                            }`}
                            key={i}
                        />
                    ))}
                </div>
            </div>

            <div className="text-info" id="page4">
                <p className="title" data-aos="slide-up">
                    Charging Time of Electric Vehicles vs Gasoline Cars
                </p>
                <p className="text-info-subtitle" data-aos="slide-up">
                    The charging time of electric vehicles is much faster than
                    they were used to be. However, despite this growth, EVs
                    still only make up a small fraction of the total number of
                    cars on the road due to the lack of charging infrastructure
                    and limited range of EVs where gasoline cars are still the
                    most popular choice due to their convenience.
                </p>
            </div>

            <div className="effects" id="effects">
                <p className="title" data-aos="slide-up">
                    Effects of Electric Vehicles on the Environment
                </p>
                <div className="effects-grid">
                    <div className="effects-grid-item">
                        <div className="effects-grid-item1-icon" />
                        <p
                            className="effects-grid-item-title"
                            data-aos="fade-up"
                        >
                            Reduced Emissions
                        </p>
                        <p
                            className="effects-grid-item-text"
                            data-aos="fade-up"
                        >
                            Electric vehicles produce zero tailpipe emissions,
                            which means they don't contribute to air pollution
                            and climate change.
                        </p>
                    </div>
                    <div className="effects-grid-item">
                        <div className="effects-grid-item2-icon" />
                        <p
                            className="effects-grid-item-title"
                            data-aos="fade-up"
                        >
                            Reduced Noise
                        </p>
                        <p
                            className="effects-grid-item-text"
                            data-aos="fade-up"
                        >
                            Electric vehicles are much quieter than gasoline
                            cars, which means they are less disruptive to
                            neighbors and wildlife.
                        </p>
                    </div>
                    <div className="effects-grid-item">
                        <div className="effects-grid-item3-icon" />
                        <p
                            className="effects-grid-item-title"
                            data-aos="fade-up"
                        >
                            Usage of Renewable Energy
                        </p>
                        <p
                            className="effects-grid-item-text"
                            data-aos="fade-up"
                        >
                            Electric vehicles can be powered by renewable energy
                            sources, which means they can help reduce the use of
                            fossil fuels.
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p className="footer-text">
                    © 2023 Tanae. All rights reserved.
                </p>
            </div>
        </>
    );
}
export default App;
