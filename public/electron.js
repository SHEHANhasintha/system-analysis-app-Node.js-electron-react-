const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const isDev = require("electron-is-dev");

const os  = require('os');
const osu = require('node-os-utils');

let mainWindow;

/*require("update-electron-app")({
  repo: "kitze/react-electron-example",
  updateInterval: "1 hour"
});
*/


let platform = os.platform();



function createWindow() {
  mainWindow = new BrowserWindow({ 
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true
    }
   });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  
  mainWindow.on("closed", () => (mainWindow = null));
}



app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});



