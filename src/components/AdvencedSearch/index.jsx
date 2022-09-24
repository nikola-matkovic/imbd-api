import Layout from "../Layout";
import style from "./style.module.css";
import { useState } from "react";
import selectFilters from "./selectFilters.json";
import checkboxFilters from "./checkboxFilters.json";
import CheckboxGroup from "../checkboxGroup";
import SelectGroup from "../SelectGroup";

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
    const [runtimeFrom, setRuntimeFrom] = useState("");
    const [runtimeTo, SetRuntimeTo] = useState("");
    const [titleType, setTitleType] = useState([]);

    const HandleChange = (state, setState, e) => {
        const { value, checked } = e.target;
        if (checked) {
            setState([...state, value]);
        } else {
            setState(state.filter((e) => e !== value));
        }
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
                    <h3>Runtime</h3>
                    <div className={style.inputGroup}>
                        <span>From</span>
                        <input
                            type="number"
                            value={runtimeFrom}
                            onChange={(e) => setRuntimeFrom(e.target.value)}
                        />
                        <span>To</span>
                        <input
                            type="number"
                            value={runtimeTo}
                            onChange={(e) => SetRuntimeTo(e.target.value)}
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
                />
                <CheckboxGroup
                    styles={style.checkOption}
                    title="Title Groups"
                    array={checkboxFilters}
                    arrayKey="Title Groups"
                    name="groups"
                />
                <CheckboxGroup
                    styles={style.checkOption}
                    title="Companies"
                    array={checkboxFilters}
                    arrayKey="Companies"
                    name="companies"
                />
                <CheckboxGroup
                    styles={style.checkOption}
                    title="US Certificates"
                    array={checkboxFilters}
                    arrayKey="US Certificates"
                    name="certificates"
                />
                <CheckboxGroup
                    styles={style.checkOption}
                    title="Color Info"
                    array={checkboxFilters}
                    arrayKey="Color Info"
                    name="colors"
                />
                <CheckboxGroup
                    styles={style.checkOption}
                    title="Sound Mix"
                    array={checkboxFilters}
                    arrayKey="Sound Mix"
                    name="sound_mixes"
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
                />
                <SelectGroup
                    name="countries"
                    title="Countries"
                    array={selectFilters}
                    arrayKey="Countries"
                    styles={style.selectOption}
                    multiple={true}
                />
                <SelectGroup
                    name="languages"
                    title="Languages"
                    array={selectFilters}
                    arrayKey="Languages"
                    styles={style.selectOption}
                    multiple={true}
                />
                <SelectGroup
                    name="count"
                    title="Count"
                    array={selectFilters}
                    arrayKey="Count"
                    styles={style.selectOption}
                    multiple={false}
                />
                <SelectGroup
                    name="sort"
                    title="Sort by"
                    array={selectFilters}
                    arrayKey="Sort by"
                    styles={style.selectOption}
                    multiple={false}
                />
            </section>
            <button onClick={() => console.log(titleType)}>Log</button>
        </Layout>
    );
};

export default Advencedsearch;
