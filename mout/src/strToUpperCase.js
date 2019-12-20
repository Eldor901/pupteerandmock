const mbHelper = require('./moutbank-helper');
const settings = require('./settings');

const title = "eldor";

function addService() {
    const response = { title: title.toUpperCase() };
    const resposeNotFound = {message: "not found 404" };
    const stubs = [
        {
            predicates: [ {
                equals: {
                    method: "POST",
                    "path": "/"
                },
            },
           ],

            responses: [
                {
                    is: {
                        body: JSON.stringify(response)
                    }

                }
            ],
        },
    ];
    const imposter = {
        port: settings.Up_test_port,
        protocol: 'http',
        stubs: stubs
    };
    return mbHelper.postImposter(imposter);
}
module.exports = { addService };