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
            // let text = document.getElementById('finddata').value
            // app.data_search = [];
            // let ByPass = false;
            // if (app.data.length == 0) {

            // } else if (text.length != 0) {
            //     for (let i = 0; i < app.data.length; i++) {
            //         // console.log(app.data[i])
            //         for (let k = 0; k < app.data[i].length; k++) {
            //             const el = app.data[i][k];
            //             if (el.toString().substring(0, text.length) == text) {
            //                 if (ByPass) return;
            //                 console.log('sucss');
            //                 console.log(el)
            //                 ByPass = true;
            //             } else {
            //                 if (ByPass) {

            //                 } else {
            //                     ByPass = false;
            //                 }

            //             }
            //         }

            //         if (ByPass) {
            //             ByPass = false;
            //             console.log("push => ")
            //             console.log(app.data[i])
            //             app.data_search.push(app.data[i])
            //         }
            //     }
            //     //console.log(app.data_search)
            //     app.data_show = app.data_search;
            // } else {
            //     app.data_show = app.data;
            // }

        },
        actionJson: function () {

            axios.get('./upload/demo.json')
                .then(function (response) {

                    app.field = response.data.cols
                    app.data = response.data.data
                    app.data_show = response.data.data

                    console.log(app.field)


                })
                .catch(function (error) {
                    console.log(error);
                })

        },
    },
    beforeMount() {
        this.actionJson()
    },
})