var app = new Vue ({
    el: "#app",
    data: {
        titoloFilm:"",
        films: [],
        series:[],
    },
    methods: {
        search: 
        
            function(movies) {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: "e7ecbc05df37bdc5e5aa48a01b375770",
                        query: this.titoloFilm,
                        language: "it-IT",
                    }
                })
                .then((response) => {
                    this.films = response.data.results;
                    for (var i = 0; i < this.films.length; i++) {
                        this.films[i].vote_average = Math.ceil(this.films[i].vote_average / 2);
                    };
                
                    this.films.sort((a,b) => b.vote_count - a.vote_count);
                    
                })

                axios.get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: "e7ecbc05df37bdc5e5aa48a01b375770",
                        query: this.titoloFilm,
                        language: "it-IT",
                    }
                })
                .then((response) => {
                    this.series = response.data.results;
                    for (var i = 0; i < this.series.length; i++) {
                        this.series[i].vote_average = Math.ceil(this.series[i].vote_average / 2);
                    };

                    this.series.sort((a,b) => b.vote_count - a.vote_count);
                
                })

            this.titoloFilm = "";
        },
        
    },
    
}) 