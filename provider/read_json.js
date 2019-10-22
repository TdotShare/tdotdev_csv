var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        field: [],
        data: [],
        data_search: [],
        data_show: []
    },
    methods: {
        actionSearch: function () {
            let text = document.getElementById('finddata').value
            app.data_search = [];
            let ByPass = false;
            if (app.data.length == 0) {

            } else if (text.length != 0) {
                for (let i = 0; i < app.data.length; i++) {
                    // console.log(app.data[i])
                    for (let k = 0; k < app.data[i].length; k++) {
                        const el = app.data[i][k];
                        if (el.toString().substring(0, text.length) == text) {
                            if (ByPass) return;
                            console.log('sucss');
                            console.log(el)
                            ByPass = true;
                        } else {
                            if (ByPass) {

                            } else {
                                ByPass = false;
                            }

                        }
                    }

                    if (ByPass) {
                        ByPass = false;
                        console.log("push => ")
                        console.log(app.data[i])
                        app.data_search.push(app.data[i])
                    }
                }
                //console.log(app.data_search)
                app.data_show = app.data_search;
            } else {
                app.data_show = app.data;
            }

        },
        actionJson: function () {

            axios.get('./upload/1.json')
                .then(function (response) {
                    let arr = []
                    app.field = response.data.cols
                    app.data = response.data.data
                    for (let i = 0; i < response.data.data.length; i++) {
                        arr.push(response.data.data[i])
                    }

                    axios.get('./upload/2.json')
                        .then(function (response_one) {
                            console.log(response_one.data.data)
                            for (let i = 0; i < response_one.data.data.length; i++) {
                                arr.push(response_one.data.data[i])
                            }
                            //app.data = arr
                            //app.data_show = arr

                            axios.get('./upload/3.json')
                                .then(function (response_two) {
                                    for (let i = 0; i < response_two.data.data.length; i++) {
                                        arr.push(response_two.data.data[i])
                                    }
                                    //app.data = arr
                                    //app.data_show = arr

                                    axios.get('./upload/4.json')
                                        .then(function (response_three) {
                                            for (let i = 0; i < response_three.data.data.length; i++) {
                                                arr.push(response_three.data.data[i])
                                            }
                                            //app.data = arr
                                            //app.data_show = arr

                                            axios.get('./upload/5.json')
                                                .then(function (response_four) {
                                                    for (let i = 0; i < response_four.data.data.length; i++) {
                                                        arr.push(response_four.data.data[i])
                                                    }
                                                    //app.data = arr
                                                    //app.data_show = arr

                                                    axios.get('./upload/6.json')
                                                        .then(function (response_five) {
                                                            for (let i = 0; i < response_five.data.data.length; i++) {
                                                                arr.push(response_five.data.data[i])
                                                            }
                                                            //app.data = arr
                                                            //app.data_show = arr

                                                            axios.get('./upload/7.json')
                                                                .then(function (response_six) {
                                                                    for (let i = 0; i < response_six.data.data.length; i++) {
                                                                        arr.push(response_six.data.data[i])
                                                                    }
                                                                    //app.data = arr
                                                                    //app.data_show = arr

                                                                    axios.get('./upload/8.json')
                                                                        .then(function (response_seven) {
                                                                            for (let i = 0; i < response_seven.data.data.length; i++) {
                                                                                arr.push(response_seven.data.data[i])
                                                                            }
                                                                            //app.data = arr
                                                                            //app.data_show = arr

                                                                            axios.get('./upload/demo.json')
                                                                                .then(function (response_n) {
                                                                                    for (let i = 0; i < response_n.data.data.length; i++) {
                                                                                        arr.push(response_n.data.data[i])
                                                                                    }
                                                                                    app.data = arr
                                                                                    app.data_show = arr
                                                                                })
                                                                        })
                                                                })
                                                        })
                                                })
                                        })
                                })
                        })
                })
        },
    },
    beforeMount() {
        this.actionJson()
    },
})