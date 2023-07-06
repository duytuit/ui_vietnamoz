export const convertData = (body = {}) => {
    Object.keys(body).forEach(key => {
        if (typeof body[key] === "object") body[key] = JSON.stringify(body[key])
    })
    return body
}