//methods
//
function Computer(moth, cpu, gpu, retail, discount){
    this.moth = moth;
    this.cpu = cpu;
    this.gpu = gpu;
    this.retail = retail;
    this.discount = discount;
    this.cost = function(){
        var totalCost = parseInt(this.retail) - parseInt(this.discount)
        return "$" + totalCost;
    }
    this.message = function(){
        var discountPercent = (parseInt(this.discount)/parseInt(this.retail) * 100).toFixed(2) + "% off retail price."
        return discountPercent;
    }
}

//functions
//
function buildComputer(){
    var a = prompt("Enter motherboard: ");
    var b = prompt("Enter CPU: ");
    var c = prompt("Enter GPU: ");

    var d = "txt";
    while (isNaN(d)){
        d = prompt("Enter valid retail price: ");
    }

    var e = "txt";
    while (isNaN(e)){
        e = prompt("Enter valid desired discount: ");
    }

    var computer3 = new Computer(a,b,c,d,e);

    document.getElementById("comMoth3").innerHTML = computer3.moth;
    document.getElementById("comCpu3").innerHTML = computer3.cpu;
    document.getElementById("comGpu3").innerHTML = computer3.gpu;
    document.getElementById("comRetail3").innerHTML = computer3.retail;
    document.getElementById("comPrice3").innerHTML = computer3.discount;
    document.getElementById("comTotal3").innerHTML = computer3.cost();
    document.getElementById("comDiscount3").innerHTML = computer3.message();
}

//vars
//
var computer1 = new Computer("GIGABYTE Z370","i7 7700k","GTX 1080",2200,500);
var computer2 = new Computer("MSI Z370-A","i3 8100k","GTX 960",800,200);
var today = new Date();
var tomorrow = new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000)

//update html
//
document.getElementById("comMoth1").innerHTML = computer1.moth;
document.getElementById("comCpu1").innerHTML = computer1.cpu;
document.getElementById("comGpu1").innerHTML = computer1.gpu;
document.getElementById("comRetail1").innerHTML = computer1.retail;
document.getElementById("comPrice1").innerHTML = computer1.discount;
document.getElementById("comTotal1").innerHTML = computer1.cost();
document.getElementById("comDiscount1").innerHTML = computer1.message();

document.getElementById("comMoth2").innerHTML = computer2.moth;
document.getElementById("comCpu2").innerHTML = computer2.cpu;
document.getElementById("comGpu2").innerHTML = computer2.gpu;
document.getElementById("comRetail2").innerHTML = computer2.retail;
document.getElementById("comPrice2").innerHTML = computer2.discount;
document.getElementById("comTotal2").innerHTML = computer2.cost();
document.getElementById("comDiscount2").innerHTML = computer2.message();

document.getElementById("date").innerHTML = tomorrow;