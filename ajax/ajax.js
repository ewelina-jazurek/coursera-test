(function (global) {

    // set up a namespace for our utility 
    var ajaxUtils = {};

    // Returns an HTTP request object
    function getRequestObject() {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }
        else if (window.ActiveXObject) {
            // for very old browsers
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else {
            global.alert("Ajax not supported");
            return(null);
        }
    }


    // makes an Ajax GET request to 'requestUrl'
    ajaxUtils.sendGetRequest =
    function(requestUrl, responseHandler) {
        var request = getRequestObject();
        request.onreadystatechange = 
        function() {
            handleResponse(request, responseHandler);
        };
        request.open("GET", requestUrl, true);
        request.send(null); 
    }

    // only calls user provided 'responseHandler'
    // function if response is ready
    // and not an error
    function handleResponse(request, responseHandler) {
        if ((request.readyState == 4) &&
        (request.status == 200)) {
            responseHandler(request);
        }
    }
    

    // expose utility to the global object
    global.$ajaxUtils = ajaxUtils;


})(window);