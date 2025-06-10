import countryFacts from "../API/countryData.json"

export const About = ()=>{
    return (
        <section className="section-about container">
            <h2 className="container-title">
                Here are some Interesting Facts
                <br />
                we're Proud of
            </h2>
            <div className="gradient-cards">
                {
                    countryFacts.map((curElem)=>{
                        return (
                            <div className="card" key={curElem.id}>
                                <div className="container-card bg-blue-box">
                                    <p className="card-title">{curElem.countryName}</p>
                                    <p>
                                        <span className="card-description">Capital:</span>
                                        {curElem.capital}
                                    </p>
                                    <p>
                                        <span className="card-description">Population:</span>
                                        {curElem.population}
                                    </p>
                                    <p>
                                        <span className="card-description">InterestingFact:</span>
                                        {curElem.interestingFact}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}