
var str = "~zxy„KS";
var n = str.charCodeAt(str.length-1);

var intChave = 5;
var psw = '';
for (let index = 0; index < str.length; index++) {
    
    var a = str.charAt(index);
    var b = str.charCodeAt(index);
    var c = b - (index * 3) - intChave;
    var d = String.fromCharCode(c);
    psw.concat(d);
    console.log(c + " -> " + d);
    //strRetorno = strRetorno & Chr(Asc(Mid(pstrDado, index, 1)) + (index * 3) + intChave)
    //strRetorno = strRetorno & Chr(Asc(Mid(pstrDado, intContador, 1)) - (intContador * 3) - intChave)
}
console.log(psw);
var oracledb = require('oracledb');

oracledb.getConnection({
    user: 'vv',
    password: psw,
    connectString: 'NETD'
    }, function(err, connection) {
    if (err) {
    console.error(err.message);
    return;
    }connection.execute( "select * from ALL_SCHEDULER_JOB_LOG where job_name like '%JOB_PRSMS_SR_PROCESSAR' and rownum < 2;",
        [],
        function(err, result) {
        if (err) {
        console.error(err.message);
        doRelease(connection);
        return;
        }
        console.log(result.metaData);
        console.log(result.rows);
        doRelease(connection);
        });
        });



console.log(String.fromCharCode(72));