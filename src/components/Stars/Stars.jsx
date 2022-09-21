import style from "./style.module.css";

const Stars = (props) => {
    const { number } = props;
    let i = 1;
    let stars = [];
    for (i; i <= number; i++) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    if (parseFloat(number) !== parseInt(number)) {
        stars.push(<i className="bi bi-star-half"></i>);
        i++;
    }
    for (i; i <= 10; i++) {
        stars.push(<i key={i} className="bi bi-star"></i>);
    }
    return <div className={style.star}>{stars}</div>;
};

export default Stars;
