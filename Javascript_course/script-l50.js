// DOM manipulation
// console.log(document.getElementById('title'));

// console.log(document instanceof HTMLDocument);


// Event handling
document.addEventListener("DOMContentLoaded",
    function (event) {

        // function 
        function sayHello(event) {
            console.log(event);


            this.textContent = "Said it!"
            var name =
                document.getElementById("name").value;
            var message = "<h2>Hello " + name + "!</h2>";

            // document
            // .getElementById("content")
            // .textContent = message;

            document
                .getElementById("content")
                .innerHTML = message;

            if (name === "student") {
                var title =
                    // document.getElementById("title")
                    document
                        .querySelector("#title")
                        .textContent;
                title += " & Lovin' it";
                document
                    .querySelector("#title")
                    .textContent = title;
            }

        }



        // Unobstructive event binding 
        // document.querySelector("button")
        //     .addEventListener("click", sayHello);

        // document.querySelector("button")
        // .onclick = sayHello;


        document.querySelector("body")
        addEventListener("mousemove"),
            function (event) {
                console.log(event.clientX);
                console.log(event.clientY);
            }

    }
);