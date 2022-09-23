import { SplideSlide } from "@splidejs/react-splide";
import style from "./style.css";

const PeopleCard = (props) => {
    const { image, header, paragraph } = props;
    return (
        <SplideSlide aria-label="test">
            <img src={image} alt={header} />
            <div className="card-footer">
                <h4>{header}</h4>
                <p>{paragraph}</p>
            </div>
        </SplideSlide>
    );
};

export default PeopleCard;
