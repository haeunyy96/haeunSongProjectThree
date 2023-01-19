const Source = ({source}) => {
    const text = (source.summary).replace(/<[^>]*>/g, '');
    return (
        <>
        <p className="summary">{text}</p>
        </>
    );
}

export default Source;