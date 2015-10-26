    function postContactToGoogle() {
        var first = $('#firstName').val();
        var last = $('#lastName').val();
        var email = $('#email').val();

            $.ajax({
                url: "https://docs.google.com/forms/d/1PTIFxKDZBqKdrkGAgrsa28wus8FyP6XrMTWzabRuC18/formResponse",
                data: { "entry_782195284": first, "entry_1798359106":
                last, "entry_289799160": email},
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        window.location.replace("tryAgain.html");
                    },
                    200: function () {
                        window.location.replace("nameAdded.html");
                    }
                }
            });
    }