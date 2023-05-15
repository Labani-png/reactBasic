import React, { useEffect, useState } from 'react'
import Loading from './Loading'

const UseEffectex1 = () => {
  const [photo, setPhoto] = useState([])
  const [load,setLoad]=useState(true)

  const getPhoto = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const result = await res.json()
    setPhoto(result)
    setLoad(false)
  }

  useEffect(() => {
    getPhoto()
  }, [])

  if(load){
   return <Loading/>
  }

  //console.log(photo);

  return (
    <>
      <div classname="container">
        <h1>Api call Using usestate useEffect hooks</h1>
        <div classname="row">

          {
            photo.map((item, index) => {
              return (
                <>
                  <div className='col-md-4'>
                    <div className="card" style={{ width: '18rem' }}>
                      <img src={item.thumbnailUrl} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">title : {item.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>

                </>
              )

            })
          }

        </div>
      </div>

    </>
  )
}

export default UseEffectex1