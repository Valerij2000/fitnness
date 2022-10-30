export class MobileMenu {
  static init() {
    this.mobileHandler();
  }

  static mobileHandler() {
    document.querySelector("#menu-bar").classList.toggle("change");
    document.querySelector("#nav").classList.toggle("change");
    document.querySelector("#menu-bg").classList.toggle("change-bg");
  }
}