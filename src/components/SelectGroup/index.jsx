const SelectGroup = (props) => {
    let {
        title,
        styles,
        multiple,
        array,
        arrayKey,
        name,
        state,
        setState,
        change,
    } = props;
    return (
        <div className={styles}>
            <h3>{title}</h3>
            <select
                multiple={multiple}
                name={name}
                onChange={(e) => change(state, setState, e)}
            >
                {array[arrayKey].map((option, index, array) => {
                    if (index % 2 == 0) {
                        return (
                            <option value={array[index + 1].Description}>
                                {array[index].DisplayName}
                            </option>
                        );
                    }
                })}
            </select>
        </div>
    );
};

export default SelectGroup;
