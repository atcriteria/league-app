import './blog.css';

export default function Blog(){
    const handleClick = e => {
        console.log(e.target.title)
    }
    return(
        <section className="blog-wrapper">
            <div className="align-buttons-wrapper" >
                <div onClick={handleClick} title="left" className="align-button" >
                    <p>___________</p>
                    <p>______</p>
                    <p>_________</p>
                    <p>_____</p>
                </div>
                <div onClick={handleClick} title="center" className="align-button" >
                    <p>___________</p>
                    <p>______</p>
                    <p>_________</p>
                    <p>_____</p>
                </div>
                <div onClick={handleClick} title="right" className="align-button" >
                    <p>___________</p>
                    <p>______</p>
                    <p>_________</p>
                    <p>_____</p>
                </div>
                <div onClick={handleClick} title="justify" className="align-button" >
                    <p>_______  ___</p>
                    <p>_   ________</p>
                    <p>__  ____   __</p>
                    <p>____   _____</p>
                </div>
            </div>
            <div className="blog-content">
                <h1>Title</h1>
                <p>Blog Content goes here - blah blah blah blah blah blah blah blah</p>
            </div>
        </section>
    )
}