var modal = (function() {
    var $window = $(window);
    var $modal = $('<div class="modal"/>');
    var $content = $('<div class="modal-content"/>');
    var $close = $('<button role="button" class="modal-close">close</button>');

    $modal.append($content, $close);     

    $close.on('click', function(e){    
        e.preventDefault();   
        modal.close(); 
    });

    return {     
        position: function() {  
            var top = 100;
            var left = 150;

            $modal.css({  
                top:top + $window.scrollTop(),  
                left:left + $window.scrollLeft() 
            });
        },
        open: function(settings) {
            $content.empty().append(settings.content); 

            $modal.css({
                width: settings.width || 'auto',
                height: settings.height || 'auto'
            }).appendTo('body');

            modal.position();
            $(window).on('resize', modal.position);
        },
        close: function() {  
            $content.empty();
            $modal.detach();
            $(window).off('resize', modal.position); 
        }
    };
}());

