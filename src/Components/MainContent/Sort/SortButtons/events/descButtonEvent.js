const descButtonEvent = (props) => {
    const {list, getList, desc, html} = props
    return (
        list.length > 0 ? getList(html) && desc(list) : null
    )
};

export default descButtonEvent;