module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.day1 && req.query.day2 && req.query.day3) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: parseInt(req.query.day3) + (parseInt(req.query.day3) - parseInt(req.query.day2)) 
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass three days to get an prognose"
        };
    }
};