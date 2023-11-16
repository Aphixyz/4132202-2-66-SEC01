    var num =10; //ตัวอักษร ตัวเลข
    let name = "Oil";
    age = 20;

    fruit = ["apple","mango","tangmo"];
    ojb = {name:"Oiles",age:"20",tel:"0987654321"};

    data ={adress:["70","jira","buriram",3200],name:"Aphiz"};

    console.log(fruit[1]);
    console.log(ojb.tel);
    console.log(data.adress[2]);

    document.getElementById("msg").innerHTML = data.adress[2];

    let longTxt = data.name + " : " + fruit[0];

    longTxt = `${data.name} :
              ${fruit[1]}`;
    
        $(function() {
            $("#msg").html(longTxt);
        });//jQuery ready แยกการประมวลผลออกก่อนได้
