const GroupList = ({ items, valueProperty, contentProperty }) => {
    return (
        <ul className="list-group">
            {Object.keys(items).map(item => (
                <li key={items[item][valueProperty]} className="list-group-item">
                    {items[item][contentProperty]}
                </li>
            ))}
        </ul>
    );
};

export default GroupList;
