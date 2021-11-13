import './about.css';
const origin = window.location.origin;

export default function About(){
    return(
        <section className="about-section" data-testid="about-testID" id="about-section">
            <img src={`${origin}/Images/Gangplank_14.jpg`} alt="Pool Party Gragas representing AtCriteria" />
            <article>
                Quis ea sunt culpa aute irure mollit ad enim eu. Velit nisi laboris amet esse deserunt do laboris. Velit laboris in minim nostrud non cupidatat aliquip fugiat labore labore incididunt nisi pariatur dolor. Sunt amet incididunt laborum nostrud cillum. Quis ea sunt culpa aute irure mollit ad enim eu. Velit nisi laboris amet esse deserunt do laboris. Velit laboris in minim nostrud non cupidatat aliquip fugiat labore labore incididunt nisi pariatur dolor. Sunt amet incididunt laborum nostrud cillum.
            </article>
        </section>
    )
}