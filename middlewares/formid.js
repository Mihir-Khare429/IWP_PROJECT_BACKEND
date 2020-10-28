const formidable = require('formidable');

const parserFn = async function(req,res,next){
    try{
        const form = formidable({ multiples: true });
 
        form.parse(req, (err, fields, files) => {
            if (err) {
            next(err);
            return;
            }
            console.log({ fields, files });
            req.body = {
                ...fields,
                ...files
            }
            console.log(req.body)
            next()
        });
    }catch(err){
        console.log(err)
    }
}

module.exports = parserFn