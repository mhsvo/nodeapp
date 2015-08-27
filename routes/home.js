/**
 * Created by A.S.MMehediHasan on 8/26/2015.
 */
exports.home = function(req,res)
{
    res.render('contents');
}

exports.content = function(req,res){
    res.render('mycontent');
}