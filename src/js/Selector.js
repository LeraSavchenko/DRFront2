$('select').each(function(){
            var $this = $(this), numberOfOptions = $(this).children('option').length;

            $this.addClass('select-hidden');
            $this.wrap('<div class="select"></div>');
            $this.after('<div class="select-styled"></div>');

            var $styledSelect = $this.next('div.select-styled');
            $styledSelect.text($this.children('option').eq(0).text());

            var $list = $('<ul />', {
                'class': 'select-options'
            }).insertAfter($styledSelect);

            for (var i = 0; i < numberOfOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val(),
                    id: i
                }).appendTo($list);
            }

            var $listItems = $list.children('li');

            $styledSelect.click(function(e) {
                e.stopPropagation();
                $('div.select-styled.active').not(this).each(function(){
                    $(this).removeClass('active').next('ul.select-options.active').removeClass('active').hide();
                });
                $(this).toggleClass('active').next('ul.select-options').toggleClass('active').toggle();
            });
            var i=-1;
            $(document).keydown(function(e){
                e.preventDefault();
                switch (e.keyCode){
                    case 38:
                        $list.children('li').eq(i).removeClass();
                        if(i>0)
                            --i;
                        $list.children('li').eq(i).addClass('selected');
                        break;
                    case 40:
                        $list.children('li').eq(i).removeClass();
                        if(i<$listItems.length)
                        {
                            ++i;
                        }
                        $list.children('li').eq(i).addClass('selected');
                        break;
                    case 13:
                        if($list.hasClass('active')){
                            e.stopPropagation();
                            $styledSelect.text($list.children(".selected").text()).removeClass('active').next('ul.select-options.active').removeClass('active');
                            $this.val($(this).attr('rel'));
                            $list.hide();
                        }
                        break;
                    case 27:
                        $styledSelect.removeClass('active').next('ul.select-options.active').removeClass('active');
                        $list.hide();
                        break;
                }
            });
            $listItems.click(function(e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active').next('ul.select-options.active').removeClass('active');
                $this.val($(this).attr('rel'));
                $list.hide();
                //console.log($this.val());
            });

            $(document).click(function() {
                $styledSelect.removeClass('active').next('ul.select-options.active').removeClass('active');
                $list.hide();
            });

});