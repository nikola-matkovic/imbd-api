const CheckboxGroup = (props) => {
    let { title, arrayKey, stiles, array, name, change, state, setState } =
        props;

    return (
        <div className={stiles}>
            <h3>{title}</h3>
            <div>
                {array[arrayKey].map((option, index, array) => {
                    if (index % 2 == 0) {
                        return (
                            <div>
                                <input
                                    type="checkbox"
                                    name={name}
                                    id={array[index + 1].Description}
                                    value={array[index + 1].Description}
                                    onChange={(e) => change(state, setState, e)}
                                />
                                <label htmlFor={array[index + 1].Description}>
                                    {array[index].DisplayName}
                                </label>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default CheckboxGroup;
