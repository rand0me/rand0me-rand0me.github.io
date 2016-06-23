import './styles/app';
import motd from './app/motd';

let body = document.querySelector('body');

motd();
body.html = '<h1>Test</h1>';