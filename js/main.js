let inputs = document.querySelectorAll(".controls input");



function request(){
    console.log(this.value);
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    
}

inputs.forEach(input => input.addEventListener("change",request));
inputs.forEach(input => input.addEventListener("mousemove",request));