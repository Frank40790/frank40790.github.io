export function handleMouseEnter(iconClass: string, type: string) {
  const element = document.querySelector(".cursor");
  const icon: any = document.querySelector(iconClass);

  if (element) {
    element.classList.add("enlarged");
    element.classList.add(type);
  }

  if (icon) {
    icon.style.display = "block";
  }
}

export function handleMouseLeave(iconClass: string, type: string) {
  const element = document.querySelector(".cursor");
  const icon: any = document.querySelector(iconClass);

  if (element) {
    element.classList.remove("enlarged");
    element.classList.remove(type);
  }

  if (icon) {
    icon.style.display = "none";
  }
}
