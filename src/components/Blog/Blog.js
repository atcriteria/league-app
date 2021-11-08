import './blog.css';

export default function Blog(){
    const handleClick = e => {
        let blogContent = document.getElementById("blog");
        blogContent.style.textAlign = e.target.title
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
            <div className="blog-content" id="blog">
                <h1>Title</h1>
                <p className="blog-paragraph">Blog Content goes here - blah blah blah blah blah blah blah blah</p>
                <p>
                    Ad aute enim ea minim aliquip irure incididunt voluptate non adipisicing eu enim qui duis. Laborum consectetur pariatur eiusmod dolore id sit. Sint consectetur consectetur nulla tempor quis sint esse excepteur aliquip do enim mollit. Officia quis adipisicing qui tempor proident ad commodo sunt officia fugiat cillum in enim. Aute Lorem veniam mollit officia ex magna sit eiusmod consectetur ea pariatur. Ad aute enim ea minim aliquip irure incididunt voluptate non adipisicing eu enim qui duis. Laborum consectetur pariatur eiusmod dolore id sit. Sint consectetur consectetur nulla tempor quis sint esse excepteur aliquip do enim mollit. Officia quis adipisicing qui tempor proident ad commodo sunt officia fugiat cillum in enim. Aute Lorem veniam mollit officia ex magna sit eiusmod consectetur ea pariatur. Ad aute enim ea minim aliquip irure incididunt voluptate non adipisicing eu enim qui duis. Laborum consectetur pariatur eiusmod dolore id sit. Sint consectetur consectetur nulla tempor quis sint esse excepteur aliquip do enim mollit. Officia quis adipisicing qui tempor proident ad commodo sunt officia fugiat cillum in enim. Aute Lorem veniam mollit officia ex magna sit eiusmod consectetur ea pariatur. Ad aute enim ea minim aliquip irure incididunt voluptate non adipisicing eu enim qui duis. Laborum consectetur pariatur eiusmod dolore id sit. Sint consectetur consectetur nulla tempor quis sint esse excepteur aliquip do enim mollit. Officia quis adipisicing qui tempor proident ad commodo sunt officia fugiat cillum in enim. Aute Lorem veniam mollit officia ex magna sit eiusmod consectetur ea pariatur.
                </p>
            </div>
        </section>
    )
}