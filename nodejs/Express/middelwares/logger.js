function Log (req,res,next){
    console.log('Logging..');
    next()


}
module.exports = Log;