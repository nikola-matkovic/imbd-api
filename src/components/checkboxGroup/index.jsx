const CheckboxGroup = (props) => {
    let { title, arrayKey, stiles, array, name } = props;
    return (
        <div>
            <h3>{title}</h3>
            <div className={stiles}></div>
            {array[arrayKey].map((option, index, array) => {
                if (index % 2 == 0) {
                    return (
                        <div>
                            <input
                                type="checkbox"
                                name={name}
                                id={array[index + 1].Description}
                                value={array[index + 1].Description}
                            />
                            <label htmlFor={array[index + 1].Description}>
                                {array[index].DisplayName}
                            </label>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default CheckboxGroup;
