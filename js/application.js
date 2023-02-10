var addItem = function (name, price) {
  name = name.charAt(0)
      .toUpperCase() + name.slice(1);
  $('#product-list')
      .prepend('<div class="row item"> \
      <div class="item-name col-xs-3"> \ ' + name + '\
      </div> \
      <div class="item-price col-xs-3"> \
      $' + price + '.00 \
      </div> \
      <div class="item-qty col-xs-3"> \
      <label>QTY</label> \
      <input class="quantity"> \
      </div> \
      <div class="col-xs-1"> \
      <button class="remove"> \Delete\</button> \
      </div> \
      <div class="item-subtotal col-xs-2"> \
      $--.-- \
      </div> \
      </div>'
    );
  }
  $(document).on('click', '#insert',function(){
    addItem($('#name').val(), $('#price').val());
  });

  function calculate(price, qty){
    
  }