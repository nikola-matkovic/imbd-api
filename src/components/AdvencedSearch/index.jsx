import Layout from "../Layout";
import style from "./style.module.css";
import { useState } from "react";
import filters from "fiters.json";
const Advencedsearch = () => {
    const [title, setTitle] = useState("");

    return (
        <Layout>
            <section className={style.filters}>
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
                    <h3>Title type</h3>
                </div>
            </section>
        </Layout>
    );
};

export default Advencedsearch;
