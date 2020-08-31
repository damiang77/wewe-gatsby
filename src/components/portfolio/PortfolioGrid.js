import React, { Component } from "react"
import ReactDOM from "react-dom"
import Shuffle from "shufflejs"
import { Container, Row, Col } from "react-bootstrap"

class PortfolioGrid extends Component {
  constructor(props) {
    super(props)

    // Initialize with some "photos" that are cached (or none at all). Maybe you
    // have a service worker that cached the last API response and you can
    // use that here while waiting on a network request.
    const grayPixel =
      "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
    const blackPixel =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    const greenPixel =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO02Vz4HwAE9AJhcLBN6AAAAABJRU5ErkJggg=="

    this.state = {
      photos: [
        { id: 1, src: grayPixel },
        { id: 2, src: blackPixel },
        { id: 3, src: greenPixel },
      ],
    }

    this.element = React.createRef()
    this.sizer = React.createRef()

    this.handleFilter = this.handleFilter.bind(this);
  }

  /**
   * Fake and API request for a set of images.
   * @return {Promise<Object[]>} A promise which resolves with an array of objects.
   */
  _fetchPhotos() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: 4,
            username: "@stickermule",
            name: "Sticker Mule",
            group: "kot",
            src:
              "https://images.unsplash.com/photo-1484244233201-29892afe6a2c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&s=14d236624576109b51e85bd5d7ebfbfc",
          },
          {
            id: 5,
            username: "@prostoroman",
            name: "Roman Logov",
            group: "pies",
            src:
              "https://images.unsplash.com/photo-1465414829459-d228b58caf6e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&s=7a7080fc0699869b1921cb1e7047c5b3",
          },
          {
            id: 6,
            username: "@richienolan",
            name: "Richard Nolan",
            group: "jez",
            src:
              "https://images.unsplash.com/photo-1478033394151-c931d5a4bdd6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&s=3c74d594a86e26c5a319f4e17b36146e",
          },
          {
            id: 7,
            username: "@wexor",
            name: "Wexor Tmg",
            group: "kot",
            src:
              "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&s=11ff283143c782980861a442a957da8e",
          },
          {
            id: 8,
            username: "@dnevozhai",
            name: "Denys Nevozhai",
            group: "pies",
            src:
              "https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&s=ea06c0f0700ec469fdcb32e0d4c2928e",
          },
          {
            id: 9,
            username: "@aronvandepol",
            name: "Aron Van de Pol",
            group: "pies",
            src:
              "https://images.unsplash.com/photo-1469719847081-4757697d117a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&s=9a568bc48e42d3bb60c97c0eb3dc20ac",
          },
        ])
      }, 300)
    })
  }

  /**
   * Resolve a promise when all the photos in an array have loaded.
   * @param {Object[]} photos Photos to load.
   * @return {Promise<Object[]>} Loaded images.
   */
  _whenPhotosLoaded(photos) {
    return Promise.all(
      photos.map(
        photo =>
          new Promise(resolve => {
            const image = document.createElement("img")
            image.src = photo.src

            if (image.naturalWidth > 0 || image.complete) {
              resolve(photo)
            } else {
              image.onload = () => {
                resolve(photo)
              }
            }
          })
      )
    )
  }



  componentDidMount() {
    // The elements are in the DOM, initialize a shuffle instance.
    this.shuffle = new Shuffle(this.element.current, {
      itemSelector: ".photo-item",
      sizer: this.sizer.current,
    })

    // Kick off the network request and update the state once it returns.
    this._fetchPhotos()
      .then(this._whenPhotosLoaded.bind(this))
      .then(photos => {
        this.setState({ photos })
      })
  }

  componentDidUpdate() {
    // Notify shuffle to dump the elements it's currently holding and consider
    // all elements matching the `itemSelector` as new.
    this.shuffle.resetItems()
  }

  componentWillUnmount() {
    // Dispose of shuffle when it will be removed from the DOM.
    this.shuffle.destroy()
    this.shuffle = null
  }

  handleFilter = () =>{
      this.shuffle.filter((element)=>{
          element.dataset.groups.toLowerCase().includes('pies');
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleFilter}>Fliter</button>

        <div ref={this.element} className="row my-shuffle">
          {this.state.photos.map(image => (
            <PhotoItem {...image} />
          ))}
      
        </div>
        
      </div>
    )
  }
}

/**
 * A grid item for a photo.
 * @param {{ id: number, username: string, src: string, name: string }} props Component props.
 * @return {JSX.Element}
 */
function PhotoItem({ id, src, group}) {
  return (
    <div key={id} lg="3" className="photo-item" data-group={group}>
      <div className="aspect aspect--4x3">
        <div className="aspect__inner">
          <img src={src} />
        </div>
      </div>
    </div>
  )
}

export default PortfolioGrid
