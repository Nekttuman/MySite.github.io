let bonsai_iframe = document.getElementById('bonsai-frame');
let bonsai_uid = 'c357b08990bd454d838fea81792b69e8';

let kettle_iframe = document.getElementById('kettle-frame');
let kettle_uid = '300a051bd82d49749be1dcf53fb97411';

// By default, the latest version of the viewer API will be used.
let client1 = new Sketchfab(bonsai_iframe);
let client2 = new Sketchfab(kettle_iframe);
// Alternatively, you can request a specific version.
// var client = new Sketchfab( '1.10.1', iframe );

client1.init(bonsai_uid, {
    success: function onSuccess(api) {
        api.start();
        api.addEventListener('viewerready', function () {

            // API is ready to use
            // Insert your code here
            console.log('Viewer is ready');

        });
    },
    error: function onError() {
        console.log('Viewer error');
    }
});
client2.init(kettle_uid, {
    success: function onSuccess(api) {
        api.start();
        api.addEventListener('viewerready', function () {

            // API is ready to use
            // Insert your code here
            console.log('Viewer is ready');

        });
    },
    error: function onError() {
        console.log('Viewer error');
    }
});