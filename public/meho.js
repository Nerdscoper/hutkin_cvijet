(function(scope) {

    const meho = {

        scream: function() {
            console.log('aaaaaaaaaaaaaa')
        },

        promjeniIme: function(element, text) {
            element.textContent = text
        },

        posalji: function() {

        }
    }


    window.meho = meho


}(window))