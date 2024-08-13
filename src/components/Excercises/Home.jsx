import Body from "./components/Body"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navigation from "./components/Navigation"



export default function Home() {
    let style = {
        padding:0
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div style={style} className="col-12">
                    <Header />
                </div>
            </div>
            {/* <div className="row">
                <div style={style} className="col-4">
                    <Navigation />
                </div>
                <div style={style} className="col-8">
                    <Content />
                </div>
            </div> */}
            <div className="row">
                <div style={style} className="col-12">
                    <Body />
                </div>
            </div>
            <div className="row">
                <div style={style} className="col-12">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
