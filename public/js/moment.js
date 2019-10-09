(function () {
    function formatDate(obj) {
        var timestamp = obj;
        timestamp = timestamp.replace(/^\s+|\s+$/, '');
        if (/^\d{10}$/.test(timestamp)) {
            timestamp *= 1000;
        } else if (/^\d{13}$/.test(timestamp)) {
            timestamp = parseInt(timestamp);
        } else {
            return "";
        }
        var YmdHis = format(timestamp);
        return YmdHis;
    }

    function format(timestamp) {
        var time = new Date(timestamp);
        var year = time.getFullYear();
        var month = (time.getMonth() + 1) > 9 && (time.getMonth() + 1) || ('0' + (time.getMonth() + 1))
        var date = time.getDate() > 9 && time.getDate() || ('0' + time.getDate())
        var hour = time.getHours() > 9 && time.getHours() || ('0' + time.getHours())
        var minute = time.getMinutes() > 9 && time.getMinutes() || ('0' + time.getMinutes())
        var second = time.getSeconds() > 9 && time.getSeconds() || ('0' + time.getSeconds())
        var YmdHis = year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
        return YmdHis;
    }
})()