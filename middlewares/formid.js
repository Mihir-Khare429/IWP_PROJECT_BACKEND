const formidable = require('formidable');

const parserFn = async function(req,res){
    try{
        const form = formidable({ multiples: true });
 
        form.parse(req, (err, fields, files) => {
            if (err) {
            next(err);
            return;
            }
            console.log({ fields, files });
        });
    }catch(err){

    }
}

module.exports = parserFn