
import Header from './Header'
import  Head from 'next/head';
const Layout = ({children}) => {
    return (
        <div >
    <Head>
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v6.0.2/mapbox-gl.css' rel='stylesheet' />
  <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.js'></script>
	<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.css' rel='stylesheet' />
	<link rel='stylesheet prefetch' href='http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/css/semantic.min.css'/>
	<link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/icon.min.css'/>

    </Head>
        <div className="header-page">
         <Header />   
        </div> 
        {children}
        </div>
    )
}

export default Layout
