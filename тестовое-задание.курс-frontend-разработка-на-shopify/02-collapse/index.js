const button = document.querySelector('.collapsible__button');
const content = document.querySelector('.collapsible__content');
const spanVisible = document.querySelector('.collapsible__action--visible');
const spanHidden = document.querySelector('.collapsible__action--hidden');

spanHidden.style.display = 'none';
let hidden = true;

const animation = content.animate(
    { height: ["0px", "auto"], overflow: ["hidden", "auto"]},
    { fill: "both"}
  );

button.addEventListener("click", () => {
  if(hidden) {
    spanHidden.style.display = 'initial';
    spanVisible.style.display = 'none';
    hidden = false;
  }
  else {
    spanHidden.style.display = 'none';
    spanVisible.style.display = 'initial';
    hidden = true;
  }
  (animation.playState === "paused") ? animation.play() : animation.reverse();
}
)