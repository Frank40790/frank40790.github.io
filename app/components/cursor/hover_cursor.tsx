export function handleMouseEnter(
  iconClass: string,
  type: string,
  size: string
) {
  const element = document.querySelector(".cursor");
  const icon: any = document.querySelector(iconClass);

  if (element) {
    element.classList.add(size);
    element.classList.add(type);
  }

  if (icon) {
    icon.style.display = "block";
  }
}

export function handleMouseLeave(
  iconClass: string,
  type: string,
  size: string
) {
  const element = document.querySelector(".cursor");
  const icon: any = document.querySelector(iconClass);

  if (element) {
    element.classList.remove(size);
    element.classList.remove(type);
  }

  if (icon) {
    icon.style.display = "none";
  }
}

export function typingEnter() {
  const element = document.querySelector(".cursor");
  if (element) {
    element.classList.add("typing");
  }
}

export function typingLeave() {
  const element = document.querySelector(".cursor");
  if (element) {
    element.classList.remove("typing");
  }
}
