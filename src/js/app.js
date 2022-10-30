import { MobileMenu } from "./modules/MobileMenu";

document.querySelector('#menu-bar').addEventListener('click', () => {
  MobileMenu.init();
})