export const returnDataFrom(params, errorCode, errorMsg) {
    return {
        errorCode,
        errorMsg,
        content: params
    }
}