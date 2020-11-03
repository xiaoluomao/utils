var baseUrl = 'http://10.36.135.138:9999';


function fetch(url, method, data, callback) {
    data.userId = 'SZ999999999';
    $.ajax({
        url: baseUrl + url,
        method: method,
        data: data,
        success: function (res) {
            if (res.err == 0) {
                callback(res.data);
            } else {
                alert(res.msg);
            }
        },
        errror: function (err) {
            console.log('调用接口失败');
        }
    })
}