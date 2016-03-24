# About Documentation

For full documentation visit Wegmans.

	<div class="col-md-1">
        <div style="background: #ccc;">1</div>
    </div>

#### JS Code.

<button class="ui slate-gray button">View all in store events</button>   


	read: {
      cachedResponse: function(url) {
        var response;
        if(window.Storage === undefined) {
          module.error(error.noStorage);
          return;
        }
        response = sessionStorage.getItem(url);
        module.debug('Using cached response', url, response);
        response = module.decode.json(response);
        return false;
      }
    },	