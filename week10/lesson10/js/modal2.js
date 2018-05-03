(function(){
    var $content = $('#picture_large').detach(); 

    $('#picture').on('click', function() {          
        modal.open({content: $content, width:"75%", height:"75%"});
    });
}());