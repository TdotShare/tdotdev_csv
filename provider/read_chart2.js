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

            //let field = response.data.cols
            //let data = response.data.data
            //let data_show = response.data.data
            let data_country = [];
            let save_name = []
            let check = true;




            axios.get('./upload/1.json')
                .then(function (response) {
                    let arr = []
                    app.field = response.data.cols
                    app.data = response.data.data

                    for (let i = 0; i < response.data.data.length; i++) {
                        let set = { 'x': response.data.data[i][3], 'y': 1 }
                        arr.push(set)
                    }

                    axios.get('./upload/2.json')
                        .then(function (response_one) {
                            //console.log(response_one.data.data)
                            for (let i = 0; i < response_one.data.data.length; i++) {
                                let set = { 'x': response_one.data.data[i][3], 'y': 1 }
                                arr.push(set)
                            }


                            axios.get('./upload/3.json')
                                .then(function (response_two) {
                                    for (let i = 0; i < response_two.data.data.length; i++) {
                                        let set = { 'x': response_two.data.data[i][3], 'y': 1 }
                                        arr.push(set)
                                    }

                                    axios.get('./upload/4.json')
                                        .then(function (response_three) {
                                            for (let i = 0; i < response_three.data.data.length; i++) {
                                                let set = { 'x': response_three.data.data[i][3], 'y': 1 }
                                                arr.push(set)
                                            }
                                            //app.data = arr
                                            //app.data_show = arr

                                            axios.get('./upload/5.json')
                                                .then(function (response_four) {
                                                    for (let i = 0; i < response_four.data.data.length; i++) {
                                                        let set = { 'x': response_four.data.data[i][3], 'y': 1 }
                                                        arr.push(set)
                                                    }
                                                    //app.data = arr
                                                    //app.data_show = arr

                                                    axios.get('./upload/6.json')
                                                        .then(function (response_five) {
                                                            for (let i = 0; i < response_five.data.data.length; i++) {
                                                                let set = { 'x': response_five.data.data[i][3], 'y': 1 }
                                                                arr.push(set)
                                                            }
                                                            //app.data = arr
                                                            //app.data_show = arr

                                                            axios.get('./upload/7.json')
                                                                .then(function (response_six) {
                                                                    for (let i = 0; i < response_six.data.data.length; i++) {

                                                                        let set = { 'x': response_six.data.data[i][3], 'y': 1 }
                                                                        arr.push(set)
                                                                    }
                                                                    //app.data = arr
                                                                    //app.data_show = arr

                                                                    axios.get('./upload/8.json')
                                                                        .then(function (response_seven) {
                                                                            for (let i = 0; i < response_seven.data.data.length; i++) {

                                                                                let set = { 'x': response_seven.data.data[i][3], 'y': 1 }
                                                                                arr.push(set)
                                                                            }


                                                                            axios.get('./upload/demo.json')
                                                                                .then(function (response_n) {
                                                                                    for (let i = 0; i < response_n.data.data.length; i++) {

                                                                                        let set = { 'x': response_n.data.data[i][3], 'y': 1 }
                                                                                        arr.push(set)
                                                                                    }
                                                                                    // app.data = arr
                                                                                    // app.data_show = arr

                                                                                    for (let i = 0; i < arr.length; i++) {
                                                                                        if (save_name.length == 0) {
                                                                                            save_name.push(arr[i].x)
                                                                                            let set = { 'label': arr[i].x, 'y': 1 }
                                                                                            data_country.push(set);
                                                                                        } else {
                                                                                            for (let k = 0; k < save_name.length; k++) {
                                                                                                if (save_name[k] == arr[i].x) {
                                                                                                    check = true;
                                                                                                    break;
                                                                                                } else {
                                                                                                    check = false;
                                                                                                }
                                                                                            }


                                                                                            if (!check) {
                                                                                                check = true;
                                                                                                let set = { 'label': arr[i].x, 'y': 1 }
                                                                                                data_country.push(set);
                                                                                                save_name.push(arr[i].x)
                                                                                            } else {
                                                                                                for (let o = 0; o < data_country.length; o++) {
                                                                                                    if (arr[i].x == data_country[o].label) {
                                                                                                        data_country[o].y += 1
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }

                                                                                        //console.log(data_country)
                                                                                    }
                                                                                })
                                                                        })
                                                                })
                                                        })
                                                })
                                        })
                                })
                        })
                })








            window.onload = function () {

                var options = {
                    animationEnabled: true,
                    title: {
                        text: "Show data_country"
                    },
                    axisY: {
                        title: "Revenue in USD",
                        valueFormatString: "#0,,.",
                        suffix: "mn",
                        prefix: "$"
                    },
                    data: [{
                        type: "area",
                        markerSize: 5,
                        xValueFormatString: "YYYY",
                        yValueFormatString: "$#,##0.##",
                        dataPoints: data_country
                    }]
                };

                setTimeout(() => {
                    $("#chartContainer").CanvasJSChart(options);
                }, 2000);

                //$("#chartContainer").CanvasJSChart(options);

            }






            // console.log(data_country_show);



        },
    },
    beforeMount() {
        this.actionJson()
        console.log('test !');

    },
})