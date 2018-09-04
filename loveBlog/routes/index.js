/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: '夏小鹅的天鹅湖' });
});

module.exports = router;