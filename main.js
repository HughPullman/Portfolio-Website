const projects = {
    fortune_teller: 'This is a javascript project where I was tasked with creating a random message generator. I decided to use tarot cards to produce three different messages picked at random. Click to get the GitHub link to this project.',
    tea_cozy: 'This is a project where I was given some content and asked to create a website using flexboxes to create a layout. Click to get the GitHub link to this project.',
    dasmotos: 'This is one of my first projects trying to get an understanding of html and css to create a basic webpage. Click to get the GitHub link to this project.',
    design_guide: 'This a project where I was tasked with creating a very simple design guide with a variety of colour, font and button styles that could be used in other projects. Click to get the GitHub link to this project.',
    hoveredText: '',

    displayText(box){
        this.hoveredText = document.getElementById(box).innerHTML;
        document.getElementById(box).innerHTML = this[box];
    },
    hideText(box){
        document.getElementById(box).innerHTML = this.hoveredText;
    }

}
window.onload = () =>{
document.getElementById('fortune-box').addEventListener('mouseover', ()=> projects.displayText('fortune_teller'));
document.getElementById("tea-box").addEventListener('mouseover', ()=> projects.displayText('tea_cozy'));
document.getElementById("dasmotos-box").addEventListener('mouseover',()=> projects.displayText('dasmotos'));
document.getElementById("design-box").addEventListener('mouseover',()=> projects.displayText('design_guide'));
document.getElementById('fortune-box').addEventListener('mouseout', ()=> projects.hideText('fortune_teller'));
document.getElementById("tea-box").addEventListener('mouseout', ()=> projects.hideText('tea_cozy'));
document.getElementById("dasmotos-box").addEventListener('mouseout',()=> projects.hideText('dasmotos'));
document.getElementById("design-box").addEventListener('mouseout',()=> projects.hideText('design_guide'));
}