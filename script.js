    function postContactToGoogle() {
        var first = $('#firstName').val();
        var last = $('#lastName').val();
        var email = $('#email').val();

            $.ajax({
                url: "https://docs.google.com/forms/d/13pvS20oy6HS_fHnI3B_6nW4lSO6SMv2c8AyOuHPMJ9Y/formResponse",
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