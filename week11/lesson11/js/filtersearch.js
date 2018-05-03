(function(){
    var $imgs = $('#imgs img');
    var $butts = $('#butts');
    var tagged = {};
    var $search = $('#search');
    var cache = [];

    $imgs.each(function(){
        cache.push({
            element: this,
            text: this.alt.trim().toLowerCase()
        });

        var img = this;
        var tags = $(this).data('tags');

        if (tags) {
            tags.split(',').forEach(function(tagName){
                if (tagged[tagName] == null){
                    tagged[tagName] = [];
                }
                tagged[tagName].push(img);
            });
        }
    });

    console.log(tagged);

    $('<button>', {
        text: 'All',
        class: 'active',
        click: function(){
            $(this).addClass('active').siblings().removeClass('active');
            $imgs.show();
        }
    }).appendTo($butts);

    $.each(tagged, function(tagName){
        $('<button>', {
            text: tagName + ' (' + tagged[tagName].length + ')',
            click: function(){
                $(this).addClass('active').siblings().removeClass('active');
            $imgs.hide().filter(tagged[tagName]).show();
            }
        }).appendTo($butts);
    });

    function filter(){
        var query = this.value.trim().toLowerCase();
        cache.forEach(function(img){
            var index = 0;

            if (query) {
                index = img.text.indexOf(query);
            }

            img.element.style.display = index === -1 ? 'none' : '';
        });
    }

    if ('oninput' in $search[0]) {
        $search.on('input', filter);
    } else {
        $search.on('keyup', filter)
    }

}());