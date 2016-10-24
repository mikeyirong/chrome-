var FbaStockObj = {};
FbaStockObj.RequestCode = {
    "Progress": 6,
    "SingleError": 7,
    "SingleSuccess": 8,
    "AllComplete": 9,
    "FreeSelectFile": 10,
    "CancelFreeSelectFile": 11
};
chrome.runtime.onMessage.addListener(
    function (request) {
        if (request.result == FbaStockObj.RequestCode.FreeSelectFile) {

        }
        else if (request.result == FbaStockObj.RequestCode.CancelFreeSelectFile) {

        }
    });