$( "#accordion-menu" ).accordion();

$(function() {
    $( "#accordion-menu" ).accordion({
        collapsible:true
    });
     $( "#accordion-menu" ).accordion({
         header:"ui-icon-triangle-1-e",
         activeHeader: "ui-icon-triangle-1-s"
     });   
 });