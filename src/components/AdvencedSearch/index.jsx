import Layout from "../Layout";
import style from "./style.module.css";
import { useState } from "react";
import selectFilters from "./selectFilters.json";
import checkboxFilters from "./checkboxFilters.json";
import CheckboxGroup from "../checkboxGroup";
import SelectGroup from "../SelectGroup";
import Search from "../Search";

const Advencedsearch = () => {
    const [title, setTitle] = useState("");
    const [relaseFrom, setRelaseFrom] = useState("");
    const [relaseTo, setRelaseTo] = useState("");
    const [userRatingFrom, setUserRatingFrom] = useState("-");
    const [userRatingTo, setUserRatingTo] = useState("-");
    const [numberOfVotesFrom, setNumberOfVotesFrom] = useState("");
    const [numberOfVotesTo, setNumberOfVotesTo] = useState("");
    const [keywords, setKeywords] = useState("");
    const [filmingLocation, setFilmingLocation] = useState("");
    const [popularityFrom, setPopularityFrom] = useState("");
    const [popularityTo, setPopularityTo] = useState("");
    const [plot, setPlot] = useState("");

    const [titleType, setTitleType] = useState([]);
    const [genres, setGenres] = useState([]);
    const [titleGroups, setTitleGroups] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [usCertificate, setUsCertificate] = useState([]);
    const [colorInfo, setColorInfo] = useState([]);
    const [soundMix, setSoundMix] = useState([]);

    const [titleData, setTitleData] = useState([]);
    const [countries, setCountries] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [count, setCount] = useState([]);
    const [sort, setSort] = useState([]);

    const search = () => {
        let params = {};
        const setKey = (from, to) => {
            if (from !== "" && to !== "") {
                return `${userRatingFrom},${userRatingTo}`;
            } else if (from !== "") {
                return `${from},`;
            } else if (to !== "") {
                return `${to},`;
            } else {
                return "";
            }
        };
        let relase = setKey(relaseFrom, relaseTo);
        let rating = setKey(userRatingFrom, userRatingTo);
        let votes = setKey(numberOfVotesFrom, numberOfVotesTo);
        let popularity = setKey(popularityFrom, popularityTo);

        let values = [
            title,
            relase,
            rating,
            votes,
            keywords,
            filmingLocation,
            popularity,
            plot,
            titleType.join(","),
            genres.join(","),
            titleGroups.join(","),
            companies.join(","),
            usCertificate.join(","),
            colorInfo.join(","),
            soundMix.join(","),
            titleData.join(","),
            countries.join(","),
            languages.join(","),
            count.join(","),
            sort.join(","),
        ];
        let keys = [
            "title",
            "release_date",
            "user_rating",
            "num_votes",
            "keywords",
            "locations",
            "moviemeter",
            "plot",
            "title_type",
            "genres",
            "groups",
            "companies",
            "certificates",
            "colors",
            "sound_mixes",
            "has",
            "countries",
            "languages",
            "count",
            "sort",
        ];
        values.forEach((value, index) => {
            if (value !== "" && value !== []) {
            }
        });
    };

    const HandleChange = (state, setState, e) => {
        const { value, checked } = e.target;
        if (checked) {
            setState([...state, value]);
        } else {
            setState(state.filter((e) => e !== value));
        }
    };

    const HandleChangeSelect = (state, setState, e) => {
        const options = e.target.options;
        let values = [];
        let option;
        for (option in options) {
            if (options[option].selected) {
                console.log("selectovano je" + options[option].value);
                values.push(options[option].value);
            }
        }
        setState(values);
        console.log(values);
    };

    let ratingOptions = [];
    ratingOptions.push(<option selected>-</option>);
    for (let i = 1.0; i <= 10; i += 0.1) {
        ratingOptions.push(
            <option value={i.toFixed(1)}>{i.toFixed(1)}</option>
        );
    }

    return (
        <Layout>
            <section className={style.inputs}>
                <div>
                    <h3>Title</h3>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title"
                    />
                </div>
                <div>
                    <h3>Release Date</h3>
                    <div className={style.inputGroup}>
                        <span>From</span>
                        <input
                            type="text"
                            value={relaseFrom}
                            onChange={(e) => setRelaseFrom(e.target.value)}
                            placeholder="Enter date"
                        />
                        <span>To</span>
                        <input
                            type="text"
                            value={relaseTo}
                            onChange={(e) => setRelaseTo(e.target.value)}
                            placeholder="Enter date"
                        />
                    </div>
                    <i>Format: YYYY-MM-DD, YYYY-MM, or YYYY</i>
                </div>
                <div>
                    <h3>User Rating</h3>
                    <div className={style.inputGroup}>
                        <span>From</span>
                        <select
                            type="text"
                            value={userRatingFrom}
                            onChange={(e) => setUserRatingFrom(e.target.value)}
                        >
                            {ratingOptions}
                        </select>
                        <span>To</span>
                        <select
                            type="text"
                            value={userRatingTo}
                            onChange={(e) => setUserRatingTo(e.target.value)}
                        >
                            {ratingOptions}
                        </select>
                    </div>
                </div>
                <div>
                    <h3>Number Of Votes</h3>
                    <div className={style.inputGroup}>
                        <span>From</span>
                        <input
                            type="number"
                            value={numberOfVotesFrom}
                            onChange={(e) =>
                                setNumberOfVotesFrom(e.target.value)
                            }
                        />
                        <span>To</span>
                        <input
                            type="number"
                            value={numberOfVotesTo}
                            onChange={(e) => setNumberOfVotesTo(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <h3>keywords</h3>
                    <input
                        type="text"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        placeholder="Emter text"
                    />
                    <br />
                    <i>
                        Search for a notable object, concept, style or aspect.
                    </i>
                </div>
                <div>
                    <h3>Filming Locations</h3>
                    <input
                        type="text"
                        value={filmingLocation}
                        onChange={(e) => setFilmingLocation(e.target.value)}
                        placeholder="Emter text"
                    />
                </div>
                <div>
                    <h3>popularity</h3>
                    <div className={style.inputGroup}>
                        <span>From</span>
                        <input
                            type="number"
                            value={popularityFrom}
                            onChange={(e) => setPopularityFrom(e.target.value)}
                        />
                        <span>To</span>
                        <input
                            type="number"
                            value={popularityTo}
                            onChange={(e) => setPopularityTo(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <h3>Plot</h3>
                    <input
                        type="text"
                        value={plot}
                        onChange={(e) => setPlot(e.target.value)}
                    />
                </div>
            </section>
            <section className={style.checkboxes}>
                <CheckboxGroup
                    styles={style.checkOption}
                    title="TitlTitle Type"
                    array={checkboxFilters}
                    arrayKey="titlTitle Type"
                    name="title_type"
                    change={HandleChange}
                    state={titleType}
                    setState={setTitleType}
                />
                <CheckboxGroup
                    styles={style.checkOption}
                    title="Genres"
                    array={checkboxFilters}
                    arrayKey="Genres"
                    name="genres"
                    change={HandleChange}
                    state={genres}
                    setState={setGenres}
                />
                <CheckboxGroup
                    styles={style.checkOption}
                    title="Title Groups"
                    array={checkboxFilters}
                    arrayKey="Title Groups"
                    name="groups"
                    change={HandleChange}
                    state={titleGroups}
                    setState={setTitleGroups}
                />
                <CheckboxGroup
                    styles={style.checkOption}
                    title="Companies"
                    array={checkboxFilters}
                    arrayKey="Companies"
                    name="companies"
                    change={HandleChange}
                    state={companies}
                    setState={setCompanies}
                />
                <CheckboxGroup
                    styles={style.checkOption}
                    title="US Certificates"
                    array={checkboxFilters}
                    arrayKey="US Certificates"
                    name="certificates"
                    change={HandleChange}
                    state={usCertificate}
                    setState={setUsCertificate}
                />
                <CheckboxGroup
                    styles={style.checkOption}
                    title="Color Info"
                    array={checkboxFilters}
                    arrayKey="Color Info"
                    name="colors"
                    change={HandleChange}
                    state={colorInfo}
                    setState={setColorInfo}
                />
                <CheckboxGroup
                    styles={style.checkOption}
                    title="Sound Mix"
                    array={checkboxFilters}
                    arrayKey="Sound Mix"
                    name="sound_mixes"
                    change={HandleChange}
                    state={soundMix}
                    setState={setSoundMix}
                />
            </section>
            <section>
                <SelectGroup
                    name="has"
                    title="Title Data"
                    array={selectFilters}
                    arrayKey="Title Data"
                    styles={style.selectOption}
                    multiple={true}
                    change={HandleChangeSelect}
                    state={titleData}
                    setState={setTitleData}
                />
                <SelectGroup
                    name="countries"
                    title="Countries"
                    array={selectFilters}
                    arrayKey="Countries"
                    styles={style.selectOption}
                    multiple={true}
                    change={HandleChangeSelect}
                    state={countries}
                    setState={setCountries}
                />
                <SelectGroup
                    name="languages"
                    title="Languages"
                    array={selectFilters}
                    arrayKey="Languages"
                    styles={style.selectOption}
                    multiple={true}
                    change={HandleChangeSelect}
                    state={languages}
                    setState={setLanguages}
                />
                <SelectGroup
                    name="count"
                    title="Count"
                    array={selectFilters}
                    arrayKey="Count"
                    styles={style.selectOption}
                    multiple={false}
                    change={HandleChangeSelect}
                    state={count}
                    setState={setCount}
                />
                <SelectGroup
                    name="sort"
                    title="Sort by"
                    array={selectFilters}
                    arrayKey="Sort by"
                    styles={style.selectOption}
                    multiple={false}
                    change={HandleChangeSelect}
                    state={sort}
                    setState={setSort}
                />
            </section>
            <button
                style={{
                    position: "fixed",
                    bottom: "0px",
                }}
                onClick={() => search()}
            >
                Log
            </button>
        </Layout>
    );
};

export default Advencedsearch;
