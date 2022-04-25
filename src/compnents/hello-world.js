import './hello-world.css';
class helloWorld {
    render() {
        const buttton = document.createElement('button');
        const body = document.querySelector('body');
        buttton.innerHTML = 'Hello World';
        buttton.classList.add('hello-world-button');
        body.appendChild(buttton);
    }
}
export default helloWorld;