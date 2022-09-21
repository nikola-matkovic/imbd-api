import { SplideSlide } from "@splidejs/react-splide";
import style from "./style.css";

const PeopleCard = (props) => {
    const { image, name, asCharacter } = props;
    return (
        <SplideSlide aria-label="test">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{asCharacter}</p>
        </SplideSlide>
    );
};

export default PeopleCard;
