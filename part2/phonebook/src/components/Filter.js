const Filter = ({ filter, handleFilerChange }) => {
    return (
        <div>
        filter shown with <input value={filter} onChange={handleFilerChange} />
        </div>
    );
}

export default Filter;