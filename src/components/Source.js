import SourceLink from "./SourceLink";
const Source = ({source}) => {
    return (
        <>
        {
            source.map((newLink)=>{
                return <SourceLink
                finalUrl = {newLink.sourceUrl}
                />
            })

        }
        </>
    );
}

export default Source;