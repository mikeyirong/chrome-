var FbaStock={};
FbaStock.SignInEmail = "";
FbaStock.Msg = [];
FbaStock.Status = 0;//1请求中，0未请求
FbaStock.RequestCode = {
    "Progress":6,
    "SingleError":7,
    "SingleSuccess":8,
    "AllComplete":9,
    "FreeSelectFile":10,
    "CancelFreeSelectFile":11
};
chrome.extension.onRequest.addListener(
    function (request) {
        console.log(request);
        if (request.result == FbaStock.RequestCode.AllComplete) {
            FbaStock.Status = 0;
        }
        else if (request.result == FbaStock.RequestCode.Progress) {
            FbaStock.Status = 1;
            FbaStock.Msg=[];
        }
        else if (request.result == FbaStock.RequestCode.Email) {
            FbaStock.SignInEmail = request.data;
        }
        else if(request.result==FbaStock.RequestCode.SingleSuccess)
        {
            FbaStock.Msg.push('<div class="alert alert-success alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>同步'+request.msg+'完成。</div>');
        }
        else if(request.result==FbaStock.RequestCode.SingleError)
        {
            FbaStock.Msg.push('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>同步失败,来源：'+request.msg+'.'+request.code+'</div>');
        }
    });
