var carIndex = [];
var Car = function(carname, buyPrice, fuelCostYear, maintenanceYear, totalPrice, carType) {
    this.carName = carname;
    this.buyPrice = buyPrice;
    this.fuelCostYear = fuelCostYear;
    this.maintenanceYear = maintenanceYear;
    this.totalPrice = totalPrice;
    this.carType = carType;
    carIndex.push(this);
};

// DEFINING THE CAR OBJECTS:

var nissan = new Car("nissan", 10000, 600, 300, 20000, "fuel");
var jetta = new Car("jetta", 14000, 800, 500, 30000, "electric");
var volkswagon = new Car("volkswagon", 10000, 600, 300, 20000, "fuel");
var chevrolet = new Car("chevrolet", 14000, 800, 500, 30000, "electric");
var tesla = new Car("tesla", 10000, 600, 300, 20000, "fuel");
var kia = new Car("kia", 14000, 800, 500, 30000, "electric");



$("document").ready(function() {
    var selectwrapper = $(".selectwrapper");

    carIndex.map(function(arrayitem, i) {
        selectwrapper.find("ul").append("<li data-index=" + i + ">" + arrayitem.carName + "</li>");
    }); // populate dropdown car list for both list 1 and 2 with the cars defined.


    selectwrapper.find(".selectheadbar").on('click', function() {
        $(this).parent().find(".carboxgrid").slideToggle();

    }); // animation of the slide down/up of the list menu.

    var slider = document.getElementById("slider");
    var slidervalue = slider.value;
    $(".timeresult").text(slider.value + " Year(s)");
    $("#slider").on('mouseup touchend', function() {
        $(".timeresult").text(slider.value + " Year(s)");

    }); // slider control works both touchscreen and mouse



    $("li").on("click", function() {
        //console.log($(this).parent().hasClass("car2"));
        var indexnum = $(this).data("index");
        var parent = $(this).parent();
        var table = $(".comptablewrapper");
        $(this).parents(".carboxgrid").slideUp();

        function populateTable(myclass) {
            table.find(".namebox").find(myclass).text(carIndex[indexnum].carName);
            table.find(".type").find(myclass).text(carIndex[indexnum].carType);
            table.find(".price").find(myclass).text(carIndex[indexnum].buyPrice + "$");
            table.find(".fuel").find(myclass).text(carIndex[indexnum].fuelCostYear * slider.value + "$");
            table.find(".maintenance").find(myclass).text(carIndex[indexnum].maintenanceYear * slider.value + "$");
            table.find(".totalcost").find(myclass).text(carIndex[indexnum].totalPrice * slider.value + "$");
        }
        if (parent.hasClass("car1")) {

            populateTable(".first");
            $("#slider").on('mouseup touchend', function() {
                populateTable(".first");
            });
        } else if (parent.hasClass("car2")) {

            populateTable(".second");
            $("#slider").on('mouseup touchend', function() {
                populateTable(".second");
            });

        }
    });

});
