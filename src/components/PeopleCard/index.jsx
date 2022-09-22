import { SplideSlide } from "@splidejs/react-splide";
import style from "./style.css";

const PeopleCard = (props) => {
    const { image, name, asCharacter } = props;
    return (
        <SplideSlide aria-label="test">
            <img src={image} alt={name} />
            <div className="card-footer">
                <h4>{name}</h4>
                <p>{asCharacter}</p>
            </div>
        </SplideSlide>
    );
};

export default PeopleCard;
