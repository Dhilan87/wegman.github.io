$('.tabbed-button .menu .item').tab({
    context : '.tabbed-button',
    history: true,
    historyType: 'hash'
});

$('.tabbed-component-button .menu .item').tab({
    cache: false,
    // faking API request
    apiSettings: {
        loadingDuration : 300,
        mockResponse    : function(settings) {
            var response = {
                first  : 'Ready to eat',
                second : 'Ready to cook',
                third  : 'Recipes'
            };
            return response[settings.urlData.tab];
        }
    },
    context : '.tabbed-component-button',
    auto    : true,
    path    : '/'
});

$('.ui.checkbox').checkbox();