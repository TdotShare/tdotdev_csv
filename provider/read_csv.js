var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        csv_key: [],
        csv_json: {},
        csv_search: [],
        csv_show: {}
    },
    methods: {
        actionSearch: function () {
            let text = document.getElementById('findCsv').value
            app.csv_search = [];
            let ByPass = false;
            if (app.csv_key.length == 0) {
                alert('กรุณาอ่านข้อมูลไฟล์ csv. ก่อน !')
            } else if (text.length != 0) {
                //console.log("search => " + text)
                //console.log("text.length => " + text.length)
                for (let i = 0; i < app.csv_json.length; i++) {
                    Object.keys(app.csv_json[i]).forEach(function (key) {
                        //console.log(app.csv_json[i][key])
                        if (app.csv_json[i][key].substring(0, text.length) == text) {
                            if (ByPass) return;
                            //console.log('search sucss !!')
                            ByPass = true;
                        } else {
                            if (ByPass) return;
                            ByPass = false;
                        }
                    })

                    if (ByPass) {
                        ByPass = false;
                        app.csv_search.push(app.csv_json[i])
                    }
                }
                console.log(app.csv_search)
                app.csv_show = app.csv_search;
            } else {
                app.csv_show = app.csv_json;
            }
        },
        actionCsv: function () {
            axios.get('./upload/json.csv')
                .then(function (response) {
                    app.csv_json = [];
                    app.csv_key = [];
                    var lines = response.data.split("\n");
                    var result = [];
                    var headers = lines[0].split(",");
                    for (var i = 1; i < lines.length; i++) {
                        var obj = {};
                        var currentline = lines[i].split(",");
                        for (var j = 0; j < headers.length; j++) {
                            obj[headers[j]] = currentline[j];
                        }
                        result.push(obj);
                    }
                    result.pop();
                    app.csv_json = result;
                    app.csv_show = app.csv_json;
                    //console.log(result);
                    Object.keys(result[0]).forEach(function (key) {
                        //console.log(key);
                        app.csv_key.push(key)
                    })


                    //console.log(app.csv_key)

                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }
})