$(document)
    .ready(function () {

        var total = 0;

        var sum = function () {
            var formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            });
            var prices = $('.item-price');
            var qty = $('.quantity');
            total = 0;

            for (i = 0; i < qty.length; i++) {
                var price = Number($(prices[i])
                    .text()
                   .replace(/\$/, ''));
                
                var subtotal = (Number($(qty[i])
                    .val())) * price;
                var convSubtotal = formatter.format(subtotal);
                if (subtotal != 0) {
                    $($('.item-subtotal')[i])
                        .text(convSubtotal);
                } else {
                    $($('.item-subtotal')[i])
                        .text("$--.--");
                }
                total += subtotal;
                var finalTotal = formatter.format(total);
            }

            $('#total-price')
                .text(finalTotal);
        } 
            

        var addProduct = function (name, price) {
            name = name.charAt(0)
                .toUpperCase() + name.slice(1);
            $('#item-list')
                .prepend('<div class="row product"> \
                <div class="item-name col-xs-3"> \ ' + name + '\
                </div> \
                <div class="item-price col-xs-3"> \
                $' + price + ' \
                </div> \
                <div class="item-qty col-xs-3"> \
                <label>QTY</label> \
                <input class="quantity"> \
                </div> \
                <div class="col-xs-1"> \
                <button class="delete"> \Delete\</button> \
                </div> \
                <div class="item-subtotal col-xs-2"> \
                $--.-- \
                </div> \
                </div>'
              );
            }

        var sortProduct = function () {
            var prices = $('.item-price');
            var names = $('.item-name');
            var priceName = [];
            for (i = 0; i < prices.length; i++) {
                var price = $(prices[i])
                    .text()
                    .trim();
                var name = $(names[i])
                    .text()
                    .trim();
                priceName.push([name, price]);
            }
            priceName.sort();
            console.log(priceName);
            for (i = 0; i < priceName.length; i++) {
                $($('.item-name')[i])
                    .text(priceName[i][0]);
                $($('.item-price')[i])
                    .text(priceName[i][1]);
            }
        }

        $(document)
            .on('click', '#insert', function () {
                addProduct($('#name')
                    .val(), $('#price')
                    .val());
            });

        $(document)
            .on('click', '.delete', function () {
                if(window.confirm("Are you sure you want to delete this?")){
                $(this)
                    .parents('.row')
                    .remove();
                sum();
                }
                ;
            });


        $(document)
            .on('keyup', '.quantity', function () {
                sum();
            });

    });
