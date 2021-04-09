var app = new Vue ({
    el: "#app",
    data: {
        titoloFilm:"",
        films: [],
    },
    methods: {
        search: function() {
            axios.get('https://api.themoviedb.org/3/search/movie?', {
                params: {
                    api_key: "e7ecbc05df37bdc5e5aa48a01b375770",
                    query: this.titoloFilm,
                    language: "it-IT",
                }
            })
            .then((response) => {
                // console.log(response.data);
                this.films = response.data.results;
                console.log(this.films);
            })

            this.titoloFilm = "";
        }
    }
}) 