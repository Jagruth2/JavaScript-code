// JavaScript source code

//<![CDATA[

//scriptLoader('https://sdk.amazonaws.com/js/aws-sdk-2.2.32.min.js');

scriptLoader('https://sdk.amazonaws.com/js/aws-sdk-2.2.32.min.js');

function scriptLoader(path, callback) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.async = true;
    script.src = path;
    script.onload = function () {
        if (typeof (callback) == "function") {
            callback();
        }
    }
    try {
        var scriptOne = document.getElementsByTagName('script')[0];
        scriptOne.parentNode.insertBefore(script, scriptOne);
    }
    catch (e) {
        document.getElementsByTagName("head")[0].appendChild(script);
    }
}






//var back = 1;
//var paree;
//alert(paree);

var wup = localStorage.getItem("ad");
//alert(wup);
if (wup == null) {
    var i = '100';
    // alert("null value is" + i);
    localStorage.setItem("ad", i);
    var ses = localStorage.getItem("session");
    if (ses == null) {
        ses = 1;
        localStorage.setItem("session", ses);
    }
    //else {
    //    ses++;
    //  localStorage.setItem("session", ses);
    //  }

}
else {

    var i = localStorage.getItem("ad");
    //alert("Not null iss" + i);


}

if (ses == 1) {

    var uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);
    localStorage.setItem("userID", uniqueId);

}


//alert(uniqueId);


localStorage.setItem("alpha", '1');

x = localStorage.getItem("abcs");
y = localStorage.getItem("ref");

bfcl = localStorage.getItem("prepage");
//alert(x);
//alert(bfcl);



if ((bfcl != window.location.href)) {
    //alert(bfcl);
    //alert(window.location.href);
    // alert("hi");
    if (y == 'undefined') {
        //alert("undefined");
        y = window.location.href;

        //for href not in current html data not stored
    }
}

setTimeout(myFunction, 500);
function myFunction() {
    // alert('Hello');
    if ((x != null) && (y != null) && (y != 'undefined')) {
        // alert(x);
        //  alert(y);
        // alert(y);
        //alert("gee");




        var ddb = MyMy();
        // alert(ddb);
        // alert(ddb);

        var un = localStorage.getItem("userID");
        // alert(un);

        //  'hello': {S:target.href},

        var sesq = localStorage.getItem("session");
        //  alert(sesq);



        var ddee = Date.now();
        // alert(ddee);
        localStorage.setItem("datee", ddee);
        var dat = localStorage.getItem("datee");
        //  alert(dat);


        var today = new Date();
        var datee = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

        var timee = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();



        var headings = document.evaluate(".//h2", document, null, XPathResult.ANY_TYPE, null);
        /* Search the document for all h2 elements.
         * The result will likely be an unordered node iterator. */
        var thisHeading = headings.iterateNext();
        var alertText = "";
        while (thisHeading) {
            alertText += thisHeading.textContent;
            thisHeading = headings.iterateNext();
        }

        // alert(alertText);

        var t = localStorage.getItem("xpath35");
        var g = localStorage.getItem("elementtype");
        var j = localStorage.getItem("tags");
        var l = localStorage.getItem("beforeclickUrl");
        var nee2 = localStorage.getItem("charlen");

        var hgty = nee2.toString();




        var params = {
            TableName: 'workflows',
            Item: {
                'id': { S: dat },
                'Userid': { S: un },
                'clickedtext': { S: x },
                'countclick': { S: dat + '-' + i },
                'typed': { S: '' },
                // 'sessi': { S: sesq },
                'date': { S: datee + ' ' + timee },
                'time': { S: timee },
                'heading': { S: alertText },
                'Path': { S: t },
                'charlen': { S: nee2 },
                'ElementType': { S: g },
                'tags': { S: j },
                'BeforeclickURL': { S: l },
                'AfterclickURL': { S: y }

            }
        };




        ddb.putItem(params, function (err, data) {
            if (err) {
                console.log("Error", err);
                //  alert("eror");
            } else {
                console.log("Success", data);
                //    i++;
                //   alert("success");
                var x = parseInt(i);
                var x = x + 1;

                i = x.toString();
                localStorage.setItem("ad", i);

                //   alert(i);

            }
        });





        localStorage.removeItem("abcs");
        localStorage.removeItem("ref");

    }
}


