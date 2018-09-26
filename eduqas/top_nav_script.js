$(function () {
            var $headers = $('.header').click(function () {
                $(this).find('span').text(function (_, value) {
                    return value == '-' ? '+' : '-'
                });
                if ($(this).nextUntil('tr.header').css("display") == "none") {
                    $(this).nextUntil('tr.header').css("display", "table-row")
                }
                else {
                    $(this).nextUntil('tr.header').css("display", "none")
                }
            });
        });
