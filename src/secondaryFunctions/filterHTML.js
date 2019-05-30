const filterHTML = (string) => {
    return string.replace(/<script[^>]*?>[\s\S]*?<\/script>/g,'').replace(/(\<(\/?[^>]+)>)/g,'')
}

export default filterHTML;