function returnDataFrom(params, errorCode, errorMsg) {
  return {
    errorCode: errorCode,
    errorMsg: errorMsg,
    content: params
  }
}

module.exports = {
  returnDataFrom
}