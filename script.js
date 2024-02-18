var arr = [
    {name: "roses", image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "mountains", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Cake", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Luxary Car. #car", image: "https://images.unsplash.com/photo-1680822140635-8d1d7e8bd6c5?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "rolls royace!", image: "https://images.unsplash.com/photo-1557081384-461cf563cd65?q=80&w=1404&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
];

function showImg() {
    var imgs = "";
    arr.forEach(function (obj){
        imgs += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">${obj.name}
        </div>
        </div>`;
    })

    document.querySelector(".container")
    .innerHTML = imgs;
};

function searchSystem() {
    var input = document.querySelector("#searchinput");
    var arrData = document.querySelector(".searchdata");

    input.addEventListener("focus", function() {
        document.querySelector(".overlay").style.display = "block";
    });

    input.addEventListener("blur", function() {
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".searchdata").style.display = "none";
    });

    input.addEventListener("input", function() {
        var inputValue = input.value.trim().toLocaleLowerCase();
        if (inputValue === "") {
            // If input is empty, display all images
            showImg();
            return;
        }

        var showinput = arr.filter(obj => obj.name.toLocaleLowerCase().includes(inputValue));
        var clutter = "";
        showinput.forEach(function(obj) {
            clutter += `
            <div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
            </div>
            `;
        });

        arrData.style.display = "block";
        arrData.innerHTML = clutter;
    });

    // Listen for Enter key press
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            var inputValue = input.value.trim().toLocaleLowerCase();
            if (inputValue === "") {
                // If input is empty, display all images
                showImg();
                return;
            }

            var showInput = arr.find(obj => obj.name.toLocaleLowerCase().includes(inputValue));
            if (showInput) {
                // Display the corresponding image
                document.querySelector(".container").innerHTML = `
                <div class="box">
                    <img class="cursor-pointer" src="${showInput.image}" alt="image">
                    <div class="caption">${showInput.name}</div>
                </div>`;
            } else {
                // Clear the container if no matching result found
                document.querySelector(".container").innerHTML = "";
            }
        }
    });
};

searchSystem();
showImg();