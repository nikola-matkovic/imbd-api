const SelectGroup = (props) => {
    let { title, multiple, array, arrayKey, name } = props;
    return (
        <div>
            <h3>{title}</h3>
            <select multiple={multiple} name={name}>
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
