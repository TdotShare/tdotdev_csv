var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        field: [],
        data: [],
        data_search: [],
        data_show: [],
        data_country: [],
        data_country_show: []
    },
    methods: {
        actionJson: function () {

            axios.get('./upload/demo.json')
                .then(function (response) {

                    let field = response.data.cols
                    let data = response.data.data
                    let data_show = response.data.data
                    let data_country = [];
                    let save_name = []
                    let check = true;

                    for (let i = 0; i < data.length; i++) {
                        if (save_name.length == 0) {
                            save_name.push(data[i][3])
                            let set = { 'label': data[i][3], 'y': 1 }
                            data_country.push(set);
                        } else {
                            for (let k = 0; k < save_name.length; k++) {
                                if (save_name[k] == data[i][3]) {
                                    check = true;
                                    break;
                                } else {
                                    check = false;
                                }
                            }


                            if (!check) {
                                check = true;
                                let set = { 'label': data[i][3], 'y': 1 }
                                data_country.push(set);
                                save_name.push(data[i][3])
                            } else {
                                for (let o = 0; o < data_country.length; o++) {
                                    if (data[i][3] == data_country[o].label) {
                                        data_country[o].y += 1
                                    }
                                }
                            }
                        }
                    }

                    //console.log(data_country)

                    window.onload = function () {

                        var options = {
                            title: {
                                text: "Data Country"
                            },
                            data: [{
                                type: "pie",
                                startAngle: 45,
                                showInLegend: "true",
                                legendText: "{label}",
                                indexLabel: "{label} ({y})",
                                yValueFormatString: "#,##0.#" % "",
                                dataPoints: data_country
                            }]
                        };
                        $("#chartContainer").CanvasJSChart(options);

                    }



                    // console.log(data_country_show);

                })
                .catch(function (error) {
                    console.log(error);
                })

        },
    },
    beforeMount() {
        this.actionJson()
        console.log('test !');

    },
})