document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
    var modtext;
    var nee = text.length;
    var hgty = nee.toString();
    //alert(hgty);
    //alert(nee);


    // alert(e.target);

    //alert(e.target.parentNode.nodename);

    //  alert(e.target.parentNode.parentNode.nodeName);

    //  alert(e.target.parentNode.parentNode.href);


    //alert(e.target.parentNode.innerText);
    //  alert("hello");
    /* if ((e.target.parentNode) != null) {
         var meh = e.target.parentNode.innerText;
         alert("hel");
         alert(meh);
     }*/
    var zebra = e.target.innerText;
    //alert(zebra);
    var derd;
    var ghty = '';

    if (e.target.nodeName == 'SELECT') {

        var htu = localStorage.getItem("selectval");
        //alert(htu);
        if (htu == e.target.value) {

            ghty = "jag";

        }


        //  alert(e.target.value);
        //alert(e.target.id);
        if (((e.target.id) != null) && ((e.target.id) != '')) {
            derd = e.target.id + " -" + e.target.value;

        }
        else if (((e.target.name) != null) && ((e.target.name) != '')) {
            derd = e.target.name + " -" + e.target.value;
            //localStorage.setItem("selectval", derd);
        }
        else if (((e.target.className) != null) && ((e.target.className) != '')) {
            derd = e.target.className + " -" + e.target.value;
            //localStorage.setItem("selectval", derd);
        }
        else {
            derd = e.target.value;
        }
        localStorage.setItem("selectval", e.target.value);
        modtext = derd;

    }

    //alert(text);


    if (e.target.type == "radio") {
        if (((e.target.name) != null) && ((e.target.value) != null)) {
            //alert(text);
            modtext = e.target.name + "-" + e.target.value;
            //alert(e.target.value);
            //    alert("hi1");
        }
        else {
            modtext = "Userclicked radio button";
        }
    }


    if (e.target.type == "checkbox") {
        if (((e.target.name) != null) && ((e.target.value) != null)) {
            //alert(text);
            modtext = e.target.name + "-" + e.target.value;
            //alert(e.target.value);
            //    alert("hi1");
        }
        else {
            modtext = "Userclicked checkbox  button";
        }
    }


    if (e.target.nodeName == 'LABEL') {
        //alert("radio");
        localStorage.setItem("radcheck", e.target.nodeName);
        // Note this label value can be used  in radio and checkboxes
    }

    //alert(e.target.parentNode.parentNode.childNodes[1].innerText);
    /*
    
  //  alert(modtext);
  */


    var ddb = MyMy();

    // alert(nee);
    if ((e.target.nodeName != 'SELECT') && (e.target.type != "radio") && (e.target.type != "checkbox")) {
        //alert(e.target.type);
        // alert(e.target.previousElementSibling);
        if ((nee > 0) && (nee <= 30)) {
            /*
            if ((meh != '') && (meh != 'undefined') && (meh != null))
            {
               alert(meh);
                modtext = "label name is-" + meh + " " + "clickedtext-" + text;
            }
            else {
                modtext = text;
            }*/
            //alert("hi");

            //  alert("hi2");

            if (e.target.previousElementSibling == null) {
                modtext = text;
                // alert("sibing is null");
            }
            else if ((e.target.previousElementSibling.type != "radio") && (e.target.previousElementSibling.type != "checkbox")) {
                //alert("sibiling not radio and check");
                modtext = text;

            }

            //   modtext = text;

        }
        else if (nee > 30) {

            if (e.target.previousElementSibling == null) {
                modtext = text.substring(0, 30);
                // alert("sibing is null");
            }
            else if ((e.target.previousElementSibling.type != "radio") && (e.target.previousElementSibling.type != "checkbox")) {
                //alert("sibiling not radio and check");
                modtext = text.substring(0, 30);

            }
            // modtext = text.substring(0, 30);
        }
        else if (nee == 0) {
            //   alert("empty text");

        }
    }

    //  alert(modtext);


    // alert(ddb);


    //  localStorage.setItem("alpha", '1');

    var un = localStorage.getItem("userID");
    //   alert(un);


    var sesq = localStorage.getItem("session");
    //   alert(sesq);

    // alert(ddb);



    var hreff = window.location.href;
    //  alert(hreff);

    //  'hello': {S:target.href},

    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


    var headings = document.evaluate(".//h2", document, null, XPathResult.ANY_TYPE, null);
    /* Search the document for all h2 elements.
     * The result will likely be an unordered node iterator. */
    var thisHeading = headings.iterateNext();
    var alertText = "";
    while (thisHeading) {
        alertText += thisHeading.textContent;
        thisHeading = headings.iterateNext();
    }

    // alert(alertText);


    var currentNode,
        ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);

    var sample = "Current elements are: ";

    while (currentNode = ni.nextNode()) {
        sample += currentNode.nodeName + " , ";
        //  alert(currentNode.nodeName);
    }



    var root = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;
    var mxy = [event.clientX + root.scrollLeft, event.clientY + root.scrollTop];
    // ref:https://stackoverflow.com/questions/2631820/how-do-i-ensure-saved-click-coordinates-can-be-reloaed-to-the-same-place-even-i/2631931#2631931
    var path = getPathTo(target);


    if (e.target.previousElementSibling != null) {
        var crick = e.target.previousElementSibling.textContent;
    }
    else {
        var crick = '';
    }


    if ((e.target.nodeName != 'SELECT') && (e.target.type != "radio") && (e.target.type != "checkbox")) {

        //alert(text);
        if (nee == 0) {
            //alert(e.target.placeholder);
            // alert("text is empty");
            // alert(e.target.nodeName);
            if (e.target.nodeName == 'INPUT') {
                //   alert("input  was clicked");

                //alert(e.target.previousElementSibling.nodeName);
                // alert(crick);
                if ((crick != '') && (crick != 'undefined') && (crick != null)) { //alert("hi");

                    modtext = crick;
                }
                else if ((e.target.placeholder != null) && (e.target.placeholder != '') && (e.target.placeholder != 'undefined')) {
                    var gh = e.target.placeholder;
                    // gh = "placeholder -" + " -" + gh;
                    //alert(gh);
                    modtext = gh;
                }
                else if ((e.target.className != null) && (e.target.className != '') && (e.target.className != 'undefined')) {
                    var gh = e.target.className;
                    //gh = "classid of input is" + " -" + gh;
                    // alert(gh);
                    modtext = gh;
                }
                else if ((e.target.id != null) && (e.target.id != '') && (e.target.id != 'undefined')) {
                    var gh = e.target.id;
                    // gh = "User entered id" + " -" + gh;
                    // alert(gh);
                    modtext = gh;
                }
                else {
                    modtext = "typedsomething by user";
                }

            }

            else if (e.target.nodeName == 'IMG') {
                var gh = e.target.src;
                // gh = "User clicked image and source is" + " -" + gh;
                //   alert(gh);
                modtext = gh;
            }
            else if (text == 'undefined') {
                var gh = e.target.className;
                if (e.target.className != null) {
                    modtext = gh;
                }
                else {
                    modtext = "No text in element clicked";
                }

            }
            else if (text == '') {
                var gh = e.target.className;
                if (e.target.className != null) {
                    modtext = gh;
                }
                else {
                    modtext = "No text in element clicked";
                }
            }
        }

    }






    var ddee = Date.now();
    //  alert(ddee);
    localStorage.setItem("datee", ddee);
    var dat = localStorage.getItem("datee");
    //   alert(dat);

    if (target.href == undefined) {
        //  alert("ref is not defiend");
        if ((e.target.parentNode.nodeName) == 'A') { localStorage.setItem("ref", e.target.parentNode.href); }

        else if ((e.target.parentNode.parentNode.nodeName) == 'A') { localStorage.setItem("ref", e.target.parentNode.parentNode.href); }

        //alert(e.target.parentNode.parentNode.nodeName);

        //alert(e.target.parentNode.parentNode.href);
    }
    else { localStorage.setItem("ref", target.href); }







    localStorage.setItem("abcs", modtext);
    // localStorage.setItem("ref", target.href);
    localStorage.setItem("path", path);
    localStorage.setItem("elementtype", e.target.nodeName);
    localStorage.setItem("tags", sample);
    //alert(window.location.href);
    // alert(target.href);
    localStorage.setItem("beforeclickUrl", window.location.href);
    localStorage.setItem("charlen", nee);



    localStorage.setItem("prepage", window.location.href);




    


    for (var q = 0, atts = e.target.attributes, kjh = atts.length, arr = []; q < kjh; q++) {
        arr.push(atts[q].nodeName);
        // alert(atts[i].nodeName);
        if ((atts[q].nodeName) == 'id') {
           
            localStorage.setItem("id", atts[q].nodeName);
        }
        else if ((atts[q].nodeName) == 'src')
        {
            localStorage.setItem("firstattribute", atts[q].nodeName);
            localStorage.setItem("firstvalue", atts[q].nodeValue);

        }
        else if ((atts[q].nodeName) == 'placeholder')
        {
            localStorage.setItem("firstattribute", atts[q].nodeName);
            localStorage.setItem("firstvalue", atts[q].nodeValue);

        }
        else {
            // alert(atts[0].nodeName);
            localStorage.setItem("firstattribute2", atts[0].nodeName);
        }
    }




    if ((localStorage.getItem("id")) != null) {
        //alert("hello");
        if ((text != null)) {
            //alert("not defined1");
            if (e.target.previousElementSibling != null) {
              
                if ((e.target.previousElementSibling.attributes[0]) != undefined) {
                    //alert("not defined3");
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("id") + "=" + "'" + e.target.id + "'" + " " + "and" + " " + "contains(text()," + "'" + text + "'" + ")]" + "[preceding-sibling::" + e.target.previousElementSibling.nodeName + "[@" + e.target.previousElementSibling.attributes[0].nodeName + "=" + "'" + e.target.previousElementSibling.attributes[0].nodeValue + "'" + "]" + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);

                }
                else {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("id") + "=" + "'" + e.target.id + "'" + " " + "and" + " " + "contains(text()," + "'" + text + "'" + ")]" + "[preceding-sibling::" + e.target.previousElementSibling.nodeName + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
            }
            else if (e.target.nextElementSibling != null) {
                if ((e.target.nextElementSibling.attributes[0]) != undefined) {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("id") + "=" + "'" + e.target.id + "'" + " " + "and" + " " + "contains(text()," + "'" + text + "'" + ")]" + "[following-sibling::" + e.target.nextElementSibling.nodeName + "[@" + e.target.nextElementSibling.attributes[0].nodeName + "=" + "'" + e.target.nextElementSibling.attributes[0].nodeValue + "'" + "]" + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
                else {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("id") + "=" + "'" + e.target.id + "'" + " " + "and" + " " + "contains(text()," + "'" + text + "'" + ")]" + "[following-sibling::" + e.target.nextElementSibling.nodeName + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
            }
            else {
                if ((e.target.parentNode.attributes[0]) != undefined) {
                    var xpath35 = "xpath" + "=" + "//ancestor::" + e.target.parentNode.nodeName + "[1]" + "[@" + e.target.parentNode.attributes[0].nodeName + "=" + "'" + e.target.parentNode.attributes[0].nodeValue + "'" + "]" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("id") + "=" + "'" + e.target.id + "'" + "and" + " " + "contains(text()," + "'" + text + "'" + ")]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
                else {
                    var xpath35 = "xpath" + "=" + "//ancestor::" + e.target.parentNode.nodeName + "[1]" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("id") + "=" + "'" + e.target.id + "'" + "and" + " " + "contains(text()," + "'" + text + "'" + ")]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);

                }
            }


        }

        else {
            if (e.target.previousElementSibling != null) {
                // alert("not defined2");
                //  alert(e.target.previousElementSibling.attributes[0]);
                if ((e.target.previousElementSibling.attributes[0]) != undefined) {
                    //alert("not defined3");
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("id") + "=" + "'" + e.target.id + "'" + "]" + "[preceding-sibling::" + e.target.previousElementSibling.nodeName + "[@" + e.target.previousElementSibling.attributes[0].nodeName + "=" + "'" + e.target.previousElementSibling.attributes[0].nodeValue + "'" + "]" + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);

                }
                else {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("id") + "=" + "'" + e.target.id + "'" + "]" + "[preceding-sibling::" + e.target.previousElementSibling.nodeName + "]";
                    // alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
            }
            else if (e.target.nextElementSibling != null) {
                if ((e.target.nextElementSibling.attributes[0]) != undefined) {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("id") + "=" + "'" + e.target.id + "'" + "]" + "[following-sibling::" + e.target.nextElementSibling.nodeName + "[@" + e.target.nextElementSibling.attributes[0].nodeName + "=" + "'" + e.target.nextElementSibling.attributes[0].nodeValue + "'" + "]" + "]";
                    // alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
                else {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("id") + "=" + "'" + e.target.id + "'" + "]" + "[following-sibling::" + e.target.nextElementSibling.nodeName + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
            }
            else {
                if ((e.target.parentNode.attributes[0]) != undefined) {
                    var xpath35 = "xpath" + "=" + "//ancestor::" + e.target.parentNode.nodeName + "[1]" + "[@" + e.target.parentNode.attributes[0].nodeName + "=" + "'" + e.target.parentNode.attributes[0].nodeValue + "'" + "]" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("id") + "=" + "'" + e.target.id + "'" + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
                else {
                    var xpath35 = "xpath" + "=" + "//ancestor::" + e.target.parentNode.nodeName + "[1]" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("id") + "=" + "'" + e.target.id + "'" + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);

                }
            }


        }
        localStorage.removeItem("id");
        localStorage.removeItem("firstattribute");
    }
    else if ((localStorage.getItem("firstattribute")) != null) {
        // alert(mkf);

        if ((text != null)) {
            //alert("not defined1");
            if (e.target.previousElementSibling != null) {
                // alert("not defined2");
                //  alert(e.target.previousElementSibling.attributes[0]);
                if ((e.target.previousElementSibling.attributes[0]) != undefined) {
                    //alert("not defined3");
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute") + "=" + "'" + localStorage.getItem("firstvalue") + "'" + " " + "and" + " " + "contains(text()," + "'" + text + "'" + ")]" + "[preceding-sibling::" + e.target.previousElementSibling.nodeName + "[@" + e.target.previousElementSibling.attributes[0].nodeName + "=" + "'" + e.target.previousElementSibling.attributes[0].nodeValue + "'" + "]" + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);

                }
                else {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute") + "=" + "'" + localStorage.getItem("firstvalue") + "'" + " " + "and" + " " + "contains(text()," + "'" + text + "'" + ")]" + "[preceding-sibling::" + e.target.previousElementSibling.nodeName + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
            }
            else if (e.target.nextElementSibling != null) {
                if ((e.target.nextElementSibling.attributes[0]) != undefined) {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute") + "=" + "'" + localStorage.getItem("firstvalue") + "'" + " " + "and" + " " + "contains(text()," + "'" + text + "'" + ")]" + "[following-sibling::" + e.target.nextElementSibling.nodeName + "[@" + e.target.nextElementSibling.attributes[0].nodeName + "=" + "'" + e.target.nextElementSibling.attributes[0].nodeValue + "'" + "]" + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
                else {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute") + "=" + "'" + localStorage.getItem("firstvalue") + "'" + " " + "and" + " " + "contains(text()," + "'" + text + "'" + ")]" + "[following-sibling::" + e.target.nextElementSibling.nodeName + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
            }
            else {
                if ((e.target.parentNode.attributes[0]) != undefined) {
                    var xpath35 = "xpath" + "=" + "//ancestor::" + e.target.parentNode.nodeName + "[1]" + "[@" + e.target.parentNode.attributes[0].nodeName + "=" + "'" + e.target.parentNode.attributes[0].nodeValue + "'" + "]" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute") + "=" + "'" + localStorage.getItem("firstvalue") + "'" + "and" + " " + "contains(text()," + "'" + text + "'" + ")]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
                else {
                    var xpath35 = "xpath" + "=" + "//ancestor::" + e.target.parentNode.nodeName + "[1]" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute") + "=" + "'" + localStorage.getItem("firstvalue") + "'" + "and" + " " + "contains(text()," + "'" + text + "'" + ")]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);

                }
            }

        }

        else {
            if (e.target.previousElementSibling != null) {
                // alert("not defined2");
                //  alert(e.target.previousElementSibling.attributes[0]);
                if ((e.target.previousElementSibling.attributes[0]) != undefined) {
                    //alert("not defined3");
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute") + "=" + "'" + localStorage.getItem("firstvalue") + "'" + "]" + "[preceding-sibling::" + e.target.previousElementSibling.nodeName + "[@" + e.target.previousElementSibling.attributes[0].nodeName + "=" + "'" + e.target.previousElementSibling.attributes[0].nodeValue + "'" + "]" + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);

                }
                else {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute") + "=" + "'" + localStorage.getItem("firstvalue") + "'" + "]" + "[preceding-sibling::" + e.target.previousElementSibling.nodeName + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
            }
            else if (e.target.nextElementSibling != null) {
                if ((e.target.nextElementSibling.attributes[0]) != undefined) {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute") + "=" + "'" + localStorage.getItem("firstvalue") + "'" + "]" + "[following-sibling::" + e.target.nextElementSibling.nodeName + "[@" + e.target.nextElementSibling.attributes[0].nodeName + "=" + "'" + e.target.nextElementSibling.attributes[0].nodeValue + "'" + "]" + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
                else {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute") + "=" + "'" + localStorage.getItem("firstvalue") + "'" + "]" + "[following-sibling::" + e.target.nextElementSibling.nodeName + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
            }
            else {
                if ((e.target.parentNode.attributes[0]) != undefined) {
                    var xpath35 = "xpath" + "=" + "//ancestor::" + e.target.parentNode.nodeName + "[1]" + "[@" + e.target.parentNode.attributes[0].nodeName + "=" + "'" + e.target.parentNode.attributes[0].nodeValue + "'" + "]" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute") + "=" + "'" + localStorage.getItem("firstvalue") + "'" + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
                else {
                    var xpath35 = "xpath" + "=" + "//ancestor::" + e.target.parentNode.nodeName + "[1]" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute") + "=" + "'" + localStorage.getItem("firstvalue") + "'" + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);

                }
            }


        }

        localStorage.removeItem("firstattribute");
        localStorage.removeItem("firstvalue");
    }
    else if ((localStorage.getItem("firstattribute2")) != null) {
        // alert(mkf);

        if ((text != null)) {
            //alert("not defined1");
            if (e.target.previousElementSibling != null) {
                // alert("not defined2");
                //  alert(e.target.previousElementSibling.attributes[0]);
                if ((e.target.previousElementSibling.attributes[0]) != undefined) {
                    //alert("not defined3");
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute2") + "=" + "'" + atts[0].nodeValue + "'" + " " + "and" + " " + "contains(text()," + "'" + text + "'" + ")]" + "[preceding-sibling::" + e.target.previousElementSibling.nodeName + "[@" + e.target.previousElementSibling.attributes[0].nodeName + "=" + "'" + e.target.previousElementSibling.attributes[0].nodeValue + "'" + "]" + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);

                }
                else {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute2") + "=" + "'" + atts[0].nodeValue + "'" + " " + "and" + " " + "contains(text()," + "'" + text + "'" + ")]" + "[preceding-sibling::" + e.target.previousElementSibling.nodeName + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
            }
            else if (e.target.nextElementSibling != null) {
                if ((e.target.nextElementSibling.attributes[0]) != undefined) {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute2") + "=" + "'" + atts[0].nodeValue + "'" + " " + "and" + " " + "contains(text()," + "'" + text + "'" + ")]" + "[following-sibling::" + e.target.nextElementSibling.nodeName + "[@" + e.target.nextElementSibling.attributes[0].nodeName + "=" + "'" + e.target.nextElementSibling.attributes[0].nodeValue + "'" + "]" + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
                else {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute2") + "=" + "'" + atts[0].nodeValue + "'" + " " + "and" + " " + "contains(text()," + "'" + text + "'" + ")]" + "[following-sibling::" + e.target.nextElementSibling.nodeName + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
            }
            else {
                if ((e.target.parentNode.attributes[0]) != undefined) {
                    var xpath35 = "xpath" + "=" + "//ancestor::" + e.target.parentNode.nodeName + "[1]" + "[@" + e.target.parentNode.attributes[0].nodeName + "=" + "'" + e.target.parentNode.attributes[0].nodeValue + "'" + "]" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute2") + "=" + "'" + atts[0].nodeValue + "'" + "and" + " " + "contains(text()," + "'" + text + "'" + ")]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
                else {
                    var xpath35 = "xpath" + "=" + "//ancestor::" + e.target.parentNode.nodeName + "[1]" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute2") + "=" + "'" + atts[0].nodeValue + "'" + "and" + " " + "contains(text()," + "'" + text + "'" + ")]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);

                }
            }

        }

        else {
            if (e.target.previousElementSibling != null) {
                // alert("not defined2");
                //  alert(e.target.previousElementSibling.attributes[0]);
                if ((e.target.previousElementSibling.attributes[0]) != undefined) {
                    //alert("not defined3");
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute2") + "=" + "'" + atts[0].nodeValue + "'" + "]" + "[preceding-sibling::" + e.target.previousElementSibling.nodeName + "[@" + e.target.previousElementSibling.attributes[0].nodeName + "=" + "'" + e.target.previousElementSibling.attributes[0].nodeValue + "'" + "]" + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);

                }
                else {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute2") + "=" + "'" + atts[0].nodeValue + "'" + "]" + "[preceding-sibling::" + e.target.previousElementSibling.nodeName + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
            }
            else if (e.target.nextElementSibling != null) {
                if ((e.target.nextElementSibling.attributes[0]) != undefined) {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute2") + "=" + "'" + atts[0].nodeValue + "'" + "]" + "[following-sibling::" + e.target.nextElementSibling.nodeName + "[@" + e.target.nextElementSibling.attributes[0].nodeName + "=" + "'" + e.target.nextElementSibling.attributes[0].nodeValue + "'" + "]" + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
                else {
                    var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute2") + "=" + "'" + atts[0].nodeValue + "'" + "]" + "[following-sibling::" + e.target.nextElementSibling.nodeName + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
            }
            else {
                if ((e.target.parentNode.attributes[0]) != undefined) {
                    var xpath35 = "xpath" + "=" + "//ancestor::" + e.target.parentNode.nodeName + "[1]" + "[@" + e.target.parentNode.attributes[0].nodeName + "=" + "'" + e.target.parentNode.attributes[0].nodeValue + "'" + "]" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute2") + "=" + "'" + atts[0].nodeValue + "'" + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);
                }
                else {
                    var xpath35 = "xpath" + "=" + "//ancestor::" + e.target.parentNode.nodeName + "[1]" + "//" + e.target.nodeName + "[" + "@" + localStorage.getItem("firstattribute2") + "=" + "'" + atts[0].nodeValue + "'" + "]";
                    //alert(xpath35);

                    localStorage.setItem("xpath35", xpath35);

                }
            }


        }

        localStorage.removeItem("firstattribute2");
    }

    else if ((text != null)) {
        if (e.target.previousElementSibling != null) {
            // alert("not defined2");
            //  alert(e.target.previousElementSibling.attributes[0]);
            if ((e.target.previousElementSibling.attributes[0]) != undefined) {
                //alert("not defined3");
                var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "contains(text()," + "'" + text + "'" + ")]" + "[preceding-sibling::" + e.target.previousElementSibling.nodeName + "[@" + e.target.previousElementSibling.attributes[0].nodeName + "=" + "'" + e.target.previousElementSibling.attributes[0].nodeValue + "'" + "]" + "]";
                //alert(xpath35);

                localStorage.setItem("xpath35", xpath35);

            }
            else {
                var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "contains(text()," + "'" + text + "'" + ")]" + "[preceding-sibling::" + e.target.previousElementSibling.nodeName + "]";
                //alert(xpath35);

                localStorage.setItem("xpath35", xpath35);
            }
        }
        else if (e.target.nextElementSibling != null) {
            if ((e.target.nextElementSibling.attributes[0]) != undefined) {
                var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "contains(text()," + "'" + text + "'" + ")]" + "[following-sibling::" + e.target.nextElementSibling.nodeName + "[@" + e.target.nextElementSibling.attributes[0].nodeName + "=" + "'" + e.target.nextElementSibling.attributes[0].nodeValue + "'" + "]" + "]";
                //alert(xpath35);

                localStorage.setItem("xpath35", xpath35);
            }
            else {
                var xpath35 = "xpath" + "=" + "//" + e.target.nodeName + "[" + "contains(text()," + "'" + text + "'" + ")]" + "[following-sibling::" + e.target.nextElementSibling.nodeName + "]";
                // alert(xpath35);

                localStorage.setItem("xpath35", xpath35);
            }
        }
        else {
            if ((e.target.parentNode.attributes[0]) != undefined) {
                var xpath35 = "xpath" + "=" + "//ancestor::" + e.target.parentNode.nodeName + "[1]" + "[@" + e.target.parentNode.attributes[0].nodeName + "=" + "'" + e.target.parentNode.attributes[0].nodeValue + "'" + "]" + "//" + e.target.nodeName + "[" + "contains(text()," + "'" + text + "'" + ")]";
                //alert(xpath35);

                localStorage.setItem("xpath35", xpath35);
            }
            else {
                var xpath35 = "xpath" + "=" + "//ancestor::" + e.target.parentNode.nodeName + "[1]" + "//" + e.target.nodeName + "[" + "contains(text()," + "'" + text + "'" + ")]";
                //alert(xpath35);

                localStorage.setItem("xpath35", xpath35);

            }
        }


    }
    else {
        var xpath35 = "No path found";
    }

    


    if (((e.target.nodeName) != 'SELECT') && ((e.target.type) != "radio") && (e.target.type != "checkbox")) {
        e.target.oninput = function () { myFunction() };
    }


    function myFunction() {
        var typ = e.target.value;
        //  alert(typ);
        var spliturl = window.location.href;
        var n = spliturl.split(/[.\s/]/);
        // alert(n);
        for (var m = 0; m < n.length; m++) {
            // alert(n[m]);
            if ((n[m] == 'login') || (n[m] == 'signin') || (n[m] == 'signup')) {

                typ = 'xxxxxxxx'
            }
            else {
                var str = typ;
                var res = str.substring(str.length - 3, str.length);
                var res2 = str.substring(0, 2);
                // document.getElementById("demo").innerHTML = res;
                if ((res == "com") || (res == "edu")) { typ = 'xxxxxx.com'; }
                if ((res2 == "04")) { typ = '04xxxxxxxx'; }
            }
        }










        var str = typ;
        var res = str.substring(str.length - 3, str.length);
        var res2 = str.substring(0, 2);
        // document.getElementById("demo").innerHTML = res;
        if ((res == "com") || (res == "edu")) { typ = 'xxxxxx.com'; }
        if ((res2 == "04")) { typ = '04xxxxxxxx'; }




        back = 2;


        var params = {
            TableName: 'workflows',
            Item: {
                'id': { S: dat },
                'Userid': { S: un },
                // 'sessi': { S: sesq },
                'countclick': { S: dat + ' - ' + i },
                'typed': { S: typ },
                'clickedtext': { S: modtext },
                'date': { S: date + ' ' + time },
                'time': { S: time },
                'Path': { S: xpath35 },
                'heading': { S: alertText },
                'AfterclickURL': { S: window.location.href },
                'BeforeclickURL': { S: window.location.href },
                'ElementType': { S: e.target.nodeName },
                'charlen': { S: hgty },
                'tags': { S: sample }
            }
        };

        //var x = localStorage.getItem("ad");
        // alert(x);


        ddb.putItem(params, function (err, data) {
            if (err) {
                console.log("Error", err);
                // alert("eror");
            } else {
                console.log("Success", data);
                // alert("success");
                //    i++;

                var x = parseInt(i);
                var x = x + 1;

                i = x.toString();
                localStorage.setItem("ad", i);
                //   alert(i);

            }
        });


        var x = parseInt(i);
        var x = x + 1;

        i = x.toString();


    }




    var params = {
        TableName: 'workflows',
        Item: {
            'id': { S: dat },
            'Userid': { S: un },
            // 'sessi': { S: sesq },
            'countclick': { S: dat + ' - ' + i },
            'clickedtext': { S: modtext },
            'date': { S: date + ' ' + time },
            'time': { S: time },
            'Path': { S: xpath35 },
            'typed': { S: '' },
            'heading': { S: alertText },
            'AfterclickURL': { S: window.location.href },
            'BeforeclickURL': { S: window.location.href },
            'ElementType': { S: e.target.nodeName },
            'charlen': { S: hgty },
            'tags': { S: sample }
        }
    };

    //var x = localStorage.getItem("ad");
    // alert(x);

    if (ghty != "jag") {
        ddb.putItem(params, function (err, data) {
            if (err) {
                console.log("Error", err);
                //  alert("eror");
            } else {
                console.log("Success", data);

                //    i++;
                //  alert("success");

                var x = parseInt(i);
                var x = x + 1;

                i = x.toString();
                localStorage.setItem("ad", i);
                ghty = '';
                //  alert(i);

            }
        });
    }



}, false);




function getPathTo(element) {
    if (element.id !== '')
        return 'id("' + element.id + '")';
    if (element === document.body)
        return element.tagName;

    var ix = 0;
    var siblings = element.parentNode.childNodes;
    for (var i = 0; i < siblings.length; i++) {
        var sibling = siblings[i];
        if (sibling === element)
            return getPathTo(element.parentNode) + '/' + element.tagName + '[' + (ix + 1) + ']';
        if (sibling.nodeType === 1 && sibling.tagName === element.tagName) //&amp;&amp;
            ix++;
    }
}


function MyMy() {
    // scriptLoader('https://sdk.amazonaws.com/js/aws-sdk-2.2.32.min.js');
    // Initialize the Amazon Cognito credentials provider
    // Initialize the Amazon Cognito credentials provider
    AWS.config.region = 'us-east-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    });

    var ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

    return ddb;
}


  //]]>// 
