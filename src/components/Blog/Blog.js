import './blog.css';

export default function Blog(){
    const handleClick = e => {
        let blogContent = document.getElementsByClassName("blog-paragraph");
        for (let key in blogContent){
            if (blogContent[key].classList !== undefined) {
                blogContent[key].style.textAlign = e.target.title
            }
        }
    }
    return(
        <section className="blog-wrapper" data-testid="blog-testID">
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
            <article className="blog" id="blog">
                <header>
                    <h1>Title</h1>
                    <h2>Subtitle Goes Here</h2>
                </header>
                <div className="blog-content">
                    <p className="blog-paragraph">Blog Content goes here - blah blah blah blah blah blah blah blah</p>
                    <p className="blog-paragraph">
                        Ad aute enim ea minim aliquip irure incididunt voluptate non adipisicing eu enim qui duis. Laborum consectetur pariatur eiusmod dolore id sit. Sint consectetur consectetur nulla tempor quis sint esse excepteur aliquip do enim mollit. Officia quis adipisicing qui tempor proident ad commodo sunt officia fugiat cillum in enim. Aute Lorem veniam mollit officia ex magna sit eiusmod consectetur ea pariatur. Ad aute enim ea minim aliquip irure incididunt voluptate non adipisicing eu enim qui duis. Laborum consectetur pariatur eiusmod dolore id sit. Sint consectetur consectetur nulla tempor quis sint esse excepteur aliquip do enim mollit. Officia quis adipisicing qui tempor proident ad commodo sunt officia fugiat cillum in enim. Aute Lorem veniam mollit officia ex magna sit eiusmod consectetur ea pariatur. Ad aute enim ea minim aliquip irure incididunt voluptate non adipisicing eu enim qui duis. Laborum consectetur pariatur eiusmod dolore id sit. Sint consectetur consectetur nulla tempor quis sint esse excepteur aliquip do enim mollit. Officia quis adipisicing qui tempor proident ad commodo sunt officia fugiat cillum in enim. Aute Lorem veniam mollit officia ex magna sit eiusmod consectetur ea pariatur. Ad aute enim ea minim aliquip irure incididunt voluptate non adipisicing eu enim qui duis. Laborum consectetur pariatur eiusmod dolore id sit. Sint consectetur consectetur nulla tempor quis sint esse excepteur aliquip do enim mollit. Officia quis adipisicing qui tempor proident ad commodo sunt officia fugiat cillum in enim. Aute Lorem veniam mollit officia ex magna sit eiusmod consectetur ea pariatur. Ad aute enim ea minim aliquip irure incididunt voluptate non adipisicing eu enim qui duis. Laborum consectetur pariatur eiusmod dolore id sit. Sint consectetur consectetur nulla tempor quis sint esse excepteur aliquip do enim mollit. Officia quis adipisicing qui tempor proident ad commodo sunt officia fugiat cillum in enim. Aute Lorem veniam mollit officia ex magna sit eiusmod consectetur ea pariatur. Ad aute enim ea minim aliquip irure incididunt voluptate non adipisicing eu enim qui duis. Laborum consectetur pariatur eiusmod dolore id sit. Sint consectetur consectetur nulla tempor quis sint esse excepteur aliquip do enim mollit. Officia quis adipisicing qui tempor proident ad commodo sunt officia fugiat cillum in enim. Aute Lorem veniam mollit officia ex magna sit eiusmod consectetur ea pariatur. Ad aute enim ea minim aliquip irure incididunt voluptate non adipisicing eu enim qui duis. Laborum consectetur pariatur eiusmod dolore id sit. Sint consectetur consectetur nulla tempor quis sint esse excepteur aliquip do enim mollit. Officia quis adipisicing qui tempor proident ad commodo sunt officia fugiat cillum in enim. Aute Lorem veniam mollit officia ex magna sit eiusmod consectetur ea pariatur. Ad aute enim ea minim aliquip irure incididunt voluptate non adipisicing eu enim qui duis. Laborum consectetur pariatur eiusmod dolore id sit. Sint consectetur consectetur nulla tempor quis sint esse excepteur aliquip do enim mollit. Officia quis adipisicing qui tempor proident ad commodo sunt officia fugiat cillum in enim. Aute Lorem veniam mollit officia ex magna sit eiusmod consectetur ea pariatur.
                    </p>
                </div>
            </article>
        </section>
    )
}