class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container-fluid jumbotron">
        <h1>Selamat Datang di Resto RasaMangan</h1>
    </div>
      `;
  }
}

customElements.define('custom-jumbotron', Jumbotron);
