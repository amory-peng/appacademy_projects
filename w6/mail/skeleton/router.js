class Router {
  constructor(node, routes) {
    this.node = node;
    this.routes = routes;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", ()=>this.render());
  }

  render() {
    this.node.innerHTML = '';
    const route = this.activeRoute();
    console.log(route);
    if (route === undefined) {
      this.node.innerHTML = "";
    } else {
      this.node.innerHTML = "";
      this.node.appendChild(route.render());
    }

    // const newNode = document.createElement('p');
    // newNode.innerHTML = route;
    // this.node.appendChild(newNode);
  }

  activeRoute() {
    const out = window.location.hash;
    console.log(this.routes);
    return this.routes[out.slice(1)];
  }
}

module.exports = Router;
