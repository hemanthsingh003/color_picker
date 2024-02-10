const color_btn = document.querySelector('#color_btn');
const bg_color_btn = document.querySelector('#bg_color_btn');
const output_div = document.querySelector('#output_div');
const color_div = document.querySelector('#color_div');
const bg_color_div = document.querySelector('#bg_color_div');

const pickColor = async (bg_or_not) => {
    const eyeDropper = new EyeDropper();
    const { sRGBHex } = await eyeDropper.open();
    if (sRGBHex) {
        output_div.innerHTML = '<input id="temp" value="'+sRGBHex+'">';
        document.querySelector('#temp').select();
        document.execCommand('copy');
        output_div.innerHTML = sRGBHex;
        color_div.innerHTML = sRGBHex;
        bg_color_div.innerHTML = sRGBHex;
        bg_color_div.style.color = "white";
        
        if (bg_or_not) {
            bg_color_div.style.color = sRGBHex;
            bg_color_div.style.backgroundColor = sRGBHex;
            output_div.style.backgroundColor = sRGBHex;
        } else {
            color_div.style.color = sRGBHex;
            output_div.style.color = sRGBHex;
        }
    }
}

color_btn.addEventListener('click', () => { pickColor(false); });
bg_color_btn.addEventListener('click', () => { pickColor(true); });
document.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') { pickColor(false) }
    if(event.key === ' ') { pickColor(true) }
});