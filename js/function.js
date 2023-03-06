


// You can obtain an api key at: https://p.nomics.com/pricing#
var apiKEY = ""; 


//Only use comma and the Crypto ID for an example: BTC,ETH,CRO
var favoriteCryptos = "SHIB,SC,XVS";

// only use seconds. If you want to do 1 minute it must be 60;
var setTimerSeconds = 4; 

var cryptoShares;
cryptoShares = 
[

    {
        "name": "Shiba Inu",
        "id": "SHIB", 
        "currency": "SHIB",
        "quantity" : 33082876.37, 
    },

]

var ChartGraphCanvas = document.getElementById("myChartGraph");
var milliseconds = Math.floor(setTimerSeconds * 1000);
function runAPI () {
    $(".placeholder").addClass("loading-info");
    $(".placeholder").text("Retrieving data...")
    $.ajax({
        url: "https://api.nomics.com/v1/currencies/ticker?key=" + apiKEY + "&ids=" + favoriteCryptos + "&interval=1h,1d,7d,30d,ytd&filter=any&attributes=id",
        type: "GET",
        dataType: "json",
        cache: false,
        contentType: "application/json",
        success: success,
        error: error
    })

    function success(data) {
        var totalAmount = 0;
        var storeAmount = 0;
        var d = new Date();          
        var n = d.toLocaleString([], { hour12: true});

        $("#timestamp").text("Latest Update: " + n);
        $(".latestAjaxCall").show();
        $(".placeholder").hide()
        $(".insertData").empty()

        console.log("DATA SUCCESSFUL");
        console.log(data)
        
        $(".insertData").css("display", "table")
        $(".total").show()
        $("#cryptoData").append("<tr><th>Rank</th><th>Name</th><th>Price</th></tr>");
        $("#cryptoWalletData").append("<tr><th>Rank</th><th>Name</th><th>Quantity</th><th>Amount</th></tr>");

        // MONITORING CRYPTO SECTION //
        for (i = 0; i < data.length; i++) {
            $("#cryptoData").append("<tr id='pulledData' class='crypto" + data[i].id + "Row'" + ">" + "<td class='rank'>" + data[i].rank +  "</td>" +  "<td class='name'>" + "<a href='#" + data[i].currency + "'class='cryptoGraphBtn' id='" + data[i].id + "'>" + data[i].name + "(" + data[i].id + ")" +  "</a></td>" + "<td class='price'>$" + data[i].price + "</td>" + "</tr>");
        }

        // CRYPTO WALLET SECTION //
        for(a = 0; a < cryptoShares.length; a++) {
            $("#cryptoWalletData").append("<tr id='pulledData' class='crypto" + cryptoShares[a].id + "Row'" + ">" + "<td class='rank'>" + data[a].rank + "</td>" +  "<td class='name'>" + "<a href='#" + cryptoShares[a].currency + "' class='cryptoGraphBtn' id='" + cryptoShares[a].id + "'>" + cryptoShares[a].name + "(" + cryptoShares[a].id + ")" +  "</a></td>" + "<td>" + cryptoShares[a].quantity + "</td>" + "<td class='amount'>$" + (cryptoShares[a].quantity * data[a].price).toFixed(2) + "</td>" + "</tr>");
            if((data[a].id == "DOGE") || (data[a].id == "CRV")|| (data[a].id == "ARDRw") || (data[a].id == "SHIB") || (data[a].id == "ETC") || (data[a].id == "CAKE") || (data[a].id == "SC") || (data[a].id == "IOST") || (data[a].id == "XVS") || (data[a].id == "CTSI") || (data[a].id == "CELR") || (data[a].id == "IQ") || (data[a].id == "EPS") || (data[a].id == "ONE") || (data[a].id == "SAND")) {
                totalAmount = cryptoShares[a].quantity * data[a].price;
                storeAmount = totalAmount + storeAmount;
                //console.log(storeAmount)
            }
            else {
                console.log("IT DIDNT WORK -")
            }
            $(".wallet-amount").text( "$" + storeAmount.toFixed(2));
        }

        $(".cryptoGraphBtn").click(function() {
            console.log(this);
            //populateGraphData();
        });
        //console.log("Ajax live data is disabled.")
        setTimeout(function(){ 
            console.log("Excuting Ajax API Call");
            runAPI()
        }, milliseconds);
    }
    function error(err) {
        console.log("DATA NOT SUCCESSFUL");
        setTimeout(function(){ 
            console.log("Excuting Ajax API Call");
            runAPI()
        }, milliseconds);
    }
}
let script = document.createElement('script');
script.src = `https://api.nomics.com/v1/currencies/ticker?key=runAPI`;
document.body.append(script)

function populateGraphData() {
    var splitUrl = window.location.href // Current Url of the site
    var graphTitle = splitUrl.substring(splitUrl.indexOf("#") + 1);

    $(".chart-container").show();
    console.log("populateGraphData function has executed!")
    var ctx = document.getElementById("myChartGraph").getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: { 
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3]
    }]
    },
    options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
        scales : {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            x: {
                type: 'time',
                time: {
                    unit: 'month'
                }
            }
        },
        title: {
            display: true,
            text:  graphTitle
        }
    }
    });
}

