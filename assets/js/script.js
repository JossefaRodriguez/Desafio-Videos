//Se declara clase padre segùn requerimiento
class Multimedia {
    constructor(url) {
        let _url = url
        this.getUrl = () => {
            return _url
        }
        this.setUrl = (nuevaUrl) => {
            _url = nuevaUrl
        }
    }
    get url() {
        return this.getUrl()
    }
    set url(nuevaUrl) {
        this.setUrl(nuevaUrl)
    }
    setInicio() {
        alert('Este método es para realizar un cambio en la URL del video')
    }
}

// Se declara clase hijo según requerimientos incoporando elementos de la clase padre con extends
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        let _id = document.querySelector(`#${id}`)
        this.getId = () => {
            return _id
        }
        this.setId = (nuevoId) => {
            _id = document.querySelector(`#${nuevoId}`)
        }
    }
    get id() {
        return this.getId()
    }
    set id(nuevoId) {
        this.setId(nuevoId)
    }
    playMultimedia() {
        this.id.src = this.url
    }
    setInicio(tiempoDeInicio) {
        this.id.setAttribute("src", this.id.src + `?start=${tiempoDeInicio}`)
    }
}

// Se incorporan sugerencia del profesor para IIFE
; const reproductorMultimedia = (() => {
    const musicaParaReproducir = new Reproductor('https://www.youtube.com/embed/XLtBVc7tnnM', 'musica')
    const peliculasParaReproducir = new Reproductor('https://www.youtube.com/embed/DPLiNy6TBts', 'peliculas')
    const seriesParaReproducir = new Reproductor('https://www.youtube.com/embed/rt47kOdNvg0', 'series')

    return {
        comenzarPrograma: () => {
            musicaParaReproducir.playMultimedia()
            musicaParaReproducir.setInicio(15)

            peliculasParaReproducir.playMultimedia()
            peliculasParaReproducir.setInicio(120)

            seriesParaReproducir.playMultimedia()
            seriesParaReproducir.setInicio(60)
        }
    }
})()

reproductorMultimedia.comenzarPrograma()
