import { app, BrowserWindow, ipcMain, screen } from "electron";
import path from "path";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  // console.log((width * 2) / 3, (height * 9) / 10);
  const mainWindow = new BrowserWindow({
    width: Math.floor((width * 7) / 8),
    height: Math.floor((height * 9) / 10),
    webPreferences: {
      webSecurity: false,
      contextIsolation: true,
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
    );
  }

  mainWindow.setMenuBarVisibility(false);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  ipcMain.handle("init-file-info", () => {
    let data = null;

    // For Windows
    if (process.platform == "win32" && process.argv.length >= 2) {
      let openFilePath = process.argv[1];
      data = openFilePath;
    }

    // For macOS and Linux
    else if (
      (process.platform === "darwin" || process.platform === "linux") &&
      process.argv.length >= 2
    ) {
      let openFilePath = process.argv[1];
      // Check if the file path is not an Electron flag (e.g., --no-sandbox)
      if (!openFilePath.startsWith("--")) {
        data = openFilePath;
      }
    }

    return data;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
