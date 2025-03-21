
const aboutMeText = [
    'My name is Harry Mclean and I am 32 years of age from the Newcastle area.',
    // 'I’m currently working as a Graduate Analyst Programmer for Pulse Mining Systems and looking at moving onto my next challenge!',
    // 'I have a strong passion for automating processes using software, machine learning, and all forms of software that can make everyday tasks easier.',
    // 'I have experience with the following languages and frameworks C#, ASP.NET, Python, JavaScript, Html, CSS, React and more recently Progress Open Edge 4GL.'
]
// const parOneText = {



export default function AboutText() {

    return <>
        {[aboutMeText.map(x => <p>{x}</p>)]}
    </>
}