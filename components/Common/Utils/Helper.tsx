export const createFormData = (body = {}, file, files, gallery, image, avatar) => {
    const data = new FormData()
    if (file) {
        data.append("file", file)
    }
    if (avatar) {
        data.append("avatar", avatar)
    }
    if (files) {
        
        Object.keys(files).forEach((value) => {
            
            data.append(value, files[value])
        })
    }
    if (gallery) {
        gallery.forEach(g => {
            data.append('gallery', g)
        })
    }
    if (image) {
        if (image[0]) {
            image.forEach(g => {
                data.append('image', g)
            })
        } else {
            data.append("image", image)
        }
    }
    Object.keys(body).forEach(key => {
        if (typeof body[key] === "object") data.append(key, JSON.stringify(body[key]))
        else if (body[key] || body[key] === 0 || body[key] === '') data.append(key, body[key])
    })
    return data
}
export const convertData = (body = {}) => {
    Object.keys(body).forEach(key => {
        if (typeof body[key] === "object") body[key] = JSON.stringify(body[key])
    })
    return body
}
export const formatCurrency=(input) =>{
    var number = input.value.replace(/[,.]/g, '');
    return new Intl.NumberFormat().format(number).toString().replace(/\./g, ',');
}

export const formatCurrencyV2=(value) =>{
    var number = value.replace(/[,.]/g, '');
    return new Intl.NumberFormat().format(number).replace(/\./g, ',');
}