const ascButtonEvent = (props) => {
    const {list, getList, asc, html} = props
    return (
        list.length > 0 ? getList(html) && asc(list) : null
    )
};

export default ascButtonEvent;