window.addEventListener('load', ()=>{
    let progressBars = document.querySelectorAll('.progress-bar');
    let values = [
        '95%',
        '90%',
        '75%',
        '85%',
        '85%',
        '75%',
        '65%',
        '70%',
        '75%',
        '85%'
    ];
    progressBars.forEach((progress,index) => {
        progress.style.width = values[index];
    });
});