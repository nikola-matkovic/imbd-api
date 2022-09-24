import { SplideSlide } from "@splidejs/react-splide";
import style from "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PeopleCard = (props) => {
    const { image, header, paragraph } = props;
    return (
        <SplideSlide aria-label="test">
            <LazyLoadImage src={image} alt={header} />
            <div className="card-footer">
                <h4>{header}</h4>
                <p>{paragraph}</p>
            </div>
        </SplideSlide>
    );
};

export default PeopleCard;
