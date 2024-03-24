const information = document.getElementById('info')
information.innerText = `This app uses Chrome version: (v${versions.chrome()}), Node: (v${versions.node()}) and Electron (v${versions.electron()})`