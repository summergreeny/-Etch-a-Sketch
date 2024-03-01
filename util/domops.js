const appendEleChild = (parent, child) => {
  child.filter((c) => c instanceof Node).forEach((c) => parent.appendChild(c));
};

const createEle = ({
  type,
  id = null,
  classes = null,
  innerHTML = null,
  event = null,
  attributes = null,
}) => {
  console.log("createEle called");
  let newEle = document.createElement(type);
  if (id != null) {
    newEle.id = id;
  }
  if (classes != null && classes.length) {
    classes.forEach((c) => {
      newEle.classList.add(c);
    });
  }
  if (innerHTML != null) {
    newEle.innerHTML = innerHTML;
  }
  if (event != null) {
    for (let e in event) {
      console.log("Adding event listener", e);
      newEle.addEventListener(e, event[e]);
    }
  }
  if (attributes != null) {
    for (let attr in attributes) {
      newEle.setAttribute(attr, attributes[attr]);
    }
  }

  return newEle;
};

export { appendEleChild, createEle };
