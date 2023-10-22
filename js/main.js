
window.onload = () => {
    const body = document.querySelector('body');
    const riveModel = new rive.Rive({
        src: "./rive/toggle.riv",
        canvas: document.getElementById("canvas"),
        autoplay: false,
        stateMachines: "State Machine 1",
    });

    let isOn = false;
    document.getElementById("canvas").addEventListener("click", () => {
        console.log("clicked");
        if (isOn) {
            riveModel.play("off");
        } else {
            riveModel.play("on");
        }
        isOn = !isOn;

        body.classList.toggle('dark');
    });
}